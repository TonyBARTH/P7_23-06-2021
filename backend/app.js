
//// MOTEUR APPLICATION BACKEND ////

/* Importation des modules */
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');


/* Importation des routes */
const userRoutes = require('./routes/user');
const messageRoutes = require('./routes/message');


/* Connexion à la base de données SQL */
const dbConnexion = require('./config/database'); 
dbConnexion.sync(); 

const app = express();

/* Headers pour les requêtes API */
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

/* Module BodyParser pour préparation des requêtes */
app.use(bodyParser.json());

/* Indication des routes à suivre */
app.use('/api', userRoutes);
app.use('/api', messageRoutes);

module.exports = app;