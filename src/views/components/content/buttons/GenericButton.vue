<script lang="ts">
export default {
  name: 'GenericButton',
  props: {
    tailwind: {
      type: String,
      default: '',
    },
  },
};
</script>

<template>
  <input
    type="button"
    value="Button"
    class="m-2 cursor-pointer"
    :class="tailwind"
  />
</template>

<style scoped></style>
