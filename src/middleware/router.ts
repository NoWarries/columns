import { createRouter, createWebHistory } from 'vue-router';
import {
  IconXboxB,
  IconHome,
  IconArrowsRandom,
  IconScreenShare,
} from '@tabler/icons-vue';

import Landing from '../views/pages/LandingPage.vue';
import Library from '../views/pages/LibraryPage.vue';

import Buttons from '../views/pages/categories/ButtonsCategory.vue';
import Misc from '../views/pages/categories/MiscCategory.vue';
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
  {
    path: import.meta.env.BASE_URL + 'misc',
    name: 'Miscellaneous',
    component: Misc,
    isNavItem: false,
    icon: IconArrowsRandom,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router, routes };
