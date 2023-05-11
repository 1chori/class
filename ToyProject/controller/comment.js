const { comment } = require('../models');

exports.ViewAllCmt = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await comment.viewAllCmt(id);
        console.log("dddddddddddd", data)
        return data;
    } catch (error) {
        console.log(error);
    }
}

exports.InsertCmt = async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    try {
        await comment.add(id, content);
    } catch (error) {
        console.log('게시글 등록 에러');
    }
}

exports.DeleteCmt = async (req, res) => {
    const { id } = req.params;
    try {
        await comment.delete(id);
    } catch (error) {
        console.log('게시글 삭제 에러');
    }
}