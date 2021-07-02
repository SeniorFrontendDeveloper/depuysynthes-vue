<template>
  <div class="px-2 pt-3 text-left">
    <div class="flex justify-between items-center">
      <h3 class="text-red-700 font-bold text-sm">
        Texts
      </h3>
    </div>
    <div class="mt-4">
      <p class="text-sm">
        Title
      </p>
      <div class="flex items-center border">
        <input
          v-model="introSlide.title"
          class="rounded mb-0 py-2 px-2 focus:outline-none text-sm w-full text-grey-darker"
          placeholder="Enter Title"
        >
      </div>
    </div>
    <div class="mt-4">
      <p class="text-sm">
        Subtitle
      </p>
      <div class="flex items-center border">
        <textarea
          v-model="introSlide.subTitle"
          class="rounded mb-0 py-2 px-2 focus:outline-none text-sm w-full text-grey-darker min-h-max h-32"
          placeholder="Presenter Information"
        />
      </div>
    </div>
    <hr>
    <div class="flex justify-between items-center mt-6">
      <h3 class="text-red-700 font-bold text-sm">
        Images
      </h3>
    </div>
    <div class="mt-4">
      <p class="text-sm">
        Company Logo
      </p>
      <div class="flex items-center border">
        <label
          class="flex flex-col items-center rounded-lg tracking-wide cursor-pointer border-dashed border-2 w-40"
          :class="introSlide.logo ? '' : 'px-14 py-6'"
        >
          <input
            id="logo_upload"
            ref="imgInput"
            class="hidden"
            type="file"
            accept="image/*"
            name="logo_upload"
            @input="pickFile($event.target.files)"
          >
          <img
            v-show="introSlide.logo"
            :src="`${introSlide.logo}`"
            class="rounded-lg w-40 h-24 object-cover"
          >
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import introSlideDefault from "@/data/slideContent/introSlide.js"
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      introSlide: introSlideDefault,
    };
  },
  watch: {
    introSlide: {
      handler(val) {
        this.setIntroSlide(val);
      },
      deep: true,
      immediate: false,
    },
  },
  methods: {
    ...mapMutations({ setIntroSlide: "introSlide/setIntroSlide" }),

    pickFile (files) {
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.introSlide.logo = e.target.result;
        };
        reader.readAsDataURL(files[0]);
      }
    },
  },
};
</script>

