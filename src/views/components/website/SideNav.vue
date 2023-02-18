<script lang="ts">
import { IconMenu2, IconHome } from '@tabler/icons-vue';
import { defineComponent } from 'vue';
import { routes } from '../../../middleware/router';

export default defineComponent({
  name: 'SideNav',
  components: { IconMenu2, IconHome },
  data(): any {
    return {
      navRoutes: routes.filter((route) => route.isNavItem),
      windowWidth: window.innerWidth,
      sizeState: window.innerWidth < 800 ? 'closed' : 'open',
    };
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth < 800) {
        this.sizeState = 'closed';
      }
    });
  },
  methods: {
    collapseToggle() {
      this.sizeState = this.sizeState === 'open' ? 'closed' : 'open';
    },
  },
});
</script>

<template>
  <div class="sidenav shadow-2xl" :class="sizeState" role="navigation">
    <div class="menu">
      <button v-if="windowWidth > 800" type="button" @click="collapseToggle">
        <IconMenu2 />
      </button>
      <router-link v-if="windowWidth < 800" to="/columns/" title="Homepage">
        <IconHome />
      </router-link>

      <div
        v-if="sizeState === 'open'"
        title="Homepage"
        class="w-full min-w-[15rem] text-center"
      >
        <router-link to="/columns/"> Columns Components </router-link>
      </div>
    </div>

    <ul>
      <li v-for="route in navRoutes" :key="route">
        <router-link :to="route.path" class="flex">
          <span>
            <component :is="route.icon" />
          </span>
          <span v-if="sizeState === 'open'" id="label">{{ route.name }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
[role='navigation'],
.sidenav {
  grid-area: sidenav;
  background: var(--sidebar);
  color: var(--on-sidebar);
}
.menu {
  display: flex;
  padding: 1rem;
}
.sidenav > ul > li {
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 25px;
}
a.flex > #label {
  margin-left: 1rem;
}
</style>
