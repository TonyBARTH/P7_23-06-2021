const Sequelize = require('sequelize');

/* PARAMETERS */
let dbConfig = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "GoodMorningDB",
    DB: "dataBaseName",
    dialect: "mysql",
    /* Pool parameters are optionnal */ 
    pool: {
      max: 5, /* maximum number of connection in pool */
      min: 0, /* minimum number of connection in pool */
      acquire: 60000, /* maximum time in milliseconds that pool will try to get connection before throwing error */
      idle: 20000 /* maximum time in milliseconds that a connection can be idle before being released */
    }
  };
 


/* CONNEXION LOADER */
const dbConnexion = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
  });
  try {
    dbConnexion.authenticate();
    console.log('Connexion réussie avec la base de donnée !');
  } catch (error) {
    console.error('Problème de connexion avec la DB', error);
  };

  module.exports = dbConnexion;