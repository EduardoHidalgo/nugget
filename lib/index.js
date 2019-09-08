"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** Fake button ?
 *  */
var MyButton = function MyButton() {
  return _react["default"].createElement(_core.Button, null, "Foobar");
};

exports.MyButton = MyButton;