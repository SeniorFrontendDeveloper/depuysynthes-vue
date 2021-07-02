<template>
  <div class="flex flex-col">
    <link-detail-item
      v-for="link, index in links"
      :key="index"
      :link="link"
    />
  </div>
</template>
<script>
import LinkDetailItem from "./LinkDetailItem.vue";
export default {
  components: {
    LinkDetailItem,
  },
  props:{links:{type:Array, required:true}},
};
</script>
