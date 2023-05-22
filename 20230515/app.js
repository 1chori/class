// 저번 수업에선 입장토큰(엑세스 토큰)만 만들어서 로그인 검증했다

// 1. 이용자가 로그인 시도
// 2. 서버에서 이용자를 확인하고 입장권을 발급. JWT 인증정보를 payload에 할당하고 생성
// 3. 생성한 토큰을 클라이언트에 반환해준다
// 4. 클라이언트가 서버에 요청할 때 입장권도 같이 보내서 요청 시도
// 5. 서버는 요청을 받아서 입장권이 유효한지 확인하고 유효하면 요청에 대한 응답을 해준다
// 6. 입장권이 정상적인지 확인하고 변조가 되었거나 썩었으면 재로그인 시킨다
// Access token만 사용하면 인정 보안이 취약할 수 있어서 다른 사람이 Access token을 탈취하면 토큰의 유효기간이 끝날때까지 막을 수 없다.
// 그래서 유효기간 짧게 준다. 하지만 유효기간을 짧게 주면 로그인을 자주 해야하는 번거로움이 생기니까 Refresh token의 유효기간을 길게 준다.
// JWT를 2개 사용한다고 생각하면 된다

// Access token과 Refresh token을 같이 사용하는 인증 방식
// 1. 클라이언트가 로그인
// 2. 서버에서 사용자를 확인하고 입장권 권한 인증 정보를 payload에 할당하고 생성
// refresh token을 만들어서 데이터베이스에 저장해두고 2개의 토큰 전부를 클라이언트에 전달해준다.
// 3. 클라이언트도 요청할 때 Access token을 전달해서 요청
// 4. 서버는 전달받은 토큰을 확인하고 Access token을 디코드해서 사용자 정보를 확인(토큰이 정상적인지 확인)
// 5. 날짜가 지났거나 변조된 토큰이면 새로 로그인 시킬수 있게 한다
// 6. 만약 날짜가 지났으면 refresh token을 재발급 해준다

// 사용할 모듈 : dotenv, express, cookie-parser, jsonwebtoken

const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const cookie = require('cookie-parser');
const { error } = require('console');

const app = express();

app.set('views', path.join(__dirname, 'page'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(cookie());

// 더미로 회원가입 한 사람의 정보 객체
const user = {
    id: 'jwc',
    pw: '9292'
}

app.get('/', (req, res) => {
    res.render('login');
})

app.post('/login', (req, res) => {
    // 요청 객체의 body에 user_id와 use_pw를 구조분해 할당으로 가져온다
    const { user_id, user_pw } = req.body;
    if (user_id === user.id && user_pw === user.pw) {
        // access token 발급
        const accessToken = jwt.sign({
            id: user.id
        }, process.env.ACCESS_TOKEN_KEY, {
            expiresIn: '20s',
        });

        const refreshToken = jwt.sign({
            id: user.id
        }, process.env.REFRESH_TOKEN_KEY, {
            expiresIn: '1d'
        })
        // 쿠키 생성
        res.cookie('refresh', refreshToken, { maxAge: 24 * 60 * 60 * 1000 });
        res.render('join', { accessToken });
    }
})

app.post('/refresh', (req, res) => {
    // 옵션 체이닝 : 뒤에 오는 키 값이 있는지 먼저 확인하고 값을 호출해서 반환
    // 그래서 크래쉬 방지
    if (req.cookies?.refresh) {
        const refreshToken = req.cookies.refresh;
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY, (err, decode) => {
            // err이면 다시 로그인
            if (err) {
                res.send('로그인 다시 해라');
                console.log(err);
            } else {
                const accessToken = jwt.sign({
                    id: user.id
                }, process.env.ACCESS_TOKEN_KEY, {
                    expiresIn: '20s'
                })
                res.render('join', { accessToken });
            }
        })
    } else {
        res.send('다시 로그인 해라');
        console.log(error);
    }
})

app.listen(8080, () => {
    console.log('15일 서버 열렸다');
})