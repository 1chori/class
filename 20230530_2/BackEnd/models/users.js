const Sequelize = require('sequelize');

class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            nickName: {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            user_id: {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            user_pw: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            img_src: {
                type: Sequelize.STRING(1000),
                allowNull: true,
                defaultValue: "img/star-removebg-preview_1685430376230.png"
            }
        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        })
    }
}

module.exports = User;