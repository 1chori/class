const Sequelize = require('sequelize');
const config = require('../config');
const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

const sequelize = new Sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
)

const db = {};
db.sequelize = sequelize;
db.User = User;
db.Post = Post;
db.Comment = Comment;
User.init(sequelize);
Post.init(sequelize);
Comment.init(sequelize);
User.associate(db);
Post.associate(db);
Comment.associate(db);

module.exports = db;
