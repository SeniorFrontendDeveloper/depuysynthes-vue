<template>
  <div>
    <div class="flex py-3">
      <h1 class="text-header-jnj">
        Templates
      </h1>
    </div>
    <base-card
      class="flex-col text-left border-none"
      card-style="px-0 bg-white rounded-xl"
    >
      <div class="bg-gray-50 px-5 py-1">
        <h1 class="font-medium text-sm text-gray-450">
          Recently Used
        </h1>
      </div>
      <template-item
        v-for="(template, index) in recentTemplates"
        :key="index"
        :template="template"
        :class="{ 'border-b': index < recentTemplates.length - 1 }"
      />
      <div class="bg-gray-50 px-5 py-1">
        <h1 class="font-medium text-sm text-gray-450">
          Favorite
        </h1>
      </div>
      <template-item
        v-for="(temp, index) in favorites"
        :key="index"
        :template="temp"
        :class="{ 'border-b': index < favorites.length - 1 }"
      />
    </base-card>
  </div>
</template>
<script>
import BaseCard from "@/components/BaseCard.vue";
import TemplateItem from "@/components/dashboard/TemplateItem.vue";
import templates from "@/data/templates.json";
import { computed } from "@vue/runtime-core";
export default {
  components: {
    BaseCard,
    TemplateItem,
  },

  setup() {
    const recentTemplates = computed(() => [templates[0], templates[1]]);
    const favorites = computed(() => templates.filter((temp) => temp.favorite));

    return {
      recentTemplates,
      favorites,
    };
  },
};
</script>
