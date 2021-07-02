<template>
  <div class="flex flex-col py-10 pl-14 items-start">
    <h1 class="text-4xl font-medium text-gray-900">
      Venice Regional Bayfront Health
    </h1>
    <div
      v-if="isUpdate"
      class="w-full"
    >
      <h6 class="text-sm font-light leading-none text-gray-800 mt-4 mb-2">
        Select Link
      </h6>

      <select
        v-model="link.target"
        class="border border-gray-300 rounded-md w-full text-gray-600 py-4 px-3 bg-white hover:border-gray-400 focus:outline-none appearance-none"
      >
        <option
          v-for="link in links"
          :key="link.id"
        >
          {{ link.target }}
        </option>
      </select>
      <p
        class="opacity-50 text-xs font-book tracking-wide text-gray-600 pt-4"
      >
        Last updated on 23 Dec 2020
      </p>
      <router-link
        to="/view/29107879HTYI89"
        class="text-gray-400 flex space-x-2 items-center"
      >
        <span class="overflow-clip"> depuy.com/doc/29107879HTYI89 </span>
        <SvgIcon
          class="h-4 w-4 mr-2 my-auto"
          name="link"
        />
      </router-link>
      <div
        class="flex flex-col w-full my-4"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="opacity-50 text-xs tracking-wide text-gray-600">
              Passcode
            </p>
            <p class="text-sm font-bold tracking-wide text-gray-800">
              BVB78798
            </p>
          </div>
          <button
            class="focus:outline-none focus:ring focus:border-gray-425"
          >
            <SvgIcon
              class="w-5 h-5"
              name="slide-copy"
            />
          </button>
        </div>
        <button
          class="mx-auto my-3 p-2.5 border rounded-lg border-gray-500 opacity-50 text-xs tracking-wide text-gray-600"
        >
          Copy Email Body
        </button>
      </div>
    </div>
    <div
      v-else
      class="w-full"
    >
      <h6 class="text-sm font-light leading-none text-gray-800 mt-4 mb-2">
        Name Link
      </h6>
      <input
        v-model="link.target"
        class="border border-gray-300 rounded-md w-full text-gray-600 py-4 px-3 bg-white hover:border-gray-400 focus:outline-none appearance-none"
      >

      <h5

        class="font-medium text-black pt-4"
      >
        Hyperlink
      </h5>
      <div class="flex items-center space-x-2">
        <span class="text-gray-425"> depuy.com/doc/ </span>
        <input
          v-model="link.hyperLink"
          class="py-3 pl-2 rounded-r border"
          placeholder="Hyperlink"
        >
      </div>
      <p
        class="text-xs leading-none text-indigo-600 mt-8 mb-5"
      >
        Note : The link name is only for your reference it won’t show up on client
        side
      </p>
    </div>

    <dp-button
      :class="saveLinkInprogress ? 'opacity-50' : ''"
      :text="isUpdate ? 'Update link' : 'Create link'"
      class="w-full py-3 bg-gradient-to-r from-primary-grad-from to-primary-grad-to font-semibold rounded text-white bg-secondary"
      @click="saveLink"
    />
    <dp-link-button
      v-if="isUpdate"
      text="Create new link"
      class="py-7 font-medium underline rounded self-center"
      :to="{
        name: 'create-link',
        params: {
          presentationId: link.presentationId,
        },
      }"
    />
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";
import DpButton from "@/components/buttons/DpButton.vue";
import DpLinkButton from "@/components/buttons/DpLinkButton.vue";
import { computed, watch } from "@vue/runtime-core";
export default {
  components: { DpButton, DpLinkButton },
  props: {
    activeLink: {type:Object, required:true},
    links: {type:Array, required:true}
  },
  emits: ["createLink"],

  setup(props,{emit}) {
    const link = ref({});
    const saveLinkInprogress = ref(false)
    link.value = props.activeLink ? props.activeLink : {};

    const saveLink = ()=>{

      if(link.value.id >= 0){
        saveLinkInprogress.value = true;
        setTimeout(()=>{
          saveLinkInprogress.value = false;
        }, 3000);

        return;
      }

      emit('createLink', link.value)

    };

    watch(
      () => props.activeLink,
      (newValue) => {
        link.value = { ...newValue };
      }
    );

    const isUpdate = computed(() => link.value.linkId >= 0)

    return { link, isUpdate,saveLink, saveLinkInprogress };
  },
};
</script>
