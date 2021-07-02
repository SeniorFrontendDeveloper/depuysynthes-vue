<template>
  <section class="h-full relative">
    <div class="flex flex-col h-full">
      <div class="flex justify-between p-3">
        <p
          class="text-4xl font-bold font-JnJ text-slidColor-1 pl-3"
        >
          Broad Portfolio Investment in Innovation
        </p>
        <div class="flex justify-between">
          <img
            class="h-12"
            src="@/assets/jnjIcons/plan.png"
          >
          <p class="text-base font-bold text-blue-900">
            <span class="block pl-2">PORT</span>4
          </p>
        </div>
      </div>
      <div class="flex">
        <p
          class="text-left text-2xl text-gray-600 p-3 pl-7"
        >
          Expanding the industry’s most comprehensive trauma portfolio through external investment and internal collaboration
        </p>
      </div>
      <div class="h-full grid grid-cols-3 gap-x-4 pt-4">
        <div class="col-span-1 pl-6">
          <p
            class="text-center text-white text-3xl"
            style="background-color:#1e22aa;"
          >
            Acquisitions
          </p>
          <img
            class="w-40 p-2 mx-auto"
            src="@/assets/images/bme.png"
          >
          <img
            class="w-40 p-2 mx-auto"
            src="@/assets/images/Ouroboros.jpg"
          >
          <img
            class="w-40 p-2 mx-auto"
            src="@/assets/images/TRS.png"
          >
          <img
            class="w-40 p-2 mx-auto"
            src="@/assets/images/megadyne.png"
          >
        </div>
        <div class="col-span-1">
          <p
            class="text-center text-white text-3xl"
            style="background-color:#1e22aa;"
          >
            Alliances
          </p>
          <img
            class="w-40 p-2 mx-auto"
            src="@/assets/images/Pacira.jpg"
          >
          <div
            class="pl-28"
          >
            <p
              class="col-span-1 float-left text-lg"
            >
              *
            </p>
            <img
              class="w-40 p-2  col-span-1"
              src="@/assets/images/lifeNet.png"
            >
          </div>
          <img
            class="w-40 p-2 mx-auto"
            src="@/assets/images/MTF.png"
          >
          <img
            class="w-40 p-2 mx-auto"
            src="@/assets/images/materialise.png"
          >
          <img
            class="w-40 p-2 mx-auto"
            src="@/assets/images/caresense.png"
          >
          <img
            class="w-40 p-2 mx-auto"
            src="@/assets/images/Prosidyan.png"
          >
          <img
            class="w-40 p-2 mx-auto"
            src="@/assets/images/BrainLab.png"
          >
        </div>
        <div class="col-span-1 pr-6">
          <p
            class="text-center text-white text-3xl"
            style="background-color:#1e22aa;"
          >
            Cross-Collaboration
          </p>
          <img
            class="w-40 p-2 mx-auto"
            src="@/assets/images/Ethicon.png"
          >
          <img
            class="w-40 p-2 mx-auto"
            src="@/assets/images/Orthovisc.jpg"
          >
          <img
            class="w-40 p-2 mx-auto"
            src="@/assets/images/monovisc.jpg"
          >
        </div>
      </div>
      <slideFooter
        class="mb-0 mt-auto absolute bottom-0 w-full z-30"
        :show-third-party-trade-mark="true"
        :main-texts="[
          '*This is a registered trademark of LifeNet Health.',
          'The third party trademarks used herein are the trademarks of their respective owners.'
        ]"
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
.circle-link {
  @apply absolute shadow-2xl rounded-full items-center justify-center bg-white flex flex-col p-2;
}
.circle-link:hover {
  @apply border-8 border-accent-blue size-bordered-circle;
}
.circle-link:not(:hover) {
  @apply h-28 w-28;
}
.circle-link p {
  @apply text-sm w-full my-auto;
  line-height: 1.1;
}
.circle-link .top-img {
  /* @apply absolute left-8 inset-y-2; */
  @apply mx-auto mt-1 h-3/5;
}
.size-bordered-circle {
  height: calc(7rem + 8px + 8px);
  width: calc(7rem + 8px + 8px);
}
</style>
