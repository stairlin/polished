'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * The backgroundImages shorthand accepts any number of backgroundImage values as parameters for creating a single background statement..
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...backgroundImages('url("/image/background.jpg")', 'linear-gradient(red, green)')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${...backgroundImages('url("/image/background.jpg")', 'linear-gradient(red, green)')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'background-image': 'url("/image/background.jpg"), linear-gradient(red, green)'
 * }
 */

function backgroundImages() {
  for (var _len = arguments.length, properties = Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  return {
    'background-image': properties.join(', ')
  };
}

exports.default = backgroundImages;
module.exports = exports['default'];