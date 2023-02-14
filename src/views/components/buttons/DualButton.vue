<script lang="ts">
export default {
  name: 'DualButton',
  props: {
    tailwindShared: {
      type: String,
      default: '',
    },
    tailwindButtonOne: {
      type: String,
      default: '',
    },
    tailwindButtonTwo: {
      type: String,
      default: '',
    },
  },
};
</script>

<template>
  <div>
    <input
      type="button"
      value="Button1"
      class="cursor-pointer"
      :class="[tailwindButtonOne, tailwindShared]"
    />
    <input
      type="button"
      value="Button2"
      class="cursor-pointer"
      :class="[tailwindButtonTwo, tailwindShared]"
    />
  </div>
</template>
