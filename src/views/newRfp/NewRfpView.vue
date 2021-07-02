<template>
  <page-wrapper title="">
    <builder-header />
    <rfp-step-wrapper>
      <customer-info-step v-if="currentStep == 1" />
      <the-team-step v-if="currentStep == 2" />
      <the-customer-step v-else-if="currentStep === 3" />
      <the-discovery-step v-if="currentStep === 4" />
      <the-contract-step v-if="currentStep === 5" />
      <slide-selection-step v-if="currentStep == 6" />
    </rfp-step-wrapper>
  </page-wrapper>
</template>

<script>
import PageWrapper from "@/components/PageWrapper.vue";
import builderHeader from "@/components/builder/builderHeader.vue";
import RfpStepWrapper from "@/components/newRfp/RfpStepWrapper.vue";
import CustomerInfoStep from "@/components/newRfp/CustomerInfoStep.vue";
import SlideSelectionStep from "@/components/newRfp/SlideSelectionStep.vue";
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import TheTeamStep from '@/components/newRfp/TheTeamStep.vue';
import TheCustomerStep from '@/components/newRfp/TheCustomerStep.vue';
import TheDiscoveryStep from '@/components/newRfp/TheDiscoveryStep.vue';
import TheContractStep from '@/components/newRfp/TheContractStep.vue';

export default {
  components: {
    PageWrapper,
    builderHeader,
    RfpStepWrapper,
    CustomerInfoStep,
    SlideSelectionStep,
    TheTeamStep,
    TheCustomerStep,
    TheDiscoveryStep,
    TheContractStep
  },
  setup() {
    const route = useRoute();
    const currentStep = computed(() => Number(route.params.step) || 1);

    return { currentStep };
  },
};
</script>
