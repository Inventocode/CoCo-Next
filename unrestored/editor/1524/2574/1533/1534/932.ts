var r = require("./931");
var o = require("./814");
var i = r("keys");
module.exports = function (e) {
  return i[e] || (i[e] = o(e));
};