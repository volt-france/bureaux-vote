<template>
  <q-layout view="lHh Lpr lFf" id="vanta-bg-canvas">
    <MainHeader></MainHeader>
    <q-page-container
      class="full-width row inline no-wrap justify-center items-center content-center"
      style="padding: 5%; margin: 3%; padding-top: 7%; margin-top: 7%"
    >
      <LeafletMap></LeafletMap>
    </q-page-container>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import MainHeader from '../components/MainHeader.vue';
import LeafletMap from 'src/components/LeafletMap.vue';
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const currRoute = computed(() => route.name);
const lastItem = ref(currRoute.value?.toString().split('/').at(-1) || 'paris');

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

function getPlotStorage(name: string): string {
  return `https://storage.googleapis.com/public.data.v.olt.sh/maps/html/zoom/${name}.zoomed.score.map.html`;
}

const plotStoragePath = ref(getPlotStorage(lastItem.value));
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
  scaleMobile: 1.2,
});
</script>
