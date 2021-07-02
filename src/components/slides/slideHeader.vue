<template>
  <header class="flex justify-between py-3 pr-4">
    <p class="text-4xl font-bold font-JnJ text-slidColor-1">
      {{ title }}
    </p>
    <div class="flex justify-between">
      <img
        class="h-12"
        :src="images[icon]"
      >
      <p class="text-base text-center font-bold text-blue-900">
        <span class="block pl-2">{{ name }}</span>{{ savNumber }}
      </p>
    </div>
  </header>
</template>

<script>

import sav from "@/assets/jnjIcons/dollar.png"
import edu from "@/assets/jnjIcons/eductation.png"
import medical from "@/assets/jnjIcons/medicalProfessional.png"
import plan from "@/assets/jnjIcons/plan.png"
import handshake from "@/assets/jnjIcons/handshake.png"
import quality from "@/assets/jnjIcons/quality.png"
import multiHand from "@/assets/jnjIcons/health_caring.png"


export default {

  props: {
    title: {
      type: String,
      required: true
    },
    savNumber: {
      type: Number,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
  },
  data () {
    return {
      images: {
        sav: sav,
        edu: edu,
        medical: medical,
        plan: plan,
        handshake: handshake,
        quality: quality,
        multiHand: multiHand,
      },
    }
  }
}
</script>
