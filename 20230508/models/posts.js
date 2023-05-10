const mysql = require('./config');

const posts = {
    // 테이블 초기화 함수
    initTable: async function () {
        // 에러가 나면 응용프로그램 종료되지 않게 try-catch() 사용하자
        try {
            const [result] = await mysql.query('SELECT * FROM posts');
            console.log(result);
        } catch (error) {
            // console.log(error);
            await mysql.query('CREATE TABLE posts(id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(20), content VARCHAR(100), like(10))');
        }
    },

    // posts 테이블 데이터 전부 조회
    viewPostAll: async function () {
        try {
            const [result] = await mysql.query('SELECT * FROM posts');
            console.log(result);
            return result;

        } catch (error) {
            console.log('전체글 조회 에러');
        }
    },

    // async-await 사용하거나 then만 쓰거나
    // 글 선택했을때, 글 하나를 보여주는 함수
    selectPost: async function (id) {
        try {
            const [result] = await mysql.query('SELECT * FROM posts WHERE id=?', [id]);
            console.log('선택한 게시글 : ', result[0]);
            return result[0];
        } catch (error) {
            console.log('글선택 조회 에러');
        }
    },

    // 글 추가해주는 메서드
    insert: async function (title, content) {
        try {
            await mysql.query('INSERT INTO posts (title, content) VALUES (?,?)', [title, content]);
            console.log('글추가 완료');
        } catch (error) {
            console.log('글추가 에러');
        }
    },

    // 글을 수정하는 메서드
    update: async function (id, title, content) {
        try {
            await mysql.query('UPDATE posts SET title = ?, content = ? WHERE id=?', [title, content, id]);
            console.log('게시글 수정 완료 굿');
        } catch (error) {
            console.log(error);
        }
    },

    // 글을 삭제하는 메서드
    delete: async function (id) {
        try {
            await mysql.query('DELETE FROM posts WHERE id=?; SET @CNT=0; UPDATE posts SET posts.id=@CNT:=@CNT+1; ALTER TABLE posts AUTO_INCREMENT=0;', [id]);
            console.log('게시글 삭제 완료');
        } catch (error) {
            console.log(error);
        }
    }
}

posts.initTable();
// posts.insert('추가', '추가함');
// posts.update(1, 'good', 'goodjob');

module.exports = posts;