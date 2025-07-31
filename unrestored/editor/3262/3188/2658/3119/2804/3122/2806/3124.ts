var r = require("../../../../../../../1524/2574/616/570/index");
var i = r.Buffer;
function a(e, t) {
  for (var n in e) t[n] = e[n];
}
function s(e, t, n) {
  return i(e, t, n);
}
if (i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow) {
  module.exports = r;
} else {
  a(r, exports);
  exports.Buffer = s;
}
a(i, s);
s.from = function (e, t, n) {
  if ("number" === typeof e) {
    throw new TypeError("Argument must not be a number");
  }
  return i(e, t, n);
};
s.alloc = function (e, t, n) {
  if ("number" !== typeof e) {
    throw new TypeError("Argument must be a number");
  }
  var r = i(e);
  if (void 0 !== t) {
    if ("string" === typeof n) {
      r.fill(t, n);
    } else {
      r.fill(t);
    }
  } else {
    r.fill(0);
  }
  return r;
};
s.allocUnsafe = function (e) {
  if ("number" !== typeof e) {
    throw new TypeError("Argument must be a number");
  }
  return i(e);
};
s.allocUnsafeSlow = function (e) {
  if ("number" !== typeof e) {
    throw new TypeError("Argument must be a number");
  }
  return r.SlowBuffer(e);
};