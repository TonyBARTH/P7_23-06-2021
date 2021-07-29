//// ROUTES POUR MESSAGES AVEC IMAGE ////

const express = require('express');
const router = express.Router();

const messagesCtrl = require('../controllers/message_img');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


/* Chemin vers CREATION d'un message avec image */
router.post('/messages_img', auth, multer, messagesCtrl.createMessageIMG);

/* Chemin vers MODIFICATION d'un message avec image */
router.put('/messages_img/:id', auth, multer, messagesCtrl.updateMessageIMG);

/* Chemin vers SUPPRESSION d'un message avec image */


/* Chemin vers AFFICHAGE d'un message avec image */


/* Chemin vers AFFICHAGE de TOUS les messages avec images */



//// PENSER A RAJOUTER *AUTH* DANS LES ROUTES !!!


module.exports = router;