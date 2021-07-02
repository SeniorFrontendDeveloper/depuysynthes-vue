<template>
  <div class="flex py-7 px-8 flex-col items-start">
    <h1 class="text-header-jnj text-primary pb-5">
      Scan Existing Contract Landscape
    </h1>
    <h1 class="text-subheader">
      Scan and Record The Contract Landscape
    </h1>
    <contract-table :contract="contract" />

    <h1 class="text-subheader pt-9">
      Is price available as alever at this time with this customer
    </h1>
    <div class="flex space-x-10 py-4">
      <div class="flex items-center space-x-2">
        <input
          id="yesPriceAvailable"
          name="priceAvailable"
          class="radio-input"
          checked
          type="radio"
        >
        <label
          for="yesPriceAvailable"
          class="text-normal text-gray-450"
        >Yes </label>
      </div>
      <div class="flex items-center space-x-2">
        <input
          id="priceNotAvailable"
          name="priceAvailable"
          class="radio-input"
          type="radio"
        >
        <label
          for="priceNotAvailable"
          class="text-normal text-gray-450"
        >No </label>
      </div>
    </div>    
    <h1 class="text-subheader pt-4">
      Create case in SFDC
    </h1>
    <h1 class="text-sm font-light font-JnJ py-1">
      Enter your SFDC case number. Put (Gladiator) inname of of the case for tracking purposes.
    </h1>
    <input
      placeholder="Type Something here ..."
      class="w-1/3 border p-4 rounded-md h-14 my-1"
    >
    <div class="flex space-x-6 items-start pt-4">
      <div class="flex flex-col">
        <h1 class="text-subheader">
          Build roster of the customer in SDFC (List of hospitals under this contract)
        </h1>
        <h1 class="text-sm font-light font-JnJ py-1">
          Refer to slide 2 of the Deal Analytics Guide
        </h1>
      </div>
      <input
        id="buildRoster"
        type="checkbox"
        class="w-5 h-5 border-2 border-gray-450"
      >
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
import ContractTable from './ContractTable.vue';
export default {
  components:{
    ContractTable
    
  },
  setup() {
    const store = useStore();

    const currentRfp = store.getters['rfps/getCurrentRfp']

    const contract = computed(()=> currentRfp.contract)
    return {
      contract
    };
  },
};
</script>

