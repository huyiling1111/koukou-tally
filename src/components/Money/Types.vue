<template>
  <div>
    <ul class="types">
      <li
        :class="{
          selected: value === '-',
          [classPrefix + '-item']: classPrefix,
        }"
        @click="selectType('-')"
        key="-"
      >
        支出
      </li>
      <li
        :class="{
          selected: value === '+',
          [classPrefix + '-item']: classPrefix,
        }"
        @click="selectType('+')"
        key="+"
      >
        收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts" >
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class Types extends Vue {
  @Prop(String) readonly value!: string;
  @Prop(String) readonly classPrefix?: string;
  selectType(value: string) {
    if (value !== "-" && value !== "+") {
      throw new Error("type is unknown");
    }
    this.$emit("update:value", value);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";
.types {
  widows: 100%;
  height: 64px;
  color: white;
  background: $color-highlight;
  display: flex;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  > li {
    width: 30%;
    height: 60%;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    &.selected {
      background: white;
      color: $color-highlight;
    }
  }
}
</style>