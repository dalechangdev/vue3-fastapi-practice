<script setup lang="ts">
import { ref, computed } from 'vue'

const taskDescription = ref('')
const isComplete = ref(false)

// use computed to refactor and reduce conditional expression in template
const isCompleteMessage = computed(() => {
    return isComplete.value ? "✅" : "❌";
})
</script>

<template>
    <div class="border px-2 py-4">
        <div class="">
            <span>Description:</span>
            <span>{{ taskDescription }}</span>
        </div>
        <div class="">
            <span>Status: </span>
            <span>{{ isCompleteMessage }}</span>
        </div>
    </div>
</template>
