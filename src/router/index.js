import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home' //首页
import Me from '@/pages/Me/Me'
import Answer from '@/pages/Answer/Answer'
const Comment=()=>import('@/pages/Answer/Children/Comment')

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/home',
        name: 'home',
        component: Home,
        children: []
    }, {
        path: '/me',
        name: 'me',
        component: Me,
        children: []
    },{
        path:'/answer',
        name:'answer',
        component:Answer,
        children:[{
            path:'comment',
            name:'comment',
            component:Comment
        }]
    },{
        path: '/',
        redirect: '/home'
    },],
    mode:'history'
})