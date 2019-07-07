"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("./routes"));

var _db = _interopRequireDefault(require("./db"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var Home = _routes["default"].Home,
    forms = _routes["default"].forms;
var app = (0, _express["default"])();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_express["default"]["static"]('public'));
app.use('/', Home);
app.use('/forms', forms);
app.listen(3000, function () {
  console.log('listening on port 3000');
});
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Home, "Home", "C:\\Users\\USER\\Desktop\\MY WORK\\tourism-finder\\server\\index.js");
  reactHotLoader.register(forms, "forms", "C:\\Users\\USER\\Desktop\\MY WORK\\tourism-finder\\server\\index.js");
  reactHotLoader.register(app, "app", "C:\\Users\\USER\\Desktop\\MY WORK\\tourism-finder\\server\\index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();