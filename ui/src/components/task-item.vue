<script setup lang="ts">
import { ref } from 'vue'

const taskDescription = ref('')
const isComplete = ref(false)
</script>

<template>
    <div class="border px-2 py-4">
        <div class="">
            <span>Description:</span>
            <span>{{ taskDescription }}</span>
        </div>
        <div class="">
            <span>Status: </span>
            <span>{{ isComplete ? "✅"  : "❌" }}</span>
        </div>
    </div>
</template>
