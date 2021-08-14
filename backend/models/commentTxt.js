//// COMMENT MODEL ////

const Sequelize = require('sequelize');
const dbConnexion = require('../config/database');

/* Table "commentTxt" creation with schema */
const CommentTxt = dbConnexion.define('commentTxt', {
    id:{ 
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull:false, /* Comment content cannot be Null */
        primaryKey:true /* For unique user identification */
    },
    user_id: {
        type: Sequelize.UUID,
        allowNull: false
    },
    message_txt_id:{
        type: Sequelize.UUID,
        allowNull:false,
    },
    
    content: { type: Sequelize.STRING(140), allowNull:false, required: true },
    publishedAt: { type: Sequelize.DATE }
});


module.exports = CommentTxt