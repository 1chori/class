const sequelize = require('sequelize');
const config = require('./config');

// 시퀄라이즈 객체 생성
const _sequelize = new sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
);

// 내보내줄 빈 객체
const db = {};
db.sequelize = _sequelize;

module.exports = db;