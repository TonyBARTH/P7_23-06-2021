const Message = require('../models/message');
const User = require('../models/user');
const jwt = require('jsonwebtoken');


/* Create and Save a new Message 
*******************************************************/
exports.create = (req, res, next) => {
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


/* Update a Message by the id in the request
*******************************************************/
exports.update = (req, res, next) => {
    let value = {
        content: req.body.content,
        display: req.body.display,
    };
    let target = { where: { message_id: req.params.id } };

    Message.update(value, target)

    .then(response => {
        let message = Message.findOne({ where: { message_id: req.params.id } }
        ).then(message => res.status(200).json((message)))
    }).catch(error => res.status(400).json({ error }))
};


/* Retrieve all Messages from the database
*******************************************************/


/* Find a single Message with an id
*******************************************************/


/* Delete a Message with the specified id in the request
*******************************************************/


/* Delete all Messages from the database
*******************************************************/


/* Find all published Messages */
