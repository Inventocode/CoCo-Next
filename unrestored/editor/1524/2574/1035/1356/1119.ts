"use strict";

import * as r from "../../../../3262/2873/2721/805/index";
import * as i from "../../../../3262/3188/2658/2679/703/index";
import * as o from "../../../../3262/3188/2658/2679/529";
import * as a from "../../../../3262/3190/494";
import * as s from "../../1/index";
import * as c from "../../../../3262/3188/2658/2679/356/index";
import * as u from "../../../../3262/3188/2658/2679/357/index";
import * as l from "../../../../3262/3188/2658/220";
import * as f from "../../../../3262/3188/2658/230";
function h(e, t) {
  if (!e) {
    throw new Error(t);
  }
}
var d = function (e) {
  return null != e && "object" === typeof e && !Array.isArray(e);
};
var p = function (e, t) {
  return typeof e === typeof t ? e > t : "string" === typeof e && "number" === typeof t;
};
function _(e, t) {
  for (var n in e) {
    var r = n;
    t.write(r, e[r]);
  }
}
exports.isValidPathItem = function (e) {
  return "number" === typeof e || "string" === typeof e && "__proto__" !== e;
};
var A = function () {
  function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
    l(this, e);
    this.parents = [];
    this.indexes = [];
    this.lcIdx = -1;
    this.idx = -1;
    this.container = t;
  }
  f(e, [{
    key: "ascend",
    value: function () {
      h(this.parents.length === this.indexes.length / 2);
      if (0 === this.idx) {
        if (this.parents.length) {
          this.lcIdx = this.indexes.pop();
          this.container = this.parents.pop();
          this.idx = this.indexes.pop();
        } else {
          this.lcIdx = 0;
          this.idx = -1;
        }
      } else {
        h(this.idx > 0);
        this.idx--;
        if (d(this.container[this.idx])) {
          this.idx--;
        }
      }
    }
  }, {
    key: "getPath",
    value: function () {
      for (var e = [], t = this.container, n = this.parents.length - 1, r = this.idx; r >= 0;) {
        e.unshift(t[r]);
        if (0 === r) {
          r = this.indexes[2 * n];
          t = this.parents[n--];
        } else {
          r -= d(t[r - 1]) ? 2 : 1;
        }
      }
      return e;
    }
  }]);
  return e;
}();
var g = function (e) {
  c(n, e);
  var t = u(n);
  function n() {
    l(this, n);
    return t.apply(this, arguments);
  }
  f(n, [{
    key: "get",
    value: function () {
      return this.container ? this.container.slice(this.idx + 1) : null;
    }
  }, {
    key: "getKey",
    value: function () {
      h(null != this.container, "Invalid call to getKey before cursor descended");
      return this.container[this.idx];
    }
  }, {
    key: "getComponent",
    value: function () {
      var e;
      return this.container && this.container.length > this.idx + 1 && d(e = this.container[this.idx + 1]) ? e : null;
    }
  }, {
    key: "descendFirst",
    value: function () {
      var e = this.idx + 1;
      if (!this.container || e >= this.container.length || d(this.container[e]) && e + 1 >= this.container.length) {
        return !1;
      }
      if (d(this.container[e])) {
        e++;
      }
      var t = this.container[e];
      if (Array.isArray(t)) {
        this.indexes.push(this.idx);
        this.parents.push(this.container);
        this.indexes.push(e);
        this.idx = 0;
        this.container = t;
      } else {
        this.idx = e;
      }
      return !0;
    }
  }, {
    key: "nextSibling",
    value: function () {
      if (h(this.parents.length === this.indexes.length / 2), this.idx > 0 || 0 === this.parents.length) {
        return !1;
      }
      var e = this.indexes[this.indexes.length - 1] + 1;
      var t = this.parents[this.parents.length - 1];
      return !(e >= t.length) && (h(!isNaN(e)), this.indexes[this.indexes.length - 1] = e, this.container = t[e], !0);
    }
  }, {
    key: "_init",
    value: function (e, t, n, r) {
      this.container = e;
      this.idx = t;
      this.parents = n.slice();
      this.indexes = r.slice();
    }
  }, {
    key: "clone",
    value: function () {
      var e = new n();
      e._init(this.container, this.idx, this.parents, this.indexes);
      return e;
    }
  }, {
    key: Symbol.iterator,
    value: s.mark(function e() {
      return s.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (this.descendFirst()) {
                e.next = 2;
                break;
              }
              return e.abrupt("return");
            case 2:
              e.next = 4;
              return this.getKey();
            case 4:
              if (this.nextSibling()) {
                e.next = 2;
                break;
              }
            case 5:
              this.ascend();
            case 6:
            case "end":
              return e.stop();
          }
        }
      }, e, this);
    })
  }, {
    key: "traverse",
    value: function (e, t) {
      var n = this.getComponent();
      if (n) {
        t(n, e);
      }
      var r;
      var i = a(this);
      try {
        for (i.s(); !(r = i.n()).done;) {
          var o = r.value;
          if (e) {
            e.descend(o);
          }
          this.traverse(e, t);
          if (e) {
            e.ascend();
          }
        }
      } catch (s) {
        i.e(s);
      } finally {
        i.f();
      }
    }
  }, {
    key: "eachPick",
    value: function (e, t) {
      this.traverse(e, function (e, n) {
        if (null != e.p) {
          t(e.p, n);
        }
      });
    }
  }, {
    key: "eachDrop",
    value: function (e, t) {
      this.traverse(e, function (e, n) {
        if (null != e.d) {
          t(e.d, n);
        }
      });
    }
  }]);
  return n;
}(A);
export { g as ReadCursor };
var v = function (e) {
  c(a, e);
  var n = u(a);
  function a() {
    var e;
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
    l(this, a);
    (e = n.call(this, t)).pendingDescent = [];
    e._op = t;
    return e;
  }
  f(a, [{
    key: "flushDescent",
    value: function () {
      h(this.parents.length === this.indexes.length / 2);
      if (null === this.container) {
        this._op = this.container = [];
      }
      for (var e = 0; e < this.pendingDescent.length; e++) {
        var t = this.pendingDescent[e];
        var n = this.idx + 1;
        if (n < this.container.length && d(this.container[n]) && n++, h(n === this.container.length || !d(this.container[n])), n === this.container.length) {
          this.container.push(t);
          this.idx = n;
        } else if (this.container[n] === t) {
          this.idx = n;
        } else {
          if (!Array.isArray(this.container[n])) {
            var r = this.container.splice(n, this.container.length - n);
            this.container.push(r);
            if (this.lcIdx > -1) {
              this.lcIdx = n;
            }
          }
          for (this.indexes.push(this.idx), this.parents.push(this.container), -1 !== this.lcIdx && (h(p(t, this.container[this.lcIdx][0])), n = this.lcIdx + 1, this.lcIdx = -1); n < this.container.length && p(t, this.container[n][0]);) {
            n++;
          }
          if (this.indexes.push(n), this.idx = 0, n < this.container.length && this.container[n][0] === t) {
            this.container = this.container[n];
          } else {
            var i = [t];
            this.container.splice(n, 0, i);
            this.container = i;
          }
        }
      }
      this.pendingDescent.length = 0;
    }
  }, {
    key: "reset",
    value: function () {
      this.lcIdx = -1;
    }
  }, {
    key: "getComponent",
    value: function () {
      this.flushDescent();
      var e = this.idx + 1;
      if (e < this.container.length && d(this.container[e])) {
        return this.container[e];
      }
      var t = {};
      this.container.splice(e, 0, t);
      return t;
    }
  }, {
    key: "write",
    value: function (e, t) {
      var n = this.getComponent();
      h(null == n[e] || n[e] === t, "Internal consistency error: Overwritten component. File a bug");
      n[e] = t;
    }
  }, {
    key: "get",
    value: function () {
      return this._op;
    }
  }, {
    key: "descend",
    value: function (e) {
      if (!t.isValidPathItem(e)) {
        throw Error("Invalid JSON key");
      }
      this.pendingDescent.push(e);
    }
  }, {
    key: "descendPath",
    value: function (e) {
      var t;
      (t = this.pendingDescent).push.apply(t, r(e));
      return this;
    }
  }, {
    key: "ascend",
    value: function () {
      if (this.pendingDescent.length) {
        this.pendingDescent.pop();
      } else {
        i(o(a.prototype), "ascend", this).call(this);
      }
    }
  }, {
    key: "mergeTree",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _;
      if (null !== e) {
        if (h(Array.isArray(e)), e === this._op) {
          throw Error("Cannot merge into my own tree");
        }
        for (var n = this.lcIdx, r = this.parents.length, i = 0, o = 0; o < e.length; o++) {
          var a = e[o];
          if ("string" === typeof a || "number" === typeof a) {
            i++;
            this.descend(a);
          } else {
            if (Array.isArray(a)) {
              this.mergeTree(a, t);
            } else {
              if ("object" === typeof a) {
                t(a, this);
              }
            }
          }
        }
        for (; i--;) {
          this.ascend();
        }
        this.lcIdx = this.parents.length === r ? n : -1;
      }
    }
  }, {
    key: "at",
    value: function (e, t) {
      this.descendPath(e);
      t(this);
      for (var n = 0; n < e.length; n++) {
        this.ascend();
      }
      return this;
    }
  }, {
    key: "writeAtPath",
    value: function (e, t, n) {
      var r = this;
      this.at(e, function () {
        return r.write(t, n);
      });
      this.reset();
      return this;
    }
  }, {
    key: "writeMove",
    value: function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      return this.writeAtPath(e, "p", n).writeAtPath(t, "d", n);
    }
  }, {
    key: "getPath",
    value: function () {
      var e = i(o(a.prototype), "getPath", this).call(this);
      e.push.apply(e, r(this.pendingDescent));
      return e;
    }
  }]);
  return a;
}(A);
export { v as WriteCursor };
exports.writeCursor = function () {
  return new v();
};
exports.readCursor = function (e) {
  return new g(e);
};
exports.advancer = function (e, t, n) {
  var r;
  var i;
  function o(r) {
    for (var o; i;) {
      var a = o = e.getKey();
      if (null != r) {
        var s = !1;
        if (t && "number" === typeof a && (o = t(a, e.getComponent())) < 0 && (o = ~o, s = !0), p(o, r)) {
          return null;
        }
        if (o === r && !s) {
          return e;
        }
      }
      if (n && "number" === typeof o) {
        n(o, e.getComponent());
      }
      i = e.nextSibling();
    }
    return null;
  }
  i = r = !!e && e.descendFirst();
  o.end = function () {
    if (r) {
      e.ascend();
    }
  };
  return o;
};
exports.eachChildOf = function (e, t, n) {
  var r;
  var i;
  var o;
  var a;
  for (r = i = e && e.descendFirst(), o = a = t && t.descendFirst(); r || o;) {
    var s = r ? e.getKey() : null;
    var c = o ? t.getKey() : null;
    if (null !== s && null !== c) {
      if (p(c, s)) {
        c = null;
      } else {
        if (s !== c) {
          s = null;
        }
      }
    }
    n(null == s ? c : s, null != s ? e : null, null != c ? t : null);
    if (null != s && r) {
      r = e.nextSibling();
    }
    if (null != c && o) {
      o = t.nextSibling();
    }
  }
  if (i) {
    e.ascend();
  }
  if (a) {
    t.ascend();
  }
};