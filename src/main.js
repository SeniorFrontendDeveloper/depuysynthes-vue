import { createApp } from "vue";
import App from "./App.vue";
import store from "@/store";
import router from "./router/router";
import AppLayout from "@/layouts/AppLayout.vue";
import AppLayoutMain from "@/layouts/AppLayoutMain.vue";
import AppLayoutDefault from "@/layouts/AppLayoutDefault.vue";
import SvgIcon from "@/components/SvgIcon.vue";
import "vite-plugin-svg-icons/register";

import "./index.css";

createApp(App)
  .use(router)
  .use(store)
  .component("AppLayout", AppLayout)
  .component("layout-main", AppLayoutMain)
  .component("SvgIcon", SvgIcon)
  .component("layout-default", AppLayoutDefault)
  .mount("#app");
