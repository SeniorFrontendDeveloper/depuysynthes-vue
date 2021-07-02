<template>
  <div class="builder">
    <div class="builder__header flex justify-between items-center">
      <div class="builder__header__title ">
        <h1 class="text-left text-2xl font-medium text-green-900">
          Pitch Deck
        </h1>
        <ol
          class="list-reset py-4 rounded flex items-center bg-grey-light text-grey"
        >
          <SvgIcon
            class="w-4 h-4"
            name="homepage"
          />
          <li class="px-2">
            <router-link
              to="/dashboard"
              class="no-underline text-sm text-gray-500"
            >
              Home
            </router-link>
          </li>
          <li class="text-gray-500 text-sm">
            /
          </li>
          <li class="px-2">
            <router-link
              to="/dashboard"
              class="no-underline text-sm text-gray-500"
            >
              Get Started
            </router-link>
          </li>
          <li class="text-gray-500 text-sm">
            /
          </li>
          <li class="px-2">
            <router-link
              to="/new-rfp"
              class="no-underline text-sm text-gray-500"
            >
              Start New RFP
            </router-link>
          </li>
          <li class="text-gray-500 text-sm">
            /
          </li>
          <li class="px-2 font-medium text-green-900 text-base text-sm">
            Slide Edit
          </li>
        </ol>
      </div>
      <div class="builder__header_btns">
        <div
          v-if="isBuilder"
          class="flex"
        >
          <dp-link-button
            :to="{
              name: 'create-link',
              params: {
                presentationId: '1',
              },
            }"
            class="bg-transparent flex items-center text-accent-blue py-2 px-4 mr-3 border-accent-blue border-2 rounded-lg h-btn-builder min-h-btn-builder my-auto"
          >
            <SvgIcon
              class="w-4 h-4 mr-2"
              name="link"
            />
            Generate Link
          </dp-link-button>
          <dp-link-button
            :to="{ name: 'dashboard' }"
            class="bg-red-600 flex items-center text-white py-2 px-4 border-red-600 border-2 rounded-lg  h-btn-builder min-h-btn-builder my-auto"
          >
            <SvgIcon
              class="w-3 h-3 mr-2"
              name="times"
            />
            Exit edit mode
          </dp-link-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DpLinkButton from "@/components/buttons/DpLinkButton.vue";

export default {
  components: {
    DpLinkButton,
  },
  computed: {
    isBuilder() {
      return this.$route.name === "builder"
    },
  },
};
</script>
