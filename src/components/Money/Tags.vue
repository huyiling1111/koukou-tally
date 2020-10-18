<template>
  <div>
    <div class="tags">
      <div class="current">
        <div>衣</div>
        <div>食</div>
        <div>住</div>
        <div>行</div>
      </div>
      <div class="new">
        <button>新增标签</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.tags {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  font-size: 14px;
  padding: 16px;

  > .current {
    max-height: 25vh;
    overflow: auto;

    div {
      margin: 5px;
      float: left;
      display: flex;
      align-items: center;
      background: #fdf1df;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 5px;
    }
  }
  > .new {
    padding-top: 16px;
    > button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid black;
    }
  }
}
</style>