<template>
  <q-card flat bordered style="height: 80vh; width: 95vw">
    <a :href="url">
      <q-badge floating label="Full Screen" class="bg-primary text-white">
        <q-icon name="attach_file"></q-icon>
      </q-badge>
    </a>
    <iframe :src="url" style="width: 100%; height: 100%" id="leaflet-view">
    </iframe>
  </q-card>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

import departementsJSON from '../assets/departements.json';

const props = defineProps({
  url: String,
});

const url = computed(() => {
  const routeID = useRoute().path.split('/').at(-1);
  if (routeID === 'departements') {
    return 'https://storage.googleapis.com/public.data.v.olt.sh/maps/html/departements.score.volt.map.html';
  }
  const row = departementsJSON
    .filter((row) => row.id.toLowerCase() === routeID?.toLowerCase())
    .at(0);

  return row?.url || '#';
});

const windowSize = ref(window.innerWidth);
onMounted(() => {
  window.addEventListener('resize', () => {
    windowSize.value = window.innerWidth;
    var iframeLeaflet = document.getElementById('leaflet-view');
    iframeLeaflet.setAttribute('offsetWidth', `${window.innerWidth * 0.9}px`);
    iframeLeaflet.setAttribute('offsetHeight', `${window.innerHeight * 0.9}px`);
  });
});
onUnmounted(() => {
  window.removeEventListener('resize', () => {
    windowSize.value = window.innerWidth;
    var iframeLeaflet = document.getElementById('leaflet-view');
    iframeLeaflet.setAttribute('offsetWidth', `${window.innerWidth * 0.9}px`);
    iframeLeaflet.setAttribute('offsetHeight', `${window.innerHeight * 0.9}px`);
  });
});
</script>
