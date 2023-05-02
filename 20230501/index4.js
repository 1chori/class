// npm init
// package.json 파일을 만들어준다.

// 모든 설정에 기본값으로 설정하는 명령어
// npm init -y

// {
//     "name": "20230501",
//     "version": "1.0.0",
//      패키지의 설명 : ~ 작업을 진행한 프로젝트
//     "description": "",
//      모듈화 시킬때 메인 파일
//     "main": "index.js",
//      우리가 실행시킬 때, 스크립트의 명령어
//     "scripts": {
//       "test": "echo \"Error: no test specified\" && exit 1"
//     },
//      검색 키워드 배열의 형태로 넣어주면 된다.
//     "keywords": [],
//      패키지의 저자
//     "author": "",
//      패키지의 라이선스
//     "license": "ISC"
// }

// main : 패키지를 require 함수로 불러올 때 작성한 파일을 불러올 수 있다.
// script : 자주 실행할것 같은 명령어를 작성해두고 npm 명령어로 실해할 수 있다. 예) npm run test
// script : {start : 'node index4.js'} === npm start === node index4.js