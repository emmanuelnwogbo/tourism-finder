"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../index"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var PhotoSchema = new _index["default"].Schema({
  originalname: {
    type: String,
    required: true,
    trim: true
  },
  encoding: {
    type: String,
    required: true,
    trim: true
  },
  mimetype: {
    type: String,
    required: true,
    trim: true
  },
  buffer: {
    type: Buffer,
    required: true
  }
});

var Photo = _index["default"].model('Photo', PhotoSchema);

var _default = Photo;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PhotoSchema, "PhotoSchema", "C:\\Users\\USER\\Desktop\\MY WORK\\tourism-finder\\server\\db\\models\\photo.js");
  reactHotLoader.register(Photo, "Photo", "C:\\Users\\USER\\Desktop\\MY WORK\\tourism-finder\\server\\db\\models\\photo.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\USER\\Desktop\\MY WORK\\tourism-finder\\server\\db\\models\\photo.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();