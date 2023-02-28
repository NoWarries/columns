<script lang="ts">
import MainContainer from '../../website/MainContainer.vue';
import { IconInfoCircle } from '@tabler/icons-vue';

export default {
  name: 'SimpleInfoIconModal',
  components: { MainContainer, IconInfoCircle },
  data() {
    return {
      name: 'Simple info icon modal',
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
            <div id="iconContainer" class="m-2.5 rounded-2xl bg-sky-200 p-2.5">
              <IconInfoCircle class="h-6 w-6 text-gray-700" />
            </div>
          </div>
          <div>
            <div id="title" class="mt-2.5">
              <h1 class="mx-2.5 mb-1 text-2xl">TOS Update : 2.0.1</h1>
            </div>
            <div id="description" class="mx-2.5 pb-2.5">
              <p>
                We would like to inform you that we have updated our Terms of
                Service
              </p>
              <p class="mt-2.5">
                We encourage you to review the updated TOS, which can be found
                on our website.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div id="actions" class="float-right">
          <input
            type="button"
            class="m-2 cursor-pointer rounded bg-sky-400 p-2 text-white transition-all hover:bg-sky-500"
            value="I understand"
          />
        </div>
      </div>
    </div>
  </MainContainer>
</template>

<style scoped></style>
