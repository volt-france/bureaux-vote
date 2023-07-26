<template>
  <q-layout view="lHh Lpr lFf" id="vanta-bg-canvas">
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
        <q-avatar>
          <img src="../assets/volt-stats-logo/volt-stats.svg" />
        </q-avatar>
        <q-toolbar-title> Volt Data FR </q-toolbar-title>
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
    <q-page-container>
      <DownloadList></DownloadList>
    </q-page-container>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';
import DownloadList from 'src/components/DownloadCards.vue';
import LocalLinks from '../assets/links.json';

const essentialLinks: EssentialLinkProps[] = LocalLinks;
</script>

<script lang="ts">
VANTA.NET({
  el: '#vanta-bg-canvas',
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 2500,
  minWidth: 200.0,
  scale: 1.5,
  scaleMobile: 1.0,
});
</script>
