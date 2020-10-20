<template>
  <div>
    <svg class="icon">
      <use :xlink:href="'#' + name" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  props: ["name"],
};
</script>

<style lang="scss" scoped>
.icon {
  width: 2.8em;
  height: 2.8em;
  vertical-align: -0.15em;
  fill: currentColor;
}
</style>