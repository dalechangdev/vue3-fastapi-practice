<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import type { Task } from '@/types';

const props = defineProps<{
    tasks: Task[]
}>()
</script>

<template>
    <DataTable :value="props.tasks" tableStyle="min-width: 50rem">
        <Column field="description" header="Description"></Column>
        <Column field="isComplete" header="Complete?"></Column>
    </DataTable>
</template>