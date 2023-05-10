const mysql2 = require('mysql2/promise');

// createConnection() 메서드는 콜백함수 기반이고 promise를 반환하지 않았다
// createConnection : 기본적인 연결을 해주는 메서드이고 테스트할 때 사용한다. 단일 클라이언트 접속에 용이하다

// createPool() 메서드로 커넥션풀을 생성하고 연결을 관리할 수 있다. promise 객체를 반환해준다
// 많은 클라이언트가 데이터베이스와 통신할 때 많은 요청이 들어와도 성능이 유지되고 여러개의 요청을 처리할 수 있다

// 연결 풀 만들기
const mysql = mysql2.createPool({
    user: 'root',
    password: 'base1992,.',
    database: 'test3',
    multipleStatements: true
})

mysql.getConnection((err, res) => {
    console.log(err);
})

module.exports = mysql;