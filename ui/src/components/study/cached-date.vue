<script setup lang="ts">
import { reactive } from 'vue';

const now = reactive({
    dt: Date.now()
});

function otherNow() {
    return Date.now();
}

function getCurrentTime(): void {
    now.dt = Date.now()
}

function isCompleteMessage(): void {
    otherNow()
}
</script>

<template>
    <button @click="getCurrentTime">{{ now }}</button>
    <button @click="isCompleteMessage">{{ otherNow() }}</button>
</template>
