const router = require('express').Router();
const { signUp } = require('../controllers/usersController');

router.get('/', (req, res) => {
    res.render('join');
})

router.post('/', signUp);

module.exports = router;