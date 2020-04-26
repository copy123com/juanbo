import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home' //首页
import Me from '@/pages/Me/Me'
import Answer from '@/pages/Answer/Answer'

const Comment = () =>
    import ('@/pages/Answer/Children/Comment')
const List = () =>
    import ('@/pages/List/List')
const Calculator = () =>
    import ('@/pages/Home/Children/Calculator')
import Admin from '@/pages/Admin/Index'
import Problem from '@/pages/Admin/Children/Problem'
import Member from '@/pages/Admin/Children/Member'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'Home',
        component: Home,
        children: []
    }, {
        path: '/me',
        name: 'Me',
        component: Me,
        children: []
    }, {
        path: '/answer',
        name: 'Answer',
        component: Answer,
        children: [{
            path: 'comment',
            name: 'Comment',
            component: Comment
        }]
    }, {
        path: '/list',
        name: 'List',
        component: List
    }, {
        path: '/calculator',
        name: 'calculator',
        component: Calculator
    }, {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        children: [
            { path: 'problem', name: 'Problem', component: Problem },
            { path: 'member', name: 'Member', component: Member },
            { path: '/admin', redirect: '/admin/problem' }
        ]
    }],
    mode: 'history'
})