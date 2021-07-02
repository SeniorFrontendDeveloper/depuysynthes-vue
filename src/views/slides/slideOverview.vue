<template>
  <section
    id="slide_overview"
    class="border-8 modal-bg overflow-y-auto h-screen"
  >
    <div class="container mx-auto relative pl-5 pr-5 pb-20">
      <div class="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-0">
        <div class="mt-4 relative inline-flex wm-280">
          <button
            class="rounded-xl bg-gray-450 h-10 w-10 flex items-center justify-center absolute -top-4 right-0 m-4 hover:border-gray-500"
          >
            <SvgIcon
              class="w-6 h-6"
              name="slideSearch"
            />
          </button>
          <input
            v-model="searchString"
            type="search"
            placeholder="Search for slides"
            class="border text-black border-gray-300 placeholder-black rounded-xl h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
          >
        </div>
        <button
          class="h-10 w-20 flex items-center justify-center absolute right-4 m-4"
          @click="gotoExist()"
        >
          close
          <SvgIcon
            class="w-6 h-6 ml-1"
            name="closeBorder"
          />
        </button>
      </div>
      <overviewSlideCategory
        v-for="slideCategory in overviewSlides"
        :key="slideCategory.groupTitle"
        :group-title="slideCategory.groupTitle"
        :img-src="slideCategory.imgSrc"
        :slides="slideCategory.slides"
        :searched-slide-i-ds="searchedSlideIDs"
        class="mt-16"
      />
    </div>
  </section>
</template>

<script>
import overviewSlideCategory from "@/components/slides/overview/overviewSlideCategory.vue";
import overviewSlides from "@/data/overviewSlides.js";

export default {
  components: { overviewSlideCategory },
  data() {
    return { searchString: "", overviewSlides };
  },
  computed: {
    searchedSlideIDs () {
      const slides = overviewSlides.reduce((merged, slideCategory) => merged.concat(
        slideCategory.slides.map(slide => ({slideCategory, ...slide}))
      ), [])

      const searchString = this.searchString.toUpperCase()

      const searchedSlides = slides.filter(slide =>
        this.searchString && (
          slide.slideTitle?.toUpperCase().includes(searchString) ||
          slide.overviewTitle?.toUpperCase().includes(searchString) ||
          slide.slideCategory.groupTitle.toUpperCase().includes(searchString)
        ))
      const searchedSlideIDs = searchedSlides.map(slide => slide.slideNumber)
      return searchedSlideIDs
    },
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.navigateToSlide();
      }
    });
  },
  unmounted() {
    document.removeEventListener("keydown", this.navigateToSlide());
  },
  methods: {
    gotoExist() {
      this.navigateToSlide();
    },
    navigateToSlide() {
      this.$router.push({
        name: "slide",
        hash: `#/${this.$route.params.slideId}`,
        params: {
          presentationId: 'presentation1',
        },
      });
    },
  },
};
</script>

<style lang="postcss">
  .wm-280 {
    max-width: 280px;
    width: 280px;
  }
  .modal-bg {
    background: #3B3C46;
  }
  .modal-bg * {
    color: #FFF;
  }
  .modal-bg .text-black {
    color: #000!important;
  }
  .border-accent-yellow {
    @apply border-yellow-500;
  }
</style>
