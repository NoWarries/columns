<script lang="ts">
import MainContainer from '../../website/MainContainer.vue';

export default {
  name: 'SimpleModal',
  components: { MainContainer },
  data() {
    return {
      name: 'Simple modal',
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
        class="m-auto m-2.5 inline-block w-11/12 rounded-lg bg-white p-2.5 shadow dark:bg-neutral-900"
      >
        <div id="title" class="border-b-2 border-solid dark:border-neutral-800">
          <h1 class="mx-2.5">Modal</h1>
        </div>
        <div id="description" class="py-2.5">
          <p class="mx-2.5">Very important information goes here</p>
        </div>
        <div id="actions" class="float-right">
          <input
            type="button"
            class="m-2 cursor-pointer rounded bg-neutral-700 p-2 p-1 text-white transition-all hover:bg-neutral-800"
            value="Cancel"
          />
          <input
            type="button"
            class="m-2 cursor-pointer rounded bg-sky-500 p-2 p-1 text-white transition-all hover:bg-sky-600"
            value="Continue"
          />
        </div>
      </div>
    </div>
  </MainContainer>
</template>

<style scoped></style>
