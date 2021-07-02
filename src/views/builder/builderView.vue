<template>
  <div class="w-full min-w-1040 px-7 pt-5">
    <Header />
    <div class="flex space-x-10">
      <div class="w-1/4 min-w-72">
        <SideBar />
      </div>
      <Body class="flex-grow" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/builder/builderHeader.vue";
import SideBar from '@/components/builder/builderSideBar.vue';
import Body from '@/components/builder/builderBody.vue';
export default {
  components: {
    Header,
    SideBar,
    Body
  },
};
</script>
