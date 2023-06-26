const express = require('express');
const session = require('express-session');
const path = require('path');
const dotenv = require('dotenv').config();
const { sequelize } = require("./model");
const userRouter = require('./router/userRouter');
const boardRouter = require('./router/boardRouter');

const app = express();

sequelize.sync({ force: false });
app.set('views', path.join(__dirname, 'page'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false
}))

app.use(userRouter);
app.use('/board', boardRouter);

app.listen(8080, () => {
    console.log('23일 서버 열림');
})