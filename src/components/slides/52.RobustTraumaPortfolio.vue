<template>
  <section class="h-full">
    <div class="flex flex-col h-full">
      <slideHeader
        class="pl-6"
        title="Robust Trauma Portfolio"
        sav-number="1"
        icon="plan"
        name="PORT"
      />
      <div class="flex pt-10 ">
        <img
          class="h-full w-full"
          src="@/assets/images/slide52.png"
        >
      </div>

      <slideFooter
        class="mb-0 mt-auto"
        :show-third-party-trade-mark="false"
      />
    </div>
  </section>
</template>

<script>
import slideFooter from "./slideFooter.vue";
import slideHeader from "@/components/slides/slideHeader.vue";

export default {
  components: { slideFooter, slideHeader },
};
</script>

<style lang="postcss" scoped>
.circle-link {
  @apply absolute shadow-2xl rounded-full items-center justify-center bg-white flex flex-col p-2;
}
.circle-link:hover {
  @apply border-8 border-accent-blue size-bordered-circle;
}
.circle-link:not(:hover) {
  @apply h-28 w-28;
}
.circle-link p {
  @apply text-sm w-full my-auto;
  line-height: 1.1;
}
.circle-link .top-img {
  /* @apply absolute left-8 inset-y-2; */
  @apply mx-auto mt-1 h-3/5;
}
.size-bordered-circle {
  height: calc(7rem + 8px + 8px);
  width: calc(7rem + 8px + 8px);
}
</style>
