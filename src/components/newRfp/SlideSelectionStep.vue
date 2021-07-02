<template>
  <div class="flex flex-col items-start p-7">
    <h1>Client Information</h1>
    <div class="flex items-center space-x-6 pb-4 w-full border-b">
      <img src="@/assets/logo/venice_logo.png">
      <h1 class="text-primary text-3xl">
        Venice Regional Bayfront Health
      </h1>
    </div>
    <div class="flex items-center w-full justify-between py-6">
      <div class="flex items-center space-x-6 mr-2">
        <h1 class="text-primary text-2xl">
          Select your presentation slides
        </h1>
        <div class="relative flex">
          <dp-button
            text="Add custom slide"
            class="
              px-5
              py-4
              rounded-xl
              bg-primary
              text-white
              h-btn-builder
              min-h-btn-builder
              my-auto
            "
            @click="showMenu = !showMenu"
            @blur="delay(() => showMenu = false)"
          />
          <div class="absolute right-0 top-16 z-50">
            <add-custom-slide-dropdown
              v-if="showMenu"
              class="shadow-xl"
              @openNewCustomSlideModal="toggleCustomSlideModal('new')"
              @openExistingCustomSlideModal="toggleCustomSlideModal('saved')"
            />
          </div>
        </div>
      </div>
      <div class="flex space-x-3">
        <dp-button
          text="Save As Template"
          class="
            px-5
            py-4
            rounded-xl
            text-white
            bg-secondary
            h-btn-builder
            min-h-btn-builder
            my-auto
          "
          @click="toggleSaveTemplateModal()"
        />
        <!-- This is an example component -->
        <div class="relative inline-flex">
          <svg
            class="w-2 h-2 absolute top-0 right-0 mx-4 mt-6 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 412 232"
          >
            <path
              d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
              fill="#648299"
              fill-rule="nonzero"
            />
          </svg>
          <select
            class="
              border border-gray-300
              rounded-md
              text-gray-600
              py-4
              pl-5
              pr-10
              bg-white
              hover:border-gray-400
              focus:outline-none
              appearance-none
              w-64
            "
          >
            <option>Select template</option>
            <option
              v-for="i in 4"
              :key="i"
            >
              Template {{ i }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <slide-group
      v-for="(group, index) in slideGroups"
      :key="index"
      :group="group"
    />
  </div>

  <custom-slide-step
    v-if="customSlideModal"
    :type="selectedOption"
    @hide="toggleCustomSlideModal"
  />
  <save-template
    v-if="saveTemplateModal"
    @hide="toggleSaveTemplateModal"
  />
</template>
<script>
import { ref } from "@vue/reactivity";
import SaveTemplate from "./SaveTemplate.vue";
import CustomSlideStep from "./CustomSlideStep.vue";
import DpButton from "@/components/buttons/DpButton.vue";
import SlideGroup from "./SlideGroup.vue";
import AddCustomSlideDropdown from './AddCustomSlideDropdown.vue';
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

export default {
  components: {
    SaveTemplate,
    CustomSlideStep,
    DpButton,
    SlideGroup,
    AddCustomSlideDropdown
  },

  setup() {
    const store = useStore();
    const slideGroups = computed(() => store.getters["rfps/defaultSlides"]);

    const saveTemplateModal = ref(false);

    const toggleSaveTemplateModal = () => {
      saveTemplateModal.value = !saveTemplateModal.value;
    };

    const delay = (func => setTimeout(func, 500))

    return {
      slideGroups,
      saveTemplateModal,
      toggleSaveTemplateModal,
      delay
    };
  },
  data() {
    return {
      showMenu: false,
      customSlideModal: false,
      selectedOption: ''
    }
  },

  methods: {
    toggleCustomSlideModal(option) {
      this.selectedOption = option;
      this.showMenu = false;
      this.customSlideModal = !this.customSlideModal;
    }
  },
};
</script>

<style></style>
