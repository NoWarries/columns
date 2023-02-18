import { createRouter, createWebHistory } from 'vue-router';
import { IconHome, IconInputSearch } from '@tabler/icons-vue';

import Landing from '../views/pages/LandingView.vue';
import Library from '../views/pages/LibraryView.vue';
import Explorer from '../views/pages/ExplorerView.vue';

const routes = [
  {
    path: import.meta.env.BASE_URL,
    name: 'Landing page',
    component: Landing,
    isNavItem: false,
    icon: IconHome,
  },
  {
    path: import.meta.env.BASE_URL + 'explorer',
    name: 'Explorer',
    component: Explorer,
    isNavItem: true,
    icon: IconInputSearch,
  },
  {
    path: import.meta.env.BASE_URL + 'library',
    name: 'Library',
    component: Library,
    isNavItem: false,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router, routes };
