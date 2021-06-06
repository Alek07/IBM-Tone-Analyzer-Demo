import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import { state, getters, mutations, actions } from "./store";

Vue.config.productionTip = false;

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
