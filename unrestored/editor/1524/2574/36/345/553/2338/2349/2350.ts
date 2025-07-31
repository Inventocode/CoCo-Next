var r = require("../717");
function i(e) {
  this.mode = r.NUMERIC;
  this.data = e.toString();
}
i.getBitsLength = function (e) {
  return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
};
i.prototype.getLength = function () {
  return this.data.length;
};
i.prototype.getBitsLength = function () {
  return i.getBitsLength(this.data.length);
};
i.prototype.write = function (e) {
  var t;
  var n;
  var r;
  for (t = 0; t + 3 <= this.data.length; t += 3) {
    n = this.data.substr(t, 3);
    r = parseInt(n, 10);
    e.put(r, 10);
  }
  var i = this.data.length - t;
  if (i > 0) {
    n = this.data.substr(t);
    r = parseInt(n, 10);
    e.put(r, 3 * i + 1);
  }
};
module.exports = i;