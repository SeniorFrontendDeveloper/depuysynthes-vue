<template>
  <base-card class="bg-secondary text-white font-semibold rounded-xl">
    <div class="flex-col text-left space-y-3">
      <h1 class="text-header-jnj text-white">
        Start planning your next perfect pitch
      </h1>
      <p class="text-sm opacity-70">
        This Gladiator Journey is designed to guide you through pricing and contracting for a well executed proposal.
      </p>
      <div class="flex items-center space-x-10">
        <dp-link-button
          :to="{ name: 'new-rfp' }"
          text="Get Started"
          class="bg-accent-blue px-16 font-semibold text-white"
        />
        <router-link
          :to="{ name: 'support' }"
          class="font-semibold"
        >
          Need Help
        </router-link>
      </div>
    </div>
    <SvgIcon name="gladiator" />
  </base-card>
</template>
<script>
import BaseCard from "@/components/BaseCard.vue";
import DpLinkButton from "@/components/buttons/DpLinkButton.vue";

export default {
  components: {
    BaseCard,
    DpLinkButton,
  },
};
</script>
