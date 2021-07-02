<template>
  <div class="relative min-h-screen flex">
    <side-bar v-if="showSideBar" />

    <main class="flex-1">
      <top-navigation />
      <div class="bg-gray-75 border-l min-h-screen">
        <slot />
      </div>
    </main>
  </div>
</template>

<script>
import TopNavigation from "@/components/layouts/TopNavigation.vue";
import SideBar from "@/components/layouts/SideBar.vue";

export default {
  components: {
    TopNavigation,
    SideBar,
  },
  computed: {
    title() {
      return this.$route.meta.title;
    },
    showSideBar() {
      return this.$route.name !== "builder"
    },
  },
};
</script>
