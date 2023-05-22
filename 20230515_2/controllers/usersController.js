const { userList, userDelete, userInsert, userSelect, userPwChange, userRefresh } = require('../models');
const jwt = require('jsonwebtoken');

exports.userList = async (req, res) => {
    try {
        const data = await userList();
        return data;
    } catch (error) {
        console.log(error);
    }
}

// 회원가입
exports.signUp = async (req, res) => {
    const { user_id, user_pw } = req.body;
    try {
        await userInsert(user_id, user_pw);
        res.redirect('/login');
    } catch (error) {
        console.log(error);
    }
}

// 로그인
exports.login = async (req, res) => {
    const { user_id, user_pw } = req.body;
    try {
        const data = await userSelect(user_id);
        if (!data?.user_id) {
            // 유저 조회를 했을 때, 아이디가 없으면
            return res.send('아이디 없음');
        }

        if (data.user_pw !== user_pw) {
            return res.send('비밀번호 틀림');
        }
        // 로그인 성공하면 토큰 생성
        const accessToken = jwt.sign({
            user_id: data.user_id,
            mail: 'user1@naver.com',
            nick: 'user1'
        }, process.env.ACCESS_TOKEN_KEY, {
            expiresIn: '5s'
        });

        const refreshToken = jwt.sign({
            user_id: data.user_id
        }, process.env.REFRESH_TOKEN_KEY, {
            expiresIn: '20s'
        })
        // 중복 로그인 방지
        await userRefresh(user_id, refreshToken);
        req.session.access_token = accessToken;
        req.session.refresh_token = refreshToken;
        res.send({ access: accessToken, refresh: refreshToken });
    } catch (error) {
        console.log(error);
    }
}

// 유저 토큰 검증
exports.verifyLogin = async (req, res, next) => {
    // next 함수를 실행시켜주면 다음 미들웨어로 이동
    // next();
    // res.send('여기서 끝');
    // 세션 값 가져오기
    const { access_token, refresh_token } = req.session;
    jwt.verify(access_token, process.env.ACCESS_TOKEN_KEY, (err, acc_decoded) => {
        if (err) {
            // access 토큰 썩었으면
            jwt.verify(refresh_token, process.env.REFRESH_TOKEN_KEY, async (err, ref_decoded) => {
                if (err) {
                    console.log('refresh 토큰 만료');
                    res.send('다시 로그인 해라');
                } else {
                    // 중복 로그인 방지
                    const data = await userSelect(ref_decoded.user_id);
                    if (data.refresh == refresh_token) {
                        // 마지막으로 로그인 한 사람이 맞으면
                        const accessToken = jwt.sign({
                            user_id: ref_decoded.user_id
                        }, process.env.ACCESS_TOKEN_KEY, {
                            expiresIn: '5s'
                        })
                        // 새로 발급한 토큰 추가
                        req.session.access_token = accessToken;
                        console.log('access 토큰 재발급');
                        // 토큰이 재발급 됬으니까 로그인 정상 그러니 다음으로
                        next();
                    } else {
                        res.send('중복 로그인 방지');
                    }
                }
            })
        } else {
            console.log('로그인 정상 유지중');
            next();
        }
    })
}