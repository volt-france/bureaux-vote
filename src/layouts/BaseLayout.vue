<template>
  <q-layout view="lHh Lpr lFf" id="vanta-bg-canvas">
    <MainHeader></MainHeader>
    <q-page-container> </q-page-container>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';

import LocalLinks from '../assets/links.json';

import MainHeader from 'components/MainHeader.vue';
import { ref, onMounted, onUnmounted } from 'vue';

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
const essentialLinks: EssentialLinkProps[] = LocalLinks;
</script>
<script lang="ts">
VANTA.NET({
  el: '#vanta-bg-canvas',
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 500.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.2,
  points: 7.0,
});
</script>
