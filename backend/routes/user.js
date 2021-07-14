
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

/* MODIFICATION d'un utilisateur */
router.put('/user/:id', userCtrl.update);

/* SUPPRESSION d'un utilisateur */
router.delete('/user/:id', auth, multer, userCtrl.delete);


//// Penser aux autres routes CRUD ! 
//// Ne pas oublier "auth" ni "multer".



module.exports = router;