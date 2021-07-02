<template>
  <section class="h-full slide-10-container">
    <div class="flex flex-col h-full pt-12 pb-16 px-44">
      <div
        class="flex items-center justify-center flex-1 font-bold bg-white border-2 border-gray-800 cursor-pointer h-96 rounded-xl"
        :class="{'border-dashed':!reusableSlide.summaryOfProcedureAnalysis}"
      >
        <img
          v-if="reusableSlide.summaryOfProcedureAnalysis"
          :src="`${reusableSlide.summaryOfProcedureAnalysis}`"
          class="object-contain w-full h-96"
        >
        <p v-else>
          Lorem Impusm
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default{
  props: {
    reusableSlide:{
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.slide-10-container {
  background: url('@/assets/images/sav10.png') no-repeat;
  background-size: contain;
}
</style>