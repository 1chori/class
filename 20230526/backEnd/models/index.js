const config = require('../config');
const Sequelize = require('sequelize');
const User = require('./users');
const Post = require('./posts');

const sequelize = new Sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
)

const db = {};
db.sequelize = sequelize;  // sequelize 객체 만들어주기
db.User = User;
db.Post = Post;

User.init(sequelize);
Post.init(sequelize);
User.associate(db);
Post.associate(db);

module.exports = db;