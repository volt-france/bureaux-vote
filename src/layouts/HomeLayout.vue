<template>
  <q-layout view="lHh Lpr lFf" id="vanta-bg-canvas">
    <MainHeader></MainHeader>
    <div class="text-white text-center q-pa-md flex flex-center">
      <div>
        <div style="font-size: 15vh; padding-top: 6%">Hi there ! 👋</div>

        <div class="text-h2" style="opacity: 0.6">
          Not sure what to put here yet, <br /><br />so here's a pleading emoji
          <br />
          <br />
          👇
        </div>
        <div class="flex-break q-py-xl"></div>
        <div class="text-h1" style="opacity: 1">🥺</div>

        <q-btn
          class="q-mt-xl"
          rounded
          glossy
          icon="map"
          color="white"
          text-color="purple"
          size="2vw"
          to="/map"
          label="Go to Maps"
          no-caps
        />
        <p></p>
        <q-btn
          class="q-mt-xl"
          rounded
          glossy
          icon="table_view"
          color="white"
          text-color="purple"
          size="2vw"
          to="/table"
          label="Go to Table"
          no-caps
        />
      </div>
    </div>
  </q-layout>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';

import LocalLinks from '../assets/links.json';

import MainHeader from 'components/MainHeader.vue';

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
  scaleMobile: 1.2,
});
</script>
