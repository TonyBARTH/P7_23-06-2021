
//// ROUTES POUR UTILISATEUR ////

const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

/* Chemin vers création d'un utilisateur */
router.post('/signup', userCtrl.signup);

/* Chemin pour identification d'un utilisateur */
router.post('/login', userCtrl.login);



//// Penser aux autres routes CRUD ! 
//// Ne pas oublier "auth" ni "multer".



module.exports = router;