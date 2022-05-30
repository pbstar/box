import Vue from 'vue'
import App from './App.vue'
import router from './router'
import httphelper from './assets/js/http.js';
import Vant from 'vant'
import 'vant/lib/index.css';
import './assets/css/public.css';
let isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);

Vue.config.productionTip = false
Vue.prototype.$http = httphelper;
Vue.prototype.$isMobile = isMobile;
Vue.use(Vant)

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    if (to.meta.requireAuth) {
        if (localStorage.getItem('ResData')) {
            next();
        } else {
            next({
                path: '/login'
            });
        }
    }
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
