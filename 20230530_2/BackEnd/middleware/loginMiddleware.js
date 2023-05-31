const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');

exports.isLogin = (req, res, next) => {
    const { access_token } = req.session;
    jwt.verify(access_token, process.env.ACCESS_TOKEN_KEY, (err, acc_decoded) => {
        if (err) {
            res.send('다시 로그인 하세요');
        } else {
            req.acc_decoded = acc_decoded;
            next();
        }
    })
}

exports.Upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, done) => {
            done(null, 'uploadedImgs');
        },
        filename: (req, file, done) => {
            const ext = path.extname(file.originalname);
            const filename = path.basename(file.originalname, ext) + '_' + Date.now() + ext;
            done(null, filename);
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 }
})