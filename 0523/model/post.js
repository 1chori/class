const Sequelize = require('sequelize');

class Post extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            title: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            writer: {
                type: Sequelize.STRING(20), // 유저 닉네임
                allowNull: false
            },
            content: {
                type: Sequelize.STRING(500),
                allowNull: false
            }
        }, {
            sequelize,
            timestamps: true,
            modelName: 'Post',
            tableName: 'posts',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        })
    }
    static associate(db) {
        db.Post.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'id' }),
            db.Post.hasMany(db.Comment, { foreignKey: 'comment_id', sourceKey: 'id' })
    }
}

module.exports = Post;