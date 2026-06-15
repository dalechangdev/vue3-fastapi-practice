<script setup lang="ts">
import type { Task } from '@/types';
import TaskItem from './task-item.vue';

const props = defineProps<{
    tasks: Task[]
}>()
</script>

<template>
    <template v-if="!props.tasks || !props.tasks || props.tasks.length === 0">
        <p>No tasks found! Create one?</p>
    </template>
    <template v-else>
        <div>
            <div v-for="task in props.tasks" :key="task.description">
                <TaskItem :description="task.description" :is-completed="task.isCompleted" />
            </div>
        </div>
    </template>
</template>
