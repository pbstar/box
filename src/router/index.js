import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home'
import boxs from '../views/boxs'
import mine from '../views/mine'
import login from '../views/login'
import register from '../views/login/register'
import pc from '../views/pc'
import nopage from '../views/404'
const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
        meta: { navShow: true }
    }, {
        path: '/boxs',
        name: 'boxs',
        component: boxs,
        meta: { navShow: true }
    }, {
        path: '/mine',
        name: 'mine',
        component: mine,
        meta: { navShow: true, requireAuth: true }
    }, {
        path: '/login',
        name: 'login',
        component: login
    }, {
        path: '/register',
        name: 'register',
        component: register
    }, {
        path: '/pc',
        name: 'pc',
        component: pc,
        meta: { title: '暂未开通pc端' }
    }, {
        path: '*',
        name: '404',
        component: nopage,
        meta: { title: '未找到该页面' }
    }
]
Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
