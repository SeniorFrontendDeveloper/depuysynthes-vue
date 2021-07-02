<template>
  <div class="flex flex-col py-4 w-full space-y-4">
    <div class="flex space-x-6 items-center">
      <img
        :src="icon"
        class="h-10 w-10 object-contain"
      >
      <h1>{{ group.groupTitle }}</h1>
    </div>
    <div class="flex w-full flex-wrap space-y-2">
      <slide-selection-item
        v-for="slide in group.slides"
        :key="slide.slideTitle"
        :slide="slide"
        class="w-1/3 md:w-1/4 xl:w-1/5 h-28 mt-auto"
      />
    </div>
  </div>
</template>

<script>
import SlideSelectionItem from "./SlideSelectionItem.vue";

import HealthCaring from "@/assets/jnjIcons/health_caring.png";
import Handshake from "@/assets/jnjIcons/handshake.png";
import MedicalProfessional from "@/assets/jnjIcons/medicalProfessional.png";
import Dollar from "@/assets/jnjIcons/dollar.png";
import Quality from "@/assets/jnjIcons/quality.png";
import Plan from "@/assets/jnjIcons/plan.png";
import Professional from "@/assets/jnjIcons/professional.png";

const SLIDE_ICONS = {
  health_caring: HealthCaring,
  handshake: Handshake,
  medicalProfessional: MedicalProfessional,
  dollar: Dollar,
  quality: Quality,
  plan: Plan,
  professional: Professional,
};

export default {
  components: { SlideSelectionItem },
  props: { group: {type:Object, required:true} },

  setup(props) {
    const icon = SLIDE_ICONS[props.group.icon];

    return { icon };
  },
};
</script>
