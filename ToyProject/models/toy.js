const mysql = require('./config');

const toy = {
    initTable: async () => {
        try {
            const [result] = await mysql.query('SELECT * FROM toy');
            console.log(result);
        } catch (error) {
            await mysql.query('CREATE TABLE toy(id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(20), content VARCHAR(100), likeup INT(11))');
        }

    },

    // 전체글 조회
    viewAll: async () => {
        try {
            const [result] = await mysql.query('SELECT * FROM toy');
            console.log(result);
            return result;
        } catch (error) {
            console.log(error);
        }
    },

    // 하나의 글 조회
    viewEachList: async (id) => {
        try {
            const [result] = await mysql.query('SELECT * FROM toy WHERE id=?', [id]);
            console.log('게시글 조회 :', result[0]);
            return result[0];
        } catch (error) {
            console.log('원하는 글 조회 에러');
        }
    },

    // 좋아요 추가
    likeUp: async (id) => {
        try {
            await mysql.query('UPDATE toy SET likeup=likeup+1 WHERE id=?', [id]);
            console.log('좋아요 성공!!');
        } catch (error) {
            console.log('좋아요 실패');
        }
    },

    // 글 추가
    add: async (title, content) => {
        try {
            await mysql.query('INSERT INTO toy (title, content) VALUES (?,?)', [title, content]);
            console.log('글 추가 완료');
        } catch (error) {
            console.log('글 추가 에러');
        }
    },

    // 글 수정
    edit: async (id, title, content) => {
        try {
            await mysql.query('UPDATE toy SET title=?, content=? WHERE id=?', [title, content, id]);
            console.log('글 수정 완료');
        } catch (error) {
            console.log('모델에서 글 수정 에러');
            // console.log(error);
        }
    },

    // 글 삭제
    delete: async (id) => {
        try {
            await mysql.query('DELETE FROM toy WHERE id=?; SET @CNT=0; UPDATE toy SET toy.id=@CNT:=@CNT+1; ALTER TABLE toy AUTO_INCREMENT=0;', [id]);
            console.log('글 삭제 완료');
        } catch (error) {
            console.log('글 삭제 에러');
        }
    }
}

// toy.add('나도', '나도나도');
// toy.delete(1);
module.exports = toy;