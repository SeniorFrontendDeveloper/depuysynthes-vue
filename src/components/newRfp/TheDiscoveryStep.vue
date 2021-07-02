<template>
  <div class="flex py-7 px-8 flex-col items-start">
    <h1 class="text-header-jnj text-primary pb-6">
      Collect Reconnaissance and Discover Customer Problem to Be Solved
    </h1>
    <discovery-table :discoveries="discoveries" />
    <h1 class="text-subheader pt-9">
      Discover customer problem to be solved:
    </h1>
    <h1 class="text-sm font-light font-JnJ py-1">
      Customer Problem to be solved
    </h1>
    <textarea
      placeholder="Type Something here ..."
      class="w-2/3 border p-4 rounded-md h-32 my-1"
    />
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
import DiscoveryTable from './DiscoveryTable.vue';
export default {
  components:{
    DiscoveryTable
  },
  setup() {
    const store = useStore();

    const currentRfp = store.getters['rfps/getCurrentRfp']

    const discoveries = computed(()=> currentRfp.discoveries)
    return {
      discoveries
    };
  },
};
</script>

