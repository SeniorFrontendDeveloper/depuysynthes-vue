<template>
  <page-wrapper title="">
    <builder-header />
    <base-card class="min-h-screen border-none rounded-3xl py-7 divide-x justify-between">
      <div class="flex flex-col space-y-8 w-full">
        <router-link
          class="flex space-x-4 items-center"
          :to="{
            name: 'builder',
            params: {
              presentationId: 'presentation1',
              slideId: 'intro'
            }
          }"
        >
          <SvgIcon
            name="left_arrow_2"
            class="text-primary w-6 h-6"
          />
          <h1 class="text-primary text-2xl font-medium">
            Presentation
          </h1>
        </router-link>
        <div
          v-if="links.length > 0"
          class="flex border-t border-b space-x-4 items-center"
        >
          <router-link
            v-for="link in links"
            :key="link.linkId"
            :to="{
              name: 'update-link',
              params: {
                linkId: link.linkId,
                presentationId: link.presentationId,
              }
            }"
          >
            <h1
              class="py-3 px-3 cursor-pointer"
              :class="
                activeLink?.linkId === link.linkId
                  ? 'bg-accent-blue text-white'
                  : 'bg-white text-gray-875'
              "
            >
              {{ link.target }}
            </h1>
          </router-link>
          <dp-button
            text="+"
            class="bg-primary h-10 flex items-center text-2xl rounded-lg text-white"
            @click="createNewLink"
          />
        </div>
        <div class="flex flex-wrap ">
          <slide-item
            v-for="slide in slides"
            :key="slide.title"
            :slide="slide"
            class="w-1/5 mr-8 mt-8"
            @toggle-selection="slide.selected = !slide.selected"
          />
        </div>
      </div>
      <link-form
        :active-link="activeLink"
        :links="links"
        @create-link="saveLink"
      />
    </base-card>
  </page-wrapper>
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";
import PageWrapper from "@/components/PageWrapper.vue";
import LinkForm from "@/components/newRfp/LinkForm.vue";
import SlideItem from "@/components/newRfp/SlideItem.vue";
import builderHeader from "@/components/builder/builderHeader.vue";
import DpButton from "@/components/buttons/DpButton.vue"
import {  computed } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import { useStore } from 'vuex';

const DEFAULT_SLIDES = [
  {
    title: "Slide 1",
    subTitle: "Introduction",
    selected:true,
  },
  {
    title: "Slide 2",
    subTitle: "Our Story",
    selected:true,
  },
  {
    title: "Slide 3",
    subTitle: "Spend and Saving",
    selected:true,
  },
  {
    title: "Slide 4",
    subTitle: "Milestones",
    selected:true,
  },
  {
    title: "Slide 5",
    subTitle: "Breakdown of ..",
    selected:true,
  },
]
export default {
  components: {
    PageWrapper,
    BaseCard,
    builderHeader,
    LinkForm,
    SlideItem,
    DpButton
  },

  setup() {
    const store = useStore();
    const route =  useRoute();

    const presentations = computed(() => store.getters['rfps/getPublishedLinks'])

    const presentation = computed(() => presentations.value.find(
      (presentation) => presentation.presentationId == route.params.presentationId)
    );

    const links = computed(() => presentation.value.links)

    const activeLink = computed(() => links.value.find((link) => link.linkId == useRoute().params.linkId));
    const slides =  computed(() => {

      let links = [];
      activeLink.value ? links = JSON.parse(JSON.stringify(activeLink.value.slides)) : links= JSON.parse(JSON.stringify(DEFAULT_SLIDES));

      return links;
    })
    
    slides.value = activeLink.value ? JSON.parse(JSON.stringify(activeLink.value.slides)) : JSON.parse(JSON.stringify(DEFAULT_SLIDES))

    const router = useRouter();
    const saveLink = (link) => {

      if (link.linkId) return; // update link
      link.linkId = links.value.length + 1;
      link.slides = JSON.parse(JSON.stringify(slides.value));
      link.presentationId = presentation.value.presentationId

      const tempLink = { ...link };
      // publishLink
      store.dispatch('rfps/publishLink',tempLink);

      router.push({
        name: "update-link",
        params: {
          linkId: link.linkId,
          presentationId: presentation.value.presentationId,
        }
      })
    };

    const createNewLink = ()=> {

      slides.value = JSON.parse(JSON.stringify(DEFAULT_SLIDES));
      router.push({
        name: "create-link",
        params: {
          presentationId: presentation.value.presentationId,
        },
      })

    };

    return { links, saveLink, activeLink, slides, createNewLink };
  },
};
</script>
