const MessageIMG = require('../models/message_img');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const multer = require ('../middleware/multer-config');


/* CREATE and Save a new Message with image
*******************************************************/
exports.createMessageIMG = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'bR.?t$X?rf}n1voW:0eaX?F|H}wOG&nC');
    const userId = decodedToken.userId;

    const messageContent = req.body;
    messageContent.user_id = userId;

    const message = MessageIMG.create({
    ...messageContent,
    image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    })
    .then((message) => res.status(201).json(message))
    .catch(error => res.status(400).json({ error }));
};


/* READ all Messages with image
*******************************************************/
exports.getAllMessagesIMG = (req, res, next) => {
    MessageIMG.findAll({
        order: [['createdAt', 'DESC']]
    })
    .then(response => res.status(200).json(response))
    .catch(error => res.status(400).json({ error }));
};


/* FIND a single Message with an id
*******************************************************/
exports.getOneMessageIMG = (req, res, next) => {
    MessageIMG.findOne({ where: { id: req.params.id } })
    .then(response => res.status(200).json(response))
    .catch(error => res.status(400).json({ error }));
};


/* UPDATE a Message with image
*******************************************************/
exports.updateMessageIMG = (req, res, next) => {
    let values = {
        content: req.body.content,
        image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        display: req.body.display
    };
    let target = { where: { id: req.params.id } };

    MessageIMG.update(values, target)
    .then((response) => {
        let message_img = MessageIMG.findOne({where: { id: req.params.id }})
        .then (message_img => res.status(200).json(message_img))
    })
    .catch(error => res.status(400).json({ error }));
};


/* DELETE a Message with image
*******************************************************/

exports.deleteMessageIMG = (req, res, next) => {
    MessageIMG.findOne({ where: { id : req.params.id } })
        .then(selectedMessage => {
            const filename = selectedMessage.image.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                selectedMessage.destroy()
                .then(() => res.status(204).json())
                .catch(error => res.status(400).json({ error }));
            })
        })
        .catch(error => res.status(500).json({ error }));
};