<script setup lang="ts">
import createTask from './features/tasks/create-task.vue';
import taskList from './components/task-list.vue';
import { useTaskStore } from './features/tasks/task-store.ts';
import TaskTable from './features/tasks/task-table.vue';

const store = useTaskStore();

function handleCreateTask(taskDescription: string) {
    store.createTask(taskDescription);
}
</script>

<template>
    <TaskTable :tasks="store.tasks" />
    <createTask @on-create-task="handleCreateTask" @submit="handleCreateTask" />
    <taskList :tasks="store.tasks" />
</template>

<style scoped></style>
