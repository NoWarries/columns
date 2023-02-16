<script lang="ts">
import { IconSearch } from '@tabler/icons-vue';
export default {
  name: 'SearchBar',
  components: { IconSearch },
  emits: ['changedQuery'],
  data() {
    return {
      query: null,
    };
  },
};
</script>

<template>
  <div>
    <label for="searchBar" class="sr-only">Search</label>
    <div class="relative flex flex-row">
      <div class="absolute inset-y-0 flex items-center">
        <IconSearch class="ml-2.5" />
      </div>
      <input
        id="searchBar"
        v-model="query"
        type="text"
        class="block w-full rounded-lg border p-2.5 pl-10"
        placeholder="Search..."
        required
        @input="$emit('changedQuery', query)"
      />
    </div>
  </div>
</template>

<style scoped>
input {
  background: var(--filter-item);
  color: var(--on-filter-item);
}
</style>
