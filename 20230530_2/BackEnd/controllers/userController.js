const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.SignUp = async (req, res) => {
    try {
        const { name, nickName, user_id, user_pw } = req.body;
        const user = await User.findOne({ where: { user_id } });
        if (user != null) {
            return alert('존재하는 아이디입니다');
        };

        const hash = bcrypt.hashSync(user_pw, 10);
        await User.create({
            name,
            nickName,
            user_id,
            user_pw: hash
        });

        res.redirect('http://127.0.0.1:5501/20230530_2/FrontEnd/login.html');
    } catch (error) {
        console.log(error);
    }
}

exports.LogIn = async (req, res) => {
    try {
        const { user_id, user_pw } = req.body;
        const user = await User.findOne({ where: { user_id } });
        if (user == null) {
            return res.send('없는 아이디입니다.');
        }

        const same = bcrypt.compareSync(user_pw, user.user_pw);
        const { name, nickName } = user;
        if (same) {
            let token = jwt.sign({
                id: user.id,
                name,
                nickName
            }, process.env.ACCESS_TOKEN_KEY, {
                expiresIn: '10m'
            })
            req.session.access_token = token;
            return res.redirect('http://127.0.0.1:5501/20230530_2/FrontEnd/main.html')
        } else {
            return res.send('비밀번호 틀림');
        }
    } catch (error) {
        console.log(error);
    }
}

exports.viewUser = async (req, res) => {
    const { acc_decoded } = req;
    console.log(acc_decoded);
    const user = await User.findOne({ where: { nickName: acc_decoded.nickName } });
    res.json(user);
}

exports.updateImg = async (req, res) => {
    const { acc_decoded } = req;
    const { img_src } = req.body;
    try {
        const user = await User.findOne({ where: { user_id: acc_decoded.user_id } });
        if (user) {
            user.img_src = img_src;
            await user.save();
        } else {
            res.send('이미지 업데이트 실패');
        }
    } catch (error) {
        console.log(error);
    }
}
