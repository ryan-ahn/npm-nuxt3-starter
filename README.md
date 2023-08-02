# Nuxt 3 Awesome Starter

![Author](https://img.shields.io/badge/Author-ryan-orange.svg)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Last Commit](https://img.shields.io/github/last-commit/ryan-ahn/boilerplate-nuxt3-vite)

## Features
- [x] ⚙️&nbsp;&nbsp;Small & Fast Bundler (Vite)
- [x] 📦&nbsp;&nbsp;Typed Programming (Typescript)
- [x] 🗂️&nbsp;&nbsp;SSR & Page Transition (Nuxt3)
- [x] 📚&nbsp;&nbsp;Composition API & Setup (Vue3)
- [x] 🛹&nbsp;&nbsp;Simple Store (Pinia)
- [x] 🧵&nbsp;&nbsp;Built-in Component & Layout 
- [x] 📘&nbsp;&nbsp;Configure StyleLint
- [x] 📙&nbsp;&nbsp;Configure ESLint
- [x] ✨&nbsp;&nbsp;Setting Reset Style
- [x] ⚡️&nbsp;&nbsp;Setting Mixin Style 
- [x] 📍&nbsp;&nbsp;Absolute path
- [x] 📱&nbsp;&nbsp;Check Device
- [x] 📫&nbsp;&nbsp;Page SEO
- [ ] 🪄&nbsp;&nbsp;Theme Mode 

## Framworks
- **Bundler** : Vite
- **SSR** : Nuxt3
- **Core** : Vue3
- **Store** : Pinia

## Code Pattern
- **public** - 컴파일에 사용되지 않는 정적 파일(이미지, 폰트 등) <br/>
- **common** - 정적 데이터(텍스트) <br/>
- **components** - 최소 단위 컴포넌트(atom, molecule, organism) <br/>
- **containers** - 컨트롤 로직 컴포넌트(template) <br/>
- **pages** - 페이지 단위의 컴포넌트(page) <br/>
- **interface** - 객체 타입 지정 <br/>
- **layouts** - 고정 영역(device단위 또는 gnb,lnb) <br/>
- **server** - 넉스트의 서버 사이드 컨트롤 <br/>
- **store** - 전역 관리 스토어<br/>
- **styles** - css 코드 및 mixin 셋<br/>
- **utils** - hooks, helper, handler <br/>


## Getting Started
### 1) Installation
```
$ git clone ryan-ahn/boilerplate-frontend-nuxt3
$ cd boilerplate-frontend-nuxt3
$ npm install
```
### 2) Configuration VSCode
```markdown
setting.json 파일을 vscode 세팅에 입력
관련 익스텐션 전부 설치(문서 확인)
```
### 3) Run development server
```
$ npm run dev
```

## Using with Vue3 Setup

```vue
<script setup lang="ts">
// 모듈 가져오기
import Vue from 'vue'

// 함수형 스크립트 코드
const sampleFunction = () => {
  console.log('Hello World!')
}

// Props 내려받기
const props = defineProps({
  props
})
</script>
```

## Using with Mixin

```scss
.app {
  // 플렉스 세트(기준 정렬, 대칭 정렬, 방향)
  @include flexSet('center', 'center', 'row')

  // 박스 세트(가로, 세로, 라운딩)
  @include boxSet(00px, 00px, 00px)

  // 컬러 세트(폰트 컬러, 배경 컬러)
  @include colorSet(#000000, #000000)

  // 배경 세트(이미지, 사이즈)
  @include backgroundSet('url', 00px)

  // 폰트 세트(폰트 크기, 두께, 줄간격)
  @include fontSet(00px, 000, 00px);

  // 일립시스 세트(줄수, 줄간격)
  @include ellipsisSet(0, 00px)
}
```
