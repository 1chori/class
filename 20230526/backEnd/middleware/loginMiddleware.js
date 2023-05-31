const jwt = require('jsonwebtoken');

exports.isLogin = (req, res, next) => {
    const { access_token } = req.session;
    // console.log(access_token);

    jwt.verify(access_token, process.env.ACCESS_TOKEN_KEY, (err, acc_decoded) => {
        if (err) {
            res.send('다시 로그인 하세요');
        } else {
            req.acc_decoded = acc_decoded; // 복구된 페이로드 저장
            next();
        }
    })
}