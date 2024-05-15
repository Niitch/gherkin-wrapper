[Gherkin wrapper - Documentation](./README.md) / Hooks

# Hooks and effects

Most test runners expose hook methods like `beforeEach` or `afterAll` to allow running utility code around tests.
Likewise, this wrapper introduce its own hooks.

## Hooks

The wrapper provides two types of hooks :
- _life-cycle based hooks_ that are triggered at fixed steps of the tests execution 
- _tag based hooks_ that are triggered based on the tags present on your gherkin objects

### Life-cycle hooks :

The wrapper provides two methods for defining [__step hooks__](./api/modules/common.md#stephook) : [`beforeStep`](./api/classes/index.Hooks.md#beforestep) and [`afterStep`](./api/classes/index.Hooks.md#afterstep). The hooks registerd with these methods are triggered before/after each [__step functions__](./Step_functions.md).

```typescript
wrapper.beforeStep(({ target }) => {
    // something to do for each step
})
```

Each hook receives a `target` parameter representing the tagged gherkin object.

### Tag hooks :

The gherkin syntax offers the possibility to __tag__ your features and scenarios.

The wrapper provides two methods for defining [__tag hooks__](./api/modules/common.md#taghook) : [`beforeTag`](./api/classes/index.Hooks.md#beforetag) and [`afterTag`](./api/classes/index.Hooks.md#aftertag). The hooks registered with these methods are run before and after features and scenarios based on their tags.

```typescript
wrapper.beforeTag('@tag_name', ({ target }) => {
    // something to do when a gherkin object is taged "tag_name"
})
```

Each hook receives a `target` parameter representing the tagged gherkin object.

## Hook effects

Uppon execution, the wrapper hooks can trigger different side effects based on their return value. We call these [__hook effects__](./api/interfaces/common.HookEffect.md).

Any wrapper hook can trigger side effects. To do so, it has to return an object with the desired properties :
- `concurrent` _boolean_ : _Jest only. Feature and Rule only._ Run scenarios concurrently.

### Stacking hooks

When defining mutiple hooks that should trigger at the same time, if several of them try to return a property for the same hook effect, only the property returned by the latest registerd hook will be applied.

__*Exemple*__: Given the hook definition bellow, the scenarios tagged `@maybe_concurrent` will not be affected by the *concurrent* hook effect because the last hook registered disable this effect.

```typescript
wrapper.beforeTag('@maybe_concurrent', ({ target }) => {
    // do something
    return { concurrent: true }
})

wrapper.beforeTag('@maybe_concurrent', ({ target }) => {
    // do something else
    return { concurrent: false }
})
```
