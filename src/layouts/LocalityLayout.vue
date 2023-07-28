<template>
  <q-layout view="lHh Lpr lFf" id="vanta-bg-canvas">
    <MainHeader></MainHeader>
    <q-page-container>
      <component
        :is="windowSize <= 640 ? LocalityListMobile : LocalityList"
      ></component>
    </q-page-container>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import LocalityList from '../components/LocalityList.vue';
import LocalityListMobile from '../components/LocalityListMobile.vue';
import MainHeader from '../components/MainHeader.vue';
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
