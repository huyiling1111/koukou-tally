<template>
  <div>
    <Layout>
      <div class="content" :style="{ height: scrollerHeight }">
        <Date v-on:update:date="onUpdateDate" />
        <Types
          :value="record.type"
          v-on:update:value="onUpdateTypes"
          v-on:update:date="onUpdateDate"
        />
        <Tags
          :dataSource="tags"
          class="type1"
          v-on:update:createTag="tags = $event"
          v-on:update:selected="onUpdateTags"
        />
        <Notes
          :comment="comment"
          :placeHolder="placeHolder"
          v-on:update:value="onUpdateNotes"
          :value="values"
        />
        <NumberPad v-on:update:value="onUpdateNumberPad" @submit="saveRecord" />
      </div>
      {{ record }}
    </Layout>
  </div>
</template>

<script lang="ts">
import Types from "@/components/Money/Types.vue";
import Date from "@/components/Money/Date.vue";
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  components: { Tags, Notes, Types, NumberPad, Date },
})
export default class Money extends Vue {
  comment = "备注:";
  placeHolder = "请输入备注哈内容";
  values = "";

  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
    createdAt: "",
  };
  // recordList = recordStore.recordList;

  get tags() {
    return this.$store.state.tagList;
  }
  get recordList() {
    return this.$store.state.recordList;
  }
  get scrollerHeight() {
    return document.documentElement.clientHeight + "px";
  }

  onUpdateTypes(value: string) {
    this.record.type = value;
  }
  onUpdateTags(value: string[]) {
    this.record.tags = value;
    console.log(this.record, "value");
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  onUpdateNumberPad(value: string) {
    this.record.amount = parseFloat(value);
  }
  onUpdateDate(value: string) {
    console.log(value, 1);
    if (value) {
      this.record.createdAt = value;
    } else {
      window.alert("请选择日期");
    }
  }
  saveRecord() {
    console.log(this.tags);
    this.$store.commit("createRecord", this.record);
  }
}
</script>

<style lang="scss" scoped>
.content {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  // justify-content: center;
}
.type1 {
  flex-grow: 1;
}
</style>