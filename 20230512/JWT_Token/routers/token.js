// jsonwebtoken 설치

const router = require('express').Router();
const dot = require('dotenv').config();
const jwt = require('jsonwebtoken');

router.post('/login', (req, res) => {
    const name = 'soon';
    const KEY = process.env.KEY
    let token = jwt.sign({
        type: 'JWT',
        name: name,
    }, KEY, {
        expiresIn: '3m',
        issuer: name
    })
    req.session.token = token;
    res.render('page2');
})

// 이 코드는 Express.js 라우트 미들웨어로, POST /login 요청을 처리
// name 변수에 "soon"이라는 문자열을 할당하고 KEY 환경 변수를 가져옵니다.

// jwt.sign() 함수를 사용하여 JWT 토큰을 생성. 이 함수는 다음과 같은 인수를 받습니다.
// payload: JWT 토큰에 포함할 데이터입니다.
// secret: JWT 토큰을 서명하는 데 사용할 비밀 키입니다.
// options: JWT 토큰의 옵션입니다. 이 예에서는 expiresIn 옵션을 사용하여 토큰의 만료 시간을 3분으로 설정합니다.

// 마지막으로, req.session.token 속성에 토큰을 할당하고 res.render() 함수를 사용하여 page2 페이지를 렌더링합니다.
// 이 코드를 통해 로그인한 사용자는 page2 페이지에 액세스할 수 있습니다.


// 다른 곳에 로그인했으면 중복 로그인 하는 것을 방지해주자
// 데이터베이스에 엑세스토큰을 저장하고 로그인 하면 엑세스 토큰을 갱신시켜주는 작업

module.exports = router;