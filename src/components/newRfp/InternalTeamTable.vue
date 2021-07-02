<template>
  <table class="w-full">
    <thead
      class="text-left text-xs font-medium  tracking-wider w-full"
    >
      <tr>
        <th scope="col">
          Role
        </th>
        <th
          scope="col"
        >
          Name
        </th>
        <th
          scope="col"
        >
          Email
        </th>
        <th
          scope="col"
        >
          Share RFP?
        </th>
        <th
          scope="col"
        >
          Access Role
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(data, index) in teamData"
        :key="index"
      >
        <td>
          <h1 class="text-title-jnj uppercase">
            {{ data.role }}
          </h1>
        </td>
        <td>
          <input
            v-model="data.name"
            placeholder="Enter name here"
          >
        </td>
              
        <td>
          <input
            v-model="data.email"
            type="email"
            class="w-full"
            placeholder="Enter email here"
          >
        </td>
        <td>
          <div class="flex space-x-5">
            <div class="flex items-center space-x-2">
              <input
                id="shareRfpYes"
                name="shareRfp"
                class="radio-input"
                checked
                type="radio"
              >
              <label
                for="shareRfpYes"
                class="text-normal text-gray-450"
              >Yes </label>
            </div>
            <div class="flex items-center space-x-2">
              <input
                id="shareRfpNo"
                name="shareRfp"

                class="radio-input"
                type="radio"
              >
              <label
                for="shareRfpNo"
                class="text-normal text-gray-450"
              >No </label>
            </div>
          </div>
        </td>
        <td>
          <div class="flex space-x-5">
            <div class="flex items-center space-x-2">
              <input
                id="viewAccessRole"
                name="accessRole"
                class="radio-input"
                checked
                type="radio"
              >
              <label
                for="viewAccessRole"
                class="text-normal text-gray-450"
              >View </label>
            </div>
            <div class="flex items-center space-x-2">
              <input
                id="editAccessRole"
                name="accessRole"
                class="radio-input"
                type="radio"
              >
              <label
                for="editAccessRole"
                class="text-normal text-gray-450"
              >Edit </label>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props:{
    teamData:{type:Array, required:true}
  }
}
</script>

<style scoped lang="postcss">
input {
  @apply text-base font-bold leading-relaxed py-4 px-3 rounded-lg bg-gray-50;
}

th{
  @apply py-3 text-base font-normal font-Arial;
}
</style>