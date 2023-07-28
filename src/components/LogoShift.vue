<template>
  <q-page-container class="q-pa-xl" style="margin: 0 0 15% 15%; width: 50vw">
  </q-page-container>
</template>

<style lang="scss">
.bg-logo {
  background-color: rgba(0, 0, 0, 0);
  position: sticky;
}
</style>
<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>
