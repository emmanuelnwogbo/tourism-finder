"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../index"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _validator = _interopRequireDefault(require("validator"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var ItemSchema = new _index["default"].Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: false
  },
  photos: [Buffer]
});

var Item = _index["default"].model('Item', ItemSchema);

var _default = Item;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ItemSchema, "ItemSchema", "C:\\Users\\USER\\Desktop\\MY WORK\\tourism-finder\\server\\db\\models\\recipe.js");
  reactHotLoader.register(Item, "Item", "C:\\Users\\USER\\Desktop\\MY WORK\\tourism-finder\\server\\db\\models\\recipe.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\USER\\Desktop\\MY WORK\\tourism-finder\\server\\db\\models\\recipe.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();