<template>
  <div :class="$style['container']">
    <left-side
      :fileTree="fileTree"
      :path="path"
      @onChangePath="handleChangePath"
    />
    <right-side :path="path"/>
  </div>
</template>

<script>
import LeftSide from '@/components/LeftSide';
import RightSide from '@/components/RightSide';
import fileTree from '@/assets/data/file-tree.json';

export default {
  components: {
    LeftSide,
    RightSide,
  },
  data() {
    return {
      fileTree,
      path: fileTree.name,
    };
  },
  methods: {
    handleChangePath(path) {
      this.path = path;
    },
    deleteItem(itemId) {
    },
    createItem() {
    }
  }
}
</script>

<style module lang="scss">
.container {
  display: flex;
}
</style>
