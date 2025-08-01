(function (t) {
  module.exports = function (e) {
    return n && t.isBuffer(e) || r && (e instanceof ArrayBuffer || function (e) {
      return "function" === typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer;
    }(e));
  };
  var n = "function" === typeof t && "function" === typeof t.isBuffer;
  var r = "function" === typeof ArrayBuffer;
}).call(this, require("../../../616/570/index").Buffer);