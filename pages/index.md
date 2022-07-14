---
title: Get started with Markdoc
description: How to get started with Markdoc
---

# Full Next.js example

{% callout %}
This is a full-featured boilerplate for a creating a documentation website using Markdoc and Next.js.
{% /callout %}

## Setup

First, clone this repo and install the dependencies required:

```bash
npm install
```

or

```bash
yarn install
```

Then, run the development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `index.md`. The page auto-updates as you edit the file.

## Deploy

The quickest way to deploy your own version of this boilerplate is by deploying it with [Vercel](https://vercel.com) or [Netlify](https://www.netlify.com/) by clicking one of the buttons below.

### Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/markdoc/next.js-starter)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/markdoc/next.js-starter)

link example with router
[/tests/buttons](/tests/buttons)

link example without router
[/tests/buttons](@/tests/buttons)

link example new page
[/tests/buttons](!/tests/buttons)

Javascript example

```js
const source = '# Markdoc'

const ast = Markdoc.parse(source)

const content = Markdoc.transform(ast /* [config](/docs/syntax#config) */)

const html = Markdoc.renderers.html(content)
```

Bash exmple

```bash
cd ~/docs
```

Python example

```python
greet = 'hello'
user = 'world'
if(user=='world'):
    greet = greet+user
print(greet)

```
