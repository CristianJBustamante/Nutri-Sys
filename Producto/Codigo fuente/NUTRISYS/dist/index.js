"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

_app["default"].listen(_app["default"].get('port'));

console.log("SERVIDOR EN PUERTO ", _app["default"].get('port'));