<template>
  <tr>
    <td class="flex items-center space-x-8 py-4">
      <img class="w-28 h-16 rounded-xl border">
      <h1 class="text-title-jnj">
        {{ rfp.presentationName }}
      </h1>
    </td>
    <td>
      <h1 class="text-subheader font-normal">
        {{ rfp.client.clientName }}
      </h1>
    </td>
    <td>
      <h1 class="text-subheader">
        <!--  -->
        {{ `${rfp.sharedWith.length}`.padStart(2,'0') }}
      </h1>
    </td>
    <td>
      <div class="flex space-x-8 items-center justify-end">
        <dp-link-button
          class="px-8 bg-white text-accent-blue border-accent-blue border-2 rounded-lg py-2"
          :to="`/builder/${rfp.presentationId}/intro`"
          text="Edit"
        />

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
            <share-rfp-menu
              v-if="showMenu"
              class="shadow-xl"
            />
          </div>
        </div>
      </div>
    </td>
  </tr>
</template>
<script>
import { ref } from '@vue/reactivity';
import ShareRfpMenu from './ShareRfpMenu.vue';
import DpLinkButton from '../buttons/DpLinkButton.vue';
export default {
  components: { ShareRfpMenu, DpLinkButton },
  props:{
    rfp: {
      type:Object,
      required:true
    }
  },

  setup(){

    const showMenu = ref(false);
    const delay = (func => setTimeout(func, 1000))

    return {showMenu,  delay}
  }
}
</script>
