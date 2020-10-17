<template>
  <div>
    <svg class="icon1">
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
.icon1 {
  width: 2.8em;
  height: 2.8em;
  vertical-align: -0.15em;
  fill: currentColor;
}
</style>