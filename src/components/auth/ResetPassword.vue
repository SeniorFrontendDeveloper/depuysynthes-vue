<template>
  <div
    class="flex flex-col items-center my-auto space-y-8 w-full"
  >
    <h1 class="font-medium text-4xl">
      Reset password
    </h1>

    <div class="max-w-md w-full">
      <form
        class="space-y-6"
        @submit.prevent="reset"
      >
        <div
          v-if="!resetSuccess"
          class="space-y-6"
        >
          <login-input
            id="password"
            v-model="newPassword"
            :type="passwordType"
            label="New Password"
            placeholder="New Password"
            icon="password"
            initial-input-type="password"
            @toggle-type="passwordType === 'password' ? passwordType = 'text' : passwordType= 'password' "
          />
          <login-input
            id="password"
            v-model="confirmPassword"
            :type="passwordType"
            label="Confirm Password"
            placeholder="Confirm Password"
            icon="password"
            initial-input-type="password"
            @toggle-type="passwordType === 'password' ? passwordType = 'text' : passwordType= 'password' "
          />

          <p
            v-if="errorMessage.length > 0 || passwordDoesntMatch.length > 0"
            class="text-red-500"
          >
            {{ errorMessage }}
          </p>

          <dp-button
            text="Reset"
            :loading="resetLoading"
            :disabled="disabled"
            :class="disabled ? 'opacity-50' : ''"
            class="w-full py-3 uppercase bg-gradient-to-r from-primary-grad-from to-primary-grad-to font-semibold text-white bg-secondary"
            @click="reset"
          />
        </div>
        <div
          v-else
          class="space-y-6"
        >
          <div class="text-subheader text-center space-y-1">
            <h1>Congratulations,</h1> 
            <h1>We have reset your password. You need to sign in again</h1>
            <h1> with new password.</h1>
          </div>
          <dp-link-button
            class="w-full flex py-3 border-none justify-center uppercase bg-gradient-to-r from-primary-grad-from to-primary-grad-to font-semibold text-white bg-secondary"
            :to="{name: 'login'}"
          >
            Sign In
          </dp-link-button>
        </div>

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
import { useRoute } from 'vue-router';
import LoginInput from "@/components/inputs/LoginInput.vue";
import DpButton from '../buttons/DpButton.vue';
import DpLinkButton from '../buttons/DpLinkButton.vue';
export default {
  components: { DpButton, LoginInput, DpLinkButton },

  setup() {

    const store = useStore();
    const route = useRoute()
    const newPassword = ref("");
    const confirmPassword = ref("");
    const resetLoading = ref(false);
    const errorMessage = ref("");
    const passwordType = ref("password")
    const code = ref(route.query.code);
    const username = ref(route.query.username);
    const passwordDoesntMatch = ref(false)
    const resetSuccess = ref(false)

    const disabled = computed(() => {
      return !(newPassword.value.length > 0 && confirmPassword.value.length > 0) || resetLoading.value;
    });

    const  reset = async () => {

      passwordDoesntMatch.value = newPassword.value !== confirmPassword.value

      if(passwordDoesntMatch.value) {
        errorMessage.value = "Password doesnt match"
        return
      }

      try {
        resetLoading.value = true
        errorMessage.value = ""
        await store.dispatch('auth/forgotPasswordSubmit', {
          newPassword: newPassword.value, 
          code: code.value, 
          username:username.value
        }
        )
        resetLoading.value = false
        // const authResponse = await  store.getters['auth/authResponse']
        resetSuccess.value = true
       
      }catch(err){
        errorMessage.value = err?.message || err
        resetLoading.value = false
        resetSuccess.value = false

      }

    }

    return {
      disabled,
      newPassword,
      confirmPassword,
      resetLoading,
      errorMessage,
      passwordType,
      passwordDoesntMatch,
      resetSuccess,
      reset,
    };
  },
}
</script>
