<template>
  <table class="w-full">
    <tbody>
      <tr
        v-for="(stakeHolder, index) in stakeHolders"
        :key="index"
        class="flex space-x-8 items-center"
      >
        <td>
          <h1 class="text-title-jnj uppercase">
            {{ stakeHolder.title }}
          </h1>
        </td>
        <td>
          <input
            v-model="stakeHolder.name"
            placeholder="Name"
          >
        </td>
              
        <td>
          <input
            v-model="stakeHolder.individualInfo"
            type="text"
            placeholder="Info on the individual"
          >
        </td>
        <td class="w-1/4">
          <input
            v-model="stakeHolder.need"
            type="text"
            class="w-full"
            placeholder="What They Want For Their Hospital"
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props:{
    stakeHolders:{type:Array, required:true}
  }
}
</script>

<style scoped lang="postcss">
input {
  @apply text-base font-normal leading-relaxed py-4 px-3 rounded-lg bg-gray-50 w-full;
}

th{
  @apply py-3 text-base font-normal font-Arial;
}
td {
  @apply w-1/4;
}
.radio-input{
  @apply w-5 h-5 border-2 border-gray-450;
}

</style>