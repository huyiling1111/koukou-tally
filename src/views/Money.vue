<template>
  <div>
    <Layout>
      <div class="content">
        <Types :value="record.type" v-on:update:value="onUpdateTypes" />
        <Tags
          :data-source="tags"
          class="type1"
          v-on:update:createTag="tags = $event"
          v-on:update:selected="onUpdateTags"
        />
        <Notes v-on:update:value="onUpdateNotes" />
        <NumberPad v-on:update:value="onUpdateNumberPad" @submit="saveRecord" />
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";

// 声明类型
type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
};
@Component({
  components: { Tags, Notes, Types, NumberPad },
})
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行"];
  record: Record = { tags: [], notes: "", type: "-", amount: 0 };
  //声明一个记录数组把记录存入localStorage里
  recordList: Record[] = JSON.parse(
    window.localStorage.getItem("recordList") || "[]"
  );

  onUpdateTypes(value: string) {
    this.record.type = value;
    console.log(value);
  }
  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  onUpdateNumberPad(value: string) {
    this.record.amount = parseFloat(value);
  }
  saveRecord() {
    const record2 = JSON.parse(JSON.stringify(this.record));
    record2.createAt = new Date();
    this.recordList.push(record2);
    localStorage.setItem("recordList", JSON.stringify(this.recordList));
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