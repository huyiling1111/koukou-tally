<template>
  <div class="dateNodes">
    <slot></slot>
    <div class="nodes">
      <div class="name">✍</div>
      <input
        type="text"
        :placeholder="placeHolder"
        :value="value"
        @input="onInputValue($event.target.value)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class Notes extends Vue {
  @Prop(String) readonly comment: string | undefined;
  @Prop(String) readonly placeHolder: string | undefined;
  @Prop(String) readonly value: string | undefined;

  onInputValue(value: string) {
    this.$emit("update:value", value);
  }
}
</script>

<style lang="scss" scoped>
.dateNodes {
  display: flex;
  justify-content: space-between;
}
.nodes {
  flex-grow: 1;
  font-size: 14px;
  // background: red;

  // // border: 1px solid rgb(145, 139, 139);
  // box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.25);
  display: flex;
  height: 30px;
  justify-content: space-between;
  // padding-top: 2px;
  // padding-left: 10px;
  align-items: flex-end;

  > .name {
    margin-left: 50px;
  }
  > input {
    border: none;

    background: transparent;
    flex-grow: 1;
    color: rgb(209, 205, 205);
  }
  height: 30px;
}
</style>