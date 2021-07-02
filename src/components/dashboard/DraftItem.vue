<template>
  <base-card class="w-1/2 rounded-2xl p-5 flex-col space-y-3 text-left">
    <div class="flex justify-between">
      <h1 class="text-header">
        {{ draftItem.presentationName }}
      </h1>
      <SvgIcon
        class="h-6 w-6"
        name="moreHorizontal"
      />
    </div>
    <div class="flex space-x-2 items-center">
      <img
        class="h-6 border rounded-xl"
        src="@/assets/logo/company_logo.png"
      >
      <h1>{{ draftItem.companyName }}</h1>
    </div>
    <div class="flex space-x-8">
      <div class="flex space-x-2 items-center">
        <SvgIcon
          class="h-5 w-5 text-primary"
          name="presentation"
        />

        <h1 class="text-sm text-gray-425">
          {{ draftItem.preparedSlides }}/{{ draftItem.totalSlides }}
        </h1>
      </div>
      <div class="flex space-x-2">
        <SvgIcon
          class="h-5 w-5"
          name="attachment"
        />

        <h1 class="text-sm text-gray-425">
          {{ draftItem.attachments }}
        </h1>
      </div>
    </div>
    <div class="flex-col">
      <h1 class="text-right text-gray-500">
        {{ Math.round(draftItem.preparedSlides / draftItem.totalSlides * 100) }}%
      </h1>
      <div
        class="border-2 rounded-sm border-green-400"
        :class="draftItem.preparedSlides === draftItem.totalSlides ? 'w-full' : 'w-4/5' "
      />
    </div>
    <h1>Internal Team</h1>
    <div class="flex space-x-2">
      <avatar
        v-for="member in draftItem.team"
        :key="member"
        :user-detail="member"
      />
    </div>
  </base-card>
</template>
<script>
import BaseCard from "@/components/BaseCard.vue";
import Avatar from "@/components/Avatar.vue";

export default {
  components: {
    BaseCard,
    Avatar,
  },
  props: {
    draftItem: {type:Object, required:true}
  },
};
</script>
