<template>
  <div class="grid grid-cols-3 justify-center px-3 py-6">
    <div class="col-span-3 md:col-span-1 flex flex-col justify-between items-center">
      <img
        class="h-72"
        src="@/assets/images/slides/slide-template.png"
        alt="template"
      >
      <div class="flex flex-col items-center">
        <span class="text-gray-450 text-xl">Template 1</span>
        <h1 class="text-3xxl font-JnJ space-x-6 mb-6 text-center">
          Title + Sub title
        </h1>
      </div>

      <button class="py-3 px-16 text-white bg-secondary text-sm font-semibold rounded-lg">
        See in Full Preview
      </button>
    </div>
    <div class="col-span-3 md:col-span-1 flex flex-col justify-between items-center">
      <img
        class="h-72"
        src="@/assets/images/slides/slide-template.png"
        alt="template"
      >
      <div class="flex flex-col items-center">
        <span class="text-gray-450 text-xl">Template 2</span>
        <h1 class="text-3xxl font-JnJ space-x-6 mb-6 text-center">
          Title + Image
        </h1>
      </div>

      <button class="py-3 px-16 text-white bg-secondary text-sm font-semibold rounded-lg">
        See in Full Preview
      </button>
    </div>
    <div class="col-span-3 md:col-span-1 flex flex-col justify-between items-center">
      <img
        class="h-72"
        src="@/assets/images/slides/slide-template.png"
        alt="template"
      >
      <div class="flex flex-col items-center">
        <span class="text-gray-450 text-xl">Template 3</span>
        <h1 class="text-3xxl font-JnJ space-x-6 mb-6 text-center">
          Title + Sub text + Image
        </h1>
      </div>

      <button class="py-3 px-16 text-white bg-secondary text-sm font-semibold rounded-lg">
        See in Full Preview
      </button>
    </div>
  </div>
  <div class="flex justify-end p-6">
    <dp-button
      text="Next"
      class="py-2 px-12 text-white bg-secondary text-xs font-bold"
      @click="next()"
    />
  </div>
</template>
<script>
import DpButton from "@/components/buttons/DpButton.vue";
export default {
  components: { DpButton },
  emits: ["nextStep"],
  setup(props, {emit}) {
    const next = () => {
      emit("nextStep");
    };

    return { next };
  },
};
</script>
