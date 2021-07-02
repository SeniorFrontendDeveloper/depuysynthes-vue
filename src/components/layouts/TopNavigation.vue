<template>
  <div class="border-b px-4 flex justify-between items-center h-16 border-l-0">
    <!-- top bar left -->
    <app-icon
      v-if="!sideMenuShown"
      class="min-w-64"
    />

    <div class="flex items-left mr-auto space-x-2">
      <SvgIcon
        class="w-5 h-5"
        name="search"
      />

      <h1 class="text-sm text-gray-425">
        Search
      </h1>
    </div>
    <div
      v-if="isBuilder"
      class="flex"
    >
      <dp-link-button

        :to="{ name: 'dashboard' }"
        class="flex items-center text-indigo-700 py-2 px-4 mr-3 border-indigo-700 border-2 rounded-lg"
      >
        Resource
      </dp-link-button>
      <dp-link-button
        target="_blank"
        :to="{
          name: 'slide',
          hash: `#/${slideNumber}`,
          params: {
            presentationId: 'presentation1',
          },
        }"
        class="bg-accent-purple flex items-center text-white py-2 px-4 mr-3 border-accent-purple border-2 rounded-lg"
      >
        <SvgIcon
          class="w-5 h-5 mr-2"
          name="preview"
        />
        Preview
      </dp-link-button>
    </div>
    <!-- to bar right  -->
    <div
      v-else
      class="flex space-x-3 items-center pr-4 relative"
    >
      <svg-icon
        name="notification"
        class="w-5 h-6 mr-6"
      />
      <img
        class="w-8 h-8 rounded-full"
        src="https://picsum.photos/seed/picsum/200/300"
      >
      <div class="flex flex-col">
        <h1 class="text-title">
          {{ userDetail.email }}
        </h1>
        <h1 class="text-normal text-gray-425">
          {{ userDetail.phone_number }}
        </h1>
      </div>
      <svg-icon
        name="dropdownTriangle"
        class="w-4 h-5 cursor-pointer"
        @click="showMenu = !showMenu"
      />
      <div class="absolute right-0 top-11 z-50 w-full">
        <nav-menu
          v-if="showMenu"
          class="shadow-xl ml-14"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DpLinkButton from "@/components/buttons/DpLinkButton.vue";
import slideDetails from "@/data/betaSlides.json";
import NavMenu from "./NavMenu.vue"
import appIcon from "./appIcon.vue";
import SvgIcon from '../SvgIcon.vue';
import { ref } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { computed, onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  components: { appIcon, DpLinkButton, SvgIcon, NavMenu },

  setup(){
    const route = useRoute();
    const store = useStore();
    const showMenu = ref(false)
    
    
    onMounted(async () => {
      await store.dispatch('auth/userDetail')
    })

    const userDetail = computed(() => store.getters['auth/userDetail'])

    const sideMenuShown = computed(() => route.name !== "builder");
    const isBuilder = computed(() => ["create-link", "builder"].includes(route.name));
    const slideNumber = computed(() => {
      const { slideId } = route.params
      return slideId ? slideDetails.find(slide => slide.url === slideId).PreviewNum : 1
    });
    
    return{showMenu, sideMenuShown, slideNumber, isBuilder,userDetail}
  },
  
};
</script>
