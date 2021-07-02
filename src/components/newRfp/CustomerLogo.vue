<template>
  <div class="flex flex-col items-start">
    <h1 class="pb-6 text-base font-bold leading-none text-gray-500">
      Customer Logo
    </h1>
    <label
      class="flex flex-col items-center rounded-lg tracking-wide cursor-pointer border-dashed border-2 w-40"
      :class="logo ? '' : 'px-14 py-6'"
    >
      <h1
        v-show="!logo"
        class="text-6xl"
      >+</h1>
      <span
        v-show="!logo"
        class="mt-2 leading-normal"
      >Upload Logo</span>
      <input
        id="logo_upload"
        ref="imgInput"
        class="hidden"
        type="file"
        accept="image/*"
        name="logo_upload"
        @input="pickFile($event.target.files)"
      >
      <img
        v-show="logo"
        :src="`${logo}`"
        class="rounded-lg w-40 h-24 object-cover"
      >
    </label>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import customer_logo_prefill from "@/assets/logo/customer_logo.png";

export default {
  setup() {
    const logo = ref();
    logo.value = customer_logo_prefill
    const pickFile = (files) => {
      if (files && files[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          logo.value = e.target.result;
        };
        reader.readAsDataURL(files[0]);
      }
    };

    return { logo, pickFile };
  },
};
</script>
