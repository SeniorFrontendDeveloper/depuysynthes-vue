<template>
  <page-wrapper title="My RFPs">
    <base-card class="p-4 rounded-2xl">
      <div class="flex flex-col w-full space-y-5">
        <div class="flex justify-between items-center">
          <div class="flex">
            <h1 class="text-header-jnj text-primary">
              Drafts
            </h1>
          </div>
          <div class="flex border items-center px-4 rounded-lg space-x-2">
            <svg-icon
              class="w-5 h-5"
              name="search"
            />
            <input
              v-model="searchTerm"
              placeholder="Search Files"
              class="py-3 my-auto focus:outline-none"
            >
          </div>
        </div>
        <my-rfp-table :rfps="draftRfps" />
        <div class="flex">
          <h1 class="text-header-jnj text-primary">
            Published RFPs
          </h1>
        </div>
        <my-rfp-table :rfps="publishedRfps" />
      </div>
    </base-card>
  </page-wrapper>
</template>

<script>
import PageWrapper from "@/components/PageWrapper.vue";
import BaseCard from '@/components/BaseCard.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import { useStore } from 'vuex';
import { computed, ref } from '@vue/runtime-core';
import MyRfpTable from '@/components/myRfp/MyRfpTable.vue';

export default {
  components: {
    PageWrapper,
    BaseCard,
    SvgIcon,
    MyRfpTable,
  },
  setup(){
    const store = useStore();
    const searchTerm = ref('')

    function searchRfp (rfp) {
      const lowerSearchTerm = searchTerm.value.toLowerCase()
      return rfp.presentationName.toLowerCase().includes(lowerSearchTerm) ||
             rfp.client.clientName.toLowerCase().includes(lowerSearchTerm)
    }

    const draftRfps = computed(()=> store.getters['rfps/getDraftRfps'].filter(searchRfp))
    const publishedRfps = computed(()=> store.getters['rfps/getPublishedRfps'].filter(searchRfp))

    return {
      draftRfps,
      publishedRfps,
      searchTerm,
    }
  }
};
</script>
