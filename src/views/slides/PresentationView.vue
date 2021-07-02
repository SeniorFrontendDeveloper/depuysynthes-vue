<template>
  <DpPresentation :prev-route="prevRoute">
    <template #mainView>
      <IntroductionSlide
        data-background-color="white"
        :intro-slide="introSlide"
      />
      <PartnershipSlide data-background-color="white" />
      <AboutJandJSlide data-background-color="white" />
      <AboutDepuySynthes data-background-color="white" />
      <AboutDepuySynthesSecond data-background-color="white" />
      <TraumaChallanges data-background-color="white" />
      <TrumaTableBySiteOfCare1 data-background-color="white" />
      <TrumaTableBySiteOfCare2 data-background-color="white" />
      <TrumaTableBySiteOfCare3 data-background-color="white" />
      <TrumaTableBySiteOfCare4 data-background-color="white" />
      <SynthesTraumaSlide data-background-color="white" />

      <!-- slide 18 -->
      <SurgeonPlanSlide
        :surgeon-plan="surgeonPlan"
        :overview-content="overviewContent"
        data-background-color="white"
      />
      <!-- 20 -->
      <DataObsAndPotSav03 data-background-color="white" />
      <!-- 21 -->
      <OrthopedicTraumaSpend04 data-background-color="white" />
      <!-- 23 -->
      <AdvantagesSimplifiedPortfolio06 data-background-color="white" />


      <!-- 24 -->
      <TraumaAnalysisToolDemo data-background-color="white" />

      <!-- 30 -->
      <ProposedSolutions14 data-background-color="white" />
      <!-- 31 -->
      <sav15 data-background-color="white" />
      <!-- 32 -->
      <ReusableSterilizationContainer09 data-background-color="white" />
      <!-- 34 -->
      <UniversalSmallFrag11 data-background-color="white" />
      <!-- 36 -->
      <Esims data-background-color="white" />
      <!-- 40 -->
      <SavingSummary
        :saving-summary="savingSummary"
        data-background-color="white"
      />
      <!-- 49 -->
      <FutureLeadersSlide data-background-color="white" />
      <!-- 50 -->
      <TrainingPlanWithCalnder data-background-color="white" />
      <!-- 22 -->
      <ProceduralEfficiencySlide data-background-color="white" />
      <!-- 44 -->
      <ResearchInnovationEducationSlide data-background-color="white" />
      <!-- 45 -->
      <HipFractureCareSlide data-background-color="white" />
      <!-- 52 -->
      <RobustTraumaPortfolioSlide data-background-color="white" />
      <!-- 53 -->
      <ReadyForAnythingSlide data-background-color="white" />
      <!-- 54 -->
      <CompleteSolutionsSlide data-background-color="white" />
      <!-- 55 -->
      <BroadPortfolioSlide data-background-color="white" />
      <!-- 56 -->
      <InnovationTimelineSlide data-background-color="white" />
      <!-- 57 -->
      <ProPakSlide data-background-color="white" />
      <!-- 58 -->
      <SynthesProPakSlide data-background-color="white" />
    </template>
  </DpPresentation>
</template>

<script>
import DpPresentation from "@/components/slides/DpPresentation.vue";
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
import DataObsAndPotSav03 from "@/components/slides/DataObsAndPotSav03.vue";
import OrthopedicTraumaSpend04 from "@/components/slides/OrthopedicTraumaSpend04.vue"
import AdvantagesSimplifiedPortfolio06 from "@/components/slides/AdvantagesSimplifiedPortfolio06.vue";
import sav15 from "@/components/slides/sav15.vue"
import ReusableSterilizationContainer09 from "@/components/slides/ReusableSterilizationContainer09.vue"
import ProposedSolutions14 from "@/components/slides/ProposedSolutions14.vue"
import ProPakSlide from "@/components/slides/57.Pro-PakConstructs.vue";
import SynthesProPakSlide from "@/components/slides/58.SynthesProPak.vue";
import RobustTraumaPortfolioSlide from "@/components/slides/52.RobustTraumaPortfolio.vue";
import FutureLeadersSlide from "@/components/slides/49.FutureLeaders.vue";

import surgeonPlan from "@/data/slideContent/surgeonPlan.json";
import savingSummary from "@/data/slideContent/savingSummary.json";
import overviewContent from "@/data/slideContent/overviewContent.js";
import introSlide from "@/data/slideContent/introSlide.js";
import trainingPlan from "@/data/slideContent/trainingPlan.js"

export default {
  components: {
    DpPresentation,
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
    OrthopedicTraumaSpend04,
    DataObsAndPotSav03,
    AdvantagesSimplifiedPortfolio06,
    sav15,
    ReusableSterilizationContainer09,
    ProposedSolutions14,
    ProPakSlide,
    SynthesProPakSlide,
    RobustTraumaPortfolioSlide,
    FutureLeadersSlide,
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.prevRoute = from.name;
    });
  },
  data() {
    const prevRoute = null;
    return {
      surgeonPlan,
      savingSummary,
      overviewContent,
      introSlide,
      trainingPlan,
      prevRoute,
    };
  },

  mounted() {
    if ("print-pdf" in this.$route.query) {
      this.$nextTick(() => window.print());
    }
  },
};
</script>

<style>
@import "reveal.js/dist/reveal.css";

.reveal .progress {
  background-color: unset;
}
@media (max-width: 768px) {
  .reveal {
    overflow: auto !important;
  }
  .reveal .slides {
    overflow: hidden !important;
  }
}
</style>
