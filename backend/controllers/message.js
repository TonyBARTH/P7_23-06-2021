const Message = require('../models/message');
const User = require('../models/user');
const jwt = require('jsonwebtoken');


/* CREATE and Save a new Message 
*******************************************************/
exports.createMessage = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'bR.?t$X?rf}n1voW:0eaX?F|H}wOG&nC');
    const userId = decodedToken.userId;

    const messageContent = req.body;
    messageContent.user_id = userId;
    const message = Message.create({
    ...messageContent
    })
    .then((message) => res.status(201).json(message))
    .catch(error => res.status(400).json({ error }));
};


/* UPDATE a Message by the id in the request
*******************************************************/
exports.updateMessage = (req, res, next) => {
    let value = {
        content: req.body.content,
        display: req.body.display
    };
    let target = { where: { id: req.params.id } };

    Message.update(value, target)
    .then((response) => {
        let message = Message.findOne({where: { id: req.params.id }})
        .then (message => res.status(200).json(message))
    })
    .catch(error => res.status(400).json({ error }))
};


/* FIND ALL Messages from the database
*******************************************************/
exports.getAllMessages = (req, res, next) => {
    Message.findAll({
        order: [['createdAt', 'DESC']]
    })
    .then(response => res.status(200).json(response))
    .catch(error => res.status(400).json({ error }));
};


/* FIND a single Message with an id
*******************************************************/
exports.getOneMessage = (req, res, next) => {
    Message.findOne({ where: { id: req.params.id }, 
      include: [{ model: User }]
    })
    .then(response => res.status(200).json(response))
    .catch(error => res.status(400).json({ error }));
};


/* DELETE a Message with the specified id in the request
*******************************************************/
exports.deleteMessage = (req, res, next) => {
    const deletedMessage = Message.findOne({ where: { id: req.params.id } })
        .then(deletedMessage => {
            deletedMessage.destroy()
            .then(response => res.status(204).json())
            .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};
