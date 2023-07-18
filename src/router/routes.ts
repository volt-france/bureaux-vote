import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/BaseLayout.vue'),
    children: [
      { path: '', component: () => import('components/BureauxTable.vue') },
    ],
  },
  {
    path: '/map',
    component: () => import('layouts/MapLayout.vue'),
  },
  {
    path: '/table',
    component: () => import('layouts/TableLayout.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
