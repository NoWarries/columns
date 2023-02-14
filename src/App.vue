<script setup lang="ts">
import Sidenav from './views/components/SideNav.vue';
</script>

<template>
  <div id="grid" class="h-full w-full">
    <Sidenav />
    <main>
      <!-- outlet -->
      <router-view />
    </main>
  </div>
</template>

<style scoped>
main {
  grid-area: main;
  background: var(--primary);
  color: var(--on-primary);
}
</style>
