"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _lodash = _interopRequireDefault(require("lodash"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _multer = _interopRequireDefault(require("multer"));

var _expressValidator = require("express-validator");

var _photo = _interopRequireDefault(require("../db/models/photo"));

var _user = _interopRequireDefault(require("../db/models/user"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var upload = (0, _multer["default"])({
  limits: {
    fileSize: 1000000 //set up file size limit in bytes

  },
  fileFilter: function fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg\png)$/)) {
      return cb(new Error('Please upload a pdf'));
    }

    cb(undefined, true); //cb(new Error('File must be a pdf'));
    //cb(undefined, true);
  }
});

var forms = _express["default"].Router();

forms.post('/cook', upload.single('photo'), [(0, _expressValidator.check)('email').isEmail(), (0, _expressValidator.check)('name').not().isEmpty(), (0, _expressValidator.check)('password').not().isEmpty(), (0, _expressValidator.check)('confirmpassword').not().isEmpty()], (0, _expressValidator.body)('confirmpassword').custom(function (value, _ref) {
  var req = _ref.req;

  if (value !== req.body.password) {
    throw new Error('Password confirmation does not match password');
  }

  return true;
}), function (req, res) {
  //console.log(req.body);
  //console.log(req.file)
  var body = _lodash["default"].pick(req.body, ['email', 'name', 'password', 'photo']);

  var photoBody = _lodash["default"].pick(req.file, ['originalname', 'encoding', 'mimetype', 'buffer']);

  var errors = (0, _expressValidator.validationResult)(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array()
    });
  }

  var photo = new _photo["default"](photoBody);
  var user = new _user["default"](body);
  user.photo = photo._id;
  user.instantPhotoLink = req.file.buffer.toString('base64'); //console.log(photo);
  //console.log(user)

  _bcryptjs["default"].genSalt(10, function (err, salt) {
    _bcryptjs["default"].hash(user.password, salt, function (err, hash) {
      user.password = hash;
      photo.save();
      user.save().then(function () {
        return user.generateAuthToken();
      }).then(function (token) {
        res.header('x-auth', token).send(user);
      })["catch"](function (e) {
        res.status(400).send(e);
      });
    });
  });
});
forms.post('/cook/signin', [(0, _expressValidator.check)('email').isEmail(), (0, _expressValidator.check)('password').not().isEmpty()], function (req, res) {
  var body = _lodash["default"].pick(req.body, ['email', 'password']);

  _user["default"].findByCredentials(body.email, body.password).then(function (user) {
    return user.generateAuthToken().then(function (token) {
      res.header('x-auth', token).send(user);
    });
  })["catch"](function (e) {
    res.status(400).send();
  });
});
var _default = forms;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(upload, "upload", "C:\\Users\\USER\\Desktop\\MY WORK\\tourism-finder\\server\\routes\\forms.js");
  reactHotLoader.register(forms, "forms", "C:\\Users\\USER\\Desktop\\MY WORK\\tourism-finder\\server\\routes\\forms.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\USER\\Desktop\\MY WORK\\tourism-finder\\server\\routes\\forms.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();