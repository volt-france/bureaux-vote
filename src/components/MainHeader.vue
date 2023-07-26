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
</template>

<script setup lang="ts">
import { ref } from 'vue';

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
