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
        <div class="amount">
          <div class="chart-wrapper" ref="chartWrapper">
            <Chart class="chart" :options="chartOptions" />
          </div>

          <ol>
            <li v-for="value in groupList" :key="value.title">
              <div class="day">
                <h3 class="title">{{ beautify(value.title) }}</h3>
                <h3 class="title">总计：￥{{ value.total }}</h3>
              </div>
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
      </div>
    </Layout>
  </div>
</template>



<script lang="ts">
import Vue from "vue";
import Tabs from "@/components/Tabs.vue";
import Types from "@/components/Money/Types.vue";
import { Component, Watch } from "vue-property-decorator";
import dayjs from "dayjs";
import deepClone from "@/lib/deepClone";
import Chart from "@/components/Chart.vue";
import _ from "lodash";
import day from "dayjs";

@Component({ components: { Tabs, Types, Chart } })
export default class Statistics extends Vue {
  beforeCreate() {
    this.$store.commit("fetchRecord");
  }

  type = "-";

  array2 = [
    {
      text: "支出",
      value: "-",
    },
    { text: "收入", value: "+" },
  ];

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
      return [] as Result;
    }
    const newRecordList: RecordItem[] = deepClone(recordList)
      .filter((item: RecordItem) => item.type === this.type)
      .sort((a: RecordItem, b: RecordItem) => {
        return dayjs(a.createdAt).valueOf() - dayjs(b.createdAt).valueOf();
      });
    if (newRecordList.length === 0) {
      return [] as Result;
    }
    const result: Result = [
      {
        title: (newRecordList[0] && newRecordList[0].createdAt) || "",
        items: [newRecordList[0]],
        total: 0,
      },
    ];
    for (let i = 0; i < newRecordList.length; i++) {
      const current = newRecordList[i];
      const last = result[result.length - 1];
      if (current.createdAt === last.title) {
        last.items.push(current);
      } else {
        result.push({ title: current.createdAt, items: [current], total: 0 });
      }
    }
    result.forEach((group) => {
      group.total = group.items.reduce(function (total, item) {
        return total + item.amount;
      }, 0);
    });
    return result;
  }
  @Watch("groupList")
  onChange() {
    console.log(0);
    this.$store.state.groupList = this.groupList;
    console.log(this.$store.state.groupList);
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
  get keyValueList() {
    const today = new Date();
    const array = [];
    console.log(this.groupList);
    for (let i = 0; i <= 10; i++) {
      // this.recordList = [{date:7.3, value:100}, {date:7.2, value:200}]
      const dateString = day(today).subtract(i, "day").format("YYYY-MM-DD");
      const found = _.find(this.groupList, {
        title: dateString,
      });
      array.push({
        key: dateString,
        value: found ? found.total : 0,
      });
    }
    array.sort((a, b) => {
      if (a.key > b.key) {
        return 1;
      } else if (a.key === b.key) {
        return 0;
      } else {
        return -1;
      }
    });
    console.log("array");
    console.log(array);
    return array;
  }
  get chartOptions() {
    const keys = this.keyValueList.map((item) => item.key);
    const values = this.keyValueList.map((item) => item.value);
    console.log("values");
    console.log(values);
    return {
      grid: {
        left: 10,
        right: 0,
      },
      xAxis: {
        type: "category",
        data: keys,
        axisTick: { alignWithLabel: true },
        axisLine: { lineStyle: { color: "#666" } },
        axisLabel: {
          formatter: function (value: string, index: number) {
            return value.substr(5);
          },
        },
      },
      yAxis: {
        name: "金额",
        nameLocation: "center",
        type: "value",
        show: false,
      },
      series: [
        {
          symbol: "circle",
          symbolSize: 12,
          itemStyle: { borderWidth: 1, color: "#666", borderColor: "#666" },
          // lineStyle: {width: 10},
          data: values,
          type: "line",
        },
      ],
      tooltip: {
        show: true,
        triggerOn: "click",
        position: "top",
        formatter: " {c0}",
        axisPointer: {
          axis: "auto",
        },
      },
    };
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
.day {
  display: flex;
  justify-content: space-between;
}
.amount {
  max-height: 80vh;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>