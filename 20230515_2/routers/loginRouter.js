const router = require('express').Router();
const { login, verifyLogin } = require('../controllers/usersController');

router.get('/', (req, res) => {
    res.render('login');
})

router.post('/', login)

// 로그인 상태에서 요청해야 하는 작업
router.get('/mypage', verifyLogin, (req, res) => {
    res.send('로그인 상태이고 마이페이지 보여줄게');
})

module.exports = router;