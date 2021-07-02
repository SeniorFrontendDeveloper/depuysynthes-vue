<template>
  <section class="h-full overflow-y-auto">
    <div class="flex flex-col border p-2">
      <p class="text-slidColor-1 text-4xl font-bold font-JnJ text-left">
        {{ header }}
      </p>

      <div class="ml-16 flex text-xs text-gray-425 justify-between pb-2">
        <div
          v-for="(cal, index) in calender"
          :key="index"
          class="text-center"
        >
          <p
            v-if="diffDays>30"
            class="font-bold"
            style="margin-bottom: 5px !important;"
          >
            {{ cal.month }}
          </p>
          <p
            class="font-bold"
            style="margin: 0!important;"
          >
            {{ cal.date }}
          </p>
          <p
            class="capitalize"
            style="margin: 5px!important;"
          >
            {{ cal.week }}
          </p>
        </div>
      </div>
    </div>
    <div
      ref="content"
      class="flex flex-col text-xs divide-y border mb-1"
    >
      <div class="flex">
        <div class="flex items-center border-l-2 border-r-2">
          <div class="w-0 h-16 border-2 border-yellow-200" />

          <div
            class="flex items-center justify-center text-gray-1 h-28 w-14 transform rotate-90"
          >
            <p class="overflow-clip">
              {{ timelines[0].title }}
            </p>
          </div>
        </div>
        <div class="flex">
          <div
            class="relative"
            :style="{ left: calcWidth(minDate, timelines[0].startDate) + 'px' }"
          >
            <SvgArrow
              :width="calcWidth(timelines[0].startDate, timelines[0].endDate)"
              :name="timelines[0].label"
              color="#FFC542"
            />

            <div
              v-for="(milestone, index) in timelines[0].milestones"
              :key="index"
              class="absolute has-tooltip z-10"
              :style="{ left: calcLeft(timelines[0].startDate, milestone.date) + 'px' }"
            >
              <span
                class="tooltip rounded shadow-lg p-1 bg-black text-white mt-6 text-xs whitespace-nowrap"
              >{{ milestone.title }}</span>
              <div
                class="absolute rounded-sm w-4 h-4 bg-yellow-500 transform rotate-45"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex items-center border-l-2 border-r-2">
          <div class="w-0 h-16 border-2 border-purple-400" />

          <div
            class="flex items-center text-gray-1 h-28 w-14 transform rotate-90 justify-center"
          >
            <p class="overflow-clip">
              {{ timelines[1].title }}
            </p>
          </div>
        </div>
        <div class="flex">
          <div
            class="relative"
            :style="{ left: calcWidth(minDate, timelines[1].startDate) + 'px' }"
          >
            <SvgArrow
              :width="calcWidth(timelines[1].startDate, timelines[1].endDate)"
              :name="timelines[1].label"
              color="#A461D8"
            />

            <div
              v-for="(milestone, index) in timelines[1].milestones"
              :key="index"
              class="absolute has-tooltip z-10"
              :style="{ left: calcLeft(timelines[1].startDate, milestone.date) + 'px' }"
            >
              <span
                class="tooltip rounded shadow-lg p-1 bg-black text-white mt-6 text-xs whitespace-nowrap"
              >{{ milestone.title }}</span>
              <div
                class="absolute rounded-sm w-4 h-4 bg-purple-800 transform rotate-45"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex items-center border-l-2 border-r-2">
          <div class="w-0 h-16 border-2 border-pink-400" />

          <div
            class="flex items-center text-gray-1 h-28 w-14 transform rotate-90 justify-center text-center"
          >
            <p style="margin-top: 5px;">
              {{ timelines[2].title }}
            </p>
          </div>
        </div>
        <div class="flex">
          <div
            class="relative"
            :style="{ left: calcWidth(minDate, timelines[2].startDate) + 'px' }"
          >
            <SvgArrow
              :width="calcWidth(timelines[2].startDate, timelines[2].endDate)"
              :name="timelines[2].label"
              color="#FF9AD5"
            />

            <div
              v-for="(milestone, index) in timelines[2].milestones"
              :key="index"
              class="absolute has-tooltip z-10"
              :style="{ left: calcLeft(timelines[2].startDate, milestone.date) + 'px' }"
            >
              <span
                class="tooltip rounded shadow-lg p-1 bg-black text-white mt-6 text-xs whitespace-nowrap"
              >{{ milestone.title }}</span>
              <div
                class="absolute rounded-sm w-4 h-4 bg-pink-500 transform rotate-45"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex items-center border-l-2 border-r-2">
          <div class="w-0 h-16 border-2 border-green-400" />

          <div
            class="flex items-center text-gray-1 h-28 w-14 transform rotate-90 justify-center"
          >
            <p>{{ timelines[3].title }}</p>
          </div>
        </div>
        <div class="flex">
          <div
            class="relative"
            :style="{ left: calcWidth(minDate, timelines[3].startDate) + 'px' }"
          >
            <SvgArrow
              :width="calcWidth(timelines[3].startDate, timelines[3].endDate)"
              :name="timelines[3].label"
              color="#82C43C"
            />

            <div
              v-for="(milestone, index) in timelines[3].milestones"
              :key="index"
              class="absolute has-tooltip z-10"
              :style="{ left: calcLeft(timelines[3].startDate, milestone.date) + 'px' }"
            >
              <span
                class="tooltip rounded shadow-lg p-1 bg-black text-white mt-6 text-xs whitespace-nowrap"
              >{{ milestone.title }}</span>
              <div
                class="rounded-sm w-4 h-4 bg-green-700 transform rotate-45"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex items-center border-l-2 border-r-2">
          <div class="w-0 h-16 border-2 border-blue-400" />

          <div
            class="flex items-center text-gray-1 h-28 w-14 transform rotate-90 justify-center"
          >
            <p>{{ timelines[4].title }}</p>
          </div>
        </div>
        <div class="flex">
          <div
            class="relative"
            :style="{ left: calcWidth(minDate, timelines[4].startDate) + 'px' }"
          >
            <SvgArrow
              :width="calcWidth(timelines[4].startDate, timelines[4].endDate)"
              :name="timelines[4].label"
              color="#50B5FF"
            />

            <div
              v-for="(milestone, index) in timelines[4].milestones"
              :key="index"
              class="absolute has-tooltip z-10"
              :style="{ left: calcLeft(timelines[4].startDate, milestone.date) + 'px' }"
            >
              <span
                class="tooltip rounded shadow-lg p-1 bg-black text-white mt-6 text-xs whitespace-nowrap"
              >{{ milestone.title }}</span>
              <div class="rounded-sm w-4 h-4 bg-blue-700 transform rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <slide-footer />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import slideFooter from "./slideFooter.vue";
import SvgArrow from "@/components/SvgArrow.vue";

export default {
  components: { slideFooter, SvgArrow },
  data() {
    return {
      calender: [],
      contentWidth: 0,
      minDate: null,
      diffDays: 0,
      invertalCount: 0,
      invertal: 1
    }
  },
  computed: {
    ...mapGetters({
      header: "trainingPlan/header",
      timelines: "trainingPlan/timelines",
    }),
  },
  watch: {
    timelines: {
      handler() {
        this.getContentWidth();
        this.getDateRange();
      },
      deep: true,
      immediate: false,
    },
    $route () {
      this.getContentWidth();
    },
  },
  mounted() {
    this.getContentWidth();
    this.getDateRange();
  },
  methods: {
    getDateRange() {
      const startDates = this.timelines.map(timeline => timeline.startDate).sort();
      const endDates = this.timelines.map(timeline => timeline.endDate).sort().reverse();
      const minDate = startDates[0];
      const maxDate = endDates[0];
      this.minDate = minDate;
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sa'];
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Decr"];
      this.diffDays = this.getDiffDays(minDate, maxDate);
      if (this.diffDays < 20) {
        this.invertalCount = this.diffDays;
      } else if (this.diffDays < 30) {
        this.invertal = 2;
        this.invertalCount = parseInt(this.diffDays / this.invertal) + 1;
      } else {
        this.invertal = parseInt(this.diffDays / 15);
        this.invertalCount = parseInt(this.diffDays / this.invertal) + 1;
      }
      let calender = [];
      for (var i = 0; i <= this.invertalCount; i++) {
        var d = new Date(minDate);
        d.setDate(d.getDate() + i * this.invertal);
        calender.push({
          month: monthNames[d.getMonth()],
          week: days[d.getDay()],
          date: d.getDate()
        });
      }
      this.calender = calender;
    },
    getContentWidth() {
      let nIntervId
      nIntervId = setInterval(() => {
        if (this.$refs.content) this.contentWidth = this.$refs.content.clientWidth - 80;
        if (this.contentWidth > 0 && nIntervId) clearInterval(nIntervId);
      }, 500);
    },
    calcWidth(startDate, endDate) {
      return ((this.getDiffDays(startDate, endDate) / this.invertal) + 0.5) * this.contentWidth / (this.invertalCount + 1);
    },
    calcLeft(startDate, endDate) {
      return (this.getDiffDays(startDate, endDate) / this.invertal) * this.contentWidth / (this.invertalCount + 1);
    },
    getDiffDays(startDate, endDate) {
      const date1 = new Date(startDate);
      const date2 = new Date(endDate);
      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    },
  },
};
</script>

<style lang="postcss">
.tooltip {
  @apply invisible absolute;
}
.has-tooltip {
  top: 80px;
}
.has-tooltip:hover .tooltip {
  @apply visible z-50;
}
.has-tooltip:hover .transform.rotate-45 {
  background-color: black;
}
.transform.rotate-90 p{
  margin: 20px 0;
}
</style>
