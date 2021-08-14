//// ROUTES POUR COMMENTAIRES ////

const express = require('express');
const router = express.Router();

const commentCtrl = require('../controllers/commentTxt');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


/* Chemin vers CREATION d'un commentaire */
router.post('/comment_txt', commentCtrl.createComment);

/* Chemin vers MODIFICATION d'un commentaire */
router.put('/comment_txt/:id', commentCtrl.updateComment);

/* Chemin vers SUPPRESSION d'un commentaire */
router.delete('/comment_txt/:id', commentCtrl.deleteComment);

/* Chemin vers AFFICHAGE d'un commentaire */
router.get('/comment_txt/:id', commentCtrl.getOneComment);

/* Chemin vers AFFICHAGE de TOUS les commentaires */
router.get('/comment_txt', commentCtrl.getAllComments);


//// PENSER A RAJOUTER *AUTH* DANS LES ROUTES !!!


module.exports = router;