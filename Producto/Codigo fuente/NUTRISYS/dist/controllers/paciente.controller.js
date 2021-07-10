"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actualizarPaciente = exports.eliminarPaciente = exports.getPacienteXHC = exports.nuevoPaciente = exports.getPacientes = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

var getPacientes = /*#__PURE__*/function () {
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
            return pool.request().query(_database.queries.getPaciente);

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

  return function getPacientes(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getPacientes = getPacientes;

var nuevoPaciente = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, pac_tipodoc, pac_nrodoc, pac_apellido, pac_nombre, pac_telefono1, pac_correo, pac_fechanacimiento, pac_idmutual, _req$body2, pac_direccion, pac_telefono2, pool;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, pac_tipodoc = _req$body.pac_tipodoc, pac_nrodoc = _req$body.pac_nrodoc, pac_apellido = _req$body.pac_apellido, pac_nombre = _req$body.pac_nombre, pac_telefono1 = _req$body.pac_telefono1, pac_correo = _req$body.pac_correo, pac_fechanacimiento = _req$body.pac_fechanacimiento, pac_idmutual = _req$body.pac_idmutual;
            _req$body2 = req.body, pac_direccion = _req$body2.pac_direccion, pac_telefono2 = _req$body2.pac_telefono2;

            if (!(pac_tipodoc == null || pac_nrodoc == null || pac_apellido == null || pac_nombre == null || pac_telefono1 == null || pac_correo == null || pac_fechanacimiento == null || pac_idmutual == null)) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              msg: 'Error, Faltan Datos de Completar'
            }));

          case 4:
            if (pac_telefono2 == null) {
              pac_telefono2 = '';
            }

            if (pac_direccion == null) {
              pac_direccion = '';
            }

            _context2.prev = 6;
            _context2.next = 9;
            return (0, _database.getConnection)();

          case 9:
            pool = _context2.sent;
            _context2.next = 12;
            return pool.request().input('pac_tipodoc', _database.sql.NVarChar, pac_tipodoc).input('pac_nrodoc', _database.sql.Numeric, pac_nrodoc).input('pac_apellido', _database.sql.NVarChar, pac_apellido).input('pac_nombre', _database.sql.NVarChar, pac_nombre).input('pac_fechanacimiento', _database.sql.DateTime, pac_fechanacimiento).input('pac_direccion', _database.sql.NVarChar, pac_direccion).input('pac_telefono1', _database.sql.NVarChar, pac_telefono1).input('pac_telefono2', _database.sql.NVarChar, pac_telefono2).input('pac_correo', _database.sql.NVarChar, pac_correo).input('pac_idmutual', _database.sql.Int, pac_idmutual).query(_database.queries.nuevoPaciente);

          case 12:
            res.json({
              pac_tipodoc: pac_tipodoc,
              pac_nrodoc: pac_nrodoc,
              pac_apellido: pac_apellido,
              pac_nombre: pac_nombre,
              pac_fechanacimiento: pac_fechanacimiento,
              pac_direccion: pac_direccion,
              pac_telefono1: pac_telefono1,
              pac_telefono2: pac_telefono2,
              pac_correo: pac_correo,
              pac_idmutual: pac_idmutual
            });
            _context2.next = 19;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](6);
            res.status(500);
            res.send(_context2.t0.message);

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[6, 15]]);
  }));

  return function nuevoPaciente(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.nuevoPaciente = nuevoPaciente;

var getPacienteXHC = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var pac_nrohc, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            pac_nrohc = req.params.pac_nrohc;
            _context3.next = 4;
            return (0, _database.getConnection)();

          case 4:
            pool = _context3.sent;
            _context3.next = 7;
            return pool.request().input('pac_nrohc', pac_nrohc).query(_database.queries.getPacienteXHC);

          case 7:
            result = _context3.sent;
            res.send(result.recordset[0]);
            _context3.next = 15;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            res.status(500);
            res.send(_context3.t0.message);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));

  return function getPacienteXHC(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getPacienteXHC = getPacienteXHC;

var eliminarPaciente = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var pac_nrohc, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            pac_nrohc = req.params.pac_nrohc;
            _context4.next = 4;
            return (0, _database.getConnection)();

          case 4:
            pool = _context4.sent;
            _context4.next = 7;
            return pool.request().input('pac_nrohc', pac_nrohc).query(_database.queries.borrarPaciente);

          case 7:
            result = _context4.sent;
            res.sendStatus(204);
            _context4.next = 15;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            res.status(500);
            res.send(_context4.t0.message);

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 11]]);
  }));

  return function eliminarPaciente(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.eliminarPaciente = eliminarPaciente;

var actualizarPaciente = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body3, pac_tipodoc, pac_nrodoc, pac_apellido, pac_nombre, pac_fechanacimiento, pac_telefono1, pac_correo, pac_idmutual, _req$body4, pac_direccion, pac_telefono2, pac_nrohc, pool;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body3 = req.body, pac_tipodoc = _req$body3.pac_tipodoc, pac_nrodoc = _req$body3.pac_nrodoc, pac_apellido = _req$body3.pac_apellido, pac_nombre = _req$body3.pac_nombre, pac_fechanacimiento = _req$body3.pac_fechanacimiento, pac_telefono1 = _req$body3.pac_telefono1, pac_correo = _req$body3.pac_correo, pac_idmutual = _req$body3.pac_idmutual;
            _req$body4 = req.body, pac_direccion = _req$body4.pac_direccion, pac_telefono2 = _req$body4.pac_telefono2;
            pac_nrohc = req.params.pac_nrohc;

            if (!(pac_tipodoc == null || pac_nrodoc == null || pac_apellido == null || pac_nombre == null || pac_fechanacimiento == null || pac_telefono1 == null || pac_correo == null || pac_idmutual == null)) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt("return", res.status(400).json({
              msg: "Error, faltan datos de completar"
            }));

          case 5:
            if (pac_telefono2 == null) {
              pac_telefono2 = '';
            }

            if (pac_direccion == null) {
              pac_direccion = '';
            }

            _context5.prev = 7;
            _context5.next = 10;
            return (0, _database.getConnection)();

          case 10:
            pool = _context5.sent;
            _context5.next = 13;
            return pool.request().input('pac_nrohc', _database.sql.Int, pac_nrohc).input('pac_tipodoc', _database.sql.NVarChar, pac_tipodoc).input('pac_nrodoc', _database.sql.Numeric, pac_nrodoc).input('pac_apellido', _database.sql.NVarChar, pac_apellido).input('pac_nombre', _database.sql.NVarChar, pac_nombre).input('pac_fechanacimiento', _database.sql.DateTime, pac_fechanacimiento).input('pac_direccion', _database.sql.NVarChar, pac_direccion).input('pac_telefono1', _database.sql.NVarChar, pac_telefono1).input('pac_telefono2', _database.sql.NVarChar, pac_telefono2).input('pac_correo', _database.sql.NVarChar, pac_correo).input('pac_idmutual', _database.sql.Int, pac_idmutual).query(_database.queries.actualizarPaciente);

          case 13:
            res.json({
              pac_tipodoc: pac_tipodoc,
              pac_nrodoc: pac_nrodoc,
              pac_apellido: pac_apellido,
              pac_nombre: pac_nombre,
              pac_fechanacimiento: pac_fechanacimiento,
              pac_direccion: pac_direccion,
              pac_telefono1: pac_telefono1,
              pac_telefono2: pac_telefono2,
              pac_correo: pac_correo,
              pac_idmutual: pac_idmutual
            });
            _context5.next = 20;
            break;

          case 16:
            _context5.prev = 16;
            _context5.t0 = _context5["catch"](7);
            res.status(500);
            res.send(_context5.t0.message);

          case 20:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[7, 16]]);
  }));

  return function actualizarPaciente(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.actualizarPaciente = actualizarPaciente;