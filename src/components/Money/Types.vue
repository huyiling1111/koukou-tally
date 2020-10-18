<template>
  <div>
    <ul class="types">
      <li
        :class="type === '-' ? 'selected' : ''"
        @click="selectType('-')"
        key="-"
      >
        支出
      </li>
      <li
        :class="type === '+' ? 'selected' : ''"
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
import { Component } from "vue-property-decorator";
@Component
export default class Types extends Vue {
  // @Prop(Number) xxx: number | undefined;
  type = "-";

  selectType(type: string) {
    if (type !== "-" && type !== "+") {
      throw new Error("type is unknown");
    }
    //  点击时为"-"或者"+" , 动态绑定class：selected
    this.type = type;
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