<template>
  <div
    class="flex flex-col py-5 px-4 bg-white borde-2 rounded-xl w-40 space-y-4"
  >
    <button
      class="flex items-center text-gray-425 space-x-2 cursor-pointer"
      @click="openExistingCustomSlideModal()"
    >
      <svg-icon
        name="folder"
        class="h-5 w-5"
      />
      <span class="text-sm"> Saved slide </span>
    </button>
    <button
      class="flex items-center text-gray-425 space-x-2 cursor-pointer"
      @click="openNewCustomSlideModal()"
    >
      <svg-icon
        name="edit"
        class="h-5 w-5"
      />
      <span class="text-sm"> Create Custom </span>
    </button>
  </div>
</template>
<script>
export default {
  emits: ["openNewCustomSlideModal", "openExistingCustomSlideModal"],
  setup(props, { emit }) {
    const openNewCustomSlideModal = () => {
      emit("openNewCustomSlideModal");
    };

    const openExistingCustomSlideModal = () => {
      emit("openExistingCustomSlideModal");
    };

    return { openNewCustomSlideModal, openExistingCustomSlideModal };
  }
};
</script>
