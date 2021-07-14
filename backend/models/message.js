//// MESSAGE MODEL ////

const Sequelize = require('sequelize');
const dbConnexion = require('../config/database');

/* Table "message" creation with schema */
const Message = dbConnexion.define('message', {
    message_id:{ 
        type: Sequelize.UUIDV4,
        allowNull:false, /* Message content cannot be Null */
        primaryKey:true /* For unique user identification */
    },
    user_id: {
        type: Sequelize.UUIDV4,
        allowNull: false
    },
    content: { type: Sequelize.STRING(140), allowNull:false, required: true },
    display: { type: Sequelize.BOOLEAN, defaultValue : true }
});


module.exports = Message