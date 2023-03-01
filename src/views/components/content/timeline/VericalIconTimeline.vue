<script lang="ts">
import MainContainer from '../../website/MainContainer.vue';
import {
  IconShieldLockFilled,
  IconZoomInFilled,
  IconShieldCheckFilled,
} from '@tabler/icons-vue';

export default {
  name: 'VerticalIconTimeline',
  components: {
    MainContainer,
    IconShieldLockFilled,
    IconZoomInFilled,
    IconShieldCheckFilled,
  },
  data() {
    return {
      name: 'Vertical Icon Timeline',
      tag: [],
      category: ['Timeline'],

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
    <div class="text-left">
      <div id="event-1" class="m-2.5 flex w-fit flex-row rounded-lg">
        <div class="flex h-[inherit] flex-col items-center justify-center">
          <div
            class="flex min-h-[2rem] min-w-[2rem] items-center justify-center rounded-full bg-rose-500 text-white"
          >
            <IconShieldLockFilled class="h-4 w-4" />
          </div>
          <span class="my-2 h-full w-0.5 bg-neutral-300 text-transparent"
            >|</span
          >
        </div>
        <div class="m-0 ml-2.5 p-0">
          <div class="m-0 text-lg font-semibold">Account locked</div>
          <span class="font-sm m-0 text-gray-400"
            >Wed, 01 Mar 2023 10:12:00</span
          >
          <p>
            Account automatically locked due to misues of our communication
            platform
          </p>
        </div>
      </div>
      <div id="event-2" class="m-2.5 flex w-fit flex-row rounded-lg">
        <div class="flex h-[inherit] flex-col items-center justify-center">
          <div
            class="flex min-h-[2rem] min-w-[2rem] items-center justify-center rounded-full bg-blue-500 text-white"
          >
            <IconZoomInFilled class="h-4 w-4" />
          </div>
          <span class="my-2 h-full w-0.5 bg-neutral-300 text-transparent"
            >|</span
          >
        </div>
        <div class="m-0 ml-2.5 p-0">
          <div class="m-0 text-lg font-semibold">Investigation</div>
          <span class="font-sm m-0 text-gray-400"
            >Thur, 02 Mar 2023 15:12:14</span
          >
          <p>One of our operators has started an investigation</p>
        </div>
      </div>
      <div id="event-3" class="m-2.5 flex w-fit flex-row rounded-lg">
        <div class="flex h-[inherit] flex-col items-center justify-center">
          <div
            class="flex min-h-[2rem] min-w-[2rem] items-center justify-center rounded-full bg-green-500 text-white"
          >
            <IconShieldCheckFilled class="h-4 w-4" />
          </div>
          <span class="my-2 h-full w-0.5 bg-neutral-300 text-transparent"
            >|</span
          >
        </div>
        <div class="m-0 ml-2.5 p-0">
          <div class="m-0 text-lg font-semibold">Security cleared</div>
          <span class="font-sm m-0 text-gray-400"
            >Sun, 05 Mar 2023 10:46:44</span
          >
          <p>Account has been cleared by security</p>
        </div>
      </div>
    </div>
  </MainContainer>
</template>
