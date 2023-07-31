import { RouteRecordRaw } from 'vue-router';

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
    path: '/zones/dept',
    component: () => import('layouts/ZoneListLayout.vue'),
  },
  {
    path: '/locality',
    component: () => import('layouts/LocalityLayout.vue'),
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
  {
    path: '/map/z/dept/:catchAll(.*)*',
    component: () => import('layouts/MapLayout.vue'),
  },
  {
    path: '/map/z/departements',
    component: () => import('layouts/MapLayout.vue')
  },
  {
    path: '/map/z/regions',
    component: () => import('layouts/MapLayout.vue')
  },
  {
    path: '/map/z/communes',
    component: () => import('layouts/MapLayout.vue')
  },
  {
    path: '/map/z/dept/ain',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/aisne',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/allier',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/alpes-de-haute-provence',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/alpes-maritimes',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/ardeche',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/ardennes',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/ariege',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/aube',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/aude',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/aveyron',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/bas-rhin',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/bouches-du-rhone',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/calvados',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/cantal',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/charente-maritime',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/charente',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/cher',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/correze',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/corse-du-sud',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/cote-dor',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/cotes-darmor',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/creuse',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/deux-sevres',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/dordogne',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/doubs',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/drome',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/essonne',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/eure-et-loir',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/eure',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/finistere',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/gard',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/gers',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/gironde',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/guadeloupe',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/guyane',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/haute-corse',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/haute-garonne',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/haute-loire',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/haute-marne',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/hautes-alpes',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/haute-saone',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/haute-savoie',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/hautes-pyrenees',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/haute-vienne',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/haut-rhin',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/hauts-de-seine',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/herault',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/ille-et-vilaine',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/indre-et-loire',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/indre',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/isere',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/jura',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/landes',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/la-reunion',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/loire-atlantique',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/loir-et-cher',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/loiret',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/loire',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/lot-et-garonne',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/lot',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/lozere',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/maine-et-loire',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/manche',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/marne',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/martinique',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/mayenne',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/mayotte',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/meurhe-et-moselle',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/meuse',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/morbihan',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/moselle',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/nievre',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/nord',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/oise',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/orne',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/paris',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/pas-de-calais',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/puy-de-dome',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/pyrenees-atlantiques',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/pyrenees-orientales',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/rhone',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/saone-et-loire',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/sarthe',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/savoie',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/seine-et-marne',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/seine-maritime',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/seine-saint-denis',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/somme',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/tarn-et-garonne',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/tarn',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/territoire-de-belfort',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/val-de-marne',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/val-doise',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/var',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/vaucluse',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/vendee',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/vienne',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/vosges',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/yonne',
    component: () => import('layouts/MapLayout.vue')
  }
  ,
  {
    path: '/map/z/dept/yvelines',
    component: () => import('layouts/MapLayout.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
