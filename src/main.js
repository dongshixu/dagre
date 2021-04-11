/*
 * @Descripttion: 
 * @version: 
 * @Author: xds
 * @Date: 2021-04-05 19:31:21
 * @LastEditors: xds
 * @LastEditTime: 2021-04-05 19:53:58
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUi from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUi)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
