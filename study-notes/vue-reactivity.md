# Reactivity in Vue (Composition)

From [Reactivity Fundamentals - Vue Guide](https://vuejs.org/guide/essentials/reactivity-fundamentals.html).

## Declaring Reactive State

```vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0);
</script>
```

`ref` returns a wrapped object with property `.value`

```vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0);

console.log(count) // { value: 0 }
consol.log(count.value) // 0

count.value++
console.log(count.value) // 1
</script>
```

### With TypeScript

```vue
<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

const year: Ref<number | string> = ref('2020');
year.value = 2021; // this is okay

const otherYear = ref<number | string>('2022')
otherYear.value = 2023 // this is also ok

// no argument means the wrapped type can also include undefined
const n = ref<number>() // type is Ref<number | undefined>
</script>
```

## Example

```vue
<script lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue';

export default {
    setup() {
        const count: Ref<number> = ref(0);

        return {
            count
        }
    }
}
</script>

<template>
    <button @click="count++">Add 1</button>
    <div>{{ count }}</div>
</template>
```

The following would also be good for more complex functions/event handlers

```vue
<script lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

export default {
    setup() {
        const count: Ref<number> = ref(0);

        function increment() {
            count.value++
        }

        return {
            count,
            increment
        }
    }
}
</script>

<template>
    <button @click="increment">Increment</button>
    <div> {{ count }}</div>
</template>
```

## How Does Vue Reactivity Work?

When a ref is mutated, it will trigger a re-render of the DOM. Vue does this by intercepting the getters/setters of refs.

### Deep Reactivity

Nested properties also have their mutations tracked

```vue
<script setup lang="ts">
import { ref } from 'vue';

const obj = ref({
    nested: { count: 0 },
    arr: ['foo', 'bar']
})

function mutateDeeply() {
    obj.value.nested.count++;
    obj.value.arr.push('baz')
}
</script>
```

Non-primitive values are turned into reactive proxies via `reactive()`

## reactive()

```vue
<script setup lang="ts">
import { reactive } from 'vue';

const state = reactive({ count: 0 })
</script>

<template>
<button @click="state.count++">{{ state.count }}</button>
</template>
```

### Limitations

- Only works for object types (not primitives)
- Reassigning loses reactive properties

```vue
<script>
let state = reactive({ count: 0 })
state = reactive({ count: 1 }) // { count: 0 } is no longer being tracked
</script>
```

- Destructuring causes loss of tracking

```vue
<script>
const state = reactive({ count: 0 })
let { count } = state
count++ // is not registered
</script>
```

`ref()` is preferred over `reactive()`
