"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = _interopRequireDefault(require("../../database/models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Task Controller Class
 *
 */
var Task =
/*#__PURE__*/
function () {
  function Task() {
    _classCallCheck(this, Task);
  }

  _createClass(Task, null, [{
    key: "createTasks",

    /**
     * Create a new task
     * @param {object} request Request Object
     * @param {object} response Response Object
     * @returns {object} Task Object
     */
    value: function createTasks(request, response) {
      var newTask;
      return regeneratorRuntime.async(function createTasks$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(_models["default"].User_Tasks.create({
                description: request.body.description,
                user_id: request.user_id
              }));

            case 3:
              newTask = _context.sent;
              return _context.abrupt("return", response.status(201).json({
                success: true,
                message: 'Task created successfully',
                newTask: newTask
              }));

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", response.status(400).json({
                success: false,
                message: _context.t0.message
              }));

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
  }, {
    key: "listUserTasks",
    value: function listUserTasks(request, response) {
      var foundTasks;
      return regeneratorRuntime.async(function listUserTasks$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return regeneratorRuntime.awrap(_models["default"].User_Tasks.findAll({
                where: {
                  user_id: request.params.id
                }
              }));

            case 3:
              foundTasks = _context2.sent;

              if (foundTasks) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt("return", response.status(404).json({
                message: 'No tasks exists for this user',
                success: false
              }));

            case 6:
              return _context2.abrupt("return", response.status(200).json({
                success: true,
                message: 'Tasks successfully retrieved',
                foundTasks: foundTasks
              }));

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", response.status(400).json({
                success: false,
                message: _context2.t0.message
              }));

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 9]]);
    }
  }, {
    key: "updateTask",
    value: function updateTask(request, response) {
      var id, description, foundTask, updatedTask;
      return regeneratorRuntime.async(function updateTask$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = request.params.id;
              description = request.body.description;
              _context3.prev = 2;
              _context3.next = 5;
              return regeneratorRuntime.awrap(_models["default"].User_Tasks.findOne({
                where: {
                  id: id
                }
              }));

            case 5:
              foundTask = _context3.sent;

              if (foundTask) {
                _context3.next = 8;
                break;
              }

              return _context3.abrupt("return", response.status(404).json({
                message: 'Task does not exist',
                success: false
              }));

            case 8:
              _context3.next = 10;
              return regeneratorRuntime.awrap(foundTask.update({
                description: description
              }, {
                where: {
                  id: id
                }
              }));

            case 10:
              updatedTask = _context3.sent;
              ;
              return _context3.abrupt("return", response.status(200).json({
                success: true,
                message: 'Task successfully updated',
                updatedTask: updatedTask
              }));

            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3["catch"](2);
              return _context3.abrupt("return", response.status(400).json({
                success: false,
                message: _context3.t0.message
              }));

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[2, 15]]);
    }
  }]);

  return Task;
}();

var _default = Task;
exports["default"] = _default;