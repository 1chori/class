// crypto 모듈을 이용하여 비밀번호 암호화하기
// 비밀번호를 만들 때 단방향 암호화를 사용한다
// 암호화 방식에는 단방향과 양방향이 있다
// 단방향 : 복호화가 불가능(비밀번호의 원본값을 알 수 없기 때문에 안전하다)
// 양방향 : 복호화가 가능(데이터를 암호화해서 안전하게 전송할 때 사용)

// 단방향의 예 : 홈페이지에서 비밀번호 찾기를 하면 비밀번호를 알려주는 것이 아니라 변경시켜준다. 원본값을 알 수 없기 때문

// crypto 모듈은 내장 모듈이고 기본적인 암호화 알고리즘 기능을 제공해준다 => 설치할 필요 없다

const { AsyncLocalStorage } = require('async_hooks');
const crypto = require('crypto');

// 임의의 비밀번호를 변수에 담아주자
const pw = 'admin123';

// 해시 객체 생성
// 해시화 : 알고리즘을 통해서 데이터를 고정된 크기의 고유한 값을 바꿔주는 것
// 사용할 알고리즘은 hsa256
// 원본 데이터의 길이에 상관없이 항상 256비트의 해시값 생성

// let hashA = crypto.createHash('sha256');

// // 비밀번호를 해시객체에 넣어주자
// let hasing = hashA.update(pw); // 매개변수로 암호화 시킬 문자열

// console.log(hasing);
// // 콘솔값에서 객체에 false가 있는데 아직 인코딩이 완료되지 않은 상태
// // digest 메서드를 사용해서 해시값을 반환. 매개변수로 반환받을 인코딩 방식 지정

// let hashString = hasing.digest('hex'); // 해시값을 16진수의 문자열로 반환

// console.log(hashString);

// 해시화를 하면 일정한 문자열이 나오는데 salt 값을 사용해서 예측이 불가한 데이터를 만들어주자
// 랜덤한 값을 우리가 만들어서 원본의 데이터에 추가해 암호화시켜주는 것

// 난수 생성 메서드를 사용해서 salt 값을 만들어보자
// crypto.randomBytes(32, (err, result) => {
//     // 32bit 길이의 랜덤한 byte가 생성
//     if (err) {
//         console.log(err);
//     } else {
//         // result만 넣으면 buffer 객체가 나온다
//         console.log(result.toString('hex'));
//     }
// })

// 회원가입할 때 계정마다 salt값을 주고 사용하는 방법이 있다(salt 값을 DB에 같이 저장)
// 모든 패스워드가 고유의 salt값을 가지고 있게 만들 수 있다

const createSalt = () => {
    // 암호화에 시간이 걸리기때문에 
    return new Promise((resolve, reject) => {
        crypto.randomBytes(64, (err, result) => {
            if (err) {
                // 실패 시 err 객체를 reject 메서드로 반환
                reject(err);
            } else {
                // 성공하면 resolve 메서드로 결과를 16진수로 변환해서 반환
                resolve(result.toString('hex'));
            }
        })
    })
}

// 키 스트레칭 기법 : 해시함수를 여러번 반복시켜서 시간을 일부러 오래 걸리게 만드는 기법
// 해킹을 시도할 때 비밀번호들을 대입해서 해킹을 시도하는 경우 암호화 작업을 일부러 오래 걸리게 만들어 해킹을 어렵게 만든다
// 무차별로 비밀번호를 대입하는 공격을 힘들게 만든다

// pbkdf2 메서드를 사용해서 키 스트레칭 기법 사용
const createHash = (salt, password) => {
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(
            password, // 해싱할 값을 문자열로 전달
            salt,
            1532342, // 키 스트레칭 반복 횟수. 반복 횟수가 많아질수록 암호화가 어렵게 된다
            64, // 해시값의 바이트
            'sha256', // 해시화시킬 알고리즘
            (err, hash) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(hash.toString('hex'));
                }
            }
        )
    })
}

const test = async () => {
    const salt = await createSalt();
    const hash = await createHash(salt, pw);
    console.log(hash);
}
test();

// 간단하게 회원가입 만들어보자
// salt 값을 각각의 회원마다 고유의 salt값을 가지게 만들거다

// 프로젝트 시작
// 사용할 모듈 : express, mysql2, path, ejs
const express = require('express');
const mysql2 = require('mysql2/promise');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'page'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

const mysql = mysql2.createPool({
    user: 'root',
    password: 'base1992,.',
    database: 'test5',
    multipleStatements: true
})

const usersInit = async () => {
    try {
        await mysql.query('select * from users');
    } catch (error) {
        await mysql.query('create table users(id int auto_increment primary key, user_id varchar(20), user_pw varchar(128), salt varchar(128))');
    }
}

// usersInit();

app.get('/', (req, res) => {
    res.render('join');
})

app.post('/join', async (req, res) => {
    const { user_id, user_pw } = req.body;
    const salt = await createSalt();
    const hash = await createHash(salt, user_pw);
    await mysql.query('insert into users (user_id, user_pw, salt) values(?,?,?)', [user_id, hash, salt]);
    res.redirect('/login');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', async (req, res) => {
    const { user_id, user_pw } = req.body;
    const [result] = await mysql.query('select * from users where user_id=?', [user_id]);
    if (result[0].salt) {
        const salt = result[0].salt;
        const hash = await createHash(salt, user_pw);
        if (hash == result[0].user_pw) {
            res.send('로그인 성공');
        } else {
            res.send('비밀번호 오류');
        }
    } else {
        res.send('유저 없다');
    }
})

app.listen(8000, () => {
    console.log('16일 서버 오픈');
})
