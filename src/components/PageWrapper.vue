<template>
  <div class="flex flex-col px-10 py-4 space-y-5">
    <div class="flex">
      <h1 class="text-header-jnj">
        {{ title }}
      </h1>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {type:String, required:true}
  },
};
</script>
