//// ROUTES POUR COMMENTAIRE AVEC IMAGE ////

const express = require('express');
const router = express.Router();

const commentImgCtrl = require('../controllers/commentImg');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


/* Chemin vers CREATION d'un commentaire avec image */
router.post('/commentImg', multer, commentImgCtrl.createCommentIMG);


/* Chemin vers AFFICHAGE de TOUS les commentaires avec images */
router.get('/commentImg', multer, commentImgCtrl.getAllCommentsIMG);


/* Chemin vers AFFICHAGE d'un commentaire avec image */
router.get('/commentImg/:id', multer, commentImgCtrl.getOneCommentIMG);


/* Chemin vers MODIFICATION d'un commentaire avec image */
router.put('/commentImg/:id', multer, commentImgCtrl.updateCommentIMG);


/* Chemin vers SUPPRESSION d'un commentaire avec image */
router.delete('/commentImg/:id', multer, commentImgCtrl.deleteCommentIMG);




//// PENSER A RAJOUTER *AUTH* DANS LES ROUTES !!!


module.exports = router;