<template>
  <div>
    <div class="date">
      <a-date-picker
        @change="onChange"
        :default-value="
          defaultTime ? moment(defaultTime, 'YYYY-MM-DD') : undefined
        "
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { DatePicker } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
Vue.use(DatePicker);
import { Component } from "vue-property-decorator";
@Component
export default class Date extends Vue {
  moment = moment;
  defaultTime = "2020-01-01";

  onChange(date: string, dateString: string) {
    this.$emit("update:date", dateString);
    // console.log(date, dateString);
  }
}
</script>

<style lang="scss" scoped>
.date {
  width: 120px;
  font-size: 11px;
  height: 32px;
  z-index: 0;
}
</style>