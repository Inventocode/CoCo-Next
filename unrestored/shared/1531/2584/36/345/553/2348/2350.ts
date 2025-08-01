var r = require("./761");
function i(e) {
  if (!e || e < 1) {
    throw new Error("BitMatrix size must be defined and greater than 0");
  }
  this.size = e;
  this.data = r.alloc(e * e);
  this.reservedBit = r.alloc(e * e);
}
i.prototype.set = function (e, t, n, r) {
  var i = e * this.size + t;
  this.data[i] = n;
  if (r) {
    this.reservedBit[i] = !0;
  }
};
i.prototype.get = function (e, t) {
  return this.data[e * this.size + t];
};
i.prototype.xor = function (e, t, n) {
  this.data[e * this.size + t] ^= n;
};
i.prototype.isReserved = function (e, t) {
  return this.reservedBit[e * this.size + t];
};
module.exports = i;