//// ROUTES POUR MESSAGES ////

const express = require('express');
const router = express.Router();

const messagesCtrl = require('../controllers/message');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


/* Chemin vers CREATION d'un message */
router.post('/', auth, messagesCtrl.create);

/* Chemin vers MODIFICATION d'un message */
router.put('/:id', auth, messagesCtrl.update);

/* Chemin vers SUPPRESSION d'un message */


/* Chemin vers AFFICHAGE d'1 message */


/* Chemin vers AFFICHAGE de TOUS les messages */




module.exports = router;