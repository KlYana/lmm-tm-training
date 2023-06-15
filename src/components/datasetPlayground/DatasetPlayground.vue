<template>
  <DatasetDetail v-model="datasetId" />
  <DatasetDetailSampleTable />

  <div class="syn-btn mt-8"></div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import datasetStore from '../../stores/dataset'
import { type VaporiseDatasetObject } from '../../client/DatasetsApiClient.types'
import DatasetDetail from '../datasetDetail/DatasetDetail.vue'
import DatasetDetailSampleTable from '../datasetDetail/DatasetDetailSampleDataTable.vue'
//  v-show="hasSamples"
const datasetId = ref('')
const hasSamples = computed(() => datasetStore.selectedDatasetSample?.segments?.length > 0)

const onContinueClick = async () => {
  //TODO: rework just to test api purporse
  const vapObject: VaporiseDatasetObject = {
    datasetId: datasetStore.selectedDatasetSample.id,
    promptType: 'Rewrite the following in a gender neutral way'
  }

  await datasetStore.vaporiseDatasetData(vapObject)
  // after it we can get reworked datasetStore.vaporisedDatasetSample sample

  //TODO: move to needed component

  await datasetStore.fetchSupportedModels()
  // after it we can get reworked datasetStore.supportedModels
}
</script>
