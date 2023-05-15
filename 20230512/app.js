const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
// dotenv 모듈 가져오면서 config 메서드 실행
// .env 파일을 읽어서 적용
const dot = require('dotenv').config();
// process.env 객체에 우리가 .env 파일에 설정한 이름으로 키값이 들어있다
const KEY = process.env.SECRET_KEY;

// JWT 토큰을 만들건데 비밀키를 토큰으로 만들어서 암호화 시킬 예정
// 토큰이 탈취되면 안되니까 .env에 설정

// 로그인을 하면 토큰이 만들어지는 페이지 만들자

const app = express();

app.set('views', path.join(__dirname, 'page'))
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('main');
})

app.post('/login', (req, res) => {
    // 로그인 정상적으로 했다 가정하고 토큰 발급
    // 유저 정보는 변수로 만들어주자
    const name = 'user1';
    const KEY = process.env.SECRET_KEY;
    console.log(KEY)
    // sign 메서드로 JWT 토큰 생성
    // 첫 번째 매개변수 : header 객체, 두 번째 : 비밀키, 세 번째 : payload 객체
    let token = jwt.sign({
        type: 'JWT',
        name: name
    }, KEY, {
        // 토큰을 유지시킬 유효시간
        expiresIn: '5m',  // 5분 유지
        // 토큰 발급한 사람
        issuer: 'user1'
    });
    res.send(JSON.stringify(token));
})

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiSldUIiwibmFtZSI6InVzZXIxIiwiaWF0IjoxNjgzODY1NzAzLCJleHAiOjE2ODM4NjYwMDMsImlzcyI6InVzZXIxIn0.YM7B0K_0hoo7MFaSq_FEMWccWyhBaMegbXUW6MQrkpY"
// header : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
// payload : eyJ0eXBlIjoiSldUIiwibmFtZSI6InVzZXIxIiwiaWF0IjoxNjgzODY1NzAzLCJleHAiOjE2ODM4NjYwMDMsImlzcyI6InVzZXIxIn0
// signature : YM7B0K_0hoo7MFaSq_FEMWccWyhBaMegbXUW6MQrkpY


// 계정 보안을 위한 JWT(JSON Web Token) 토큰 사용
// 웹표준으로 두 객체의 JSON 객체를 사용해서 정보를 안정성 있게 전달해준다
// JWT는 사용할 정보를 자체적으로 가지고 있다(우리가 필요한 user 정보 같은 것들)
// 토큰이 정상인지 검증(서명을 포함하고 있다)
// 주로 로그인이 정상적인지 회원 인증 권한에서 사용한다
// JWT는 유저가 로그인을 요청하면 서버에 있는 유저의 정보를 통해 정상적인 루트의 요청이면 토큰을 발급해서 전달해준다
// 유저가 서버에 요청할 때, JWT를 포함해서 요청을 하면 서버가 토큰을 검사하고 정상적인 토큰이면 유저가 요청한 작업을 처리하고 응답해준다

// JWT를 쓰는 이유는 안정성 있게 정보를 전달해서 요청할 수 있다
// JWT를 생성하면 사용할 모듈이 인코딩과 해싱 작업을 해준다

// HMAC : 해싱 기법을 적용해서 메시지의 위변조를 방지하는 기법
// SHA256 : 임의의 길이 메시지를 256 비트의 축약된 메시지로 만들어내는 해시 알고리즘

//----------------------------------------------------------------------------------------------------
// let header = {
//     // 사용하는 해싱 알고리즘
//     alg: 'SHA256',
//     // 토큰의 타입
//     type: 'JWT'
// }

// let payload = {
//     // 토큰의 이름 
//     sub: '323511',
//     // 유저의 이름(유저 프로필)
//     name: 'diddcxlq',
//     // 토큰 발급된 시간(발급된지 얼마나 지났는지)
//     lat: '1534243434221'
// }
// //------------------------------------------------------------------------------------

// // 비밀키 생성(SHA256으로 해싱)
// let signature = HMACSHA256(BASE64URL(header) + BASE64URL(payload));

// header : 타입과 알고리즘의 정보가 들어있다
// payload : 유저의 정보와 만료 기간이 포함된 객체를 가지고 있다
// signature : header와 payload를 인코딩하고 합쳐서 해싱해 비밀키로 만든다

// 사용할 모듈 : express, jsonwebtoken, dotenv
// dotenv : 어클리케이션 만들면서 설정 값들을 여기에 작성해둔다
// 보안에 민감한 정보를 .env 파일에 설정값들을 작성해둔다(예. 비밀키, 암호, API 토큰 등)

app.listen(8080, () => {
    console.log('12일 서버 열림');
})