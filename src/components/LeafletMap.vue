<template>
  <div id="map" style="height: auto; width: max-content"></div>
</template>

<script lang="ts">
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 20,
}).addTo(map);
</script>

<script setup lang="ts"></script>
