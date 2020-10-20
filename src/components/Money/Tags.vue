<template>
  <div>
    <div class="tags">
      <div class="current">
        <div
          :class="{ selected: selectTags.indexOf(item) >= 0 }"
          v-for="item in dataSource"
          :key="item"
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
import { Component, Prop } from "vue-property-decorator";
@Component
export default class Tags extends Vue {
  @Prop() readonly dataSource: string[] | undefined;
  selectTags: string[] = [];

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
    console.log(typeof name);
    if (this.dataSource) {
      this.$emit("update:createTag", [...this.dataSource, name]);
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