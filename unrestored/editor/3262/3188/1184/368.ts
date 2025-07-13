var n;
var r;
var i = module.exports = {};
function o() {
  throw new Error("setTimeout has not been defined");
}
function a() {
  throw new Error("clearTimeout has not been defined");
}
function s(e) {
  if (n === setTimeout) {
    return setTimeout(e, 0);
  }
  if ((n === o || !n) && setTimeout) {
    n = setTimeout;
    return setTimeout(e, 0);
  }
  try {
    return n(e, 0);
  } catch (t) {
    try {
      return n.call(null, e, 0);
    } catch (t) {
      return n.call(this, e, 0);
    }
  }
}
!function () {
  try {
    n = "function" === typeof setTimeout ? setTimeout : o;
  } catch (e) {
    n = o;
  }
  try {
    r = "function" === typeof clearTimeout ? clearTimeout : a;
  } catch (e) {
    r = a;
  }
}();
var c;
var u = [];
var l = !1;
var f = -1;
function h() {
  if (l && c) {
    l = !1;
    if (c.length) {
      u = c.concat(u);
    } else {
      f = -1;
    }
    if (u.length) {
      d();
    }
  }
}
function d() {
  if (!l) {
    var e = s(h);
    l = !0;
    for (var t = u.length; t;) {
      for (c = u, u = []; ++f < t;) {
        if (c) {
          c[f].run();
        }
      }
      f = -1;
      t = u.length;
    }
    c = null;
    l = !1;
    (function (e) {
      if (r === clearTimeout) {
        return clearTimeout(e);
      }
      if ((r === a || !r) && clearTimeout) {
        r = clearTimeout;
        return clearTimeout(e);
      }
      try {
        r(e);
      } catch (t) {
        try {
          return r.call(null, e);
        } catch (t) {
          return r.call(this, e);
        }
      }
    })(e);
  }
}
function p(e, t) {
  this.fun = e;
  this.array = t;
}
function _() {}
i.nextTick = function (e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n];
    }
  }
  u.push(new p(e, t));
  if (!(1 !== u.length || l)) {
    s(d);
  }
};
p.prototype.run = function () {
  this.fun.apply(null, this.array);
};
i.title = "browser";
i.browser = !0;
i.env = {};
i.argv = [];
i.version = "";
i.versions = {};
i.on = _;
i.addListener = _;
i.once = _;
i.off = _;
i.removeListener = _;
i.removeAllListeners = _;
i.emit = _;
i.prependListener = _;
i.prependOnceListener = _;
i.listeners = function (e) {
  return [];
};
i.binding = function (e) {
  throw new Error("process.binding is not supported");
};
i.cwd = function () {
  return "/";
};
i.chdir = function (e) {
  throw new Error("process.chdir is not supported");
};
i.umask = function () {
  return 0;
};