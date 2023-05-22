const Sequelize = require('sequelize');

// user 클래스에 시퀄라이즈 안의 model 클래스를 상속 시켜준다
class User extends Sequelize.Model {
    static init(sequelize) {
        // super : 상속받은 부모의 함수를 실행. init 실행시켜서 반환
        // init() 메서드 : 첫 번째 매개변수로 컬럼에 대한 설정 값, 두 번째로 테이블의 자체 설정 값이 들어간다
        return super.init({
            // 컬럼에 대한 설정
            // name 컬럼
            // STRING == VARCHAR
            // allowNull : Null을 허용할지 여부
            // unique : 고유키로 사용할 것인지
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true,
                // primaryKey : true
            },
            // INTEGER == INT
            age: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            msg: {
                type: Sequelize.TEXT
            }
        }, {
            // 테이블의 자체 설정
            // 매개변수로 전달받은 _sequelize를 먼저 작성해준다
            sequelize,
            // 테이블에 row 추가 했을 때 생성시간과 업데이트 시간을 표기해준다
            // created_at과 updated_at이라는 칼럼이 자동으로 추가된다
            timestamps: true,
            // 표기법을 바꿔준다. 기본적으로 스네이크 표기법을 카멜 표기법으로 바꿔준다
            // 예: created_at => createdAt
            underscored: false,
            modelName: 'User', // 모델의 이름 설정
            tableName: 'users', // 왠만하면 복수형으로 설정해주자
            paranoid: false, // true로 설정하면 deleted_at이라는 칼럼이 생성된다. 값이 남아있는데 삭제 시간이 표시된다
            charset: 'utf8', // 인코딩 방식. 꼭 작성해야된다
            collate: 'utf8_general_ci' // 인코딩 방식. 꼭 작성해야된다
        });
    }
    static associate(db) {
        // 시퀄라이즈에서 1:N 관계를 hasMany 메서드로 정의한다
        // hasMany 메서드는 테이블의 관계를 정의해준다
        // sourceKey : user 테이블 안에 어떤 키를 foreignKey와 연결해줄지 
        db.User.hasMany(db.Post, { foreignKey: 'user_id', sourceKey: 'id' });
    }
}

module.exports = User;