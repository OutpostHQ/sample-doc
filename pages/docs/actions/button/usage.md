---
type: doc-component
id: 1
scope: usage
---

## Import

```js
import { Button, ButtonGroup } from '@jenga-ui/button
```

- Button: The button component with support for custom icons, spinners, etc.
- ButtonGroup: Used to group buttons whose actions are related, with an option to flush them together.

{% hr /%}

## Usage

```jsx
<Button type="primary">Button</Button>
```

{% hr /%}

## Sizes

Use the size prop to change the size of the button. You can set the value to small, default, or large.

```jsx
<Space>
  <Button size="small">Button</Button>
  <Button size="default">Button</Button>
  <Button size="large">Button</Button>
</Space>
```

{%hr/%}

## Type

Use the type prop to change the visual style of the Button. You can set the value to primary, clear, link, etc. (See Props)

```jsx
<Space>
  <Button type="clear">Button</Button>
  <Button type="primary">Button</Button>
  <Button type="default">Button</Button>
</Space>
```
