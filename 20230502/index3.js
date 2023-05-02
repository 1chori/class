// express와 ejs 템플릿 엔진을 같이 사용해서 게시판을 만들어보자
// 템플릿 엔진은 서버측에서 html을 만들어서 브라우저에 보여주는 것(서버사이드 랜더링)

// html과 동일하고 js를 같이 추가해서 동적인 웹페이지를 만들 수 있다.
// express에서 ejs를 기본적으로 지원한다.
// 검색 기능 및 페이지 로딩이 빠르다.

// 사용할 모듈 express, ejs, mysql2, body-parser, path

// body-parser는 express 미들웨어 요청으로 받은 body의 내용을 요청으로 받은 body의 내용을 req 요청 객체 안에 있는 body 객체로 담아준다.
// req.body로 호출이 가능해진다.
// 미들 웨어라는건 쉽게 요청과 응답을 하는 사이 중간에 동작하는 함수

const express = require('express');
const mysql2 = require('mysql2');
const path = require('path');
const boydParser = require('body-parser');

// 서버 인스턴스 생성
const app = express();

// express에 set 메서드와 use 메서드가 있다.
// set 메서드 : express의 view 등을 설정할 수 있다. 그려줄 파일이 있는 폴더의 경로같은 설정을 할 수가 있다.
// use 메서드 : 요청 또는 응답시 실행되는 미들웨어를 추가할 수 있다.

// express의 view 속성을 경로로 지정. express view로 사용할 파일들의 경로
// express도 서버사이드 랜더링을 지원해주기 때문에 view 엔진을 사용한다.
// view 엔진은 html 등의 템플릿 파일을 보여주는 역할을 한다.
app.set('views', path.join(__dirname, 'views'));

// view 엔진을 ejs로 사용하겠다고 설정
// ejs 설치가 되어있어야 한다.
// 파일 확장자 ejs로 변경
app.set('view engine', 'ejs');


// app.use(
//     boydParser.urlencoded({
//         extended: false,
//     })
//     // extended의 옵션
//     // true : 쿼리스트링 모듈의 기능이 더 확장됨 qs 모듈을 사용한다.
//     // false : express 기본 내장된 쿼리스트링 모듈을 사용한다.
//     // 권장은 false
// )

// express 버전이 올라가면서 bodyParser를 지원해준다
app.use(express.urlencoded({ extended: false }));

const _mysql = mysql2.createConnection({
    user: 'root',
    password: 'base1992,.',
    database: 'test2'
})



app.get('/', (req, res) => {
    // 루트 경로로 요청시 처리
    // 메인페이지
    _mysql.query("SELECT * FROM products", (err, result) => {
        // render 메서드가 view 엔진이 문자열을 html로 브라우저에 반환해서 렌더링해준다.
        // 첫 번째 매개변수가 view로 설정한 폴더 경로에 파일의 이름을 문자열로 전달
        // 두 번째 매개변수는 템플릿 엔진에서 사용할 데이터
        res.render('main', { data: result });
    })
})

app.post('/insert', (req, res) => {
    const data = req.body;
    // body 객체 안에 form에서 요청으로 보낸 데이터가 객체로 들어있다.
    // 객체 안에 있는 키값들은 input들의 name으로 정해준 키로 값이 들어있다.

    // 우리가 요청한 데이터의 내용을 데이터베이스에 추가하자
    const sql = 'INSERT INTO products (name,number,series)VALUES(?,?,?)';
    console.log(data);
    // query 메서드 두번째 매개변수로 배열의 형태로 value를 전달해줄 수 있다.
    // value의 순서대로
    _mysql.query(sql, [data.name, data.number, data.series], () => {
        // redirect 메서드로 매개변수로 전달한 URL로 페이지를 전환시킨다.
        res.redirect('/');
    })
    // res.send();
})


// 리스트를 추가하는 페이지

app.get('/insert', (req, res) => {
    res.render('insert')
})

// 삭제
app.get('/delete/:id', (req, res) => {
    // :id는 url 요청에서 파라미터 값이다
    // 예) http://localhost:8080/delete/1
    // {id : 1} 이런 형태로 요청의 객체에 들어있다.
    // req.params.id === 1

    const sql = 'DELETE FROM products WHERE id=?';
    _mysql.query(sql, [req.params.id], () => {
        res.redirect('/');
    })
})

_mysql.query('SELECT * FROM products', (err, res) => {
    if (err) {
        // 테이블 없으면 만들자
        const sql = 'CREATE TABLE products(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20), number VARCHAR(20), series VARCHAR(20))';
        _mysql.query(sql);
    } else {
        console.log(res);
    }
})


app.listen(8080, () => {
    console.log('열렸오!');
})