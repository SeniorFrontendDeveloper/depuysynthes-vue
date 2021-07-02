<template>
  <div class="flex items-center">
    <span class="text-gray-850 font-JnJ text-2xl font-medium mr-4">{{ step }}/3</span>
    <div class="flex items-center">
      <div class="rounded-full w-7 h-7 bg-secondary" />
      <div
        class="w-8 h-0.5"
        :class="{
          'bg-gray-350': step < 2,
          'bg-secondary': step >= 2,
        }"
      />
      <div
        class="rounded-full w-7 h-7 bg-gray-350"
        :class="{
          'bg-gray-350': step < 2,
          'bg-secondary': step >= 2,
        }"
      />
      <div
        class="bg-gray-350 w-8 h-0.5"
        :class="{
          'bg-gray-350': step < 3,
          'bg-secondary': step >= 3,
        }"
      />
      <div
        class="rounded-full w-7 h-7 bg-gray-350"
        :class="{
          'bg-gray-350': step < 3,
          'bg-secondary': step >= 3,
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      required: true
    }
  },
  data() {
    console.log("total step:; ", this.totalSteps)
  }
};
</script>
<style >
.dp-button-loading {
  border-top-color: #3498db;
}
</style>


