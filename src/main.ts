import Vue from 'vue'
import App from './App.vue'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import Icons from '@/components/Icons.vue'
import router from './router'
import store from './store'
import tagsListModel from './model/tagsListModel'

Vue.config.productionTip = false
Vue.component('Nav', Nav)
Vue.component('Layout', Layout)
Vue.component('Icons', Icons)
window.tagList = tagsListModel.fetch()
new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')
