<script>
import SearchBar from '../components/website/SearchBar.vue';
export default {
  name: 'ExplorerView',
  components: { SearchBar },
};
</script>

<template>
  <div>
    <div role="toolbar" class="m-5">
      <SearchBar />
    </div>
  </div>
</template>

<style scoped></style>
