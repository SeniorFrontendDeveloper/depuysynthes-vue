<template>
  <table class="w-full">
    <thead
      class="bg-gray-75 text-left text-xs font-bold  uppercase tracking-wider w-full rounded-lg"
    >
      <tr>
        <th class="px-3">
          Link Name
        </th>
        <th>
          Client Name
        </th>
        <th>
          Views
        </th>
        <th>
          Created On
        </th>
        <th />
      </tr>
    </thead>
    <tbody class="divide-y">
      <published-link-row
        v-for="(link, index) in links"
        :key="index"
        :link="link" 
      />
    </tbody>
  </table>
</template>
<script>
import PublishedLinkRow from './PublishedLinkRow.vue';
export default {
  components: {  PublishedLinkRow },
  props:{
    publishedLinks:{type:Array, required:true}
  },

  setup(props){
    const links =  [].concat(...props.publishedLinks.map(({links}) => links));
    return {links}
  }
}
</script>

<style scoped lang="postcss">

th{
  @apply py-3 text-base font-normal font-Arial;
}
</style>