<template>
  <div class="w-full border-solid border rounded-2xl p-6">
    <h3 class="text-2xl font-medium mb-6">Details</h3>
    <p class="text-xs mb-2">{{ label }}</p>
    <div class="w-[284px]"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { BASE_DROPDOWN_OPTIONS } from '../../common/constants'
import datasetStore from '../../stores/dataset'
import { type DatasetOption } from '../../client/DatasetsApiClient.types'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const label = 'Choose dataset'

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const { modelValue } = toRefs(props)

const proxyModelValue = computed({
  get(): DatasetOption | null {
    return modelValue.value
      ? mapToSynSelectType.value.find((a) => a.value === modelValue.value)
      : null
  },
  set(dataset: DatasetOption | null) {
    datasetStore.fetchDatasetSampleData(dataset?.value ?? '')
    emit('update:modelValue', dataset?.value ?? '')
  }
})

datasetStore.fetchAvailableDatasets()

const mapToSynSelectType = computed(() => {
  const synSelectType: DatasetOption[] = []
  datasetStore.datasets.forEach((a) => {
    const option = {
      value: a.id,
      title: a.id
    } as DatasetOption

    synSelectType.push(option)
  })

  return synSelectType
})
</script>
