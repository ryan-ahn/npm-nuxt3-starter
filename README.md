# Nuxt3 + Vue3 보일러플레이트

## 설치 후 시작하기

```
npm install
```

## 프로젝트 디렉토리 구조

### 아토믹 디자인 패턴
src <br/>
⎣&nbsp;**assets** - image, icon, font 등 <br/>
⎣&nbsp;**common** - 정적 데이터를 넣어두는 곳 <br/>
⎣&nbsp;**components** - 최소 단위 컴포넌트(비즈니스 로직, 상태값 사용 불가) <br/>
⎣&nbsp;**containers** - 컨트롤 로직이 존재하는 뷰 컴포넌트, 최소 단위 컴포넌트의 조합으로 만들어진다. <br/>
⎣&nbsp;**interface** - 객체 타입 지정을 모아두는 공간 <br/>
⎣&nbsp;**layouts** - 최초 고정 영역(device단위 또는 gnb,lnb로 나눈다) <br/>
⎣&nbsp;**server** - 넉스트의 서버 사이드를 컨트롤 하는 폴더이다. <br/>
⎣&nbsp;**store** - pinia store<br/>
⎣&nbsp;**styles** - css셋 모음<br/>
⎣&nbsp;**utils** - helper, handler 모음<br/>
⎣&nbsp;**pages** - 페이지 단위의 컴포넌트<br/>

