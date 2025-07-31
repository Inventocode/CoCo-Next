var r = require("../717");
var i = require("./2350");
var o = require("./2351");
var a = require("./2352");
var s = require("./2353");
var c = require("./1367");
var u = require("../716");
var l = require("./2354");
function f(e) {
  return unescape(encodeURIComponent(e)).length;
}
function h(e, t, n) {
  for (var r, i = []; null !== (r = e.exec(n));) {
    i.push({
      data: r[0],
      index: r.index,
      mode: t,
      length: r[0].length
    });
  }
  return i;
}
function d(e) {
  var t;
  var n;
  var i = h(c.NUMERIC, r.NUMERIC, e);
  var o = h(c.ALPHANUMERIC, r.ALPHANUMERIC, e);
  if (u.isKanjiModeEnabled()) {
    t = h(c.BYTE, r.BYTE, e);
    n = h(c.KANJI, r.KANJI, e);
  } else {
    t = h(c.BYTE_KANJI, r.BYTE, e);
    n = [];
  }
  return i.concat(o, t, n).sort(function (e, t) {
    return e.index - t.index;
  }).map(function (e) {
    return {
      data: e.data,
      mode: e.mode,
      length: e.length
    };
  });
}
function p(e, t) {
  switch (t) {
    case r.NUMERIC:
      return i.getBitsLength(e);
    case r.ALPHANUMERIC:
      return o.getBitsLength(e);
    case r.KANJI:
      return s.getBitsLength(e);
    case r.BYTE:
      return a.getBitsLength(e);
  }
}
function _(e, t) {
  var n;
  var c = r.getBestModeForData(e);
  if ((n = r.from(t, c)) !== r.BYTE && n.bit < c.bit) {
    throw new Error('"' + e + '" cannot be encoded with mode ' + r.toString(n) + ".\n Suggested mode is: " + r.toString(c));
  }
  switch (n !== r.KANJI || u.isKanjiModeEnabled() || (n = r.BYTE), n) {
    case r.NUMERIC:
      return new i(e);
    case r.ALPHANUMERIC:
      return new o(e);
    case r.KANJI:
      return new s(e);
    case r.BYTE:
      return new a(e);
  }
}
exports.fromArray = function (e) {
  return e.reduce(function (e, t) {
    if ("string" === typeof t) {
      e.push(_(t, null));
    } else {
      if (t.data) {
        e.push(_(t.data, t.mode));
      }
    }
    return e;
  }, []);
};
exports.fromString = function (e, n) {
  for (var i = function (e, t) {
      for (var n = {}, i = {
          start: {}
        }, o = ["start"], a = 0; a < e.length; a++) {
        for (var s = e[a], c = [], u = 0; u < s.length; u++) {
          var l = s[u];
          var f = "" + a + u;
          c.push(f);
          n[f] = {
            node: l,
            lastCount: 0
          };
          i[f] = {};
          for (var h = 0; h < o.length; h++) {
            var d = o[h];
            if (n[d] && n[d].node.mode === l.mode) {
              i[d][f] = p(n[d].lastCount + l.length, l.mode) - p(n[d].lastCount, l.mode);
              n[d].lastCount += l.length;
            } else {
              if (n[d]) {
                n[d].lastCount = l.length;
              }
              i[d][f] = p(l.length, l.mode) + 4 + r.getCharCountIndicator(l.mode, t);
            }
          }
        }
        o = c;
      }
      for (h = 0; h < o.length; h++) {
        i[o[h]].end = 0;
      }
      return {
        map: i,
        table: n
      };
    }(function (e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var i = e[n];
        switch (i.mode) {
          case r.NUMERIC:
            t.push([i, {
              data: i.data,
              mode: r.ALPHANUMERIC,
              length: i.length
            }, {
              data: i.data,
              mode: r.BYTE,
              length: i.length
            }]);
            break;
          case r.ALPHANUMERIC:
            t.push([i, {
              data: i.data,
              mode: r.BYTE,
              length: i.length
            }]);
            break;
          case r.KANJI:
            t.push([i, {
              data: i.data,
              mode: r.BYTE,
              length: f(i.data)
            }]);
            break;
          case r.BYTE:
            t.push([{
              data: i.data,
              mode: r.BYTE,
              length: f(i.data)
            }]);
        }
      }
      return t;
    }(d(e, u.isKanjiModeEnabled())), n), o = l.find_path(i.map, "start", "end"), a = [], s = 1; s < o.length - 1; s++) {
    a.push(i.table[o[s]].node);
  }
  return exports.fromArray(function (e) {
    return e.reduce(function (e, t) {
      var n = e.length - 1 >= 0 ? e[e.length - 1] : null;
      return n && n.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e);
    }, []);
  }(a));
};
exports.rawSplit = function (e) {
  return exports.fromArray(d(e, u.isKanjiModeEnabled()));
};