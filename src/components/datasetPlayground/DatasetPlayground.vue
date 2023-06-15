<template>
    <DatasetDetail v-model="datasetId"/>
    <DatasetDetailSampleTable />
    <SynButton
        :variant="SynButtonVariant.primary"
        :size="SynButtonSize.medium"
        @click="onContinueClick"
    >
    Continue
        <template
            #suffix
        >
            <SynIconMaterialRoundChevronRight
                :size="SynIconSize.SMALL"
            />
        </template>
    </SynButton>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SynButton, SynButtonVariant, SynButtonSize, SynIconMaterialRoundChevronRight, SynIconSize } from '@syntax-design/syntax-ui';
import datasetStore from '../../stores/dataset';
import DatasetDetail from '../datasetDetail/DatasetDetail.vue'
import DatasetDetailSampleTable from '../datasetDetail/DatasetDetailSampleDataTable.vue';

const datasetId = ref('');
const hasSamples = computed(() => datasetStore.selectedDatasetSample?.segments?.length > 0);

const onContinueClick = () => {
    //TODO: next step
}

</script>
