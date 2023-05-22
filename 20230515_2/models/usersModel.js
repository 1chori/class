// 유저의 정보를 관리하는 파일
const mysql = require('./config');

exports.userInit = async () => {
    try {
        // users 테이블이 있는지 확인
        await mysql.query('select * from users');
    } catch (error) {
        const sql = 'create table users(id int auto_increment primary key, user_id varchar(20), user_pw varchar(20), refresh varchar(255))';
        await mysql.query(sql);
    }
}

exports.userList = async () => {
    try {
        const [result] = await mysql.query('select * from users');
        return result;
    } catch (error) {
        console.log(error);
    }
}

exports.userSelect = async (user_id) => {
    try {
        const [result] = await mysql.query('select * from users where user_id=?', [user_id]);
        return result[0];
    } catch (error) {
        console.log(error);
    }
}

exports.userInsert = async (user_id, user_pw) => {
    try {
        // 이미 가입한 아이디인지 확인
        const [user] = await mysql.query('select*from users where user_id=?', [user_id]);
        if (user.length != 0) {
            // 이미 가입한 아이디이다
            // 에러 객체 new 동적할당으로 생성
            let err = new Error('중복된 아이디임');
            console.log(err);
            return err;
        }

        // 조건문 통과했으면 해당 아이디가 없는거니까 회원가입 시켜주자
        await mysql.query('insert into users (user_id, user_pw) values(?,?)', [user_id, user_pw]);
    } catch (error) {
        console.log(error);
    }
}

exports.userPwChange = async (user_id, user_pw) => {
    try {
        await mysql.query('update users set user_pw=? where user_id=?', [user_pw, user_id]);
    } catch (error) {
        console.log(error);
    }
}

exports.userRefresh = async (user_id, refresh) => {
    try {
        await mysql.query('update users set refresh=? where user_id=?', [refresh, user_id]);
    } catch (error) {
        console.log(error);
    }
}

exports.userDelete = async (user_id) => {
    try {
        await mysql.query('delete from users where user_id=?; SET @CNT=0; UPDATE posts SET posts.id=@CNT:=@CNT+1; ALTER TABLE posts AUTO_INCREMENT=0;', [user_id])
    } catch (error) {
        console.log(error);
    }
}

