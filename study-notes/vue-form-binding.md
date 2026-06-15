# Binding to Forms

```vue
<template>
    <input :value="text" @input="event => text = event.target.value">
</template>
```

The above happens a lot, so it can be simplified using `v-model`

```vue
<template>
    <input v-model="text">
</template>
```

`v-model` can be used for the following HTML components

- `<input>`
- `<textarea>`
- `<input type="checkbox">`
- `<input type="radio">`
- `<select>`
