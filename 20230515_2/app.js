// 사용할 모듈 : express, path, ejs, dotenv, mysql2, session, jwt

const express = require('express');
const session = require('express-session');
const path = require('path');
const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken');

const joinRouter = require('./routers/joinRouter');
const loginRouter = require('./routers/loginRouter');

const app = express();

app.set('views', path.join(__dirname, 'page'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(session({
    // 세션 발급에 사용할 비밀키 노출 안되게 env로 만들자
    secret: process.env.SESSION_KEY,
    // 세션을 저장하고 불러올 때 세션을 다시 저장할지 여부
    resave: false,
    // 세션에 저장할 때 초기화 여부
    saveUninitialized: false
}))

app.use('/join', joinRouter);
app.use('/login', loginRouter);

app.listen(8000, () => {
    console.log('15일 두 번째 서버 열림');
})