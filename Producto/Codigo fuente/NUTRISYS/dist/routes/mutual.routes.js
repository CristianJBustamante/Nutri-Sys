"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _mutual = require("../controllers/mutual.controller");

var router = (0, _express.Router)();
router.get('/mutual', _mutual.getMutuales);
var _default = router;
exports["default"] = _default;