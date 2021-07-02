<template>
  <section class="h-full">
    <div class="absolute top-0 right-0 m-4 flex">
      <img
        class=""
        src="@/assets/logo/jnj_handshake.png"
        width="50"
        height="50"
        alt="mark"
      >
      <div class="flex items-center font-bold text-blue-800 text-xl text-center">
        CS<br>1
      </div>
    </div>
    <div class="flex flex-col h-full p-6">
      <div class="text-5xl font-bold pb-5">
        Industry Leading Fields Sales Organization
      </div>
      <div class="flex justify-between pr-24 mb-3">
        <div class="flex flex-col">
          <div class="mb-6 pl-4">
            <span class="text-red-500 text-xl">1400+ HIGHLY TRAINED, DEDICATED</span><br>
            <span class="text-red-500 font-bold text-xl">SALES CONSULTANTS NATIONWIDE*</span><br>
            <span class="font-bold text-xl">THERE WHEN YOU NEED US</span><br>
          </div>
          <div>
            <img
              src="@/assets/images/left.png"
              width="800"
              alt="count"
            >
          </div>
        </div>
        <div>
          <img
            src="@/assets/images/right.png"
            width="250"
            alt="calendar"
          >
        </div>
      </div>
      <div class="slide-2-container ml-16 relative">
        <img
          class="absolute -left-12 top-4"
          src="@/assets/logo/temp.png"
          alt="mark"
        >
        <div class="ml-90 text-xl font-bold text-red-500 py-8">
          DePuy Synthes Support Team
        </div>
        <div class="grid grid-cols-3 gap-4 -ml-10">
          <div>
            <div
              v-for="(name, i) in information"
              :key="i"
            >
              <div class="text-xl font-bold">
                {{ name.type }}:
              </div>
              <div class="value w-full pl-12 text-xl">
                {{ name.name }}&nbsp;&nbsp;{{ name.contact }}
              </div>
            </div>
          </div>
          <div>
            <div class="text-xl font-bold">
              Local Sales Consultants
            </div>
            <div
              v-for="(consultant, i) in consultants"
              :key="i"
            >
              <div class="w-full text-xl">
                {{ consultant.name }}&nbsp;&nbsp;{{ consultant.contract }}
              </div>
            </div>
          </div>
          <div class="text-red-500">
            <div class="text-xl font-bold">
              Years of experience in trauma
            </div>
            <div class="w-full text-xl font-bold">
              {{ experience }}
            </div>
          </div>
        </div>
      </div>
      <slideFooter
        class="mt-auto"
        :main-texts="[]"
      />
    </div>
  </section>
</template>
<script>

import slideFooter from "./slideFooter.vue";
export default {
  components: { slideFooter },
  props: {
    information: {
      type: Object,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    consultants: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.ml-90 {
  margin-left: 23rem;
}
td,
th {
  border-style: hidden !important;
}
.slide-1-container {
  background: url('@/assets/logo/jnj_handshake.png') no-repeat 95% top;
  width: 30px;
  height: 30px;
}
.slide-2-container {
  background: url('@/assets/images/industry.png') no-repeat;
  background-size: 100%;
}

</style>
