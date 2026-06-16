<script setup lang="ts">
import createTask from './features/tasks/create-task.vue';
import taskList from './components/task-list.vue';
import { useTaskStore } from './features/tasks/task-store.ts';

const store = useTaskStore();

function handleCreateTask(taskDescription: string) {
    store.createTask(taskDescription);
}
</script>

<template>
    <createTask @on-create-task="handleCreateTask" @submit="handleCreateTask" />
    <taskList :tasks="store.tasks" />
</template>

<style scoped></style>
