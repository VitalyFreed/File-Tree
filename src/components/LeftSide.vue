<template>
  <div :class="$style['left-side']">
    <ul>
      <file-tree
        :fileTree="fileTree"
        :path="path"
        @onChangePath="handleChangePath"
        @onOpenModal="openModal"
      />
    </ul>
    <modal
      v-if="isVisibleModal"
      v-click-outside="closeModal"
      :items="items"
      :coords="modalCoords"
    />
  </div>
</template>

<script>
import Modal from '@/components/Modal';
import FileTree from '@/components/FileTree';

export default {
  name: 'LeftSide',
  components: {
    Modal,
    FileTree,
  },
  props: {
    fileTree: Object,
    path: String,
    items: Array,
  },
  data() {
    return {
      isVisibleModal: false,
      modalCoords: {
        x: null,
        y: null,
      },
    };
  },
  methods: {
    openModal(event, id) {
      const {right: x, y} = event.target.getBoundingClientRect();
      this.modalCoords = {
        x,
        y,
      };
      this.isVisibleModal = true;
      this.$emit('onChangeCurrentModal', id);
    },
    closeModal() {
      this.isVisibleModal = false;
      this.$emit('onChangeCurrentModal', null);
    },
    handleChangePath(path) {
      this.$emit('onChangePath', path);
    }
  },
}
</script>

<style module lang="scss">
.left-side {
  width: 30%;
  min-height: 100vh;
  border-right: 1px solid #000000;
  padding: 20px;
  background-color: #fff;
  border-radius: 0 10px 10px 0;
  box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.4);
}
</style>