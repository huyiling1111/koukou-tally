<template>
  <div>
    <Layout>
      <div class="content">
        <Tabs
          class-prefix="type"
          :data-source="array2"
          :value="type"
          v-on:update:value="type = $event"
        />
        <Tabs
          class-prefix="interval"
          :data-source="array"
          :value="interval"
          v-on:update:value="interval = $event"
        />
        <div>type:{{ type }}</div>
        <br />
        interval:{{ interval }}
      </div>
    </Layout>
  </div>
</template>



<script lang="ts">
import Vue from "vue";
import Tabs from "@/components/Tabs.vue";
import Types from "@/components/Money/Types.vue";
import { Component } from "vue-property-decorator";

@Component({ components: { Tabs, Types } })
export default class Statistics extends Vue {
  type = "-";
  interval = "day";
  array2 = [
    {
      text: "支出",
      value: "-",
    },
    { text: "收入", value: "+" },
  ];
  array = [
    { text: "按天", value: "day" },
    { text: "按周", value: "week" },
    { text: "按月", value: "month" },
  ];
}
</script>

<style scoped>
</style>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";
.content {
  height: 100vh;
}
::v-deep .type-tab-item {
  background: white;
  &.selected {
    background: #c4c4c4;
    &::after {
      display: none;
    }
  }
}

.interval-tab-item {
  background: white;
  &.selected {
    background: #c4c4c4;
    &::after {
      display: none;
    }
  }
}
</style>