<script setup lang="ts">
import { reactive } from 'vue';
import createTask from './features/tasks/create-task.vue';
import taskList from './components/task-list.vue';
import type { Task } from './types/task.ts';

const tasks = reactive<Task[]>([]);

function handleCreateTask(taskDescription: string) {
    tasks.push({ description: taskDescription, isCompleted: false });
}
</script>

<template>
    <createTask @on-create-task="handleCreateTask" @submit="handleCreateTask" />
    <taskList :tasks="tasks" />
</template>

<style scoped></style>
