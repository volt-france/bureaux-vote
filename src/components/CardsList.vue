<template>
  <div class="q-pa-md row items-center q-gutter-md">
    <q-card
      class="my-card"
      v-for="card in Cards"
      v-bind:key="card.id"
      style="max-height: 25%; max-width: 25%; margin: 3%"
    >
      <img
        :src="`${card.img}`"
        style="max-width: 80%; overflow-y: hidden; padding: 5px; margin: 10%"
        fit="contain"
      />

      <q-card-section>
        <div class=""></div>
        <div class="text-h5">{{ card.title }}</div>
        <div class="text-subtitle">{{ card.subtitle }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ card.description }}
      </q-card-section>

      <q-card-actions align="center">
        <q-btn
          color="purple"
          rounded="true"
          size="120%"
          :href="`${getPlotStorage(card.id)}`"
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
