<template>
  <div
    class="flex py-3 space-x-3 cursor-pointer pl-3 pr-2"
    :class="showDetail ? 'bg-blue-650 bg-opacity-10' : ''"
  >
    <div class="flex my-auto w-20 h-20 border rounded-xl">
      <img
        v-if="logo"
        :src="logo"
      >
    </div>
    <div
      class="flex-col flex-grow text-left space-y-1"
      @click="showDetail = !showDetail"
    >
      <h3 class="text-lg font-bold">
        {{ link.title }}
      </h3>
      <h4 class="text-sm">
        {{ link.date }}
      </h4>
      <div class="flex space-x-8">
        <div class="flex space-x-2">
          <SvgIcon
            class="h-5 w-5"
            name="attachment"
          />
          <h1 class="text-sm text-gray-425">
            {{ link.attachments }}
          </h1>
        </div>
        <div class="flex space-x-2 items-center">
          <SvgIcon
            class="h-5 w-5 text-primary"
            name="view"
          />
          <h1 class="text-sm text-gray-425">
            {{ link.seen }}
          </h1>
        </div>
      </div>
    </div>
    <div class="relative flex">
      <button
        class="p-3 h-10 bg-gray-50 rounded-lg items-center"
        @click="showMenu = !showMenu"
        @blur="delay(() => showMenu = false)"
      >
        <SvgIcon
          class="h-5 w-1"
          name="moreVertical"
        />
      </button>
      <div class="absolute right-0 top-11 z-50">
        <link-menu
          v-if="showMenu"
          class="shadow-xl"
        />
      </div>
    </div>
  </div>
  <published-link-detail
    v-if="showDetail"
    :links="link.links"
  />
</template>

<script>
import { ref } from "@vue/reactivity";
import PublishedLinkDetail from "./PublishedLinkDetail.vue";
import LinkMenu from "./LinkMenu.vue";

import MemorialHospitalLogo from "@/assets/logo/hospitals/Memorial Hospital.png";
import NCHHealthcareLogo from "@/assets/logo/hospitals/NCH Healthcare.png";
import MercyHospitalLogo from "@/assets/logo/hospitals/Mercy Hospital.png";

const logos = {
  "Memorial Hospital": MemorialHospitalLogo,
  "NCH Healthcare": NCHHealthcareLogo,
  "Mercy Hospital": MercyHospitalLogo
}

export default {
  components: {
    PublishedLinkDetail,
    LinkMenu,
  },
  props: {
    link: {
      type: Object,
      required: true
    }
  },
  setup(params) {
    const showDetail = ref(false);
    const showMenu = ref(false);
    const logo = logos[params.link.title]

    const delay = (func => setTimeout(func, 1000))

    return { showDetail, showMenu, logo, delay };
  },
};
</script>
