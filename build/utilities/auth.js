"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../../database/config/config"));

var env = process.env.NODE_ENV || 'development';
/**
 * Middleware checking if there's a token before a task is created
 * @param {object} request Request Object
 * @param {Object} response Response Object
 * @param {function} next Next middleware
 * @returns {function | object} Next function on the middleware chain or an error object
 */

var checkAuth = function checkAuth(request, response, next) {
  var token = request.headers['x-access-token'] || request.params.token;

  if (!token) {
    return response.status(401).json({
      success: false,
      message: 'Please sign up with your name'
    });
  }

  if (token) {
    _jsonwebtoken["default"].verify(token, _config["default"][env].secret, function (error, decoded) {
      if (error) {
        return response.status(401).json({
          success: false,
          message: 'Please sign in with your name'
        });
      }

      request.user_id = decoded.id;
      return next();
    });
  } else {
    return next();
  }
};

var _default = checkAuth;
exports["default"] = _default;