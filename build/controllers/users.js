"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = _interopRequireDefault(require("../../database/models"));

var _jwtGenerator = _interopRequireDefault(require("../utilities/jwt-generator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Task Controller Class
 *
 */
var User =
/*#__PURE__*/
function () {
  function User() {
    _classCallCheck(this, User);
  }

  _createClass(User, null, [{
    key: "createUser",

    /**
     * Create a new user
     * @param {object} request Request Object
     * @param {object} response Response Object
     * @returns {object} User Object
     */
    value: function createUser(request, response) {
      var Name, newUser, token;
      return regeneratorRuntime.async(function createUser$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Name = request.body.Name;
              _context.prev = 1;
              _context.next = 4;
              return regeneratorRuntime.awrap(_models["default"].User.findOrCreate({
                where: {
                  Name: Name
                }
              }));

            case 4:
              newUser = _context.sent;
              token = (0, _jwtGenerator["default"])(newUser[0].dataValues.id, newUser[0].dataValues.Name);
              return _context.abrupt("return", response.status(201).json({
                success: true,
                message: "Hello Welcome to Bunny to-do app",
                newUser: newUser,
                token: token
              }));

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              return _context.abrupt("return", response.status(400).json({
                success: false,
                message: _context.t0.message
              }));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 9]]);
    }
  }, {
    key: "listUsers",
    value: function listUsers(request, response) {
      var users;
      return regeneratorRuntime.async(function listUsers$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return regeneratorRuntime.awrap(_models["default"].User.findAll());

            case 3:
              users = _context2.sent;
              return _context2.abrupt("return", response.status(200).json({
                success: true,
                message: 'Users successfully retrieved',
                users: users
              }));

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", response.status(400).json({
                success: false,
                message: _context2.t0.message
              }));

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
  }, {
    key: "deleteUser",
    value: function deleteUser(request, response) {
      var id, foundUser;
      return regeneratorRuntime.async(function deleteUser$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = request.params.id;
              _context3.prev = 1;
              _context3.next = 4;
              return regeneratorRuntime.awrap(_models["default"].User.findOne({
                where: {
                  id: id
                }
              }));

            case 4:
              foundUser = _context3.sent;

              if (foundUser) {
                _context3.next = 7;
                break;
              }

              return _context3.abrupt("return", response.status(404).json({
                message: 'User does not exist',
                success: false
              }));

            case 7:
              _context3.next = 9;
              return regeneratorRuntime.awrap(foundUser.destroy());

            case 9:
              return _context3.abrupt("return", response.status(202).json({
                success: true,
                message: 'User successfully deleted'
              }));

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](1);
              return _context3.abrupt("return", response.status(400).json({
                success: false,
                message: _context3.t0.message
              }));

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[1, 12]]);
    }
  }, {
    key: "updateUser",
    value: function updateUser(request, response) {
      var id, Name, foundUser, updatedUser;
      return regeneratorRuntime.async(function updateUser$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              id = request.params.id;
              Name = request.body.Name;
              _context4.prev = 2;
              _context4.next = 5;
              return regeneratorRuntime.awrap(_models["default"].User.findOne({
                where: {
                  id: id
                }
              }));

            case 5:
              foundUser = _context4.sent;

              if (foundUser) {
                _context4.next = 8;
                break;
              }

              return _context4.abrupt("return", response.status(404).json({
                message: 'User does not exist',
                success: false
              }));

            case 8:
              _context4.next = 10;
              return regeneratorRuntime.awrap(foundUser.update({
                Name: Name
              }, {
                where: {
                  id: id
                }
              }));

            case 10:
              updatedUser = _context4.sent;
              ;
              return _context4.abrupt("return", response.status(200).json({
                success: true,
                message: 'User successfully updated',
                updatedUser: updatedUser
              }));

            case 15:
              _context4.prev = 15;
              _context4.t0 = _context4["catch"](2);
              return _context4.abrupt("return", response.status(400).json({
                success: false,
                message: _context4.t0.message
              }));

            case 18:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[2, 15]]);
    }
  }]);

  return User;
}();

var _default = User;
exports["default"] = _default;