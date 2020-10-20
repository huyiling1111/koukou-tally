
<template>
  <div class="createButton-wrapper">
    <div>
      <button @click="$emit('click')" class="createButton">
        <slot></slot>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class Button extends Vue {}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";
.createButton-wrapper {
  width: 100px;
  margin-left: 50%;
  margin-bottom: 80%;
  transform: translate(-50%, -50%);
  border: 1px solid $color-highlight;
  .createButton {
    margin-right: auto;
    background: white;
    border: none;
    color: $color-highlight;
    border-radius: 4px;
    padding: 8px 16px;
  }
}
</style>