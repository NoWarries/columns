<script lang="ts">
export default {
  name: 'OneChip',
  props: {
    content: {
      type: String,
      default: 'Lorem',
    },
  },
};
</script>

<template>
  <div :class="'chip-' + content" class="m-2.5 inline-block py-1 px-2.5">
    {{ content }}
  </div>
</template>

<style lang="scss" scoped>
// import chip styling rules
@import '../../../../styles/theme/chips.scss';

@each $key, $value in $chip-colors {
  .chip-#{$key} {
    background: map-get($chip-background, $key);
    color: map-get($chip-colors, $key);
    border-color: map-get($chip-colors, $key);
  }
}
</style>
