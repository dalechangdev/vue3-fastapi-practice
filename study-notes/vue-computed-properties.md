# Computed Properties

The following is poor practice

```vue
<script setup lang="ts">
import { reactive } from 'vue'

const author = reactive({
    name: 'John Doe',
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - Prologue'
    ]
})
</script>

<template>
<p>Has published books</p>
<span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span> // this is cluttered
</template>
```

Let's refactor it with `computed`

```vue
<script setup lang="ts">
import { reactive, computed } from 'vue'

const author = reactive({
    name: 'John Doe',
    books: [
        'Book 1',
        'Book 2',
        'Book 3'
    ]
})

// computed ref
const publishedBooksMessage = computed(() => {
    return author.books.length > 0 ? 'Yes' : 'No'
})
</script>

<template>
<p>Has published books</p>
<span>{{ publishedBooksMessage }}</span>
</template>
```

## Caching

We can also just define a function for the above

```vue
<script setup lang="ts">
import { reactive } from 'vue';

const author = reactive({
    name: 'John Doe',
    books: [
        'Book 1',
        'Book 2',
        'Book 3'
    ]
})

function calculateBooksMessage() {
    return author.books.length > 0 ? 'Yes' : 'No'
}
</script>

<template>
<p>{{ calculateBooksMessage() }}</p>
</template>
```

However, computed properties are cached based on their reactive dependencies.

A method invocation will **always** run the function whenever a re-render happens.

```vue
<script setup lang="ts">
function cachedNow {
    return new Date()
}

const now = computed(() => Date.now())
</script>
```

## Writable Computed

Can define getters and setters

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
    get() {
        return firstName.value + ' ' + lastName.value
    }

    set(newValue) {
        [firstName.value, lastName.value] = newValue.split(' ')
    }
})
</script>

<template>

</template>
```
