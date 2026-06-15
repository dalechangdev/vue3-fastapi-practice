# TypeScript Interfaces

## Declaration Merging

```typescript
interface Thing { property1: number }
interface Thing { property2: number }
// Thing now has both properties property1 and property2
```

## Extending

```typescript
interface Admin extends User {
    adminLevel: number
}
```

## Vs Type

| Feature | Interface | Type |
| --- | --- | --- |
| Declaration merging | Yes | No |
| Extend/implement | Yes | Yes (with &) |
| Primitives/unions | No | Yes |
| Computed properties | No | Yes |

## Better Practices

- Use `interface` for object shapes and API contracts
- Use `type` for unions, intersections, or aliasing primitives
