import { RouteRecordRaw } from 'vue-router';
import PlotlyMapVue from 'src/components/PlotlyMap.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/BaseLayout.vue'),
    children: [
      { path: '', component: () => import('components/BureauxTable.vue') },
      {
        path: '/map',
        component: () => import('layouts/CardsLayout.vue'),
        children: [

        ]
      },
      {
        path: '/mob/map',
        component: () => import('layouts/CardsLayoutMobile.vue'),
        children: [

        ]
      },
      {
        component: PlotlyMapVue,
        path: '/map/:chunkNumber',
        props: route => ({
          chunkNumber: route.params.chunkNumber
        }),
        name: 'chunkNumber'
      },
    ],
  },
  {
    path: '/table',
    component: () => import('layouts/BaseLayout.vue'),
    children: [
      { path: '', component: () => import('components/BureauxTable.vue') },
    ]
  },
  {
    path: '/downloads',
    component: () => import('layouts/DownloadLayout.vue'),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
