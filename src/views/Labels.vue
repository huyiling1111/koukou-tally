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
          <span>{{ item }}</span
          ><Icons class="icon2" name="right" />
        </router-link>
      </div>
      <Button @click="createTag">新建标签</Button>
    </Layout>
  </div>
</template>



<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tagsListModel from "@/model/tagsListModel.ts";
import Button from "@/components/Button.vue";
tagsListModel.fetch();
@Component({
  components: { Button },
})
export default class Labels extends Vue {
  tagsList = window.tagList;
  createTag() {
    const name = window.prompt("请输入想要新增的标签");
    window.createTag(name);
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