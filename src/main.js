// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index' //vuex

import 'font-awesome/css/font-awesome.min.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';




import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';

import { Tabs,Comment,List,Tooltip,Icon,Avatar,Menu,Layout,Upload,Modal,Form,FormModel,Input,Button,Message,Row,Col,Checkbox, message,} from 'ant-design-vue';

//导入axios
import axios from 'axios'
Vue.prototype.$http = axios
// axios.defaults.baseURL = 'https://test.zhihao1.cn/api'
axios.defaults.baseURL = 'https://test.zhihao1.cn/api'



// axios.interceptors.request.use(

// config => {

// config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        
//         let token =sessionStorage.getItem('token');
//             console.log(token+'拦截');
// if (token) {

// config.headers.common['token'] =sessionStorage.getItem('token');

// }
// return config
// },
// err => {
// return Promise.reject(err);
// })

Vue.use(ElementUI);
Vue.use(MintUi);

Vue.use(Message);
Vue.use(Tabs);
Vue.use(Comment);
Vue.use(List);
Vue.use(Tooltip);
Vue.use(Icon);
Vue.use(Avatar);
Vue.use(Menu);
Vue.use(Layout);
Vue.use(Upload);
Vue.use(Modal);
Vue.use(Form);
Vue.use(FormModel);
Vue.use(Input);
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Checkbox);

Vue.config.productionTip = false

Vue.prototype.$message = message;
message.config({
    duration: 1,// 持续时间
    maxCount: 3 ,// 最大显示数, 超过限制时，最早的消息会被自动关闭
})
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})