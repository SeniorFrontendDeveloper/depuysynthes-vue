<template>
  <div class="px-2 pt-3 text-left">
    <div class="flex items-center justify-between mt-6">
      <h3 class="text-sm font-bold text-red-700">
        Images
      </h3>
    </div>
    <div class="mt-4">
      <p class="text-sm leading-none text-gray-800 font-book">
        Lorem Impusm
      </p>
      <div class="flex w-48 mt-5 h-28 items">
        <label
          class="flex flex-col items-center w-40 tracking-wide border-2 border-dashed rounded-lg cursor-pointer"
          :class="summaryOfProcedureAnalysis ? '' : 'px-14 py-6'"
        >
          <input
            id="procedure_analysis"
            ref="imgInput"
            class="hidden"
            type="file"
            accept="image/*"
            data-model="summaryOfProcedureAnalysis"
            name="procedure_analysis"
            @input="pickFile($event)"
          >
          <p
            v-show="!summaryOfProcedureAnalysis"
            class="text-5xl tracking-wide text-gray-500"
          >+</p>
          <img
            v-show="summaryOfProcedureAnalysis"
            :src="`${summaryOfProcedureAnalysis}`"
            class="object-contain w-full h-24 rounded-lg"
          >
        </label>
      </div>
    </div>
  </div>
</template>
<script>

import sav23SlideDefault from '@/data/slideContent/sav23Slide';

export default {
  data(){
    return  {
      ...sav23SlideDefault
    }
  },
  watch:{
    'summaryOfProcedureAnalysis' : {
      handler(val){
        this.$store.commit("sav23/setSummaryOfProcedureAnalysis",val);
      },
      deep:true,
      immediate:false
    },
  },
  methods: {
    pickFile (e){
      const files = e.target.files;
      const model = e.target.dataset.model;

      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this[model] = e.target.result;
        };
        reader.readAsDataURL(files[0]);
      }
    }
  }
};
</script>
