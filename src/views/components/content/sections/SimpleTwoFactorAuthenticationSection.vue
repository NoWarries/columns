<script lang="ts">
import { IconShield } from '@tabler/icons-vue';
import MainContainer from '../../website/MainContainer.vue';

export default {
  name: 'SimpleTwoFactorAuthenticationScreen',
  components: { MainContainer, IconShield },
  data() {
    return {
      name: 'Simple two-factor authentication section',
      tag: [],
      category: ['Screen', 'Section'],

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
    <div class="m-auto flex flex-col">
      <div class="text-center">
        <div class="flex items-center">
          <!-- App icon or shield icon goes here -->

          <!-- Classes applied to svg are : text-green-500 w-full h-12 -->
          <IconShield class="h-12 w-full text-green-500" />
        </div>
        <h1 class="text-2xl font-semibold">Two-factor authentication</h1>
        <p>
          Please confirm this is you by entering the authorisation code send to
          your device.
        </p>
        <br />
      </div>
      <form>
        <div class="flex flex-row justify-center gap-2">
          <input
            v-for="i in 6"
            :key="i"
            class="h-12 w-12 w-fit rounded text-center shadow-2xl"
            type="text"
            :placeholder="i.toString()"
            minlength="1"
          />
        </div>
        <br />
        <div class="flex items-center">
          <p>
            Haven't received your code?
            <button class="text-green-500 underline" type="button">
              Resend authentication code
            </button>
          </p>
          <input
            type="button"
            class="ml-auto cursor-pointer rounded bg-green-500 p-2.5 font-semibold text-white transition-all hover:bg-green-600"
            value="Submit"
          />
        </div>
      </form>
    </div>
  </MainContainer>
</template>
