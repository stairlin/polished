'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _rgba = require('./rgba');

var _rgba2 = _interopRequireDefault(_rgba);

var _parseToRgb = require('./parseToRgb');

var _parseToRgb2 = _interopRequireDefault(_parseToRgb);

var _guard = require('../internalHelpers/_guard');

var _guard2 = _interopRequireDefault(_guard);

var _curry = require('../internalHelpers/_curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Increases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: opacify(0.1, '#fff');
 *   background: opacify(0.2, 'hsla(0, 0%, 100%, 0.5)'),
 *   background: opacify(0.5, 'rgba(255, 0, 0, 0.2)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${opacify(0.1, '#fff')};
 *   background: ${opacify(0.2, 'hsla(0, 0%, 100%, 0.5)')},
 *   background: ${opacify(0.5, 'rgba(255, 0, 0, 0.2)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#fff";
 *   background: "rgba(255,255,255,0.7)";
 *   background: "rgba(255,0,0,0.7)";
 * }
 */
function opacify(amount, color) {
  var parsedColor = (0, _parseToRgb2.default)(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends({}, parsedColor, {
    alpha: (0, _guard2.default)(0, 1, alpha + amount)
  });
  return (0, _rgba2.default)(colorWithAlpha);
}

exports.default = (0, _curry2.default)(opacify);
module.exports = exports['default'];