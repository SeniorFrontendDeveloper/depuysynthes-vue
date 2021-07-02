<template>
  <div class="px-9 py-3">
    <div class="flex space-x-10 items-end">
      <div class="w-64">
        <custom-slide-side-bar />
      </div>
      <custom-slide-body
        :custom-slide="customSlide"
        class="flex-grow"
      />
    </div>
    <div class="flex justify-end p-6">
      <dp-button
        text="Next"
        class="py-2 px-12 text-white bg-secondary text-xs font-bold"
        @click="save()"
      />
    </div>
  </div>
</template>
<script>
import CustomSlideSideBar from './builder/CustomSlideSidebar.vue';
import CustomSlideBody from './builder/CustomSlideBody.vue';
import DpButton from "@/components/buttons/DpButton.vue";
import { mapGetters, mapMutations } from 'vuex';
export default {
  components: { CustomSlideSideBar, CustomSlideBody, DpButton },
  emits: ["nextStep"],
  computed: {
    ...mapGetters({
      customSlide: "customSlide/customSlide"
    })
  },
  methods: {
    ...mapMutations({saveCustomSlide: "customSlide/saveCustomSlide"}),

    save() {
      this.saveCustomSlide();
      this.$emit("nextStep", this.customSlide);
    }
  }
};
</script>
