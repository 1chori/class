const config = {
    dev: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.HOST,
        // 사용할 데이터베이스
        dialect: 'mysql'
    }
}

module.exports = config;