<template>
  <div class="q-pa-lg column items-center">
    <div class="row" v-for="locale in Localities" v-bind:key="locale.id">
      <q-card class="my-card">
        <img
          :src="`${locale.img}`"
          style="max-width: 80%; overflow-y: hidden; padding: 1px; margin: 10%"
          fit="contain"
        />

        <q-card-section>
          <q-badge
            :label="locale.status ? 'Link OK' : 'Link KO'"
            rounded
            class="q-ma-md status-badge-link"
            :color="locale.status ? 'green' : 'red'"
          >
            <q-icon
              size="140%"
              :name="locale.status ? 'done' : 'dangerous'"
              color="white"
            />
          </q-badge>
          <div class="text-h5">{{ locale.title }}</div>
          <div class="text-subtitle">{{ locale.subtitle }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none description-card-body">
          {{ locale.description }}
        </q-card-section>

        <q-card-actions align="center">
          <q-btn
            class="card-button-center"
            color="purple"
            rounded="true"
            size="90%"
            :href="`${getPlotUrl(locale.zone)}`"
          >
            Check out the map</q-btn
          >
        </q-card-actions>
      </q-card>
      <div class="flex-break q-py-xl" style="height: 10vh !important">
        <p style="fill-opacity;: 0; color: rgba(0,0,0,0);">Text</p>
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 25vw

.status-badge-link

  height: 40px
  font-size: fit-content
  text-align: center
  font-weight: bold

.description-card-body
  text-wrap: balance

@media (max-width: $breakpoint-xs-max)
.my-card
  width: 100%
  max-width: 90vw
  text-align: center

.q-btn
  width: 60%
  height: 10vh
</style>

<script setup lang="ts">
import Localities from '../assets/locality.json';

function getPlotStorage(zone: string) {
  return `https://storage.googleapis.com/public.data.v.olt.sh/maps/html/${zone}.score.volt.map.html`;
}
function getPlotUrl(zone: string) {
  return `https://bureaux-vote.v.olt.sh/#/map/z/${zone}`;
}
</script>
