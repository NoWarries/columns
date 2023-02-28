<script lang="ts">
import MainContainer from '../../website/MainContainer.vue';
import { IconAlertTriangle } from '@tabler/icons-vue';

export default {
  name: 'SimpleAlertIconModal',
  components: { MainContainer, IconAlertTriangle },
  data() {
    return {
      name: 'Simple alert icon modal',
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
    :category="category"
    :tag="tag"
  >
    <div
      class="relative m-auto flex w-full flex-col justify-center p-2.5 text-left text-black dark:text-white"
    >
      <div
        class="m-auto m-2.5 inline-block w-11/12 rounded-lg bg-white p-2.5 shadow dark:bg-neutral-900"
      >
        <div class="flex">
          <div id="icon" class="flex items-center">
            <div id="iconContainer" class="m-2.5 rounded-full bg-red-200 p-2.5">
              <IconAlertTriangle class="h-6 w-6 text-gray-700" />
            </div>
          </div>
          <div>
            <div id="title" class="mt-2.5">
              <h1 class="mx-2.5 mb-1 text-2xl">Delete message</h1>
            </div>
            <div id="description" class="pb-2.5">
              <p class="mx-2.5">
                Are you sure you want to delete this message?
              </p>
            </div>
          </div>
        </div>
        <br />
        <div class="float-left">
          <input
            type="button"
            class="m-2 cursor-pointer rounded bg-neutral-700 p-2 text-white transition-all hover:bg-neutral-800"
            value="Cancel"
          />
        </div>
        <div id="actions" class="float-right">
          <input
            type="button"
            class="m-2 cursor-pointer rounded bg-red-600 p-2 text-white transition-all hover:bg-red-700"
            value="Delete"
          />
        </div>
      </div>
    </div>
  </MainContainer>
</template>

<style scoped></style>
