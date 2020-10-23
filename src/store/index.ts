import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import deepClone from '@/lib/deepClone';
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as tag[],
  },
  mutations: {
    createRecord(state, record: RecordItem) {
      const deepCloneRecord: RecordItem = deepClone(record)
      deepCloneRecord.createdAt = new Date();
      state.recordList.push(deepCloneRecord)
      store.commit('saveRecord')

    },
    fetchRecord() {
      return JSON.parse(window.localStorage.getItem("recordList") || '[]') as RecordItem[];

    },
    saveRecord(state) {
      window.localStorage.setItem("recordList", JSON.stringify(state.recordList));

    },


  },
  actions: {
  },
  modules: {
  }
})
export default store