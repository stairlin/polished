'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mix = require('./mix');

var _mix2 = _interopRequireDefault(_mix);

var _curry = require('../internalHelpers/_curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Tints a color by mixing it with white. Compared to `lighten` it can produce
 * hue shifts, wheres `lighten` manipulates the luminance channel and therefor
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: tint(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${tint(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#bfbfff";
 * }
 */

function tint(percentage, color) {
  if (typeof percentage !== 'number' || percentage > 1 || percentage < -1) throw new Error('Passed an incorrect argument to tint, please pass a percentage less than or equal to 1 and larger than or equal to -1.');
  return (0, _mix2.default)(percentage, color, 'rgb(255, 255, 255)');
}

exports.default = (0, _curry2.default)(tint);
module.exports = exports['default'];