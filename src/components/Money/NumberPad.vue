<template>
  <div>
    <div class="numberPad">
      <input class="output" type="text" />
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="ok">ok</button>
        <button class="zero">0</button>
        <button>.</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
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