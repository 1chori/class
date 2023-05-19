const mysql = require('./config');


exports.usersInit = async () => {
    try {
        await mysql.query('select * from users');
    } catch (error) {
        await mysql.query('create table users(id int auto_increment primary key, user_id varchar(20), user_pw varchar(200))');
    }
}

exports.userSelect = async (user_id) => {
    try {
        const [result] = await mysql.query('select * from users where user_id=?', [user_id])
        return result[0];
    } catch (error) {
        console.log(error);
    }
}

exports.userInsert = async (user_id, user_pw) => {
    try {
        // 중복되는 아이디인지 확인
        const [user] = await mysql.query('select * from users where user_id=?', [user_id]);
        if (user.length != 0) {
            let err = new Error('아이디 존재');
            console.log(err);
            return err;
        }
        await mysql.query('insert into users(user_id, user_pw) values(?,?)', [user_id, user_pw]);
    } catch (error) {
        console.log(error);
    }
}