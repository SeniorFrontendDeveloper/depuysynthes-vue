<template>
  <div class="flex min-h-screen justify-between">
    <div class="h-full min-h-screen login-bg flex-grow" />
    <div class="flex flex-col items-center my-auto space-y-8">
      <img
        class="h-28"
        src="@/assets/logo/logo_rgb.png"
        alt="logo"
      >
      <slot />
    </div>
    <div class="h-full min-h-screen login-bg-2 flex-grow" />
  </div>
</template>
<style scoped>
.login-bg {
  background: url('@/assets/images/login-bg-left.svg') no-repeat left bottom;
  background-size: contain;
  opacity: 0.2;
}
.login-bg-2 {
  background: url('@/assets/images/login-bg-right.svg') no-repeat right top;
  background-size: contain;
    opacity: 0.2;

}
</style>