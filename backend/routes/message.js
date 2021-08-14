//// ROUTES POUR MESSAGES ////

const express = require('express');
const router = express.Router();

const messagesCtrl = require('../controllers/message');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


/* Chemin vers CREATION d'un message */
router.post('/messages', messagesCtrl.createMessage);

/* Chemin vers MODIFICATION d'un message */
router.put('/messages/:id', messagesCtrl.updateMessage);

/* Chemin vers SUPPRESSION d'un message */
router.delete('/messages/:id', messagesCtrl.deleteMessage);

/* Chemin vers AFFICHAGE d'un message */
router.get('/messages/:id', messagesCtrl.getOneMessage);

/* Chemin vers AFFICHAGE de TOUS les messages */
router.get('/messages', messagesCtrl.getAllMessages);


//// PENSER A RAJOUTER *AUTH* DANS LES ROUTES !!!


module.exports = router;