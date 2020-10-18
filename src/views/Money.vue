<template>
  <div>
    <Layout>
      <div class="content">
        <Types />

        <Tags class="type1" />
        <Notes />
        <NumberPad />
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
export default {
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