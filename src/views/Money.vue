<template>
  <div>
    <Layout>
      <div>
        <ul class="types">
          <li>
            <router-link to="/money" class="item" active-class="selected">
              支出
            </router-link>
          </li>
          <li>
            <router-link to="/labels" class="item" active-class="selected"
              >收入
            </router-link>
          </li>
        </ul>
      </div>
      <div class="content">
        <div class="tags">
          <div class="current">
            <div>行</div>
            <div>衣</div>
            <div>食</div>
            <div>住</div>
            <div>行</div>
            <div>衣</div>
            <div>食</div>
            <div>住</div>
            <div>行</div>
            <div>衣</div>
            <div>食</div>
            <div>住</div>
            <div>行</div>

            <div>衣</div>
            <div>食</div>
            <div>住</div>
            <div>行</div>
            <div>衣</div>
            <div>食</div>
            <div>住</div>
            <div>行</div>
            <div>衣</div>
            <div>食</div>
            <div>住</div>
            <div>行</div>
            <div>衣</div>
            <div>食</div>
            <div>住</div>
            <div>行</div>
          </div>
          <div class="new">
            <button>新增标签</button>
          </div>
        </div>
        <div class="nodes">
          <span class="name"> 备注</span>
          <input type="text" placeholder="在这里输入备注" />
        </div>

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
    </Layout>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";
.content {
  display: flex;
  flex-direction: column;
}
.tags {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 1;
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
  height: 64px;
}
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

    > .item.selected {
      color: $color-highlight;
      background: white;
    }
    > .item {
      // border: 1px solid red;
      margin-top: -1px;
      width: 100%;
      height: 103%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    // &.selected::after {
    //   content: "";
    //   position: absolute;
    //   width: 100%;
    //   height: 4px;
    //   background: #333;
    //   bottom: 0;
    //   left: 0;
    // }
  }
}
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