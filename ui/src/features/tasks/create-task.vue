<script setup lang="ts">
import { ref } from 'vue'

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const taskDescription = ref('')
const emit = defineEmits(['submit'])

function buttonClick() {
    emit('submit', taskDescription.value)
}
</script>

<template>
    <div class="flex gap-2">
        <InputText type="text" v-model="taskDescription" />
        <Button @click="buttonClick" label="Create"></Button>
    </div>
</template>
