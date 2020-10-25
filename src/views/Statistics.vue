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

        <ol>
          <li v-for="value in groupList" :key="value.title">
            <h3 class="title">{{ beautify(value.title) }}</h3>
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
      <div>{{ groupList }}</div>
    </Layout>
  </div>
</template>



<script lang="ts">
import Vue from "vue";
import Tabs from "@/components/Tabs.vue";
import Types from "@/components/Money/Types.vue";
import { Component } from "vue-property-decorator";
import dayjs from "dayjs";
import deepClone from "@/lib/deepClone";

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
  get groupList() {
    const { recordList } = this;
    console.log(recordList.map((item) => item.createdAt));
    if (recordList.length === 0) {
      return [];
    }
    const newRecordList: RecordItem[] = deepClone(recordList).sort(
      (a: RecordItem, b: RecordItem) => {
        return dayjs(a.createdAt).valueOf() - dayjs(b.createdAt).valueOf();
      }
    );

    const dateList = newRecordList.map((item) =>
      dayjs(item.createdAt).format("YYYY-MM-DD")
    );
    const dateCount = Array.from(new Set(dateList)).length;
    console.log(dateCount);
    const result: Result = [{ title: "", items: [] }];

    for (let j = 0; j < dateCount; j++) {
      for (let i = 0; i < newRecordList.length; i++) {
        if (
          dateList[j] === dayjs(newRecordList[i].createdAt).format("YYYY-MM-DD")
        ) {
          result[j].title = dayjs(newRecordList[i].createdAt).format(
            "YYYY-MM-DD"
          );

          result[j].items.push(newRecordList[i]);
        }
      }
    }
    console.log(result);
    return result;
  }
  type = "-";

  array2 = [
    {
      text: "支出",
      value: "-",
    },
    { text: "收入", value: "+" },
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