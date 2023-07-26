<template>
  <div class="q-pa-md fullpage-table" id="fullpage-table">
    <q-table
      flat
      bordered
      ref="tableRef"
      virtual-scroll
      title="Bureaux de vote"
      :rows="rows"
      :columns="columns"
      row-key="id"
      v-model:pagination="pagination"
      :loading="loading"
      :filter="filter"
      binary-state-sort
      @request="onRequest"
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
      <template v-slot:top-left>
        <q-btn
          color="primary"
          icon-right="archive"
          label="Export to csv"
          no-caps
          @click="exportTable"
        />
      </template>
    </q-table>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';

import BureauxData from '../assets/plot.scoring.metadata.table.json';

const columnsBase = [
  {
    name: 'num_dept',
    label: 'Departement Number',
    field: 'num_dept',
    sortable: true,
  },
  {
    name: 'name_dept',
    label: 'Departement Name',
    field: 'name_dept',
    sortable: true,
  },
  {
    name: 'num_circo',
    label: 'Circonscription Number',
    field: 'num_circo',
    sortable: true,
  },
  {
    name: 'name_circo',
    label: 'Circonscription Name',
    field: 'name_circo',
    sortable: true,
  },
  {
    name: 'num_commune',
    label: 'Commune Number',
    field: 'num_commune',
    sortable: true,
  },
  {
    name: 'name_commune',
    label: 'Commune Name',
    field: 'name_commune',
    sortable: true,
  },
  {
    name: 'num_bureau',
    label: 'Bureau Number',
    field: 'num_bureau',
    sortable: true,
  },
  {
    name: 'percent_voix_ins',
    label: '% Votes (total registered)',
    field: 'percent_voix_ins',
    sortable: true,
  },
  {
    name: 'percent_voix_exprim',
    label: '% Votes (total ballots cast)',
    field: 'percent_voix_exprim',
    sortable: true,
  },
  {
    name: 'prob_volt',
    field: 'prob_volt',
    label: 'Volt Compatibility Score',
    sortable: true,
    sort: (a: string, b: string) => parseFloat(a) - parseFloat(b),
  },
  {
    name: 'base_value',
    label: 'Base Value',
    field: 'base_value',
    sortable: true,
  },
  {
    name: 'share_houses_total_housing_2020',
    label: 'Part des maisons dans le total des logements',
    field: 'share_houses_total_housing_2020',
    sortable: true,
  },
  {
    name: 'registered_voters_main_list_2022',
    label: 'Électeurs inscrits sur liste principale 2022',
    field: 'registered_voters_main_list_2022',
    sortable: true,
  },
];

const columns = columnsBase;

const originalRows = BureauxData;

export default {
  setup() {
    const tableRef = ref();
    const rows = ref([]);
    const filter = ref('');
    const loading = ref(false);
    const pagination = ref({
      sortBy: 'desc',
      descending: false,
      page: 1,
      rowsPerPage: 20,
      rowsNumber: 10,
    });

    // emulate ajax call
    // SELECT * FROM ... WHERE...LIMIT...
    function fetchFromServer(startRow, count, filter, sortBy, descending) {
      const data = filter
        ? BureauxData.filter((row) => row.name.includes(filter))
        : BureauxData.slice();

      // handle sortBy
      if (sortBy) {
        const sortFn =
          sortBy === 'desc'
            ? descending
              ? (a, b) => (a.name > b.name ? -1 : a.name < b.name ? 1 : 0)
              : (a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
            : descending
            ? (a, b) => parseFloat(b[sortBy]) - parseFloat(a[sortBy])
            : (a, b) => parseFloat(a[sortBy]) - parseFloat(b[sortBy]);
        data.sort(sortFn);
      }

      return data.slice(startRow, startRow + count);
    }

    // emulate 'SELECT count(*) FROM ...WHERE...'
    function getRowsNumberCount(filter) {
      if (!filter) {
        return originalRows.length;
      }
      let count = 0;
      originalRows.forEach((treat) => {
        if (treat.name.includes(filter)) {
          ++count;
        }
      });
      return count;
    }

    function onRequest(props) {
      const { page, rowsPerPage, sortBy, descending } = props.pagination;
      const filter = props.filter;

      loading.value = true;

      // emulate server
      setTimeout(() => {
        // update rowsCount with appropriate value
        pagination.value.rowsNumber = getRowsNumberCount(filter);

        // get all rows if "All" (0) is selected
        const fetchCount =
          rowsPerPage === 0 ? pagination.value.rowsNumber : rowsPerPage;

        // calculate starting row of data
        const startRow = (page - 1) * rowsPerPage;

        // fetch data from "server"
        const returnedData = fetchFromServer(
          startRow,
          fetchCount,
          filter,
          sortBy,
          descending
        );

        // clear out existing data and add new
        rows.value.splice(0, rows.value.length, ...returnedData);

        // don't forget to update local pagination object
        pagination.value.page = page;
        pagination.value.rowsPerPage = rowsPerPage;
        pagination.value.sortBy = sortBy;
        pagination.value.descending = descending;

        // ...and turn of loading indicator
        loading.value = false;
      }, 1500);
    }

    onMounted(() => {
      // get initial data from server (1st page)
      tableRef.value.requestServerInteraction();
    });

    return {
      tableRef,
      filter,
      loading,
      pagination,
      columns,
      rows,
      onRequest,
    };
  },
};
</script>
