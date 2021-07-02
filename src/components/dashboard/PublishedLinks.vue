<template>
  <div class="flex-col w-5/6">
    <div class="flex pb-3">
      <h1 class="text-gray-875 text-2xl font-bold">
        Published Links
      </h1>
    </div>
    <base-card class="flex flex-col bg-white p-4 divide-y">
      <published-link-item
        v-for="publishedLink in publishedLinks"
        :key="publishedLink.title"
        :link="publishedLink"
      />
    </base-card>
  </div>
</template>
<script>
import PublishedLinkItem from "./PublishedLinkItem.vue";
import BaseCard from "@/components/BaseCard.vue";
import { useStore } from 'vuex';

export default {
  components: {
    PublishedLinkItem, BaseCard
  },
  setup () { 
    const store = useStore();
    
    return { publishedLinks: store.getters['rfps/getPublishedLinks'] } },
};
</script>
