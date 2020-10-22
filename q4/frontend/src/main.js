import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.filter("truncate", function(text, limit) {
  if (!text) return "";
  return text.slice(0, limit) + "...";
});

Vue.filter("pluralize", function(number, word) {
  if (!number) return "";
  if (!word) return number;
  return number + (number > 1 || number === 0 ? ` ${word}s` : ` ${word}`);
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
