var r = require("./1157/index");
module.exports = function (e, t) {
  var n = t ? r(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
};