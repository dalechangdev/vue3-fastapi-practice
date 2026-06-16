<script setup lang="ts">
import { ref } from 'vue'

import { Form, FormField } from '@primevue/forms';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const taskDescription = ref('')
const emit = defineEmits(['submit'])

const resolver = ({ values }: { values: Record<string, unknown> }) => {
    const errors: Record<string, { message: string }[]> = {};

    if (values.description === null || values.description === undefined) {
        errors.description = [{ message: 'Description is required' }];
    } else if (values.description instanceof String && values.description.length === 0) {
        errors.description = [{ message: 'Description is required' }];
    }

    return { values, errors}
}

function onFormSubmit() {
    emit('submit', taskDescription.value)
}
</script>

<template>
    <Form :resolver="resolver" @submit="onFormSubmit" class="flex flex-col gap-4 w-full">
        <FormField v-slot="$field" name="description" initialValue="" class="flex flex-col gap-1">
            <InputText type="text" v-model="taskDescription" placeholder="Do dishes" />
            <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
        </FormField>
        <Button type="submit" severity="secondary" label="Create Task" />
    </Form>
</template>
