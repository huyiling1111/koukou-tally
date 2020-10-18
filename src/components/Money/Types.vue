<template>
  <div>
    <ul class="types">
      <li
        :class="type === '-' ? 'seleted' : ''"
        @click="selectType({ type: '-' })"
      >
        支出
      </li>
      <li
        :class="type === '+' ? 'seleted' : ''"
        @click="selectType({ type: '+' })"
      >
        收入
      </li>
    </ul>
  </div>
</template>

<script >
export default {
  data() {
    return {
      type: "-"
    }
  },
  methods: {
    selectType(type) {

      this.type = type
      console.log(this.type)

    }

  }

}

</script>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";
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
    display: flex;
    align-items: center;
    justify-content: center;
    &.selected {
      background: red;
    }
  }
}
</style>