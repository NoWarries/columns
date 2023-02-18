<script lang="ts">
import SearchBar from './SearchBar.vue';
import { defineComponent } from 'vue';
import CategorySelector from './CategorySelector.vue';
import TagSelector from './TagSelector.vue';
export default defineComponent({
  name: 'FilterSet',
  components: { TagSelector, CategorySelector, SearchBar },
  props: {
    categories: {
      type: Array,
      default: null,
    },
  },
  emits: ['changedFilter'],
  data(): any {
    return {
      list: this.categories,
      filter: {
        query: '',
        categorySelection: [],
        tagSelection: [],
      },
    };
  },
  methods: {
    queryUpdate(newQuery: String) {
      this.filter.query = newQuery;
      this.updateFilter();
    },
    categorySelectionUpdate(newSelection: string[]) {
      this.filter.categorySelection = newSelection;
      this.updateFilter();
    },
    tagSelectionUpdate(newSelection: string[]) {
      this.filter.tagSelection = newSelection;
      this.updateFilter();
    },
    updateFilter() {
      this.$emit('changedFilter', this.filter);
    },
  },
});
</script>

<template>
  <div>
    <SearchBar @changed-query="queryUpdate" />
    <TagSelector @changed-selection="tagSelectionUpdate" />
    <CategorySelector @changed-selection="categorySelectionUpdate" />
  </div>
</template>

<style scoped>
:host {
  border-bottom: solid 5px;
}
</style>
