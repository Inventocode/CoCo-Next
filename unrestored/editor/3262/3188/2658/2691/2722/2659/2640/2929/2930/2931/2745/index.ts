import * as r from "./2746/index";
import * as i from "./2662";
var a = require("./2747").ArraySet;
var s = require("./2933").MappingList;
function o(e) {
  if (!e) {
    e = {};
  }
  this._file = i.getArg(e, "file", null);
  this._sourceRoot = i.getArg(e, "sourceRoot", null);
  this._skipValidation = i.getArg(e, "skipValidation", !1);
  this._sources = new a();
  this._names = new a();
  this._mappings = new s();
  this._sourcesContents = null;
}
o.prototype._version = 3;
o.fromSourceMap = function (e) {
  var t = e.sourceRoot;
  var n = new o({
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
  e.sources.forEach(function (t) {
    var r = e.sourceContentFor(t);
    if (null != r) {
      n.setSourceContent(t, r);
    }
  });
  return n;
};
o.prototype.addMapping = function (e) {
  var t = i.getArg(e, "generated");
  var n = i.getArg(e, "original", null);
  var r = i.getArg(e, "source", null);
  var a = i.getArg(e, "name", null);
  if (!this._skipValidation) {
    this._validateMapping(t, n, r, a);
  }
  if (null != r) {
    r = String(r);
    if (!this._sources.has(r)) {
      this._sources.add(r);
    }
  }
  if (null != a) {
    a = String(a);
    if (!this._names.has(a)) {
      this._names.add(a);
    }
  }
  this._mappings.add({
    generatedLine: t.line,
    generatedColumn: t.column,
    originalLine: null != n && n.line,
    originalColumn: null != n && n.column,
    source: r,
    name: a
  });
};
o.prototype.setSourceContent = function (e, t) {
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
o.prototype.applySourceMap = function (e, t, n) {
  var r = t;
  if (null == t) {
    if (null == e.file) {
      throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
    }
    r = e.file;
  }
  var s = this._sourceRoot;
  if (null != s) {
    r = i.relative(s, r);
  }
  var o = new a();
  var l = new a();
  this._mappings.unsortedForEach(function (t) {
    if (t.source === r && null != t.originalLine) {
      var a = e.originalPositionFor({
        line: t.originalLine,
        column: t.originalColumn
      });
      if (null != a.source) {
        t.source = a.source;
        if (null != n) {
          t.source = i.join(n, t.source);
        }
        if (null != s) {
          t.source = i.relative(s, t.source);
        }
        t.originalLine = a.line;
        t.originalColumn = a.column;
        if (null != a.name) {
          t.name = a.name;
        }
      }
    }
    var u = t.source;
    if (!(null == u || o.has(u))) {
      o.add(u);
    }
    var c = t.name;
    if (!(null == c || l.has(c))) {
      l.add(c);
    }
  }, this);
  this._sources = o;
  this._names = l;
  e.sources.forEach(function (t) {
    var r = e.sourceContentFor(t);
    if (null != r) {
      if (null != n) {
        t = i.join(n, t);
      }
      if (null != s) {
        t = i.relative(s, t);
      }
      this.setSourceContent(t, r);
    }
  }, this);
};
o.prototype._validateMapping = function (e, t, n, r) {
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
o.prototype._serializeMappings = function () {
  for (var e, t, n, a, s = 0, o = 1, l = 0, u = 0, c = 0, p = 0, f = "", d = this._mappings.toArray(), h = 0, y = d.length; h < y; h++) {
    if (e = "", (t = d[h]).generatedLine !== o) {
      for (s = 0; t.generatedLine !== o;) {
        e += ";";
        o++;
      }
    } else if (h > 0) {
      if (!i.compareByGeneratedPositionsInflated(t, d[h - 1])) {
        continue;
      }
      e += ",";
    }
    e += r.encode(t.generatedColumn - s);
    s = t.generatedColumn;
    if (null != t.source) {
      a = this._sources.indexOf(t.source);
      e += r.encode(a - p);
      p = a;
      e += r.encode(t.originalLine - 1 - u);
      u = t.originalLine - 1;
      e += r.encode(t.originalColumn - l);
      l = t.originalColumn;
      if (null != t.name) {
        n = this._names.indexOf(t.name);
        e += r.encode(n - c);
        c = n;
      }
    }
    f += e;
  }
  return f;
};
o.prototype._generateSourcesContent = function (e, t) {
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
o.prototype.toJSON = function () {
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
o.prototype.toString = function () {
  return JSON.stringify(this.toJSON());
};
export { o as SourceMapGenerator };