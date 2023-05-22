const Sequelize = require('sequelize');

class Post extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            msg: {
                type: Sequelize.STRING(100),
                allowNull: false,
            }
        }, {
            sequelize,
            timestamps: true,
            modelName: 'Post',
            tableName: 'posts',
            charset: 'utf8',
            collate: 'utf8_general_ci'
        })
    }
    static associate(db) {
        // 시퀄라이즈에서 1:N 관계를 hasMany 메서드로 정의한다
        // hasMany 메서드는 테이블의 관계를 정의해준다
        // sourceKey : user 테이블 안에 어떤 키를 foreignKey와 연결해줄지 

        // belongsTo 메서드를 사용해서 user에 id를 foreignKey로 연결한다
        db.Post.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'id' });
    }
}

module.exports = Post;