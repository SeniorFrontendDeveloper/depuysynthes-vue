<template>
  <div class="flex py-7 px-8 flex-col items-start">
    <h1 class="text-header-jnj text-primary">
      Pull the Internal Team Together
    </h1>
    <h1 class="text-subheader py-5">
      Select the customer tier
    </h1>
    <div class="flex space-x-5">
      <div class="flex items-center space-x-2">
        <input
          id="tier1-3"
          name="tier"
          class="radio-input checked:bg-primary"
          checked
          type="radio"
        >
        <label
          for="tier1-3"
          class="text-normal text-gray-450"
        >Tier 1-3 </label>
      </div>
      <div class="flex items-center space-x-2">
        <input
          id="tier1-3"
          name="tier"

          class="radio-input"
          type="radio"
        >
        <label
          for="tier4"
          class="text-normal text-gray-450"
        >Tier 4 </label>
      </div>
    </div>
    <h1 class="text-subheader py-8">
      Internal team
    </h1>
    <internal-team-table :team-data="internalTeam" />
    <dp-button
      text="+ Add more"
      class="py-4 border border-dashed w-1/2 rounded-md font-medium text-gray-800 mt-6"
    />
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
import InternalTeamTable from "./InternalTeamTable.vue"
import DpButton from '../buttons/DpButton.vue';
export default {
  components:{
    InternalTeamTable,
    DpButton
  },
  setup() {
    const store = useStore();

    const currentRfp = store.getters['rfps/getCurrentRfp']

    const internalTeam = computed(()=> currentRfp.internalTeam)
    return {
      internalTeam
    };
  },
};
</script>

