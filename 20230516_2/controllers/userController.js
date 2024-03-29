const { userInsert, userSelect } = require('../models');
const bcrypt = require('bcrypt');

// bcrypt 암호화 모듈 추가
// 강력한 암호화를 지원하고 쉽게 사용 가능
// $2a$[cost]$[salt][hash]

// $2a$ : 사용 알고리즘 고정
// [cost] : 키 스트레칭 횟수. 입력한 값의 제곱으로 들어간다. 기본 10(2^10), 10보다 높으면 많이 느려질 수 있다
// [salt] : 인코딩된 salt 값 문자열의 일부분을 salt값으로 사용한다
// [hash] : 비밀번호와 salt값을 합하고 해시해서 인코딩된 값

// bcrypt : 보안에 집착하기로 유명한 OpenBSD에 사용
// 반복횟수를 늘려 연산속도를 늦출 수 있기 때문에 연산능력이 증가해도 공격에 대비할 수 있다

const createHash = (password) => {
    return new Promise((resolve, reject) => {
        // hash() 메서드로 해시값을 만들어 줄 수 있다
        bcrypt.hash(password, 10, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

const compare = (password, hash) => {
    return new Promise((resolve, reject) => {
        // compare() 메서드를 사용해서 문자열과 해시값을 전달해주고 매개변수로 검증 결과를 확인한다
        bcrypt.compare(password, hash, (err, same) => {
            resolve(same);
        })
    })
}

// 회원가입
exports.SignUp = async (req, res) => {
    const { user_id, user_pw } = req.body;
    try {
        const hash = await createHash(user_pw);
        await userInsert(user_id, hash);
        res.redirect('/login');
    } catch (error) {
        console.log(error);
    }
}

exports.Login = async (req, res) => {
    const { user_id, user_pw } = req.body;
    try {
        const data = await userSelect(user_id);
        if (!data?.user_id) {
            return res.send('아이디 없음')
        }

        const compare_pw = await compare(user_pw, data.user_pw);
        if (!compare_pw) {
            return res.send('비밀번호 틀림');
        }

        res.send('로그인 성공');
    } catch (error) {
        console.log(error);
    }
}
