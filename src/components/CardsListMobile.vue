<template>
  <div class="q-pa-lg column items-center" style="padding: 3%; margin: 3%">
    <div class="row" v-for="card in Cards" v-bind:key="card.id">
      <q-card class="my-card">
        <img
          :src="`${card.img}`"
          style="max-width: 80%; overflow-y: hidden; padding: 1px; margin: 10%"
          fit="contain"
        />

        <q-card-section>
          <div class=""></div>
          <div class="text-h5">{{ card.title }}</div>
          <div class="text-subtitle">{{ card.subtitle }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none" style="font-size: x-small !important">
          {{ card.description }}
        </q-card-section>

        <q-card-actions align="center">
          <q-btn
            color="purple"
            rounded="true"
            size="90%"
            :href="`${getPlotStorage(card.id)}`"
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

@media (max-width: $breakpoint-xs-max)
.my-card
  width: 100%
  max-width: 90vw
</style>

<script setup lang="ts">
import Cards from '../assets/cards.json';

function getPlotStorage(id: number) {
  return `https://storage.googleapis.com/public.data.v.olt.sh/maps/html/plot.scores.bureaux.page.part.${id}.html`;
}
</script>
