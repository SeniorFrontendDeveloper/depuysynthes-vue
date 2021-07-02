<template>
  <section v-if="showSlideCategory">
    <div class="flex">
      <img
        class="object-scale-down h-10 mr-2"
        :src="imgSrc"
      >
      <header class="text-xl pt-2 whitespace-nowrap">
        {{ groupTitle }}
      </header>
    </div>
    <div class="mt-5 border-1 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-8">
      <overview-slide-item
        v-for="slide in searchedSlides"
        :key="slide.slideNumber"
        :img-src="slide.imgSrc"
        :slide-number="slide.slideNumber"
        :title="slide.overviewTitle || slide.slideTitle"
        :highlight="searchedSlideIDs.includes(slide.slideNumber)"
      />
    </div>
  </section>
</template>

<script>
import overviewSlideItem from "@/components/slides/overview/overviewSlideItem.vue";

export default {
  components: {
    overviewSlideItem
  },
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    groupTitle: {
      type: String,
      required: true
    },
    slides: {
      type: Object,
      required: true
    },
    searchedSlideIDs: {
      type: Array,
      required: true
    },
  },
  computed: {
    visibleSlides () {
      return this.slides.filter(slide => slide.slideNumber)
    },
    searchedSlides () {
      if (this.searchedSlideIDs.length === 0) return this.visibleSlides
      else return this.visibleSlides.filter(slide => this.searchedSlideIDs.includes(slide.slideNumber))
    },
    showSlideCategory () {
      return this.searchedSlides.length > 0
    },
  },
}
</script>
