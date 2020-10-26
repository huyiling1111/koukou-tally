<template>
  <div class="layout-wrapper" :style="{ height: scrollerHeight }">
    <slot></slot>
    <Nav />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class App extends Vue {
  get scrollerHeight() {
    return document.documentElement.clientHeight + "px";
  }
}
</script>

<style lang="scss" scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>