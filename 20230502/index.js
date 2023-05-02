// http 요청과 응답을 좀 더 편하게 사용할 수 있도록 도와주는 모듈
// express : nodejs 프레임워크. nodejs에서 제일 인기가 많은 모듈
// 기본적인 기능만 포함하고 있어서 자유도 높고 라우팅, 미들웨 등 개발자가 원하는 방식으로 구성할 수 있다.
// 또한, 본인만의 보일러 플레이팅도 가능하다.
// 보일러 플레이팅은 반복적인 작업을 피할 수 있도록 미리 개발자가 작성을 하여 개발의 생산성을 향상시킬 수 있다.

// express 설치 전 npm init -y

const express = require('express');

// 서버 객체가 생성
const app = express();

app.get('/', (req, res) => {
    // send 메서드로 응답하고 종료
    res.send('hello');
})

app.listen(8080, () => {
    console.log('서버 열림');
})


// package.json에 스크립트 명령어 작성

// "test": "echo \"Error: no test specified\" && exit 1",
// "start": "node index.js"
// "dev": "node index.js"

// start 명령어는 npm start
// 별도의 네이밍으로 우리가 작성한 스크립트 명령어 실행
// 예) dev라 하면 npm run dev 