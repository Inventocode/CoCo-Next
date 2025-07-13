import * as r from "./837";
import * as i from "./1970";
var o = require("./1299").ArraySet;
import * as a from "./1298/index";
var s = require("./1971").quickSort;
function c(e, t) {
  var n = e;
  if ("string" === typeof e) {
    n = r.parseSourceMapInput(e);
  }
  return null != n.sections ? new f(n, t) : new u(n, t);
}
function u(e, t) {
  var n = e;
  if ("string" === typeof e) {
    n = r.parseSourceMapInput(e);
  }
  var i = r.getArg(n, "version");
  var a = r.getArg(n, "sources");
  var s = r.getArg(n, "names", []);
  var c = r.getArg(n, "sourceRoot", null);
  var u = r.getArg(n, "sourcesContent", null);
  var l = r.getArg(n, "mappings");
  var f = r.getArg(n, "file", null);
  if (i != this._version) {
    throw new Error("Unsupported version: " + i);
  }
  if (c) {
    c = r.normalize(c);
  }
  a = a.map(String).map(r.normalize).map(function (e) {
    return c && r.isAbsolute(c) && r.isAbsolute(e) ? r.relative(c, e) : e;
  });
  this._names = o.fromArray(s.map(String), !0);
  this._sources = o.fromArray(a, !0);
  this._absoluteSources = this._sources.toArray().map(function (e) {
    return r.computeSourceURL(c, e, t);
  });
  this.sourceRoot = c;
  this.sourcesContent = u;
  this._mappings = l;
  this._sourceMapURL = t;
  this.file = f;
}
function l() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}
function f(e, t) {
  var n = e;
  if ("string" === typeof e) {
    n = r.parseSourceMapInput(e);
  }
  var i = r.getArg(n, "version");
  var a = r.getArg(n, "sections");
  if (i != this._version) {
    throw new Error("Unsupported version: " + i);
  }
  this._sources = new o();
  this._names = new o();
  var s = {
    line: -1,
    column: 0
  };
  this._sections = a.map(function (e) {
    if (e.url) {
      throw new Error("Support for url field in sections not implemented.");
    }
    var n = r.getArg(e, "offset");
    var i = r.getArg(n, "line");
    var o = r.getArg(n, "column");
    if (i < s.line || i === s.line && o < s.column) {
      throw new Error("Section offsets must be ordered and non-overlapping.");
    }
    s = n;
    return {
      generatedOffset: {
        generatedLine: i + 1,
        generatedColumn: o + 1
      },
      consumer: new c(r.getArg(e, "map"), t)
    };
  });
}
c.fromSourceMap = function (e, t) {
  return u.fromSourceMap(e, t);
};
c.prototype._version = 3;
c.prototype.__generatedMappings = null;
Object.defineProperty(c.prototype, "_generatedMappings", {
  configurable: !0,
  enumerable: !0,
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }
    return this.__generatedMappings;
  }
});
c.prototype.__originalMappings = null;
Object.defineProperty(c.prototype, "_originalMappings", {
  configurable: !0,
  enumerable: !0,
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }
    return this.__originalMappings;
  }
});
c.prototype._charIsMappingSeparator = function (e, t) {
  var n = e.charAt(t);
  return ";" === n || "," === n;
};
c.prototype._parseMappings = function (e, t) {
  throw new Error("Subclasses must implement _parseMappings");
};
c.GENERATED_ORDER = 1;
c.ORIGINAL_ORDER = 2;
c.GREATEST_LOWER_BOUND = 1;
c.LEAST_UPPER_BOUND = 2;
c.prototype.eachMapping = function (e, t, n) {
  var i;
  var o = t || null;
  switch (n || c.GENERATED_ORDER) {
    case c.GENERATED_ORDER:
      i = this._generatedMappings;
      break;
    case c.ORIGINAL_ORDER:
      i = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
  }
  var a = this.sourceRoot;
  i.map(function (e) {
    var t = null === e.source ? null : this._sources.at(e.source);
    return {
      source: t = r.computeSourceURL(a, t, this._sourceMapURL),
      generatedLine: e.generatedLine,
      generatedColumn: e.generatedColumn,
      originalLine: e.originalLine,
      originalColumn: e.originalColumn,
      name: null === e.name ? null : this._names.at(e.name)
    };
  }, this).forEach(e, o);
};
c.prototype.allGeneratedPositionsFor = function (e) {
  var t = r.getArg(e, "line");
  var n = {
    source: r.getArg(e, "source"),
    originalLine: t,
    originalColumn: r.getArg(e, "column", 0)
  };
  if (n.source = this._findSourceIndex(n.source), n.source < 0) {
    return [];
  }
  var o = [];
  var a = this._findMapping(n, this._originalMappings, "originalLine", "originalColumn", r.compareByOriginalPositions, i.LEAST_UPPER_BOUND);
  if (a >= 0) {
    var s = this._originalMappings[a];
    if (void 0 === e.column) {
      for (var c = s.originalLine; s && s.originalLine === c;) {
        o.push({
          line: r.getArg(s, "generatedLine", null),
          column: r.getArg(s, "generatedColumn", null),
          lastColumn: r.getArg(s, "lastGeneratedColumn", null)
        });
        s = this._originalMappings[++a];
      }
    } else {
      for (var u = s.originalColumn; s && s.originalLine === t && s.originalColumn == u;) {
        o.push({
          line: r.getArg(s, "generatedLine", null),
          column: r.getArg(s, "generatedColumn", null),
          lastColumn: r.getArg(s, "lastGeneratedColumn", null)
        });
        s = this._originalMappings[++a];
      }
    }
  }
  return o;
};
export { c as SourceMapConsumer };
u.prototype = Object.create(c.prototype);
u.prototype.consumer = c;
u.prototype._findSourceIndex = function (e) {
  var t;
  var n = e;
  if (null != this.sourceRoot && (n = r.relative(this.sourceRoot, n)), this._sources.has(n)) {
    return this._sources.indexOf(n);
  }
  for (t = 0; t < this._absoluteSources.length; ++t) {
    if (this._absoluteSources[t] == e) {
      return t;
    }
  }
  return -1;
};
u.fromSourceMap = function (e, t) {
  var n = Object.create(u.prototype);
  var i = n._names = o.fromArray(e._names.toArray(), !0);
  var a = n._sources = o.fromArray(e._sources.toArray(), !0);
  n.sourceRoot = e._sourceRoot;
  n.sourcesContent = e._generateSourcesContent(n._sources.toArray(), n.sourceRoot);
  n.file = e._file;
  n._sourceMapURL = t;
  n._absoluteSources = n._sources.toArray().map(function (e) {
    return r.computeSourceURL(n.sourceRoot, e, t);
  });
  for (var c = e._mappings.toArray().slice(), f = n.__generatedMappings = [], h = n.__originalMappings = [], d = 0, p = c.length; d < p; d++) {
    var _ = c[d];
    var A = new l();
    A.generatedLine = _.generatedLine;
    A.generatedColumn = _.generatedColumn;
    if (_.source) {
      A.source = a.indexOf(_.source);
      A.originalLine = _.originalLine;
      A.originalColumn = _.originalColumn;
      if (_.name) {
        A.name = i.indexOf(_.name);
      }
      h.push(A);
    }
    f.push(A);
  }
  s(n.__originalMappings, r.compareByOriginalPositions);
  return n;
};
u.prototype._version = 3;
Object.defineProperty(u.prototype, "sources", {
  get: function () {
    return this._absoluteSources.slice();
  }
});
u.prototype._parseMappings = function (e, t) {
  for (var n, i, o, c, u, f = 1, h = 0, d = 0, p = 0, _ = 0, A = 0, g = e.length, v = 0, m = {}, y = {}, b = [], w = []; v < g;) {
    if (";" === e.charAt(v)) {
      f++;
      v++;
      h = 0;
    } else if ("," === e.charAt(v)) {
      v++;
    } else {
      for ((n = new l()).generatedLine = f, c = v; c < g && !this._charIsMappingSeparator(e, c); c++) {
        ;
      }
      if (o = m[i = e.slice(v, c)]) {
        v += i.length;
      } else {
        for (o = []; v < c;) {
          a.decode(e, v, y);
          u = y.value;
          v = y.rest;
          o.push(u);
        }
        if (2 === o.length) {
          throw new Error("Found a source, but no line and column");
        }
        if (3 === o.length) {
          throw new Error("Found a source and line, but no column");
        }
        m[i] = o;
      }
      n.generatedColumn = h + o[0];
      h = n.generatedColumn;
      if (o.length > 1) {
        n.source = _ + o[1];
        _ += o[1];
        n.originalLine = d + o[2];
        d = n.originalLine;
        n.originalLine += 1;
        n.originalColumn = p + o[3];
        p = n.originalColumn;
        if (o.length > 4) {
          n.name = A + o[4];
          A += o[4];
        }
      }
      w.push(n);
      if ("number" === typeof n.originalLine) {
        b.push(n);
      }
    }
  }
  s(w, r.compareByGeneratedPositionsDeflated);
  this.__generatedMappings = w;
  s(b, r.compareByOriginalPositions);
  this.__originalMappings = b;
};
u.prototype._findMapping = function (e, t, n, r, o, a) {
  if (e[n] <= 0) {
    throw new TypeError("Line must be greater than or equal to 1, got " + e[n]);
  }
  if (e[r] < 0) {
    throw new TypeError("Column must be greater than or equal to 0, got " + e[r]);
  }
  return i.search(e, t, o, a);
};
u.prototype.computeColumnSpans = function () {
  for (var e = 0; e < this._generatedMappings.length; ++e) {
    var t = this._generatedMappings[e];
    if (e + 1 < this._generatedMappings.length) {
      var n = this._generatedMappings[e + 1];
      if (t.generatedLine === n.generatedLine) {
        t.lastGeneratedColumn = n.generatedColumn - 1;
        continue;
      }
    }
    t.lastGeneratedColumn = 1 / 0;
  }
};
u.prototype.originalPositionFor = function (e) {
  var t = {
    generatedLine: r.getArg(e, "line"),
    generatedColumn: r.getArg(e, "column")
  };
  var n = this._findMapping(t, this._generatedMappings, "generatedLine", "generatedColumn", r.compareByGeneratedPositionsDeflated, r.getArg(e, "bias", c.GREATEST_LOWER_BOUND));
  if (n >= 0) {
    var i = this._generatedMappings[n];
    if (i.generatedLine === t.generatedLine) {
      var o = r.getArg(i, "source", null);
      if (null !== o) {
        o = this._sources.at(o);
        o = r.computeSourceURL(this.sourceRoot, o, this._sourceMapURL);
      }
      var a = r.getArg(i, "name", null);
      if (null !== a) {
        a = this._names.at(a);
      }
      return {
        source: o,
        line: r.getArg(i, "originalLine", null),
        column: r.getArg(i, "originalColumn", null),
        name: a
      };
    }
  }
  return {
    source: null,
    line: null,
    column: null,
    name: null
  };
};
u.prototype.hasContentsOfAllSources = function () {
  return !!this.sourcesContent && this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function (e) {
    return null == e;
  });
};
u.prototype.sourceContentFor = function (e, t) {
  if (!this.sourcesContent) {
    return null;
  }
  var n = this._findSourceIndex(e);
  if (n >= 0) {
    return this.sourcesContent[n];
  }
  var i;
  var o = e;
  if (null != this.sourceRoot && (o = r.relative(this.sourceRoot, o)), null != this.sourceRoot && (i = r.urlParse(this.sourceRoot))) {
    var a = o.replace(/^file:\/\//, "");
    if ("file" == i.scheme && this._sources.has(a)) {
      return this.sourcesContent[this._sources.indexOf(a)];
    }
    if ((!i.path || "/" == i.path) && this._sources.has("/" + o)) {
      return this.sourcesContent[this._sources.indexOf("/" + o)];
    }
  }
  if (t) {
    return null;
  }
  throw new Error('"' + o + '" is not in the SourceMap.');
};
u.prototype.generatedPositionFor = function (e) {
  var t = r.getArg(e, "source");
  if ((t = this._findSourceIndex(t)) < 0) {
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }
  var n = {
    source: t,
    originalLine: r.getArg(e, "line"),
    originalColumn: r.getArg(e, "column")
  };
  var i = this._findMapping(n, this._originalMappings, "originalLine", "originalColumn", r.compareByOriginalPositions, r.getArg(e, "bias", c.GREATEST_LOWER_BOUND));
  if (i >= 0) {
    var o = this._originalMappings[i];
    if (o.source === n.source) {
      return {
        line: r.getArg(o, "generatedLine", null),
        column: r.getArg(o, "generatedColumn", null),
        lastColumn: r.getArg(o, "lastGeneratedColumn", null)
      };
    }
  }
  return {
    line: null,
    column: null,
    lastColumn: null
  };
};
export { u as BasicSourceMapConsumer };
f.prototype = Object.create(c.prototype);
f.prototype.constructor = c;
f.prototype._version = 3;
Object.defineProperty(f.prototype, "sources", {
  get: function () {
    for (var e = [], t = 0; t < this._sections.length; t++) {
      for (var n = 0; n < this._sections[t].consumer.sources.length; n++) {
        e.push(this._sections[t].consumer.sources[n]);
      }
    }
    return e;
  }
});
f.prototype.originalPositionFor = function (e) {
  var t = {
    generatedLine: r.getArg(e, "line"),
    generatedColumn: r.getArg(e, "column")
  };
  var n = i.search(t, this._sections, function (e, t) {
    var n = e.generatedLine - t.generatedOffset.generatedLine;
    return n || e.generatedColumn - t.generatedOffset.generatedColumn;
  });
  var o = this._sections[n];
  return o ? o.consumer.originalPositionFor({
    line: t.generatedLine - (o.generatedOffset.generatedLine - 1),
    column: t.generatedColumn - (o.generatedOffset.generatedLine === t.generatedLine ? o.generatedOffset.generatedColumn - 1 : 0),
    bias: e.bias
  }) : {
    source: null,
    line: null,
    column: null,
    name: null
  };
};
f.prototype.hasContentsOfAllSources = function () {
  return this._sections.every(function (e) {
    return e.consumer.hasContentsOfAllSources();
  });
};
f.prototype.sourceContentFor = function (e, t) {
  for (var n = 0; n < this._sections.length; n++) {
    var r = this._sections[n].consumer.sourceContentFor(e, !0);
    if (r) {
      return r;
    }
  }
  if (t) {
    return null;
  }
  throw new Error('"' + e + '" is not in the SourceMap.');
};
f.prototype.generatedPositionFor = function (e) {
  for (var t = 0; t < this._sections.length; t++) {
    var n = this._sections[t];
    if (-1 !== n.consumer._findSourceIndex(r.getArg(e, "source"))) {
      var i = n.consumer.generatedPositionFor(e);
      if (i) {
        return {
          line: i.line + (n.generatedOffset.generatedLine - 1),
          column: i.column + (n.generatedOffset.generatedLine === i.line ? n.generatedOffset.generatedColumn - 1 : 0)
        };
      }
    }
  }
  return {
    line: null,
    column: null
  };
};
f.prototype._parseMappings = function (e, t) {
  this.__generatedMappings = [];
  this.__originalMappings = [];
  for (var n = 0; n < this._sections.length; n++) {
    for (var i = this._sections[n], o = i.consumer._generatedMappings, a = 0; a < o.length; a++) {
      var c = o[a];
      var u = i.consumer._sources.at(c.source);
      u = r.computeSourceURL(i.consumer.sourceRoot, u, this._sourceMapURL);
      this._sources.add(u);
      u = this._sources.indexOf(u);
      var l = null;
      if (c.name) {
        l = i.consumer._names.at(c.name);
        this._names.add(l);
        l = this._names.indexOf(l);
      }
      var f = {
        source: u,
        generatedLine: c.generatedLine + (i.generatedOffset.generatedLine - 1),
        generatedColumn: c.generatedColumn + (i.generatedOffset.generatedLine === c.generatedLine ? i.generatedOffset.generatedColumn - 1 : 0),
        originalLine: c.originalLine,
        originalColumn: c.originalColumn,
        name: l
      };
      this.__generatedMappings.push(f);
      if ("number" === typeof f.originalLine) {
        this.__originalMappings.push(f);
      }
    }
  }
  s(this.__generatedMappings, r.compareByGeneratedPositionsDeflated);
  s(this.__originalMappings, r.compareByOriginalPositions);
};
export { f as IndexedSourceMapConsumer };