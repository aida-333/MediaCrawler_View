import Vue from 'vue'
import "reset-css" // 引入重置样式(清楚默认样式)
// import {Row,Button,Radio} from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false
Vue.use(router);
// 全局注册element-ui组件库
Vue.use(ElementUI);
// 按需引入element-ui组件库
// Vue.use(Row);
// Vue.use(Button);
// Vue.use(Radio)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
