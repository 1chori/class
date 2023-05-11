const express = require('express');
const router = express.Router();

const { ViewAllCmt, InsertCmt, DeleteCmt } = require('../controller/comment');

router.get('/:id', async (req, res) => {
    try {
        const comment_data = await ViewAllCmt(req, res);
        res.render('main', { comment_data });
    } catch (error) {
        console.log(error);
    }
})

// 댓글 추가 요청/toy/view/comment/
router.post('/:id', async (req, res) => {
    try {
        await InsertCmt(req, res);

        res.redirect('/toy/view/' + req.params.id);
    } catch (error) {
        console.log('댓글 추가 에러');
    }
})

// 댓글 삭제
router.get('/delete/:id', async (req, res) => {
    try {
        await DeleteCmt(req, res);
        res.redirect('/toy/view/' + req.params.id);
    } catch (error) {
        console.log('댓글 삭제 에러');
    }
})


module.exports = router;