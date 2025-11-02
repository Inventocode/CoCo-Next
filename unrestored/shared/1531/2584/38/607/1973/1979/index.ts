/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1979
 */

var require$$1300Index$SourceMapGenerator = require("../1300/index").SourceMapGenerator
var i = require("./838")
var o = /(\r?\n)/
var a = "$$$isSourceNode$$$"
function s(e, t, n, r, i) {
  this.children = []
  this.sourceContents = {}
  this.line = null == e ? null : e
  this.column = null == t ? null : t
  this.source = null == n ? null : n
  this.name = null == i ? null : i
  this[a] = true
  if (null != r) {
    this.add(r)
  }
}
s.fromStringWithSourceMap = function (e, t, n) {
  var r = new s()
  var a = e.split(o)
  var c = 0
  var u = function () {
    return e() + (e() || "")
    function e() {
      return c < a.length ? a[c++] : undefined
    }
  }
  var l = 1
  var f = 0
  var d = null
  t.eachMapping(function (e) {
    if (null !== d) {
      if (!(l < e.generatedLine)) {
        var t = (n = a[c] || "").substr(0, e.generatedColumn - f)
        a[c] = n.substr(e.generatedColumn - f)
        f = e.generatedColumn
        h(d, t)
        return void (d = e)
      }
      h(d, u())
      l++
      f = 0
    }
    for (; l < e.generatedLine;) {
      r.add(u())
      l++
    }
    if (f < e.generatedColumn) {
      var n = a[c] || ""
      r.add(n.substr(0, e.generatedColumn))
      a[c] = n.substr(e.generatedColumn)
      f = e.generatedColumn
    }
    d = e
  }, this)
  if (c < a.length) {
    if (d) {
      h(d, u())
    }
    r.add(a.splice(c).join(""))
  }
  t.sources.forEach(function (e) {
    var o = t.sourceContentFor(e)
    if (null != o) {
      if (null != n) {
        e = i.join(n, e)
      }
      r.setSourceContent(e, o)
    }
  })
  return r
  function h(e, t) {
    if (null === e || undefined === e.source) {
      r.add(t)
    } else {
      var o = n ? i.join(n, e.source) : e.source
      r.add(new s(e.originalLine, e.originalColumn, o, t, e.name))
    }
  }
}
s.prototype.add = function (e) {
  if (Array.isArray(e)) {
    e.forEach(function (e) {
      this.add(e)
    }, this)
  } else {
    if (!e[a] && "string" !== typeof e) {
      throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e)
    }
    if (e) {
      this.children.push(e)
    }
  }
  return this
}
s.prototype.prepend = function (e) {
  if (Array.isArray(e)) {
    for (var t = e.length - 1; t >= 0; t--) {
      this.prepend(e[t])
    }
  } else {
    if (!e[a] && "string" !== typeof e) {
      throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e)
    }
    this.children.unshift(e)
  }
  return this
}
s.prototype.walk = function (e) {
  for (var t, n = 0, this$children$length = this.children.length; n < this$children$length; n++) {
    if ((t = this.children[n])[a]) {
      t.walk(e)
    } else {
      if ("" !== t) {
        e(t, {
          source: this.source,
          line: this.line,
          column: this.column,
          name: this.name
        })
      }
    }
  }
}
s.prototype.join = function (e) {
  var t
  var n
  var this$children$length = this.children.length
  if (this$children$length > 0) {
    for (t = [], n = 0; n < this$children$length - 1; n++) {
      t.push(this.children[n])
      t.push(e)
    }
    t.push(this.children[n])
    this.children = t
  }
  return this
}
s.prototype.replaceRight = function (e, t) {
  var n = this.children[this.children.length - 1]
  if (n[a]) {
    n.replaceRight(e, t)
  } else {
    if ("string" === typeof n) {
      this.children[this.children.length - 1] = n.replace(e, t)
    } else {
      this.children.push("".replace(e, t))
    }
  }
  return this
}
s.prototype.setSourceContent = function (e, t) {
  this.sourceContents[i.toSetString(e)] = t
}
s.prototype.walkSourceContents = function (e) {
  for (var t = 0, this$children$length = this.children.length; t < this$children$length; t++) {
    if (this.children[t][a]) {
      this.children[t].walkSourceContents(e)
    }
  }
  var r = Object.keys(this.sourceContents)
  for (t = 0, this$children$length = r.length; t < this$children$length; t++) {
    e(i.fromSetString(r[t]), this.sourceContents[r[t]])
  }
}
s.prototype.toString = function () {
  var e = ""
  this.walk(function (t) {
    e += t
  })
  return e
}
s.prototype.toStringWithSourceMap = function (e) {
  var t = {
    code: "",
    line: 1,
    column: 0
  }
  var n = new require$$1300Index$SourceMapGenerator(e)
  var i = false
  var o = null
  var a = null
  var s = null
  var c = null
  this.walk(function (e, r) {
    t.code += e
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
        })
      }
      o = r.source
      a = r.line
      s = r.column
      c = r.name
      i = true
    } else {
      if (i) {
        n.addMapping({
          generated: {
            line: t.line,
            column: t.column
          }
        })
        o = null
        i = false
      }
    }
    for (var u = 0, e$length = e.length; u < e$length; u++) {
      if (10 === e.charCodeAt(u)) {
        t.line++
        t.column = 0
        if (u + 1 === e$length) {
          o = null
          i = false
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
            })
          }
        }
      } else {
        t.column++
      }
    }
  })
  this.walkSourceContents(function (e, t) {
    n.setSourceContent(e, t)
  })
  return {
    code: t.code,
    map: n
  }
}
exports.SourceNode = s
