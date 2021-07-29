//// MESSAGE MODEL ////

const Sequelize = require('sequelize');
const dbConnexion = require('../config/database');

/* Table "message" creation with schema */
const MessageIMG = dbConnexion.define('message_img', {
    id:{ 
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull:false, /* Message content cannot be Null */
        primaryKey:true /* For unique user identification */
    },
    user_id: {
        type: Sequelize.UUID,
        allowNull: false
    },
    content: { type: Sequelize.STRING(140), allowNull:false, required: true },
    image: { type: Sequelize.STRING, required: false },
    display: { type: Sequelize.BOOLEAN, defaultValue: true },
    publishedAt: { type: Sequelize.DATE }
});


module.exports = MessageIMG