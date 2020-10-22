<template>
  <div>
    <div class="tags">
      <div class="current">
        <div
          :class="{ selected: selectTags.indexOf(item) >= 0 }"
          v-for="item in dataSource"
          :key="item.id"
          @click="toggle(item)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="new">
        <button @click="create">新增标签</button>
      </div>
    </div>
  </div>
</template>



<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tagStore from "@/store/tagStore.ts";

@Component({
  computed: {
    dataSource() {
      return tagStore.fetchTag();
    },
  },
})
export default class Tags extends Vue {
  selectTags: string[] = [];
  dataSource = tagStore.fetchTag();

  toggle(item: string) {
    if (this.selectTags.indexOf(item) > -1) {
      this.selectTags.splice(this.selectTags.indexOf(item), 1);
    } else {
      this.selectTags.push(item);
    }
    this.$emit("update:selected", this.selectTags);
  }
  create() {
    const name = window.prompt("请输入标签名");
    if (name) {
      tagStore.createTag(name);
    } else {
      window.alert("不能为空");
    }
  }
}
</script>


<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";
.tags {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  font-size: 14px;
  padding: 16px;

  > .current {
    max-height: 25vh;
    overflow: auto;

    div {
      margin: 5px;
      float: left;
      display: flex;
      align-items: center;
      background: #fdf1df;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 5px;
      &.selected {
        background: $color-highlight;
        color: white;
      }
    }
  }
  > .new {
    padding-top: 16px;
    > button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid black;
    }
  }
}
</style>