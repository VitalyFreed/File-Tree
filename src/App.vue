<template>
  <div :class="$style['container']">
    <left-side
      :fileTree="fileTree"
      :path="path"
      :items="items"
      @onChangePath="handleChangePath"
      @onChangeCurrentModal="handleCurrentModal"
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
      items: [
        {
          id: 0,
          title: 'Удалить',
          action: () => this.deleteItem(this.fileTree.children),
        },
        {
          id: 1,
          title: 'Создать',
          action: () => this.createItem(),
        },
      ],
      currentModalId: null,
    };
  },
  methods: {
    handleChangePath(path) {
      this.path = path;
    },
    handleCurrentModal(id) {
      this.currentModalId = id;
    },
    deleteItem(fileTreeChildren) {
      return fileTreeChildren.filter((child) => {
        if (child.children?.length > 0) {
          child.children = this.deleteItem(child.children);
        }
        return child.id !== this.currentModalId;
      });
    },
  },
  createItem() {
  }
}
</script>

<style module lang="scss">
.container {
  display: flex;
}
</style>
