<template>
  <router-link
    :to="{ name: `${item.link}` }"
  >
    <div
      class="w-40 cursor-pointer"
    >
      <div
        class="pt-6 pb-6 mx-1 text-base font-bold tab-item-active"
      >
        {{ item.title }}
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  props:{
    item: {type: String, required:true},
  },
}
</script>

<style scoped lang="postcss">
.router-link-active > div{
  @apply text-accent-blue;
}
.router-link-active .tab-item-active {
  @apply border-b-4 border-accent-blue;
}
th{
  @apply py-3 text-base font-normal font-Arial;
}
</style>
