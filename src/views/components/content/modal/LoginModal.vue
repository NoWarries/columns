<script lang="ts">
import MainContainer from '../../website/MainContainer.vue';
import {
  IconBrandGithub,
  IconBrandApple,
  IconBrandGoogle,
  IconX,
} from '@tabler/icons-vue';

export default {
  name: 'LoginModal',
  components: {
    MainContainer,
    IconBrandGithub,
    IconBrandApple,
    IconBrandGoogle,
    IconX,
  },
  data() {
    return {
      name: 'Login modal',
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
      class="relative m-auto flex flex-col justify-center p-2.5 text-left text-black dark:text-white"
    >
      <div
        class="m-auto m-2.5 inline-block w-11/12 rounded-lg bg-white p-2.5 shadow dark:bg-neutral-900"
      >
        <div id="title" class="mb-5 flex flex-row dark:border-neutral-800">
          <h1 class="mx-2.5 text-lg font-bold">Login with</h1>
          <button class="mx-2.5 ml-auto text-lg text-neutral-600">
            <IconX />
          </button>
        </div>
        <div
          id="socials"
          class="flex flex-row justify-center gap-2.5 text-white"
        >
          <button
            id="social-apple"
            type="button"
            class="m-1 max-w-2xl rounded-2xl bg-sky-500 p-2"
          >
            <IconBrandApple class="h-full w-full" />
          </button>
          <button
            id="social-google"
            type="button"
            class="m-1 max-w-2xl rounded-2xl bg-rose-500 p-2"
          >
            <IconBrandGoogle class="h-full w-full" />
          </button>
          <button
            id="social-gh"
            type="button"
            class="m-1 max-w-2xl rounded-2xl bg-gray-800 p-2"
          >
            <IconBrandGithub class="h-full w-full" />
          </button>
        </div>
        <p
          class="py-5 text-center before:mr-2.5 before:text-gray-500 before:content-['-----'] after:ml-2.5 after:text-gray-500 after:content-['-----']"
        >
          or
        </p>

        <form class="mx-2.5">
          <label for="email" class="sr-only">Email</label>
          <input
            id="email"
            type="email"
            class="my-2 w-full rounded border-2 border-solid p-2 dark:border-neutral-700 dark:bg-neutral-800"
            placeholder="email"
          />
          <label for="password" class="sr-only">Password</label>
          <input
            id="password"
            type="password"
            class="my-2 w-full rounded border-2 border-solid p-2 dark:border-neutral-700 dark:bg-neutral-800"
            placeholder="password"
          />

          <input
            type="button"
            class="my-2 w-full cursor-pointer bg-green-500 p-2 text-white transition-all hover:bg-green-600"
            value="Login"
          />
        </form>

        <div class="mx-2.5 flex items-center pt-4 pb-2">
          <p>
            No account? No problem!
            <button class="text-green-500 underline" type="button">
              Sign up here
            </button>
          </p>
        </div>
      </div>
    </div>
  </MainContainer>
</template>

<style scoped></style>
