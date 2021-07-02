<template>
  <section class="h-full slide-1-container">
    <!-- content div -->
    <div class="flex flex-col gap-y-4 h-full">
      <div class="title font-bold text-white text-4xl mt-12 flex flex-row justify-center">
        <p class="bg-gray-900 rounded-md bg-opacity-60 px-6 w-1/3 text-center py-2">
          How it works
        </p>
      </div>
      <div class="content flex flex-row justify-center">
        <img
          src="@/assets/images/slides/saving/sav8-background.png"
          alt=""
        >
      </div>
      <div class="flex flex-row h-32 w-1/2  rounded-r-lg bg-gray-50">
        <div class="flex flex-row justify-center px-2 my-5 w-1/2">
          <p class="resource font-sans font-bold text-lg w-1/2 h-3/4">
            Resource to Help Analyze Trauma Spend
          </p>
        </div>
        <div class="flex flex-col border-l w-1/2 pl-4 pr-4 my-5 bColor">
          <img
            src="@/assets/logo/logo_rgb.png"
            alt=""
            class="h-2/3"
          >
          <p class="aTool font-sans font-semibold text-lg h-1/3 mt-2">
            Analysis Tool
          </p>
        </div>
      </div>
      <div class="flex flex-row mx-3">
        <div class="flex-1 text-left">
          <p class="text-xxs flt">
            For demonstration purposes only. Actual results may vary depending on hospital efficiency.
          </p>
          <p class="text-xxs flt">
            This document contains confidential and proprietary trade secrets of DePuy Synthes Sales, Inc. Its contents may not be disclosed by an authorized recipient without prior written consent of DePuy Synthes.
          </p>
        </div>
        <div class="flex-1">
          <p class="text-white text-xs text-right">
            © DePuy Synthes 2020. All rights reserved. 144492-200623  DSUS
          </p>
          <p class="text-white text-xs text-right">
            The third party trademarks used herein are the trademarks of their respective owners.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.slide-1-container {
  background: url('@/assets/images/slides/saving/sav8-background.jpg') no-repeat center center;
  background-size: cover;
  background-position: top;
}

.resource {
  color: #212121;
}

.bColor {
  border-left-color: #8f8f8f;
  border-left-width: 1px;
}

.aTool {
color: #c8102e;
}

.flt {
  color: #bfbfbf;
}
</style>
