<script>
import { IconSearch } from '@tabler/icons-vue';
export default {
  name: 'SearchBar',
  components: { IconSearch },
};
</script>

<template>
  <form>
    <label for="searchBar" class="sr-only">Search</label>
    <div class="relative flex flex-row">
      <div class="absolute inset-y-0 flex items-center">
        <IconSearch class="ml-2.5" />
      </div>
      <input
        id="searchBar"
        type="text"
        class="block w-11/12 rounded-lg border p-2.5 pl-10"
        placeholder="Search..."
        required
      />
      <button
        type="submit"
        class="right-2.5 bottom-2.5 mx-2.5 block w-1/12 min-w-fit rounded-lg p-2.5"
      >
        Search
      </button>
    </div>
  </form>
</template>

<style scoped>
input {
  background: var(--searchbar);
  color: var(--on-searchbar);
}
button {
  background: var(--searchbar-button);
  color: var(--on-searchbar-button);
}
button:hover {
  background: var(--searchbar-button-hover);
  color: var(--on-searchbar-button-hover);
}
</style>
