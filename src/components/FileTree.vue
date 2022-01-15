<template>
  <li
    :class="$style['tree-list__item']"
  >
    <span
      :class="[$style['file-name'], $style[currentFile(fileTree.type, fileTree.name)]]"
      @click="toggleOpenDirectory"
      @click.prevent.right="$event => openModal($event, fileTree.id)"
    >
      {{ fileTree.name }}
    </span>

    <ul
      v-if="fileTree.children && fileTree.children.length > 0 && isOpenDirectory"
      :class="$style['tree-list']"
    >
      <file-tree
        v-for="(fileTreeChildren, index) in fileTree.children"
        :key="`${fileTreeChildren.name}-${index}`"
        :fileTree="fileTreeChildren"
        :path="currentPath"
        @onChangePath="handleChangePath"
        @onOpenModal="openModal"
      />
    </ul>
  </li>
</template>

<script>
const FILE_EXTENSIONS = {
  JSON: 'json',
  VUE: 'vue',
  JS: 'js',
  HTML: 'html',
  CSS: 'css',
  TXT: 'txt',
};

const FILE_TYPES = {
  FILE: 'file',
  DIRECTORY: 'directory',
};

export default {
  name: 'file-tree',
  props: {
    fileTree: Object,
    path: String,
  },
  data() {
    return {
      isOpenDirectory: false,
      currentPath: this.path,
    };
  },
  methods: {
    toggleOpenDirectory() {
      this.currentPath = `${this.path}/${this.fileTree.name}`;
      this.isOpenDirectory = !this.isOpenDirectory;
      this.$emit('onChangePath', this.currentPath);
    },
    handleChangePath(path) {
      this.currentPath = path;
      this.$emit('onChangePath', this.currentPath);
    },
    openModal(event, id) {
      this.$emit('onOpenModal', event, id);
    },
    currentFile(type, fileName) {
      switch (type) {
        case FILE_TYPES.DIRECTORY:
          return FILE_TYPES.DIRECTORY;
        case FILE_TYPES.FILE:
          return this.getFileExtension(fileName);
        default:
          return FILE_TYPES.FILE;
      }
    },
    getFileExtension(fileName) {
      const fileExtension = fileName.substr(fileName.lastIndexOf('.') + 1);
      switch (fileExtension) {
        case FILE_EXTENSIONS.JS:
          return 'file-js';
        case FILE_EXTENSIONS.HTML:
          return 'file-html';
        case FILE_EXTENSIONS.CSS:
          return 'file-css';
        case FILE_EXTENSIONS.VUE:
          return 'file-vue';
        case FILE_EXTENSIONS.TXT:
          return 'file-txt';
        case FILE_EXTENSIONS.JSON:
          return 'file-json';
        default:
          return 'file';
      }
    },
  }
}
</script>

<style module lang="scss">
@mixin file-extension {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 15px;
    height: 15px;
  }
}

.tree-list {
  margin-left: 20px;

  &__item {
    margin-left: 2px;
  }
}

.file-name {
  display: inline-block;
  padding: 5px 20px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 5px;
  font-weight: 600;

  &:hover {
    background: #bbf1ea;
  }
}

.directory {
  @include file-extension;

  &::before {
    background: url('../assets/img/directory.svg');
  }
}

.file {
  @include file-extension;

  &::before {
    background: url('../assets/img/file.svg');
  }
}

.file-js {
  @include file-extension;

  &::before {
    background: url('../assets/img/file-js.svg');
  }
}

.file-html {
  @include file-extension;

  &::before {
    background: url('../assets/img/file-html.svg');
  }
}

.file-css {
  @include file-extension;

  &::before {
    background: url('../assets/img/file-css.svg');
  }
}

.file-json {
  @include file-extension;

  &::before {
    background: url('../assets/img/file-json.svg');
  }
}

.file-vue {
  @include file-extension;

  &::before {
    background: url('../assets/img/file-vue.svg');
  }
}

.file-txt {
  @include file-extension;

  &::before {
    background: url('../assets/img/file-txt.svg');
  }
}
</style>