var r = require("../../../1435/1772/1821/1094");
module.exports = function (e, t) {
  var n = t ? r(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
};