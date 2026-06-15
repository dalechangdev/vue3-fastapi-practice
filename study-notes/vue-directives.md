# Vue Directives

From [Directives - Vue Documentation](https://vuejs.org/guide/essentials/template-syntax.html#directives), these are special HTML attributes prefixed with `v-`.

For example, if we wanted to provide a special CSS id to an HTML element:

```vue
<div v-bind:id="dynamicId"></div>
```

To show an HTML conditionally

```vue
<p v-if="isVisible">Visible paragraph</p>
```

## Arguments

Reactive `href`

```vue
<a v-bind:href="url">{{linkText}}</a>

<!-- shorthand -->
<a :href="url">{{linkText}}</a>
```

DOM events

```vue
<div v-on:click="handleClick"></div>

<!-- shorthand -->
<div @click="handleClick"></div>
```
