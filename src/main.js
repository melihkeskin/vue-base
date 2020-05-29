import Vue from "vue";
import App from "./App.vue";
import store from "./store";

// global filter
Vue.filter("snippet", (val) => {
  if (!val || typeof val != "string") {
    return "";
  }
  val = val.slice(0,50)
  return val
});

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
