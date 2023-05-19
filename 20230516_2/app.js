// 실무에 많이 사용하는 모듈. 쉽고 강력하다
const express = require('express');
const mysql2 = require('mysql2');
const path = require('path');
const loginRouter = require('./routers/loginRouter');
const joinRouter = require('./routers/joinRouter');

const app = express();

app.set('views', path.join(__dirname, 'page'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.use('/login', loginRouter);
app.use('/join', joinRouter);

app.listen(8080, () => {
    console.log('16일 두 번째 서버 오픈');
})