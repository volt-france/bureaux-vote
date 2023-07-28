<template>
  <div
    class="fullscreen text-white text-center q-pa-md flex flex-center"
    id="vanta-bg-canvas"
  >
    <div>
      <div style="font-size: 30vh">Goodbye ! 👋</div>

      <div class="text-h2" style="opacity: 0.4">
        You are getting redirected 🚀
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="purple"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  window.addEventListener('resize', handleWindowSizeChange);
  handleWindowSizeChange();
});
onUnmounted(() => {
  window.removeEventListener('resize', handleWindowSizeChange);
});
const handleWindowSizeChange = () => {
  var canvas = document.getElementById('vanta-bg-canvas');
  canvas.style.height = window.innerHeight;
};
</script>
<script lang="ts">
VANTA.NET({
  el: '#vanta-bg-canvas',
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 500,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
});
</script>
