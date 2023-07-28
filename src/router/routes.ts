import { RouteRecordRaw } from 'vue-router';
import PlotlyMapVue from 'src/components/PlotlyMap.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
  },
  {
    path: '/table',
    component: () => import('layouts/BaseLayout.vue'),
    children: [
      { path: '', component: () => import('components/BureauxTable.vue') },
    ]
  },
  {
    path: '/map',
    component: () => import('layouts/CardsLayout.vue'),
  },
  {
    path: '/downloads',
    component: () => import('layouts/DownloadLayout.vue'),
  },
  {
    path: '/github-redirect',
    redirect: () => {
      window.location.href = 'http://github.com/volt-france';
      return '/redirecting' // not important since redirecting
    }
  },
  {
    path: '/twitter-redirect',
    redirect: () => {
      window.location.href = 'http://twitter.com/arno_shae';
      return '/redirecting' // not important since redirecting
    }
  },
  {
    path: '/volt-redirect',
    redirect: () => {
      window.location.href = 'http://volteuropa.org';
      return '/redirecting' // not important since redirecting
    }
  },
  {
    path: '/discord-redirect',
    redirect: () => {
      window.location.href = 'http://discord.gg/volteuropa';
      return '/redirecting' // not important since redirecting
    }
  },
  {
    path: '/redirecting',
    component: () => import('pages/RedirectionWaitScreen.vue'),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
