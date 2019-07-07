"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../index"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _validator = _interopRequireDefault(require("validator"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _lodash = _interopRequireDefault(require("lodash"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var UserSchema = new _index["default"].Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: _validator["default"].isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  name: {
    type: String,
    required: true,
    trim: true,
    unique: false
  },
  photo: _index["default"].Schema.Types.ObjectId,
  instantPhotoLink: {
    type: String,
    required: true
  },
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

UserSchema.methods.generateAuthToken = function () {
  var user = this;
  var access = 'auth';

  var token = _jsonwebtoken["default"].sign({
    _id: user._id.toHexString(),
    access: access
  }, 'abctest').toString();

  user.tokens.push({
    access: access,
    token: token
  });
  return user.save().then(function () {
    return token;
  });
};

UserSchema.statics.findByToken = function (token) {
  var User = this;
  var decoded;

  try {
    decoded = _jsonwebtoken["default"].verify(token, 'abctest');
  } catch (e) {
    //return new promise that's always going to reject

    /*return new Promise((resolve, reject) => {
      reject();
    });*/
    return Promise.reject();
  } //console.log(decoded);


  return User.findOne({
    _id: decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  });
};

UserSchema.statics.findByCredentials = function (email, password) {
  var User = this;
  return User.findOne({
    email: email
  }).then(function (user) {
    if (!user) {
      return Promise.reject();
    }

    return new Promise(function (resolve, reject) {
      _bcryptjs["default"].compare(password, user.password, function (err, res) {
        if (res) {
          resolve(user);
        } else {
          reject();
        }
      });
    });
  });
};

var User = _index["default"].model('User', UserSchema);

var _default = User;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UserSchema, "UserSchema", "C:\\Users\\USER\\Desktop\\MY WORK\\tourism-finder\\server\\db\\models\\user.js");
  reactHotLoader.register(User, "User", "C:\\Users\\USER\\Desktop\\MY WORK\\tourism-finder\\server\\db\\models\\user.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\USER\\Desktop\\MY WORK\\tourism-finder\\server\\db\\models\\user.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();