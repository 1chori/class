const { comment } = require('../models');

exports.ViewAll = async (req, res) => {
    try {
        const data = await comment.viewAll();
        return data;
    } catch (error) {
        console.log(error);
    }
}

exports.Insert = async (req, res) => {
    const { content } = req.body;
    try {
        await comment.add(content);
    } catch (error) {
        console.log('게시글 등록 에러');
    }
}

exports.Delete = async (req, res) => {
    const { id } = req.params;
    try {
        await comment.delete(id);
    } catch (error) {
        console.log('게시글 삭제 에러');
    }
}