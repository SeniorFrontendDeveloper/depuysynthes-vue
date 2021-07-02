<template>
  <div class="sticky top-5">
    <div
      class="relative px-3 py-3 overflow-y-auto bg-white builder__sidebar"
    >
      <div
        class="flex items-center justify-between pb-2 text-left border-b"
      >
        <div>
          <h3 class="text-base font-medium text-green-900">
            Information
          </h3>
          <span class="text-sm text-gray-500">Slide 1 : Introduction</span>
        </div>
        <div class="flex">
          <SvgIcon
            class="w-4 h-4 mr-2"
            name="arrow-up"
          />
          <SvgIcon
            class="w-4 h-4"
            name="arrow-down"
          />
        </div>
      </div>
      <div class="px-2 pt-3 text-left">
        <div class="flex justify-between items-center">
          <h3 class="text-red-700 font-bold text-sm">
            Insert
          </h3>
        </div>
        <div class="mt-4">
          <p class="text-sm">
            Title
          </p>
          <div class="flex items-center border">
            <input
              v-model="customSlide.title"
              class="rounded mb-0 py-2 px-2 focus:outline-none text-sm w-full text-grey-darker"
              placeholder="Type here"
            >
          </div>
        </div>
        <div class="mt-4">
          <p class="text-sm">
            Subtitle
          </p>
          <div class="flex items-center border">
            <textarea
              v-model="customSlide.subTitle"
              class="rounded mb-0 py-2 px-2 focus:outline-none text-sm w-full text-grey-darker"
              placeholder="Type here"
            />
          </div>
        </div>
        <hr>
        <div class="flex justify-between items-center mt-6">
          <h3 class="text-red-700 font-bold text-sm">
            Images
          </h3>
        </div>
        <div class="flex flex-wrap mt-4">
          <div class="mr-5 mt-2">
            <p class="text-sm leading-none text-gray-800 font-book mb-3">
              Image
            </p>
            <label
              class="flex flex-col justify-center items-center w-38 h-21 tracking-wide border-2 border-dashed rounded-lg cursor-pointer"
              :class="customSlide.image1 ? '' : 'px-14 py-6'"
            >
              <input
                id="procedure_analysis"
                ref="imgInput"
                class="hidden"
                type="file"
                accept="image/*"
                data-model="customSlide.image1"
                name="procedure_analysis"
                @input="pickFile($event, 1)"
              >
              <p
                v-show="!customSlide.image1"
                class="text-5xl tracking-wide text-gray-500"
              >+</p>
              <img
                v-show="customSlide.image1"
                :src="`${customSlide.image1}`"
                class="object-contain w-full h-21 rounded-lg"
              >
            </label>
          </div>
          <div class="mr-5 mt-2">
            <p class="text-sm leading-none text-gray-800 font-book mb-3">
              Image
            </p>
            <label
              class="flex flex-col justify-center items-center w-38 h-21 tracking-wide border-2 border-dashed rounded-lg cursor-pointer"
              :class="customSlide.image2 ? '' : 'px-14 py-6'"
            >
              <input
                id="procedure_analysis"
                ref="imgInput"
                class="hidden"
                type="file"
                accept="image/*"
                data-model="customSlide.image2"
                name="procedure_analysis"
                @input="pickFile($event, 2)"
              >
              <p
                v-show="!customSlide.image2"
                class="text-5xl tracking-wide text-gray-500"
              >+</p>
              <img
                v-show="customSlide.image2"
                :src="`${customSlide.image2}`"
                class="object-contain w-full h-21 rounded-lg"
              >
            </label>
          </div>
          <div class="mr-5 mt-2">
            <p class="text-sm leading-none text-gray-800 font-book mb-3">
              Image
            </p>
            <label
              class="flex flex-col justify-center items-center w-38 h-21 tracking-wide border-2 border-dashed rounded-lg cursor-pointer"
              :class="customSlide.image3 ? '' : 'px-14 py-6'"
            >
              <input
                id="procedure_analysis"
                ref="imgInput"
                class="hidden"
                type="file"
                accept="image/*"
                data-model="customSlide.image3"
                name="procedure_analysis"
                @input="pickFile($event, 3)"
              >
              <p
                v-show="!customSlide.image3"
                class="text-5xl tracking-wide text-gray-500"
              >+</p>
              <img
                v-show="customSlide.image3"
                :src="`${customSlide.image3}`"
                class="object-contain w-full h-21 rounded-lg"
              >
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapMutations } from 'vuex';

export default {
  data(){
    return  {
      customSlide: {
        title: "",
        subTitle: "",
        position: 1,
        image1: "",
        image2: "",
        image3: ""
      },
    }
  },
  watch: {
    customSlide: {
      handler(val) {
        this.setCustomSlide(val);
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    ...mapMutations({ setCustomSlide: "customSlide/setCustomSlide" }),

    pickFile (e, number){
      const files = e.target.files;

      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          switch(number) {
          case 1:
            this.customSlide.image1 = e.target.result;
            break;
          case 2:
            this.customSlide.image2 = e.target.result;
            break;
          case 3:
            this.customSlide.image3 = e.target.result;
          }
        };
        reader.readAsDataURL(files[0]);
      }
    }
  }
}
</script>

<style scoped>
.builder__sidebar {
  /* height: 90vh; */
}
.builder__sidebar::-webkit-scrollbar {
  width: 5px;
  border-radius: 2px;
}
</style>
