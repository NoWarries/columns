<script lang="ts">
import FilterSet from '../components/website/FilterSet.vue';

import { defineComponent, markRaw } from 'vue';
import components from '../../lib/components';

export default defineComponent({
  name: 'ExplorerView',
  components: { FilterSet },
  data() {
    return {
      appliedFilter: {
        query: '',
        categorySelection: [] as string[],
        tagSelection: [] as string[],
      },
      components: markRaw(components),
    };
  },
  methods: {
    updateFilter(newFilter: any) {
      this.appliedFilter = newFilter;
    },
  },
});
</script>

<template>
  <div>
    <div role="toolbar" class="m-5">
      <FilterSet :categories="components" @changed-filter="updateFilter" />
    </div>

    <div class="m-auto block">
      <div
        v-for="component in components
          .filter(
            (component) =>
              (appliedFilter.categorySelection.length <= 0 ||
                component.category.some((category) =>
                  appliedFilter.categorySelection.includes(category)
                )) &&
              (appliedFilter.tagSelection.length <= 0 ||
                (component.tag.length > 0 &&
                  component.tag.every((tag) =>
                    appliedFilter.tagSelection.includes(tag)
                  ))) &&
              (appliedFilter.query.length < 0 ||
                component.name
                  .toLowerCase()
                  .includes(appliedFilter.query.toLowerCase()))
          )
          .sort((a, b) => (a.name > b.name ? 1 : -1))"
        :key="component.name"
      >
        <component :is="component.component" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
