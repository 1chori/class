const express = require('express');
const router = express.Router();

const { SignUp, Login } = require('../controller/users');

router.get('/signup', (req, res) => {
    res.render('signup');
})

router.post('/signup', async (req, res) => {
    try {
        await SignUp(req, res);
        res.redirect('/toy');
    } catch (error) {
        console.log('회원가입 에러');
    }
})

router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/login', async (req, res) => {
    try {
        await Login(req, res);
        res.redirect('/toy');
    } catch (error) {
        console.log('로그인실패')
    }
})

module.exports = router;