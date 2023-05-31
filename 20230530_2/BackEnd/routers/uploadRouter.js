const router = require('express').Router();
const { Upload } = require('../middleware/loginMiddleware');
const { updateImg } = require('../controllers/userController');

router.post('/', Upload.single('uploadedImgs'), (req, res) => {
    const { file, body } = req;
    console.log(file, body);
    res.send('파일 저장됨');
})

module.exports = router;