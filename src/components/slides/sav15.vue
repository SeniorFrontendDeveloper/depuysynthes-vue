<template>
  <section class="h-full">
    <!-- content div header-->
    <div class="flex flex-col h-full">
      <slideHeader
        title=""
        :sav-number="15"
        class="ml-16"
        name="SAV"
        icon="sav"
      />
      <div class="flex flex-row tophead">
        <div class="img-1" />
        <div class="righttophead">
          <p class="text-2xl text-left text-black">
            A suite of solutions providing a simple process to fully integrate DePuy Synthes instruments, implants, and sterilization containers within your healthcare facility.
          </p>
        </div>
      </div>
      <div class="gr justify-items-center" />

      <div class="flex flex-col justify-end flex-1 px-4 mb-2 ml-8 text-left second-footer">
        <p class="text-xs">
          *Reconciliation required at end of program which may require invoicing of any shortfall if purchasing levels not met
        </p>
        <p class="text-xs">
          This document contains confidential and proprietary trade secrets of DePuy Synthes Sales, Inc. Its contents may not be disclosed by an authorized recipient without prior written consent of DePuy Synthes.
        </p>
      </div>
      <!-- content body -->
      <slideFooter class="mb-2 ml-8" />
    </div>
  </section>
</template>

<script>
import slideFooter from "@/components/slides/slideFooter.vue";
import slideHeader from "@/components/slides/slideHeader.vue";

export default {
  components: { slideFooter, slideHeader },
};
</script>

<style scoped>

  .title {
    color: #212121;
  }

.desc {
  color: #63666a;
}
.second-footer p {
  color: #7f7f7f;
}

.circle {
  height: 200px;
  width: 200px;
}

.img-1{
  background: url('@/assets/images/slides/saving/sav15-01.png') no-repeat;
  background-size:contain;
  position: absolute;
  left:1rem;
  top:0.5rem;
  height: 11rem;
  width: 23rem;
  justify-content: center;
  align-items: center;
}

.righttophead{
  position: absolute;
  left:22rem;
  top:5rem;
}

.gr{
  margin-top:6rem;
  height:100%;
  background: url('@/assets/images/slides/saving/sav15.png') no-repeat center center;
  background-size: contain;
  background-position: top;
}

.ot {
  @apply font-semibold text-lg leading-5 rounded-md  px-6 py-2 w-full h-20;
  background-color: #c8102e;
  color: white;

}

</style>
