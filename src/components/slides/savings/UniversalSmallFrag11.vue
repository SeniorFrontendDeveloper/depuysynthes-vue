<template>
  <section class="h-full">
    <!-- content div header-->
    <div class="flex flex-col h-full">
      <slideHeader
        title="Universal Small Fragment System"
        :sav-number="11"
        class="ml-16"
        icon="sav"
        name="SAV"
      />
      <!-- content body -->
      <div class="desc flex-4 mb-6 text-left ml-8 mr-8 px-8">
        <p class="text-xl">
          Simplified system for 2.7 mm and 3.5 mm non-locking, LCP® and VA LCP® Implant Technology designed to help you do more with less
        </p>
      </div>
      <div class="flex-2 gr mx-8 px-8 pt-2 mb-6 justify-items-center h-full w-full" />
      <div class="second-footer flex-1 flex flex-col  justify-end  px-4 ml-8 text-left mb-2">
        <p class="text-xs">
          *Calculation takes into account DePuy Synthes systems commonly used for each small bone trauma procedure, employs a weighted average of 2.25 sets per procedure, cost to wash a tray is $47.7 and approximately 5 trays are washed per set on average when accounting for any wire bins that are also holding instruments
        </p>
      </div>
      <slideFooter class="ml-8 mb-2" />
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

.gr {
  background: url('@/assets/images/slides/saving/sav11.png') no-repeat center center;
  background-size: contain;
  background-position: top;
}

.cc2 {
  background: url('@/assets/images/slides/saving/sav11-icon2.png') no-repeat center center;
  background-size: contain;
  background-position: top;
}

.cc2-2 {
  background: url('@/assets/images/slides/saving/sav11-icon22.png') no-repeat center center;
  background-size: contain;
  background-position: top;
}

.cc3 {
  background: url('@/assets/images/slides/saving/sav11-icon3.png') no-repeat center center;
  background-size: contain;
  background-position: top;
}
.cc4 {
  background: url('@/assets/images/slides/saving/sav11-icon4.png') no-repeat center center;
  background-size: contain;
  background-position: top;
}

.top {
  background: url('@/assets/images/slides/saving/sav11-top.png') no-repeat center center;
  background-size: cover;
  background-position: top;
}

.ot {
  @apply font-semibold text-lg leading-5 rounded-md  px-6 py-2 w-full h-20;
  background-color: #c8102e;
  color: white;

}

</style>
