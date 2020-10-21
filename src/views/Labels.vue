<template>
  <div class="wrap">
    <Layout>
      <div class="labels">
        <router-link
          class="label"
          :to="`/labels/edit/${item.id}`"
          v-for="item in tagsList"
          :key="item.id"
        >
          <span>{{ item.name }}</span
          ><Icons class="icon2" name="right" />
        </router-link>
      </div>
      <Button @click="create">新建标签</Button>
    </Layout>
  </div>
</template>



<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tagsListModel from "@/model/tagsListModel.ts";
import Button from "@/components/Button.vue";
@Component({
  components: { Button },
})
export default class Labels extends Vue {
  // console.log()
  tagsList = tagsListModel.data;
  create() {
    const label = window.prompt("请输入想要新增的标签");
    if (label) {
      if (tagsListModel.create(label) === "repeat") {
        alert("输入的标签名重复了");
      } else {
        tagsListModel.create(label);
        //这里少了id
      }
    } else {
      alert("不能为空");
    }
  }
}
</script>



<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";
.labels {
  height: 100vh;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  > .label {
    background: white;
    border-bottom: 1px solid #dad8d8e0;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    .icon2 {
      width: 1.1em;
      height: 2em;
      display: flex;
      align-items: center;
    }
  }
}
</style>