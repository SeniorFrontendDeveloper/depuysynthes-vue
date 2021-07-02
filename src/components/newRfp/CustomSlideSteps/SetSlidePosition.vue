<template>
  <div class="px-9 py-3">
    <div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-x-8 mb-3">
      <div class="bg-gradient-to-r from-primary-grad-from-light to-primary-grad-to-light font-bold font-Arial text-base text-gray-850 border border-accent-purple px-7 py-4">
        {{ selectedSlide.position }}. {{ selectedSlide.title }}
      </div>
    </div>
    <section
      v-for="category in overviewSlides"
      :key="category.groupTitle"
    >
      <h5 class="font-bold font-Arial text-lg text-primary">
        {{ category.groupTitle }}
      </h5>
      <div
        class="
              mt-3
              grid
              xl:grid-cols-4
              lg:grid-cols-3
              sm:grid-cols-2
              xs:grid-cols-1
              gap-x-8
            "
      >
        <div
          v-for="slide in category.slides"
          :key="slide.slideNumber"
          class="font-bold font-Arial text-base text-gray-850 border-t border-gray-100 px-7 py-4"
        >
          {{ slide.overviewTitle || slide.slideTitle }}
        </div>
      </div>
    </section>
  </div>
  <div class="flex justify-end p-6">
    <dp-button
      text="Save"
      class="py-2 px-12 text-white bg-secondary text-xs font-bold"
      @click="save()"
    />
  </div>
</template>
<script>
import DpButton from "@/components/buttons/DpButton.vue";
import overviewSlides from "@/data/overviewSlides.js";
export default {
  components: {
    DpButton
  },
  props: {
    selectedSlide: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      overviewSlides
    }
  },
  methods: {
    save() {

    },
  }
};
</script>
