# TypeScript Generics

Lets developers write reusable code across multiple types while preserving type-safety

```typescript
interface Repository<T> {
    findById(id: number): T;
    save (entity T): void;
    getall(): T[];
}
```

## Example

```typescript
class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items.at(-1);
    }
}
```

## Setting a Constraint

Can use the `extends` keyword to define a constraint

```typescript
const getLength<T extends { length: number }> = (value: T): number => {
    return value.length;
}
```

## Multiple Types

```typescript
const zip<A, B> = (a: A[], b: B[]): [A,B][] => {
    return a.map((item, i) => [item, B[i]]);
}
```

## Conditional Types

```typescript
type IsArray<T> = T extends any[] ? true : false;

type A = IsArray([]); // true
type B = IsArray(42); // false
```

## Unwrapping a Promise

```typescript
type Awaited<T> = T extends Promise<infer U> ? U : T;

type X = Awaited<Promise<string>>; // string
type Y = Awaited<number>; // number
```

## Excess Property Checking

Object literals are strictly checked against interfaces. Assigned variables are NOT.

```typescript
const u: User = { id: 1, name: 'foo', extra: 'bar' }; // TypeScript makes sure that the right side matches the interface
const obj = { id: 1, name: 'foo', extra: 'bar' }; // no checking here because it is untyped
```

## instanceof

`instanceof` cannot be used at runtime because `interfaces` are erased at compilation?!
