<template>
  <div class="flex flex-wrap justify-evenly pt-5 h-screen">
    <button
      class="w-7 h-7"
      @click="showNavigator()"
    >
      <SvgIcon
        name="slideDotted"
        class="w-7 h-7"
      />
    </button>
    <div class="reveal">
      <div class="slides border-2">
        <slot name="mainView" />
      </div>
    </div>
    <button
      class="w-7 h-7"
      :class="fullScreenMode(isFullScreenMode)"
      @click="showFullScreen()"
    >
      <SvgIcon
        class="w-7 h-7"
        name="enlarge"
      />
    </button>

    <div
      class="flex justify-between items-center  font-Arial w-full px-10"
      :class="fullScreenMode(isFullScreenMode)"
    >
      <p class="text-3xl font-medium text-gray-900">
        Venice Regional Bayfront Health
      </p>
      <div class="flex content-center">
        <router-link
          :to="{
            name: 'slide',
            hash: '#/1',
            params: {
              presentationId: 'presentation1',
            },
          }"
        >
          <SvgIcon
            class="w-12 h-12 pr-4"
            name="homeIcon"
          />
        </router-link>

        <div class="flex content-center self-stretch ">
          <button @click="previousSlide()">
            <SvgIcon
              class="w-8 h-8 stroke-current stroke-2 text-black"
              name="slideNavigatorLeft"
              :class="isEndOfSlide(!isPrevSlideAvailable)"
            />
          </button>

          <p class="text-center my-auto">
            {{ currentSlideId }}/{{ totalNumOfSlides }}
          </p>

          <button @click="nextSlide()">
            <SvgIcon
              class="w-8 h-8"
              name="slideNavigatorRight"
              :class="isEndOfSlide(!isNextSlideAvailable)"
            />
          </button>
        </div>
      </div>
      <p class="text-3xl font-medium text-white">
        Venice Regional Bayfront Health
      </p>
      <div class="absolute right-0">
        <img
          class="h-16 w-full object-scale-down"
          src="@/assets/logo/venice_logo.png"
        >
      </div>
    </div>
  </div>
</template>

<script>
import Reveal from "reveal.js";
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router";
import { ref, reactive, computed } from "vue";

export default {
  props: {
    prevRoute: {
      type: String,
      default() {
        return "default";
      },
    },
  },

  setup(props) {
    const router = useRouter();
    const route = useRoute();

    let totalNumOfSlides = ref(0);
    const currentSlideId = computed(() => route.hash.slice(2) || '1');
    let reavleInstance = reactive({});
    let isNextSlideAvailable = ref(false);
    let isPrevSlideAvailable = ref(false);
    let isFullScreenMode = ref(false);

    const setupReveal = async () => {
      if (reavleInstance.value?.getSlides().length) {
        reavleInstance.value.sync();
        reavleInstance.value.layout();
        reavleInstance.value.slide(currentSlideId.value);
        return
      }

      const hashSlideIndex = route.hash.slice(2);

      await Reveal.initialize({
        embedded: true,
        center: true,
        controls: false,
        history: true,
        hashOneBasedIndex: true,
        minScale: 0.5,
        width: 1280,
        height: 720
      });

      reavleInstance.value = Reveal;

      totalNumOfSlides.value = Reveal.getTotalSlides();

      document.querySelector(".reveal").style.width = "85vw";
      document.querySelector(".reveal").style.height = "85%"

      // Make reveal.js aware of the size change
      Reveal.layout();

      if (Reveal.getSlides().length >= currentSlideId.value) {
        if (hashSlideIndex?.length) Reveal.slide(hashSlideIndex - 1);
        if (props.prevRoute === "slideOverview") {
          // Reveal.sync();
          // Reveal.layout();
          // Reveal.slide(hashSlideIndex - 1)
          router.go();
        }

        isNextSlideAvailable.value = Reveal.availableRoutes().right;

        isPrevSlideAvailable.value = Reveal.availableRoutes().left;
      } else {
        Reveal.slide(0);
      }

      // Reveal.on("slidechanged", (event) => { });
      // Reveal.on("overviewshown", (event) => { });
      // Reveal.on("overviewhidden", (event) => { });
    };

    onMounted(setupReveal);
    onBeforeRouteUpdate((to) => {
      // Reveal?.layout();
      const revealId = `${Reveal.getIndices().h + 1}`;
      const currentSlideIndex = to.hash.slice(2);

      if (currentSlideIndex && revealId !== currentSlideIndex) {
        Reveal.slide(currentSlideIndex - 1);
      }
    });

    return {
      totalNumOfSlides,
      currentSlideId,
      reavleInstance,
      isNextSlideAvailable,
      isPrevSlideAvailable,
      isFullScreenMode
    };
  },

  mounted() {
    if (document.addEventListener) {
      document.addEventListener(
        "fullscreenchange",
        this.fullScreenExitHandler,
        false
      );
      document.addEventListener(
        "mozfullscreenchange",
        this.fullScreenExitHandler,
        false
      );
      document.addEventListener(
        "MSFullscreenChange",
        this.fullScreenExitHandler,
        false
      );
      document.addEventListener(
        "webkitfullscreenchange",
        this.fullScreenExitHandler,
        false
      );
      document.addEventListener("mousemove", this.showSlideControlls);
    }
  },

  methods: {
    nextSlide() {
      if (this.reavleInstance.value.availableRoutes().right) {
        this.reavleInstance.value.next();
        this.isPrevSlideAvailable = true;
        this.isNextSlideAvailable = Boolean(this.reavleInstance.value.availableRoutes().right);
      }
    },

    previousSlide() {
      if (this.reavleInstance.value.availableRoutes().left) {
        this.reavleInstance.value.prev();
        this.isNextSlideAvailable = true;

        this.isPrevSlideAvailable = Boolean(this.reavleInstance.value.availableRoutes().left);
      }
    },

    isEndOfSlide(endOfSlide) {
      return {
        "opacity-25": endOfSlide,
      };
    },

    showNavigator() {
      this.displayOverview(this.currentSlideId);
    },

    showFullScreen() {
      document.querySelector(".reveal").style.width = "90vw";
      document.querySelector(".reveal").style.height = "100%"
      document.documentElement.requestFullscreen();
      this.isFullScreenMode = true
    },


    fullScreenMode(isActive) {
      return {
        "invisible": isActive,
      };
    },

    updateFullScreenLayOut(){
      this.reavleInstance.value.configure({ controls: false });
      this.isFullScreenMode = false;
      document.querySelector(".reveal").style.width = "85vw";
      document.querySelector(".reveal").style.height = "85%"
    },

    fullScreenExitHandler() {
      if (document.webkitIsFullScreen === false) {
        this.updateFullScreenLayOut();
      } else if (document.mozFullScreen === false) {
        this.updateFullScreenLayOut();
      } else if (document.msFullscreenElement === false) {
        this.updateFullScreenLayOut();
      }
      this.reavleInstance.value.layout();
    },

    showSlideControlls(event) {
      if (
        (document.webkitIsFullScreen ||
          document.mozFullScreen ||
          document.msFullscreenElement) &&
        (event.movementX > 20 || event.movementY > 20)
      ) {
        this.reavleInstance.value.configure({ controls: true });
        this.reavleInstance.value.sync();
      }
    },

    displayOverview(slideId) {
      this.$router.push({
        name: "slideOverview",
        params: {
          slideId: slideId ,
          presentationId: 'presentation1',
        },
      });
    },
  },
};
</script>
