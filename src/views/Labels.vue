<template>
  <div class="wrap">
    <Layout>
      <ol class="labels">
        <li v-for="item in tagsList" :key="item">
          <span>{{ item }}</span
          ><Icons class="icon2" name="right" />
        </li>
      </ol>

      <div class="createButton-wrapper">
        <div>
          <button @click="create" class="createButton">新建标签</button>
        </div>
      </div>
    </Layout>
  </div>
</template>



<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tagsListModel from "@/model/tagsListModel.ts";
@Component
export default class Labels extends Vue {
  tagsList: string[] = tagsListModel.data;
  create() {
    const label = window.prompt("请输入想要新增的标签");
    if (label) {
      if (tagsListModel.create(label) === "repeat") {
        alert("输入的标签名重复了");
      } else {
        tagsListModel.create(label);
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
  > li {
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
.createButton-wrapper {
  width: 100px;
  margin-left: 50%;
  margin-bottom: 80%;
  transform: translate(-50%, -50%);
  border: 1px solid $color-highlight;
  .createButton {
    margin-right: auto;
    background: white;
    border: none;
    color: $color-highlight;
    border-radius: 4px;
    padding: 8px 16px;
  }
}
</style>