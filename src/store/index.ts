import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import deepClone from '@/lib/deepClone';
import createId from '@/lib/created'

Vue.use(Vuex)
type rootState = {
  recordList: RecordItem[]
  tagList: tag[]
  currentTag?: tag
  createTagReturnValue?: "repeat" | "success" | "null"
  removeTagReturnValue?: boolean
  updateTagReturnValue?: "repeat" | "success" | "not found"
}



const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    currentTag: undefined,
    createTagReturnValue: undefined,
    removeTagReturnValue: undefined,
    updateTagReturnValue: undefined
  } as rootState,
  mutations: {
    createRecord(state, record: RecordItem) {
      const deepCloneRecord: RecordItem = deepClone(record)
      deepCloneRecord.createdAt = new Date();
      state.recordList.push(deepCloneRecord)
      store.commit('saveRecord')

    },
    fetchRecord(state) {
      state.recordList = JSON.parse(window.localStorage.getItem("recordList") || '[]') as RecordItem[];

    },
    saveRecord(state) {
      window.localStorage.setItem("recordList", JSON.stringify(state.recordList));

    },
    fetchTag(state) {
      state.tagList = JSON.parse(window.localStorage.getItem("tagsList") || "[]")

    },
    createTag(state, name: string) {
      const names = state.tagList.map(item => item.name)
      if (name) {
        if (names.indexOf(name) > -1) {
          alert("输入的标签名重复了");
          state.createTagReturnValue = "repeat"
        } else {
          const id = createId().toString()
          state.tagList.push({ 'id': id, 'name': name });
          store.commit("saveTag", state.tagList);
          state.createTagReturnValue = "success"
        }
      } else {
        state.createTagReturnValue = "null"
      }
    },
    removeTag(state, id: string) {
      const message = window.confirm("确定要删除么？");

      if (message) {
        let index = -1
        for (let i = 0; i < state.tagList.length; i++) {
          if (state.tagList[i].id === id) {
            index = i
            break

          }
        }
        state.tagList.splice(index, 1)
        store.commit("saveTag", state.tagList)
        state.removeTagReturnValue = true
      } else {
        state.removeTagReturnValue = false
      }
    },
    updateTag(state, object: { id: string, name: string }) {
      const { id, name } = object
      if (state.tagList.map(item => item.id).indexOf(id) > -1) {
        const names = state.tagList.map(item => item.name)
        console.log(names)
        if (names.indexOf(name) > -1) {
          state.updateTagReturnValue = "repeat"
        }
        else {
          const tag = state.tagList.filter(item => item.id === id)[0]
          console.log(tag)
          tag.name = name
          store.commit("saveTag", state.tagList)
          state.updateTagReturnValue = "success"
        }
      } else {
        state.updateTagReturnValue = "not found"
      }
    },
    findTag(state, id: string) {
      state.currentTag = state.tagList.filter((item) => item.id === id)[0]
    },
    saveTag(state) {
      window.localStorage.setItem("tagsList", JSON.stringify(state.tagList))

    }

  },
  actions: {
  },
  modules: {
  }
})
export default store