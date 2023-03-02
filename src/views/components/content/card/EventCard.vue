<script lang="ts">
import MainContainer from '../../website/MainContainer.vue';
import { IconCalendarEvent, IconLocationFilled } from '@tabler/icons-vue';

export default {
  name: 'LoginModal',
  components: {
    MainContainer,
    IconCalendarEvent,
    IconLocationFilled,
  },
  data() {
    return {
      name: 'Simple Event Card',
      tag: ['Icons'],
      category: ['Card'],

      forceScheme: undefined,
      canEditScheme: true,
    };
  },
};
</script>

<template>
  <MainContainer
    :title="name"
    :can-edit-scheme="canEditScheme"
    :scheme="forceScheme"
    :category="category"
    :tag="tag"
  >
    <div class="w-full text-left">
      <a
        class="block cursor-pointer rounded-md p-6 shadow-md shadow-2xl dark:bg-neutral-900"
      >
        <h2 class="mb-2 text-2xl font-bold dark:text-white">Seminar</h2>
        <div class="my-4">
          <span class="rounded-md bg-green-500 px-2 py-1 text-sm text-white"
            >Planned</span
          >
        </div>
        <p class="mb-4 text-sm">Join us for an exclusive seminar</p>
        <p class="mb-4 text-sm">
          <IconLocationFilled class="mr-2 inline h-4 w-4" />
          <span class="font-semibold dark:text-white">Location:</span>
          Conference Room A3
        </p>
        <p class="mb-4 text-sm">
          <IconCalendarEvent class="mr-2 inline h-4 w-4" />
          <span class="font-semibold dark:text-white">Date:</span> March 15,
          2023
        </p>
        <div class="flex items-center">
          <div class="mr-4 w-3/4 rounded-full bg-gray-200">
            <div class="h-2 rounded-full bg-blue-500" style="width: 75%"></div>
          </div>
          <p class="text-sm">75 / 100 (75%)</p>
        </div>
      </a>
    </div>
  </MainContainer>
</template>

<style scoped></style>
