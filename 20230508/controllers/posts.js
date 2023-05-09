// 경로를 폴더까지 지정하면 index.js를 기본적으로 찾는다

const { posts } = require('../models');

exports.ViewPostAll = async function (a, b) {
    try {
        const data = await posts.viewPostAll();
        return data;
    } catch (error) {
        console.log('글 전체 조회 에러남');
    }
}

exports.SelectPost = async function (req, res) {
    // 요청 객체를 매개변수로 전달해줄 예정
    const { id } = req.params;
    try {
        const data = await posts.selectPost(id);
        return data;
    } catch (error) {
        console.log('글 한개 조회 에러남');
    }
}

// 게시글 등록
exports.Insert = async function (req, res) {
    const { title, content } = req.body;
    try {
        await posts.insert(title, content);
    } catch (error) {
        console.log('게시글 등록 에러');
    }
}

// 게시글 수정
exports.Update = async function (req, res) {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        await posts.update(id, title, content);
    } catch (error) {
        console.log('수정 에러');
    }
}

// let a = 1;
// setTimeout(() => {
//     a = 2;
// }, 1000);
// console.log(a);

// let test = new Promise((res,rej)=>{
//     setTimeout(() => {
//         res("성공");
//     }, 1000);
// })

// 게시글 삭제
exports.Delete = async function (req, res) {
    const { id } = req.params;
    try {
        await posts.delete(id);
    } catch (error) {
        console.log('삭제 에러');
    }
}