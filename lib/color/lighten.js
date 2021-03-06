'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _parseToHsl = require('./parseToHsl');

var _parseToHsl2 = _interopRequireDefault(_parseToHsl);

var _toColorString = require('./toColorString');

var _toColorString2 = _interopRequireDefault(_toColorString);

var _guard = require('../internalHelpers/_guard');

var _guard2 = _interopRequireDefault(_guard);

var _curry = require('../internalHelpers/_curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a string value for the lightened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: lighten(0.2, '#CCCD64'),
 *   background: lighten(0.2, 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${lighten(0.2, '#FFCD64')};
 *   background: ${lighten(0.2, 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e5e6b1";
 *   background: "rgba(229,230,177,0.7)";
 * }
 */
function lighten(amount, color) {
  var hslColor = (0, _parseToHsl2.default)(color);
  return (0, _toColorString2.default)(_extends({}, hslColor, {
    lightness: (0, _guard2.default)(0, 1, hslColor.lightness + amount)
  }));
}

exports.default = (0, _curry2.default)(lighten);
module.exports = exports['default'];