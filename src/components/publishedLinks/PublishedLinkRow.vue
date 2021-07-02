<template>
  <tr>
    <td class="flex items-center space-x-8 py-4">
      <img class="w-28 h-16 rounded-xl border">
      <h1 class="text-title-jnj uppercase">
        {{ link.target }}
      </h1>
    </td>
    <td>
      <h1 class="text-normal">
        {{ link.clientName }}
      </h1>
    </td>

    <td>
      <h1 class="text-normal">
        {{ link.views }}
      </h1>
    </td>
    <td>
      <h1 class="text-normal">
        {{ link.updatedOn }}
      </h1>
    </td>
    <td>
      <div class="flex space-x-4 items-center justify-end">
        <dp-link-button
          class="px-4 bg-white text-accent-blue border-accent-blue border-2 rounded-lg py-2"
          :to="`/slide/${link.presentationId}`"
          text="Preview"
        />
        <dp-link-button
          class="px-4 bg-primary border-2 border-primary rounded-lg text-white py-2"
          :to="`/slide/${link.presentationId}/pdf`"
          target="_blank"
          text="Save PDF"
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
            <link-menu
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
import LinkMenu from '../dashboard/LinkMenu.vue';
import DpLinkButton from '../buttons/DpLinkButton.vue';
export default {
  components: { LinkMenu, DpLinkButton },
  props:{link:{type:Object, required:true}},

  setup(){

    const showMenu = ref(false);
    const delay = (func => setTimeout(func, 1000))

    return {showMenu,  delay}
  }
}
</script>
