const mysql2 = require('mysql2/promise');

const mysql = mysql2.createPool({
    user: 'root',
    password: 'base1992,.',
    database: 'test6',
    multipleStatements: false
})

module.exports = mysql;