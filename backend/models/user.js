
//// USER MODEL ////

const Sequelize = require('sequelize');
const dbConnexion = require('./config/database'); 

/* Table "user" creation with schema */
const User = dbConnexion.define('user', {
  user_id:{ 
      // Sequelize module has INTEGER Data_Type. 
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull:false, /* User cannot be Null*/
      primaryKey:true /* For unique user identification */
  }, 
  
  /* Data schema */
  username: { type: Sequelize.STRING, allowNull:false, unique: true }, 
  image : { type: Sequelize.STRING, required: false, allowNull: true }, /* Image is optional */
  punchline : { type: Sequelize.STRING(100), required: false, allowNull: true }, /* Punchline is optional. Limited to 100 letters and spaces. */
  email: { type: Sequelize.STRING, allowNull:false, unique: true }, 
  password:{ type: Sequelize.STRING, allowNull: false },
  isAdmin: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false } /* For access control */
});

module.exports = User