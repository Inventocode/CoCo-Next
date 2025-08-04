"use strict";

var r = require("./2546");
var o = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
};
module.exports = function (e, t) {
  var n;
  var i;
  var a;
  var s;
  var c;
  var l;
  var u = !1;
  if (!t) {
    t = {};
  }
  n = t.debug || !1;
  try {
    a = r();
    s = document.createRange();
    c = document.getSelection();
    (l = document.createElement("span")).textContent = e;
    l.style.all = "unset";
    l.style.position = "fixed";
    l.style.top = 0;
    l.style.clip = "rect(0, 0, 0, 0)";
    l.style.whiteSpace = "pre";
    l.style.webkitUserSelect = "text";
    l.style.MozUserSelect = "text";
    l.style.msUserSelect = "text";
    l.style.userSelect = "text";
    l.addEventListener("copy", function (r) {
      r.stopPropagation();
      if (t.format) {
        r.preventDefault();
        if ("undefined" === typeof r.clipboardData) {
          if (n) {
            console.warn("unable to use e.clipboardData");
          }
          if (n) {
            console.warn("trying IE specific stuff");
          }
          window.clipboardData.clearData();
          var i = o[t.format] || o.default;
          window.clipboardData.setData(i, e);
        } else {
          r.clipboardData.clearData();
          r.clipboardData.setData(t.format, e);
        }
      }
      if (t.onCopy) {
        r.preventDefault();
        t.onCopy(r.clipboardData);
      }
    });
    document.body.appendChild(l);
    s.selectNodeContents(l);
    c.addRange(s);
    if (!document.execCommand("copy")) {
      throw new Error("copy command was unsuccessful");
    }
    u = !0;
  } catch (d) {
    if (n) {
      console.error("unable to copy using execCommand: ", d);
    }
    if (n) {
      console.warn("trying IE specific stuff");
    }
    try {
      window.clipboardData.setData(t.format || "text", e);
      if (t.onCopy) {
        t.onCopy(window.clipboardData);
      }
      u = !0;
    } catch (d) {
      if (n) {
        console.error("unable to copy using clipboardData: ", d);
      }
      if (n) {
        console.error("falling back to prompt");
      }
      i = function (e) {
        var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
        return e.replace(/#{\s*key\s*}/g, t);
      }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter");
      window.prompt(i, e);
    }
  } finally {
    if (c) {
      if ("function" == typeof c.removeRange) {
        c.removeRange(s);
      } else {
        c.removeAllRanges();
      }
    }
    if (l) {
      document.body.removeChild(l);
    }
    a();
  }
  return u;
};