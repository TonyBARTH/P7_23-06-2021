
//// ROUTES POUR UTILISATEUR ////

const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

/* Chemin vers CREATION d'un utilisateur */
router.post('/signup', userCtrl.signup);

/* Chemin pour IDENTIFICATION d'un utilisateur */
router.post('/login', userCtrl.login);

/* AFFICHAGE de TOUS les utilisateurs */
router.get('/user', userCtrl.getUsers);

/* AFFICHAGE D'UN SEUL utilisateur */
router.get('/user/:id', userCtrl.getUser);

/* MODIFICATION d'un utilisateur */
router.put('/user/:id', userCtrl.update);

/* SUPPRESSION d'un utilisateur */
router.delete('/user/:id', userCtrl.delete);



//// Ne pas oublier "auth" ni "multer" !!!



module.exports = router;