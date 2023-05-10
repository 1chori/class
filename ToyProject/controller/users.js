const { users } = require('../models');

exports.SignUp = async (req, res) => {
    const { user_id, user_pw } = req.body;
    try {
        await users.signup(user_id, user_pw);
    } catch (error) {
        console.log('controller - 회원가입 에러');
    }
}

exports.Login = async (req, res) => {
    const { user_id, user_pw } = req.body;
    const [result] = req.body;

    try {
        await users.login(user_id, user_pw);
    } catch (error) {
        console.log(error);
    }
}