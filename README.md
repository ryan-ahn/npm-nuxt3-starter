# Nuxt3 + Vue3 보일러플레이트


### 설계 방식 및 특징
- 아토믹 디자인 패턴을 따름
- Nuxt3는 기본적으로 Vite를 번들러로 사용함
- Vue3 composition API의 Setup 문법을 사용함
- 포메터는 ESLint + StyleLint + Prettier 조합

<br>

### 설치 후 시작하기

- 설치하기
```
 $ npm install
```
- 로컬 환경 테스트
```
 $ npm run dev
```

<br>

### VSCode 세팅하기
- setting.json 파일을 VSCode 세팅으로 입력
- 관련 익스텐션 전부 설치

<br>

### 프로젝트 디렉토리 구조

src <br/>
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
