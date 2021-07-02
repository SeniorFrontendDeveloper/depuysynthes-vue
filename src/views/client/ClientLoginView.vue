<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-white px-4"
  >
    <img
      class="h-28 my-16"
      src="@/assets/logo/logo_vrbh.png"
      alt="logo"
    >
    <h1 class="font-medium text-4xl">
      Venice Regional Bayfront Health
    </h1>
    <h1 class="w-96 text-center text-gray-425">
      Welcome to the depuy puposal link, you need to confirm your identity to
      access the link
    </h1>

    <div class="max-w-md w-full">
      <form class="flex flex-col mt-8 space-y-4">
        <label class="text-gray-500">Passcode</label>
        <input
          id="password"
          v-model="password"
          type="text"
          placeholder="Enter Passcode"
          class="border-2 py-5 px-6 border-gray-400 rounded-lg"
        >

        <router-link
          :to="{
            name: 'slide',
            params: {
              presentationId: 'presentation1',
            },
          }"
          class="flex justify-center py-3"
        >
          <dp-button
            text="Enter"
            :class="disabled ? 'opacity-50' : ''"
            class="w-1/2 py-4 capitalize bg-gradient-to-r from-primary-grad-from to-primary-grad-to font-semibold text-white"
          />
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import DpButton from "@/components/buttons/DpButton.vue";

export default {
  components: {
    DpButton,
  },
  setup() {
    const password = ref("");

    const disabled = computed(() => {
      return !(password.value.length > 0);
    });

    return { disabled, password };
  },
};
</script>
