<template>
  <section class="h-full">
    <div class="flex flex-col h-full">
      <div class="flex justify-between p-3">
        <p
          class="text-4xl font-bold font-JnJ text-slidColor-1 pl-3"
        >
          DePuy Synthes Trauma | Product Portfolio
        </p>
        <div class="flex justify-between">
          <img
            class="h-12"
            src="@/assets/jnjIcons/plan.png"
          >
          <p class="text-base font-bold text-blue-900 text-center">
            <span class="block pl-2">APPD</span>1
          </p>
        </div>
      </div>
      <div class="pl-6">
        <p class="text-2xl text-left font-bold font-JnJ text-red-600">
          Ready for Anything
        </p>
      </div>
      <div class="grid grid-cols-12">
        <div class="col-span-5">
          <img
            class="h-128"
            src="@/assets/images/skele.png"
          >
        </div>
        <div class="block col-span-4 relative">
          <img
            class="h-full absolute z-10"
            src="@/assets/images/gray_scale.png"
          >
          <p
            class="text-center top-28 w-full absolute font-Arial text-white  p-3 z-30"
            style="background-color:#1e22aa;"
          >
            UPPER EXTREMITY
          </p>
          <p
            class="text-center top-48  w-full relative font-Arial text-white  p-3 z-30"
            style="background-color:#1e22aa;"
          >
            HIP &amp; FEMUR
          </p>
          <p
            class="text-center w-full top-60 relative font-Arial text-white  p-3 z-30"
            style="background-color:#1e22aa;"
          >
            LOWER EXTREMITY
          </p>
          <p
            class="text-center top-72 w-full font-Arial relative  text-white  p-3 z-30"
            style="background-color:#1e22aa;"
          >
            FOOT &amp; ANKLE
          </p>
        </div>
        <div class="col-span-3" />
      </div>
      <slideFooter
        class="mt-auto"
        :show-third-party-trade-mark="true"
      />
    </div>
  </section>
</template>

<script>
import slideFooter from "./slideFooter.vue";

export default {
  components: { slideFooter },
};
</script>

<style lang="postcss" scoped>
.chart-line-bottom {
  border-bottom: 2px solid rgba(156, 163, 175);
}
.chart-line-top {
  border-top: 2px solid rgba(156, 163, 175);
}
.point {
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}
.point-red {
  border-bottom: 20px solid rgba(220, 38, 38);
}
.point-black {
  border-bottom: 20px solid rgba(99, 102, 106);
}
.point-grey {
  border-bottom: 20px solid rgba(136, 139, 141);
}
.point-lightgrey {
  border-top: 20px solid rgba(156, 163, 175);
}
.legend-container {
  @apply px-3 py-1 border-2 rounded-lg border-white text-left text-white;
}
.bar-container {
  @apply p-3 mt-auto text-right text-white;
}
</style>
