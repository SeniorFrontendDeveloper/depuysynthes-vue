<template>
  <section class="h-full overflow-y-auto">
    <div class="font-medium text-xs text-slidColor-2 p-3">
      <div class="w-full">
        <div
          class="flex w-full mt-2"
        >
          <p class="text-4xl font-bold capitalize font-JnJ ml-0 mr-auto text-slidColor-1 text-left">
            Breakdown of your current trauma business
          </p>
          <div class="flex border border-gray-300 rounded-xl text-sm">
            <label
              class="my-auto pl-1 min-w-max"
              for="sort-select"
            >Sort by:</label>
            <select
              id="sort-select"
              v-model="SortBy"
              class="text-gray-600 h-10 w-max -mr-7 pr-9 pl-1 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            >
              <option :value="undefined" />
              <option>Name</option>
              <option>Marketshare</option>
            </select>
            <div class="flex p-1 border border-l-0 border-gray-300 rounded-xl rounded-l-none">
              <SvgIcon
                class="w-2 h-2 m-auto"
                name="dropDownArrow"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full">
        <p class="w-1/2 text-left">
          Total current available trauma business in hospital
        </p>
        <p class="w-1/2 pl-6 text-left">
          Future Depuy Synthes trauma business
        </p>
      </div>
    </div>
    <table class="grid grid-cols font-thin text-xs text-slidColor-3 p-4 pt-0">
      <thead>
        <tr class="grid grid-cols-6 gap-10">
          <th>Business in hospital</th>
          <th>For Depuy Synthes</th>
          <th>Market Share</th>
          <th>Future Business</th>
          <th>Market share</th>
          <th />
        </tr>
        <tr class="grid grid-cols-6 gap-10 font-bold text-2xl">
          <th class="text-slideTableHeaderColor pr-2">
            ${{
              commaNumbers(
                surgeonPlan["Total available trauma business in hospital"]
              )
            }}
          </th>
          <th class="text-accent-blue">
            ${{ commaNumbers(total.CurrentEstimate) }}
          </th>
          <th class="text-accent-blue">
            {{ total.MarketShare.toFixed(2) }}%
          </th>
          <th class="text-green-variant1">
            ${{ commaNumbers(total.FutureEstimate) }}
          </th>
          <th class="text-green-variant1">
            {{ total.OutsideMarketShare }}%
          </th>
          <th />
        </tr>
      </thead>
      <tbody
        v-if="!showModal"
        class="font-bold text-base"
      >
        <SurgeonPlanRow
          v-for="(doctor, index) in doctors"
          :key="index"
          :doctor="doctor"
        />
      </tbody>
    </table>
    <div class="flex justify-end">
      <SurgeonPlanModal
        v-if="showModal"
        class="relative z-20"
        :overview-content="overviewContent"
        @close="showModal = false"
      >
        <template #body />
      </SurgeonPlanModal>

      <button
        v-if="!showModal"
        class="rounded-full h-24 w-24 flex items-center justify-center bg-secondary"
        @click="showModal = true"
      >
        <p
          id="show-modal"
          class="font-bold text-base text-white"
        >
          Overview
        </p>
      </button>
    </div>
    <slide-footer />
  </section>
</template>

<script>
import SurgeonPlanRow from "./SurgeonPlanRow.vue";
import SurgeonPlanModal from "./surgeonPlanModal.vue";
import slideFooter from "./slideFooter.vue";

export default {
  components: { SurgeonPlanRow, SurgeonPlanModal, slideFooter },
  props: {
    surgeonPlan: {
      type: Object,
      required: true,
    },

    overviewContent: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      SortBy: null,
      showModal: false,
    };
  },
  computed: {
    doctors() {
      const docs = this.surgeonPlan.doctors.map(doctor => ({
        ...doctor,
        "Estimated current estimate % of business with Depuy Synthes":
          (doctor["Estimated current estimate $ of business with Depuy Synthes"] /
          (doctor ["Estimated current estimate $ of business with Depuy Synthes"] +
          doctor["Estimated current estimate $ of business outside Depuy Synthes"]) * 100) || 0,
        "Estimated current estimate % of business outside Depuy Synthes":
          (doctor["Estimated $ of competitor business to switch to Depuy Synthes"] /
          (doctor ["Estimated $ of competitor business to switch to Depuy Synthes"] +
          doctor["Estimated current estimate $ of business with Depuy Synthes"]) * 100) || 0,
      }));

      const sortParam =
        this.SortBy === "Name"
          ? "Doctors"
          : "Estimated current estimate % of business with Depuy Synthes";

      return this.SortBy ? docs.sort((doctor1, doctor2) => {
        if (doctor1[sortParam] > doctor2[sortParam]) {
          return 1;
        }
        if (doctor1[sortParam] < doctor2[sortParam]) {
          return -1;
        }
        return 0;
      }) : docs;
    },
    total() {
      const doctors = this.doctors;
      if (doctors.length === 0) {
        return {
          CurrentEstimate: 0,
          MarketShare: 0,
          FutureEstimate: 0,
          OutsideMarketShare: 0,
        };
      } else {
        const total = {
          CurrentEstimate: doctors.reduce(
            (totalCurrentEstimate, doctor) =>
              totalCurrentEstimate +
              doctor[
                "Estimated current estimate $ of business with Depuy Synthes"
              ],
            0
          ),
          MarketShare:
            doctors.reduce(
              (MarketShare, doctor) =>
                MarketShare +
                doctor[
                  "Estimated current estimate % of business with Depuy Synthes"
                ],
              0
            ) / doctors.length,
          FutureEstimate: doctors.reduce(
            (FutureEstimate, doctor) =>
              FutureEstimate +
              doctor[
                "Estimated $ of competitor business to switch to Depuy Synthes"
              ] + doctor[
                "Estimated current estimate $ of business with Depuy Synthes"
              ],
            0
          ),
        };
        if (isNaN(total.OutsideMarketShare)) total.OutsideMarketShare = "";
        else total.OutsideMarketShare = total.OutsideMarketShare.toFixed(2);

        total.OutsideMarketShare = (
          total.FutureEstimate /
          this.surgeonPlan["Total available trauma business in hospital"] * 100
        ).toFixed(2);

        return total;
      }
    },
  },
  methods: {
    commaNumbers(integer) {
      if (typeof integer !== "number" || isNaN(integer)) return "";
      const pattern = /(-?\d+)(\d{3})/;
      let string = integer.toString().trim();
      while (pattern.test(string)) string = string.replace(pattern, "$1,$2");
      return `${string}.00`;
    },
  },
};
</script>

<style scoped>
td,
th {
  @apply my-auto;
  border-style: hidden !important;
}
</style>
