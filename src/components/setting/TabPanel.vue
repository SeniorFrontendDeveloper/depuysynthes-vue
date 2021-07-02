<template>
  <div>
    <tab-bar
      :items="tabItems"
    />
    <div class="pt-6 pl-10 pr-32">
      <div class="text-xl font-medium">
        {{ activeItem }}
      </div>
    </div>
  </div>
</template>
<script>
import TabBar from './TabBar.vue';
export default {
  components: {  TabBar },
  props:{
    tabItems: {type:Array, required:true},
    activeItem:{type:String, required:true}
  },
}
</script>

<style scoped lang="postcss">
</style>
