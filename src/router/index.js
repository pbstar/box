import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home'
import boxs from '../views/boxs'
import mine from '../views/mine'
import login from '../views/login'
import pc from '../views/pc'
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
        path: '/pc',
        name: 'pc',
        component: pc,
        meta: { title: '暂未开通pc端' }
    }
]
Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
