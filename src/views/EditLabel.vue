<template>
  <div class="wrap">
    <Layout>
      <div class="content">
        <div class="editTag">
          <router-link :to="'/labels'"
            ><Icons class="icon3" name="Left" /> </router-link
          ><span>编辑标签</span>
        </div>
        <Notes class="notes" comment="标签名" placeHolder="请输入标签名" />
        <div>
          <Button class="button">删除标签</Button>
        </div>
      </div>
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
  background: rgb(248, 248, 248);
  font-size: 24px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  > .editTag {
    background: white;
    padding: 12px 50% 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      transform: translateX(50%);
    }

    .icon3 {
      width: 1.2em;
      height: 1.5em;
      display: flex;
      align-items: center;
    }
  }

  .notes {
    background: white;
    margin-top: 20px;
    height: 60px;
    font-size: 24px;
    display: flex;
    align-items: center;
  }
}
.button {
  margin-top: 70px;
  font-size: 16px;
}
</style>