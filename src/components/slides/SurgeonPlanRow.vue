<template>
  <tr
    v-if="!expand"
    class="min-h-49 grid grid-cols-6 px-4 gap-10 my-6 border-0 rounded-md bg-slidColor-5 bg-opacity-5"
    @click="expand = true"
  >
    <td class="text-slideTableHeaderColor">
      {{ doctor.Doctors }}
    </td>
    <td class="text-accent-blue">
      ${{
        commaNumbers(
          doctor[
            "Estimated current estimate $ of business with Depuy Synthes"
          ]
        )
      }}
    </td>
    <td class="text-accent-blue">
      {{
        Math.round(doctor[
          "Estimated current estimate % of business with Depuy Synthes"
        ])
      }}%
    </td>
    <td class="text-green-variant1">
      ${{
        commaNumbers(
          doctor[
            "Estimated current estimate $ of business outside Depuy Synthes"
          ]
        )
      }}
    </td>
    <td class="text-red-variant1">
      ${{
        commaNumbers(
          doctor[
            "Estimated $ of competitor business to switch to Depuy Synthes"
          ]
        )
      }}
    </td>
    <td>
      {{
        Math.round(doctor[
          "Estimated current estimate % of business outside Depuy Synthes"
        ])
      }}%
    </td>
  </tr>
  <div
    v-else
    colspan="6"
    class="text-left mx-1 my-6 p-4 shadow border rounded-2xl border-blue-500"
    @click="expand = false"
  >
    <p class="text-slideTableHeaderColor w-full text-lg font-bold my-3">
      {{ doctor.Doctors }}
    </p>
    <div class="flex w-full">
      <div class="w-1/2">
        <span class="text-sm font-medium text-gray-500">
          With Depuy Synthes current business </span> <br>
        <span class="text-xs">
          {{ doctor["Estimated current business with Depuy Synthes"] }}
        </span>
        <div class="flex w-full text-base font-bold text-accent-blue">
          <div class="w-1/2">
            $ {{ commaNumbers(doctor["Estimated current estimate $ of business with Depuy Synthes"]) }}
          </div>
          <div class="w-1/2">
            {{ Math.round(doctor["Estimated current estimate % of business with Depuy Synthes"]) }}%
          </div>
        </div>
        <span class="text-sm font-medium text-gray-500 pt-4">
          Outside Depuy Synthes </span> <br>
        <span class="text-xs">
          {{ doctor["Estimated current business outside Depuy Synthes"] }}
        </span>
        <div class="flex w-full text-base font-bold text-red-variant1">
          <div class="w-1/2">
            $ {{ commaNumbers(doctor["Estimated current estimate $ of business outside Depuy Synthes"]) }}
          </div>
          <div class="w-1/2">
            {{ Math.round(doctor["Estimated current estimate % of business outside Depuy Synthes"]) }}%
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <span class="text-sm font-medium text-gray-500">
          Future estimate </span> <br>
        <span class="text-xs">
          {{ doctor["Estimated current business with Depuy Synthes"] }}
        </span><br>
        <span class="text-base font-bold text-green-variant1">
          ${{
            commaNumbers(
              doctor[
                "Estimated $ of competitor business to switch to Depuy Synthes"
              ]
            )
          }}
        </span> <br>
        <span class="text-sm font-medium text-gray-500 pt-4">
          Estimate $ conversion </span> <br>
        <span class="text-base font-bold text-slideTableHeaderColor">
          $ {{ commaNumbers(doctor["Estimated $ of competitor business to switch to Depuy Synthes"]) }}
        </span>
      </div>
    </div>
    <div
      class="border-t border-gray-500 border-opacity-20 mt-4 pt-1"
    >
      <span class="text-sm text-gray-500">
        DPS team feedback from Doc
      </span><br>
      <span class="text-xs">
        {{ doctor["DPS team feedback from Doc"] || "--" }}
      </span><br>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    doctor: {
      type: Object,
      required: true
    },
  },
  data () {
    return {
      expand: false,
    }
  },
  methods: {
    commaNumbers(integer) {
      if (!integer) return "";
      const pattern = /(-?\d+)(\d{3})/;
      let string = integer.toString().trim();
      while (pattern.test(string)) string = string.replace(pattern, "$1,$2");
      return `${string}.00`;
    },
  },
};
</script>

<style scoped>
td, th {
  @apply my-auto;
  border-style: hidden !important;
}
.min-h-49 {
  min-height: 49px;
}
</style>
