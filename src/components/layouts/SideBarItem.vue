<template>
  <router-link
    v-slot="{ isActive }"
    class="menu-item"
    active-class="menu-item-active"
    :to="{ name: `${item.pathName}` }"
  >
    <div
      :class="isActive ? 'border-primary rounded-r-md' : 'border-white'"
      class="flex border-2"
    />
    <div class="flex py-2 items-center px-5">
      <div class="w-5 h-5">
        <SvgIcon
          class="w-5 h-5"
          :class="isActive ? 'text-primary' : 'text-gray-425'"
          :name="item.icon"
        />
      </div>

      <p class="pl-5">
        {{ item.title }}
      </p>
    </div>
  </router-link>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="postcss" scoped>
.menu-item {
  @apply flex text-gray-900 text-base;
}
.menu-item-active {
  @apply text-primary font-bold;
}
</style>
