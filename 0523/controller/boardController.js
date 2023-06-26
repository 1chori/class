const { User, Post } = require('../model');

exports.boardMain = async (req, res) => {
    const { acc_decoded } = req;
    console.log(acc_decoded);
    const user = await User.findOne({ where: { user_id: acc_decoded.user_id } });
    console.log(user);
    const post = await Post.findAll({});
    res.render('board', { data: user, post });
}

exports.createBoard = async (req, res) => {
    const { acc_decoded } = req;
    const { content, title } = req.body;
    await Post.create({
        title,
        content,
        writer: acc_decoded.nickName,
        user_id: acc_decoded.id
    });
    res.redirect('/board');
}

exports.viewBoard = async (req, res) => {
    Post.findOne({
        where: { id: req.params.id }
    }).then((e) => {
        const Posts = e.dataValues;
        res.render('view', { Posts });
        console.log(e);
    })
}

exports.editBoard = async (req, res) => {
    const { acc_decoded } = req;
    const { title, content } = req.body;
    const { id } = req.params;
    await Post.update({ title, content }, { where: { id } });
    res.redirect(`/board/view/${id}`);
}

exports.deleteBoard = async (req, res) => {
    await Post.destroy({
        where: { id: req.params.id }
    });
    res.redirect('/board');
}