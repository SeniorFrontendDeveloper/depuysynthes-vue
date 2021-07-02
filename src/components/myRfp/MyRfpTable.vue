<template>
  <table class="w-full">
    <thead
      class="bg-gray-75 text-left text-xs font-bold  uppercase tracking-wider w-full rounded-lg"
    >
      <tr>
        <th class="px-3">
          Template Name
        </th>
        <th>
          Client
        </th>
        <th>
          Shared With
        </th>
        <th />
      </tr>
    </thead>
    <tbody class="divide-y">
      <my-rfp-row
        v-for="(rfp, index) in rfps"
        :key="index"
        :rfp="rfp" 
      />
    </tbody>
  </table>
</template>
<script>
import MyRfpRow from './MyRfpRow.vue';
export default {
  components: {  MyRfpRow },
  props:{
    rfps:{ type: Array, required:true}
  }
}
</script>

<style scoped lang="postcss">

th{
  @apply py-3 text-base font-normal font-Arial;
}
</style>