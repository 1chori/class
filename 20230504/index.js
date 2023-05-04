// 이제 npm init -y로 package.json을 기본값으로 설정해서 만들자

// 사용할 모듈 : express, ejs, mysql, path

const express = require('express');
const mysql2 = require('mysql2');
const path = require('path');


// ejs는 express에서 지원하기 때문에 따로 가져오지 않아도 된다
// ejs, mysql2 설치. path는 내장 모듈이기 때문에 설치할 필요 없다

const app = express();
const _mysql = mysql2.createConnection({
    user: 'root',
    password: 'base1992,.',
    database: 'test2',
    // 다중 쿼리문 사용할 수 있는 옵션
    multipleStatements: true
})
// console.log(app);  // views 기본값은 'C:\\Users\\pro44\\OneDrive\\바탕 화면\\class\\20230504\\views'

// express의 view 속성을 설정
// express에서 서버사이드 렌더링을 지원하기 위해 view engine을 사용한다
// view engine이 템플릿 파일을 보여주는 역할을 해준다

app.set('views', path.join(__dirname, 'page'));
// console.log(app); // views: 'C:\\Users\\pro44\\OneDrive\\바탕 화면\\class\\20230504\\page'

// view engine으로 ejs를 사용할 수 있게 설정
app.set('view engine', 'ejs');


// express에서 body-parser를 지원한다
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    // render() 메서드로 view engine이 문자열을 html로 브라우저에 전달
    // 첫 번째 매개변수 : 파일의 이름, 두 번째 : 전달할 데이터
    res.render('main');
})


app.get('/signup', (req, res) => {
    res.render('signup');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', (req, res) => {
    // 요청에 대한 내용은 req 객체에 들어있다
    // 요청을 하면서 보낸 데이터는 body 객체 안에 들어있다
    // req.body === {user_id : '', user_pw : ''}
    const { user_id, user_pw } = req.body;
    console.log(user_id, user_pw);

    // 데이터베이스에 아이디와 비밀번호가 동일한 내용이 있으면, 사용자가 회원가입을 진행했다는 내용이니 로그인 시켜준다.

    // user_id와 user_pw로 데이터를 조회
    const sql = 'SELECT * FROM users WHERE user_id = ? AND user_pw = ?';
    _mysql.query(sql, [user_id, user_pw], (err, result) => {
        if (err) {
            res.render('mypage');
        } else {
            // 로그인 성공
            console.log(result);
            res.render('mypage', { data: result[0] });
        }
    })
    // res.send('user_id : ' + user_id + 'user_pw : ' + user_pw);
})


// 회원가입
app.post('/signup', (req, res) => {
    const { user_id, user_pw } = req.body;
    console.log(user_id, user_pw);
    const sql = 'INSERT INTO users (user_id, user_pw)VALUES(?,?)';
    _mysql.query(sql, [user_id, user_pw], (err) => {

        if (err) {
            res.render('signUpError');
        } else {
            res.redirect('login');
        }
    })
})

// 회원가입하고 데이터베이스에 추가 -> mysql 워크벤치로 이동


// 게시판의 글 목록 페이지
app.get('/list', (req, res) => {
    // 데이터베이스에 있는 데이터를 가져오자
    const sql = 'SELECT * FROM products';
    _mysql.query(sql, (err, result) => {
        res.render('list', { data: result });
    })
})

// 게시판 등록 페이지
app.get('/insert', (req, res) => {
    res.render('insert');
})

app.post('/insert', (req, res) => {
    const { name, number, series } = req.body;
    const sql = 'INSERT INTO products (name, number, series)VALUES(?,?,?)';
    _mysql.query(sql, [name, number, series], () => {
        res.redirect('/list');
    })
})


// 게시판 리스트 삭제
app.get('/delete/:id', (req, res) => {
    // /delete/2 == req.params == {id: 2}

    // 삭제 했을 시 번호 정렬해주는 쿼리문(SET부터)
    // SET @CNT = 0 구문으로 카운트 0으로 초기화
    // UPDATE products.id = @CNT+1 : products 테이블 행의 아이디를 다시 갱신시켜줌
    // ALTER TABLE products AUTO_INCREMENT = 0; : AUTO_INCREMENT 속성을 자동으로 1씩 증가시키는 속성을 

    const sql = 'DELETE FROM products WHERE id = ?; SET @CNT = 0; UPDATE products SET products.id = @CNT:=@CNT+1; ALTER TABLE products AUTO_INCREMENT = 0;';
    _mysql.query(sql, [req.params.id], () => {
        res.redirect('/list');
    })
})

// 게시판 리스트 수정
app.get('/edit/:id', (req, res) => {
    // 찾을 때는 select
    const sql = 'SELECT * FROM products WHERE id = ?';
    const id = req.params.id;
    _mysql.query(sql, [id], (err, result) => {
        res.render('edit', { data: result[0] })
    })
})

// 내용 수정하고 등록하는 코드
app.post('/edit/:id', (req, res) => {
    const { name, number, series } = req.body;
    const sql = 'UPDATE products SET name = ?, number = ?, series = ? WHERE id=?'
    const id = req.params.id;
    _mysql.query(sql, [name, number, series, id], () => {
        res.redirect('/list');
    })
})


app.listen(8080, () => {
    console.log('서버 열렸다다다다!')
})
