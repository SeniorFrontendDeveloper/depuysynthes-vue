<template>
  <section class="h-full">
    <!-- content div header-->
    <div class="flex flex-col h-full">
      <div class="flex flex-row intro-header items-end justify-between gap-2 mb-8 px-4 max-h-36">
        <img
          src="@/assets/images/slides/introduction/JandJLogoText.png"
          alt="logo"
          class="flex-2 w-64 max-h-20"
        >
        <h3 class="border-l-4 border-black max-h-12 leading-loose px-4 ml-8 font-extrabold text-4xl flex flex-4 items-center justify-start">
          Global Recoginition & Trust
        </h3>

        <div class="flex-1 flex max-h-20 place-items-start justify-end">
          <img
            src="@/assets/images/hand-logo.png"
            alt="Hand logo"
            class="max-h-12"
          >
          <p class="font-bold text-base">
            INTR
            <span class="flex justify-center">1</span>
          </p>
        </div>
      </div>
      <!-- content body -->
      <div class="px-6 pt-8 content-body">
        <h2 class="font-medium text-4xl text-left">
          A Billion Lives Touched Everyday
        </h2>

        <div class="pt-4 flex flex-row gap-x-8 justify-between max-h-96 h-screen">
          <div class="flex-1 flex flex-col justify-end box box1 ">
            <p class="text-3xl mb-4 text-center">
              Consumer
            </p>
          </div>
          <div class="flex-1 flex flex-col justify-end box box2 ">
            <p class="text-3xl mb-4 text-center">
              Medical Devices
            </p>
          </div>
          <div class="flex-1 flex flex-col justify-end box box3 ">
            <p class="text-3xl mb-4 text-center">
              Pharmaceuticals
            </p>
          </div>
        </div>

        <h3 class="font-medium text-4xl mt-4 text-left">
          World’s Largest Healthcare Company
        </h3>
        <ul class="pt-2 pl-4 text-left">
          <li class="font-normal text-left">
            130+ Years Transforming Healthcare
          </li>
          <li class="font-normal text-left">
            Deep Consumer insights and experience in 175+ countries
          </li>
        </ul>
      </div>
      <slideFooter />
    </div>
  </section>
</template>

<script>
import slideFooter from "@/components/slides/slideFooter.vue";

export default {
  components: { slideFooter },
  props: {
    introSlide: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
td,
th {
  border-style: hidden !important;
}
.content-body {
  background: url('@/assets/images/slides/introduction/intr1-background.png') no-repeat top left;
  background-size: contain;
  background-position: top;
}

.box1 {
  background: url('@/assets/images/slides/introduction/intro1-first-card.jpg') no-repeat center center;
  background-size: cover;
  background-position: top;
}
.box2 {
  background: url('@/assets/images/slides/introduction/intro1-second-card.jpg') no-repeat center center;
  background-size: cover;
  background-position: top;
}
.box3 {
  background: url('@/assets/images/slides/introduction/intro1-third-card.jpg') no-repeat center center;
  background-size: cover;
  background-position: top;
}


.box p {
  background-color:rgba(30, 34, 169, 0.60);
  color: white;
  height: 40px;
}

ul {
  list-style-type: circle;
}

</style>
