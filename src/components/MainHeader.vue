<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="arrow_back_ios"
        aria-label="Menu"
        @click="toggleLeftDrawer"
      />
      <q-btn color="primary" flat dense round>
        <q-avatar size="3vw" style="margin: 15%">
          <img src="../assets/volt-stats-logo/volt-stats.svg" />
        </q-avatar>
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup @click="$router.replace('/')">
              <q-item-section>Home</q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="$router.replace('/table')">
              <q-item-section>Table</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup @click="$router.replace('/map')">
              <q-item-section>Map</q-item-section>
            </q-item>
            <q-item
              clickable
              v-close-popup
              @click="$router.replace('/github-redirect')"
            >
              <q-item-section>Github</q-item-section>
            </q-item>
            <q-item
              clickable
              v-close-popup
              @click="$router.replace('/downloads')"
            >
              <q-item-section>Downloads</q-item-section>
            </q-item>
            <q-separator />
            <q-item
              clickable
              v-close-popup
              @click="$router.replace('/volt-redirect')"
            >
              <q-item-section>Website</q-item-section>
            </q-item>
            <q-separator />
            <q-item
              clickable
              v-close-popup
              @click="$router.replace('/twitter-redirect')"
            >
              <q-item-section>Author's Twitter</q-item-section>
            </q-item>
            <q-item
              clickable
              v-close-popup
              @click="$router.replace('/discord-redirect')"
            >
              <q-item-section>Volt Discord</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-toolbar-title>
        {{ windowSize <= 650 ? '' : 'Volt Data FR' }}
      </q-toolbar-title>

      <q-tabs no-caps bg-indigo text-white>
        <q-route-tab to="/table" label="Table" icon="rocket" />
        <q-route-tab to="/map" label="Map" icon="map" />
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
