<template>
  <div id="app">
    <router-view />
  </div>
</template>




<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class App extends Vue {}
</script>



<style lang="scss">
@import "~@/assets/styles/helper.scss";
@import "~@/assets/styles/reset.scss";
#app {
  line-height: 1.5;
  color: #808080;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: $font-hei;
}
</style>
