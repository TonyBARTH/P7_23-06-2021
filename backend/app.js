
//// MOTEUR APPLICATION BACKEND ////

/* Importation des modules */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

/* Importation de Node Path pour donner accès au système de fichier (on s'en sert pour enregistrer nos images dans le dossier 'images' */
const path = require('path');

/* Importation des routes */
const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');



/* Connexion à la base de données SQL */



/* Headers pour requêtes API */
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

/* Indication des routes à suivre */
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);


module.exports = app;