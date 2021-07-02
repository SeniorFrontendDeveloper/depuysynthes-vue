<template>
  <div>
    <img
      v-if="userDetail.profileImg"
      class="w-8 h-8 rounded-full"
      :src="userDetail.profileImg"
      alt=""
      width="384"
      height="512"
    >
    <div
      v-else
      :style="{ 'background-color': bgColor }"
      class="w-8 h-8 text-white rounded-full flex items-center justify-center"
    >
      <h1 class="text-sm font-medium">
        {{ initials }}
      </h1>
    </div>
  </div>
</template>
<script>
const BG_COLORS = [
  "#333D79FF",
  "#F2EDD7FF",
  "#F93822FF",
  "#2D2926FF",
  "#616247FF",
  "#2BAE66FF",
  "#195190FF",
  "#F2AA4CFF",
  "#2C5F2D",
  "#00203FFF",
];
export default {
  props: {
    userDetail: {type: Object, required:true},
  },

  setup(props) {
    const bgColor = BG_COLORS[Math.floor(Math.random() * 10)];
    const initials = props.userDetail.name.match(/\b\w/g).join("");

    return { bgColor, initials };
  },
};
</script>
