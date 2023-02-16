<script lang="ts">
import SearchBar from './SearchBar.vue';
import { defineComponent } from 'vue';
import CategorySelector from './CategorySelector.vue';
export default defineComponent({
  name: 'FilterSet',
  components: { CategorySelector, SearchBar },
  props: {
    categories: {
      type: Array,
      default: null,
    },
  },
  data(): any {
    return {
      list: this.categories,
      filter: {
        query: null,
        categorySelection: [],
      },
    };
  },
  methods: {
    queryUpdate(newQuery: String) {
      this.filter.query = newQuery;
    },
    categorySelectionUpdate(newSelection: string[]) {
      this.filter.categorySelection = newSelection;
    },
  },
});
</script>

<template>
  <div>
    <SearchBar @changed-query="queryUpdate" />
    <CategorySelector @changed-selection="categorySelectionUpdate" />
    {{ filter }}
  </div>
</template>

<style scoped>
:host {
  border-bottom: solid 5px;
}
</style>
