<script lang="ts">
import Container from '../../components/MainContainer.vue';
import SimpleTwoFactorAuthenticationScreen from '../../components/content/screens/SimpleTwoFactorAuthenticationScreen.vue';
export default {
  components: { SimpleTwoFactorAuthenticationScreen, Container },
};
</script>

<template>
  <div class="content m-auto w-11/12">
    <h2>Simple two-factor authentication screen</h2>
    <Container :can-edit-scheme="true">
      <div class="mx-1 flex gap-2.5 p-5">
        <!-- Component -->
        <SimpleTwoFactorAuthenticationScreen />
      </div>
    </Container>
  </div>
</template>

<style scoped></style>
