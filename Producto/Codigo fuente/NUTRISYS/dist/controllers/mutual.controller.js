"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMutualXID = exports.getMutuales = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

var getMutuales = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context.sent;
            _context.next = 6;
            return pool.request().query(_database.queries.getMutuales);

          case 6:
            result = _context.sent;
            console.log(result);
            res.json(result.recordset);
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            res.status(500);
            res.send(_context.t0.message);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function getMutuales(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getMutuales = getMutuales;

var getMutualXID = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var pac_nrohc, pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            pac_nrohc = req.params.pac_nrohc;
            _context2.next = 4;
            return (0, _database.getConnection)();

          case 4:
            pool = _context2.sent;
            _context2.next = 7;
            return pool.request().input('mut_id', mut_id).query(_database.queries.getMutualXID);

          case 7:
            result = _context2.sent;
            res.send(result.recordset[0]);
            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            res.status(500);
            res.send(_context2.t0.message);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function getMutualXID(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getMutualXID = getMutualXID;