<template>
  <div class="px-2 pt-3 text-left">
    <div class="flex items-center justify-between">
      <h3 class="text-sm font-bold text-red-700 w-80">
        Is customer usage data available from the Commercial Excellence team?
      </h3>
    </div>
    <div class="flex mt-4 space-x-4">
      <input
        id="yes"
        v-model="dataFromCustomerExcellenceTeam"
        value="yes"
        type="radio"
        class="radio-input checked:bg-primary"
      >
      <label
        for="Yes"
        class="text-nromal text-gray-450"
      >Yes</label>

      <input
        id="no"
        v-model="dataFromCustomerExcellenceTeam"
        value="no"
        type="radio"
        class="radio-input checked:bg-primary"
      >
      <label
        for="No"
        class="text-normal text-gray-450"
      >No</label>
    </div>

    <div v-if="dataFromCustomerExcellenceTeam == 'yes'">
      <div class="flex items-center justify-between mt-6">
        <h3 class="text-sm font-bold text-red-700">
          Images
        </h3>
      </div>

      <div class="mt-4">
        <p class="text-sm leading-none text-gray-800 font-book">
          Summary of procedure analysis
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

    <div v-if="dataFromCustomerExcellenceTeam == 'yes'">
      <div class="flex items-center justify-between mt-6">
        <h3 class="text-sm font-bold text-red-700">
          Images
        </h3>
      </div>

      <div class="mt-4">
        <p class="text-sm leading-none text-gray-800 font-book">
          Vendors share
        </p>
        <div class="flex w-48 mt-5 h-28 items">
          <label
            class="flex flex-col items-center w-40 tracking-wide border-2 border-dashed rounded-lg cursor-pointer"
            :class="vendorsShare ? '' : 'px-14 py-6'"
          >
            <input
              id="vendors_share"
              ref="imgInput"
              class="hidden"
              type="file"
              accept="image/*"
              data-model="vendorsShare"
              name="vendors_share"
              @input="pickFile($event)"
            >
            <p
              v-show="!vendorsShare"
              class="text-5xl tracking-wide text-gray-500"
            >+</p>
            <img
              v-show="vendorsShare"
              :src="`${vendorsShare}`"
              class="object-contain w-full h-24 rounded-lg"
            >
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import sav2SlideDefault from '@/data/slideContent/sav2Slide';

export default {
  setup() {

  },
  data(){
    return  {
      ...sav2SlideDefault
    }
  },
  watch:{
    'dataFromCustomerExcellenceTeam':{
      handler(val){
        this.$store.commit("sav2/setFromCustomerExcellenceTeam",val);
      },
      deep:true,
      immediate:false
    },
    'summaryOfProcedureAnalysis' : {
      handler(val){
        this.$store.commit("sav2/setSummaryOfProcedureAnalysis",val);
      },
      deep:true,
      immediate:false
    },
    'vendorsShare' : {
      handler(val){
        this.$store.commit("sav2/setVendorsShare",val);
      },
      deep:true,
      immediate:false
    }
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
}
</script>
