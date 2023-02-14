<script lang="ts">
import GenericButton from '../../components/buttons/GenericButton.vue';
import DualButton from '../../components/buttons/DualButton.vue';
import MainContainer from '../../components/MainContainer.vue';
export default {
  components: { MainContainer, DualButton, GenericButton },
};
</script>

<template>
  <div class="content m-auto w-11/12">
    <h2>Simple buttons</h2>
    <MainContainer :can-edit-scheme="true">
      <div class="mx-1 flex p-5">
        <!-- Basic blue button -->
        <GenericButton
          tailwind="bg-sky-500 p-2.5 text-white font-semibold transition-all cursor-pointer hover:bg-sky-600"
        />
        <!-- Basic red rounded button -->
        <GenericButton
          class="cursor-pointer rounded bg-rose-600 p-2.5 font-semibold text-white transition-all hover:bg-rose-700"
        />
      </div>
    </MainContainer>

    <h2>Outlined buttons</h2>
    <MainContainer scheme="dark">
      <div class="mx-1 flex p-5">
        <!-- Basic green outlined button -->
        <GenericButton
          tailwind="border-green-300 text-white border-solid border-2 p-2.5 font-semibold transition-all cursor-pointer hover:underline"
        />
        <GenericButton
          tailwind="border-green-300 text-white border-solid rounded border-2 p-2.5 font-semibold transition-all cursor-pointer hover:underline"
        />
      </div>
    </MainContainer>

    <h2>Dual buttons</h2>
    <MainContainer :can-edit-scheme="true">
      <div class="mx-1 flex gap-2.5 p-5">
        <!-- Simple DualButton -->
        <DualButton
          tailwind-shared="text-white p-2.5"
          tailwind-button-one="bg-red-500 hover:bg-red-600"
          tailwind-button-two="bg-blue-500 hover:bg-blue-600"
        />
        <!-- Rounded DualButton -->
        <DualButton
          tailwind-shared="text-white p-2.5"
          tailwind-button-one="rounded-l bg-red-500 hover:bg-red-600"
          tailwind-button-two="rounded-r bg-blue-500 hover:bg-blue-600"
        />
      </div>
    </MainContainer>
  </div>
</template>

<style scoped></style>
