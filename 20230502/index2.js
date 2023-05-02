// 여기서 사용할 모듈은 express와 path
// path는 내장 모듈, 경로에 대한 조작을 도와주는 모듈
// 파일 시스템의 경로들을 상대경로나 절대경로로 쉽게 설정할 수 있도록 도와준다.

const express = require('express');
const path = require('path');

// 서버 인스턴스 생성
const app = express();

// 요청해서 데이터를 가져오는 메서드
app.get('/', (req, res) => {
    const body = path.join(__dirname, 'views', 'index.html');
    console.log(body);
    console.log(__dirname);
    // res.send('');
    // sendFile 메서드는 html 파일을 읽을 수 있도록 브라우저로 보내줌 
    res.sendFile(body);
})

app.get('/list', (req, res) => {
    const body = path.join(__dirname, 'views', 'list.html');
    console.log(body);
    res.sendFile(body);
})

app.get('/my', (req, res) => {
    const body = path.join(__dirname, 'views', 'mypage.html');
    console.log(body);
    res.sendFile(body);
})


app.listen(8080, () => {
    console.log('서버 열렸다!');
})