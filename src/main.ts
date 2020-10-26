import Vue from 'vue'
import App from './App.vue'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import Icons from '@/components/Icons.vue'
import router from './router'
import store from './store/index'
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');


// 局部引入

Vue.config.productionTip = false
Vue.component('Nav', Nav)
Vue.component('Layout', Layout)
Vue.component('Icons', Icons)




new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')

if (store.state.tagList.length === 0) {
  store.commit('createTag', "衣")
  store.commit('createTag', "食")
  store.commit('createTag', "住")
  store.commit('createTag', "行")
}
