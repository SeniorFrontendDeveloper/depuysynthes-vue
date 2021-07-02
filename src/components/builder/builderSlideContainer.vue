<template>
  <div
    id="overall-slide-layout"
    class="my-3 border border-gray-300 rounded-lg"
  >
    <slot />
  </div>
</template>

<script>
export default {
  mounted() {
    this.dynamicScaling();
    window.addEventListener("resize", this.dynamicScaling);
  },
  unmounted() {
    window.removeEventListener("resize", this.dynamicScaling);
  },
  methods: {
    dynamicScaling() {
      const slideContainer = document.getElementById('overall-slide-layout')
      slideContainer.style.width = null;
      let sliderContainerWidth = slideContainer.clientWidth - 2;

      const minSlideWidth = 600
      const scale = (sliderContainerWidth > minSlideWidth) ? sliderContainerWidth / 1280 : minSlideWidth/1200;
      // const scale = 0.4
      document.querySelector(':root').style.setProperty('--sliderBuilderScale', scale);

      slideContainer.style.height = (720 * scale + 2) + 'px';
      slideContainer.style.width = (1280 * scale + 2) + 'px';
    }
  }
};
</script>

<style>
:root {
  --sliderBuilderScale: 1;
}

#overall-slide-layout > * {
  width: 1280px;
  height: 720px;
  position: absolute;
  transform-origin: top left;
  transform: scale(var(--sliderBuilderScale));
}
</style>

