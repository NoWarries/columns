<script lang="ts">
import Container from '../../components/MainContainer.vue';
import SimpleTwoFactorAuthenticationScreen from '../../components/content/screens/SimpleTwoFactorAuthenticationScreen.vue';
import GenericCategory from './GenericCategory.vue';
export default {
  components: {
    GenericCategory,
    SimpleTwoFactorAuthenticationScreen,
    Container,
  },
};
</script>

<template>
  <GenericCategory title="Screens">
    <Container
      :can-edit-scheme="true"
      title="Simple two-factor authentication screen"
    >
      <div class="mx-1 flex gap-2.5 p-5">
        <!-- Component -->
        <SimpleTwoFactorAuthenticationScreen />
      </div>
    </Container>
  </GenericCategory>
</template>

<style scoped></style>
