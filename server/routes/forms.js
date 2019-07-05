import express from 'express';
import _ from 'lodash';
import bcrypt from 'bcryptjs';
import { body, check, validationResult } from 'express-validator';

const forms = express.Router();

import Item from '../db/models/recipe';
import User from '../db/models/user';

forms.post('/recipe', (req, res) => {
  res.send('hello world from recipe route');
});

forms.post('/cook', [
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

  const body = _.pick(req.body, ['email', 'name', 'password']);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const user = new User(body);

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      user.password = hash;
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