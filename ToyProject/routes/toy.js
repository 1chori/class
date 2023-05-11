const express = require('express');
const router = express.Router();

const { ViewAll, ViewEachList, Insert, Delete, Edit, LikeUp } = require('../controller/toy');
const { ViewAllCmt, DeleteCmt, InsertCmt } = require('../controller/comment');

router.get('/', async (req, res) => {
    try {
        const data = await ViewAll(req, res);
        res.render('main', { data });
    } catch (error) {
        console.log(error);
    }
})

// 글 추가
router.get('/add', async (req, res) => {
    res.render('add');
})

// 글 추가 요청
router.post('/add', async (req, res) => {
    try {
        await Insert(req, res);
        res.redirect('/toy');
    } catch (error) {
        console.log('라우트-글 추가 에러');
    }
})


// 글 상세 조회
router.get('/view/:id', async (req, res) => {
    try {
        const data = await ViewEachList(req, res);
        const comment_data = await ViewAllCmt(req, res);
        res.render('view', { data, comment_data });
    } catch (error) {
        console.log('게시글 상세 페이지 에러남');
    }
})

// 좋아요
router.post('/view/:id', async (req, res) => {
    try {
        const { likeUp } = req.body;
        const data = await LikeUp(req, res);
        console.log('좋아요 성공!!');
        res.render('view', { data });
    } catch (error) {
        console.log('좋아요 에러');
    }
})

// 글 수정
router.get('/edit/:id', async (req, res) => {
    try {
        const data = await ViewEachList(req, res);
        res.render('edit', { data });
    } catch (error) {
        console.log('글 수정하다 에러');
    }
})

// 글 수정 요청
router.post('/edit/:id', async (req, res) => {
    try {
        await Edit(req, res);
        res.redirect('/toy');
    } catch (error) {
        console.log('수정 요청에 에러남');
    }
})

// 글 삭제
router.get('/delete/:id', async (req, res) => {
    try {
        await Delete(req, res);
        await DeleteCmt(req, res);
        res.redirect('/toy');
    } catch (error) {
        console.log('라우트-삭제 에러');
    }
})


module.exports = router;
// router.get('/')