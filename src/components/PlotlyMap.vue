<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <iframe
      width="90%"
      height="90%"
      :src="`https://storage.googleapis.com/public.data.v.olt.sh/maps/html/plot.scores.bureaux.page.part.${$route.params.chunkNumber}.html`"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
// const plot = await Plotly.newPlot('graph-div', json.data, json.layout);
</script>
