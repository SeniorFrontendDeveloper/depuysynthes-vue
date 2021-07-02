<template>
  <page-wrapper title="Overview">
    <div class="flex space-x-10">
      <div class="flex flex-col flex-grow space-y-4">
        <get-started />
        <recent-drafts />
        <templates />
      </div>
      <published-links class="max-w-md" />
    </div>
  </page-wrapper>
</template>

<script>
import PageWrapper from "@/components/PageWrapper.vue";
import GetStarted from "@/components/dashboard/GetStarted.vue";
import RecentDrafts from "@/components/dashboard/RecentDrafts.vue";
import Templates from "@/components/dashboard/Templates.vue";
import PublishedLinks from "@/components/dashboard/PublishedLinks.vue";

export default {
  components: {
    PageWrapper,
    GetStarted,
    RecentDrafts,
    Templates,
    PublishedLinks,
  },
};
</script>
