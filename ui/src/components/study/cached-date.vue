<script setup lang="ts">
import { reactive } from 'vue';

const now = reactive({
    dt: Date.now()
});

function otherNow() {
    return Date.now();
}
</script>

<template>
    <p>{{ now }}</p>
    <p>{{ otherNow() }}</p>
</template>
