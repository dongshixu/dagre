/*
 * @Descripttion: 
 * @version: 
 * @Author: xds
 * @Date: 2021-04-05 19:31:21
 * @LastEditors: xds
 * @LastEditTime: 2021-04-05 22:07:03
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {name: 'topology', path: '/topology/:id', component: () => import('@/views/topology')}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
