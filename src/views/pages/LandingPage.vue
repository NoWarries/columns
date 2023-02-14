<script lang="ts">
import darkLogo from '../../assets/logos/Style=Dark-1.svg';
import lightLogo from '../../assets/logos/Style=Light-1.svg';

// Use the dark logo
let logo = darkLogo;
// Unless the user uses dark mode
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // Switch to the lightLogo
  logo = lightLogo;
}

import { IconBooks, IconBrandGithub } from '@tabler/icons-vue';

export default {
  components: { IconBooks, IconBrandGithub },
  data() {
    return {
      logo,
    };
  },
};
</script>

<template>
  <div class="content m-auto w-11/12 text-center">
    <img class="m-auto w-48 p-5" :src="logo" alt="Application logo" />
    <h1>Column Components</h1>
    <p>
      Column Components is a personal/hobby collection of reusable/inspirational
      web components built using Tailwind CSS and html.
    </p>
    <p>
      The components are built with Tailwind's utility classes, allowing for
      easy styling and customization.
    </p>
    <br />
    <p>Project has been created and is strictly used for self education</p>
    <div class="menu m-auto flex gap-2.5 text-center">
      <ul class="m-auto flex flex-row gap-5 p-5">
        <li>
          <a href="/columns/library">
            <span id="icon"><IconBooks /></span>
            <span>OS Library</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/nowarries/columns" target="_blank">
            <span id="icon"><IconBrandGithub /></span>
            <span>Github</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul {
  margin-top: 2rem;
}
li a {
  background: var(--primary-accent);
  color: var(--on-primary-accent);
  padding: 1rem;
  display: flex;
}
li a #icon {
  margin-right: 0.5rem;
}
</style>
