var r = require("./1794");
var i = function () {
  var e = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
module.exports = function (e) {
  return !!i && i in e;
};