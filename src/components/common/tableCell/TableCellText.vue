<template>
    <td>
        <div>
            {{ value }}
        </div>
    </td>
</template>

<script setup lang="ts">
defineProps({
    value: {
        type: String,
        default: '',
    },
});
</script>