import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// 1、创建路由组件
import HomeView from '@/views/HomeView.vue'



// 2、配置路由映射：组件和路径映射关系
const routes = [
    
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('@/views/login/LoginView.vue')
    },
    {
        path:'/xhs',
        name:'xhs',
        component:()=>import('@/views/sys_views/XHSView.vue')
    },

    
]

// 3、
/*
// 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
*/
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

// 将router实例对外进行暴露
export default router




