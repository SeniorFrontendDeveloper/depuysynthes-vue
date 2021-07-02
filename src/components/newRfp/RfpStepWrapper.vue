<template>
  <base-card
    class="rounded-2xl flex flex-col max-h-screen rfp-container"
    card-style="bg-white pt-7"
  >
    <h1 class="px-2 mx-6 font-JnJ font-medium text-2xl text-gray-850">
      Step {{ step }} | {{ title }}
    </h1>
    <div class="flex flex-col overflow-y-auto pb-7">
      <slot />
    </div>
    <footer
      class="flex justify-between px-9 py-3 items-center"
      style="box-shadow: 0px -1px 8px #ECECF2;"
    >
      <dp-button
        text="Previous"
        :disabled="step === 1"
        class="py-4 px-14 text-white bg-secondary h-btn-builder min-h-btn-builder my-auto"
        @click="previous"
      />
      <h1>
        <span class="text-2xl font-black tracking-widest text-indigo-800">{{ step }}/</span>
        <span class="text-lg font-bold text-gray-500">6</span>
      </h1>
      <div class="flex">
        <dp-button
          v-if="step !== 6"
          text="Skip To Slides"
          class="bordered-dp-button px-3 mr-2 border rounded-xl border-red-700 font-bold text-center text-red-700"
          @click="next(6)"
        />
        <dp-button
          text="Next"
          class="py-4 px-14 text-white bg-secondary h-btn-builder min-h-btn-builder my-auto rounded-xl"
          @click="next()"
        />
      </div>
    </footer>
  </base-card>
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";
import DpButton from "@/components/buttons/DpButton.vue";
import { computed } from "@vue/reactivity";
import { useRouter, useRoute } from "vue-router";

const TOTAL_STEPS = 6;
export default {
  components: {
    BaseCard,
    DpButton,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const currentStep = computed(() =>  Number(route.params.step) || 1);

    const titles = {
      1: "Customer Information",
      2: "The Team",
      3: "The Customer",
      4: "The Discovery",
      5: "The Contract",
      6: "Slide Selection",
    }
    const title = computed(() => titles[currentStep.value])

    const next = (step) => {
      if (currentStep.value < TOTAL_STEPS) {
        router.push({
          name: "update-rfp",
          params: {
            presentationId: "presentation1",
            step: step || currentStep.value + 1,
          },
        });
      } else if (currentStep.value === TOTAL_STEPS) {
        router.push({
          name: "builder",
          params: {
            presentationId: "presentation1",
            slideId: "intro",
          },
        });
      }
    };

    const previous = () => {
      if (currentStep.value > 1) {
        router.push({
          name: "update-rfp",
          params: {
            presentationId: "presentation1",
            step: currentStep.value - 1,
          },
        });
      }
    };

    return { step: currentStep, next, previous, title };
  },
};
</script>

<style lang="postcss">
.bordered-dp-button {
  padding-top: calc(1rem - 1px);
  padding-bottom: calc(1rem - 1px);
}
.rfp-container {
  max-height: calc(100vh - 12.5rem);
}
</style>
