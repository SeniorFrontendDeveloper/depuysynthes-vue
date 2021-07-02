<template>
  <div class="px-9">
    <ul id="custom-slide-list">
      <li
        v-for="slide in customSlides"
        :key="slide.position"
        class="inline-block md:flex items-center justify-between border-b-2 border-gray-75 py-3"
      >
        <div class="flex items-center">
          <img
            v-if="slide.image1 || slide.image2 || slide.image3"
            class="w-36 h-20"
            :src="`${slide.image1 || slide.image2 || slide.image3}`"
            alt="slide-image"
          >
          <div
            v-else
            class="w-36 h-20 border border-dashed border-gray-850 rounded-lg"
          />
          <span class="font-Arial font-bold text-lg text-black ml-7">{{ slide.title }}</span>
        </div>
        <div
          id="button-group"
          class="flex items-center mt-3 md:mt-0"
        >
          <dp-outline-button
            class="text-base text-secondary border-secondary py-2 mx-3"
            text="See preview"
          />
          <dp-outline-button
            class="text-base text-accent-blue border-accent-blue py-2 px-8 mx-3"
            text="Select"
            @click="selectCustomSlide(slide)"
          />
        </div>
      </li>
    </ul>
  </div>
  <div class="flex justify-end p-6">
    <dp-button
      text="Next"
      class="py-2 px-12 text-white bg-secondary text-xs font-bold"
      @click="next()"
    />
  </div>
</template>
<script>
import DpOutlineButton from '@/components/buttons/DpOutlineButton.vue';
import DpButton from "@/components/buttons/DpButton.vue";
import { mapGetters } from 'vuex';

export default {
  components: { DpOutlineButton, DpButton },
  emits: ["selectCustomSlide", "nextStep"],
  setup(props, {emit}) {
    const selectCustomSlide = (slide) => {
      emit("selectCustomSlide", slide);
    };

    const next = () => {
      emit("nextStep");
    };

    return { selectCustomSlide, next };
  },
  computed: {
    ...mapGetters({
      customSlides: "customSlide/allCustomSlides"
    })
  }
};
</script>
