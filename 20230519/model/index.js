const Sequelize = require('sequelize');
const config = require('./config');
const User = require('./users');
const Post = require('./post');
// 시퀄라이즈 객체 생성
const _Sequelize = new Sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
);

// 내보내줄 빈 객체
const db = {};
db.Sequelize = _Sequelize;
db.User = User;
db.Post = Post;

// 테이블을 초기화하는 부분
User.init(_Sequelize);
Post.init(_Sequelize);
User.associate(db);
Post.associate(db);

module.exports = db;