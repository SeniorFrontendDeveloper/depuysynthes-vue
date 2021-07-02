<template>
  <base-modal
    id="templateForm"
    title="Create custom slide"
    :submit-function="submit"
    :close-dialog="cancel"
  >
    <div class="flex flex-col rounded-2xl">
      <div class="flex justify-between pt-6 pb-4 px-6">
        <h1 class="text-2xl font-bold font-JnJ text-gray-850">
          Create custom slide
        </h1>
        <button @click="$emit('hide')">
          <img
            class="w-7 h-7"
            src="@/assets/generalIcons/close.png"
            alt="close"
          >
        </button>
      </div>

      <div
        class="
          inline-block
          md:flex
          justify-between
          px-6
          py-5
          bg-gray-75
          shadow-2md
          border border-solid border-gray-200
        "
      >
        <h3 class="text-2xl font-JnJ text-blue-2 font-medium">
          {{ title }}
        </h3>
        <custom-slide-stepper
          :step="currentStep"
        />
      </div>
      <div>
        <select-slide-template
          v-if="currentStep == 1"
          @nextStep="next()"
        />
        <custom-slide-template
          v-if="currentStep == 2"
          @nextStep="next"
        />
        <set-slide-position
          v-if="currentStep == 3"
          :selected-slide="selectedSlide"
        />
        <existing-custom-slides
          v-if="currentStep == 4"
          @selectCustomSlide="selectCustomSlide"
          @nextStep="next()"
        />
      </div>
    </div>
  </base-modal>
</template>
<script>
import BaseModal from "@/components/BaseModal.vue";
import CustomSlideStepper from "@/components/stepper/CustomSlideStepper.vue";
import SelectSlideTemplate from "./CustomSlideSteps/SelectSlideTemplate.vue";
import ExistingCustomSlides from "./CustomSlideSteps/ExistingCustomSlides.vue";
import CustomSlideTemplate from "./CustomSlideSteps/CustomSlideTemplate.vue";
import SetSlidePosition from "./CustomSlideSteps/SetSlidePosition.vue";

const TOTAL_STEPS = 4;
const TITLES = {
  1: "Step 1 : Select the custome slide template",
  2: "Step 2 : Edit the custome slide template",
  3: "Step 3 : Set the position of slide on current presentation",
  4: "Step 1 : Select the custome slide",
};

export default {
  components: {
    BaseModal,
    CustomSlideStepper,
    SelectSlideTemplate,
    ExistingCustomSlides,
    CustomSlideTemplate,
    SetSlidePosition,
  },
  props: {
    type: {type: String, required:true},
  },
  emits: ["hide"],
  data() {
    return {
      currentStep: this.type === 'saved' ? 4 : 1,
      selectedSlide: null
    }
  },
  computed: {
    title() {
      return TITLES[this.currentStep];
    }
  },
  methods: {
    next(slide) {
      this.selectedSlide = slide;
      if (this.type !== 'saved' && this.currentStep < TOTAL_STEPS) {
        this.currentStep = this.currentStep + 1;
      } else if(this.type === 'saved') {
        this.currentStep = 3;
      }
    },

    selectCustomSlide(slide) {
      this.selectedSlide = slide;
      this.currentStep = 3;
    }
  },
};
</script>
