var r = require("../717");
var i = require("../716");
function o(e) {
  this.mode = r.KANJI;
  this.data = e;
}
o.getBitsLength = function (e) {
  return 13 * e;
};
o.prototype.getLength = function () {
  return this.data.length;
};
o.prototype.getBitsLength = function () {
  return o.getBitsLength(this.data.length);
};
o.prototype.write = function (e) {
  var t;
  for (t = 0; t < this.data.length; t++) {
    var n = i.toSJIS(this.data[t]);
    if (n >= 33088 && n <= 40956) {
      n -= 33088;
    } else {
      if (!(n >= 57408 && n <= 60351)) {
        throw new Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
      }
      n -= 49472;
    }
    n = 192 * (n >>> 8 & 255) + (255 & n);
    e.put(n, 13);
  }
};
module.exports = o;