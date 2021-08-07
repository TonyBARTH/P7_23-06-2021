//// ROUTES POUR MESSAGES AVEC IMAGE ////

const express = require('express');
const router = express.Router();

const messagesCtrl = require('../controllers/message_img');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


/* Chemin vers CREATION d'un message avec image */
router.post('/messages_img', multer, messagesCtrl.createMessageIMG);


/* Chemin vers AFFICHAGE de TOUS les messages avec images */
router.get('/messages_img', multer, messagesCtrl.getAllMessagesIMG);


/* Chemin vers AFFICHAGE d'un message avec image */
router.get('/messages_img/:id', multer, messagesCtrl.getOneMessageIMG);


/* Chemin vers MODIFICATION d'un message avec image */
router.put('/messages_img/:id', multer, messagesCtrl.updateMessageIMG);


/* Chemin vers SUPPRESSION d'un message avec image */
router.delete('/messages_img/:id', multer, messagesCtrl.deleteMessageIMG);



//// PENSER A RAJOUTER *AUTH* DANS LES ROUTES !!!


module.exports = router;