const CommentIMG = require('../models/commentImg');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const multer = require ('../middleware/multer-config');


/* CREATE and Save a new Comment with image
*******************************************************/
exports.createCommentIMG = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'bR.?t$X?rf}n1voW:0eaX?F|H}wOG&nC');
    const userId = decodedToken.userId;

    const commentContent = req.body;
    commentContent.user_id = userId;

    const comment = CommentIMG.create({
    ...commentContent,
    image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    })
    .then((comment) => res.status(201).json(comment))
    .catch(error => res.status(400).json({ error }));
};


/* READ all Comments with image
*******************************************************/
exports.getAllCommentsIMG = (req, res, next) => {
    CommentIMG.findAll({
        order: [['createdAt', 'DESC']]
    })
    .then(response => res.status(200).json(response))
    .catch(error => res.status(400).json({ error }));
};


/* FIND a single Comment with an id
*******************************************************/
exports.getOneCommentIMG = (req, res, next) => {
    CommentIMG.findOne({ where: { id: req.params.id } })
    .then(response => res.status(200).json(response))
    .catch(error => res.status(400).json({ error }));
};


/* UPDATE a Comment with image
*******************************************************/
exports.updateCommentIMG = (req, res, next) => {
    let values = {
        content: req.body.content,
        image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    };
    let target = { where: { id: req.params.id } };

    CommentIMG.update(values, target)
    .then((response) => {
        let comment_img = CommentIMG.findOne({where: { id: req.params.id }})
        .then (comment_img => res.status(200).json(comment_img))
    })
    .catch(error => {console.log(error);res.status(400).json({ error })});
};


/* DELETE a Comment with image
*******************************************************/

exports.deleteCommentIMG = (req, res, next) => {
    CommentIMG.findOne({ where: { id : req.params.id } })
        .then(selectedComment => {
            const filename = selectedComment.image.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                selectedComment.destroy()
                .then(() => res.status(204).json())
                .catch(error => res.status(400).json({ error }));
            })
        })
        .catch(error => res.status(500).json({ error }));
};