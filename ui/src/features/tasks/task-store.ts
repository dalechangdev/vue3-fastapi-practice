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

    return {
        tasks,
        unfinishedTasks,
        finishedTasks,
        createTask,
    }
});
