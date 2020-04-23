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

import { Tabs,Comment,List,Tooltip,Icon,Avatar,Menu,Layout,Upload,Modal} from 'ant-design-vue';


Vue.use(ElementUI);
Vue.use(MintUi);

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

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})