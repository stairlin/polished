'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hslToRgb = require('../internalHelpers/_hslToRgb');

var _hslToRgb2 = _interopRequireDefault(_hslToRgb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hexRegex = /^#[a-fA-F0-9]{6}$/;

var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var rgbRegex = /^rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)$/;
var rgbaRegex = /^rgba\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3}), ?([-+]?[0-9]*[.]?[0-9]+)\)$/;
var hslRegex = /^hsl\((\d{1,3}), ?(\d{1,3})%, ?(\d{1,3})%\)$/;
var hslaRegex = /^hsla\((\d{1,3}), ?(\d{1,3})%, ?(\d{1,3})%, ?([-+]?[0-9]*[.]?[0-9]+)\)$/;

/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = 'rgb(255, 0, 0)';
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = 'hsla(210, 10%, 40%, 0.75)';
 */
function parseToRgb(color) {
  if (typeof color !== 'string') throw new Error('Passed an incorrect argument to a color function, please pass a string representation of a color.');
  if (color.match(hexRegex)) {
    return {
      red: parseInt('' + color[1] + color[2], 16),
      green: parseInt('' + color[3] + color[4], 16),
      blue: parseInt('' + color[5] + color[6], 16)
    };
  }
  if (color.match(reducedHexRegex)) {
    return {
      red: parseInt('' + color[1] + color[1], 16),
      green: parseInt('' + color[2] + color[2], 16),
      blue: parseInt('' + color[3] + color[3], 16)
    };
  }
  var rgbMatched = rgbRegex.exec(color);
  if (rgbMatched) {
    return {
      red: parseInt('' + rgbMatched[1], 10),
      green: parseInt('' + rgbMatched[2], 10),
      blue: parseInt('' + rgbMatched[3], 10)
    };
  }
  var rgbaMatched = rgbaRegex.exec(color);
  if (rgbaMatched) {
    return {
      red: parseInt('' + rgbaMatched[1], 10),
      green: parseInt('' + rgbaMatched[2], 10),
      blue: parseInt('' + rgbaMatched[3], 10),
      alpha: parseFloat('' + rgbaMatched[4], 10)
    };
  }
  var hslMatched = hslRegex.exec(color);
  if (hslMatched) {
    var hue = parseInt('' + hslMatched[1], 10);
    var saturation = parseInt('' + hslMatched[2], 10) / 100;
    var lightness = parseInt('' + hslMatched[3], 10) / 100;
    var rgbColorString = 'rgb(' + (0, _hslToRgb2.default)(hue, saturation, lightness) + ')';
    var hslRgbMatched = rgbRegex.exec(rgbColorString);
    return {
      red: parseInt('' + hslRgbMatched[1], 10),
      green: parseInt('' + hslRgbMatched[2], 10),
      blue: parseInt('' + hslRgbMatched[3], 10)
    };
  }
  var hslaMatched = hslaRegex.exec(color);
  if (hslaMatched) {
    var _hue = parseInt('' + hslaMatched[1], 10);
    var _saturation = parseInt('' + hslaMatched[2], 10) / 100;
    var _lightness = parseInt('' + hslaMatched[3], 10) / 100;
    var _rgbColorString = 'rgb(' + (0, _hslToRgb2.default)(_hue, _saturation, _lightness) + ')';
    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);
    return {
      red: parseInt('' + _hslRgbMatched[1], 10),
      green: parseInt('' + _hslRgbMatched[2], 10),
      blue: parseInt('' + _hslRgbMatched[3], 10),
      alpha: parseFloat('' + hslaMatched[4], 10)
    };
  }
  throw new Error('Couldn\'t parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.');
}

exports.default = parseToRgb;
module.exports = exports['default'];