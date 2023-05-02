// mysql에 연결

// 외부모듈 설치 받아서 사용
// npm 모듈 설치 받는 방법

// 이번에 설치받아서 사용할 모듈은 mysql2

// mysql2 설치 명령어
//------------------------------------------------
// npm install mysql2
// npm i mysql2
//------------------------------------------------

// package.json에 있는 dependencies 내용의 모듈을 모두 설치받는법
//-----------------------------------------------
// npm install
// npm i
//-----------------------------------------------

// node_modules 오래걸리니까 올리면 안된다.
// .gitignore 파일을 생성하고 업로드를 제외하고싶은 파일명을 적으면 해당 파일은 제외하고 git에 업로드가 된다. 

// "dependencies": {
//     "mysql2": "^3.2.4"
//  }
// ^는 해당 버전이 없으면 다른 버전을 찾아서 설치받는다는 내용
// 실제 설치된 버전은 lock.json에 있음

// mysql 모듈은 콜백, promise 기반으로 사용하기 힘들다
// mysql2는 promise 기반을 지원하기 때문에 사용하기 편하다.

// mysql2 가져오기
const mysql = require('mysql2');

// mysql 연결
// createConnection() 메서드로 연결해준다.
// host : 연결할 호스트를 나타냄. root
// post : 연결할 포트 3306 포트에 기본적으로 열림
// user : 사용자의 이름
// database : 어떤 데이터베이스를 연결 시킬건지
const temp = mysql.createConnection({
    user: 'root',
    password: 'base1992,.',
    database: 'test2',
})
// temp에 연결한 mysql 객체를 반환

// query 메서드 : 쿼리문을 매개변수로 전달해서 데이터베이스의 쿼리 작업을 시킬 수 있다.
temp.query('SELECT * FROM products', (err, res) => {
    if (err) {
        // 테이블이 없다는 것
        console.log('테이블 없어');
        const sql = 'CREATE TABLE products(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20), number VARCHAR(20), series VARCHAR(20))';
        // 쿼리문 내용
        // products 이름의 테이블을 만든다
        // id 컬럼은 INT 숫자형
        // AUTO_INCREMENT : 자동으로 값이 증가할 수 있도록 설정. PRIMARY KEY에 주로 사용
        // PRIMARY KEY : 테이블에는 고유한 값을 가지고 있는 컬럼 하나가 무조건 필요한데 고유한 값으로 PRIMARY KEY로 설정한다
        // name, number, series 등의 컬럼은 VARCHAR 문자열이고 괄호에 글자 수를 정해줄 수 있다. 여기선 20자까지 허용시켜 놓았음
        temp.query(sql);
        console.log('테이블 없어서 만들었다');
    } else {
        console.log(res);
        console.log('테이블 있음');
    }
})
