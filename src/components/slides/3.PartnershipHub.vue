<template>
  <section class="h-full">
    <div class="flex flex-col h-full">
      <div class="grid grid-cols-3">
        <div class="col-span-1 pt-5 pl-10 bg-gray-50">
          <p class="text-left font-bold text-5xl text-slidColor-1 font-JnJ mb-10">
            Partnership Proposal Hub
          </p>
          <p class="text-left font-medium text-3xl text-slidColor-1 font-JnJ mb-10">
            Six keys to a successful partnership
          </p>
          <p class="text-left font-bold text-2xl font-JnJ">
            Click on an image to navigate to the section
          </p>
        </div>
        <div class="col-span-2 self-center mx-auto mt-32 mb-32">
          <div
            class="border-2 rounded-full h-96 w-96 flex items-center justify-center font-bold text-xs text-blue-1 relative bg-blue-800"
          >
            <router-link
              to="/slide/presentation1#/1"
              class="circle-link flex flex-col"
            >
              <img
                class="top-img"
                src="@/assets/logo/jnj_hands.png"
                alt="Workflow"
              >
              <p class="print:text-center">
                HOME
              </p>
              <SvgIcon
                class="h-6 w-6 mx-auto mt-1"
                name="leftArrow"
              />
            </router-link>

            <router-link
              to="/slide/presentation1#/4"
              class="-left-12 inset-y-32 circle-link"
            >
              <svg
                width="52"
                height="52"
                viewBox="0 0 103 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="top-img"
              >
                <rect
                  x="0.445312"
                  y="0.251953"
                  width="101.636"
                  height="58.1466"
                  fill="url(#pattern0)"
                />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0"
                      transform="translate(0 -0.0151154) scale(0.00662252 0.0115756)"
                    />
                  </pattern>
                  <image
                    id="image0"
                    width="151"
                    height="89"
                    xlink:href="data:image/png;base64,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"
                  />
                </defs>
              </svg>

              <p class="print:text-center">
                Training Support
              </p>
            </router-link>

            <router-link
              to="/slide/presentation1#/5"
              class="-right-12 inset-y-30 circle-link"
            >
              <img
                class="top-img"
                src="@/assets/logo/jnj_dollar.png"
              >
              <p class="print:text-center">
                Deliver Actual Savings
              </p>
            </router-link>

            <div
              class="left-8 -top-8 circle-link"
            >
              <img
                class="top-img"
                src="@/assets/logo/jnj_handshake.png"
              >

              <p class="print:text-center">
                Customer Service
              </p>
            </div>

            <router-link
              to="/slide/presentation1#/3"
              class="-top-8 right-8 circle-link"
            >
              <img
                class="top-img"
                src="@/assets/logo/medical_professional.png"
              >
              <p class="print:text-center">
                Surgeon Satisfaction
              </p>
            </router-link>

            <div
              class="-bottom-8 left-8 circle-link"
            >
              <img
                class="top-img"
                src="@/assets/logo/jnj_communication_plan.png"
              >
              <p class="print:text-center">
                Comprehensive Portfolio
              </p>
            </div>

            <div
              class="-bottom-8 right-8 circle-link"
            >
              <img
                class="top-img"
                src="@/assets/logo/jnj_health_caring.png"
              >
              <p class="print:text-center">
                Support Quality Care
              </p>
            </div>
          </div>
        </div>
      </div>
      <slideFooter class="mt-auto" />
    </div>
  </section>
</template>

<script>
import slideFooter from "./slideFooter.vue";

export default {
  components: { slideFooter },
};
</script>

<style lang="postcss" scoped>
.circle-link {
  @apply absolute shadow-2xl rounded-full items-center justify-center bg-white flex flex-col p-2;
}
.circle-link:hover {
  @apply border-8 border-accent-blue size-bordered-circle;
}
.circle-link:not(:hover) {
  @apply h-28 w-28;
}
.circle-link p {
  @apply text-sm w-full my-auto;
  line-height: 1.1;
}
.circle-link .top-img {
  /* @apply absolute left-8 inset-y-2; */
  @apply mx-auto mt-1 h-3/5;

}
.size-bordered-circle {
  height: calc(7rem + 8px + 8px);
  width: calc(7rem + 8px + 8px);
}
</style>
