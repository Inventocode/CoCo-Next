var r = require("./1297/index").SourceMapGenerator;
var i = require("./1969/837");
var o = /(\r?\n)/;
var a = "$$$isSourceNode$$$";
function s(e, t, n, r, i) {
  this.children = [];
  this.sourceContents = {};
  this.line = null == e ? null : e;
  this.column = null == t ? null : t;
  this.source = null == n ? null : n;
  this.name = null == i ? null : i;
  this[a] = !0;
  if (null != r) {
    this.add(r);
  }
}
s.fromStringWithSourceMap = function (e, t, n) {
  var r = new s();
  var a = e.split(o);
  var c = 0;
  var u = function () {
    return e() + (e() || "");
    function e() {
      return c < a.length ? a[c++] : void 0;
    }
  };
  var l = 1;
  var f = 0;
  var h = null;
  t.eachMapping(function (e) {
    if (null !== h) {
      if (!(l < e.generatedLine)) {
        var t = (n = a[c] || "").substr(0, e.generatedColumn - f);
        a[c] = n.substr(e.generatedColumn - f);
        f = e.generatedColumn;
        d(h, t);
        return void (h = e);
      }
      d(h, u());
      l++;
      f = 0;
    }
    for (; l < e.generatedLine;) {
      r.add(u());
      l++;
    }
    if (f < e.generatedColumn) {
      var n = a[c] || "";
      r.add(n.substr(0, e.generatedColumn));
      a[c] = n.substr(e.generatedColumn);
      f = e.generatedColumn;
    }
    h = e;
  }, this);
  if (c < a.length) {
    if (h) {
      d(h, u());
    }
    r.add(a.splice(c).join(""));
  }
  t.sources.forEach(function (e) {
    var o = t.sourceContentFor(e);
    if (null != o) {
      if (null != n) {
        e = i.join(n, e);
      }
      r.setSourceContent(e, o);
    }
  });
  return r;
  function d(e, t) {
    if (null === e || void 0 === e.source) {
      r.add(t);
    } else {
      var o = n ? i.join(n, e.source) : e.source;
      r.add(new s(e.originalLine, e.originalColumn, o, t, e.name));
    }
  }
};
s.prototype.add = function (e) {
  if (Array.isArray(e)) {
    e.forEach(function (e) {
      this.add(e);
    }, this);
  } else {
    if (!e[a] && "string" !== typeof e) {
      throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
    }
    if (e) {
      this.children.push(e);
    }
  }
  return this;
};
s.prototype.prepend = function (e) {
  if (Array.isArray(e)) {
    for (var t = e.length - 1; t >= 0; t--) {
      this.prepend(e[t]);
    }
  } else {
    if (!e[a] && "string" !== typeof e) {
      throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
    }
    this.children.unshift(e);
  }
  return this;
};
s.prototype.walk = function (e) {
  for (var t, n = 0, r = this.children.length; n < r; n++) {
    if ((t = this.children[n])[a]) {
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
s.prototype.join = function (e) {
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
s.prototype.replaceRight = function (e, t) {
  var n = this.children[this.children.length - 1];
  if (n[a]) {
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
s.prototype.setSourceContent = function (e, t) {
  this.sourceContents[i.toSetString(e)] = t;
};
s.prototype.walkSourceContents = function (e) {
  for (var t = 0, n = this.children.length; t < n; t++) {
    if (this.children[t][a]) {
      this.children[t].walkSourceContents(e);
    }
  }
  var r = Object.keys(this.sourceContents);
  for (t = 0, n = r.length; t < n; t++) {
    e(i.fromSetString(r[t]), this.sourceContents[r[t]]);
  }
};
s.prototype.toString = function () {
  var e = "";
  this.walk(function (t) {
    e += t;
  });
  return e;
};
s.prototype.toStringWithSourceMap = function (e) {
  var t = {
    code: "",
    line: 1,
    column: 0
  };
  var n = new r(e);
  var i = !1;
  var o = null;
  var a = null;
  var s = null;
  var c = null;
  this.walk(function (e, r) {
    t.code += e;
    if (null !== r.source && null !== r.line && null !== r.column) {
      if (!(o === r.source && a === r.line && s === r.column && c === r.name)) {
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
      o = r.source;
      a = r.line;
      s = r.column;
      c = r.name;
      i = !0;
    } else {
      if (i) {
        n.addMapping({
          generated: {
            line: t.line,
            column: t.column
          }
        });
        o = null;
        i = !1;
      }
    }
    for (var u = 0, l = e.length; u < l; u++) {
      if (10 === e.charCodeAt(u)) {
        t.line++;
        t.column = 0;
        if (u + 1 === l) {
          o = null;
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
exports.SourceNode = s;