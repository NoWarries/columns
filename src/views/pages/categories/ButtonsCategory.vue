<script lang="ts">
import GenericButton from '../../components/content/buttons/GenericButton.vue';
import DualButton from '../../components/content/buttons/DualButton.vue';
import Container from '../../components/MainContainer.vue';
import GenericCategory from './GenericCategory.vue';
export default {
  components: { GenericCategory, Container, DualButton, GenericButton },
};
</script>

<template>
  <GenericCategory title="Buttons">
    <Container mark-raw :can-edit-scheme="true" title="Simple buttons">
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
    </Container>

    <Container scheme="dark" title="Outlined buttons">
      <div class="mx-1 flex p-5">
        <!-- Basic green outlined button -->
        <GenericButton
          tailwind="border-green-300 text-white border-solid border-2 p-2.5 font-semibold transition-all cursor-pointer hover:underline"
        />
        <GenericButton
          tailwind="border-green-300 text-white border-solid rounded border-2 p-2.5 font-semibold transition-all cursor-pointer hover:underline"
        />
      </div>
    </Container>

    <Container :can-edit-scheme="true" title="Dual buttons">
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
    </Container>
  </GenericCategory>
</template>

<style scoped></style>
