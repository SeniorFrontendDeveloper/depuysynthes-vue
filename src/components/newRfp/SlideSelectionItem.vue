<template>
  <div class="relative justify-center flex flex-col">
    <div
      v-if="togglePopup"
      class="absolute w-80 -mt-96 mb-32 rounded-lg shadow bg-white"
    >
      <div class="flex flex-col p-4 space-y-4">
        <img src="@/assets/images/about_jnj.png">
        <h1 class="font-bold text-xl">
          Slide 1 | {{ slide.slideTitle }}
        </h1>
        <p class="px-2 text-gray-500" />
        <dp-button
          text="See in Full View"
          class="w-full z-50 text-white bg-secondary"
        />
      </div>
    </div>
    <div
      class="border p-4 pr-0 flex rounded-xl mr-4 min-h-full"
      :class="selected ? 'bg-accent-blue text-white' : 'text-gray-425'"
    >
      <button
        class="flex flex-grow focus:outline-none"
        @click="select()"
      >
        <h1 class="text-left my-auto">
          {{ slide.slideTitle }}
        </h1>
      </button>
      <div class="flex cursor-pointer my-auto">
        <SvgIcon
          class="h-5 w-5 mr-2"
          name="view"
          @click="togglePopup = !togglePopup"
          @blur="togglePopup = false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DpButton from "@/components/buttons/DpButton.vue";
import { ref } from "@vue/reactivity";
export default {
  components: { DpButton },
  props: { slide: {type:Object, required:true} },
  setup(props) {
    const togglePopup = ref(false);
    const selected = ref(props.slide.enabled || false);

    const select = () => {
      selected.value = !selected.value;
    };

    return { togglePopup, selected, select };
  },
};
</script>
