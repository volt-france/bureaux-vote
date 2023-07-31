<template>
  <div class="q-pa-md row items-center q-gutter-md">
    <q-card
      class="my-card"
      v-for="locale in Localities"
      v-bind:key="locale.id"
      style="max-height: 25%; max-width: 25%; margin: 3%"
    >
      <img
        :src="`${locale.img}`"
        style="max-width: 80%; overflow-y: hidden; padding: 5px; margin: 10%"
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

      <q-card-section class="q-pt-none">
        {{ locale.description }}
      </q-card-section>

      <q-card-actions align="center">
        <q-btn
          color="purple"
          class="card-button-center"
          rounded="true"
          size="120%"
          :href="`${getPlotUrl(locale.zone)}`"
        >
          Check out the map</q-btn
        >
      </q-card-actions>
    </q-card>
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

@media (max-width: $breakpoint-xs-max)
.my-card
  width: 100%
  max-width: 90vw

@media (max-width: $breakpoint-xs-max)
  .status-badge-link
    width: 60%
    height: 10vh
</style>

<script setup lang="ts">
import Localities from '../assets/locality.json';

function getPlotStorage(locale: string) {
  return `https://storage.googleapis.com/public.data.v.olt.sh/maps/html/${locale}.score.volt.map.html`;
}
function getPlotUrl(zone: string) {
  return `https://bureaux-vote.v.olt.sh/#/map/z/${zone}`;
}
</script>
