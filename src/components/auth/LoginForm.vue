<template>
  <div
    class="flex flex-col items-center my-auto space-y-8 w-full"
  >
    <h1 class="font-medium text-4xl">
      Login to your account
    </h1>

    <div class="max-w-md w-full">
      <form
        class="mt-8 space-y-6"
        @submit.prevent="signIn"
      >
        <login-input
          id="email"
          v-model="username"
          type="email"
          label="Email Address"
          placeholder="Your Email / Username"
          icon="email"
        />
        <login-input
          id="password"
          v-model="password"
          :type="passwordType"
          label="Password"
          placeholder="Enter Password"
          icon="password"
          initial-input-type="password"
          @toggle-type="passwordType === 'password' ? passwordType = 'text' : passwordType= 'password' "
        />

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              class="h-5 w-5 rounded checked:bg-primary"
            >
            <label
              for="remember_me"
              class="ml-2 text-gray-500"
            >
              Remember me
            </label>
          </div>

          <a
            href="#"
            class="font-bold"
          > Forgot password? </a>
        </div>

        <dp-button
          :text="!signInLoading ? 'Sign In': 'Signing In ...'"
          :loading="signInLoading"
          :disabled="signInDisabled"
          :class="signInDisabled ? 'opacity-50' : ''"
          class="w-full py-3 uppercase bg-gradient-to-r from-primary-grad-from to-primary-grad-to font-semibold text-white bg-secondary"
          @click="signIn"
        />

        <p
          v-if="errorMessage.length > 0"
          class="text-red-500"
        >
          {{ errorMessage }}
        </p>

        <div class="flex items-center justify-center">
          <a
            href="#"
            class="font-semibold text-sm text-gray-500"
          >
            Contact Admin
          </a>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { computed, ref } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import LoginInput from "@/components/inputs/LoginInput.vue";
import DpButton from '../buttons/DpButton.vue';
export default {
  components: { DpButton, LoginInput },

  setup() {
    const store = useStore();
    const router = useRouter()
    const username = ref("");
    const password = ref("");
    const signInLoading = ref(false);
    const errorMessage = ref("");
    const passwordType = ref("password")

    const signInDisabled = computed(() => {
      return !(username.value.length > 0 && password.value.length > 0) || signInLoading.value;
    });

    const  signIn = async () => {
      try {
        signInLoading.value = true
        errorMessage.value = ""
        await store.dispatch('auth/signIn', {username: username.value, password: password.value})
        signInLoading.value = false
        const authResponse = await  store.getters['auth/authResponse']

        if(authResponse.challengeName === "NEW_PASSWORD_REQUIRED"){
          router.push({
            name:'newPassword'
          })
        } else {
          router.push({
            name:'dashboard'
          })
        }
      } catch (err) {
        errorMessage.value = err?.message || err
        signInLoading.value = false
      }

    }

    return {
      signInDisabled,
      username,
      password,
      signInLoading,
      errorMessage,
      passwordType,
      signIn,
    };
  },
}
</script>
