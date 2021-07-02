<template>
  <section class="h-full">
    <div class="flex flex-col h-full">
      <slideHeader
        title="Johnson &amp; Johnson Institute Future Leaders"
        class="pl-6"
        sav-number="2"
        icon="edu"
        name="EDU"
      />
      <div class="flex justify-between">
        <p class="text-2xl text-left text-gray-500 pl-6">
          Online Learning Program
        </p>
        <img
          class="h-24"
          src="@/assets/images/jnj_institue.png"
        >
      </div>
      <div
        class="grid grid-cols-2 gap-8"
      >
        <div class="col-span-1 pl-6">
          <img
            class="h-full w-full"
            src="@/assets/images/knowledge.png"
          >
        </div>
        <div class="relative col-span-1">
          <p class="text-left text-3xl text-gray-600 pr-24">
            The Johnson &amp; Johnson Institute   Future Leaders Online Learning Program provides anywhere, anytime educational opportunities in a variety of clinical topics.
          </p>
          <p class="absolute bottom-16 font-bold text-center text-3xl text-gray-800 pl-60">
            Website
          </p>
          <p
            class="absolute bottom-0 text-center text-3xl text-red-500 underline pl-2"
            style="color:#f30617;"
          >
            <a href="HTTPS://COURSES.JNJINSTITUTE.COM">HTTPS://COURSES.JNJINSTITUTE.COM</a>
          </p>
        </div>
        <p class="absolute  bottom-8 text-xs text-left text-gray-600 pl-6">
          The professional education objective of training is to support the safe and effective use of company products in target procedures and techniques in accordance with the IFU.
        </p>
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
