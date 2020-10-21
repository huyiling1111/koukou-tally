<template>
  <div>
    <Layout>
      <div class="content">
        <Types :value="record.type" v-on:update:value="onUpdateTypes" />
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
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import recordListmodel from "@/model/recordListmodel.ts";
import tagsListModel from "@/model/tagsListModel.ts";
@Component({
  components: { Tags, Notes, Types, NumberPad },
})
export default class Money extends Vue {
  tags = tagsListModel.fetch();
  comment = "备注:";
  placeHolder = "请输入备注哈内容";
  values = "";

  record: RecordItem = { tags: [], notes: "", type: "-", amount: 0 };
  recordList: RecordItem[] = recordListmodel.fetch();

  onUpdateTypes(value: string) {
    this.record.type = value;
    console.log(`tags${this.tags}`);
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
  saveRecord() {
    const record2: RecordItem = recordListmodel.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
    recordListmodel.save(this.recordList);
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