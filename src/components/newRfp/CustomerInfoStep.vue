<template>
  <div class="flex py-7 px-8 flex-col items-start">
    <h1>Customer Name</h1>
    <input
      class="border-b rounded w-1/3 py-3 text-primary placeholder-gray-100 outline-none text-3xl font-bold"
      value="Venice Regional Bayfront Health"
      placeholder="Enter Customer Name Here"
    >
    <div class="flex pt-10 space-x-20">
      <customer-logo />
      <div class="flex-col items-start flex">
        <h1 class="pb-6 text-base font-bold leading-none text-gray-500">
          Contacts
        </h1>
        <div class="overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table>
            <thead
              class="bg-gray-75 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-full"
            >
              <tr>
                <th scope="col">
                  Name
                </th>
                <th
                  scope="col"
                >
                  Role
                </th>
                <th
                  scope="col"
                >
                  Email
                </th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr
                v-for="i in 3"
                :key="i"
              >
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div
                      class="flex-shrink-0 h-10 w-10 bg-gray-400 rounded-full"
                    />
                    <div class="ml-4">
                      <input
                        v-model="customers[i - 1].name"
                        placeholder="Enter Name Here..."
                      >
                    </div>
                  </div>
                </td>

                <td class="px-6 py-4 whitespace-nowrap text-sm">
                  <input
                    v-model="customers[i - 1].role"
                    placeholder="Enter Role"
                  >
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <input
                    v-model="customers[i - 1].email"
                    type="email"
                    placeholder="Email here ..."
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomerLogo from "@/components/newRfp/CustomerLogo.vue";

export default {
  components: {
    CustomerLogo,
  },
  data() {
    return {
      customers: [
        {
          name: "Patrick Stewart",
          role: "Chief Operations Officer",
          email: "pstewart@vrbh.com",
        },
        {
          name: "Casey Kasem",
          role: "Lead Surgeon",
          email: "ckasem@vrbh.com",
        },
        {
          name: "",
          role: "",
          email: "",
        },
      ],
    };
  },
};
</script>

<style scoped lang="postcss">
input {
  @apply text-base font-bold leading-relaxed border-b focus:outline-none;
}

th{
  @apply px-6 py-3;
}

</style>
