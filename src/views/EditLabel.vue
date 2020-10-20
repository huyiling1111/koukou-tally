<template>
  <div class="wrap">
    <Layout>
      <div class="content">
        <div class="editTag">
          <Icons class="icon3" name="Left" /><span>编辑标签</span>
        </div>

        <div>标签名</div>
        <div>
          <Button>删除标签</Button>
        </div>
      </div>
      <Notes comment="备注" placeHolder="请输入" />
    </Layout>
  </div>
</template>

<script lang="ts">
import tagsListModel from "@/model/tagsListModel.ts";
tagsListModel.fetch();
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Notes from "@/components/Money/Notes.vue";
import Button from "@/components/Button.vue";

@Component({ components: { Notes, Button } })
export default class EditLabel extends Vue {
  created() {
    // console.log(1);
    const id = this.$route.params.id;
    console.log(`id:${id}`);
    const tags = tagsListModel.data;
    console.log(`tags:${tags}`);
    const tag = tags.filter((item) => item.id === id)[0];
    console.log(`tag:${tag}`);
    if (tag) {
      console.log(tag.id);
    } else {
      this.$router.replace("/404");
    }
  }
}
</script>

<style  lang="scss" scoped>
.content {
  font-size: 24px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  > .editTag {
    padding: 5px 5px;
    display: flex;
    flex-direction: row;

    .icon3 {
      margin-right: 20px;
      width: 1.2em;
      height: 1.6em;
      display: flex;
      align-items: center;
    }
  }
}
</style>