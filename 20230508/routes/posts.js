// 게시글의 라우터만 모아놓은 파일

const express = require('express');

// Router() 메서드는 라우팅을 관리할 수 있게 도와주는 메서드
// 라우터를 나눠서 관리할 수 있다
const router = express.Router();

// 컨트롤러에서 작성한 내용을 가져오자
const { ViewPostAll, SelectPost, Insert, Update, Delete } = require('../controllers/posts');

router.get('/', async (req, res) => {
    try {
        const data = await ViewPostAll(req, res);
        res.render('main', { data });
    } catch (error) {
        console.log(error);
    }
})

// 게시글 상세 페이지
router.get('/view/:id', async (req, res) => {
    try {
        const data = await SelectPost(req, res);
        res.render('detail', { data });
    } catch (error) {
        console.log('게시글 상세 페이지 에러남');
    }
})


// 게시글 추가 페이지
router.get('/insert', (req, res) => {
    res.render('insert');
})

// 게시글 추가 요청이 들어오면
router.post('/insert', async (req, res) => {
    try {
        await Insert(req, res);
        res.redirect('/posts');
    } catch (error) {
        console.log('글 추가하다 에러');
    }
})

// 수정 페이지
router.get('/edit/:id', async (req, res) => {
    try {
        const data = await SelectPost(req, res);
        res.render('edit', { data });
    } catch (error) {
        console.log('수정 페이지 에러남');
    }
})

// 게시글 수정 버튼 눌러서 수정
router.post('/edit/:id', async (req, res) => {
    try {
        await Update(req, res);
        res.redirect('/posts');
    } catch (error) {
        console.log('게시글 수정하다 에러남');
    }
})

router.get('/delete/:id', async (req, res) => {
    try {
        await Delete(req, res);
        res.redirect('/posts');
    } catch (error) {
        console.log('지우다 에러남');
    }
})

module.exports = router;