<script lang="ts">
import MainContainer from '../../website/MainContainer.vue';

export default {
  name: 'BigButtonIconModel',
  components: { MainContainer },
  data() {
    return {
      name: 'Big button modal',
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
          <div>
            <div id="title">
              <h1 class="mx-2.5 mb-1 text-2xl">Publishing</h1>
            </div>
            <div id="description" class="mx-2.5 pb-2.5">
              <p>You are about to publish this document.</p>
              <p>Are you sure?</p>
            </div>
          </div>
        </div>
        <br />
        <div id="actions" class="grid grid-cols-2">
          <input
            type="button"
            class="cursor-pointer bg-gray-400 p-2.5 text-white transition-all hover:bg-gray-500 dark:bg-neutral-700 dark:hover:bg-neutral-800"
            value="Cancel"
          />
          <input
            type="button"
            class="cursor-pointer bg-green-500 p-2.5 text-white transition-all hover:bg-green-600"
            value="Yes, I am sure!"
          />
        </div>
      </div>
    </div>
  </MainContainer>
</template>

<style scoped></style>
