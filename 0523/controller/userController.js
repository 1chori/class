const { User } = require('../model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signUp = async (req, res) => {
    try {
        const { name, nickName, user_id, user_pw, user_pw_check } = req.body;
        const user = await User.findOne({ where: { user_id } });
        if (user != null) {
            return res.send('아이디가 존재합니다.');
        }

        if (user_pw != user_pw_check) {
            return res.send('비밀번호가 다릅니다.');
        }

        const hash = bcrypt.hashSync(user_pw, 10);
        User.create({
            name,
            nickName,
            user_id,
            user_pw: hash
        });
        res.redirect('/login');
    } catch (error) {
        console.log(error);
    }
}

exports.logIn = async (req, res) => {
    try {
        const { user_id, user_pw } = req.body;
        const user = await User.findOne({ where: { user_id } });
        if (user == null) {
            return res.send('없는 아이디입니다.');
        }

        const same = bcrypt.compareSync(user_pw, user.user_pw);
        if (same) {
            let token = jwt.sign({
                id: user.id,
                user_id: user.user_id,
                nickName: user.nickName
            }, process.env.ACCESS_TOKEN_KEY, {
                expiresIn: '10m'
            });
            req.session.access_token = token;
            res.redirect('/board');
        } else {
            res.send('비밀번호가 틀립니다.');
        }
    } catch (error) {
        console.log(error);
    }
}