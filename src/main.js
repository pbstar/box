import Vue from 'vue'
import App from './App.vue'
import router from './router'
import httphelper from './assets/js/http.js';
import unit from './assets/js/unit.js';
import Vant from 'vant'
import 'vant/lib/index.css';
import './assets/css/public.css';

Vue.config.productionTip = false
Vue.prototype.$http = httphelper;
Vue.prototype.$isMobile = unit.isMobile;
Vue.prototype.$delUrlData = unit.delUrlData;
Vue.prototype.$strToBase64 = unit.strToBase64;
Vue.prototype.$base64ToStr = unit.base64ToStr;
Vue.prototype.$urlToCode = unit.urlToCode;
Vue.prototype.$codeToUrl = unit.codeToUrl;
Vue.use(Vant)

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    } else if (from.meta.title) {
        document.title = 'box'
    }
    if (to.meta.requireAuth) {
        if (localStorage.getItem('ResData')) {
            next();
        } else {
            next({
                path: '/login'
            });
        }
    } else {
        next();
    }
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
