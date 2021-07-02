<template>
  <page-wrapper title="Settings">
    <base-card
      class="p-0 rounded-2xl"
      :card-style="'py-4 bg-white'"
    >
      <div class="flex flex-col w-full space-y-5">
        <div class="flex justify-between items-center">
          <div class="flex px-8">
            <h1 class="text-header-jnj text-primary">
              Account Settings
            </h1>
          </div>
          <div class="flex border items-center px-4 rounded-lg space-x-2">
            <svg-icon
              class="w-5 h-5"
              name="search"
            />
            <input
              v-model="searchTerm"
              placeholder="Search Files"
              class="py-3 my-auto focus:outline-none"
            >
          </div>
        </div>
        <tab-panel
          :tab-items="tabItems"
          :active-item="'Email Body'"
        />
        <email-body />
      </div>
    </base-card>
  </page-wrapper>
</template>

<script>
import TabPanel from "@/components/setting/TabPanel.vue";
import EmailBody from "@/components/setting/EmailBody.vue";
import PageWrapper from "@/components/PageWrapper.vue";
import BaseCard from '@/components/BaseCard.vue';
import SvgIcon from '@/components/SvgIcon.vue';

const TAB_ITEMS = [
  {
    title: "Profile",
    link: "settings-profile"
  },
  {
    title: "Email Body",
    link: "settings-email-body"
  },
  {
    title: "Custom Slides",
    link: "settings-custom-slides"
  },
  {
    title: "Change Password",
    link: "settings-change-password"
  },
];

export default {
  components: {
    TabPanel,
    EmailBody,
    PageWrapper,
    BaseCard,
    SvgIcon,
  },
  setup(){
    const tabItems = TAB_ITEMS;

    return {
      tabItems,
    }
  }
};
</script>
