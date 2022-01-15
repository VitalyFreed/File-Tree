<template>
  <ul
    v-show="isVisibleModal"
    :class="$style['modal']"
    :style="{left: coords.x, top: coords.y}"
  >
    <li
      v-for="item in items"
      :key="item.id"
      :class="$style['modal__item']"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    isVisibleModal: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: () => ([]),
    },
    coords: {
      type: Object,
      default: () => ({x: 0, y: 0}),
    },
  },
  created() {
    console.log(this.coords)
  }
}
</script>

<style module lang="scss">
.modal {
  background-color: #272d3b;
  position: absolute;
  border-radius: 10px;
  overflow: hidden;

  &__item {
    width: 100%;
    padding: 15px 25px;
    cursor: pointer;
    color: #ffffff;
    font-weight: 500;

    &:hover {
      background-color: rgba(78, 85, 103, 0.3);
    }
  }
}
</style>