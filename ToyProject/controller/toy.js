const { toy } = require('../models');

exports.ViewAll = async (req, res) => {
    try {
        const data = await toy.viewAll();
        return data;
    } catch (error) {
        console.log(error);
    }
}

exports.ViewEachList = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await toy.viewEachList(id);
        return data;
    } catch (error) {
        console.log('컨트롤러에서 원하는 글 조회 에러');
    }
}

exports.Insert = async (req, res) => {
    const { title, content } = req.body;
    try {
        await toy.add(title, content);
    } catch (error) {
        console.log('게시글 등록 에러');
    }
}

exports.LikeUp = async (req, res) => {
    // const { likeup } = req.body;
    const { id } = req.params;
    try {
        console.log('좋아요 성공');
        await toy.likeUp(id);
        const data = await toy.viewEachList(id);
        return data;
    } catch (error) {
        console.log('좋아요 에러');
    }
}

exports.Edit = async (req, res) => {
    const { title, content } = req.body;
    const { id } = req.params;
    try {
        await toy.edit(id, title, content);
    } catch (error) {
        console.log('게시글 수정 에러');
    }
}

exports.Delete = async (req, res) => {
    const { id } = req.params;
    try {
        await toy.delete(id);
    } catch (error) {
        console.log('게시글 삭제 에러');
    }
}