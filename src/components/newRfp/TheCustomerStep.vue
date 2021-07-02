<template>
  <div class="flex py-7 px-8 flex-col items-start">
    <h1 class="text-header-jnj text-primary pb-6">
      Map Stakeholders at the Customer
    </h1>

    <stakeholders-table :stake-holders="stakeHolders" />
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
import StakeholdersTable from './StakeholdersTable.vue';
export default {
  components:{
    StakeholdersTable
  },
  setup() {
    const store = useStore();

    const currentRfp = store.getters['rfps/getCurrentRfp']

    const stakeHolders = computed(()=> currentRfp.stakeHolders)
    return {
      stakeHolders
    };
  },
};
</script>

