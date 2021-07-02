<template>
  <section class="px-2 py-3 bg-white rounded-2xl font-Arial">
    <!-- title and menu div -->
    <div class="flex justify-between">
      <h1 class="text-base font-medium text-slidColor-1">
        Slide {{ slideDetails.No + 1 }}: {{ slideDetails.slideTitle }}
      </h1>
      <!-- menu div -->
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
        <router-link
          :to="{ params: { slideId: adjescentPages.next}}"
          class="my-auto"
        >
          <SvgIcon
            class="w-4 h-4 ml-2"
            name="slide-down"
          />
        </router-link>
        <router-link
          :to="{ params: { slideId: adjescentPages.previous }}"
          class="my-auto"
        >
          <SvgIcon
            class="w-4 h-4 ml-2"
            name="slide-up"
          />
        </router-link>
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
    <builderSlideContainer>
      <IntroductionSlide
        v-if="slideId === 'intro'"
        :intro-slide="introSlide"
        class="slide-layout"
      />
      <IndustryFieldSlide
        v-else-if="slideId === 'industryField'"
        :information="industryField"
        :experience="experienceField"
        :consultants="consultantsField"
        class="slide-layout"
      />
      <Sav10Slide
        v-if="slideId === 'reusableSystem'"
        :reusable-slide="reusable"
        class="slide-layout"
      />
      <Sav12Slide
        v-if="slideId === 'fragmentSystem'"
        :fragment-slide="fragment"
        class="slide-layout"
      />
      <surgeon-plan-slide
        v-else-if="slideId === 'surgeonPlan'"
        :surgeon-plan="surgeonPlan"
        :overview-content="overviewContent"
        class="slide-layout"
      />
      <TrainingPlanSlide
        v-else-if="slideId === 'trainingPlan'"
        class="slide-layout"
      />
      <SavingSummarySlide
        v-else-if="slideId === 'savingsSummary'"
        :saving-summary="savingSummary"
        class="slide-layout"
      />
      <Sav2Slide
        v-else-if="slideId === 'sav-2'"
        :slide-data="sav2Slide"
        class="slide-layout"
      />
      <Sav23Slide
        v-else-if="slideId === 'rebate'"
        :slide="sav23Slide"
        class="slide-layout"
      />
    </builderSlideContainer>
    <footer class="flex items-center justify-between py-3">
      <DpLinkButton
        v-if="adjescentPages.previous && adjescentPages.previous !== slideId"
        text="Previous"
        :to="{ params: { slideId: adjescentPages.previous }}"
        class="py-4 my-auto text-white px-14 bg-secondary h-btn-builder min-h-btn-builder"
      />

      <DpLinkButton
        v-if="adjescentPages.next && adjescentPages.next !== slideId"
        text="Next"
        :to="{ params: { slideId: adjescentPages.next}}"
        class="py-4 my-auto ml-auto mr-0 text-white px-14 bg-secondary h-btn-builder min-h-btn-builder rounded-xl"
      />
    </footer>
  </section>
</template>

<script>
import IndustryFieldSlide from "@/components/slides/0.IndustryField.vue";
import Sav10Slide from "@/components/slides/sav-10.vue";
import Sav12Slide from "@/components/slides/sav-12.vue";
import IntroductionSlide from "@/components/slides/1.Introduction.vue";
import SurgeonPlanSlide from "@/components/slides/2.SurgeonPlan.vue";
import TrainingPlanSlide from "@/components/slides/4.TrainingPlanWithCalender.vue";
import SavingSummarySlide from "@/components/slides/5.SavingSummary.vue";
import Sav2Slide from "@/components/slides/sav2/1.sav-2.vue";
import Sav23Slide from "@/components/slides/sav-23.vue";
import DpLinkButton from "@/components/buttons/DpLinkButton.vue";
import slideDetails from "@/data/betaSlides.json";
import { mapGetters } from "vuex";
import builderSlideContainer from "@/components/builder/builderSlideContainer.vue";

export default {
  components: {
    SurgeonPlanSlide,
    TrainingPlanSlide,
    SavingSummarySlide,
    IntroductionSlide,
    Sav2Slide,
    Sav23Slide,
    DpLinkButton,
    IndustryFieldSlide,
    Sav10Slide,
    Sav12Slide,
    builderSlideContainer,
  },
  computed: {
    ...mapGetters({
      surgeonPlan: "surgeonPlan/surgeonPlan",
      overviewContent: "surgeonPlan/overviewContent",
      savingSummary: "savingsSummary/savingSummary",
      introSlide: "introSlide/introSlide",
      reusable: "sav10/reusable",
      fragment: "sav12/fragment",
      industryField:"industryField/address",
      experienceField:"industryField/experience",
      consultantsField:"industryField/consultants",
      sav2Slide: "sav2/sav2Slide",
      sav23Slide: "sav23/sav23Slide"
    }),
    slideId() {
      return this.$route.params.slideId;
    },
    slideDetails () {
      return slideDetails.find(slide => slide.url === this.slideId)
    },
    adjescentPages() {
      const next = {
        intro: "industryField",
        industryField:"surgeonPlan",
        surgeonPlan: "sav-2",
        "sav-2": "reusableSystem",
        reusableSystem: "fragmentSystem",
        fragmentSystem: "rebate",
        rebate: "savingsSummary",
        savingsSummary: "trainingPlan",
      }
      const  previous = {
        industryField: "intro",
        surgeonPlan:"industryField",
        "sav-2": "surgeonPlan",
        reusableSystem: "sav-2",
        fragmentSystem: "reusableSystem",
        rebate: "fragmentSystem",
        savingsSummary:"rebate",
        trainingPlan: "savingsSummary",
      }
      return {
        next: next[this.slideId] || this.slideId,
        previous: previous[this.slideId] || this.slideId,
      }
    }
  },
};
</script>
