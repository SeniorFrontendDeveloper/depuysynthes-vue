<template>
  <IntroductionSlide
    data-background-color="white"
    :intro-slide="introSlide"
    class="pdf-slide-layout"
  />
  <PartnershipSlide
    data-background-color="white"
    class="pdf-slide-layout"
  />
  <AboutJandJSlide
    data-background-color="white"
    class="pdf-slide-layout"
  />
  <AboutDepuySynthes
    data-background-color="white"
    class="pdf-slide-layout"
  />
  <AboutDepuySynthesSecond
    data-background-color="white"
    class="pdf-slide-layout"
  />
  <TraumaChallanges
    data-background-color="white"
    class="pdf-slide-layout"
  />
  <TrumaTableBySiteOfCare1
    data-background-color="white"
    class="pdf-slide-layout"
  />
  <TrumaTableBySiteOfCare2
    data-background-color="white"
    class="pdf-slide-layout"
  />
  <TrumaTableBySiteOfCare3
    data-background-color="white"
    class="pdf-slide-layout"
  />
  <TrumaTableBySiteOfCare4
    data-background-color="white"
    class="pdf-slide-layout"
  />
  <SynthesTraumaSlide
    data-background-color="white"
    class="pdf-slide-layout"
  />
  <SurgeonPlanSlide
    :surgeon-plan="surgeonPlan"
    :overview-content="overviewContent"
    data-background-color="white"
    class="pdf-slide-layout"
  />
  <TraumaAnalysisToolDemo
    data-background-color="white"
    class="pdf-slide-layout"
  />
  <UniversalSmallFrag11
    data-background-color="white"
    class="pdf-slide-layout"
  />
  <Esims
    data-background-color="white"
    class="pdf-slide-layout"
  />
  <SavingSummary
    :saving-summary="savingSummary"
    data-background-color="white"
    class="pdf-slide-layout"
  />
  <TrainingPlanWithCalnder
    data-background-color="white"
    class="pdf-slide-layout"
  />
  <ProceduralEfficiencySlide
    data-background-color="white"
    class="pdf-slide-layout"
  />
  <ResearchInnovationEducationSlide
    data-background-color="white"
    class="pdf-slide-layout"
  />
  <HipFractureCareSlide
    data-background-color="white"
    class="pdf-slide-layout"
  />
  <ReadyForAnythingSlide
    data-background-color="white"
    class="pdf-slide-layout"
  />
  <CompleteSolutionsSlide
    data-background-color="white"
    class="pdf-slide-layout"
  />
  <BroadPortfolioSlide
    data-background-color="white"
    class="pdf-slide-layout"
  />
  <InnovationTimelineSlide
    data-background-color="white"
    class="pdf-slide-layout"
  />
</template>

<script>
import IntroductionSlide from "@/components/slides/1.Introduction.vue";
import AboutDepuySynthes from "@/components/slides/introduction/AboutDePuySynthes.vue";
import AboutDepuySynthesSecond from "@/components/slides/introduction/AboutDepuySynthesSecond.vue";
import TraumaChallanges from "@/components/slides/introduction/TraumaChallenges.vue";
import AboutJandJSlide from "@/components/slides/introduction/AboutJAndJ.vue";
import TrumaTableBySiteOfCare1 from "@/components/slides/introduction/TrumaTableBySiteOfCare1.vue";
import TrumaTableBySiteOfCare2 from "@/components/slides/introduction/TrumaTableBySiteOfCare2.vue";
import TrumaTableBySiteOfCare3 from "@/components/slides/introduction/TrumaTableBySiteOfCare3.vue";
import TrumaTableBySiteOfCare4 from "@/components/slides/introduction/TrumaTableBySiteOfCare4.vue";
import SurgeonPlanSlide from "@/components/slides/2.SurgeonPlan.vue";
import PartnershipSlide from "@/components/slides/3.PartnershipHub.vue";
import TrainingPlanWithCalnder from "@/components/slides/4.TrainingPlanWithCalender.vue";
import SavingSummary from "@/components/slides/5.SavingSummary.vue";
import Esims from "@/components/slides/savings/Esims.vue";
import TraumaAnalysisToolDemo from "@/components/slides/savings/TraumaAnalysisToolDemo.vue";
import UniversalSmallFrag11 from "@/components/slides/savings/UniversalSmallFrag11.vue";
import SynthesTraumaSlide from "@/components/slides/17.SynthesTrauma.vue";
import ProceduralEfficiencySlide from "@/components/slides/22.ProceduralEfficiency.vue";
import ResearchInnovationEducationSlide from "@/components/slides/44.ResearchInnovationEducation.vue";
import HipFractureCareSlide from "@/components/slides/45.HipFractureCare.vue";
import ReadyForAnythingSlide from "@/components/slides/53.ReadyForAnything.vue";
import CompleteSolutionsSlide from "@/components/slides/54.CompleteSolutions.vue";
import BroadPortfolioSlide from "@/components/slides/55.BroadPortfolio.vue";
import InnovationTimelineSlide from "@/components/slides/56.InnovationTimeline.vue";

import surgeonPlan from "@/data/slideContent/surgeonPlan.json";
import savingSummary from "@/data/slideContent/savingSummary.json";
import overviewContent from "@/data/slideContent/overviewContent.js";
import introSlide from "@/data/slideContent/introSlide.js";
import trainingPlan from "@/data/slideContent/trainingPlan.js";

export default {
  components: {
    IntroductionSlide,
    SurgeonPlanSlide,
    PartnershipSlide,
    TrainingPlanWithCalnder,
    SavingSummary,
    SynthesTraumaSlide,
    ProceduralEfficiencySlide,
    ResearchInnovationEducationSlide,
    AboutDepuySynthes,
    TraumaChallanges,
    AboutJandJSlide,
    AboutDepuySynthesSecond,
    TrumaTableBySiteOfCare1,
    TrumaTableBySiteOfCare2,
    TrumaTableBySiteOfCare3,
    TrumaTableBySiteOfCare4,
    Esims,
    TraumaAnalysisToolDemo,
    UniversalSmallFrag11,
    HipFractureCareSlide,
    ReadyForAnythingSlide,
    CompleteSolutionsSlide,
    BroadPortfolioSlide,
    InnovationTimelineSlide,
  },

  data() {
    return {
      surgeonPlan,
      savingSummary,
      overviewContent,
      introSlide,
      trainingPlan,
    };
    
  },
  mounted() {
    this.printPDF();
  },
  methods: {
    printPDF () {
      setTimeout(function () {
        window.print();
      }, 5000);
    }
  },
};
</script>

<style>
.pdf-slide-layout{
  width: 1280px;
  height: 720px;
  @apply mx-auto;
  @apply mb-48;
  @apply border-2;
}
</style>
