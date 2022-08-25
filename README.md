<img width="280" alt="스크린샷 2022-08-25 오후 5 44 58" src="https://user-images.githubusercontent.com/109017882/186637312-32a2ba82-9923-4b80-b148-2bf6f31850c3.png">

## :star:  Samstagram

인스타그램을 모델로 클론코딩한 Samstagram 입니다.


**프로젝트 기간**
2022.08.18 - 2022.08.25


## 🧑🏻‍💻 팀원 소개

- BE : 민영기,신윤섭,양승인
- FE : 서윤원,배성열,김은경

## ⚒️기술스택

* **백엔드**
<img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=flat&logo=SpringBoot&logoColor=white"/> <img src="https://img.shields.io/badge/Spring Security-6DB33F?style=flat&logo=Spring Security&logoColor=white"/> <img src="https://img.shields.io/badge/Java-007396?style=flat&logo=java&logoColor=white"/>  <img src="https://img.shields.io/badge/JWT-000000?style=flat&logo=JWT&logoColor=white"/> <img src="https://img.shields.io/badge/Gradle-02303A?style=flat&logo=Gradle&logoColor=white"/> <img src="https://img.shields.io/badge/amazon s3-569A31?flat&logo=Gradle&logo=amazons3&logoColor=green">

* **프론트엔드**
<img src="https://img.shields.io/badge/html5-E34F26?style=flat&logo=Gradle&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/css-1572B6?style=flat&logo=css3&logo=Gradle&logoColor=white"/> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=Gradle&logo=javascript&logoColor=black"/> <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logo=Gradle&logoColor=black"/>  <img src="https://img.shields.io/badge/react query-61DAFB?style=flat&logo=Gradle&logo=reactquery&logoColor=FF4154"/> <img src="https://img.shields.io/badge/amazon s3-569A31?style=flat&logo=amazons3&logoColor=green">




## 🔑 기능 설명

### 1) 회원가입/로그인 
 - JWT 인증 방식으로 로그인 구현
 - ID, 닉네임 각 필드별 유효성 체크
### 2) 게시글 CRUD
- 게시글 등록 및 상세조회,수정 및 삭제
- 이미지 업로드 삭제 및 수정
### 3) 댓글 CRUD
- 댓글 등록, 조회 및 삭제
### 4) 추가 기능 
- 게시물과 댓글에 좋아요 등록 및 취소
- 등록한 게시물과 좋아요 피드를 내 프로필페이지에서 확인
- 로그인과 상세페이지 반응형 이미지 
- 로그아웃 

## ❓ 트러블 슈팅
### FE
### 1) 모달창을 닫았을 때 메인페이지 맨 아래쪽으로 가는 현상 발생
모달창을 열었을 때 현재 스크롤Y값을 저장한뒤 닫았을 때 window.scrollTo(x,y)를 이용해서 메인페이지 scrollY값으로 나오게끔 출력함
### 2) 모달창이 띄워졌지만 하단부에 컴포넌트와 겹쳐져서 화면이 출력되는 현상
z-index를 활용하여 브라우저 레이어 순위를 정해줘서 하위 z-index 돔이 가려지게 설정
### BE
### 1) 카카오톡 로그인 
카카오톡 로그인 api 이용 방법과 받아오는 데이터가 어떤게 있는지 미리 파악하지 못하고 테이블을 설계하는 바람에 테이블 구조를 바꿔야 하는 상황.
카카오톡 회원 정보와 프로젝트 회원정보의 구성이 달라 커스텀하는데 필요한 시간이 충분하지 않다고 판단되어 기능을 제외시킴. (시간이 조금 더 주어졌다면 업그레이드 해보고 싶은 부분) 


