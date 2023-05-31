const router = require('express').Router();
const { viewAll, createPost, viewOne, deletePost, editPost } = require('../controllers/postController');
const { isLogin } = require('../middleware/loginMiddleware');

router.get('/', isLogin, viewAll);

router.post('/create_post', isLogin, createPost);

router.get('/view/:id', isLogin, viewOne);

router.post('/edit_post/:id', isLogin, editPost);

router.delete('/delete_post/:id', isLogin, deletePost);

module.exports = router;
