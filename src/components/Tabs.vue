<template>
  <div>
    <ul class="tabs">
      <li
        v-for="data in dataSource"
        :key="data.value"
        @click="select(data)"
        :class="liClass(data)"
      >
        {{ data.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" >
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

type DataSourceItem = {
  text: string;
  value: string;
};

@Component
export default class Tabs extends Vue {
  @Prop(String) readonly value!: string;
  @Prop(String) readonly classPrefix?: string;
  @Prop({ required: true, type: Array }) readonly dataSource!: DataSourceItem[];

  select(data: DataSourceItem) {
    this.$emit("update:value", data.value);
  }
  liClass(item: DataSourceItem) {
    return {
      selected: item.value === this.value,
      [this.classPrefix + "-tab-item"]: this.classPrefix,
    };
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";
.tabs {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
</style>