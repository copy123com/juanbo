import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home' //首页
import Me from '@/pages/Me/Me'
import Answer from '@/pages/Answer/Answer'
const Comment=()=>import('@/pages/Answer/Children/Comment')
const List = () =>import('@/pages/List/List')
const Calculator = ()=>import('@/pages/Home/Children/Calculator')
const PutQuestionsTo = ()=>import('@/pages/PutQuestionsTo/PutQuestionsTo')
const listDetails = ()=>import('@/pages/List/listDetails')
const Register = ()=>import('@/pages/Register/Register')
const Login = ()=>import('@/pages/Login/Login')
Vue.use(Router)

 const router = new Router({
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
    },{
        path:'/putquestionsto',
        name:'putquestionsto',
        component:PutQuestionsTo
    },{
        path:'/listdetails',
        name:'listdetails',
        component:listDetails
    },{
        path:'/register',
        name:'register',
        component:Register
    },{
        path:'/login',
        name:'login',
        component:Login
    }],
    mode:'history'
})
export default router;