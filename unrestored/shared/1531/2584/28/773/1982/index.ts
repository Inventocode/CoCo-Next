var r = require("./1100/index").FilterCSS;
var i = require("../1303");
var o = require("../1306");
var a = o.parseTag;
var s = o.parseAttr;
var c = require("./1101");
function u(e) {
  return void 0 === e || null === e;
}
function l(e) {
  if ((e = function (e) {
    var t = {};
    for (var n in e) t[n] = e[n];
    return t;
  }(e || {})).stripIgnoreTag) {
    if (e.onIgnoreTag) {
      console.error("Notes: cannot use these two options \"stripIgnoreTag\" and \"onIgnoreTag\" at the same time");
    }
    e.onIgnoreTag = i.onIgnoreTagStripAll;
  }
  if (e.whiteList || e.allowList) {
    e.whiteList = function (e) {
      var t = {};
      for (var n in e) if (Array.isArray(e[n])) {
        t[n.toLowerCase()] = e[n].map(function (e) {
          return e.toLowerCase();
        });
      } else {
        t[n.toLowerCase()] = e[n];
      }
      return t;
    }(e.whiteList || e.allowList);
  } else {
    e.whiteList = i.whiteList;
  }
  this.attributeWrapSign = !0 === e.singleQuotedAttributeValue ? "'" : i.attributeWrapSign;
  e.onTag = e.onTag || i.onTag;
  e.onTagAttr = e.onTagAttr || i.onTagAttr;
  e.onIgnoreTag = e.onIgnoreTag || i.onIgnoreTag;
  e.onIgnoreTagAttr = e.onIgnoreTagAttr || i.onIgnoreTagAttr;
  e.safeAttrValue = e.safeAttrValue || i.safeAttrValue;
  e.escapeHtml = e.escapeHtml || i.escapeHtml;
  this.options = e;
  if (!1 === e.css) {
    this.cssFilter = !1;
  } else {
    e.css = e.css || {};
    this.cssFilter = new r(e.css);
  }
}
l.prototype.process = function (e) {
  if (!(e = (e = e || "").toString())) {
    return "";
  }
  var t = this.options;
  var n = t.whiteList;
  var r = t.onTag;
  var o = t.onIgnoreTag;
  var l = t.onTagAttr;
  var f = t.onIgnoreTagAttr;
  var d = t.safeAttrValue;
  var h = t.escapeHtml;
  var p = this.attributeWrapSign;
  var _ = this.cssFilter;
  if (t.stripBlankChar) {
    e = i.stripBlankChar(e);
  }
  if (!t.allowCommentTag) {
    e = i.stripCommentTag(e);
  }
  var A = !1;
  if (t.stripIgnoreTagBody) {
    A = i.StripTagBody(t.stripIgnoreTagBody, o);
    o = A.onIgnoreTag;
  }
  var g = a(e, function (e, t, i, a, A) {
    var g = {
      sourcePosition: e,
      position: t,
      isClosing: A,
      isWhite: Object.prototype.hasOwnProperty.call(n, i)
    };
    var v = r(i, a, g);
    if (!u(v)) {
      return v;
    }
    if (g.isWhite) {
      if (g.isClosing) {
        return "</" + i + ">";
      }
      var m = function (e) {
        var t = c.spaceIndex(e);
        if (-1 === t) {
          return {
            html: "",
            closing: "/" === e[e.length - 2]
          };
        }
        var n = "/" === (e = c.trim(e.slice(t + 1, -1)))[e.length - 1];
        if (n) {
          e = c.trim(e.slice(0, -1));
        }
        return {
          html: e,
          closing: n
        };
      }(a);
      var y = n[i];
      var b = s(m.html, function (e, t) {
        var n = -1 !== c.indexOf(y, e);
        var r = l(i, e, t, n);
        return u(r) ? n ? (t = d(i, e, t, _)) ? e + "=" + p + t + p : e : u(r = f(i, e, t, n)) ? void 0 : r : r;
      });
      a = "<" + i;
      if (b) {
        a += " " + b;
      }
      if (m.closing) {
        a += " /";
      }
      return a += ">";
    }
    return u(v = o(i, a, g)) ? h(a) : v;
  }, h);
  if (A) {
    g = A.remove(g);
  }
  return g;
};
module.exports = l;