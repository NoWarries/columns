<script lang="ts">
export default {
  name: 'GenericCategory',
  props: {
    title: {
      type: String,
      default: 'Lorem Ipsum',
    },
  },
};
</script>

<template>
  <div class="content m-auto w-11/12">
    <h1>{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<style scoped></style>
