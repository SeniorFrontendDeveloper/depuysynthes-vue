<template>
  <section class="h-full">
    <div class="flex flex-col h-full">
      <slideHeader
        title="Savings Summary"
        :sav-number="24"
        class="ml-6"
        name="SAV"
        icon="sav"
      />
      <div class="flex mt-5 font-Arial">
        <table class="border-4 text-left text-sm text-white w-1/2 ml-5 mr-12 my-auto">
          <thead class="">
            <tr class="bg-blue-700">
              <th class="table-data-border">
                Procedure Savings
              </th>
              <th class="text-right">
                Savings
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-row-data-border">
              <td class="bg-gray-800 table-data-border">
                Price savings from standardization*
              </td>
              <td class="bg-gray-400 font-bold text-right">
                {{
                  commaNumbers(
                    getSavingSummaryData[
                      "price savings from standardization*"
                    ] || getSavingSummaryData["standardization"]
                  )
                }}
              </td>
            </tr>
            <tr class="table-row-data-border">
              <td class="bg-gray-800 table-data-border">
                Price savings from new price offer
              </td>
              <td class="bg-gray-400 font-bold text-right">
                {{
                  commaNumbers(
                    getSavingSummaryData[
                      "price savings from new price offer"
                    ] || getSavingSummaryData["offer"]
                  )
                }}
              </td>
            </tr>
            <tr class="table-row-data-border">
              <td class="bg-gray-800 table-data-border">
                Savings from portofolio options
              </td>
              <td class="bg-gray-400 font-bold text-right">
                {{
                  commaNumbers(
                    getSavingSummaryData["savings from portofolio options"] ||
                      getSavingSummaryData["options"]
                  )
                }}
              </td>
            </tr>
            <tr class="h-8" />
            <tr class="border-separate">
              <th class="bg-blue-700  table-data-border">
                Addtional Savings
              </th>
              <th class="bg-blue-700 text-right">
                Savings
              </th>
            </tr>
            <tr class="table-row-data-border">
              <td class="bg-gray-800 table-data-border">
                Rigid Containers
              </td>
              <td class="bg-gray-400 font-bold text-right">
                {{
                  commaNumbers(
                    getAdditionalSavingData["Rigid Containers"] ||
                      getAdditionalSavingData["rigid"]
                  )
                }}
              </td>
            </tr>
            <tr class="table-row-data-border">
              <td class="bg-gray-800 table-data-border">
                USF Conversions
              </td>
              <td class="bg-gray-400 font-bold text-right">
                {{
                  commaNumbers(
                    getAdditionalSavingData["USF Conversions"] ||
                      getAdditionalSavingData["usf"]
                  )
                }}
              </td>
            </tr>
            <tr class="table-row-data-border">
              <td class="bg-gray-800 table-data-border">
                eSIMs
              </td>
              <td class="bg-gray-400 font-bold text-right">
                {{
                  commaNumbers(
                    getAdditionalSavingData["eSIMs"] ||
                      getAdditionalSavingData["esims"]
                  )
                }}
              </td>
            </tr>
            <tr class="table-row-data-border">
              <td class="bg-gray-800 table-data-border">
                Biologics
              </td>
              <td class="bg-gray-400 font-bold text-right">
                {{ commaNumbers(getAdditionalSavingData["Biologics"]) }}
              </td>
            </tr>
            <tr class="table-row-data-border">
              <td class="bg-gray-800 table-data-border">
                Power Equimpment
              </td>
              <td class="bg-gray-400 font-bold text-right">
                {{
                  commaNumbers(
                    getAdditionalSavingData["Power Equimpment"] ||
                      getAdditionalSavingData["power"]
                  )
                }}
              </td>
            </tr>
            <tr class="table-row-data-border">
              <td class="bg-gray-800 table-data-border">
                Rebate or NBI
              </td>
              <td class="bg-gray-400 font-bold text-right">
                {{ commaNumbers(getAdditionalSavingData["Rebate or NBI"]) }}
              </td>
            </tr>
            <tr class="table-row-data-border">
              <td class="bg-gray-800 table-data-border">
                Other
              </td>
              <td class="bg-gray-400 font-bold text-right">
                {{ commaNumbers(getAdditionalSavingData["Other"]) }}
              </td>
            </tr>
            <tr class="h-8" />
            <td class="bg-red-700 table-data-border">
              OVERALL SAVINGS
            </td>
            <td class="bg-gray-400 font-bold text-right">
              {{ commaNumbers(getOverAllSavings) }}
            </td>
          </tbody>
        </table>

        <img
          class="object-cover w-1/2 mr-12"
          src="@/assets/images/savings_summary_doctors.png"
          alt="Workflow"
        >
      </div>
      <p class="text-xs text-left font-thin text-gray-425 pt-2 ml-5 mb-4 mt-auto">
        * Savings shown is an estimation based on customer's Procedures. Actual
        Savings may vary depending on custoemrs's actual usasge price from
        vendors
      </p>
      <div class="mb-0 mt-4">
        <slideFooter />
      </div>
    </div>
  </section>
</template>

<script>
import slideFooter from "./slideFooter.vue";
import slideHeader from "./slideHeader.vue";

export default {
  components: { slideFooter, slideHeader },
  props: {
    savingSummary: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getSavingSummaryData() {
      return this.savingSummary.SavingSummaryData;
    },

    getAdditionalSavingData() {
      return this.savingSummary.additionalSavingData;
    },

    getOverAllSavings() {
      let total = 0;
      for (const key in this.savingSummary.SavingSummaryData) {
        total += this.savingSummary.SavingSummaryData[key] || 0;
      }
      for (const key in this.savingSummary.additionalSavingData) {
        total += this.savingSummary.additionalSavingData[key] || 0;
      }
      return total;
    },
  },
  methods: {
    commaNumbers(integer) {
      if (typeof integer !== "number" || isNaN(integer)) return "";
      const pattern = /(-?\d+)(\d{3})/;
      let string = integer.toString().trim();
      while (pattern.test(string)) string = string.replace(pattern, "$1,$2");
      return `$ ${string}.00`;
    },
  },
};
</script>

<style scoped>
td, th {
  padding: 5px;
}
.table-row-data-border {
  border-top: 2px solid #FFFFFF;
}
.table-data-border {
  border-right: 2px solid #FFFFFF;
}
</style>
