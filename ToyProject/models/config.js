const mysql2 = require('mysql2/promise');

// 연결 풀 만들기
const mysql = mysql2.createPool({
    user: 'root',
    password: "base1992,.",
    database: 'toy',
    multipleStatements: true
})

// 풀에서 연결
mysql.getConnection((err, res) => {
    console.log(err);
})

// 연결 풀 내보내기
module.exports = mysql;