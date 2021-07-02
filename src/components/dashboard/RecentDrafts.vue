<template>
  <div>
    <div class="flex py-3">
      <h1 class="text-header-jnj">
        Recent Drafts
      </h1>
    </div>
    <base-card class="flex flex-col divide-y bg-white border-none">
      <div class="flex space-x-4">
        <draft-item
          v-for="draftItem in draftItems"
          :key="draftItem.companyName"
          :draft-item="draftItem"
        />
      </div>
    </base-card>
  </div>
</template>
<script>
import BaseCard from "@/components/BaseCard.vue";
import DraftItem from "./DraftItem.vue";
import recentDrafts from "@/data/recentDrafts.json";
import { ref } from "@vue/reactivity";
export default {
  components: {
    BaseCard,
    DraftItem,
  },

  setup() {
    const draftItems = ref(recentDrafts);

    return {
      draftItems,
    };
  },
};
</script>
