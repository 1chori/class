const { Post, User } = require('../models');

exports.viewAll = async (req, res) => {
    // const { acc_decoded } = req;
    // console.log(acc_decoded);
    // const user = await User.findOne({ where: { user_id: acc_decoded.user_id } });
    const post = await Post.findAll({});
    res.json(post);
}

exports.viewOne = async (req, res) => {
    const { id } = req.params;
    const post = await Post.findOne({ where: { id } });
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
}

exports.createPost = async (req, res) => {
    const { acc_decoded } = req;
    const { title, content } = req.body;
    await Post.create({
        title,
        content,
        writer: acc_decoded.name,
        user_id: acc_decoded.id
    })
    res.redirect('http://127.0.0.1:5501/20230526/FrontEnd/post.html');
}

exports.editPost = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    await Post.update({ title, content }, { where: { id } });
    res.redirect('http://127.0.0.1:5501/20230526/FrontEnd/post.html');
}

exports.deletePost = async (req, res) => {
    try {
        await Post.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting post' });
    }
}
