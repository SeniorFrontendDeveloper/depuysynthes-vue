<template>
  <base-modal
    id="templateForm"
    title="Save template"
    :submit-function="submit"
    :close-dialog="cancel"
  >
    <div class="flex flex-col space-y-4 p-6 w-80">
      <h1 class="text-xl">
        Save Template
      </h1>
      <p class="text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
      </p>
      <h1 class="uppercase text-secondary text-xs font-semibold">
        Template Name
      </h1>
      <input
        class="border border-secondary rounded-lg py-3 text-grey-darker px-3  text-white bg-secondary"
        placeholder="Template Name"
      >
      <div class="flex justify-between pt-2">
        <dp-button
          text="Cancel"
          class="bg-white text-gray-425"
          @click="$emit('hide')"
        />
        <dp-button
          text="Save"
          class="py-2 px-12 text-white bg-secondary"
        />
      </div>
    </div>
  </base-modal>
</template>
<script>
import BaseModal from "@/components/BaseModal.vue";
import DpButton from "@/components/buttons/DpButton.vue";

export default {
  components: { BaseModal, DpButton },
  emits: ["hide"],
};
</script>
