var r = require("./1085/index");
var i = require("./1263");
module.exports = function (e) {
  return null != e && i(e.length) && !r(e);
};