<template>
  <div class="q-pa-md row items-center q-gutter-md">
    <q-card
      class="my-card"
      v-for="dl in Downloads"
      v-bind:key="dl.id"
      style="max-height: 15%; max-width: 15%; margin: 1%; align-items: center"
    >
      <q-icon
        size="150px"
        style="
          padding: 10%;
          margin: 15%;
          align-self: flex-end;
          padding-bottom: -5%;
        "
        :name="getIconName(dl.format)"
        class="my-car"
      />
      <q-card-section>
        <div class=""></div>
        <div class="text-h5 q-pa-md">{{ dl.name }}</div>
        <div class="text-subtitle">Format: {{ dl.format }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none q-pa-md">
        {{ dl.description }}
      </q-card-section>

      <q-card-actions align="center">
        <q-btn
          color="purple"
          rounded="true"
          size="120%"
          @click="`${DownloadFactory(dl.url)}`"
        >
          Download</q-btn
        >
      </q-card-actions>
    </q-card>
  </div>
</template>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 25vw
  max-height: 20vh

.q-gutter-md
  padding-left:4%
  padding-top: 2%
</style>

<script setup lang="ts">
import Downloads from '../assets/downloads.json';
import axios from 'axios';

function downloadFile(response: Response) {
  const URL = window.URL.createObjectURL(new Blob([response.data]));
  const anchor = document.createElement('a');
  anchor.href = URL;
  var [route, fileName] = URL.replace('https://', '')
    .replace('http://', '')
    .split('/');
  route = `https://${route}`;
  anchor.setAttribute('download', fileName);
  document.appendChild(anchor);
  anchor.click();
  axios({
    method: 'get',
    url: URL,
    responseType: 'arraybuffer',
  })
    .then((response) => {
      downloadFile(response);
    })
    .catch(() => console.log('error occured'));
}

function getIconName(name: string) {
  switch (name) {
    case 'pdf': {
      return 'collections_bookmark';
    }
    case 'png': {
      return 'photo_size_select_actual';
    }
    case 'jpg': {
      return 'panorama';
    }
    case 'webp': {
      return 'photo';
    }
    case 'svg': {
      return 'collections';
    }
    case 'html': {
      return 'webhook';
    }
    case 'code': {
      return 'code';
    }
    case 'json': {
      return 'data_object';
    }
    case 'yaml': {
      return 'notes';
    }
    default: {
      return 'downloading';
    }
  }
}

function getPlotStorage(id: number) {
  return `https://storage.googleapis.com/public.data.v.olt.sh/maps/html/plot.scores.bureaux.page.part.${id}.html`;
}
</script>
