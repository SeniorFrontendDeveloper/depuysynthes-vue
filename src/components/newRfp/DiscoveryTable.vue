<template>
  <table class="w-full">
    <tbody>
      <tr
        v-for="(discovery, index) in discoveries"
        :key="index"
        class="flex space-x-8 items-center"
      >
        <td>
          <h1 class="text-title-jnj uppercase">
            {{ discovery.title }}
          </h1>
        </td>
        <td>
          <input
            v-model="discovery.annual"
            placeholder="Annual $(M)"
          >
        </td>
              
        <td>
          <input
            v-model="discovery.ms"
            type="text"
            placeholder="MS%"
          >
        </td>
        <td>
          <input
            v-model="discovery.need"
            type="text"
            placeholder="Competition Notes"
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props:{
    discoveries:{type:Array, required:true}
  }
}
</script>

<style scoped lang="postcss">
input {
  @apply text-base font-normal leading-relaxed py-4 px-3 rounded-lg bg-gray-50 w-full;
}

th {
  @apply py-3 text-base font-normal font-Arial;
}
td {
  @apply w-1/4;
}
.radio-input{
  @apply w-5 h-5 border-2 border-gray-450;
}

</style>