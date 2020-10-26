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
    console.log(item.value);
    console.log("----");
    console.log(this.value);
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
  background: white;
  display: flex;
  text-align: center;
  font-size: 24px;
  > li {
    background: white;
    color: orange;
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    &.selected {
      color: white;
      background: orange;
    }
  }
}
</style>