<template>
  <div class="layout-wrapper">
    <slot></slot>
    <Nav />
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.layout-wrapper {
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>