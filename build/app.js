"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _config = _interopRequireDefault(require("../database/config/config"));

var _routes = _interopRequireDefault(require("./routes"));

_dotenv["default"].config(); // Set up express app


var app = (0, _express["default"])(); // Log incoming requests

app.use((0, _morgan["default"])('dev')); // Parse the body of incoming requests

app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use('/api/v1', _routes["default"]);
app.get('/', function (request, response) {
  var welcome = "Welcome to Bunny TO-DO API Version 1.0";
  response.status(200).send(welcome);
});
var env = process.env.NODE_ENV || 'development';
var port = _config["default"][env].PORT; // Start server

app.listen(port, function () {
  console.log("Express server listening on ".concat(port));
});
var _default = app;
exports["default"] = _default;