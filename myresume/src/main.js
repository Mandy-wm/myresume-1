import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {Container, Header, Footer, Main,  Menu, MenuItem}  from 'element-ui'

Vue.use(Container);
Vue.use(Header);
Vue.use(Footer);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Main);



Vue.config.productionTip = false;







new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
