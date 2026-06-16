<script setup lang="ts">
import type { Task } from '@/types';

import { Button } from 'primevue'

const props = defineProps<Task>()

// use computed to refactor and reduce conditional expression in template
// const isCompleteMessage = computed(() => {
//     return isComplete.value ? "✅" : "❌";
// })

function handleToggleComplete() {

}

function handleDeleteTask() {

}
</script>

<template>
    <div class="border px-2 py-4">
        <div class="flex gap-8">
            <div class="flex flex-col gap-2">
                <span class="text-slate-300">Description</span>
                <span class="text-xl">{{ props.description }}</span>
            </div>
            <div class="flex flex-col gap-2">
                <span class="text-slate-300">Status</span>
                <span>{{ props.isCompleted ? "✅" : "❌" }}</span>
            </div>
        </div>
        <div class="flex gap-2">
            <Button @click="handleToggleComplete">{{ !props.isCompleted ? 'Complete Task' : 'Revert' }}</Button>
            <Button icon="pi pi-trash" @click="handleDeleteTask" aria-label="Delete" />
        </div>
    </div>
</template>
