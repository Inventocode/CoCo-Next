var r = require("../2947/2672");
var i = require("./2945");
var a = require("../2755/2757").ArraySet;
var s = require("../2755/2756/index");
var o = require("./2946").quickSort;
function l(e) {
  var t = e;
  if ("string" === typeof e) {
    t = JSON.parse(e.replace(/^\)\]\}'/, ""));
  }
  return null != t.sections ? new p(t) : new u(t);
}
function u(e) {
  var t = e;
  if ("string" === typeof e) {
    t = JSON.parse(e.replace(/^\)\]\}'/, ""));
  }
  var n = r.getArg(t, "version");
  var i = r.getArg(t, "sources");
  var s = r.getArg(t, "names", []);
  var o = r.getArg(t, "sourceRoot", null);
  var l = r.getArg(t, "sourcesContent", null);
  var u = r.getArg(t, "mappings");
  var c = r.getArg(t, "file", null);
  if (n != this._version) {
    throw new Error("Unsupported version: " + n);
  }
  i = i.map(String).map(r.normalize).map(function (e) {
    return o && r.isAbsolute(o) && r.isAbsolute(e) ? r.relative(o, e) : e;
  });
  this._names = a.fromArray(s.map(String), !0);
  this._sources = a.fromArray(i, !0);
  this.sourceRoot = o;
  this.sourcesContent = l;
  this._mappings = u;
  this.file = c;
}
function c() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}
function p(e) {
  var t = e;
  if ("string" === typeof e) {
    t = JSON.parse(e.replace(/^\)\]\}'/, ""));
  }
  var n = r.getArg(t, "version");
  var i = r.getArg(t, "sections");
  if (n != this._version) {
    throw new Error("Unsupported version: " + n);
  }
  this._sources = new a();
  this._names = new a();
  var s = {
    line: -1,
    column: 0
  };
  this._sections = i.map(function (e) {
    if (e.url) {
      throw new Error("Support for url field in sections not implemented.");
    }
    var t = r.getArg(e, "offset");
    var n = r.getArg(t, "line");
    var i = r.getArg(t, "column");
    if (n < s.line || n === s.line && i < s.column) {
      throw new Error("Section offsets must be ordered and non-overlapping.");
    }
    s = t;
    return {
      generatedOffset: {
        generatedLine: n + 1,
        generatedColumn: i + 1
      },
      consumer: new l(r.getArg(e, "map"))
    };
  });
}
l.fromSourceMap = function (e) {
  return u.fromSourceMap(e);
};
l.prototype._version = 3;
l.prototype.__generatedMappings = null;
Object.defineProperty(l.prototype, "_generatedMappings", {
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }
    return this.__generatedMappings;
  }
});
l.prototype.__originalMappings = null;
Object.defineProperty(l.prototype, "_originalMappings", {
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }
    return this.__originalMappings;
  }
});
l.prototype._charIsMappingSeparator = function (e, t) {
  var n = e.charAt(t);
  return ";" === n || "," === n;
};
l.prototype._parseMappings = function (e, t) {
  throw new Error("Subclasses must implement _parseMappings");
};
l.GENERATED_ORDER = 1;
l.ORIGINAL_ORDER = 2;
l.GREATEST_LOWER_BOUND = 1;
l.LEAST_UPPER_BOUND = 2;
l.prototype.eachMapping = function (e, t, n) {
  var i;
  var a = t || null;
  switch (n || l.GENERATED_ORDER) {
    case l.GENERATED_ORDER:
      i = this._generatedMappings;
      break;
    case l.ORIGINAL_ORDER:
      i = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
  }
  var s = this.sourceRoot;
  i.map(function (e) {
    var t = null === e.source ? null : this._sources.at(e.source);
    if (null != t && null != s) {
      t = r.join(s, t);
    }
    return {
      source: t,
      generatedLine: e.generatedLine,
      generatedColumn: e.generatedColumn,
      originalLine: e.originalLine,
      originalColumn: e.originalColumn,
      name: null === e.name ? null : this._names.at(e.name)
    };
  }, this).forEach(e, a);
};
l.prototype.allGeneratedPositionsFor = function (e) {
  var t = r.getArg(e, "line");
  var n = {
    source: r.getArg(e, "source"),
    originalLine: t,
    originalColumn: r.getArg(e, "column", 0)
  };
  if (null != this.sourceRoot && (n.source = r.relative(this.sourceRoot, n.source)), !this._sources.has(n.source)) {
    return [];
  }
  n.source = this._sources.indexOf(n.source);
  var a = [];
  var s = this._findMapping(n, this._originalMappings, "originalLine", "originalColumn", r.compareByOriginalPositions, i.LEAST_UPPER_BOUND);
  if (s >= 0) {
    var o = this._originalMappings[s];
    if (void 0 === e.column) {
      for (var l = o.originalLine; o && o.originalLine === l;) {
        a.push({
          line: r.getArg(o, "generatedLine", null),
          column: r.getArg(o, "generatedColumn", null),
          lastColumn: r.getArg(o, "lastGeneratedColumn", null)
        });
        o = this._originalMappings[++s];
      }
    } else {
      for (var u = o.originalColumn; o && o.originalLine === t && o.originalColumn == u;) {
        a.push({
          line: r.getArg(o, "generatedLine", null),
          column: r.getArg(o, "generatedColumn", null),
          lastColumn: r.getArg(o, "lastGeneratedColumn", null)
        });
        o = this._originalMappings[++s];
      }
    }
  }
  return a;
};
exports.SourceMapConsumer = l;
u.prototype = Object.create(l.prototype);
u.prototype.consumer = l;
u.fromSourceMap = function (e) {
  var t = Object.create(u.prototype);
  var n = t._names = a.fromArray(e._names.toArray(), !0);
  var i = t._sources = a.fromArray(e._sources.toArray(), !0);
  t.sourceRoot = e._sourceRoot;
  t.sourcesContent = e._generateSourcesContent(t._sources.toArray(), t.sourceRoot);
  t.file = e._file;
  for (var s = e._mappings.toArray().slice(), l = t.__generatedMappings = [], p = t.__originalMappings = [], f = 0, d = s.length; f < d; f++) {
    var h = s[f];
    var y = new c();
    y.generatedLine = h.generatedLine;
    y.generatedColumn = h.generatedColumn;
    if (h.source) {
      y.source = i.indexOf(h.source);
      y.originalLine = h.originalLine;
      y.originalColumn = h.originalColumn;
      if (h.name) {
        y.name = n.indexOf(h.name);
      }
      p.push(y);
    }
    l.push(y);
  }
  o(t.__originalMappings, r.compareByOriginalPositions);
  return t;
};
u.prototype._version = 3;
Object.defineProperty(u.prototype, "sources", {
  get: function () {
    return this._sources.toArray().map(function (e) {
      return null != this.sourceRoot ? r.join(this.sourceRoot, e) : e;
    }, this);
  }
});
u.prototype._parseMappings = function (e, t) {
  for (var n, i, a, l, u, p = 1, f = 0, d = 0, h = 0, y = 0, m = 0, v = e.length, g = 0, T = {}, b = {}, S = [], E = []; g < v;) {
    if (";" === e.charAt(g)) {
      p++;
      g++;
      f = 0;
    } else if ("," === e.charAt(g)) {
      g++;
    } else {
      for ((n = new c()).generatedLine = p, l = g; l < v && !this._charIsMappingSeparator(e, l); l++) {
        ;
      }
      if (a = T[i = e.slice(g, l)]) {
        g += i.length;
      } else {
        for (a = []; g < l;) {
          s.decode(e, g, b);
          u = b.value;
          g = b.rest;
          a.push(u);
        }
        if (2 === a.length) {
          throw new Error("Found a source, but no line and column");
        }
        if (3 === a.length) {
          throw new Error("Found a source and line, but no column");
        }
        T[i] = a;
      }
      n.generatedColumn = f + a[0];
      f = n.generatedColumn;
      if (a.length > 1) {
        n.source = y + a[1];
        y += a[1];
        n.originalLine = d + a[2];
        d = n.originalLine;
        n.originalLine += 1;
        n.originalColumn = h + a[3];
        h = n.originalColumn;
        if (a.length > 4) {
          n.name = m + a[4];
          m += a[4];
        }
      }
      E.push(n);
      if ("number" === typeof n.originalLine) {
        S.push(n);
      }
    }
  }
  o(E, r.compareByGeneratedPositionsDeflated);
  this.__generatedMappings = E;
  o(S, r.compareByOriginalPositions);
  this.__originalMappings = S;
};
u.prototype._findMapping = function (e, t, n, r, a, s) {
  if (e[n] <= 0) {
    throw new TypeError("Line must be greater than or equal to 1, got " + e[n]);
  }
  if (e[r] < 0) {
    throw new TypeError("Column must be greater than or equal to 0, got " + e[r]);
  }
  return i.search(e, t, a, s);
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
  var n = this._findMapping(t, this._generatedMappings, "generatedLine", "generatedColumn", r.compareByGeneratedPositionsDeflated, r.getArg(e, "bias", l.GREATEST_LOWER_BOUND));
  if (n >= 0) {
    var i = this._generatedMappings[n];
    if (i.generatedLine === t.generatedLine) {
      var a = r.getArg(i, "source", null);
      if (null !== a) {
        a = this._sources.at(a);
        if (null != this.sourceRoot) {
          a = r.join(this.sourceRoot, a);
        }
      }
      var s = r.getArg(i, "name", null);
      if (null !== s) {
        s = this._names.at(s);
      }
      return {
        source: a,
        line: r.getArg(i, "originalLine", null),
        column: r.getArg(i, "originalColumn", null),
        name: s
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
  if (null != this.sourceRoot && (e = r.relative(this.sourceRoot, e)), this._sources.has(e)) {
    return this.sourcesContent[this._sources.indexOf(e)];
  }
  var n;
  if (null != this.sourceRoot && (n = r.urlParse(this.sourceRoot))) {
    var i = e.replace(/^file:\/\//, "");
    if ("file" == n.scheme && this._sources.has(i)) {
      return this.sourcesContent[this._sources.indexOf(i)];
    }
    if ((!n.path || "/" == n.path) && this._sources.has("/" + e)) {
      return this.sourcesContent[this._sources.indexOf("/" + e)];
    }
  }
  if (t) {
    return null;
  }
  throw new Error('"' + e + '" is not in the SourceMap.');
};
u.prototype.generatedPositionFor = function (e) {
  var t = r.getArg(e, "source");
  if (null != this.sourceRoot && (t = r.relative(this.sourceRoot, t)), !this._sources.has(t)) {
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }
  var n = {
    source: t = this._sources.indexOf(t),
    originalLine: r.getArg(e, "line"),
    originalColumn: r.getArg(e, "column")
  };
  var i = this._findMapping(n, this._originalMappings, "originalLine", "originalColumn", r.compareByOriginalPositions, r.getArg(e, "bias", l.GREATEST_LOWER_BOUND));
  if (i >= 0) {
    var a = this._originalMappings[i];
    if (a.source === n.source) {
      return {
        line: r.getArg(a, "generatedLine", null),
        column: r.getArg(a, "generatedColumn", null),
        lastColumn: r.getArg(a, "lastGeneratedColumn", null)
      };
    }
  }
  return {
    line: null,
    column: null,
    lastColumn: null
  };
};
exports.BasicSourceMapConsumer = u;
p.prototype = Object.create(l.prototype);
p.prototype.constructor = l;
p.prototype._version = 3;
Object.defineProperty(p.prototype, "sources", {
  get: function () {
    for (var e = [], t = 0; t < this._sections.length; t++) {
      for (var n = 0; n < this._sections[t].consumer.sources.length; n++) {
        e.push(this._sections[t].consumer.sources[n]);
      }
    }
    return e;
  }
});
p.prototype.originalPositionFor = function (e) {
  var t = {
    generatedLine: r.getArg(e, "line"),
    generatedColumn: r.getArg(e, "column")
  };
  var n = i.search(t, this._sections, function (e, t) {
    var n = e.generatedLine - t.generatedOffset.generatedLine;
    return n || e.generatedColumn - t.generatedOffset.generatedColumn;
  });
  var a = this._sections[n];
  return a ? a.consumer.originalPositionFor({
    line: t.generatedLine - (a.generatedOffset.generatedLine - 1),
    column: t.generatedColumn - (a.generatedOffset.generatedLine === t.generatedLine ? a.generatedOffset.generatedColumn - 1 : 0),
    bias: e.bias
  }) : {
    source: null,
    line: null,
    column: null,
    name: null
  };
};
p.prototype.hasContentsOfAllSources = function () {
  return this._sections.every(function (e) {
    return e.consumer.hasContentsOfAllSources();
  });
};
p.prototype.sourceContentFor = function (e, t) {
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
p.prototype.generatedPositionFor = function (e) {
  for (var t = 0; t < this._sections.length; t++) {
    var n = this._sections[t];
    if (-1 !== n.consumer.sources.indexOf(r.getArg(e, "source"))) {
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
p.prototype._parseMappings = function (e, t) {
  this.__generatedMappings = [];
  this.__originalMappings = [];
  for (var n = 0; n < this._sections.length; n++) {
    for (var i = this._sections[n], a = i.consumer._generatedMappings, s = 0; s < a.length; s++) {
      var l = a[s];
      var u = i.consumer._sources.at(l.source);
      if (null !== i.consumer.sourceRoot) {
        u = r.join(i.consumer.sourceRoot, u);
      }
      this._sources.add(u);
      u = this._sources.indexOf(u);
      var c = i.consumer._names.at(l.name);
      this._names.add(c);
      c = this._names.indexOf(c);
      var p = {
        source: u,
        generatedLine: l.generatedLine + (i.generatedOffset.generatedLine - 1),
        generatedColumn: l.generatedColumn + (i.generatedOffset.generatedLine === l.generatedLine ? i.generatedOffset.generatedColumn - 1 : 0),
        originalLine: l.originalLine,
        originalColumn: l.originalColumn,
        name: c
      };
      this.__generatedMappings.push(p);
      if ("number" === typeof p.originalLine) {
        this.__originalMappings.push(p);
      }
    }
  }
  o(this.__generatedMappings, r.compareByGeneratedPositionsDeflated);
  o(this.__originalMappings, r.compareByOriginalPositions);
};
exports.IndexedSourceMapConsumer = p;