import { createRouter, createWebHistory } from 'vue-router';
import {
  IconXboxB,
  IconHome,
  IconScreenShare,
  IconInputSearch,
} from '@tabler/icons-vue';

import Landing from '../views/pages/LandingView.vue';
import Library from '../views/pages/LibraryView.vue';
import Explorer from '../views/pages/ExplorerView.vue';

import Buttons from '../views/pages/categories/ButtonsCategory.vue';
import Screens from '../views/pages/categories/ScreensCategory.vue';

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
  {
    path: import.meta.env.BASE_URL + 'buttons',
    name: 'Buttons',
    component: Buttons,
    isNavItem: true,
    icon: IconXboxB,
  },
  {
    path: import.meta.env.BASE_URL + 'screens',
    name: 'Screens',
    component: Screens,
    isNavItem: true,
    icon: IconScreenShare,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router, routes };
