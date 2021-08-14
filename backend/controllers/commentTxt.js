const Comment = require('../models/commentTxt');
const User = require('../models/user');
Comment.belongsTo(User, {foreignKey:"user_id"});
const jwt = require('jsonwebtoken');


/* CREATE and Save a new Comment 
*******************************************************/
exports.createComment = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'bR.?t$X?rf}n1voW:0eaX?F|H}wOG&nC');
    const userId = decodedToken.userId;

    const commentContent = req.body;
    commentContent.user_id = userId;
    const comment = Comment.create({
    ...commentContent
    })
    .then((comment) => res.status(201).json(comment))
    .catch(error => res.status(400).json({ error }));
};


/* UPDATE a Comment by the id in the request
*******************************************************/
exports.updateComment = (req, res, next) => {
    let value = {
        content: req.body.content,
        display: req.body.display
    };
    let target = { where: { id: req.params.id } };

    Comment.update(value, target)
    .then((response) => {
        let comment = Comment.findOne({where: { id: req.params.id }})
        .then (comment => res.status(200).json(comment))
    })
    .catch(error => res.status(400).json({ error }))
};


/* FIND ALL Comments from the database
*******************************************************/
exports.getAllComments = (req, res, next) => {
    Comment.findAll({
        order: [['createdAt', 'DESC']]

    })
    .then(response => res.status(200).json(response))
    .catch(error => res.status(400).json({ error }));
};


/* FIND a single Comment with an id
*******************************************************/
exports.getOneComment = (req, res, next) => {
    Comment.findOne({ where: { id: req.params.id }, include:[{ model: User}] })
    .then(response => res.status(200).json(response))
    .catch(error => res.status(400).json({ error }));
};


/* DELETE a Comment with the specified id in the request
*******************************************************/
exports.deleteComment = (req, res, next) => {
    const deletedComment = Comment.findOne({ where: { id: req.params.id } })
        .then(deletedComment => {
            deletedComment.destroy()
            .then(response => res.status(204).json())
            .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};
