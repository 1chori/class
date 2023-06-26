const Sequelize = require('sequelize');

class Comment extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            comment: {
                type: Sequelize.STRING(300),
                allowNull: false
            },
            writer: {
                type: Sequelize.STRING(20), // 유저 닉네임
                allowNull: false
            }
        }, {
            sequelize,
            timestamps: true,
            modelName: 'Comment',
            tableName: 'comments',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        })
    }

    static associate(db) {
        db.Comment.belongsTo(db.Post, { foreignKey: 'comment_id', targetKey: 'id' })
    }
};

module.exports = Comment;