"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tasks = _interopRequireDefault(require("../controllers/tasks"));

var _auth = _interopRequireDefault(require("../utilities/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = new _express.Router();
router.post('/task', _auth["default"], _tasks["default"].createTasks);
router.get('/tasks/:id', _auth["default"], _tasks["default"].listUserTasks);
router.put('/tasks/:id', _auth["default"], _tasks["default"].updateTask);
var _default = router;
exports["default"] = _default;