<script setup lang="ts">
import { ref } from 'vue'

const tasks = ref([{ title: 'Wash dishes', isComplete: true }, { title: 'Do laundry', isComplete: false }])
</script>

<template>
    <ul>
        <li v-for="task in tasks">
            {{ task.title }}
        </li>
    </ul>
</template>