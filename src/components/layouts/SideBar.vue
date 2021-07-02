<template>
  <!-- Sidebar -->
  <nav class="w-64">
    <app-icon />

    <menu-section :section-data="menuItems.mainSection" />

    <menu-section :section-data="menuItems.helpSection" />
  </nav>
</template>
<script>
import MenuSection from "./MenuSection.vue";
import appIcon from "./appIcon.vue";
import menuItems from "@/data/menu.json";

export default {
  components: {
    MenuSection,
    appIcon,
  },

  data() {
    return {
      menuItems: menuItems,
    };
  },
};
</script>
<style lang="postcss" scoped>
.side-nav {
  width: 16em;
  min-width: 16em !important;
}
</style>
