<template>
  <q-layout view="lHh Lpr lFf" id="vanta-bg-canvas">
    <MainHeader></MainHeader>
    <q-page-container> </q-page-container>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

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

<script setup lang="ts">
import MainHeader from 'src/components/MainHeader.vue';
</script>
