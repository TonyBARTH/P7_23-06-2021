const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require ('../middleware/multer-config');
const User = require('../models/user')



/* CREATING NEW USER
*******************************************************/
exports.signup = (req, res, next) => {
    /* Creation with password encryption */
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        User.create({
          username: req.body.username,    
          email: req.body.email,
          password: hash
      })
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
      })
};


/* USER LOGIN
*******************************************************/
exports.login = (req, res, next) => {
    User.findOne({ username: req.body.username })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        /* Password check */
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              userId: user.user_id,
              username: user.username,
              admin: user.admin,
              token: jwt.sign(
                { userId: user.user_id },
                'bR.?t$X?rf}n1voW:0eaX?F|H}wOG&nC',
                { expiresIn: '24h' }
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
};



/* USER UPDATE
*******************************************************/
exports.update = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
      .then(hash => {
          const infos = {
              username: req.body.username,
              punchline: req.body.punchline,
              email: req.body.email,
              password: hash
            }
          var target = { where: { user_id: req.params.id }}
          User.update(infos, target)
            .then(resume => {
              let user = User.findOne({ where: { user_id: req.params.id } })
              .then(user => res.status(200).json(user))})
      })
      .catch(error => res.status(400).json({ error }))
};


/* DELETE USER
*******************************************************/
exports.delete = (req, res, next) => {

  User.findOne({ where: { user_id: req.params.id } })
      .then(deletedUser => {
        /* Looking for an image related to the user inside the DB */
        if (deletedUser.image !== null) {
          const filename = deletedUser.image.split('/images/')[1];
          fs.unlink(`images/${filename}`)
        }
      deletedUser.destroy()
      .then(res.status(201).json({ message: 'Utilisateur supprimé !' }));
      
      }) .catch(error => res.status(400).json({ error }));
};



/* FIND ONE USER
*******************************************************/
exports.getUser = (req, res, next) => {
  User.findOne({
      where: { user_id: req.params.id },
      include: [ { model: Message } ]
  })
  .then(response =>
      res.status(200).json(response))
      .catch(error => res.status(400).json({ error }));
};

/* FIND ALL USER
*******************************************************/
exports.getUsers = (req, res, next) => {
  User.findAll().then(response =>
      res.status(200).json(response))
      .catch(error => res.status(400).json({ error }));
};