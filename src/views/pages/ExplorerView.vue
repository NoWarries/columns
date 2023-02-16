<script lang="ts">
import FilterSet from '../components/website/FilterSet.vue';

import ButtonsCategory from './categories/ButtonsCategory.vue';
import ScreensCategory from './categories/ScreensCategory.vue';
import { markRaw } from 'vue';

export default {
  name: 'ExplorerView',
  components: { FilterSet },
  data() {
    return {
      categories: markRaw([
        {
          name: 'Buttons',
          component: ButtonsCategory,
        },
        {
          name: 'Screens',
          component: ScreensCategory,
        },
      ]),
    };
  },
};
</script>

<template>
  <div>
    <div role="toolbar" class="m-5">
      <FilterSet :categories="categories" />
    </div>

    <div v-for="category in categories" id="section" :key="category.name">
      <component :is="category.component" />
    </div>
  </div>
</template>

<style scoped></style>
