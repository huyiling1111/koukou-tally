<template>
  <div>
    <div class="nodes">
      <span class="name"> {{ comment }}</span>
      <input type="text" :placeholder="placeHolder" v-model="value" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
@Component
export default class Notes extends Vue {
  @Prop(String) readonly comment: string | undefined;
  @Prop(String) readonly placeHolder: string | undefined;
  value = "";
  @Watch("value")
  onValueChanged(value: string) {
    this.$emit("update:value", value);
  }
}
</script>

<style lang="scss" scoped>
.nodes {
  font-size: 14px;
  background: #f5f5f5;
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