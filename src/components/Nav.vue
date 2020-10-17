<template>
  <div class="nav">
    <router-link class="item" to="/money">
      <Icons name="money"></Icons>记账</router-link
    >
    <router-link class="item" to="/labels">
      <Icons name="labels"></Icons>标签</router-link
    >
    <router-link class="item" to="/statistics"
      ><Icons name="statistics"></Icons>统计
    </router-link>
  </div>
</template>

<script lang="ts">
const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("../assets/icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}

export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
.nav {
  // border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  font-size: 12px;
  > .item {
    flex-grow: 1;
    padding: 2px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>