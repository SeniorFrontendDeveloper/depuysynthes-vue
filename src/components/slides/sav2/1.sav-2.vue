<template>
  <section class="h-full">
    <!-- content div -->
    <div class="flex flex-col h-full">
      <!-- header -->
      <div class="flex justify-between p-3">
        <p class="pl-3 text-4xl font-bold font-JnJ text-blue-1">
          Your procedure spend and saving opportunities
        </p>
        <div class="flex justify-between">
          <img
            class="h-12"
            src="@/assets/logo/jnj_dollar.png"
          >

          <p class="text-base font-bold text-center text-blue-900">
            <span class="block pl-2">SAV</span>2
          </p>
        </div>
      </div>

      <!-- Place holder body -->
      <div
        v-if="slideData.dataFromCustomerExcellenceTeam == ''"
        class="flex items-center justify-start flex-1 mt-5 ml-10"
      >
        <div class="h-10 w-52">
          <img
            class="object-cover w-full h-full"
            src="@/assets/images/left_panel_indicator_arrow.svg"
            alt="LeftPanelIndicator"
          >
        </div>
        <p class="inline-block ml-3 text-xl font-bold leading-10 align-text-bottom mt-7">
          Select the answer on left pannel to move forward
        </p>
      </div>

      <!-- Content Body -->
      <div
        v-if="slideData.dataFromCustomerExcellenceTeam == 'yes'"
        class="flex items-center justify-start flex-1 mt-1 ml-2 mr-3 border-4 border-slidColor-3"
      >
        <div class="flex justify-center flex-1 gap-10">
          <div
            class="flex items-center justify-center flex-1 ml-20 font-bold bg-white border-2 border-gray-800 cursor-pointer h-90 h-100 rounded-xl"
            :class="{'border-dashed':!slideData.summaryOfProcedureAnalysis}"
          >
            <img
              v-if="slideData.summaryOfProcedureAnalysis"
              :src="`${slideData.summaryOfProcedureAnalysis}`"
              class="object-contain w-full h-90"
            >
            <p v-else>
              Summary of Procedure analysis
            </p>
          </div>
          <div
            class="flex items-center justify-center flex-1 mr-20 font-bold bg-white border-2 border-gray-800 cursor-pointer h-90 rounded-xl"
            :class="{'border-dashed':!slideData.vendorsShare}"
          >
            <img
              v-if="slideData.vendorsShare"
              :src="`${slideData.vendorsShare}`"
              class="object-contain w-full h-90"
            >
            <p v-else>
              Vendors share
            </p>
          </div>
        </div>
      </div>
      <!-- Footer -->
      <slideFooter
        class="mt-auto"
        :show-third-party-trade-mark="true"
      />
    </div>
  </section>
</template>

<script>
import slideFooter from '../slideFooter.vue';

export default{
  components: { slideFooter },
  props: {
    slideData:{
      type: Object,
      required: true,
    }
  }
}
</script>
