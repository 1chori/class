// 이미지 업로드
// 서버측 컴퓨터에 이미지 파일을 폴더에 저장
// 파일의 경로를 설정하고 서버측에서 이미지 파일을 가져와 보여준다

// 사용 모듈 express path multer cors
// multer 모듈을 사용해서 이미지 업로드. 파일이 저장될 경로나 파일의 확장자 이름 등을 설정에서 저장
// cor : 도메인 허용하기 위해

const express = require('express');
const cors = require('cors');
const uploadRouter = require('./routers/upload');
const path = require('path');
const app = express();

app.use(cors({
    origin: 'http://127.0.0.1:5501',
    credentials: true
}))

// 요청과 응답에서 json 형식의 데이터를 전달받았을 때,json 파싱을 해서 JS 객체로 변환 시켜주는 미들웨어
// json 메서드로 json 파싱
app.use(express.urlencoded({ extended: false }));

// 정적으로 파일 경로 추가하는 방법
app.use('/img', express.static(path.join(__dirname, 'upload')));

// app.use() : 응용 프로그램이 미들웨어를 사용하도록 지시
// express.json() : Express.js에 내장된 미들웨어 기능. req.body 속성에서 사용할 수 있는 핸들러보다 먼저 미들웨어에서 들어오는 요청 본문을 구문 분석한다.
// 따라서 들어오는 요청을 JSON으로 해석하도록 Express 애플리케이션에 지시
app.use(express.json());
app.use('/upload', uploadRouter);



app.listen(8000, () => {
    console.log('30일 서버 열림');
})