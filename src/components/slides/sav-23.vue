<template>
  <section class="h-full">
    <div class="flex flex-col h-full py-12 px-16">
      <div class="flex justify-between pb-6">
        <p class="pl-4 text-4xl font-bold font-JnJ text-blue-1">
          Performance Rebates or NBI's
        </p>
        <div class="flex justify-between absolute top-0 right-0 m-4">
          <img
            class="h-12"
            src="@/assets/logo/jnj_dollar.png"
          >
          <p class="text-base font-bold text-center text-blue-900">
            <span class="block pl-2">SAV</span>23
          </p>
        </div>
      </div>
      <div class="p-4 border-red-800 border-4">
        <div
          class="flex items-center justify-center flex-1 font-bold bg-white border-2 border-gray-800 cursor-pointer  hight rounded-xl"
          :class="{'border-dashed':!slide.summaryOfProcedureAnalysis}"
        >
          <img
            v-if="slide.summaryOfProcedureAnalysis"
            :src="`${slide.summaryOfProcedureAnalysis}`"
            class="object-contain w-full imgHeight"
          >
          <p v-else>
            Lorem Impusm
          </p>
        </div>
      </div>
      <slideFooter
        class="mt-auto"
        :show-third-party-trade-mark="true"
      />
    </div>
  </section>
</template>
<script>

import slideFooter from './slideFooter.vue';

export default{
  components: { slideFooter },
  props: {
    slide:{
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
  .hight{
    height: 470px;
  }
  .imgHeight{
    height: 468px;
  }
</style>
