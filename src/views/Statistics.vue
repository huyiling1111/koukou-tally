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
        <ol>
          <li v-for="(value, name) in result" :key="name">
            <h3 class="title">{{ beautify(name) }}</h3>
            <ol>
              <li
                class="record"
                v-for="(item, index) in value.items"
                :key="index"
              >
                <!-- {{ item.createdAt }} -->
                <span class="tags">{{ tagString(item.tags) }}</span>
                <span class="notes">备注：{{ item.notes }}</span>
                <span> ￥{{ item.amount }}</span>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </Layout>
  </div>
</template>



<script lang="ts">
import Vue from "vue";
import Tabs from "@/components/Tabs.vue";
import Types from "@/components/Money/Types.vue";
import { Component } from "vue-property-decorator";
import dayjs from "dayjs";

@Component({ components: { Tabs, Types } })
export default class Statistics extends Vue {
  tagString(tag: tag[]) {
    if (!tag[tag.length - 1]) {
      return "无";
    } else {
      type s = string;
      let s = "";
      for (let i = 0; i < tag.length; i++) {
        s += tag[i].name + " ";
      }
      return s;
    }
  }
  get recordList() {
    return (this.$store.state as rootState).recordList;
  }
  get result() {
    type HashTableValue = { title: string; items: RecordItem[] };
    const HashTable: { [key: string]: HashTableValue } = {};
    const { recordList } = this;
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createdAt!.split("T");
      console.log(date);
      HashTable[date] = HashTable[date] || { title: date, items: [] };
      HashTable[date].items.push(recordList[i]);
    }
    console.log(HashTable);
    return HashTable;
  }
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
  beforeCreate() {
    this.$store.commit("fetchRecord");
  }
  beautify(string: string) {
    const day = dayjs(string);
    const now = dayjs();
    if (day.isSame(now, "day")) {
      return "今天";
    } else if (day.isSame(now.subtract(1, "day"), "day")) {
      console.log("hi");
      return "昨天";
    } else if (day.isSame(now.subtract(2, "day"), "day")) {
      return "前天";
    } else if (day.isSame(now, "year")) {
      return day.format("M月D日");
    } else {
      return day.format("YYYY年M月D日");
    }
  }
}
</script>

<style scoped>
</style>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";
.content {
  background: rgb(245, 245, 245);
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

%item {
  padding: 6px 16px;
  line-height: 28px;
  display: flex;
  justify-content: space-between;
}
.title {
  @extend %item;
}
.tags {
  white-space: nowrap;
}
.record {
  background: white;
  @extend %item;
}
.notes {
  margin-right: auto;
  margin-left: 16px;
  word-break: break-all;
  color: #999;
}
</style>