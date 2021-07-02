<template>
  <div class="flex flex-col space-y-3 rounded-md">
    <div class="flex relative ">
      <img
        class="w-80"
        :src="imgSrc"
      >
      <div
        v-if="!selected"
        class="flex items-center justify-center bg-gray-500 absolute top-0 h-full w-full bg-opacity-50 rounded-md"
      >
        <SvgIcon
          name="eyeOff"
          class="h-11 w-11"
        />
      </div>
    </div>

    <div class="flex justify-between">
      <div class="flex flex-col items-start">
        <h6>{{ slide.title }}</h6>
        <h1>{{ slide.subTitle }}</h1>
      </div>
      <div class="flex space-x-3 items-center">
        <SvgIcon
          name="view"
          class="h-5 w-5 text-gray-425 cursor-pointer"
          @click="toggle" 
        />
        <SvgIcon                                                                                                                                                                                                                                                                                                                                                                                                          
          name="moreVertical"
          class="h-5 w-1"
        />
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "@/assets/images/slides/Rectangle 210.png";
import img2 from "@/assets/images/slides/Rectangle 226.png";
import img3 from "@/assets/images/slides/Rectangle 213.png";
import img4 from "@/assets/images/slides/Rectangle 214.png";
import img5 from "@/assets/images/slides/Rectangle 211.png";
import { computed, ref, watch } from '@vue/runtime-core';


const images = {
  "Slide 1": img1,
  "Slide 2": img2,
  "Slide 3": img3,
  "Slide 4": img4,
  "Slide 5": img5,
}

export default {
  props: {
    slide:{
      type:Object,
      required:true
    },
    
  },

  emits:['toggleSelection'],

  setup(props,{emit}){

    const imgSrc = computed(() => images[props.slide.title] || img1)
    const selected = ref(true);

    const toggle= ()=> {
           
      selected.value = !selected.value
      emit('toggleSelection')
    }

    watch(
      () => props.slide,
      (newValue) => {
        selected.value = newValue.selected

      }
    );

    return {imgSrc, selected, toggle}
  }

}
</script>
