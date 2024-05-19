import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
// 1、创建路由组件
import HomeView from '@/views/HomeView.vue'

// 2、配置路由映射：组件和路径映射关系

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/LoginView.vue')
    }
]
const router = new VueRouter({
    mode:'history',
    routes
})

export default router