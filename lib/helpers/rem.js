'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pxto = require('../internalHelpers/_pxto');

var _pxto2 = _interopRequireDefault(_pxto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert pixel value to rems. The default base value is 16px, but can be changed by passing a
 * second argument to the function.
 * @function
 * @param {string|number} pxval
 * @param {string|number} [base='16px']
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': rem('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${rem('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1rem'
 * }
 */
exports.default = (0, _pxto2.default)('rem');
module.exports = exports['default'];