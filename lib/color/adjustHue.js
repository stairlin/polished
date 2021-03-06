'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _parseToHsl = require('./parseToHsl');

var _parseToHsl2 = _interopRequireDefault(_parseToHsl);

var _toColorString = require('./toColorString');

var _toColorString2 = _interopRequireDefault(_toColorString);

var _curry = require('../internalHelpers/_curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Changes the hue of the color. Hue is a number between 0 to 360. The first
 * argument for adjustHue is the amount of degrees the color is rotated along
 * the color wheel.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: adjustHue('#448'),
 *   background: adjustHue('rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${adjustHue('#448')};
 *   background: ${adjustHue('rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#5b4488";
 *   background: "rgba(136,100,205,0.7)";
 * }
 */
function adjustHue(degree, color) {
  var hslColor = (0, _parseToHsl2.default)(color);
  return (0, _toColorString2.default)(_extends({}, hslColor, {
    hue: (hslColor.hue + degree) % 360
  }));
}

exports.default = (0, _curry2.default)(adjustHue);
module.exports = exports['default'];