<template>
  <q-header elevated bordered style="max-height: 10vh; padding-left: 0%">
    <q-toolbar style="max-height: 10vh; padding-left: 0%">
      <q-btn
        flat
        dense
        round
        size="25px"
        style="padding: 5px; margin: 5px"
        :icon="
          leftDrawerOpen
            ? 'keyboard_double_arrow_left'
            : 'keyboard_double_arrow_right'
        "
        aria-label="Menu"
        @click="toggleLeftDrawer"
      />
      <q-btn
        color="primary"
        flat
        dense
        round
        :style="
          windowSize <= 640
            ? 'margin: 3px; padding: 3px'
            : 'margin: 15px; padding: 10px;'
        "
      >
        <q-avatar
          :size="
            windowSize <= 640
              ? '40px'
              : `${Math.max(windowSize * 0.03, 60 + windowSize * 0.02)}px`
          "
          :style="
            windowSize <= 640 ? 'margin: 3px; padding: 3px' : 'margin: 15%;'
          "
        >
          <img
            src="../assets/volt-stats-logo/volt-stats.svg"
            :width="windowSize <= 640 ? 40 : 60 + windowSize * 0.02"
            :height="windowSize <= 640 ? 40 : 60 + windowSize * 0.02"
          />
        </q-avatar>
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup @click="$router.replace('/')">
              <q-item-section>Home</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup @click="$router.replace('/table')">
              <q-item-section>Table</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup @click="$router.replace('/map')">
              <q-item-section>Map</q-item-section>
            </q-item>
            <q-separator />
            <q-item
              clickable
              v-close-popup
              @click="$router.replace('/locality')"
            >
              <q-item-section>Zone-specific Maps</q-item-section>
            </q-item>
            <q-separator />
            <q-item
              clickable
              v-close-popup
              @click="$router.replace('/zones/dept')"
            >
              <q-item-section>Departement Maps</q-item-section>
            </q-item>
            <q-separator />
            <q-item
              clickable
              v-close-popup
              @click="$router.replace('/github-redirect')"
            >
              <q-item-section>Github</q-item-section>
            </q-item>

            <q-separator />
            <q-item
              clickable
              v-close-popup
              @click="$router.replace('/downloads')"
            >
              <q-item-section>Downloads</q-item-section>
            </q-item>
            <q-separator />
            <q-item
              clickable
              v-close-popup
              @click="$router.replace('/volt-redirect')"
            >
              <q-item-section>Website</q-item-section>
            </q-item>
            <q-separator />
            <q-item
              clickable
              v-close-popup
              @click="$router.replace('/twitter-redirect')"
            >
              <q-item-section>Author's Twitter</q-item-section>
            </q-item>
            <q-item
              clickable
              v-close-popup
              @click="$router.replace('/discord-redirect')"
            >
              <q-item-section>Volt Discord</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-toolbar-title>
        {{
          windowSize <= 650 ? '' : windowSize <= 900 ? 'Volt' : 'Volt Data FR'
        }}
      </q-toolbar-title>

      <q-tabs no-caps bg-indigo text-white>
        <q-route-tab
          to="/table"
          label="Tab"
          icon="rocket"
          :style="
            windowSize <= 640
              ? 'max-width: 20%; font-size: small; margin:3px; padding: 3px;'
              : 'width: fit-content'
          "
        />
        <q-route-tab
          to="/map"
          :label="windowSize <= 640 ? 'Map' : 'Map'"
          icon="map"
          :style="
            windowSize <= 640
              ? 'max-width: 15%; font-size: small; margin:3px; padding: 3px;'
              : 'width: fit-content'
          "
        />
        <q-route-tab
          to="/locality"
          :label="windowSize <= 640 ? 'Z' : 'Zones'"
          icon="center_focus_weak"
          :style="
            windowSize <= 640
              ? 'max-width: 15%; font-size: small; margin:3px; padding: 3px;'
              : 'width: fit-content'
          "
        />
        <q-route-tab
          to="/zones/dept"
          :label="windowSize <= 640 ? 'Dept' : 'Dept List'"
          icon="list"
          :style="
            windowSize <= 640
              ? 'max-width: 15%; font-size: small; margin:3px; padding: 3px;'
              : 'width: fit-content'
          "
        />
        <q-route-tab
          to="/downloads"
          :label="windowSize <= 640 ? 'Dls' : 'Downloads'"
          icon="download"
          :style="
            windowSize <= 640
              ? 'max-width: 15%; font-size: small; margin:3px; padding: 3px;'
              : 'width: fit-content'
          "
        />
      </q-tabs>
    </q-toolbar>
  </q-header>
  <q-drawer v-model="leftDrawerOpen" show-if-above bordered mini>
    <q-list>
      <q-item-label header> Essential Links </q-item-label>

      <EssentialLink
        v-for="link in essentialLinks"
        :key="link.title"
        v-bind="link"
      />
    </q-list>
  </q-drawer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';
const leftDrawerOpen = ref(false);
const windowSize = ref(window.innerWidth);
onMounted(() => {
  window.addEventListener('resize', () => {
    windowSize.value = window.innerWidth;
  });
  leftDrawerOpen.value = false;
});
onUnmounted(() => {
  window.removeEventListener('resize', () => {
    windowSize.value = window.innerWidth;
  });
});

import LocalLinks from '../assets/links.json';

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const essentialLinks: EssentialLinkProps[] = LocalLinks;
</script>
