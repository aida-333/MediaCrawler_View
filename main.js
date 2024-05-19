import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/index.js'
import ElementUI from 'element-ui'
import "reset-css" // 引入重置样式(清楚默认样式)
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')