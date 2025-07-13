import * as r from "./2289/1349";
import * as i from "./2289/966";
import * as o from "./2289/1126";
module.exports = l;
var a;
var s = /\n/g;
var c = /\\n/g;
function u() {}
function l(e) {
  r.call(this, e);
  this.query = this.query || {};
  if (!a) {
    a = o.___eio = o.___eio || [];
  }
  this.index = a.length;
  var t = this;
  a.push(function (e) {
    t.onData(e);
  });
  this.query.j = this.index;
  if ("function" === typeof addEventListener) {
    addEventListener("beforeunload", function () {
      if (t.script) {
        t.script.onerror = u;
      }
    }, !1);
  }
}
i(l, r);
l.prototype.supportsBinary = !1;
l.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }
  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }
  r.prototype.doClose.call(this);
};
l.prototype.doPoll = function () {
  var e = this;
  var t = document.createElement("script");
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }
  t.async = !0;
  t.src = this.uri();
  t.onerror = function (t) {
    e.onError("jsonp poll error", t);
  };
  var n = document.getElementsByTagName("script")[0];
  if (n) {
    n.parentNode.insertBefore(t, n);
  } else {
    (document.head || document.body).appendChild(t);
  }
  this.script = t;
  if ("undefined" !== typeof navigator && /gecko/i.test(navigator.userAgent)) {
    setTimeout(function () {
      var e = document.createElement("iframe");
      document.body.appendChild(e);
      document.body.removeChild(e);
    }, 100);
  }
};
l.prototype.doWrite = function (e, t) {
  var n = this;
  if (!this.form) {
    var r;
    var i = document.createElement("form");
    var o = document.createElement("textarea");
    var a = this.iframeId = "eio_iframe_" + this.index;
    i.className = "socketio";
    i.style.position = "absolute";
    i.style.top = "-1000px";
    i.style.left = "-1000px";
    i.target = a;
    i.method = "POST";
    i.setAttribute("accept-charset", "utf-8");
    o.name = "d";
    i.appendChild(o);
    document.body.appendChild(i);
    this.form = i;
    this.area = o;
  }
  function u() {
    l();
    t();
  }
  function l() {
    if (n.iframe) {
      try {
        n.form.removeChild(n.iframe);
      } catch (t) {
        n.onError("jsonp polling iframe removal error", t);
      }
    }
    try {
      var e = '<iframe src="javascript:0" name="' + n.iframeId + '">';
      r = document.createElement(e);
    } catch (t) {
      (r = document.createElement("iframe")).name = n.iframeId;
      r.src = "javascript:0";
    }
    r.id = n.iframeId;
    n.form.appendChild(r);
    n.iframe = r;
  }
  this.form.action = this.uri();
  l();
  e = e.replace(c, "\\\n");
  this.area.value = e.replace(s, "\\n");
  try {
    this.form.submit();
  } catch (f) {}
  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function () {
      if ("complete" === n.iframe.readyState) {
        u();
      }
    };
  } else {
    this.iframe.onload = u;
  }
};