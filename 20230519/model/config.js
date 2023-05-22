const config = {
    dev: {
        username: process.env.USERNAMES,
        password: process.env.PASSWORDS,
        database: process.env.DATABASES,
        host: process.env.HOSTS,
        // 사용할 데이터베이스
        dialect: 'mysql'
    }
}
console.log(config)
module.exports = config;