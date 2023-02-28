<script lang="ts">
import OneChip from './OneChip.vue';
export default {
  name: 'ChipList',
  components: { OneChip },
  props: {
    list: {
      type: Array,
      default: undefined,
    },
    rounded: {
      type: Boolean,
      default: true,
    },
    border: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<template>
  <div class="block justify-center">
    <OneChip
      v-for="item in list"
      :key="item"
      :class="[{ rounded: 'rounded-lg' }, { border: 'b-1 border-solid' }]"
      :content="item"
    />
  </div>
</template>

<style scoped></style>
