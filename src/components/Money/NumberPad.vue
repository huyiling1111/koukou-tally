<template>
  <div>
    <div class="numberPad">
      <input class="output" type="text" v-model="output" />
      <div class="buttons">
        <button @click="inputContent">1</button>
        <button @click="inputContent">2</button>
        <button @click="inputContent">3</button>
        <button @click="remove">删除</button>
        <button @click="inputContent">4</button>
        <button @click="inputContent">5</button>
        <button @click="inputContent">6</button>
        <button @click="clear">清空</button>
        <button @click="inputContent">7</button>
        <button @click="inputContent">8</button>
        <button @click="inputContent">9</button>
        <button @click="ok" class="ok">ok</button>
        <button class="zero" @click="inputContent">0</button>
        <button @click="inputContent">.</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class NumberPad extends Vue {
  output = "0";
  inputContent(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;
    const input = button.textContent as string;
    console.log(input);
    if (this.output.length > 16) {
      return;
    }
    if (this.output === "0") {
      if ("0123456789".indexOf(input) >= 0) {
        this.output = input;
        return;
      }
    }
    if (this.output.indexOf(".") > 0) {
      if (input === ".") {
        return;
      }
    }

    this.output += input;
  }
  remove() {
    if (this.output.length === 1) {
      this.output = "0";
    } else {
      this.output = this.output.slice(0, -1);
      console.log(1);
    }
  }
  clear() {
    this.output = "0";
  }
  ok() {}
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";
.numberPad {
  > .output {
    width: 100%;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
  }
  > .buttons {
    @extend %clearFix;
    > button {
      font-size: 20px;
      width: 25%;
      height: 64px;
      float: left;
      background: white;
      border: none;
      box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.25);

      &.ok {
        height: 64 * 2px;
        float: right;
        background: $color-highlight;
        color: white;
        font-size: 40px;
      }
      &.zero {
        width: 50%;
      }
    }
  }
}
</style>



