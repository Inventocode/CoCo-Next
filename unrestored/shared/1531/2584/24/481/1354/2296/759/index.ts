var r;
var i = require("./2300");
var o = require("../../../1360/1357");
var a = require("./2301");
var s = require("./2302");
var c = require("./2303");
if ("undefined" !== typeof ArrayBuffer) {
  r = require("./2304");
}
var u = "undefined" !== typeof navigator && /Android/i.test(navigator.userAgent);
var l = "undefined" !== typeof navigator && /PhantomJS/i.test(navigator.userAgent);
var f = u || l;
exports.protocol = 3;
var d = exports.packets = {
  open: 0,
  close: 1,
  ping: 2,
  pong: 3,
  message: 4,
  upgrade: 5,
  noop: 6
};
var h = i(d);
var p = {
  type: "error",
  data: "parser error"
};
var _ = require("./2305");
function A(e, t, n) {
  for (var r = new Array(e.length), i = s(e.length, n), o = function (e, n, i) {
      t(n, function (t, n) {
        r[e] = n;
        i(t, r);
      });
    }, a = 0; a < e.length; a++) {
    o(a, e[a], i);
  }
}
exports.encodePacket = function (e, n, r, i) {
  if ("function" === typeof n) {
    i = n;
    n = !1;
  }
  if ("function" === typeof r) {
    i = r;
    r = null;
  }
  var o = void 0 === e.data ? void 0 : e.data.buffer || e.data;
  if ("undefined" !== typeof ArrayBuffer && o instanceof ArrayBuffer) {
    return function (e, n, r) {
      if (!n) {
        return exports.encodeBase64Packet(e, r);
      }
      var i = e.data;
      var o = new Uint8Array(i);
      var a = new Uint8Array(1 + i.byteLength);
      a[0] = d[e.type];
      for (var s = 0; s < o.length; s++) {
        a[s + 1] = o[s];
      }
      return r(a.buffer);
    }(e, n, i);
  }
  if ("undefined" !== typeof _ && o instanceof _) {
    return function (e, n, r) {
      if (!n) {
        return exports.encodeBase64Packet(e, r);
      }
      if (f) {
        return function (e, n, r) {
          if (!n) {
            return exports.encodeBase64Packet(e, r);
          }
          var i = new FileReader();
          i.onload = function () {
            exports.encodePacket({
              type: e.type,
              data: i.result
            }, n, !0, r);
          };
          return i.readAsArrayBuffer(e.data);
        }(e, n, r);
      }
      var i = new Uint8Array(1);
      i[0] = d[e.type];
      var o = new _([i.buffer, e.data]);
      return r(o);
    }(e, n, i);
  }
  if (o && o.base64) {
    return function (e, n) {
      var r = "b" + exports.packets[e.type] + e.data.data;
      return n(r);
    }(e, i);
  }
  var a = d[e.type];
  if (void 0 !== e.data) {
    a += r ? c.encode(String(e.data), {
      strict: !1
    }) : String(e.data);
  }
  return i("" + a);
};
exports.encodeBase64Packet = function (e, n) {
  var r;
  var i = "b" + exports.packets[e.type];
  if ("undefined" !== typeof _ && e.data instanceof _) {
    var o = new FileReader();
    o.onload = function () {
      var e = o.result.split(",")[1];
      n(i + e);
    };
    return o.readAsDataURL(e.data);
  }
  try {
    r = String.fromCharCode.apply(null, new Uint8Array(e.data));
  } catch (u) {
    for (var a = new Uint8Array(e.data), s = new Array(a.length), c = 0; c < a.length; c++) {
      s[c] = a[c];
    }
    r = String.fromCharCode.apply(null, s);
  }
  i += btoa(r);
  return n(i);
};
exports.decodePacket = function (e, n, r) {
  if (void 0 === e) {
    return p;
  }
  if ("string" === typeof e) {
    if ("b" === e.charAt(0)) {
      return exports.decodeBase64Packet(e.substr(1), n);
    }
    if (r && !1 === (e = function (e) {
      try {
        e = c.decode(e, {
          strict: !1
        });
      } catch (t) {
        return !1;
      }
      return e;
    }(e))) {
      return p;
    }
    var i = e.charAt(0);
    return Number(i) == i && h[i] ? e.length > 1 ? {
      type: h[i],
      data: e.substring(1)
    } : {
      type: h[i]
    } : p;
  }
  i = new Uint8Array(e)[0];
  var o = a(e, 1);
  if (_ && "blob" === n) {
    o = new _([o]);
  }
  return {
    type: h[i],
    data: o
  };
};
exports.decodeBase64Packet = function (e, t) {
  var n = h[e.charAt(0)];
  if (!r) {
    return {
      type: n,
      data: {
        base64: !0,
        data: e.substr(1)
      }
    };
  }
  var i = r.decode(e.substr(1));
  if ("blob" === t && _) {
    i = new _([i]);
  }
  return {
    type: n,
    data: i
  };
};
exports.encodePayload = function (e, n, r) {
  if ("function" === typeof n) {
    r = n;
    n = null;
  }
  var i = o(e);
  if (n && i) {
    return _ && !f ? exports.encodePayloadAsBlob(e, r) : exports.encodePayloadAsArrayBuffer(e, r);
  }
  if (!e.length) {
    return r("0:");
  }
  A(e, function (e, r) {
    exports.encodePacket(e, !!i && n, !1, function (e) {
      r(null, function (e) {
        return e.length + ":" + e;
      }(e));
    });
  }, function (e, t) {
    return r(t.join(""));
  });
};
exports.decodePayload = function (e, n, r) {
  if ("string" !== typeof e) {
    return exports.decodePayloadAsBinary(e, n, r);
  }
  var i;
  if ("function" === typeof n && (r = n, n = null), "" === e) {
    return r(p, 0, 1);
  }
  for (var o, a, s = "", c = 0, u = e.length; c < u; c++) {
    var l = e.charAt(c);
    if (":" === l) {
      if ("" === s || s != (o = Number(s))) {
        return r(p, 0, 1);
      }
      if (s != (a = e.substr(c + 1, o)).length) {
        return r(p, 0, 1);
      }
      if (a.length) {
        if (i = exports.decodePacket(a, n, !1), p.type === i.type && p.data === i.data) {
          return r(p, 0, 1);
        }
        if (!1 === r(i, c + o, u)) {
          return;
        }
      }
      c += o;
      s = "";
    } else {
      s += l;
    }
  }
  return "" !== s ? r(p, 0, 1) : void 0;
};
exports.encodePayloadAsArrayBuffer = function (e, n) {
  if (!e.length) {
    return n(new ArrayBuffer(0));
  }
  A(e, function (e, n) {
    exports.encodePacket(e, !0, !0, function (e) {
      return n(null, e);
    });
  }, function (e, t) {
    var r = t.reduce(function (e, t) {
      var n;
      return e + (n = "string" === typeof t ? t.length : t.byteLength).toString().length + n + 2;
    }, 0);
    var i = new Uint8Array(r);
    var o = 0;
    t.forEach(function (e) {
      var t = "string" === typeof e;
      var n = e;
      if (t) {
        for (var r = new Uint8Array(e.length), a = 0; a < e.length; a++) {
          r[a] = e.charCodeAt(a);
        }
        n = r.buffer;
      }
      i[o++] = t ? 0 : 1;
      var s = n.byteLength.toString();
      for (a = 0; a < s.length; a++) {
        i[o++] = parseInt(s[a]);
      }
      i[o++] = 255;
      for (r = new Uint8Array(n), a = 0; a < r.length; a++) {
        i[o++] = r[a];
      }
    });
    return n(i.buffer);
  });
};
exports.encodePayloadAsBlob = function (e, n) {
  A(e, function (e, n) {
    exports.encodePacket(e, !0, !0, function (e) {
      var t = new Uint8Array(1);
      if (t[0] = 1, "string" === typeof e) {
        for (var r = new Uint8Array(e.length), i = 0; i < e.length; i++) {
          r[i] = e.charCodeAt(i);
        }
        e = r.buffer;
        t[0] = 0;
      }
      var o = (e instanceof ArrayBuffer ? e.byteLength : e.size).toString();
      var a = new Uint8Array(o.length + 1);
      for (i = 0; i < o.length; i++) {
        a[i] = parseInt(o[i]);
      }
      if (a[o.length] = 255, _) {
        var s = new _([t.buffer, a.buffer, e]);
        n(null, s);
      }
    });
  }, function (e, t) {
    return n(new _(t));
  });
};
exports.decodePayloadAsBinary = function (e, n, r) {
  if ("function" === typeof n) {
    r = n;
    n = null;
  }
  for (var i = e, o = []; i.byteLength > 0;) {
    for (var s = new Uint8Array(i), c = 0 === s[0], u = "", l = 1; 255 !== s[l]; l++) {
      if (u.length > 310) {
        return r(p, 0, 1);
      }
      u += s[l];
    }
    i = a(i, 2 + u.length);
    u = parseInt(u);
    var f = a(i, 0, u);
    if (c) {
      try {
        f = String.fromCharCode.apply(null, new Uint8Array(f));
      } catch (_) {
        var d = new Uint8Array(f);
        f = "";
        for (l = 0; l < d.length; l++) {
          f += String.fromCharCode(d[l]);
        }
      }
    }
    o.push(f);
    i = a(i, u);
  }
  var h = o.length;
  o.forEach(function (e, i) {
    r(exports.decodePacket(e, n, !0), i, h);
  });
};