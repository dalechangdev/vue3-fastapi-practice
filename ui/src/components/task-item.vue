<script setup lang="ts">
import type { Task } from '@/types';

const props = defineProps<Task>()

// use computed to refactor and reduce conditional expression in template
// const isCompleteMessage = computed(() => {
//     return isComplete.value ? "✅" : "❌";
// })

function handleToggleComplete() {

}
</script>

<template>
    <div class="border px-2 py-4">
        <div class="">
            <span>Description:</span>
            <span>{{ props.description }}</span>
        </div>
        <div>
            <button @click="handleToggleComplete">{{ !props.isCompleted ? 'Complete Task' : 'Revert' }}</button>
        </div>
        <div class="">
            <span>Status: </span>
            <span>{{ props.isCompleted ? "✅" : "❌" }}</span>
        </div>
    </div>
</template>
