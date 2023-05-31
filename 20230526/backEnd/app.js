// 로그인 페이지
// 폴더를 나눠서 배포하고 프론트를 수정하면 프론트에서만 푸시, 벡엔드를 수정하면 백에만 푸시

// 프로젝트 관리
// 백엔드랑 프론트 나눠서 깃 레파지토리 파고 푸시

// 설치 모듈 express express-session cors sequelize mysql2 dotenv

const express = require('express');
const path = require('path');
const session = require('express-session');
const cors = require('cors');
const dotenv = require('dotenv').config();
const { sequelize } = require('./models'); // db 객체 가져올거니까 구조분해 할당으로
const logInRouter = require('./routers/login');
const signUpRouter = require('./routers/signup');
const postRouter = require('./routers/post');

const app = express();

app.use(session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false
}))

// sync() 함수는 정의된 모든 모델을 데이터베이스에 동기화하는 Sequelize 메서드이다
// 함수는 아직 존재하지 않은 경우 테이블을 생성하고 이미 존재하는 경우 아무 작업도 수행하지 않는다
// force 옵션을 true로 설정하면 테이블이 있는 경우 테이블을 삭제하고 다시 생성한다
sequelize.sync({ force: false }).then(() => {
    console.log('연결 성공');
}).catch((err) => {
    console.log(err);
})

app.set('views', path.join(__dirname, 'page'));

app.use(express.urlencoded({ extended: false }));

// 다른 도메인에서 악의적으로 접근할 수 없도록 도메인 접근시 발생하는 보안 정책
// 다른 도메인과 통신을 안전하게 유지시키기 위해서 보안 정책이 있다
// cors 모듈을 통해 도메인을 허용해주자
// Access-control-Allow-origin을 헤더에 포함해서 접근을 허용 및 응답하고
// 브라우저에서 응답을 받은 뒤 헤더값을 확인해서 접근을 허용 또는 차단한다

// 미들웨어로 추가
app.use(cors({
    // 도메인 허용 옵션
    // 접근을 허용할 도메인
    // 여러개의 도메인을 허용하고 싶다면, 배열의 형태로 넣어주면 된다
    origin: 'http://127.0.0.1:5501',
    // 클라이언트의 요청에 쿠키를 포함할지의 속성
    credentials: true, // 무조건 true
}))

// test
app.get('/', (req, res) => {
    res.send('응답함');
})

app.use('/signUp', signUpRouter);
app.use('/login', logInRouter);
app.use('/post', postRouter);

app.listen(8000, () => {
    console.log('26일 서버 열림');
})