<template>
  <section class="px-2 py-3 bg-white font-Arial">
    <div class="flex justify-between">
      <h1 class="text-base font-medium text-slidColor-1">
        Slide # : Custom Slide
      </h1>
      <div class="flex flex-row-reverse text-base font-medium">
        <button>
          <SvgIcon
            class="w-4 h-4 ml-2"
            name="slide-delete"
          />
        </button>
        <button>
          <SvgIcon
            class="w-4 h-4 ml-2"
            name="slide-lock"
          />
        </button>
        <button>
          <SvgIcon
            class="w-4 h-4 ml-2"
            name="slide-eye"
          />
        </button>
        <button>
          <SvgIcon
            class="w-4 h-4 ml-2"
            name="slide-down"
          />
        </button>
        <button>
          <SvgIcon
            class="w-4 h-4 ml-2"
            name="slide-up"
          />
        </button>
        <button>
          <SvgIcon
            class="w-4 h-4 ml-2"
            name="slide-copy"
          />
        </button>
        <button>
          <SvgIcon
            class="w-4 h-4 ml-2"
            name="slide-plus"
          />
        </button>
      </div>
    </div>
    <builderSlideContainer
      class="mt-3 border border-gray-850 overflow-x-auto"
    >
      <section class="px-10 py-8">
        <div class="flex flex-col h-full">
          <div
            class="flex justify-center items-center mb-4 py-3 px-1"
            :class="{
              'border border-dashed border-gray-850': !(customSlide.title),
            }"
          >
            <h1 class="font-medium text-black text-4xl font-Roboto text-center">
              {{ customSlide.title ? customSlide.title : 'Click to add title' }}
            </h1>
          </div>
          <div
            class="flex justify-center items-center mb-4 py-7 px-1"
            :class="{
              'border border-dashed border-gray-850': !(customSlide.subTitle),
            }"
          >
            <h2 class="font-light text-black text-4xl font-Roboto text-center">
              {{ customSlide.subTitle ? customSlide.subTitle : 'Click to add subtitle' }}
            </h2>
          </div>
          <div class="grid gap-x-5 grid-cols-3 flex-grow">
            <div
              class="flex justify-center items-center"
              :class="{
                'border border-dashed border-gray-850': !(customSlide.image1),
              }"
            >
              <img
                v-if="customSlide.image1"
                :src="`${customSlide.image1}`"
                class=""
              >
              <p
                v-else
                class="font-light text-xl text-black font-Roboto text-center"
              >
                Click to add Image
              </p>
            </div>
            <div
              class="flex justify-center items-center"
              :class="{
                'border border-dashed border-gray-850': !(customSlide.image2),
              }"
            >
              <img
                v-if="customSlide.image2"
                :src="`${customSlide.image2}`"
                class=""
              >
              <p
                v-else
                class="font-light text-xl text-black font-Roboto text-center"
              >
                Click to add Image
              </p>
            </div>
            <div
              class="flex justify-center items-center border border-dashed border-gray-850"
              :class="{
                'border border-dashed border-gray-850': !(customSlide.image3),
              }"
            >
              <img
                v-if="customSlide.image3"
                :src="`${customSlide.image3}`"
                class=""
              >
              <p
                v-else
                class="font-light text-xl text-black font-Roboto text-center"
              >
                Click to add Image
              </p>
            </div>
          </div>
        </div>
      </section>
    </builderSlideContainer>
  </section>
</template>

<script>
import builderSlideContainer from "@/components/builder/builderSlideContainer.vue"

export default {
  components: { builderSlideContainer },
  props: {
    customSlide: {
      type: Object,
      required: true
    }
  },
};
</script>

