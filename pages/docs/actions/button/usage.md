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

{% container %}

{% button type="primary"%} Button {%/button%}

{%/container%}

```js
<Button colorScheme="blue">Button</Button>
```

{% hr /%}

## Sizes

Use the size prop to change the size of the button. You can set the value to sm, md, or lg.

{% container %}

{% button type="primary" size="small" %}Button{% /button %}

{% button type="primary" size="default" %}Button{% /button %}

{% button type="primary" size="large" %}Button{% /button %}

{% /container %}

```js
<Stack spacing={4}  direction=‘row’  align=‘center’>
<Button colorScheme='teal' size='xs'>
    Button
  </Button>
  <Button colorScheme='teal' size='sm'>
    Button
  </Button>
  <Button colorScheme='teal' size='md'>
    Button
  </Button>
  <Button colorScheme='teal' size='lg'>
    Button
  </Button>
</Stack>
```

{%hr/%}

## Variants

Use the variant prop to change the visual style of the Button. You can set the value to solid, ghost, outline, or link.

{% container %}

{% button type="primary" %}Button{% /button %}

{% button type="primary" type="outline" %}Button{% /button %}

{% button type="primary" type="clear" %}Button{% /button %}

{% /container %}

```js
<Stack direction=‘row’  spacing={4}  align=‘center’>
<Button colorScheme='teal' variant='solid'>
    Button
  </Button>
  <Button colorScheme='teal' variant='outline'>
    Button
  </Button>
  <Button colorScheme='teal' variant='link'>
    Button
  </Button>
</Stack>
```
