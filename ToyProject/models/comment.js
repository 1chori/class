const mysql = require('./config');

const comment = {
    initTable: async () => {
        try {
            const [result] = await mysql.query('SELECT * FROM comment');
            console.log(result);
        } catch (error) {
            await mysql.query('CREATE TABLE comment(id INT AUTO_INCREMENT PRIMARY KEY, cmt_content VARCHAR(100))');
        }
    },

    // 전체 댓글 조회
    viewAll: async () => {
        try {
            const [result] = await mysql.query('SELECT * FROM comment');
            console.log(result);
            return result;
        } catch (error) {
            console.log(error);
        }
    },

    // 댓글 추가
    add: async (cmt_content) => {
        try {
            await mysql.query('INSERT INTO comment (cmt_content) VALUES (?)', [cmt_content]);
            console.log('글 추가 완료');
        } catch (error) {
            console.log('글 추가 에러');
        }
    },

    // 댓글 삭제
    delete: async (id) => {
        try {
            await mysql.query('DELETE FROM comment WHERE id=?; SET @CNT=0; UPDATE comment SET comment.id=@CNT:=@CNT+1; ALTER TABLE comment AUTO_INCREMENT=0;', [id]);
            console.log('글 삭제 완료');
        } catch (error) {
            console.log('글 삭제 에러');
        }
    }
}

comment.initTable();
module.exports = comment;