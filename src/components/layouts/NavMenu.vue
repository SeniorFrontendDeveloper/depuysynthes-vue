<template>
  <div
    class="flex flex-col py-6  bg-white borde-2 rounded-xl space-y-4"
  >
    <div
      class="flex px-5 items-center space-x-2 border-t border-b py-3 cursor-pointer hover:bg-gray-75"
      @click="logout"
    >
      <h1 class="text-normal">
        Log out
      </h1>
    </div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default {
  setup(){
    const store = useStore();
    const router = useRouter();
  

    const logout = async ()=>{

      await store.dispatch('auth/signout')
      router.push({name:'login'})
    }

    return{ logout}
  },
}
</script>