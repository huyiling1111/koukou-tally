<template>
  <div>
    <Layout>
      <ol class="labels">
        <li><span>衣</span><Icons name="right" /></li>
        <li><span>食</span><Icons name="right" /></li>
        <li><span>住</span><Icons name="right" /></li>
        <li><span>行</span><Icons name="right" /></li>
      </ol>

      <div>
        <button>新建标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.labels {
  font-size: 20px;
  display: flex;
  flex-direction: column;
  > li {
    padding: 0 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
svg {
  width: 20px;
}
</style>