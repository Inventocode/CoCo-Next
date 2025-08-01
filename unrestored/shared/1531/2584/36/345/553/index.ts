var r = require("./2347");
var i = require("./2348/index");
var o = require("./2365");
var a = require("./2366/index");
function s(e, t, n, o, a) {
  var s = [].slice.call(arguments, 1);
  var c = s.length;
  var u = "function" === typeof s[c - 1];
  if (!u && !r()) {
    throw new Error("Callback required as last argument");
  }
  if (!u) {
    if (c < 1) {
      throw new Error("Too few arguments provided");
    }
    if (1 === c) {
      n = t;
      t = o = void 0;
    } else {
      if (!(2 !== c || t.getContext)) {
        o = n;
        n = t;
        t = void 0;
      }
    }
    return new Promise(function (r, a) {
      try {
        var s = i.create(n, o);
        r(e(s, t, o));
      } catch (c) {
        a(c);
      }
    });
  }
  if (c < 2) {
    throw new Error("Too few arguments provided");
  }
  if (2 === c) {
    a = n;
    n = t;
    t = o = void 0;
  } else {
    if (3 === c) {
      if (t.getContext && "undefined" === typeof a) {
        a = o;
        o = void 0;
      } else {
        a = o;
        o = n;
        n = t;
        t = void 0;
      }
    }
  }
  try {
    var l = i.create(n, o);
    a(null, e(l, t, o));
  } catch (f) {
    a(f);
  }
}
exports.create = i.create;
exports.toCanvas = s.bind(null, o.render);
exports.toDataURL = s.bind(null, o.renderToDataURL);
exports.toString = s.bind(null, function (e, t, n) {
  return a.render(e, n);
});