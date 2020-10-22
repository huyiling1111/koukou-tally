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
window.createTag = (name) => {
  if (name) {
    if (tagsListModel.create(name) === "repeat") {
      alert("输入的标签名重复了");
    } else {
      tagsListModel.create(name);
      //这里少了id
    }
  } else {
    alert("不能为空");
  }
}
window.removeTag = (id: string) => {
  const message = window.confirm("确定要删除么？");

  if (message && tagsListModel.remove(id)) {
    return true
  } else {
    return false
  }
}
window.updateTag = (id: string, name: string) => {
  return tagsListModel.update(id, name)
}
window.findTag = (id: string) => {
  return window.tagList.filter((item) => item.id === id)[0]
}
new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')
