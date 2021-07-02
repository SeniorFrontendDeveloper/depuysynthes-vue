<template>
  <section class="h-full slide-1-container">
    <!-- content div -->
    <div class="flex flex-col h-full">
      <div class="flex-grow p-6">
        <div
          class="mt-40 pt-8 text-left overflow-ellipsis overflow-hidden text-6xl text-slidColor-header font-bold"
        >
          {{ introSlide.title }}
        </div>
        <!-- company logo goes here -->
        <div class="flex-row-reverse flex w-full">
          <img
            v-if="introSlide.logo"
            class="object-contain my-auto h-40"
            :src="introSlide.logo"
            alt="Workflow"
          >
        </div>
        <!-- eslint-disable vue/multiline-html-element-content-newline -->
        <p
          class="text-left h-24 flex flex-col place-items-start text-base space-y-1 text-slidColor-1 whitespace-pre-wrap"
        >
          {{ introSlide.subTitle }}
        </p>
      </div>
      <slideFooter
        class="mt-auto"
        :main-texts="['The information in this document is confidential and proprietary to Johnson & Johnson and is intended only for the use of the persons to whom this document is addressed.',
                      'This document should not be disclosed to any other person without prior written consent from Johnson & Johnson.'
        ]"
      />
    </div>
  </section>
</template>

<script>
import slideFooter from "./slideFooter.vue";

export default {
  components: { slideFooter },
  props: {
    introSlide: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
td,
th {
  border-style: hidden !important;
}
.slide-1-container {
  background: url('@/assets/images/slides/slide1-backup.PNG') no-repeat center center;
  background-size: contain;
  background-position: top;
}
</style>
