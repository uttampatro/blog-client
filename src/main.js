import Vue from "vue";

import store from "./store/store";


import router from "./router";
router.beforeEach((to, from, next) => {
  if (to.path != "/login" && to.path != "/register" && to.path != "/forgetPass") {
    //Perform Authentication
    if (!store.state.isLoggedIn) {
      store.dispatch("setHeaderVisiblity", false);
      next("/login");
    } else {
      store.dispatch("setHeaderVisiblity", true);
      next();
    }
  } else {
    store.dispatch("setHeaderVisiblity", false);
    next();
  }
});

import App from "./App.vue";

//Add bootstrap
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

//Add tree view for json viewing
// import TreeView from "vue-json-tree-view";
// Vue.use(TreeView);
import JsonTree from "vue-json-tree";
Vue.component("json-tree", JsonTree);

//Add element ui
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/en";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI, { locale });

//Add hilight library for sourcode styling
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)


//Add mixins
import GeneraLMixin from "./mixins/common.js";
Vue.mixin(GeneraLMixin);

//Configure AXIOS for cross domain cookies.
var axios = require("axios");
axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error.response.status);
    if (401 === error.response.status) {
      router.push({ name: "Login" });
    }
  }
);

//Init app.vue component
new Vue({
  el: "#app",
  router: router,
  store: store,
  render: h => h(App)
});
