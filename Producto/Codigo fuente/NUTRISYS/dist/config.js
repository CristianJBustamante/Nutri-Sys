"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var _default = {
  port: process.env.PUERTO || 3000,
  dbUser: process.env.DBUSER || '',
  dbPassword: process.env.DBPASS || '',
  dbServer: process.env.DBSERVER || '',
  dbDataBase: process.env.DBDATABASE || ''
};
exports["default"] = _default;