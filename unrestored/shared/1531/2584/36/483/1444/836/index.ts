var r = require("./1086/index");
var i = require("./1266");
module.exports = function (e) {
  return null != e && i(e.length) && !r(e);
};