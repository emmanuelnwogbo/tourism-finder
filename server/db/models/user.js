import mongoose from '../index';
import jwt from 'jsonwebtoken';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import _ from 'lodash';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  name: {
    type: String,
    required: true,
    trim: true,
    unique: false,   
  },
  /*photo: {
    type: String,
    required: true
  },*/
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

UserSchema.methods.generateAuthToken = function() {
  let user = this;
  let access = 'auth';
  let token = jwt.sign({_id: user._id.toHexString(), access}, 'abctest').toString();

  user.tokens.push({
    access,
    token
  });

  return user.save().then(() => {
    return token;
  });
};

UserSchema.statics.findByToken = function(token) {
  let User = this;
  let decoded;

  try {
    decoded = jwt.verify(token, 'abctest');
  } catch (e) {
    //return new promise that's always going to reject
    /*return new Promise((resolve, reject) => {
      reject();
    });*/
    return Promise.reject();
  }
  //console.log(decoded);

  return User.findOne({
    _id: decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  });
};

UserSchema.statics.findByCredentials = function (email, password) {
  let User = this;

  return User.findOne({email}).then( user => {
    if (!user) {
      return Promise.reject();
    }

    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, res) => {
        if(res) {
          resolve(user);
        }
        else {
          reject();
        }
      });
    });
  });
};

const User = mongoose.model('User', UserSchema);
export default User;