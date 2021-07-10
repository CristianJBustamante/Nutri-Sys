"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("./config"));

var _paciente = _interopRequireDefault(require("./routes/paciente.routes"));

var _mutual = _interopRequireDefault(require("./routes/mutual.routes"));

var app = (0, _express["default"])();
var port; // settings

app.set('port', _config["default"].port); //middlewares

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_paciente["default"]);
app.use(_mutual["default"]);
var _default = app;
exports["default"] = _default;