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
        path: '/table',
        component: () => import('layouts/TableLayout.vue'),
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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
