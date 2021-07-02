<template>
  <div class="flex space-x-7 py-4 mx-9">
    <div class="flex-col flex-grow space-y-3">
      <h1 class="text-lg font-bold">
        {{ template.templateName }}
      </h1>
      <div class="flex space-x-2 items-center">
        <SvgIcon
          class="h-5 w-5 text-gray-450"
          name="presentation"
        />
        <h1 class="text-lg font-bold text-gray-450">
          08
        </h1>
      </div>
    </div>
    <div class="flex items-center space-x-4">
      <SvgIcon
        v-if="template.favorite"
        class="h-8 w-9"
        name="favorite"
      />
      <SvgIcon
        v-else
        class="h-8 w-9"
        name="star"
      />

      <dp-button
        class="bg-white text-accent-blue py-2 border-accent-blue border-2 rounded-lg"
        text="Start RFP"
      />
      <div class="p-3 bg-gray-50 rounded-lg">
        <SvgIcon
          class="h-5 w-1"
          name="moreVertical"
        />
      </div>
    </div>
  </div>
</template>
<script>
import DpButton from "@/components/buttons/DpButton.vue";

export default {
  components: {
    DpButton,
  },
  props: {
    template: {type:Object, required:true}
  },
};
</script>
