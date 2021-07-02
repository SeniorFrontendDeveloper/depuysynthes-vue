<template>
  <page-wrapper title="Published Linkss">
    <base-card class="p-4 rounded-2xl">
      <div class="flex flex-col w-full space-y-5">
        <div class="flex justify-between items-center">
          <div class="flex">
            <h1 class="text-header-jnj text-primary">
              Published Links
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
        <published-links-table :published-links="publishedLinks" />
      </div>
    </base-card>
  </page-wrapper>
</template>

<script>
import PageWrapper from "@/components/PageWrapper.vue";
import BaseCard from '@/components/BaseCard.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import PublishedLinksTable from '@/components/publishedLinks/PublishedLinksTable.vue';
import { useStore } from 'vuex';
import { computed, ref } from '@vue/runtime-core';

export default {
  components: {
    PageWrapper,
    BaseCard,
    SvgIcon,
    PublishedLinksTable,
  },
  setup(){
    const store = useStore()
    const searchTerm = ref('')

    const publishedLinks = computed(()=> store.getters['rfps/getPublishedLinks'])

    return {
      publishedLinks,
      searchTerm,
    }
  }
};
</script>
