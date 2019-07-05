import express from 'express';
import _ from 'lodash';
import bcrypt from 'bcryptjs';
import multer from 'multer';
import { body, check, validationResult } from 'express-validator';

const upload = multer({
  limits: {
    fileSize: 1000000 //set up file size limit in bytes
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg\png)$/)) {
      return cb(new Error('Please upload a pdf'))
    }

    cb(undefined, true);
    //cb(new Error('File must be a pdf'));
    //cb(undefined, true);
  }
})
const forms = express.Router();

import Photo from '../db/models/photo';
import User from '../db/models/user';

forms.post('/cook', upload.single('photo'), [
  check('email').isEmail(),
  check('name').not().isEmpty(),
  check('password').not().isEmpty(),
  check('confirmpassword').not().isEmpty()
], body('confirmpassword').custom((value, { req }) => {
  if (value !== req.body.password) {
    throw new Error('Password confirmation does not match password');
  }
  
  return true;
}), (req, res) => {
  //console.log(req.body);
  //console.log(req.file)
  const body = _.pick(req.body, ['email', 'name', 'password', 'photo']);
  const photoBody = _.pick(req.file, ['originalname', 'encoding', 'mimetype', 'buffer'])
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  
  const photo = new Photo(photoBody);
  const user = new User(body);
  user.photo = photo._id;
  //console.log(photo);
  //console.log(user)

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      user.password = hash;
      photo.save();
      user.save().then(() => {
        return user.generateAuthToken();

      }).then(token => {
        res.header('x-auth', token).send(user);
      }).catch(e => {
        res.status(400).send(e);
      });
    });
  });
});


forms.post('/cook/signin', [
  check('email').isEmail(),
  check('password').not().isEmpty()
], (req, res) => {

  const body = _.pick(req.body, ['email', 'password']);

  User.findByCredentials(body.email, body.password).then(user => {
    return user.generateAuthToken().then( token => {
      res.header('x-auth', token).send(user);
    });
  })
  .catch(e => {
    res.status(400).send();
  });
})

export default forms;