"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _users = _interopRequireDefault(require("../controllers/users"));

var router = new _express.Router();
router.post('/user', _users["default"].createUser);
router["delete"]('/user/:id', _users["default"].deleteUser);
router.put('/user/:id', _users["default"].updateUser);
router.get('/users', _users["default"].listUsers);
var _default = router;
exports["default"] = _default;