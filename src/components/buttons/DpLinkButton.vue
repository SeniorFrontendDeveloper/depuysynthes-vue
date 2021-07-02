<template>
  <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
  <router-link class="button-link">{{ text }}<slot /></router-link>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ""
    },
  },
};
</script>

<style lang="postcss">
.button-link {
  @apply py-3 px-4 rounded-xl;
}
</style>
