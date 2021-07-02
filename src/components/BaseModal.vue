<template>
  <div
    class="
      fixed
      z-20
      inset-0
      overflow-y-auto
    "
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-headline"
  >
    <div class="flex items-center justify-center min-h-screen">
      <div
        class="fixed inset-0 transition-opacity"
        aria-hidden="true"
      >
        <div class="absolute inset-0 bg-gray-500 opacity-75" />
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
      >&#8203;</span>
      <div
        class="
          inline-block
          bg-white
          text-left
          shadow
          transform
          transition-all
          my-8
          align-middle
          rounded-2xl
          w-5/6
          min-w-min
        "
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    closeDialog: {
      type: Function,
      required: true,
    },
  },
};
</script>
<style lang="postcss">
.modal-btn {
  @apply opacity-50 px-6 py-2 rounded-md sm:w-auto text-base sm:text-sm font-medium;
}
.modal-btn-save {
  @apply modal-btn bg-primary  text-white hover:bg-blue-900;
}
.modal-btn-cancel {
  @apply modal-btn mr-3 inline-flex justify-center border border-gray-300 shadow-sm bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
}
input {
  @apply mb-2;
}
</style>
