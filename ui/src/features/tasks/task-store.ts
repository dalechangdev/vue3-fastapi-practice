import type { Task } from '@/types';
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Ref } from 'vue'
import { TaskNotFoundError } from './task-errors';

export const useTaskStore = defineStore('tasks', () => {
    const tasks: Ref<Task[]> = ref([]);

    const unfinishedTasks = computed(() => tasks.value.filter(t => t.isCompleted));
    const finishedTasks = computed(() => tasks.value.filter(t => !t.isCompleted));

    function createTask(description: string): void {
        tasks.value.push({ description, isCompleted: false });
    }

    function deleteTask(description: string): void {
        tasks.value = tasks.value.filter(t => t.description !== description);
    }

    function toggleTask(description: string): void {
        const foundTask = tasks.value.find(t => t.description === description);
        if (!foundTask) {
            throw new TaskNotFoundError();
        }
        const foundIndex = tasks.value.indexOf(foundTask);
        foundTask.isCompleted = !foundTask.isCompleted
        tasks.value.splice(foundIndex, 1, foundTask)
    }

    return {
        tasks,
        unfinishedTasks,
        finishedTasks,
        createTask,
        deleteTask,
        toggleTask,
    }
});
