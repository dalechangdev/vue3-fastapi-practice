<script setup lang="ts">
import { ref } from 'vue'

const taskDescription = ref('')
const emit = defineEmits(['submit'])

function buttonClick() {
    emit('submit', taskDescription.value)
}
</script>

<template>
    <input v-model="taskDescription" />
    <button @click="buttonClick">Create Task</button>
</template>