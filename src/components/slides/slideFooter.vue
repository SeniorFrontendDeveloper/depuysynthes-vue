<template>
  <footer class="flex px-1 pt-2 pb-1 mt-auto mb-0 text-gray-500 font-Arial">
    <div class="flex w-22">
      <img
        class="object-scale-down mx-3 mt-auto mb-0 w-22"
        src="@/assets/logo/logo_rgb.png"
        alt="Workflow"
      >
    </div>
    <p class="flex-grow h-full my-auto text-xs text-center">
      <span
        v-for="mainText in mainTexts"
        :key="mainText"
      >
        {{ mainText }}<br>
      </span>
      @ DePuy Synthes 2020. All rights reserved. 144492-200623 DSUS
      <span v-show="showThirdPartyTradeMark"><br>
        The third party trademarks used herein are the trademarks of their respective owners.
      </span>
    </p>
    <div class="w-22" />
  </footer>
</template>

<script>
export default {
  props: {
    mainTexts: {
      type: Array,
      default: () => []
    },
    showThirdPartyTradeMark : {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss" scoped>
.reveal img {
  margin-top: auto;
  margin-bottom: auto;
}
</style>
