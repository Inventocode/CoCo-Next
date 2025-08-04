var r = require("../717/index");
var i = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
function o(e) {
  this.mode = r.ALPHANUMERIC;
  this.data = e;
}
o.getBitsLength = function (e) {
  return 11 * Math.floor(e / 2) + e % 2 * 6;
};
o.prototype.getLength = function () {
  return this.data.length;
};
o.prototype.getBitsLength = function () {
  return o.getBitsLength(this.data.length);
};
o.prototype.write = function (e) {
  var t;
  for (t = 0; t + 2 <= this.data.length; t += 2) {
    var n = 45 * i.indexOf(this.data[t]);
    n += i.indexOf(this.data[t + 1]);
    e.put(n, 11);
  }
  if (this.data.length % 2) {
    e.put(i.indexOf(this.data[t]), 6);
  }
};
module.exports = o;