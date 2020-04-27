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

import { Tabs,Comment,List,Tooltip,Icon,Avatar,Menu,Layout,Upload,Modal,Form,FormModel,Input,Button,Message,Row,Col,Checkbox,} from 'ant-design-vue';

//导入axios
import axios from 'axios'
Vue.prototype.$http = axios

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

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})