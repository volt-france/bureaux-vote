<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="toggleLeftDrawer"
      />
      <a href="#"
        ><q-avatar>
          <img src="../assets/volt-stats-logo/volt-stats.svg" />
        </q-avatar>
      </a>
      <q-toolbar-title>
        {{ windowSize <= 650 ? '' : 'Volt Data FR' }}
      </q-toolbar-title>

      <q-tabs no-caps bg-indigo text-white>
        <q-route-tab to="/table" label="Table" icon="rocket" />
        <div v-if="mobile">
          <q-route-tab to="/mob/map" label="Map" icon="map" />
        </div>
        <v-else>
          <q-route-tab to="/map" label="Map" icon="map" />
        </v-else>
        <q-route-tab to="/downloads" label="Downloads" icon="download" />
      </q-tabs>
    </q-toolbar>
  </q-header>
  <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
    <q-list>
      <q-item-label header> Essential Links </q-item-label>

      <EssentialLink
        v-for="link in essentialLinks"
        :key="link.title"
        v-bind="link"
      />
    </q-list>
  </q-drawer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';

const windowSize = ref(window.innerWidth);
onMounted(() => {
  window.addEventListener('resize', () => {
    windowSize.value = window.innerWidth;
  });
});
onUnmounted(() => {
  window.removeEventListener('resize', () => {
    windowSize.value = window.innerWidth;
  });
});

import LocalLinks from '../assets/links.json';

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const essentialLinks: EssentialLinkProps[] = LocalLinks;
</script>
