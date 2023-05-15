const router = require('express').Router();
const dot = require('dotenv').config();
const jwt = require('jsonwebtoken');


// 토큰 유효성 검사

router.post('/', (req, res) => {
    const token = req.session.token;
    const key = process.env.KEY
    console.log(req);
    // verify() : 토큰이 유효한지 검증
    // 첫 번째 매개변수 : 유효성 검사할 토큰, 두 번째 : key 전달, 세 번째 : 콜백 함수 전달
    // 콜백함수 첫 번째 매개변수 : err 객체, 두 번째 : 해석된 객체
    jwt.verify(token, key, (err, decoded) => {
        if (err) {
            console.log('썩었다');
            console.log(err);
            res.send('토큰 썩었구나');
        } else {
            console.log(decoded);
            res.send(decoded);
        }
    })
})

module.exports = router;