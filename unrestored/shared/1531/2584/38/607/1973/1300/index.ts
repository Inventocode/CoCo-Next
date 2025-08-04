var r = require("../1976/1301/index");
var i = require("../1979/838");
var o = require("../1976/1302").ArraySet;
var a = require("./1975").MappingList;
function s(e) {
  if (!e) {
    e = {};
  }
  this._file = i.getArg(e, "file", null);
  this._sourceRoot = i.getArg(e, "sourceRoot", null);
  this._skipValidation = i.getArg(e, "skipValidation", !1);
  this._sources = new o();
  this._names = new o();
  this._mappings = new a();
  this._sourcesContents = null;
}
s.prototype._version = 3;
s.fromSourceMap = function (e) {
  var t = e.sourceRoot;
  var n = new s({
    file: e.file,
    sourceRoot: t
  });
  e.eachMapping(function (e) {
    var r = {
      generated: {
        line: e.generatedLine,
        column: e.generatedColumn
      }
    };
    if (null != e.source) {
      r.source = e.source;
      if (null != t) {
        r.source = i.relative(t, r.source);
      }
      r.original = {
        line: e.originalLine,
        column: e.originalColumn
      };
      if (null != e.name) {
        r.name = e.name;
      }
    }
    n.addMapping(r);
  });
  e.sources.forEach(function (r) {
    var o = r;
    if (null !== t) {
      o = i.relative(t, r);
    }
    if (!n._sources.has(o)) {
      n._sources.add(o);
    }
    var a = e.sourceContentFor(r);
    if (null != a) {
      n.setSourceContent(r, a);
    }
  });
  return n;
};
s.prototype.addMapping = function (e) {
  var t = i.getArg(e, "generated");
  var n = i.getArg(e, "original", null);
  var r = i.getArg(e, "source", null);
  var o = i.getArg(e, "name", null);
  if (!this._skipValidation) {
    this._validateMapping(t, n, r, o);
  }
  if (null != r) {
    r = String(r);
    if (!this._sources.has(r)) {
      this._sources.add(r);
    }
  }
  if (null != o) {
    o = String(o);
    if (!this._names.has(o)) {
      this._names.add(o);
    }
  }
  this._mappings.add({
    generatedLine: t.line,
    generatedColumn: t.column,
    originalLine: null != n && n.line,
    originalColumn: null != n && n.column,
    source: r,
    name: o
  });
};
s.prototype.setSourceContent = function (e, t) {
  var n = e;
  if (null != this._sourceRoot) {
    n = i.relative(this._sourceRoot, n);
  }
  if (null != t) {
    if (!this._sourcesContents) {
      this._sourcesContents = Object.create(null);
    }
    this._sourcesContents[i.toSetString(n)] = t;
  } else {
    if (this._sourcesContents) {
      delete this._sourcesContents[i.toSetString(n)];
      if (0 === Object.keys(this._sourcesContents).length) {
        this._sourcesContents = null;
      }
    }
  }
};
s.prototype.applySourceMap = function (e, t, n) {
  var r = t;
  if (null == t) {
    if (null == e.file) {
      throw new Error("SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's \"file\" property. Both were omitted.");
    }
    r = e.file;
  }
  var a = this._sourceRoot;
  if (null != a) {
    r = i.relative(a, r);
  }
  var s = new o();
  var c = new o();
  this._mappings.unsortedForEach(function (t) {
    if (t.source === r && null != t.originalLine) {
      var o = e.originalPositionFor({
        line: t.originalLine,
        column: t.originalColumn
      });
      if (null != o.source) {
        t.source = o.source;
        if (null != n) {
          t.source = i.join(n, t.source);
        }
        if (null != a) {
          t.source = i.relative(a, t.source);
        }
        t.originalLine = o.line;
        t.originalColumn = o.column;
        if (null != o.name) {
          t.name = o.name;
        }
      }
    }
    var u = t.source;
    if (!(null == u || s.has(u))) {
      s.add(u);
    }
    var l = t.name;
    if (!(null == l || c.has(l))) {
      c.add(l);
    }
  }, this);
  this._sources = s;
  this._names = c;
  e.sources.forEach(function (t) {
    var r = e.sourceContentFor(t);
    if (null != r) {
      if (null != n) {
        t = i.join(n, t);
      }
      if (null != a) {
        t = i.relative(a, t);
      }
      this.setSourceContent(t, r);
    }
  }, this);
};
s.prototype._validateMapping = function (e, t, n, r) {
  if (t && "number" !== typeof t.line && "number" !== typeof t.column) {
    throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
  }
  if ((!(e && "line" in e && "column" in e && e.line > 0 && e.column >= 0) || t || n || r) && !(e && "line" in e && "column" in e && t && "line" in t && "column" in t && e.line > 0 && e.column >= 0 && t.line > 0 && t.column >= 0 && n)) {
    throw new Error("Invalid mapping: " + JSON.stringify({
      generated: e,
      source: n,
      original: t,
      name: r
    }));
  }
};
s.prototype._serializeMappings = function () {
  for (var e, t, n, o, a = 0, s = 1, c = 0, u = 0, l = 0, f = 0, d = "", h = this._mappings.toArray(), p = 0, _ = h.length; p < _; p++) {
    e = "";
    if ((t = h[p]).generatedLine !== s) {
      for (a = 0; t.generatedLine !== s;) {
        e += ";";
        s++;
      }
    } else if (p > 0) {
      if (!i.compareByGeneratedPositionsInflated(t, h[p - 1])) {
        continue;
      }
      e += ",";
    }
    e += r.encode(t.generatedColumn - a);
    a = t.generatedColumn;
    if (null != t.source) {
      o = this._sources.indexOf(t.source);
      e += r.encode(o - f);
      f = o;
      e += r.encode(t.originalLine - 1 - u);
      u = t.originalLine - 1;
      e += r.encode(t.originalColumn - c);
      c = t.originalColumn;
      if (null != t.name) {
        n = this._names.indexOf(t.name);
        e += r.encode(n - l);
        l = n;
      }
    }
    d += e;
  }
  return d;
};
s.prototype._generateSourcesContent = function (e, t) {
  return e.map(function (e) {
    if (!this._sourcesContents) {
      return null;
    }
    if (null != t) {
      e = i.relative(t, e);
    }
    var n = i.toSetString(e);
    return Object.prototype.hasOwnProperty.call(this._sourcesContents, n) ? this._sourcesContents[n] : null;
  }, this);
};
s.prototype.toJSON = function () {
  var e = {
    version: this._version,
    sources: this._sources.toArray(),
    names: this._names.toArray(),
    mappings: this._serializeMappings()
  };
  if (null != this._file) {
    e.file = this._file;
  }
  if (null != this._sourceRoot) {
    e.sourceRoot = this._sourceRoot;
  }
  if (this._sourcesContents) {
    e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot);
  }
  return e;
};
s.prototype.toString = function () {
  return JSON.stringify(this.toJSON());
};
exports.SourceMapGenerator = s;