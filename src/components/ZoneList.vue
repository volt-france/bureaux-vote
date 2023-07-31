<template>
  <div class="q-pa-md text-white">
    <q-table
      title="Departement List"
      :rows="rows"
      :columns="columns"
      row-key="name"
      selection="multiple"
      v-model:selected="selected"
      :filter="filter"
      grid
      hide-header
      v-model:pagination="pagination"
      :rows-per-page-options="rowsPerPageOptions"
    >
      <template v-slot:top-right>
        <q-input
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:item="props">
        <div
          class="q-pa-md col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition align-center text-center"
          :style="props.selected ? 'transform: scale(0.95);' : ''"
        >
          <q-btn
            rounded
            flat
            class="bg-white"
            :href="props.row.relUrl"
            :style="
              windowSize <= 650
                ? 'max-width: 45vw; max-height: fit-content; padding: 3vw; margin: 3vw'
                : 'max-width: 120px; max-height: fit-content'
            "
          >
            <img :src="props.row.small" />
          </q-btn>
        </div>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useQuasar } from 'quasar';
import departementsJSON from '../assets/departements.json';

function toTitleCase(phrase: string): string {
  return phrase
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const rowValues = computed(() =>
  departementsJSON.map((row) => {
    return Object.assign({}, row, {
      name: toTitleCase(row.id.replace('-', ' ')),
    });
  })
);

const rows = rowValues;

const columns = [
  {
    name: 'file',
    required: true,
    label: 'Image',
    align: 'left',
    field: 'file',
    sortable: true,
  },
  {
    name: 'id',
    required: true,
    label: 'Identifier',
    align: 'left',
    field: 'id',
    sortable: true,
  },
  {
    name: 'name',
    required: true,
    label: 'Identifier',
    align: 'left',
    field: 'name',
    sortable: true,
  },
  {
    name: 'url',
    required: true,
    label: 'Link to Map',
    align: 'left',
    field: 'url',
    sortable: true,
  },
];

const windowSize = ref(window.innerWidth);
onMounted(() => {
  window.addEventListener('resize', () => {
    windowSize.value = window.innerWidth;
  });
});
onUnmounted(() => {
  window.removeEventListener('resize', () => {
    windowSize.value = window.innerWidth;
  });
});

function resizeImage() {
  return windowSize.value <= 640 ? 50 : 100;
}

rows.value.sort(() => -1 + Math.floor(3 * Math.random()));

export default {
  setup() {
    const $q = useQuasar();
    function getItemsPerPage() {
      if ($q.screen.lt.sm) {
        return 3;
      }
      if ($q.screen.lt.md) {
        return 6;
      }

      if ($q.screen.lt.lg) {
        return 9;
      }

      if ($q.screen.lt.xl) {
        return 12;
      }
      return 12;
    }

    const filter = ref('');
    const pagination = ref({
      page: 1,
      rowsPerPage: getItemsPerPage(),
    });
    return {
      selected: ref([]),
      resizeImage: resizeImage,
      windowSize: windowSize,
      pagination,
      filter,
      columns,
      rows,
      rowsPerPageOptions: computed(() => {
        return $q.screen.gt.xs ? ($q.screen.gt.sm ? [3, 6, 9] : [3, 6]) : [3];
      }),
    };
  },
};
</script>

<style lang="scss">
.grid-style-transition {
  transition: transform 0.28s;
  background-color: 0.28s;
}
</style>
