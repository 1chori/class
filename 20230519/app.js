// 시퀄라이즈 ORM(객체 관계 매핑)
// 객체와 데이터베이스를 ORM 라이브러리가 매핑을 시켜주어서 자바스크립트 구문으로 SQL을 제어할 수 있다
// JS로만 sql 작업을 할 수 있도록 도와주는 라이브러리

// 설치할 모듈 : express ejs sequelize mysql2

const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const { sequelize } = require('./model');

// 시퀄라이즈 구성 연결 매핑
// sync() : 데이터베이스를 동기화 시켜주는 메서드
sequelize.sync({ focus: true }).then(() => {
    // 연결 성공
    console.log('연결 성공');
}).catch((err) => {
    // 연결 실패
    console.log(err);
})

const app = express();

app.set('views', path.join(__dirname, 'page'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.listen(8080, () => {
    console.log('19일 서버 열림');
})