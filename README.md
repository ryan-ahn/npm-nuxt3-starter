# Ryan's Nuxt3 Awesome Starter


![Author](https://img.shields.io/badge/Author-ryan-orange.svg)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Last Commit](https://img.shields.io/github/last-commit/ryan-ahn/npm-nuxt3-starter)


## Features
- [x] ⚙️&nbsp;&nbsp;Small & Fast Bundler (Vite)
- [x] 🗝️&nbsp;&nbsp;Typed Programming (Typescript)
- [x] 🧩&nbsp;&nbsp;SSR & Page Transition (Nuxt3)
- [x] 📚&nbsp;&nbsp;Composition API & Setup (Vue3)
- [x] 🕋&nbsp;&nbsp;Simple Store (Pinia)
- [x] 📙&nbsp;&nbsp;Use Strict Codebase (ESLint)
- [x] 📘&nbsp;&nbsp;Use Strict Style (StyleLint)
- [x] 🧵&nbsp;&nbsp;Built-in Component & Layout
- [x] 🚰&nbsp;&nbsp;Handle Page to Middleware
- [x] ✨&nbsp;&nbsp;Setting Reset Style
- [x] ⚡️&nbsp;&nbsp;Setting Mixin Style
- [x] 📍&nbsp;&nbsp;Absolute Path
- [x] 📱&nbsp;&nbsp;Check Device
- [x] 📫&nbsp;&nbsp;Page SEO
- [ ] 🪄&nbsp;&nbsp;Dark Mode


## Frameworks
- **Bundler** : Vite
- **SSR** : Nuxt3
- **Core** : Vue3
- **Store** : Pinia


## Code Pattern
- **assets** - static resource <br/>
- **components** - atomic stateless components <br/>
- **containers** - stateful components <br/>
- **pages** - page components(SEO) <br/>
- **public** - default public <br/>
- **plugins** - plugins <br/>
- **interface** - interfaces <br/>
- **layouts** - layouts <br/>
- **server** - ssr <br/>
- **store** - store <br/>
- **styles** - style set <br/>
- **utils** - hooks, helper, handler <br/>


## Getting Started
### 1) Installation
```shell
npx nuxt3-starter my-project
cd my-project
```
### 2) Run Project
```shell
npm run dev
```
### 3) Run Deploy
```shell
npm run build
```


## Using with Vue3 Script Setup
```vue
<template>
  <h1>{{ title }}</h1>
</template>

<script setup lang="ts">
// use function
const function = () => {console.log('Hello World!')}
// use props
const props = defineProps({title})
</script>
```


## Using with Store
```vue
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useDataStore from '@store/useDataStore';
// use store
const store = useDataStore();
// use store state
const { data } = storeToRefs(store);
// use store function
store.getData()
</script>
```


## Using with Mixin

```scss
.app {
  // flex set(justify-content, align-items, flex-direction)
  @include flexSet('center', 'center', 'row')

  // box set(width, height, border-radius)
  @include boxSet(00px, 00px, 00px)

  // color set(color, background-color)
  @include colorSet($white, $black)

  // background set(url, object-fit)
  @include backgroundSet('url', 00px)

  // font set(font-size, font-weight, line-height)
  @include fontSet(00px, 000, 00px);

  // ellipsis set(line, line-height)
  @include ellipsisSet(0, 00px)

  // shadow set(length, length, blur, color, opacity)
  @include shadowSet(0, 0, 0, $white, 0.1)
}
```
