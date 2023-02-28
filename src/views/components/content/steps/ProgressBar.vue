<script lang="ts">
import MainContainer from '../../website/MainContainer.vue';
import {
  IconLogin,
  IconMail,
  IconIdBadge,
  IconZoomCheck,
} from '@tabler/icons-vue';

export default {
  name: 'ProgressBar',
  components: {
    MainContainer,
    IconLogin,
    IconMail,
    IconIdBadge,
    IconZoomCheck,
  },
  data() {
    return {
      name: 'Steps progress bar',
      tag: [],
      category: ['Steps'],

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
    <div class="flex w-full flex-col">
      <div class="m-4 flex justify-around">
        <div class="flex items-center rounded-lg p-4">
          <IconLogin />
          <span class="ml-4 text-sm">Create account</span>
        </div>
        <div class="flex items-center rounded-lg p-4">
          <IconMail />
          <span class="ml-4 text-sm">Verify email</span>
        </div>
        <div class="flex items-center rounded-lg p-4">
          <IconIdBadge />
          <span class="ml-4 text-sm">Identity confirmation</span>
        </div>
        <div class="flex items-center rounded-lg p-4">
          <IconZoomCheck />
          <span class="ml-4 text-sm">Manual review</span>
        </div>
      </div>
      <div class="m-4 flex justify-center">
        <div class="h-1 w-1/4 rounded-l-lg bg-blue-500"></div>
        <div class="h-1 w-1/4 bg-blue-300"></div>
        <div class="h-1 w-1/4 bg-gray-400"></div>
        <div class="h-1 w-1/4 rounded-r-lg bg-gray-400"></div>
      </div>
    </div>
  </MainContainer>
</template>
