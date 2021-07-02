<template>
  <router-link
    :to="{
      name: 'slide',
      hash: `#/${slideNumber}`,
      params: {
        presentationId: 'presentation1',
      },
    }"
  >
    <div
      class="slide-screenshot-container bg-white hover:border-4 rounded-lg hover:border-yellow-500"
      :class="{
        'border-4 border-accent-yellow': highlight,
      }"
    >
      <img
        class="h-full rounded-lg"
        :src="imgSrc"
      >
    </div>
    <div class="mt-5 flex w-full">
      <div class="w-title">
        <h6 class="sub-title text-xs font-light">
          Slide {{ slideNumber }}
        </h6>
        <h4 class="title text-base font-medium mt-1">
          {{ title }}
        </h4>
      </div>
      <footerIcons class="w-20" />
    </div>
  </router-link>
</template>

<script>
import footerIcons from "@/components/slides/overview/footerIcons.vue";

export default {
  components: { footerIcons },
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    slideNumber: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    highlight: {
      type: Boolean,
      default: false
    },
  },
}
</script>

<style scoped lang="postcss">
.w-title {
  width: calc(100% - 5rem);
}
.w-title-icon {
  width: 5rem;
}
.hover\:border-4:hover  {
  @apply border-4;
}
.slide-screenshot-container {
  height: 10rem;
  width: calc(1280 / 720 * 10rem);
}
</style>
