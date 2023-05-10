const express = require('express');
const router = express.Router();

const { ViewAll, Insert, Delete } = require('../controller/comment');

router.get('/', async (req, res) => {
    try {
        const data = await ViewAll(req, res);
        res.render('main', { data });
    } catch (error) {
        console.log(error);
    }
})

// 댓글 추가 요청
router.post('/view/:id', async (req, res) => {
    try {
        const data = await Insert(req, res);
        res.render('view', { data });
    } catch (error) {
        console.log('댓글 추가 에러');
    }
})

router.get('/delete/:id', async (req, res) => {
    try {
        await Delete(req, res);
    } catch (error) {
        console.log('댓글 삭제 에러');
    }
})


module.exports = router;