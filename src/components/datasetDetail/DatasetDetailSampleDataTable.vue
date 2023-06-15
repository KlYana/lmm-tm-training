<template>
    <div class="border border-solid rounded-2xl p-8 mt-8">
        <h3 class="mb-8 text-2xl font-medium">Sample segments</h3>
        <SynTable
            :table-header-props="tableHeaderProps"
            :full-width="true"
            :table-body-props="tableBodyProps"
        />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { SynTable, SynTableBodyProps, SynTableHeaderProps, SynTableTextAlign } from '@syntax-design/syntax-ui';
import datasetStore from '../../stores/dataset';
import { datasetDetailColumns } from './DatasetDetailSampleDataTable';


const tableHeaderProps = computed((): SynTableHeaderProps => ({
    columns: datasetDetailColumns,
    textAlign: SynTableTextAlign.LEFT,
}));

const tableBodyProps = computed((): SynTableBodyProps => ({
    list: datasetStore.selectedDatasetSample?.segments,
}));


</script>
