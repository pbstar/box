import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/home";
import boxs from "../views/boxs";
import mine from "../views/mine";
import set from "../views/mine/set";
import vipExchange from "../views/mine/vip/exchange";
import vipShop from "../views/mine/vip/shop";

import login from "../views/login";
import register from "../views/login/register";
import findPass from "../views/login/findPass";
import pc from "../views/pc";
import nopage from "../views/404";
const routes = [
  {
    path: "/",
    name: "home",
    component: home,
    meta: { navShow: true },
  },
  {
    path: "/boxs",
    name: "boxs",
    component: boxs,
    meta: { navShow: true },
  },
  {
    path: "/mine",
    name: "mine",
    component: mine,
    meta: { navShow: true, requireAuth: true },
  },
  {
    path: "/set",
    name: "set",
    component: set,
    meta: { requireAuth: true },
  },
  {
    path: "/vip_exchange",
    name: "vipExchange",
    component: vipExchange,
    meta: { requireAuth: true },
  },
  {
    path: "/vip_shop",
    name: "vipShop",
    component: vipShop,
    meta: { requireAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },
  {
    path: "/find_pass",
    name: "findPass",
    component: findPass,
  },
  {
    path: "/pc",
    name: "pc",
    component: pc,
    meta: { title: "暂未开通pc端" },
  },
  {
    path: "*",
    name: "404",
    component: nopage,
    meta: { title: "未找到该页面" },
  },
];
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
