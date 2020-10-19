<template>
  <div>
    <Layout>
      <div class="content">
        <Types />

        <Tags
          :data-source="tags"
          class="type1"
          v-on:update:createTag="tags = $event"
        />
        <Notes />
        <NumberPad />
      </div>
    </Layout>
  </div>
</template>

<script lang="js">
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
export default {
  data(){return{
    tags:["衣","食","住","行"]
  }
  },
  components: { Types, Tags, Notes, NumberPad },
};
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