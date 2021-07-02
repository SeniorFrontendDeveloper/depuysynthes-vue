<template>
  <div class="sticky top-5">
    <div
      class="relative px-3 py-3 overflow-y-auto bg-white builder__sidebar rounded-2xl"
    >
      <div
        class="flex items-center justify-between pb-2 text-left border-b builder__sidebar__header"
      >
        <div>
          <h3 class="text-base font-medium text-green-900">
            Information
          </h3>
          <span class="text-sm text-gray-500">Slide 1 : Introduction</span>
        </div>
        <div class="flex">
          <SvgIcon
            class="w-4 h-4 mr-2"
            name="arrow-up"
          />
          <SvgIcon
            class="w-4 h-4"
            name="arrow-down"
          />
        </div>
      </div>
      <introSlideBuilder
        v-if="slideId === 'intro'"
      />
      <surgeonPlanBuilder
        v-else-if="slideId === 'surgeonPlan'"
      />
      <savingsSummaryBuilder
        v-else-if="slideId === 'savingsSummary'"
      />
      <sav10Builder
        v-else-if="slideId === 'reusableSystem'"
      />
      <sav12Builder
        v-else-if="slideId === 'fragmentSystem'"
      />
      <industryFieldBuilder
        v-else-if="slideId === 'industryField'"
      />
      <sav23Builder 
        v-else-if="slideId === 'rebate'"
      />
      <trainingPlanBuilder
        v-else-if="slideId === 'trainingPlan'"
      />
      <sav-2-builder v-else-if="slideId === 'sav-2'" />
    </div>
  </div>
</template>

<script>
import industryFieldBuilder from "@/components/builder/sidebars/industryFieldBuilder.vue";
import introSlideBuilder from "@/components/builder/sidebars/introSlideBuilder.vue";
import surgeonPlanBuilder from "@/components/builder/sidebars/surgeonPlanBuilder.vue";
import sav10Builder from "@/components/builder/sidebars/sav10SlideBuilder.vue";
import sav12Builder from "@/components/builder/sidebars/sav12SlideBuilder.vue";
import savingsSummaryBuilder from "@/components/builder/sidebars/savingsSummaryBuilder.vue";
import trainingPlanBuilder from "@/components/builder/sidebars/trainingPlanBuilder.vue";
import sav2Builder from "@/components/builder/sidebars/sav2SlideBuilder.vue";
import sav23Builder from "@/components/builder/sidebars/sav23SlideBuilder.vue";
export default {
  components: {
    introSlideBuilder,
    surgeonPlanBuilder,
    savingsSummaryBuilder,
    trainingPlanBuilder,
    sav2Builder,
    sav23Builder,
    industryFieldBuilder,
    sav10Builder,
    sav12Builder
  },
  computed: {
    slideId () {
      return this.$route.params.slideId
    },
  },
}
</script>

<style scoped>
.builder__sidebar {
  height: 90vh;
}
.builder__sidebar::-webkit-scrollbar {
  width: 5px;
  border-radius: 2px;
}
</style>
