<template>
  <q-layout view="lHh Lpr lFf" id="vanta-bg-canvas">
    <MainHeader></MainHeader>
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
    <q-page-container> </q-page-container>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<!-- <script lang="ts">
// VANTA.NET({
//   el: '#vanta-bg-canvas',
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 500.0,
//   minWidth: 200.0,
//   scale: 1.0,
//   scaleMobile: 1.0,
// });
</script> -->
<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';

var props = defineProps(['chunkNumber']);

import MainHeader from 'components/MainHeader.vue';
const mapNumber = ref(props.chunkNumber);

import LocalLinks from '../assets/links.json';

const essentialLinks: EssentialLinkProps[] = LocalLinks;
</script>
