var r = require("./2745/index").SourceMapGenerator;
import * as i from "./2745/2662";
var a = /(\r?\n)/;
var s = "$$$isSourceNode$$$";
function o(e, t, n, r, i) {
  this.children = [];
  this.sourceContents = {};
  this.line = null == e ? null : e;
  this.column = null == t ? null : t;
  this.source = null == n ? null : n;
  this.name = null == i ? null : i;
  this[s] = !0;
  if (null != r) {
    this.add(r);
  }
}
o.fromStringWithSourceMap = function (e, t, n) {
  var r = new o();
  var s = e.split(a);
  var l = 0;
  var u = function () {
    return e() + (e() || "");
    function e() {
      return l < s.length ? s[l++] : void 0;
    }
  };
  var c = 1;
  var p = 0;
  var f = null;
  t.eachMapping(function (e) {
    if (null !== f) {
      if (!(c < e.generatedLine)) {
        var t = (n = s[l]).substr(0, e.generatedColumn - p);
        s[l] = n.substr(e.generatedColumn - p);
        p = e.generatedColumn;
        d(f, t);
        return void (f = e);
      }
      d(f, u());
      c++;
      p = 0;
    }
    for (; c < e.generatedLine;) {
      r.add(u());
      c++;
    }
    if (p < e.generatedColumn) {
      var n = s[l];
      r.add(n.substr(0, e.generatedColumn));
      s[l] = n.substr(e.generatedColumn);
      p = e.generatedColumn;
    }
    f = e;
  }, this);
  if (l < s.length) {
    if (f) {
      d(f, u());
    }
    r.add(s.splice(l).join(""));
  }
  t.sources.forEach(function (e) {
    var a = t.sourceContentFor(e);
    if (null != a) {
      if (null != n) {
        e = i.join(n, e);
      }
      r.setSourceContent(e, a);
    }
  });
  return r;
  function d(e, t) {
    if (null === e || void 0 === e.source) {
      r.add(t);
    } else {
      var a = n ? i.join(n, e.source) : e.source;
      r.add(new o(e.originalLine, e.originalColumn, a, t, e.name));
    }
  }
};
o.prototype.add = function (e) {
  if (Array.isArray(e)) {
    e.forEach(function (e) {
      this.add(e);
    }, this);
  } else {
    if (!e[s] && "string" !== typeof e) {
      throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
    }
    if (e) {
      this.children.push(e);
    }
  }
  return this;
};
o.prototype.prepend = function (e) {
  if (Array.isArray(e)) {
    for (var t = e.length - 1; t >= 0; t--) {
      this.prepend(e[t]);
    }
  } else {
    if (!e[s] && "string" !== typeof e) {
      throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
    }
    this.children.unshift(e);
  }
  return this;
};
o.prototype.walk = function (e) {
  for (var t, n = 0, r = this.children.length; n < r; n++) {
    if ((t = this.children[n])[s]) {
      t.walk(e);
    } else {
      if ("" !== t) {
        e(t, {
          source: this.source,
          line: this.line,
          column: this.column,
          name: this.name
        });
      }
    }
  }
};
o.prototype.join = function (e) {
  var t;
  var n;
  var r = this.children.length;
  if (r > 0) {
    for (t = [], n = 0; n < r - 1; n++) {
      t.push(this.children[n]);
      t.push(e);
    }
    t.push(this.children[n]);
    this.children = t;
  }
  return this;
};
o.prototype.replaceRight = function (e, t) {
  var n = this.children[this.children.length - 1];
  if (n[s]) {
    n.replaceRight(e, t);
  } else {
    if ("string" === typeof n) {
      this.children[this.children.length - 1] = n.replace(e, t);
    } else {
      this.children.push("".replace(e, t));
    }
  }
  return this;
};
o.prototype.setSourceContent = function (e, t) {
  this.sourceContents[i.toSetString(e)] = t;
};
o.prototype.walkSourceContents = function (e) {
  for (var t = 0, n = this.children.length; t < n; t++) {
    if (this.children[t][s]) {
      this.children[t].walkSourceContents(e);
    }
  }
  var r = Object.keys(this.sourceContents);
  for (t = 0, n = r.length; t < n; t++) {
    e(i.fromSetString(r[t]), this.sourceContents[r[t]]);
  }
};
o.prototype.toString = function () {
  var e = "";
  this.walk(function (t) {
    e += t;
  });
  return e;
};
o.prototype.toStringWithSourceMap = function (e) {
  var t = {
    code: "",
    line: 1,
    column: 0
  };
  var n = new r(e);
  var i = !1;
  var a = null;
  var s = null;
  var o = null;
  var l = null;
  this.walk(function (e, r) {
    t.code += e;
    if (null !== r.source && null !== r.line && null !== r.column) {
      if (!(a === r.source && s === r.line && o === r.column && l === r.name)) {
        n.addMapping({
          source: r.source,
          original: {
            line: r.line,
            column: r.column
          },
          generated: {
            line: t.line,
            column: t.column
          },
          name: r.name
        });
      }
      a = r.source;
      s = r.line;
      o = r.column;
      l = r.name;
      i = !0;
    } else {
      if (i) {
        n.addMapping({
          generated: {
            line: t.line,
            column: t.column
          }
        });
        a = null;
        i = !1;
      }
    }
    for (var u = 0, c = e.length; u < c; u++) {
      if (10 === e.charCodeAt(u)) {
        t.line++;
        t.column = 0;
        if (u + 1 === c) {
          a = null;
          i = !1;
        } else {
          if (i) {
            n.addMapping({
              source: r.source,
              original: {
                line: r.line,
                column: r.column
              },
              generated: {
                line: t.line,
                column: t.column
              },
              name: r.name
            });
          }
        }
      } else {
        t.column++;
      }
    }
  });
  this.walkSourceContents(function (e, t) {
    n.setSourceContent(e, t);
  });
  return {
    code: t.code,
    map: n
  };
};
export { o as SourceNode };