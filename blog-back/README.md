# MERN

## 스토리 라인(기능 명세)

- 메인 페이지 접속
  - 전체 글 중 최근 작성한 5개 글이 보임
  - 왼쪽에 전체 태그+글 수가 보임
  - 글 더보기 - 다음 5개의 글이 목록으로 보임
- 로그인
  1. 메인페이지에서 로그인 버튼 눌러서 이동
  2. 이메일 / 비밀번호 입력
  3. 틀릴경우에는 화면에 표시
  4. 성공할 경우는 메인페이지로 이동
- 회원가입
  1. 로그인 페이지에서 회원가입 버튼 누름
  2. 이름, 이메일, 비밀번호 입력
  3. 이메일 중복 체크, 비밀번호 유효성 검사
  4. 성공할 경우에는 로그인 페이지
- 글 읽기
  1. 메인페이지의 글 목록에서 글 클릭
  2. 목록에는 글 제목, 작성일, 댓글 수, 태그가 표시됨
  3. 제목 클릭하면 해당 글로 이동
  4. 상세 화면에는 제목, 작성일, 댓글들, 태그들, 내용(md기반)
- 태그별 목록보기
  1. 메인페이지에서 화면 왼쪽 부분, 태그를 누르면 해당 태그의 최신 글 5개 가져옴
- 글 쓰기
  1. admin이면 글 쓰기 버튼 상단 우측에 표시
  2. 글 쓰기 버튼 눌러서 글 쓰기 화면으로 이동
  3. 화면에는 제목란, 태그란, 내용란, 작성하기 버튼
  4. 내용에는 markdown 기반 작성
- 수정/삭제
  1. 해당 글에서 admin이면 수정/삭제 버튼 노출
  2. 수정 누르면 글쓰기 화면으로 이동
  3. 수정 눌러서 온 글쓰기 화면에는 이전 컨텐츠가 기록되어있음
  4. 삭제 버튼 누르면 confirm과정 거친 후 삭제
- 댓글
  1. 글 하단에 전체 댓글 수 표시
  2. 로그인 안하면 댓글 쓰기란에 로그인해야 댓글 작성할 수 있다고 안내
  3. 로그인하면 댓글 작성란 표시
  4. 댓글 작성란에는 내용란 하나만
  5. 확인 버튼 누르면 댓글 추가
  6. 댓글 삭제시 confirm 후 삭제 - 해당 주인에게만 삭제버튼 노출

## API 문서 작성하기

| 구분                 | url              | method | parameter                        | response(default로 error가 포함)                             |
| -------------------- | ---------------- | ------ | -------------------------------- | ------------------------------------------------------------ |
| 로그인               | /auth/login      | POST   | email,password                   | result(B),token,admin(B)                                     |
| email 중복체크       | /auth/email      | GET    | email                            | result(B)                                                    |
| 회원가입             | /auth/join       | POST   | name,email,password              | result(B)                                                    |
| 메인페이지의 글      | /api/post        | GET    | tag,page                         | posts[{id, title, date, author, tags, comments}]             |
| 메인페이지 왼쪽 태그 | /api/tag         | GET    |                                  | tags[{tag,posts}]                                            |
| 글 상세              | /api/post/:id    | GET    | id                               | id, title, date, author, tags[{id,name}], contents, comments[{author, date, contents}] |
| 글 쓰기              | /api/post        | POST   | title, tags, contents, token     | result(B)                                                    |
| 글 수정              | /api/post/:id    | PATCH  | id, title, tags, contents, token | result(B)                                                    |
| 글 삭제              | /api/post/:id    | DELETE | id, token                        | result(B)                                                    |
| 댓글 쓰기            | /api/comment     | POST   | post_id, token, contents         | result(B)                                                    |
| 댓글 읽기            | /api/comment     | GET    | post_id                          | comments                                                     |
| 댓글 삭제            | /api/comment/:id | DELETE | id, token,                       | result(B)                                                    |
| 태그 검색            | /api/tag/:name   | GET    | name                             | tag{id,name,posts}                                           |
| 태그 만들기          | /api/tag         | POST   | name                             | tag{id,name,posts}                                           |

## DB

- users
  - name
  - email(unique)
  - password
  - admin
- posts
  - title
  - author
  - contents
  - date
  - comments[comment_id]
  - tags[tag_id]
- tags
  - name(unique)
  - posts[post_id]
- comments
  - post_id
  - author
  - contents
  - date

## Gitflow

- `master`

  배포되는 버전만 존재하는 브랜치 입니다.

- `develop`

  `master`에서 시작되었고, 앞으로 배포할 기능을 개발하게 될 브랜치 입니다. 기능 구현이 완료되면 `master`로 merge합니다.

- `feature`

  `develop`에서 시작하는 브랜치이며, 구현해야하는 기능 별로 브랜치를 관리합니다. 구현해야할 기능이 완성되면 `develop`으로 merge합니다.

  참고 : `feature/login`

## 세부 순서

1. 최고 책임자가 `master`브랜치를 구성합니다.

2. `develop` 브랜치를 따서 필요한 파일 트리를 모두 추가하고, github에다가 업로드합니다.

3. trello의 `할 일`에 해야할 일 카드를 만듭니다.

4. 일을 시작하면 trello에서 `하고 있는 일`로 해당 카드를 옮깁니다.

5. 브랜치를 따기전에 먼저 `git pull` 하시고, `develop`에서 `feature/할일` 브랜치를 만듭니다.

6. 해당 기능 구현이 완료되면, github에 해당 브랜치를 업로드하고, pull request를 보냅니다.

   참고 : `git push origin feature/할일`

7.  책임자와 코드리뷰 등을 진행한 다음, `develop`브랜치에 merge하고, 해당 카드를 `완료`로 이동합니다.

8. `할 일`을 모두 완료할 때까지 3~7을 계속 반복합니다.

