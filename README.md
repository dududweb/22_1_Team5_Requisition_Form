# Team5 응급코딩과 🚨

## 프로젝트 소개

### 파트너스 고객 요청서 확인 페이지

<br/>

### Card

- 셀렉트 옵션 필터 정렬 기능
- '상담 중인 요청만 보기' Toggle 기능
- 반응형 레이아웃

![카드반응형](https://user-images.githubusercontent.com/90748606/153068591-912252fc-8c79-41e0-b737-cd938cc8166c.gif)

### Nav

- 반응형 레이아웃
- 모달 오픈시 스크롤락 기능
- 모달 오픈 상태로 브레이크포인트 초과 시 모달종료

![네브기능](https://user-images.githubusercontent.com/90748606/153068717-181aaf3d-5e84-43e1-b949-50c3f6d5be4e.gif)

<br/>

## 배포 링크

<a href="https://dreamy-euclid-5b6cf4.netlify.app">배포 링크</a>

<br/><br/>

## 개발 인원 및 기간

### 개발기간: 2022/2/7~2022/2/9

### 개발 인원: 프론트 4명

김재호, 김태영, 원소연, 황주영
<br/><br/>

## 적용 기술 및 협업 툴

### 적용 기술

- Front-End: TypeScript, React.js, React Router, Styled-Component, styled-media-query
- Common: netlify

### 소통 툴

- Git, Github, Slack, Discord, <a href="https://olive-trapezoid-dec.notion.site/3-17108ba499b04d8bb48d2507bbf00cdd">Notion</a>

<br/><br/>

## 역할

- [`김재호`]

  - Figma를 참고해 견적 요청 카드 컴포넌트 레이아웃 적용
  - styled-media-query를 이용한 반응형 견적 요청 카드 박스컴포넌트 구현

- [`김태영`]

  - title & filter 레이아웃 작성
  - 필터 select 옵션리스트 on & off 함수 및 state 작성
  - select 옵션 내부에 checkbox 추가
  - 가공방식 select 1개만 선택되도록 함수 및 state 작성
  - 가공방식 리스트에 맞는 필터링 함수 작성
  - 재료 select 다중 선택 기능 및 다중 선택 시 select 재료 갯수 증가
  - 필터링 리셋 함수 작성
  - '상담 중인 요청만 보기' Toggle 함수 작성

- [`원소연`]

  - json-server 활용 RESTful API 구현
  - useAxios 커스텀훅 로직 구현
  - 받은 data CardList(요청서) Component 구현
  - 빈 화면 조건부 렌더링

- [`황주영`]
  - nav바 레이아웃 및 반응형 구현
  - 카드레이아웃 반응형 구현
    스타일컴포넌트에서 헤더 사이드 모달메뉴를 구현할 때 슬라이드 애니메이션 작동법에 대하여 익혔고, 모달이 열린상태에서 스크롤을 막아주는 기능과 , 메뉴 밖 클릭시 모달창 종료해주는 기능을 구현하면서 Dom접근에 대해 더욱 이해하게 되었습니다.

<br/><br/>

## 설치 및 시작하는 법

- 파일 클론 받기
- git clone https://github.com/dnjstd/22_1_Team5_Requisition_Form.git
- npm install
- npm start
  </br>
