<template>
  <div class="flex flex-col w-full">
    <div class="flex space-x-8 items-center">
      <h1 class="text-title-jnj uppercase min-w-64">
        Gpo Affiliation
      </h1>
      <input
        v-model="contractDetail.gpoAffilation"
        placeholder="Type Here"
      >
    </div>
    <div class="flex space-x-8 items-center">
      <h1 class="text-title-jnj uppercase min-w-64">
        Contract # And Name
      </h1>
      <input
        v-model="contractDetail.numberAndName"
        placeholder="Type Here"
      >
    </div>
    <div class="flex space-x-8 items-center">
      <h1 class="text-title-jnj uppercase min-w-64">
        Contract End Date
      </h1>
      <input
        v-model="contractDetail.gpoAffilation"
        placeholder="Type Here"
      >
    </div>
    <div class="flex space-x-8 items-center">
      <h1 class="text-title-jnj uppercase min-w-64">
        Notes
      </h1>
      <input
        v-model="contractDetail.gpoAffilation"
        placeholder="Type Here"
      >
    </div>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity'
export default {
  props:{
    contract:{type:Object, required:true}
  },

  setup(props){
    const contractDetail = ref(props.contract)
    return {
      contractDetail
    }
  }
  
}
</script>

<style scoped lang="postcss">
input {
  @apply text-base font-normal leading-relaxed py-4 px-3 rounded-lg bg-gray-50 w-1/4;
}


.radio-input{
  @apply w-5 h-5 border-2 border-gray-450;
}

</style>