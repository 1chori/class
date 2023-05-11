const express = require('express');
const path = require('path');
const postRoute = require('./routes/toy');
const userRoute = require('./routes/users');
const commentRoute = require('./routes/comment');

// 서버 생성
const app = express();

app.set('views', path.join(__dirname, 'pages'));
app.set('view engine', 'ejs');

// 인코딩 문자열 파싱
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/toy', postRoute);
app.use('/users', userRoute);
app.use('/comment', commentRoute);

app.listen(8000, () => {
    console.log('토이 서버 열렸다!');
})