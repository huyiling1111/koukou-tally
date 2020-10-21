<template>
  <div>
    <div class="nodes">
      <span class="name"> {{ comment }}</span>
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
    // console.log(value);
  }
}
</script>

<style lang="scss" scoped>
.nodes {
  font-size: 14px;
  background: white;
  padding-left: 16px;
  display: flex;
  align-items: center;
  > .name {
    padding-right: 16px;
  }
  > input {
    border: none;
    padding-right: 16px;
    background: transparent;
    flex-grow: 1;
  }
  height: 30px;
}
</style>