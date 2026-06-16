import type { Task } from '@/types';
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Ref } from 'vue'

export const useTaskStore = defineStore('tasks', () => {
    const tasks: Ref<Task[]> = ref([]);

    const unfinishedTasks = computed(() => tasks.value.filter(t => t.isCompleted).length);
    const finishedTasks = computed(() => tasks.value.filter(t => !t.isCompleted).length);

    function createTask(description: string): void {
        tasks.value.push({ description, isCompleted: false });
    }

    function deleteTask(description: string): void {
        const foundIndex = tasks.value.findIndex(t => t.description === description);
        tasks.value = tasks.value.splice(foundIndex, 1);
    }

    return {
        tasks,
        unfinishedTasks,
        finishedTasks,
        createTask,
        deleteTask,
    }
});
