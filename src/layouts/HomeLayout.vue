<template>
  <q-layout view="lHh Lpr lFf" id="vanta-bg-canvas">
    <MainHeader></MainHeader>
    <p style="height: 10vh; color: #000000">Test</p>
    <div class="text-white text-center q-pa-md flex flex-center column">
      <div>
        <div style="font-size: 15vh; padding-top: 6%">Hi there ! 👋</div>

        <div class="flex-break q-py-xl"></div>
      </div>
      <div
        class="text-center flex flex-center row"
        style="width: 30vw; height: 10vh"
      >
        <q-btn
          class="q-mt-xl fit row"
          rounded
          glossy
          icon="map"
          color="white"
          text-color="purple"
          :size="buttonSize"
          to="/map"
          label="Go to Maps"
          no-caps
        />
        <p></p>
        <q-btn
          class="q-mt-xl fit row"
          rounded
          glossy
          icon="table_view"
          color="white"
          text-color="purple"
          :size="buttonSize"
          to="/table"
          label="Go to Table"
          no-caps
        />
        <q-btn
          class="q-mt-xl fit row"
          rounded
          glossy
          icon="center_focus_weak"
          color="white"
          text-color="purple"
          :size="buttonSize"
          to="/locality"
          label="Go to Zones"
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

var buttonSize = ref(300);

const windowSize = ref(window.innerWidth);
onMounted(() => {
  window.addEventListener('resize', () => {
    windowSize.value = window.innerWidth;
    buttonSize.value =
      windowSize.value <= 640 ? 400 : 0.4 * windowSize.value + 350;
  });
});
onUnmounted(() => {
  window.removeEventListener('resize', () => {
    windowSize.value = window.innerWidth;
    buttonSize.value = 0.4 * windowSize.value;
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
