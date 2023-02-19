<script lang="ts">
import MainContainer from '../../website/MainContainer.vue';
import { IconError404 } from '@tabler/icons-vue';

export default {
  name: 'BigButtonModel',
  components: { MainContainer, IconError404 },
  data() {
    return {
      name: 'Big button icon modal',
      tag: [],
      category: ['Modal'],

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
  >
    <div
      class="relative m-auto flex w-full flex-col justify-center p-2.5 text-left text-black dark:text-white"
    >
      <div
        class="m-auto m-2.5 inline-block w-11/12 rounded-lg bg-white shadow dark:bg-neutral-900"
      >
        <div class="flex p-2.5">
          <div id="icon" class="flex items-center">
            <div
              id="iconContainer"
              class="m-2.5 rounded-full bg-yellow-100 p-2.5"
            >
              <!-- Icon goes here -->
              <!-- Classes applied : h-6 w-6 text-gray-700 -->
              <IconError404 class="h-6 w-6 text-gray-700" />
            </div>
          </div>
          <div>
            <div id="title">
              <h1 class="mx-2.5 mb-1 text-2xl">No content found</h1>
            </div>
            <div id="description" class="pb-2.5">
              <p class="mx-2.5">Page <b>`/about`</b> not found</p>
            </div>
          </div>
        </div>
        <br />
        <div id="actions" class="grid">
          <input
            type="button"
            class="cursor-pointer rounded-b-lg bg-yellow-100 p-2.5 text-black transition-all hover:bg-yellow-200"
            value="Ok"
          />
        </div>
      </div>
    </div>
  </MainContainer>
</template>

<style scoped></style>
