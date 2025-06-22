"use strict";

/* unused harmony export validate_password */
/* unused harmony export is_connecting */
/* harmony export (immutable) */
export { get_api_prefix };
/* harmony export (immutable) */
export { get_coll_prefix };
/* harmony export (immutable) */
export { formatTimestamp };
/* unused harmony export is_win64 */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__cfg__ from "./cfg-dpNx";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__redux_utils__ from "./redux/utils-MrMw";
/* harmony reexport (binding) */
__webpack_require__.d(__webpack_exports__, "d", function () {
  return __WEBPACK_IMPORTED_MODULE_1__redux_utils__.a;
});
function validate_password(input) {
  return /^[0-9a-zA-Z]{6,}$/.test(input);
}
function is_connecting() {
  return navigator.onLine;
}
function get_api_prefix() {
  var _config = Object(__WEBPACK_IMPORTED_MODULE_0__cfg__.config)(),
    backendHost = _config.backendHost;
  return backendHost;
}
function get_coll_prefix() {
  var _config2 = Object(__WEBPACK_IMPORTED_MODULE_0__cfg__.config)(),
    oTServerHost = _config2.oTServerHost;
  return oTServerHost;
}
function formatTimestamp(timestamp) {
  var date = new Date(timestamp * 1000);
  var year = date.getFullYear() + '';
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hours = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var format_y = year;
  var format_m = month < 10 ? '0' + month : month;
  var format_d = day < 10 ? '0' + day : day;
  var format_h = hours < 10 ? '0' + hours : hours;
  var format_min = minute < 10 ? '0' + minute : minute;
  var format_s = hours < 10 ? '0' + second : second;
  return format_y + '-' + format_m + '-' + format_d + ' ' + format_h + ':' + format_min + ':' + format_s;
}
function is_win64() {
  var userAgent = navigator.userAgent.toLowerCase();
  return userAgent.includes('win64') || userAgent.includes('wow64') || navigator.platform === 'Win64';
}

/***/