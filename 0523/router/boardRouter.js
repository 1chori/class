const router = require('express').Router();
const { isLogin } = require('../middleware/login');
const { boardMain, createBoard, viewBoard, editBoard, deleteBoard } = require('../controller/boardController');

router.get('/', isLogin, boardMain);

router.get('/view/:id', isLogin, viewBoard)


router.get('/create_board', isLogin, (req, res) => {
    res.render('createBoard')
})

router.post('/create_board', isLogin, createBoard);

// router.get('/edit_board/:id', isLogin, (req, res) => {
//     res.render('edit');
// })

router.post('/edit_board/:id', isLogin, editBoard);

router.get('/delete_board/:id', isLogin, deleteBoard);

module.exports = router;