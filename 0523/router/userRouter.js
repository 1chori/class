const router = require('express').Router();
const { signUp, logIn } = require('../controller/userController');

router.get('/signup', (req, res) => {
    res.render('signup');
})

router.post('/signup', signUp);

router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/login', logIn);

module.exports = router;