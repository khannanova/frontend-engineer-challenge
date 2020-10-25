import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { pluralize, truncate } from "@/filters";

Vue.config.productionTip = false;

Vue.filter("truncate", truncate);
Vue.filter("pluralize", pluralize);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
