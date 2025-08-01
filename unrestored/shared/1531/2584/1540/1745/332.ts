var r = require("../1731/309");
var o = {}.hasOwnProperty;
module.exports = Object.hasOwn || function (e, t) {
  return o.call(r(e), t);
};