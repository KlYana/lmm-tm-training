<template>
  <div class="border border-solid rounded-2xl p-8 mt-8">
    <h3 class="mb-8 text-2xl font-medium">Sample segments</h3>
    <table>
      <thead>
        <tr>
          <th>Source</th>
          <th>Target</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="segment.id" v-for="segment in datasetStore.selectedDatasetSample.segments">
          <td>
            {{ segment.source }}
          </td>
          <td>
            {{ segment.target }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import datasetStore from '../../stores/dataset'
</script>
