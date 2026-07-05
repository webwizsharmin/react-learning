# Components

Components is a reusable UI element. Every components is isolated from another elements. But a component can be a button or an etire page.

---

## why do we use it?

we use components in our app several reason. Such as,

- Reusabilty: write code once and reuse it multiple times across differnt pages.

- Isolation and Encapsulation: Each component holds its own layout, style, logic. if we change any part it will not break another part of our app.

- Optimized performance
- State and Data Mangagement
- Maintainablity and Readability

---

## Syntax

- just like JavaScript function but the name of function will start capital letter. Such as, "App" instead of "app".

- always return jsx markup

## Example

```markdown
function App() {
return (
<section>
<h1>Gallary</h1>
<p>lorem ipsum is not being torem </p>
</section>
)
}
```

---

## Common mistakes

- Prop Drilling
- Overusing State(Duplicating Data)
- Over Engineering and Premature Abstraction
- Missing or incorrect props
- Direct State Mutation

---

## Best practices

- A component should ideally do only one thing, making it highly, reusable, testable, and easy to maintain

---

## When not to use it

- if JSX is small
- used only once
- if splitting it introduces prmature abstraction
- unnecessary prop drilling without adding any structural or functional value.

---

## What I learn

- syntax
- best practice
- when not to use

---

## Things to review

- how to use it in real world applications.
