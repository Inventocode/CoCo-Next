var r = require("./932");
var o = require("./815");
var i = r("keys");
module.exports = function (e) {
  return i[e] || (i[e] = o(e));
};