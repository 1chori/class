const mysql = require('./config');

const users = {
    initTable: async () => {
        try {
            const [result] = await mysql.query('SELECT * FROM users');
            console.log(result);
        } catch (error) {
            await mysql.query('CREATE TABLE users(id INT AUTO_INCREMENT PRIMARY KEY, user_id VARCHAR(20), user_pw VARCHAR(20))');
            // console.log(error);
        }
    },

    signup: async (user_id, user_pw) => {
        try {
            await mysql.query('INSERT INTO users (user_id, user_pw) VALUES (?,?)', [user_id, user_pw]);
            console.log('회원가입 완료');
        } catch (error) {
            console.log('모델-회원가입 에러');
        }
    },

    viewAll: async () => {
        try {
            const [result] = await mysql.query('SELECT * FROM users');
            console.log(result);
            return result;
        } catch (error) {
            console.log(error);
        }
    },

    login: async (user_id, user_pw) => {
        try {
            await mysql.query('SELECT * FROM users WHERE user_id=? AND user_pw=?', [user_id, user_pw]);
            console.log('로그인 완료');
        } catch (error) {
            console.log(error);
        }
    },

    delete: async (id) => {
        try {
            await mysql.query('DELETE FROM users WHERE id=?; SET @CNT=0; UPDATE users SET users.id=@CNT:=@CNT+1; ALTER TABLE users AUTO_INCREMENT=0;', [id]);
            console.log('회원 정보 삭제 완료');
        } catch (error) {
            console.log('회원 정보 삭제 에러');
        }
    }
}

// users.delete(1);
module.exports = users;