'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _parseToRgb = require('./parseToRgb');

var _parseToRgb2 = _interopRequireDefault(_parseToRgb);

var _toColorString = require('./toColorString');

var _toColorString2 = _interopRequireDefault(_toColorString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Inverts the red, green and blue values of a color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: invert(0.2, '#CCCD64'),
 *   background: invert(0.2, 'rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${invert(0.2, '#CCCD64')};
 *   background: ${invert(0.2, 'rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#33329b";
 *   background: "rgba(154,155,50,0.7)";
 * }
 */
function invert(color) {
  // parse color string to hsl
  var value = (0, _parseToRgb2.default)(color);
  return (0, _toColorString2.default)(_extends({}, value, {
    red: 255 - value.red,
    green: 255 - value.green,
    blue: 255 - value.blue
  }));
}

exports.default = invert;
module.exports = exports['default'];