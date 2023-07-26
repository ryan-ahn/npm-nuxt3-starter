# Boiler Plate for Project Setting

> Nuxt3 프로젝트 시작 세팅용 보일러 플레이트

## Setting Stack
- Bundler : Vite
- SSR : Nuxt3
- Core : Vue3
- Store : Pinia
- Formatter : ESLint + StyleLint + Prettier

## Project Start
1. clone & dependencies 설치
```
$ git clone ryan-ahn/boilerplate-frontend-nuxt3
$ cd boilerplate-frontend-nuxt3
$ npm install
```
2. vscode 세팅
```markdown
setting.json 파일을 vscode 세팅에 입력
관련 익스텐션 전부 설치(문서 확인)
```
3. dev server 시작하기
```
$ npm run dev
```

## Code Pattern
- 아토믹 디자인 패턴을 따름
- Vue3 composition API Setup 문법을 사용함
- ESLint + StyleLint + Prettier 포메터 조합

## Code Structure
&nbsp;⎣&nbsp;**public** - 컴파일에 사용되지 않는 정적 파일(이미지, 폰트 등) <br/>
&nbsp;⎣&nbsp;**common** - 정적 데이터(텍스트)를 넣어두는 곳 <br/>
&nbsp;⎣&nbsp;**components** - 최소 단위 컴포넌트(비즈니스 로직, 상태값 사용 불가) <br/>
&nbsp;⎣&nbsp;**containers** - 컨트롤 로직이 존재하는 뷰 컴포넌트, 최소 단위 컴포넌트의 조합으로 만들어진다. <br/>
&nbsp;⎣&nbsp;**interface** - 객체 타입 지정을 모아두는 공간 <br/>
&nbsp;⎣&nbsp;**layouts** - 최초 고정 영역(device단위 또는 gnb,lnb로 나눈다) <br/>
&nbsp;⎣&nbsp;**server** - 넉스트의 서버 사이드를 컨트롤 하는 폴더이다. <br/>
&nbsp;⎣&nbsp;**store** - pinia store<br/>
&nbsp;⎣&nbsp;**styles** - css셋 모음<br/>
&nbsp;⎣&nbsp;**utils** - helper, handler 모음<br/>
&nbsp;⎣&nbsp;**pages** - 페이지 단위의 컴포넌트<br/>

## Use Vue3 Setup

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

## Use CSS Mixin

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
