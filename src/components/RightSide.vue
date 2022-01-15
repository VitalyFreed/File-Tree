<template>
  <div :class="$style['right-side']">
    <span :class="$style['path-text']">Путь: {{ path }}</span>
  </div>
</template>

<script>
export default {
  name: 'RightSide',
  props: {
    path: String,
  },
}
</script>

<style module lang="scss">
.right-side {
  color: #ffffff;
  padding: 20px;
}

.path-text {
  font-size: 1.1em;
}
</style>