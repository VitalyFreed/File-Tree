<template>
  <ul
    :class="$style['modal']"
    :style="getCoords"
  >
    <li
      v-for="item in items"
      :key="item.id"
      :class="$style['modal__item']"
      @click="item.action()"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => ([]),
    },
    coords: {
      type: Object,
      default: () => ({x: 0, y: 0}),
    },
  },
  computed: {
    getCoords() {
      return {
        left: `${this.coords.x}px`, top: `${this.coords.y}px`
      };
    },
  },
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