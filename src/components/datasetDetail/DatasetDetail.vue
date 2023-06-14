<template>
    <div class="w-full border-solid border rounded-2xl p-6">
        <h3 class="text-2xl font-medium mb-6">Details</h3>
        <p class="text-xs mb-2">{{ label }}</p>
        <div class="w-[284px]">
            <SynSelect
                v-model="proxyModelValue"
                :items="datasetsItems"
                :dropdown-options="BASE_DROPDOWN_OPTIONS"
                :full-width="true"
                :placeholder="label"
            >
                <template #item-suffix="{item}">
                    {{ item.value }}
                </template>
            </SynSelect>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue';
import { SynSelect } from '@syntax-design/syntax-ui';
import { BASE_DROPDOWN_OPTIONS } from '../../common/constants';
import datasetStore from '../../stores/dataset';
import { type Dataset } from '../../client/DatasetsApiClient.types';


const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
});


//TODO: take from store store.datasets after BE fix + right mapping to synSelect
const datasetsItems = computed(() => [
    {
        value: 'dataset1',
        title: 'English to Slovak',
    },
    {
        value: 'dataset2',
        title: 'English to Polish',
    },
    {
        value: 'dataset3',
        title: 'English to German',
    },
] as Dataset[]);

const label = 'Choose dataset';

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();

const { modelValue } = toRefs(props);

const proxyModelValue = computed({
    get(): Dataset | null {
        return modelValue.value ? datasetsItems?.value.find(a => a.value === modelValue.value) : null;
    },
    set(dataset: Dataset | null) {
        datasetStore.fetchDatasetSampleData(dataset?.value ?? '');
        emit('update:modelValue', dataset?.value ?? '');
    },
});

datasetStore.fetchAvailableDatasets();

</script>
