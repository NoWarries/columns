<script lang="ts">
import { defineComponent } from 'vue';
import { IconX } from '@tabler/icons-vue';

export default defineComponent({
  name: 'CategorySelector',
  components: { IconX },
  emits: ['changedSelection'],
  data() {
    return {
      categories: ['Button', 'Screen', 'Lorem Ipsum'],
      selection: [] as string[],
    };
  },
  methods: {
    addSelection(event: Event) {
      const target = event.target as HTMLInputElement;
      const value = target.value as string;
      this.selection.push(value);
      target.value = 'Choose a category';
      this.$emit('changedSelection', this.selection);
    },
    removeSelection(oldSelection: string) {
      this.selection = this.selection.filter((e) => e !== oldSelection);

      this.$emit('changedSelection', this.selection);
    },
  },
});
</script>

<template>
  <div class="my-2.5 w-full">
    <label for="searchBar" class="sr-only">Search</label>
    <div class="relative flex flex-row">
      <select
        class="mb-6 block rounded-lg border p-1 text-sm"
        @input="addSelection"
      >
        <option selected>Choose a category</option>
        <option
          v-for="category in categories.filter(
            (cat: string) => !selection.includes(cat)
          )"
          :key="category"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
      <div class="block w-full text-left">
        <div
          v-for="selected in selection"
          id="selectedChip"
          :key="selected"
          class="mx-2.5 mb-1 inline-flex justify-center rounded-lg p-1 pl-5 text-center text-sm"
        >
          <span>{{ selected }}</span>
          <button class="ml-1" @click="() => removeSelection(selected)">
            <IconX class="h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
select {
  background: var(--filter-item);
  color: var(--on-filter-item);
}
#selectedChip {
  background: var(--filter-chip);
  color: var(--on-filter-chip);
  max-width: 10rem;
  min-width: 5rem;
}
</style>
