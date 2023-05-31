const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.Login = async (req, res) => {
    try {
        const { user_id, user_pw } = req.body;
        const user = await User.findOne({ where: { user_id } });
        if (user == null) {
            return res.send('없는 아이디입니다');
        }

        const same = bcrypt.compareSync(user_pw, user.user_pw);
        const { name, age } = user;
        if (same) {
            let token = jwt.sign({
                id: user.id,
                name,
                age
            }, process.env.ACCESS_TOKEN_KEY, {
                expiresIn: '20m'
            })
            req.session.access_token = token;
            // (/) : 여기서 경로는 백엔드의 도메인 경로 루트이다
            // 그래서 프론트의 경로를 작성해주자
            // 리다이렉트 할게 아니면 프론트에서 응답 받은 값으로 조건 분기 처리해서 페이지를 전환시켜주면 된다
            // return res.send('로그인 완료');

            // 베포된 프론트의 경로
            return res.redirect('http://127.0.0.1:5501/20230526/FrontEnd/main.html')
        } else {
            res.send('비밀번호 틀려');
        }
    } catch (error) {
        console.log(error);
    }
}

exports.viewUser = async (req, res) => {
    const { acc_decoded } = req;
    console.log(acc_decoded);
    const user = await User.findOne({ where: { name: acc_decoded.name } })
    // json 형태로 데이터를 응답
    res.json(user);
}