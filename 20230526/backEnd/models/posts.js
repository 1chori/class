const Sequelize = require('sequelize');

class Post extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            title: {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            content: {
                type: Sequelize.STRING(500),
                allowNull: true
            },
            writer: {
                type: Sequelize.STRING(20),
                allowNull: false
            }
        }, {
            sequelize,
            timestamps: true,
            underscored: false, // 카멜 케이스 여부
            modelName: 'Post', // 노드 프로젝트에서 사용할 이름
            tableName: 'posts', // 데이터베이스 테이블 이름
            paranoid: false, // 삭제 시간 표기 여부
            charset: 'utf8', // 인코딩 방식
            collate: 'utf8_general_ci'
        })
    }
    static associate(db) {
        db.Post.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'id' })
    }
}

module.exports = Post;