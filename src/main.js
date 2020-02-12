import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
import JwPagination from "jw-vue-pagination";
Vue.component("jw-pagination", JwPagination);
new Vue({
  render: h => h(App)
}).$mount("#app");
