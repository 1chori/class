const router = require('express').Router();
const { SignUp, LogIn, viewUser } = require('../controllers/userController');
const { isLogin } = require('../middleware/loginMiddleware');

router.post('/signUp', SignUp);

router.post('/login', LogIn);

router.get('/login/view', isLogin, viewUser);

module.exports = router;