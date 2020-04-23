import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home' //首页
import Me from '@/pages/Me/Me'
import Answer from '@/pages/Answer/Answer'
const Comment=()=>import('@/pages/Answer/Children/Comment')
const List = () =>import('@/pages/List/List')
const Calculator = ()=>import('@/pages/Home/Children/Calculator')

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/home'
    },{
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
        path:'/list',
        name:'list',
        component:List
    },{
        path:'/calculator',
        name:'calculator',
        component:Calculator
    }],
    mode:'history'
})