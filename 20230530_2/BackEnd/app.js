const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const session = require('express-session');
const cors = require('cors');
const { sequelize } = require('./models');
const userRouter = require('./routers/userRouter');
const uploadRouter = require('./routers/uploadRouter');

const app = express();

app.set('views', path.join(__dirname, 'page'));
app.use(session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false
}))

sequelize.sync({ force: false });

app.use(express.urlencoded({ extended: false }));
app.use('/img', express.static(path.join(__dirname, 'uploadedImgs')));
app.use(cors({
    origin: 'http://127.0.0.1:5501',
    credentials: true
}
))

app.use('/', userRouter);
app.use('/upload', uploadRouter);

app.listen(8080, () => {
    console.log('30일 두번째 서버 열림');
})