(function (t) {
  var n;
  if ("undefined" !== typeof self) {
    self;
  }
  n = function () {
    return function (e) {
      var t = {};
      function n(r) {
        if (t[r]) {
          return t[r].exports;
        }
        var o = t[r] = {
          i: r,
          l: !1,
          exports: {}
        };
        e[r].call(o.exports, o, o.exports, n);
        o.l = !0;
        return o.exports;
      }
      n.m = e;
      n.c = t;
      n.d = function (e, t, r) {
        if (!n.o(e, t)) {
          Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
          });
        }
      };
      n.n = function (e) {
        var t = e && e.__esModule ? function () {
          return e.default;
        } : function () {
          return e;
        };
        n.d(t, "a", t);
        return t;
      };
      n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
      n.p = "";
      return n(n.s = 109);
    }([function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = n(17);
      var o = n(18);
      var i = n(19);
      var a = n(45);
      var s = n(46);
      var c = n(47);
      var l = n(48);
      var u = n(49);
      var d = n(12);
      var p = n(32);
      var f = n(33);
      var h = n(31);
      var m = n(1);
      var g = {
        Scope: m.Scope,
        create: m.create,
        find: m.find,
        query: m.query,
        register: m.register,
        Container: r.default,
        Format: o.default,
        Leaf: i.default,
        Embed: l.default,
        Scroll: a.default,
        Block: c.default,
        Inline: s.default,
        Text: u.default,
        Attributor: {
          Attribute: d.default,
          Class: p.default,
          Style: f.default,
          Store: h.default
        }
      };
      t.default = g;
    }, function (e, t, n) {
      "use strict";

      var r = this && this.__extends || function () {
        var e = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (e, t) {
          e.__proto__ = t;
        } || function (e, t) {
          for (var n in t) if (t.hasOwnProperty(n)) {
            e[n] = t[n];
          }
        };
        return function (t, n) {
          function r() {
            this.constructor = t;
          }
          e(t, n);
          t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
        };
      }();
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = function (e) {
        function t(t) {
          var n = this;
          t = "[Parchment] " + t;
          (n = e.call(this, t) || this).message = t;
          n.name = n.constructor.name;
          return n;
        }
        r(t, e);
        return t;
      }(Error);
      t.ParchmentError = o;
      var i;
      var a = {};
      var s = {};
      var c = {};
      var l = {};
      function u(e, t) {
        var n;
        if (void 0 === t) {
          t = i.ANY;
        }
        if ("string" === typeof e) {
          n = l[e] || a[e];
        } else if (e instanceof Text || e.nodeType === Node.TEXT_NODE) {
          n = l.text;
        } else if ("number" === typeof e) {
          if (e & i.LEVEL & i.BLOCK) {
            n = l.block;
          } else {
            if (e & i.LEVEL & i.INLINE) {
              n = l.inline;
            }
          }
        } else if (e instanceof HTMLElement) {
          var r = (e.getAttribute("class") || "").split(/\s+/);
          for (var o in r) if (n = s[r[o]]) {
            break;
          }
          n = n || c[e.tagName];
        }
        return null == n ? null : t & i.LEVEL & n.scope && t & i.TYPE & n.scope ? n : null;
      }
      t.DATA_KEY = "__blot";
      (function (e) {
        e[e.TYPE = 3] = "TYPE";
        e[e.LEVEL = 12] = "LEVEL";
        e[e.ATTRIBUTE = 13] = "ATTRIBUTE";
        e[e.BLOT = 14] = "BLOT";
        e[e.INLINE = 7] = "INLINE";
        e[e.BLOCK = 11] = "BLOCK";
        e[e.BLOCK_BLOT = 10] = "BLOCK_BLOT";
        e[e.INLINE_BLOT = 6] = "INLINE_BLOT";
        e[e.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE";
        e[e.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE";
        e[e.ANY = 15] = "ANY";
      })(i = t.Scope || (t.Scope = {}));
      t.create = function (e, t) {
        var n = u(e);
        if (null == n) {
          throw new o("Unable to create " + e + " blot");
        }
        var r = n;
        var i = e instanceof Node || e.nodeType === Node.TEXT_NODE ? e : r.create(t);
        return new r(i, t);
      };
      t.find = function e(n, r) {
        if (void 0 === r) {
          r = !1;
        }
        return null == n ? null : null != n[t.DATA_KEY] ? n[t.DATA_KEY].blot : r ? e(n.parentNode, r) : null;
      };
      t.query = u;
      t.register = function e() {
        for (var t = [], n = 0; n < arguments.length; n++) {
          t[n] = arguments[n];
        }
        if (t.length > 1) {
          return t.map(function (t) {
            return e(t);
          });
        }
        var r = t[0];
        if ("string" !== typeof r.blotName && "string" !== typeof r.attrName) {
          throw new o("Invalid definition");
        }
        if ("abstract" === r.blotName) {
          throw new o("Cannot register abstract class");
        }
        l[r.blotName || r.attrName] = r;
        if ("string" === typeof r.keyName) {
          a[r.keyName] = r;
        } else if (null != r.className && (s[r.className] = r), null != r.tagName) {
          if (Array.isArray(r.tagName)) {
            r.tagName = r.tagName.map(function (e) {
              return e.toUpperCase();
            });
          } else {
            r.tagName = r.tagName.toUpperCase();
          }
          var i = Array.isArray(r.tagName) ? r.tagName : [r.tagName];
          i.forEach(function (e) {
            if (!(null != c[e] && null != r.className)) {
              c[e] = r;
            }
          });
        }
        return r;
      };
    }, function (e, t, n) {
      var r = n(51);
      var o = n(11);
      var i = n(3);
      var a = n(20);
      var s = String.fromCharCode(0);
      var c = function (e) {
        if (Array.isArray(e)) {
          this.ops = e;
        } else {
          if (null != e && Array.isArray(e.ops)) {
            this.ops = e.ops;
          } else {
            this.ops = [];
          }
        }
      };
      c.prototype.insert = function (e, t) {
        var n = {};
        return 0 === e.length ? this : (n.insert = e, null != t && "object" === typeof t && Object.keys(t).length > 0 && (n.attributes = t), this.push(n));
      };
      c.prototype.delete = function (e) {
        return e <= 0 ? this : this.push({
          delete: e
        });
      };
      c.prototype.retain = function (e, t) {
        if (e <= 0) {
          return this;
        }
        var n = {
          retain: e
        };
        if (null != t && "object" === typeof t && Object.keys(t).length > 0) {
          n.attributes = t;
        }
        return this.push(n);
      };
      c.prototype.push = function (e) {
        var t = this.ops.length;
        var n = this.ops[t - 1];
        e = i(!0, {}, e);
        if ("object" === typeof n) {
          if ("number" === typeof e.delete && "number" === typeof n.delete) {
            this.ops[t - 1] = {
              delete: n.delete + e.delete
            };
            return this;
          }
          if ("number" === typeof n.delete && null != e.insert && (t -= 1, "object" !== typeof (n = this.ops[t - 1]))) {
            this.ops.unshift(e);
            return this;
          }
          if (o(e.attributes, n.attributes)) {
            if ("string" === typeof e.insert && "string" === typeof n.insert) {
              this.ops[t - 1] = {
                insert: n.insert + e.insert
              };
              if ("object" === typeof e.attributes) {
                this.ops[t - 1].attributes = e.attributes;
              }
              return this;
            }
            if ("number" === typeof e.retain && "number" === typeof n.retain) {
              this.ops[t - 1] = {
                retain: n.retain + e.retain
              };
              if ("object" === typeof e.attributes) {
                this.ops[t - 1].attributes = e.attributes;
              }
              return this;
            }
          }
        }
        if (t === this.ops.length) {
          this.ops.push(e);
        } else {
          this.ops.splice(t, 0, e);
        }
        return this;
      };
      c.prototype.chop = function () {
        var e = this.ops[this.ops.length - 1];
        if (e && e.retain && !e.attributes) {
          this.ops.pop();
        }
        return this;
      };
      c.prototype.filter = function (e) {
        return this.ops.filter(e);
      };
      c.prototype.forEach = function (e) {
        this.ops.forEach(e);
      };
      c.prototype.map = function (e) {
        return this.ops.map(e);
      };
      c.prototype.partition = function (e) {
        var t = [];
        var n = [];
        this.forEach(function (r) {
          (e(r) ? t : n).push(r);
        });
        return [t, n];
      };
      c.prototype.reduce = function (e, t) {
        return this.ops.reduce(e, t);
      };
      c.prototype.changeLength = function () {
        return this.reduce(function (e, t) {
          return t.insert ? e + a.length(t) : t.delete ? e - t.delete : e;
        }, 0);
      };
      c.prototype.length = function () {
        return this.reduce(function (e, t) {
          return e + a.length(t);
        }, 0);
      };
      c.prototype.slice = function (e, t) {
        e = e || 0;
        if ("number" !== typeof t) {
          t = 1 / 0;
        }
        for (var n = [], r = a.iterator(this.ops), o = 0; o < t && r.hasNext();) {
          var i;
          if (o < e) {
            i = r.next(e - o);
          } else {
            i = r.next(t - o);
            n.push(i);
          }
          o += a.length(i);
        }
        return new c(n);
      };
      c.prototype.compose = function (e) {
        var t = a.iterator(this.ops);
        var n = a.iterator(e.ops);
        var r = [];
        var i = n.peek();
        if (null != i && "number" === typeof i.retain && null == i.attributes) {
          for (var s = i.retain; "insert" === t.peekType() && t.peekLength() <= s;) {
            s -= t.peekLength();
            r.push(t.next());
          }
          if (i.retain - s > 0) {
            n.next(i.retain - s);
          }
        }
        for (var l = new c(r); t.hasNext() || n.hasNext();) {
          if ("insert" === n.peekType()) {
            l.push(n.next());
          } else if ("delete" === t.peekType()) {
            l.push(t.next());
          } else {
            var u = Math.min(t.peekLength(), n.peekLength());
            var d = t.next(u);
            var p = n.next(u);
            if ("number" === typeof p.retain) {
              var f = {};
              if ("number" === typeof d.retain) {
                f.retain = u;
              } else {
                f.insert = d.insert;
              }
              var h = a.attributes.compose(d.attributes, p.attributes, "number" === typeof d.retain);
              if (h) {
                f.attributes = h;
              }
              l.push(f);
              if (!n.hasNext() && o(l.ops[l.ops.length - 1], f)) {
                var m = new c(t.rest());
                return l.concat(m).chop();
              }
            } else if ("number" === typeof p.delete && "number" === typeof d.retain) {
              l.push(p);
            }
          }
        }
        return l.chop();
      };
      c.prototype.concat = function (e) {
        var t = new c(this.ops.slice());
        if (e.ops.length > 0) {
          t.push(e.ops[0]);
          t.ops = t.ops.concat(e.ops.slice(1));
        }
        return t;
      };
      c.prototype.diff = function (e, t) {
        if (this.ops === e.ops) {
          return new c();
        }
        var n = [this, e].map(function (t) {
          return t.map(function (n) {
            if (null != n.insert) {
              return "string" === typeof n.insert ? n.insert : s;
            }
            throw new Error("diff() called " + (t === e ? "on" : "with") + " non-document");
          }).join("");
        });
        var i = new c();
        var l = r(n[0], n[1], t);
        var u = a.iterator(this.ops);
        var d = a.iterator(e.ops);
        l.forEach(function (e) {
          for (var t = e[1].length; t > 0;) {
            var n = 0;
            switch (e[0]) {
              case r.INSERT:
                n = Math.min(d.peekLength(), t);
                i.push(d.next(n));
                break;
              case r.DELETE:
                n = Math.min(t, u.peekLength());
                u.next(n);
                i.delete(n);
                break;
              case r.EQUAL:
                n = Math.min(u.peekLength(), d.peekLength(), t);
                var s = u.next(n),
                  c = d.next(n);
                if (o(s.insert, c.insert)) {
                  i.retain(n, a.attributes.diff(s.attributes, c.attributes));
                } else {
                  i.push(c).delete(n);
                }
            }
            t -= n;
          }
        });
        return i.chop();
      };
      c.prototype.eachLine = function (e, t) {
        t = t || "\n";
        for (var n = a.iterator(this.ops), r = new c(), o = 0; n.hasNext();) {
          if ("insert" !== n.peekType()) {
            return;
          }
          var i = n.peek();
          var s = a.length(i) - n.peekLength();
          var l = "string" === typeof i.insert ? i.insert.indexOf(t, s) - s : -1;
          if (l < 0) {
            r.push(n.next());
          } else if (l > 0) {
            r.push(n.next(l));
          } else {
            if (!1 === e(r, n.next(1).attributes || {}, o)) {
              return;
            }
            o += 1;
            r = new c();
          }
        }
        if (r.length() > 0) {
          e(r, {}, o);
        }
      };
      c.prototype.transform = function (e, t) {
        t = !!t;
        if ("number" === typeof e) {
          return this.transformPosition(e, t);
        }
        for (var n = a.iterator(this.ops), r = a.iterator(e.ops), o = new c(); n.hasNext() || r.hasNext();) {
          if ("insert" !== n.peekType() || !t && "insert" === r.peekType()) {
            if ("insert" === r.peekType()) {
              o.push(r.next());
            } else {
              var i = Math.min(n.peekLength(), r.peekLength());
              var s = n.next(i);
              var l = r.next(i);
              if (s.delete) {
                continue;
              }
              if (l.delete) {
                o.push(l);
              } else {
                o.retain(i, a.attributes.transform(s.attributes, l.attributes, t));
              }
            }
          } else {
            o.retain(a.length(n.next()));
          }
        }
        return o.chop();
      };
      c.prototype.transformPosition = function (e, t) {
        t = !!t;
        for (var n = a.iterator(this.ops), r = 0; n.hasNext() && r <= e;) {
          var o = n.peekLength();
          var i = n.peekType();
          n.next();
          if ("delete" !== i) {
            if ("insert" === i && (r < e || !t)) {
              e += o;
            }
            r += o;
          } else {
            e -= Math.min(o, e - r);
          }
        }
        return e;
      };
      e.exports = c;
    }, function (e, t) {
      "use strict";

      var n = Object.prototype.hasOwnProperty;
      var r = Object.prototype.toString;
      var o = Object.defineProperty;
      var i = Object.getOwnPropertyDescriptor;
      var a = function (e) {
        return "function" === typeof Array.isArray ? Array.isArray(e) : "[object Array]" === r.call(e);
      };
      var s = function (e) {
        if (!e || "[object Object]" !== r.call(e)) {
          return !1;
        }
        var t;
        var o = n.call(e, "constructor");
        var i = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, "isPrototypeOf");
        if (e.constructor && !o && !i) {
          return !1;
        }
        for (t in e);
        return "undefined" === typeof t || n.call(e, t);
      };
      var c = function (e, t) {
        if (o && "__proto__" === t.name) {
          o(e, t.name, {
            enumerable: !0,
            configurable: !0,
            value: t.newValue,
            writable: !0
          });
        } else {
          e[t.name] = t.newValue;
        }
      };
      var l = function (e, t) {
        if ("__proto__" === t) {
          if (!n.call(e, t)) {
            return;
          }
          if (i) {
            return i(e, t).value;
          }
        }
        return e[t];
      };
      e.exports = function e() {
        var t;
        var n;
        var r;
        var o;
        var i;
        var u;
        var d = arguments[0];
        var p = 1;
        var f = arguments.length;
        var h = !1;
        for ("boolean" === typeof d && (h = d, d = arguments[1] || {}, p = 2), (null == d || "object" !== typeof d && "function" !== typeof d) && (d = {}); p < f; ++p) {
          if (null != (t = arguments[p])) {
            for (n in t) {
              r = l(d, n);
              if (d !== (o = l(t, n))) {
                if (h && o && (s(o) || (i = a(o)))) {
                  if (i) {
                    i = !1;
                    u = r && a(r) ? r : [];
                  } else {
                    u = r && s(r) ? r : {};
                  }
                  c(d, {
                    name: n,
                    newValue: e(h, u, o)
                  });
                } else {
                  if ("undefined" !== typeof o) {
                    c(d, {
                      name: n,
                      newValue: o
                    });
                  }
                }
              }
            }
          }
        }
        return d;
      };
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.default = t.BlockEmbed = t.bubbleFormats = void 0;
      var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var o = function e(t, n, r) {
        if (null === t) {
          t = Function.prototype;
        }
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ("value" in o) {
          return o.value;
        }
        var a = o.get;
        return void 0 !== a ? a.call(r) : void 0;
      };
      var i = d(n(3));
      var a = d(n(2));
      var s = d(n(0));
      var c = d(n(16));
      var l = d(n(6));
      var u = d(n(7));
      function d(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      function p(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function f(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
      }
      function h(e, t) {
        if ("function" !== typeof t && null !== t) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e, t);
          } else {
            e.__proto__ = t;
          }
        }
      }
      var m = function (e) {
        function t() {
          p(this, t);
          return f(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        h(t, e);
        r(t, [{
          key: "attach",
          value: function () {
            o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "attach", this).call(this);
            this.attributes = new s.default.Attributor.Store(this.domNode);
          }
        }, {
          key: "delta",
          value: function () {
            return new a.default().insert(this.value(), (0, i.default)(this.formats(), this.attributes.values()));
          }
        }, {
          key: "format",
          value: function (e, t) {
            var n = s.default.query(e, s.default.Scope.BLOCK_ATTRIBUTE);
            if (null != n) {
              this.attributes.attribute(n, t);
            }
          }
        }, {
          key: "formatAt",
          value: function (e, t, n, r) {
            this.format(n, r);
          }
        }, {
          key: "insertAt",
          value: function (e, n, r) {
            if ("string" === typeof n && n.endsWith("\n")) {
              var i = s.default.create(g.blotName);
              this.parent.insertBefore(i, 0 === e ? this : this.next);
              i.insertAt(0, n.slice(0, -1));
            } else {
              o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "insertAt", this).call(this, e, n, r);
            }
          }
        }]);
        return t;
      }(s.default.Embed);
      m.scope = s.default.Scope.BLOCK_BLOT;
      var g = function (e) {
        function t(e) {
          p(this, t);
          var n = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          n.cache = {};
          return n;
        }
        h(t, e);
        r(t, [{
          key: "delta",
          value: function () {
            if (null == this.cache.delta) {
              this.cache.delta = this.descendants(s.default.Leaf).reduce(function (e, t) {
                return 0 === t.length() ? e : e.insert(t.value(), _(t));
              }, new a.default()).insert("\n", _(this));
            }
            return this.cache.delta;
          }
        }, {
          key: "deleteAt",
          value: function (e, n) {
            o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "deleteAt", this).call(this, e, n);
            this.cache = {};
          }
        }, {
          key: "formatAt",
          value: function (e, n, r, i) {
            if (!(n <= 0)) {
              if (s.default.query(r, s.default.Scope.BLOCK)) {
                if (e + n === this.length()) {
                  this.format(r, i);
                }
              } else {
                o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "formatAt", this).call(this, e, Math.min(n, this.length() - e - 1), r, i);
              }
              this.cache = {};
            }
          }
        }, {
          key: "insertAt",
          value: function (e, n, r) {
            if (null != r) {
              return o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "insertAt", this).call(this, e, n, r);
            }
            if (0 !== n.length) {
              var i = n.split("\n");
              var a = i.shift();
              if (a.length > 0) {
                if (e < this.length() - 1 || null == this.children.tail) {
                  o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "insertAt", this).call(this, Math.min(e, this.length() - 1), a);
                } else {
                  this.children.tail.insertAt(this.children.tail.length(), a);
                }
                this.cache = {};
              }
              var s = this;
              i.reduce(function (e, t) {
                (s = s.split(e, !0)).insertAt(0, t);
                return t.length;
              }, e + a.length);
            }
          }
        }, {
          key: "insertBefore",
          value: function (e, n) {
            var r = this.children.head;
            o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "insertBefore", this).call(this, e, n);
            if (r instanceof c.default) {
              r.remove();
            }
            this.cache = {};
          }
        }, {
          key: "length",
          value: function () {
            if (null == this.cache.length) {
              this.cache.length = o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "length", this).call(this) + 1;
            }
            return this.cache.length;
          }
        }, {
          key: "moveChildren",
          value: function (e, n) {
            o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "moveChildren", this).call(this, e, n);
            this.cache = {};
          }
        }, {
          key: "optimize",
          value: function (e) {
            o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "optimize", this).call(this, e);
            this.cache = {};
          }
        }, {
          key: "path",
          value: function (e) {
            return o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "path", this).call(this, e, !0);
          }
        }, {
          key: "removeChild",
          value: function (e) {
            o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "removeChild", this).call(this, e);
            this.cache = {};
          }
        }, {
          key: "split",
          value: function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (n && (0 === e || e >= this.length() - 1)) {
              var r = this.clone();
              return 0 === e ? (this.parent.insertBefore(r, this), this) : (this.parent.insertBefore(r, this.next), r);
            }
            var i = o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "split", this).call(this, e, n);
            this.cache = {};
            return i;
          }
        }]);
        return t;
      }(s.default.Block);
      function _(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return null == e ? t : ("function" === typeof e.formats && (t = (0, i.default)(t, e.formats())), null == e.parent || "scroll" == e.parent.blotName || e.parent.statics.scope !== e.statics.scope ? t : _(e.parent, t));
      }
      g.blotName = "block";
      g.tagName = "P";
      g.defaultChild = "break";
      g.allowedChildren = [l.default, s.default.Embed, u.default];
      t.bubbleFormats = _;
      t.BlockEmbed = m;
      t.default = g;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.default = t.overload = t.expandConfig = void 0;
      var r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      };
      var o = function (e, t) {
        if (Array.isArray(e)) {
          return e;
        }
        if (Symbol.iterator in Object(e)) {
          return function (e, t) {
            var n = [];
            var r = !0;
            var o = !1;
            var i = void 0;
            try {
              for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) {
                ;
              }
            } catch (c) {
              o = !0;
              i = c;
            } finally {
              try {
                if (!r && s.return) {
                  s.return();
                }
              } finally {
                if (o) {
                  throw i;
                }
              }
            }
            return n;
          }(e, t);
        }
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
      var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      n(50);
      var a = g(n(2));
      var s = g(n(14));
      var c = g(n(8));
      var l = g(n(9));
      var u = g(n(0));
      var d = n(15);
      var p = g(d);
      var f = g(n(3));
      var h = g(n(10));
      var m = g(n(34));
      function g(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      function _(e, t, n) {
        if (t in e) {
          Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          });
        } else {
          e[t] = n;
        }
        return e;
      }
      function v(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var b = (0, h.default)("quill");
      var y = function () {
        function e(t) {
          var n = this;
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          v(this, e);
          this.options = E(t, r);
          this.container = this.options.container;
          if (null == this.container) {
            return b.error("Invalid Quill container", t);
          }
          if (this.options.debug) {
            e.debug(this.options.debug);
          }
          var o = this.container.innerHTML.trim();
          this.container.classList.add("ql-container");
          this.container.innerHTML = "";
          this.container.__quill = this;
          this.root = this.addContainer("ql-editor");
          this.root.classList.add("ql-blank");
          this.root.setAttribute("data-gramm", !1);
          this.scrollingContainer = this.options.scrollingContainer || this.root;
          this.emitter = new c.default();
          this.scroll = u.default.create(this.root, {
            emitter: this.emitter,
            whitelist: this.options.formats
          });
          this.editor = new s.default(this.scroll);
          this.selection = new p.default(this.scroll, this.emitter);
          this.theme = new this.options.theme(this, this.options);
          this.keyboard = this.theme.addModule("keyboard");
          this.clipboard = this.theme.addModule("clipboard");
          this.history = this.theme.addModule("history");
          this.theme.init();
          this.emitter.on(c.default.events.EDITOR_CHANGE, function (e) {
            if (e === c.default.events.TEXT_CHANGE) {
              n.root.classList.toggle("ql-blank", n.editor.isBlank());
            }
          });
          this.emitter.on(c.default.events.SCROLL_UPDATE, function (e, t) {
            var r = n.selection.lastRange;
            var o = r && 0 === r.length ? r.index : void 0;
            O.call(n, function () {
              return n.editor.update(null, t, o);
            }, e);
          });
          var i = this.clipboard.convert("<div class='ql-editor' style=\"white-space: normal;\">" + o + "<p><br></p></div>");
          this.setContents(i);
          this.history.clear();
          if (this.options.placeholder) {
            this.root.setAttribute("data-placeholder", this.options.placeholder);
          }
          if (this.options.readOnly) {
            this.disable();
          }
        }
        i(e, null, [{
          key: "debug",
          value: function (e) {
            if (!0 === e) {
              e = "log";
            }
            h.default.level(e);
          }
        }, {
          key: "find",
          value: function (e) {
            return e.__quill || u.default.find(e);
          }
        }, {
          key: "import",
          value: function (e) {
            if (null == this.imports[e]) {
              b.error("Cannot import " + e + ". Are you sure it was registered?");
            }
            return this.imports[e];
          }
        }, {
          key: "register",
          value: function (e, t) {
            var n = this;
            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if ("string" !== typeof e) {
              var o = e.attrName || e.blotName;
              if ("string" === typeof o) {
                this.register("formats/" + o, e, t);
              } else {
                Object.keys(e).forEach(function (r) {
                  n.register(r, e[r], t);
                });
              }
            } else {
              if (!(null == this.imports[e] || r)) {
                b.warn("Overwriting " + e + " with", t);
              }
              this.imports[e] = t;
              if ((e.startsWith("blots/") || e.startsWith("formats/")) && "abstract" !== t.blotName) {
                u.default.register(t);
              } else {
                if (e.startsWith("modules") && "function" === typeof t.register) {
                  t.register();
                }
              }
            }
          }
        }]);
        i(e, [{
          key: "addContainer",
          value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if ("string" === typeof e) {
              var n = e;
              (e = document.createElement("div")).classList.add(n);
            }
            this.container.insertBefore(e, t);
            return e;
          }
        }, {
          key: "blur",
          value: function () {
            this.selection.setRange(null);
          }
        }, {
          key: "deleteText",
          value: function (e, t, n) {
            var r = this;
            var i = w(e, t, n);
            var a = o(i, 4);
            e = a[0];
            t = a[1];
            n = a[3];
            return O.call(this, function () {
              return r.editor.deleteText(e, t);
            }, n, e, -1 * t);
          }
        }, {
          key: "disable",
          value: function () {
            this.enable(!1);
          }
        }, {
          key: "enable",
          value: function () {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            this.scroll.enable(e);
            this.container.classList.toggle("ql-disabled", !e);
          }
        }, {
          key: "focus",
          value: function () {
            var e = this.scrollingContainer.scrollTop;
            this.selection.focus();
            this.scrollingContainer.scrollTop = e;
            this.scrollIntoView();
          }
        }, {
          key: "format",
          value: function (e, t) {
            var n = this;
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.default.sources.API;
            return O.call(this, function () {
              var r = n.getSelection(!0);
              var o = new a.default();
              if (null == r) {
                return o;
              }
              if (u.default.query(e, u.default.Scope.BLOCK)) {
                o = n.editor.formatLine(r.index, r.length, _({}, e, t));
              } else {
                if (0 === r.length) {
                  n.selection.format(e, t);
                  return o;
                }
                o = n.editor.formatText(r.index, r.length, _({}, e, t));
              }
              n.setSelection(r, c.default.sources.SILENT);
              return o;
            }, r);
          }
        }, {
          key: "formatLine",
          value: function (e, t, n, r, i) {
            var a;
            var s = this;
            var c = w(e, t, n, r, i);
            var l = o(c, 4);
            e = l[0];
            t = l[1];
            a = l[2];
            i = l[3];
            return O.call(this, function () {
              return s.editor.formatLine(e, t, a);
            }, i, e, 0);
          }
        }, {
          key: "formatText",
          value: function (e, t, n, r, i) {
            var a;
            var s = this;
            var c = w(e, t, n, r, i);
            var l = o(c, 4);
            e = l[0];
            t = l[1];
            a = l[2];
            i = l[3];
            return O.call(this, function () {
              return s.editor.formatText(e, t, a);
            }, i, e, 0);
          }
        }, {
          key: "getBounds",
          value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            var n = void 0;
            n = "number" === typeof e ? this.selection.getBounds(e, t) : this.selection.getBounds(e.index, e.length);
            var r = this.container.getBoundingClientRect();
            return {
              bottom: n.bottom - r.top,
              height: n.height,
              left: n.left - r.left,
              right: n.right - r.left,
              top: n.top - r.top,
              width: n.width
            };
          }
        }, {
          key: "getContents",
          value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - e;
            var n = w(e, t);
            var r = o(n, 2);
            e = r[0];
            t = r[1];
            return this.editor.getContents(e, t);
          }
        }, {
          key: "getFormat",
          value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getSelection(!0);
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return "number" === typeof e ? this.editor.getFormat(e, t) : this.editor.getFormat(e.index, e.length);
          }
        }, {
          key: "getIndex",
          value: function (e) {
            return e.offset(this.scroll);
          }
        }, {
          key: "getLength",
          value: function () {
            return this.scroll.length();
          }
        }, {
          key: "getLeaf",
          value: function (e) {
            return this.scroll.leaf(e);
          }
        }, {
          key: "getLine",
          value: function (e) {
            return this.scroll.line(e);
          }
        }, {
          key: "getLines",
          value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;
            return "number" !== typeof e ? this.scroll.lines(e.index, e.length) : this.scroll.lines(e, t);
          }
        }, {
          key: "getModule",
          value: function (e) {
            return this.theme.modules[e];
          }
        }, {
          key: "getSelection",
          value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (e) {
              this.focus();
            }
            this.update();
            return this.selection.getRange()[0];
          }
        }, {
          key: "getText",
          value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - e;
            var n = w(e, t);
            var r = o(n, 2);
            e = r[0];
            t = r[1];
            return this.editor.getText(e, t);
          }
        }, {
          key: "hasFocus",
          value: function () {
            return this.selection.hasFocus();
          }
        }, {
          key: "insertEmbed",
          value: function (t, n, r) {
            var o = this;
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e.sources.API;
            return O.call(this, function () {
              return o.editor.insertEmbed(t, n, r);
            }, i, t);
          }
        }, {
          key: "insertText",
          value: function (e, t, n, r, i) {
            var a;
            var s = this;
            var c = w(e, 0, n, r, i);
            var l = o(c, 4);
            e = l[0];
            a = l[2];
            i = l[3];
            return O.call(this, function () {
              return s.editor.insertText(e, t, a);
            }, i, e, t.length);
          }
        }, {
          key: "isEnabled",
          value: function () {
            return !this.container.classList.contains("ql-disabled");
          }
        }, {
          key: "off",
          value: function () {
            return this.emitter.off.apply(this.emitter, arguments);
          }
        }, {
          key: "on",
          value: function () {
            return this.emitter.on.apply(this.emitter, arguments);
          }
        }, {
          key: "once",
          value: function () {
            return this.emitter.once.apply(this.emitter, arguments);
          }
        }, {
          key: "pasteHTML",
          value: function (e, t, n) {
            this.clipboard.dangerouslyPasteHTML(e, t, n);
          }
        }, {
          key: "removeFormat",
          value: function (e, t, n) {
            var r = this;
            var i = w(e, t, n);
            var a = o(i, 4);
            e = a[0];
            t = a[1];
            n = a[3];
            return O.call(this, function () {
              return r.editor.removeFormat(e, t);
            }, n, e);
          }
        }, {
          key: "scrollIntoView",
          value: function () {
            this.selection.scrollIntoView(this.scrollingContainer);
          }
        }, {
          key: "setContents",
          value: function (e) {
            var t = this;
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.default.sources.API;
            return O.call(this, function () {
              e = new a.default(e);
              var n = t.getLength();
              var r = t.editor.deleteText(0, n);
              var o = t.editor.applyDelta(e);
              var i = o.ops[o.ops.length - 1];
              if (null != i && "string" === typeof i.insert && "\n" === i.insert[i.insert.length - 1]) {
                t.editor.deleteText(t.getLength() - 1, 1);
                o.delete(1);
              }
              return r.compose(o);
            }, n);
          }
        }, {
          key: "setSelection",
          value: function (t, n, r) {
            if (null == t) {
              this.selection.setRange(null, n || e.sources.API);
            } else {
              var i = w(t, n, r);
              var a = o(i, 4);
              t = a[0];
              n = a[1];
              r = a[3];
              this.selection.setRange(new d.Range(t, n), r);
              if (r !== c.default.sources.SILENT) {
                this.selection.scrollIntoView(this.scrollingContainer);
              }
            }
          }
        }, {
          key: "setText",
          value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.default.sources.API;
            var n = new a.default().insert(e);
            return this.setContents(n, t);
          }
        }, {
          key: "update",
          value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.default.sources.USER;
            var t = this.scroll.update(e);
            this.selection.update(e);
            return t;
          }
        }, {
          key: "updateContents",
          value: function (e) {
            var t = this;
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.default.sources.API;
            return O.call(this, function () {
              e = new a.default(e);
              return t.editor.applyDelta(e, n);
            }, n, !0);
          }
        }]);
        return e;
      }();
      function E(e, t) {
        if ((t = (0, f.default)(!0, {
          container: e,
          modules: {
            clipboard: !0,
            keyboard: !0,
            history: !0
          }
        }, t)).theme && t.theme !== y.DEFAULTS.theme) {
          t.theme = y.import("themes/" + t.theme);
          if (null == t.theme) {
            throw new Error("Invalid theme " + t.theme + ". Did you register it?");
          }
        } else {
          t.theme = m.default;
        }
        var n = (0, f.default)(!0, {}, t.theme.DEFAULTS);
        [n, t].forEach(function (e) {
          e.modules = e.modules || {};
          Object.keys(e.modules).forEach(function (t) {
            if (!0 === e.modules[t]) {
              e.modules[t] = {};
            }
          });
        });
        var r = Object.keys(n.modules).concat(Object.keys(t.modules)).reduce(function (e, t) {
          var n = y.import("modules/" + t);
          if (null == n) {
            b.error("Cannot load " + t + " module. Are you sure you registered it?");
          } else {
            e[t] = n.DEFAULTS || {};
          }
          return e;
        }, {});
        if (null != t.modules && t.modules.toolbar && t.modules.toolbar.constructor !== Object) {
          t.modules.toolbar = {
            container: t.modules.toolbar
          };
        }
        t = (0, f.default)(!0, {}, y.DEFAULTS, {
          modules: r
        }, n, t);
        ["bounds", "container", "scrollingContainer"].forEach(function (e) {
          if ("string" === typeof t[e]) {
            t[e] = document.querySelector(t[e]);
          }
        });
        t.modules = Object.keys(t.modules).reduce(function (e, n) {
          if (t.modules[n]) {
            e[n] = t.modules[n];
          }
          return e;
        }, {});
        return t;
      }
      function O(e, t, n, r) {
        if (this.options.strict && !this.isEnabled() && t === c.default.sources.USER) {
          return new a.default();
        }
        var o = null == n ? null : this.getSelection();
        var i = this.editor.delta;
        var s = e();
        if (null != o) {
          if (!0 === n) {
            n = o.index;
          }
          if (null == r) {
            o = C(o, s, t);
          } else {
            if (0 !== r) {
              o = C(o, n, r, t);
            }
          }
          this.setSelection(o, c.default.sources.SILENT);
        }
        if (s.length() > 0) {
          var l;
          var u;
          var d = [c.default.events.TEXT_CHANGE, s, i, t];
          (l = this.emitter).emit.apply(l, [c.default.events.EDITOR_CHANGE].concat(d));
          if (t !== c.default.sources.SILENT) {
            (u = this.emitter).emit.apply(u, d);
          }
        }
        return s;
      }
      function w(e, t, n, o, i) {
        var a = {};
        if ("number" === typeof e.index && "number" === typeof e.length) {
          if ("number" !== typeof t) {
            i = o;
            o = n;
            n = t;
            t = e.length;
            e = e.index;
          } else {
            t = e.length;
            e = e.index;
          }
        } else {
          if ("number" !== typeof t) {
            i = o;
            o = n;
            n = t;
            t = 0;
          }
        }
        if ("object" === ("undefined" === typeof n ? "undefined" : r(n))) {
          a = n;
          i = o;
        } else {
          if ("string" === typeof n) {
            if (null != o) {
              a[n] = o;
            } else {
              i = n;
            }
          }
        }
        return [e, t, a, i = i || c.default.sources.API];
      }
      function C(e, t, n, r) {
        if (null == e) {
          return null;
        }
        var i = void 0;
        var s = void 0;
        if (t instanceof a.default) {
          var l = [e.index, e.index + e.length].map(function (e) {
            return t.transformPosition(e, r !== c.default.sources.USER);
          });
          var u = o(l, 2);
          i = u[0];
          s = u[1];
        } else {
          var p = [e.index, e.index + e.length].map(function (e) {
            return e < t || e === t && r === c.default.sources.USER ? e : n >= 0 ? e + n : Math.max(t, e + n);
          });
          var f = o(p, 2);
          i = f[0];
          s = f[1];
        }
        return new d.Range(i, s - i);
      }
      y.DEFAULTS = {
        bounds: null,
        formats: null,
        modules: {},
        placeholder: "",
        readOnly: !1,
        scrollingContainer: null,
        strict: !0,
        theme: "default"
      };
      y.events = c.default.events;
      y.sources = c.default.sources;
      y.version = "1.3.7";
      y.imports = {
        delta: a.default,
        parchment: u.default,
        "core/module": l.default,
        "core/theme": m.default
      };
      t.expandConfig = E;
      t.overload = w;
      t.default = y;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var o = function e(t, n, r) {
        if (null === t) {
          t = Function.prototype;
        }
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ("value" in o) {
          return o.value;
        }
        var a = o.get;
        return void 0 !== a ? a.call(r) : void 0;
      };
      var i = s(n(7));
      var a = s(n(0));
      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      function c(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function l(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
      }
      var u = function (e) {
        function t() {
          c(this, t);
          return l(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        (function (e, t) {
          if ("function" !== typeof t && null !== t) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(t, e);
        r(t, [{
          key: "formatAt",
          value: function (e, n, r, i) {
            if (t.compare(this.statics.blotName, r) < 0 && a.default.query(r, a.default.Scope.BLOT)) {
              var s = this.isolate(e, n);
              if (i) {
                s.wrap(r, i);
              }
            } else {
              o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "formatAt", this).call(this, e, n, r, i);
            }
          }
        }, {
          key: "optimize",
          value: function (e) {
            o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "optimize", this).call(this, e);
            if (this.parent instanceof t && t.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
              var n = this.parent.isolate(this.offset(), this.length());
              this.moveChildren(n);
              n.wrap(this);
            }
          }
        }], [{
          key: "compare",
          value: function (e, n) {
            var r = t.order.indexOf(e);
            var o = t.order.indexOf(n);
            return r >= 0 || o >= 0 ? r - o : e === n ? 0 : e < n ? -1 : 1;
          }
        }]);
        return t;
      }(a.default.Inline);
      u.allowedChildren = [u, a.default.Embed, i.default];
      u.order = ["cursor", "inline", "underline", "strike", "italic", "bold", "script", "link", "code"];
      t.default = u;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r;
      var o = n(0);
      function i(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
      }
      var s = function (e) {
        function t() {
          i(this, t);
          return a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        (function (e, t) {
          if ("function" !== typeof t && null !== t) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(t, e);
        return t;
      }(((r = o) && r.__esModule ? r : {
        default: r
      }).default.Text);
      t.default = s;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var o = function e(t, n, r) {
        if (null === t) {
          t = Function.prototype;
        }
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ("value" in o) {
          return o.value;
        }
        var a = o.get;
        return void 0 !== a ? a.call(r) : void 0;
      };
      var i = a(n(54));
      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      var s = (0, a(n(10)).default)("quill:events");
      ["selectionchange", "mousedown", "mouseup", "click"].forEach(function (e) {
        document.addEventListener(e, function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {
            t[n] = arguments[n];
          }
          [].slice.call(document.querySelectorAll(".ql-container")).forEach(function (e) {
            var n;
            if (e.__quill && e.__quill.emitter) {
              (n = e.__quill.emitter).handleDOM.apply(n, t);
            }
          });
        });
      });
      var c = function (e) {
        function t() {
          !function (e, t) {
            if (!(e instanceof t)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }(this, t);
          var e = function (e, t) {
            if (!e) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          e.listeners = {};
          e.on("error", s.error);
          return e;
        }
        (function (e, t) {
          if ("function" !== typeof t && null !== t) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(t, e);
        r(t, [{
          key: "emit",
          value: function () {
            s.log.apply(s, arguments);
            o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "emit", this).apply(this, arguments);
          }
        }, {
          key: "handleDOM",
          value: function (e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
              n[r - 1] = arguments[r];
            }
            (this.listeners[e.type] || []).forEach(function (t) {
              var r = t.node;
              var o = t.handler;
              if (e.target === r || r.contains(e.target)) {
                o.apply(void 0, [e].concat(n));
              }
            });
          }
        }, {
          key: "listenDOM",
          value: function (e, t, n) {
            if (!this.listeners[e]) {
              this.listeners[e] = [];
            }
            this.listeners[e].push({
              node: t,
              handler: n
            });
          }
        }]);
        return t;
      }(i.default);
      c.events = {
        EDITOR_CHANGE: "editor-change",
        SCROLL_BEFORE_UPDATE: "scroll-before-update",
        SCROLL_OPTIMIZE: "scroll-optimize",
        SCROLL_UPDATE: "scroll-update",
        SELECTION_CHANGE: "selection-change",
        TEXT_CHANGE: "text-change"
      };
      c.sources = {
        API: "api",
        SILENT: "silent",
        USER: "user"
      };
      t.default = c;
    }, function (e, t, n) {
      "use strict";

      function r(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = function e(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        r(this, e);
        this.quill = t;
        this.options = n;
      };
      o.DEFAULTS = {};
      t.default = o;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = ["error", "warn", "log", "info"];
      var o = "warn";
      function i(e) {
        if (r.indexOf(e) <= r.indexOf(o)) {
          for (var t, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) {
            i[a - 1] = arguments[a];
          }
          (t = console)[e].apply(t, i);
        }
      }
      function a(e) {
        return r.reduce(function (t, n) {
          t[n] = i.bind(console, n, e);
          return t;
        }, {});
      }
      i.level = a.level = function (e) {
        o = e;
      };
      t.default = a;
    }, function (e, t, n) {
      var r = Array.prototype.slice;
      var o = n(52);
      var i = n(53);
      var a = e.exports = function (e, t, n) {
        if (!n) {
          n = {};
        }
        return e === t || (e instanceof Date && t instanceof Date ? e.getTime() === t.getTime() : !e || !t || "object" != typeof e && "object" != typeof t ? n.strict ? e === t : e == t : function (e, t, n) {
          var l;
          var u;
          if (s(e) || s(t)) {
            return !1;
          }
          if (e.prototype !== t.prototype) {
            return !1;
          }
          if (i(e)) {
            return !!i(t) && (e = r.call(e), t = r.call(t), a(e, t, n));
          }
          if (c(e)) {
            if (!c(t)) {
              return !1;
            }
            if (e.length !== t.length) {
              return !1;
            }
            for (l = 0; l < e.length; l++) {
              if (e[l] !== t[l]) {
                return !1;
              }
            }
            return !0;
          }
          try {
            var d = o(e);
            var p = o(t);
          } catch (f) {
            return !1;
          }
          if (d.length != p.length) {
            return !1;
          }
          for (d.sort(), p.sort(), l = d.length - 1; l >= 0; l--) {
            if (d[l] != p[l]) {
              return !1;
            }
          }
          for (l = d.length - 1; l >= 0; l--) {
            u = d[l];
            if (!a(e[u], t[u], n)) {
              return !1;
            }
          }
          return typeof e === typeof t;
        }(e, t, n));
      };
      function s(e) {
        return null === e || void 0 === e;
      }
      function c(e) {
        return !(!e || "object" !== typeof e || "number" !== typeof e.length) && "function" === typeof e.copy && "function" === typeof e.slice && !(e.length > 0 && "number" !== typeof e[0]);
      }
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = n(1);
      var o = function () {
        function e(e, t, n) {
          if (void 0 === n) {
            n = {};
          }
          this.attrName = e;
          this.keyName = t;
          var o = r.Scope.TYPE & r.Scope.ATTRIBUTE;
          if (null != n.scope) {
            this.scope = n.scope & r.Scope.LEVEL | o;
          } else {
            this.scope = r.Scope.ATTRIBUTE;
          }
          if (null != n.whitelist) {
            this.whitelist = n.whitelist;
          }
        }
        e.keys = function (e) {
          return [].map.call(e.attributes, function (e) {
            return e.name;
          });
        };
        e.prototype.add = function (e, t) {
          return !!this.canAdd(e, t) && (e.setAttribute(this.keyName, t), !0);
        };
        e.prototype.canAdd = function (e, t) {
          return null != r.query(e, r.Scope.BLOT & (this.scope | r.Scope.TYPE)) && (null == this.whitelist || ("string" === typeof t ? this.whitelist.indexOf(t.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(t) > -1));
        };
        e.prototype.remove = function (e) {
          e.removeAttribute(this.keyName);
        };
        e.prototype.value = function (e) {
          var t = e.getAttribute(this.keyName);
          return this.canAdd(e, t) && t ? t : "";
        };
        return e;
      }();
      t.default = o;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.default = t.Code = void 0;
      var r = function (e, t) {
        if (Array.isArray(e)) {
          return e;
        }
        if (Symbol.iterator in Object(e)) {
          return function (e, t) {
            var n = [];
            var r = !0;
            var o = !1;
            var i = void 0;
            try {
              for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) {
                ;
              }
            } catch (c) {
              o = !0;
              i = c;
            } finally {
              try {
                if (!r && s.return) {
                  s.return();
                }
              } finally {
                if (o) {
                  throw i;
                }
              }
            }
            return n;
          }(e, t);
        }
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
      var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var i = function e(t, n, r) {
        if (null === t) {
          t = Function.prototype;
        }
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ("value" in o) {
          return o.value;
        }
        var a = o.get;
        return void 0 !== a ? a.call(r) : void 0;
      };
      var a = d(n(2));
      var s = d(n(0));
      var c = d(n(4));
      var l = d(n(6));
      var u = d(n(7));
      function d(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      function p(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function f(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
      }
      function h(e, t) {
        if ("function" !== typeof t && null !== t) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e, t);
          } else {
            e.__proto__ = t;
          }
        }
      }
      var m = function (e) {
        function t() {
          p(this, t);
          return f(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        h(t, e);
        return t;
      }(l.default);
      m.blotName = "code";
      m.tagName = "CODE";
      var g = function (e) {
        function t() {
          p(this, t);
          return f(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        h(t, e);
        o(t, [{
          key: "delta",
          value: function () {
            var e = this;
            var t = this.domNode.textContent;
            if (t.endsWith("\n")) {
              t = t.slice(0, -1);
            }
            return t.split("\n").reduce(function (t, n) {
              return t.insert(n).insert("\n", e.formats());
            }, new a.default());
          }
        }, {
          key: "format",
          value: function (e, n) {
            if (e !== this.statics.blotName || !n) {
              var o = this.descendant(u.default, this.length() - 1);
              var a = r(o, 1)[0];
              if (null != a) {
                a.deleteAt(a.length() - 1, 1);
              }
              i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "format", this).call(this, e, n);
            }
          }
        }, {
          key: "formatAt",
          value: function (e, n, r, o) {
            if (0 !== n && null != s.default.query(r, s.default.Scope.BLOCK) && (r !== this.statics.blotName || o !== this.statics.formats(this.domNode))) {
              var i = this.newlineIndex(e);
              if (!(i < 0 || i >= e + n)) {
                var a = this.newlineIndex(e, !0) + 1;
                var c = i - a + 1;
                var l = this.isolate(a, c);
                var u = l.next;
                l.format(r, o);
                if (u instanceof t) {
                  u.formatAt(0, e - a + n - c, r, o);
                }
              }
            }
          }
        }, {
          key: "insertAt",
          value: function (e, t, n) {
            if (null == n) {
              var o = this.descendant(u.default, e);
              var i = r(o, 2);
              var a = i[0];
              var s = i[1];
              a.insertAt(s, t);
            }
          }
        }, {
          key: "length",
          value: function () {
            var e = this.domNode.textContent.length;
            return this.domNode.textContent.endsWith("\n") ? e : e + 1;
          }
        }, {
          key: "newlineIndex",
          value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (t) {
              return this.domNode.textContent.slice(0, e).lastIndexOf("\n");
            }
            var n = this.domNode.textContent.slice(e).indexOf("\n");
            return n > -1 ? e + n : -1;
          }
        }, {
          key: "optimize",
          value: function (e) {
            if (!this.domNode.textContent.endsWith("\n")) {
              this.appendChild(s.default.create("text", "\n"));
            }
            i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "optimize", this).call(this, e);
            var n = this.next;
            if (null != n && n.prev === this && n.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === n.statics.formats(n.domNode)) {
              n.optimize(e);
              n.moveChildren(this);
              n.remove();
            }
          }
        }, {
          key: "replace",
          value: function (e) {
            i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "replace", this).call(this, e);
            [].slice.call(this.domNode.querySelectorAll("*")).forEach(function (e) {
              var t = s.default.find(e);
              if (null == t) {
                e.parentNode.removeChild(e);
              } else {
                if (t instanceof s.default.Embed) {
                  t.remove();
                } else {
                  t.unwrap();
                }
              }
            });
          }
        }], [{
          key: "create",
          value: function (e) {
            var n = i(t.__proto__ || Object.getPrototypeOf(t), "create", this).call(this, e);
            n.setAttribute("spellcheck", !1);
            return n;
          }
        }, {
          key: "formats",
          value: function () {
            return !0;
          }
        }]);
        return t;
      }(c.default);
      g.blotName = "code-block";
      g.tagName = "PRE";
      g.TAB = "  ";
      t.Code = m;
      t.default = g;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      };
      var o = function (e, t) {
        if (Array.isArray(e)) {
          return e;
        }
        if (Symbol.iterator in Object(e)) {
          return function (e, t) {
            var n = [];
            var r = !0;
            var o = !1;
            var i = void 0;
            try {
              for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) {
                ;
              }
            } catch (c) {
              o = !0;
              i = c;
            } finally {
              try {
                if (!r && s.return) {
                  s.return();
                }
              } finally {
                if (o) {
                  throw i;
                }
              }
            }
            return n;
          }(e, t);
        }
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
      var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var a = _(n(2));
      var s = _(n(20));
      var c = _(n(0));
      var l = _(n(13));
      var u = _(n(24));
      var d = n(4);
      var p = _(d);
      var f = _(n(16));
      var h = _(n(21));
      var m = _(n(11));
      var g = _(n(3));
      function _(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      var v = /^[ -~]*$/;
      var b = function () {
        function e(t) {
          !function (e, t) {
            if (!(e instanceof t)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }(this, e);
          this.scroll = t;
          this.delta = this.getDelta();
        }
        i(e, [{
          key: "applyDelta",
          value: function (e) {
            var t = this;
            var n = !1;
            this.scroll.update();
            var i = this.scroll.length();
            this.scroll.batchStart();
            (e = function (e) {
              return e.reduce(function (e, t) {
                if (1 === t.insert) {
                  var n = (0, h.default)(t.attributes);
                  delete n.image;
                  return e.insert({
                    image: t.attributes.image
                  }, n);
                }
                if (!(null == t.attributes || !0 !== t.attributes.list && !0 !== t.attributes.bullet)) {
                  if ((t = (0, h.default)(t)).attributes.list) {
                    t.attributes.list = "ordered";
                  } else {
                    t.attributes.list = "bullet";
                    delete t.attributes.bullet;
                  }
                }
                if ("string" === typeof t.insert) {
                  var r = t.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                  return e.insert(r, t.attributes);
                }
                return e.push(t);
              }, new a.default());
            }(e)).reduce(function (e, a) {
              var l = a.retain || a.delete || a.insert.length || 1;
              var u = a.attributes || {};
              if (null != a.insert) {
                if ("string" === typeof a.insert) {
                  var f = a.insert;
                  if (f.endsWith("\n") && n) {
                    n = !1;
                    f = f.slice(0, -1);
                  }
                  if (e >= i && !f.endsWith("\n")) {
                    n = !0;
                  }
                  t.scroll.insertAt(e, f);
                  var h = t.scroll.line(e);
                  var m = o(h, 2);
                  var _ = m[0];
                  var v = m[1];
                  var b = (0, g.default)({}, (0, d.bubbleFormats)(_));
                  if (_ instanceof p.default) {
                    var y = _.descendant(c.default.Leaf, v);
                    var E = o(y, 1)[0];
                    b = (0, g.default)(b, (0, d.bubbleFormats)(E));
                  }
                  u = s.default.attributes.diff(b, u) || {};
                } else if ("object" === r(a.insert)) {
                  var O = Object.keys(a.insert)[0];
                  if (null == O) {
                    return e;
                  }
                  t.scroll.insertAt(e, O, a.insert[O]);
                }
                i += l;
              }
              Object.keys(u).forEach(function (n) {
                t.scroll.formatAt(e, l, n, u[n]);
              });
              return e + l;
            }, 0);
            e.reduce(function (e, n) {
              return "number" === typeof n.delete ? (t.scroll.deleteAt(e, n.delete), e) : e + (n.retain || n.insert.length || 1);
            }, 0);
            this.scroll.batchEnd();
            return this.update(e);
          }
        }, {
          key: "deleteText",
          value: function (e, t) {
            this.scroll.deleteAt(e, t);
            return this.update(new a.default().retain(e).delete(t));
          }
        }, {
          key: "formatLine",
          value: function (e, t) {
            var n = this;
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.scroll.update();
            Object.keys(r).forEach(function (o) {
              if (null == n.scroll.whitelist || n.scroll.whitelist[o]) {
                var i = n.scroll.lines(e, Math.max(t, 1));
                var a = t;
                i.forEach(function (t) {
                  var i = t.length();
                  if (t instanceof l.default) {
                    var s = e - t.offset(n.scroll);
                    var c = t.newlineIndex(s + a) - s + 1;
                    t.formatAt(s, c, o, r[o]);
                  } else {
                    t.format(o, r[o]);
                  }
                  a -= i;
                });
              }
            });
            this.scroll.optimize();
            return this.update(new a.default().retain(e).retain(t, (0, h.default)(r)));
          }
        }, {
          key: "formatText",
          value: function (e, t) {
            var n = this;
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            Object.keys(r).forEach(function (o) {
              n.scroll.formatAt(e, t, o, r[o]);
            });
            return this.update(new a.default().retain(e).retain(t, (0, h.default)(r)));
          }
        }, {
          key: "getContents",
          value: function (e, t) {
            return this.delta.slice(e, e + t);
          }
        }, {
          key: "getDelta",
          value: function () {
            return this.scroll.lines().reduce(function (e, t) {
              return e.concat(t.delta());
            }, new a.default());
          }
        }, {
          key: "getFormat",
          value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            var n = [];
            var r = [];
            if (0 === t) {
              this.scroll.path(e).forEach(function (e) {
                var t = o(e, 1)[0];
                if (t instanceof p.default) {
                  n.push(t);
                } else {
                  if (t instanceof c.default.Leaf) {
                    r.push(t);
                  }
                }
              });
            } else {
              n = this.scroll.lines(e, t);
              r = this.scroll.descendants(c.default.Leaf, e, t);
            }
            var i = [n, r].map(function (e) {
              if (0 === e.length) {
                return {};
              }
              for (var t = (0, d.bubbleFormats)(e.shift()); Object.keys(t).length > 0;) {
                var n = e.shift();
                if (null == n) {
                  return t;
                }
                t = y((0, d.bubbleFormats)(n), t);
              }
              return t;
            });
            return g.default.apply(g.default, i);
          }
        }, {
          key: "getText",
          value: function (e, t) {
            return this.getContents(e, t).filter(function (e) {
              return "string" === typeof e.insert;
            }).map(function (e) {
              return e.insert;
            }).join("");
          }
        }, {
          key: "insertEmbed",
          value: function (e, t, n) {
            this.scroll.insertAt(e, t, n);
            return this.update(new a.default().retain(e).insert(function (e, t, n) {
              if (t in e) {
                Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                });
              } else {
                e[t] = n;
              }
              return e;
            }({}, t, n)));
          }
        }, {
          key: "insertText",
          value: function (e, t) {
            var n = this;
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            t = t.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
            this.scroll.insertAt(e, t);
            Object.keys(r).forEach(function (o) {
              n.scroll.formatAt(e, t.length, o, r[o]);
            });
            return this.update(new a.default().retain(e).insert(t, (0, h.default)(r)));
          }
        }, {
          key: "isBlank",
          value: function () {
            if (0 == this.scroll.children.length) {
              return !0;
            }
            if (this.scroll.children.length > 1) {
              return !1;
            }
            var e = this.scroll.children.head;
            return e.statics.blotName === p.default.blotName && !(e.children.length > 1) && e.children.head instanceof f.default;
          }
        }, {
          key: "removeFormat",
          value: function (e, t) {
            var n = this.getText(e, t);
            var r = this.scroll.line(e + t);
            var i = o(r, 2);
            var s = i[0];
            var c = i[1];
            var u = 0;
            var d = new a.default();
            if (null != s) {
              u = s instanceof l.default ? s.newlineIndex(c) - c + 1 : s.length() - c;
              d = s.delta().slice(c, c + u - 1).insert("\n");
            }
            var p = this.getContents(e, t + u).diff(new a.default().insert(n).concat(d));
            var f = new a.default().retain(e).concat(p);
            return this.applyDelta(f);
          }
        }, {
          key: "update",
          value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            var r = this.delta;
            if (1 === t.length && "characterData" === t[0].type && t[0].target.data.match(v) && c.default.find(t[0].target)) {
              var o = c.default.find(t[0].target);
              var i = (0, d.bubbleFormats)(o);
              var s = o.offset(this.scroll);
              var l = t[0].oldValue.replace(u.default.CONTENTS, "");
              var p = new a.default().insert(l);
              var f = new a.default().insert(o.value());
              var h = new a.default().retain(s).concat(p.diff(f, n));
              e = h.reduce(function (e, t) {
                return t.insert ? e.insert(t.insert, i) : e.push(t);
              }, new a.default());
              this.delta = r.compose(e);
            } else {
              this.delta = this.getDelta();
              if (!(e && (0, m.default)(r.compose(e), this.delta))) {
                e = r.diff(this.delta, n);
              }
            }
            return e;
          }
        }]);
        return e;
      }();
      function y(e, t) {
        return Object.keys(t).reduce(function (n, r) {
          if (!(null == e[r])) {
            if (t[r] === e[r]) {
              n[r] = t[r];
            } else {
              if (Array.isArray(t[r])) {
                if (t[r].indexOf(e[r]) < 0) {
                  n[r] = t[r].concat([e[r]]);
                }
              } else {
                n[r] = [t[r], e[r]];
              }
            }
          }
          return n;
        }, {});
      }
      t.default = b;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.default = t.Range = void 0;
      var r = function (e, t) {
        if (Array.isArray(e)) {
          return e;
        }
        if (Symbol.iterator in Object(e)) {
          return function (e, t) {
            var n = [];
            var r = !0;
            var o = !1;
            var i = void 0;
            try {
              for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) {
                ;
              }
            } catch (c) {
              o = !0;
              i = c;
            } finally {
              try {
                if (!r && s.return) {
                  s.return();
                }
              } finally {
                if (o) {
                  throw i;
                }
              }
            }
            return n;
          }(e, t);
        }
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
      var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var i = l(n(0));
      var a = l(n(21));
      var s = l(n(11));
      var c = l(n(8));
      function l(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      function u(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) {
            n[t] = e[t];
          }
          return n;
        }
        return Array.from(e);
      }
      function d(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var p = (0, l(n(10)).default)("quill:selection");
      var f = function e(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        d(this, e);
        this.index = t;
        this.length = n;
      };
      var h = function () {
        function e(t, n) {
          var r = this;
          d(this, e);
          this.emitter = n;
          this.scroll = t;
          this.composing = !1;
          this.mouseDown = !1;
          this.root = this.scroll.domNode;
          this.cursor = i.default.create("cursor", this);
          this.lastRange = this.savedRange = new f(0, 0);
          this.handleComposition();
          this.handleDragging();
          this.emitter.listenDOM("selectionchange", document, function () {
            if (!r.mouseDown) {
              setTimeout(r.update.bind(r, c.default.sources.USER), 1);
            }
          });
          this.emitter.on(c.default.events.EDITOR_CHANGE, function (e, t) {
            if (e === c.default.events.TEXT_CHANGE && t.length() > 0) {
              r.update(c.default.sources.SILENT);
            }
          });
          this.emitter.on(c.default.events.SCROLL_BEFORE_UPDATE, function () {
            if (r.hasFocus()) {
              var e = r.getNativeRange();
              if (null != e && e.start.node !== r.cursor.textNode) {
                r.emitter.once(c.default.events.SCROLL_UPDATE, function () {
                  try {
                    r.setNativeRange(e.start.node, e.start.offset, e.end.node, e.end.offset);
                  } catch (t) {}
                });
              }
            }
          });
          this.emitter.on(c.default.events.SCROLL_OPTIMIZE, function (e, t) {
            if (t.range) {
              var n = t.range;
              var o = n.startNode;
              var i = n.startOffset;
              var a = n.endNode;
              var s = n.endOffset;
              r.setNativeRange(o, i, a, s);
            }
          });
          this.update(c.default.sources.SILENT);
        }
        o(e, [{
          key: "handleComposition",
          value: function () {
            var e = this;
            this.root.addEventListener("compositionstart", function () {
              e.composing = !0;
            });
            this.root.addEventListener("compositionend", function () {
              e.composing = !1;
              if (e.cursor.parent) {
                var t = e.cursor.restore();
                if (!t) {
                  return;
                }
                setTimeout(function () {
                  e.setNativeRange(t.startNode, t.startOffset, t.endNode, t.endOffset);
                }, 1);
              }
            });
          }
        }, {
          key: "handleDragging",
          value: function () {
            var e = this;
            this.emitter.listenDOM("mousedown", document.body, function () {
              e.mouseDown = !0;
            });
            this.emitter.listenDOM("mouseup", document.body, function () {
              e.mouseDown = !1;
              e.update(c.default.sources.USER);
            });
          }
        }, {
          key: "focus",
          value: function () {
            if (!this.hasFocus()) {
              this.root.focus();
              this.setRange(this.savedRange);
            }
          }
        }, {
          key: "format",
          value: function (e, t) {
            if (null == this.scroll.whitelist || this.scroll.whitelist[e]) {
              this.scroll.update();
              var n = this.getNativeRange();
              if (null != n && n.native.collapsed && !i.default.query(e, i.default.Scope.BLOCK)) {
                if (n.start.node !== this.cursor.textNode) {
                  var r = i.default.find(n.start.node, !1);
                  if (null == r) {
                    return;
                  }
                  if (r instanceof i.default.Leaf) {
                    var o = r.split(n.start.offset);
                    r.parent.insertBefore(this.cursor, o);
                  } else {
                    r.insertBefore(this.cursor, n.start.node);
                  }
                  this.cursor.attach();
                }
                this.cursor.format(e, t);
                this.scroll.optimize();
                this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);
                this.update();
              }
            }
          }
        }, {
          key: "getBounds",
          value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            var n = this.scroll.length();
            e = Math.min(e, n - 1);
            t = Math.min(e + t, n - 1) - e;
            var o = void 0;
            var i = this.scroll.leaf(e);
            var a = r(i, 2);
            var s = a[0];
            var c = a[1];
            if (null == s) {
              return null;
            }
            var l = s.position(c, !0);
            var u = r(l, 2);
            o = u[0];
            c = u[1];
            var d = document.createRange();
            if (t > 0) {
              d.setStart(o, c);
              var p = this.scroll.leaf(e + t);
              var f = r(p, 2);
              s = f[0];
              c = f[1];
              if (null == s) {
                return null;
              }
              var h = s.position(c, !0);
              var m = r(h, 2);
              o = m[0];
              c = m[1];
              d.setEnd(o, c);
              return d.getBoundingClientRect();
            }
            var g = "left";
            var _ = void 0;
            if (o instanceof Text) {
              if (c < o.data.length) {
                d.setStart(o, c);
                d.setEnd(o, c + 1);
              } else {
                d.setStart(o, c - 1);
                d.setEnd(o, c);
                g = "right";
              }
              _ = d.getBoundingClientRect();
            } else {
              _ = s.domNode.getBoundingClientRect();
              if (c > 0) {
                g = "right";
              }
            }
            return {
              bottom: _.top + _.height,
              height: _.height,
              left: _[g],
              right: _[g],
              top: _.top,
              width: 0
            };
          }
        }, {
          key: "getNativeRange",
          value: function () {
            var e = document.getSelection();
            if (null == e || e.rangeCount <= 0) {
              return null;
            }
            var t = e.getRangeAt(0);
            if (null == t) {
              return null;
            }
            var n = this.normalizeNative(t);
            p.info("getNativeRange", n);
            return n;
          }
        }, {
          key: "getRange",
          value: function () {
            var e = this.getNativeRange();
            return null == e ? [null, null] : [this.normalizedToRange(e), e];
          }
        }, {
          key: "hasFocus",
          value: function () {
            return document.activeElement === this.root;
          }
        }, {
          key: "normalizedToRange",
          value: function (e) {
            var t = this;
            var n = [[e.start.node, e.start.offset]];
            if (!e.native.collapsed) {
              n.push([e.end.node, e.end.offset]);
            }
            var o = n.map(function (e) {
              var n = r(e, 2);
              var o = n[0];
              var a = n[1];
              var s = i.default.find(o, !0);
              var c = s.offset(t.scroll);
              return 0 === a ? c : s instanceof i.default.Container ? c + s.length() : c + s.index(o, a);
            });
            var a = Math.min(Math.max.apply(Math, u(o)), this.scroll.length() - 1);
            var s = Math.min.apply(Math, [a].concat(u(o)));
            return new f(s, a - s);
          }
        }, {
          key: "normalizeNative",
          value: function (e) {
            if (!m(this.root, e.startContainer) || !e.collapsed && !m(this.root, e.endContainer)) {
              return null;
            }
            var t = {
              start: {
                node: e.startContainer,
                offset: e.startOffset
              },
              end: {
                node: e.endContainer,
                offset: e.endOffset
              },
              native: e
            };
            [t.start, t.end].forEach(function (e) {
              for (var t = e.node, n = e.offset; !(t instanceof Text) && t.childNodes.length > 0;) {
                if (t.childNodes.length > n) {
                  t = t.childNodes[n];
                  n = 0;
                } else {
                  if (t.childNodes.length !== n) {
                    break;
                  }
                  n = (t = t.lastChild) instanceof Text ? t.data.length : t.childNodes.length + 1;
                }
              }
              e.node = t;
              e.offset = n;
            });
            return t;
          }
        }, {
          key: "rangeToNative",
          value: function (e) {
            var t = this;
            var n = e.collapsed ? [e.index] : [e.index, e.index + e.length];
            var o = [];
            var i = this.scroll.length();
            n.forEach(function (e, n) {
              e = Math.min(i - 1, e);
              var a;
              var s = t.scroll.leaf(e);
              var c = r(s, 2);
              var l = c[0];
              var u = c[1];
              var d = l.position(u, 0 !== n);
              var p = r(d, 2);
              a = p[0];
              u = p[1];
              o.push(a, u);
            });
            if (o.length < 2) {
              o = o.concat(o);
            }
            return o;
          }
        }, {
          key: "scrollIntoView",
          value: function (e) {
            var t = this.lastRange;
            if (null != t) {
              var n = this.getBounds(t.index, t.length);
              if (null != n) {
                var o = this.scroll.length() - 1;
                var i = this.scroll.line(Math.min(t.index, o));
                var a = r(i, 1)[0];
                var s = a;
                if (t.length > 0) {
                  var c = this.scroll.line(Math.min(t.index + t.length, o));
                  s = r(c, 1)[0];
                }
                if (null != a && null != s) {
                  var l = e.getBoundingClientRect();
                  if (n.top < l.top) {
                    e.scrollTop -= l.top - n.top;
                  } else {
                    if (n.bottom > l.bottom) {
                      e.scrollTop += n.bottom - l.bottom;
                    }
                  }
                }
              }
            }
          }
        }, {
          key: "setNativeRange",
          value: function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e;
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t;
            var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            p.info("setNativeRange", e, t, n, r);
            if (null == e || null != this.root.parentNode && null != e.parentNode && null != n.parentNode) {
              var i = document.getSelection();
              if (null != i) {
                if (null != e) {
                  if (!this.hasFocus()) {
                    this.root.focus();
                  }
                  var a = (this.getNativeRange() || {}).native;
                  if (null == a || o || e !== a.startContainer || t !== a.startOffset || n !== a.endContainer || r !== a.endOffset) {
                    if ("BR" == e.tagName) {
                      t = [].indexOf.call(e.parentNode.childNodes, e);
                      e = e.parentNode;
                    }
                    if ("BR" == n.tagName) {
                      r = [].indexOf.call(n.parentNode.childNodes, n);
                      n = n.parentNode;
                    }
                    var s = document.createRange();
                    s.setStart(e, t);
                    s.setEnd(n, r);
                    i.removeAllRanges();
                    i.addRange(s);
                  }
                } else {
                  i.removeAllRanges();
                  this.root.blur();
                  document.body.focus();
                }
              }
            }
          }
        }, {
          key: "setRange",
          value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.default.sources.API;
            if ("string" === typeof t) {
              n = t;
              t = !1;
            }
            p.info("setRange", e);
            if (null != e) {
              var r = this.rangeToNative(e);
              this.setNativeRange.apply(this, u(r).concat([t]));
            } else {
              this.setNativeRange(null);
            }
            this.update(n);
          }
        }, {
          key: "update",
          value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.default.sources.USER;
            var t = this.lastRange;
            var n = this.getRange();
            var o = r(n, 2);
            var i = o[0];
            var l = o[1];
            this.lastRange = i;
            if (null != this.lastRange) {
              this.savedRange = this.lastRange;
            }
            if (!(0, s.default)(t, this.lastRange)) {
              var u;
              if (!this.composing && null != l && l.native.collapsed && l.start.node !== this.cursor.textNode) {
                this.cursor.restore();
              }
              var d;
              var p = [c.default.events.SELECTION_CHANGE, (0, a.default)(this.lastRange), (0, a.default)(t), e];
              (u = this.emitter).emit.apply(u, [c.default.events.EDITOR_CHANGE].concat(p));
              if (e !== c.default.sources.SILENT) {
                (d = this.emitter).emit.apply(d, p);
              }
            }
          }
        }]);
        return e;
      }();
      function m(e, t) {
        try {
          t.parentNode;
        } catch (n) {
          return !1;
        }
        if (t instanceof Text) {
          t = t.parentNode;
        }
        return e.contains(t);
      }
      t.Range = f;
      t.default = h;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r;
      var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var i = n(0);
      function a(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function s(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
      }
      var c = function (e) {
        function t() {
          a(this, t);
          return s(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        (function (e, t) {
          if ("function" !== typeof t && null !== t) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(t, e);
        o(t, [{
          key: "insertInto",
          value: function (e, n) {
            if (0 === e.children.length) {
              (function e(t, n, r) {
                if (null === t) {
                  t = Function.prototype;
                }
                var o = Object.getOwnPropertyDescriptor(t, n);
                if (void 0 === o) {
                  var i = Object.getPrototypeOf(t);
                  return null === i ? void 0 : e(i, n, r);
                }
                if ("value" in o) {
                  return o.value;
                }
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0;
              })(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "insertInto", this).call(this, e, n);
            } else {
              this.remove();
            }
          }
        }, {
          key: "length",
          value: function () {
            return 0;
          }
        }, {
          key: "value",
          value: function () {
            return "";
          }
        }], [{
          key: "value",
          value: function () {}
        }]);
        return t;
      }(((r = i) && r.__esModule ? r : {
        default: r
      }).default.Embed);
      c.blotName = "break";
      c.tagName = "BR";
      t.default = c;
    }, function (e, t, n) {
      "use strict";

      var r = this && this.__extends || function () {
        var e = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (e, t) {
          e.__proto__ = t;
        } || function (e, t) {
          for (var n in t) if (t.hasOwnProperty(n)) {
            e[n] = t[n];
          }
        };
        return function (t, n) {
          function r() {
            this.constructor = t;
          }
          e(t, n);
          t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
        };
      }();
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = n(44);
      var i = n(30);
      var a = n(1);
      var s = function (e) {
        function t(t) {
          var n = e.call(this, t) || this;
          n.build();
          return n;
        }
        r(t, e);
        t.prototype.appendChild = function (e) {
          this.insertBefore(e);
        };
        t.prototype.attach = function () {
          e.prototype.attach.call(this);
          this.children.forEach(function (e) {
            e.attach();
          });
        };
        t.prototype.build = function () {
          var e = this;
          this.children = new o.default();
          [].slice.call(this.domNode.childNodes).reverse().forEach(function (t) {
            try {
              var n = c(t);
              e.insertBefore(n, e.children.head || void 0);
            } catch (r) {
              if (r instanceof a.ParchmentError) {
                return;
              }
              throw r;
            }
          });
        };
        t.prototype.deleteAt = function (e, t) {
          if (0 === e && t === this.length()) {
            return this.remove();
          }
          this.children.forEachAt(e, t, function (e, t, n) {
            e.deleteAt(t, n);
          });
        };
        t.prototype.descendant = function (e, n) {
          var r = this.children.find(n);
          var o = r[0];
          var i = r[1];
          return null == e.blotName && e(o) || null != e.blotName && o instanceof e ? [o, i] : o instanceof t ? o.descendant(e, i) : [null, -1];
        };
        t.prototype.descendants = function (e, n, r) {
          if (void 0 === n) {
            n = 0;
          }
          if (void 0 === r) {
            r = Number.MAX_VALUE;
          }
          var o = [];
          var i = r;
          this.children.forEachAt(n, r, function (n, r, a) {
            if (null == e.blotName && e(n) || null != e.blotName && n instanceof e) {
              o.push(n);
            }
            if (n instanceof t) {
              o = o.concat(n.descendants(e, r, i));
            }
            i -= a;
          });
          return o;
        };
        t.prototype.detach = function () {
          this.children.forEach(function (e) {
            e.detach();
          });
          e.prototype.detach.call(this);
        };
        t.prototype.formatAt = function (e, t, n, r) {
          this.children.forEachAt(e, t, function (e, t, o) {
            e.formatAt(t, o, n, r);
          });
        };
        t.prototype.insertAt = function (e, t, n) {
          var r = this.children.find(e);
          var o = r[0];
          var i = r[1];
          if (o) {
            o.insertAt(i, t, n);
          } else {
            var s = null == n ? a.create("text", t) : a.create(t, n);
            this.appendChild(s);
          }
        };
        t.prototype.insertBefore = function (e, t) {
          if (null != this.statics.allowedChildren && !this.statics.allowedChildren.some(function (t) {
            return e instanceof t;
          })) {
            throw new a.ParchmentError("Cannot insert " + e.statics.blotName + " into " + this.statics.blotName);
          }
          e.insertInto(this, t);
        };
        t.prototype.length = function () {
          return this.children.reduce(function (e, t) {
            return e + t.length();
          }, 0);
        };
        t.prototype.moveChildren = function (e, t) {
          this.children.forEach(function (n) {
            e.insertBefore(n, t);
          });
        };
        t.prototype.optimize = function (t) {
          e.prototype.optimize.call(this, t);
          if (0 === this.children.length) {
            if (null != this.statics.defaultChild) {
              var n = a.create(this.statics.defaultChild);
              this.appendChild(n);
              n.optimize(t);
            } else {
              this.remove();
            }
          }
        };
        t.prototype.path = function (e, n) {
          if (void 0 === n) {
            n = !1;
          }
          var r = this.children.find(e, n);
          var o = r[0];
          var i = r[1];
          var a = [[this, e]];
          return o instanceof t ? a.concat(o.path(i, n)) : (null != o && a.push([o, i]), a);
        };
        t.prototype.removeChild = function (e) {
          this.children.remove(e);
        };
        t.prototype.replace = function (n) {
          if (n instanceof t) {
            n.moveChildren(this);
          }
          e.prototype.replace.call(this, n);
        };
        t.prototype.split = function (e, t) {
          if (void 0 === t) {
            t = !1;
          }
          if (!t) {
            if (0 === e) {
              return this;
            }
            if (e === this.length()) {
              return this.next;
            }
          }
          var n = this.clone();
          this.parent.insertBefore(n, this.next);
          this.children.forEachAt(e, this.length(), function (e, r, o) {
            e = e.split(r, t);
            n.appendChild(e);
          });
          return n;
        };
        t.prototype.unwrap = function () {
          this.moveChildren(this.parent, this.next);
          this.remove();
        };
        t.prototype.update = function (e, t) {
          var n = this;
          var r = [];
          var o = [];
          e.forEach(function (e) {
            if (e.target === n.domNode && "childList" === e.type) {
              r.push.apply(r, e.addedNodes);
              o.push.apply(o, e.removedNodes);
            }
          });
          o.forEach(function (e) {
            if (!(null != e.parentNode && "IFRAME" !== e.tagName && document.body.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
              var t = a.find(e);
              if (null != t) {
                if (!(null != t.domNode.parentNode && t.domNode.parentNode !== n.domNode)) {
                  t.detach();
                }
              }
            }
          });
          r.filter(function (e) {
            return e.parentNode == n.domNode;
          }).sort(function (e, t) {
            return e === t ? 0 : e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1;
          }).forEach(function (e) {
            var t = null;
            if (null != e.nextSibling) {
              t = a.find(e.nextSibling);
            }
            var r = c(e);
            if (!(r.next == t && null != r.next)) {
              if (null != r.parent) {
                r.parent.removeChild(n);
              }
              n.insertBefore(r, t || void 0);
            }
          });
        };
        return t;
      }(i.default);
      function c(e) {
        var t = a.find(e);
        if (null == t) {
          try {
            t = a.create(e);
          } catch (n) {
            t = a.create(a.Scope.INLINE);
            [].slice.call(e.childNodes).forEach(function (e) {
              t.domNode.appendChild(e);
            });
            if (e.parentNode) {
              e.parentNode.replaceChild(t.domNode, e);
            }
            t.attach();
          }
        }
        return t;
      }
      t.default = s;
    }, function (e, t, n) {
      "use strict";

      var r = this && this.__extends || function () {
        var e = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (e, t) {
          e.__proto__ = t;
        } || function (e, t) {
          for (var n in t) if (t.hasOwnProperty(n)) {
            e[n] = t[n];
          }
        };
        return function (t, n) {
          function r() {
            this.constructor = t;
          }
          e(t, n);
          t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
        };
      }();
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = n(12);
      var i = n(31);
      var a = n(17);
      var s = n(1);
      var c = function (e) {
        function t(t) {
          var n = e.call(this, t) || this;
          n.attributes = new i.default(n.domNode);
          return n;
        }
        r(t, e);
        t.formats = function (e) {
          return "string" === typeof this.tagName || (Array.isArray(this.tagName) ? e.tagName.toLowerCase() : void 0);
        };
        t.prototype.format = function (e, t) {
          var n = s.query(e);
          if (n instanceof o.default) {
            this.attributes.attribute(n, t);
          } else {
            if (t) {
              if (!(null == n || e === this.statics.blotName && this.formats()[e] === t)) {
                this.replaceWith(e, t);
              }
            }
          }
        };
        t.prototype.formats = function () {
          var e = this.attributes.values();
          var t = this.statics.formats(this.domNode);
          if (null != t) {
            e[this.statics.blotName] = t;
          }
          return e;
        };
        t.prototype.replaceWith = function (t, n) {
          var r = e.prototype.replaceWith.call(this, t, n);
          this.attributes.copy(r);
          return r;
        };
        t.prototype.update = function (t, n) {
          var r = this;
          e.prototype.update.call(this, t, n);
          if (t.some(function (e) {
            return e.target === r.domNode && "attributes" === e.type;
          })) {
            this.attributes.build();
          }
        };
        t.prototype.wrap = function (n, r) {
          var o = e.prototype.wrap.call(this, n, r);
          if (o instanceof t && o.statics.scope === this.statics.scope) {
            this.attributes.move(o);
          }
          return o;
        };
        return t;
      }(a.default);
      t.default = c;
    }, function (e, t, n) {
      "use strict";

      var r = this && this.__extends || function () {
        var e = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (e, t) {
          e.__proto__ = t;
        } || function (e, t) {
          for (var n in t) if (t.hasOwnProperty(n)) {
            e[n] = t[n];
          }
        };
        return function (t, n) {
          function r() {
            this.constructor = t;
          }
          e(t, n);
          t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
        };
      }();
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = n(30);
      var i = n(1);
      var a = function (e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this;
        }
        r(t, e);
        t.value = function (e) {
          return !0;
        };
        t.prototype.index = function (e, t) {
          return this.domNode === e || this.domNode.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(t, 1) : -1;
        };
        t.prototype.position = function (e, t) {
          var n = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
          if (e > 0) {
            n += 1;
          }
          return [this.parent.domNode, n];
        };
        t.prototype.value = function () {
          var e;
          (e = {})[this.statics.blotName] = this.statics.value(this.domNode) || !0;
          return e;
        };
        t.scope = i.Scope.INLINE_BLOT;
        return t;
      }(o.default);
      t.default = a;
    }, function (e, t, n) {
      var r = n(11);
      var o = n(3);
      var i = {
        attributes: {
          compose: function (e, t, n) {
            if ("object" !== typeof e) {
              e = {};
            }
            if ("object" !== typeof t) {
              t = {};
            }
            var r = o(!0, {}, t);
            for (var i in n || (r = Object.keys(r).reduce(function (e, t) {
              if (null != r[t]) {
                e[t] = r[t];
              }
              return e;
            }, {})), e) if (void 0 !== e[i] && void 0 === t[i]) {
              r[i] = e[i];
            }
            return Object.keys(r).length > 0 ? r : void 0;
          },
          diff: function (e, t) {
            if ("object" !== typeof e) {
              e = {};
            }
            if ("object" !== typeof t) {
              t = {};
            }
            var n = Object.keys(e).concat(Object.keys(t)).reduce(function (n, o) {
              if (!r(e[o], t[o])) {
                n[o] = void 0 === t[o] ? null : t[o];
              }
              return n;
            }, {});
            return Object.keys(n).length > 0 ? n : void 0;
          },
          transform: function (e, t, n) {
            if ("object" !== typeof e) {
              return t;
            }
            if ("object" === typeof t) {
              if (!n) {
                return t;
              }
              var r = Object.keys(t).reduce(function (n, r) {
                if (void 0 === e[r]) {
                  n[r] = t[r];
                }
                return n;
              }, {});
              return Object.keys(r).length > 0 ? r : void 0;
            }
          }
        },
        iterator: function (e) {
          return new a(e);
        },
        length: function (e) {
          return "number" === typeof e.delete ? e.delete : "number" === typeof e.retain ? e.retain : "string" === typeof e.insert ? e.insert.length : 1;
        }
      };
      function a(e) {
        this.ops = e;
        this.index = 0;
        this.offset = 0;
      }
      a.prototype.hasNext = function () {
        return this.peekLength() < 1 / 0;
      };
      a.prototype.next = function (e) {
        if (!e) {
          e = 1 / 0;
        }
        var t = this.ops[this.index];
        if (t) {
          var n = this.offset;
          var r = i.length(t);
          if (e >= r - n) {
            e = r - n;
            this.index += 1;
            this.offset = 0;
          } else {
            this.offset += e;
          }
          if ("number" === typeof t.delete) {
            return {
              delete: e
            };
          }
          var o = {};
          if (t.attributes) {
            o.attributes = t.attributes;
          }
          if ("number" === typeof t.retain) {
            o.retain = e;
          } else {
            if ("string" === typeof t.insert) {
              o.insert = t.insert.substr(n, e);
            } else {
              o.insert = t.insert;
            }
          }
          return o;
        }
        return {
          retain: 1 / 0
        };
      };
      a.prototype.peek = function () {
        return this.ops[this.index];
      };
      a.prototype.peekLength = function () {
        return this.ops[this.index] ? i.length(this.ops[this.index]) - this.offset : 1 / 0;
      };
      a.prototype.peekType = function () {
        return this.ops[this.index] ? "number" === typeof this.ops[this.index].delete ? "delete" : "number" === typeof this.ops[this.index].retain ? "retain" : "insert" : "retain";
      };
      a.prototype.rest = function () {
        if (this.hasNext()) {
          if (0 === this.offset) {
            return this.ops.slice(this.index);
          }
          var e = this.offset;
          var t = this.index;
          var n = this.next();
          var r = this.ops.slice(this.index);
          this.offset = e;
          this.index = t;
          return [n].concat(r);
        }
        return [];
      };
      e.exports = i;
    }, function (e, n) {
      var r = function () {
        "use strict";

        function e(e, t) {
          return null != t && e instanceof t;
        }
        var n;
        var r;
        var o;
        try {
          n = Map;
        } catch (c) {
          n = function () {};
        }
        try {
          r = Set;
        } catch (c) {
          r = function () {};
        }
        try {
          o = Promise;
        } catch (c) {
          o = function () {};
        }
        function i(a, c, l, u, d) {
          if ("object" === typeof c) {
            l = c.depth;
            u = c.prototype;
            d = c.includeNonEnumerable;
            c = c.circular;
          }
          var p = [];
          var f = [];
          var h = "undefined" != typeof t;
          if ("undefined" == typeof c) {
            c = !0;
          }
          if ("undefined" == typeof l) {
            l = 1 / 0;
          }
          return function a(l, m) {
            if (null === l) {
              return null;
            }
            if (0 === m) {
              return l;
            }
            var g;
            var _;
            if ("object" != typeof l) {
              return l;
            }
            if (e(l, n)) {
              g = new n();
            } else if (e(l, r)) {
              g = new r();
            } else if (e(l, o)) {
              g = new o(function (e, t) {
                l.then(function (t) {
                  e(a(t, m - 1));
                }, function (e) {
                  t(a(e, m - 1));
                });
              });
            } else if (i.__isArray(l)) {
              g = [];
            } else if (i.__isRegExp(l)) {
              g = new RegExp(l.source, s(l));
              if (l.lastIndex) {
                g.lastIndex = l.lastIndex;
              }
            } else if (i.__isDate(l)) {
              g = new Date(l.getTime());
            } else {
              if (h && t.isBuffer(l)) {
                g = t.allocUnsafe ? t.allocUnsafe(l.length) : new t(l.length);
                l.copy(g);
                return g;
              }
              if (e(l, Error)) {
                g = Object.create(l);
              } else {
                if ("undefined" == typeof u) {
                  _ = Object.getPrototypeOf(l);
                  g = Object.create(_);
                } else {
                  g = Object.create(u);
                  _ = u;
                }
              }
            }
            if (c) {
              var v = p.indexOf(l);
              if (-1 != v) {
                return f[v];
              }
              p.push(l);
              f.push(g);
            }
            for (var b in e(l, n) && l.forEach(function (e, t) {
              var n = a(t, m - 1);
              var r = a(e, m - 1);
              g.set(n, r);
            }), e(l, r) && l.forEach(function (e) {
              var t = a(e, m - 1);
              g.add(t);
            }), l) {
              var y;
              if (_) {
                y = Object.getOwnPropertyDescriptor(_, b);
              }
              if (!(y && null == y.set)) {
                g[b] = a(l[b], m - 1);
              }
            }
            if (Object.getOwnPropertySymbols) {
              var E = Object.getOwnPropertySymbols(l);
              for (b = 0; b < E.length; b++) {
                var O = E[b];
                if (!(C = Object.getOwnPropertyDescriptor(l, O)) || C.enumerable || d) {
                  g[O] = a(l[O], m - 1);
                  if (!C.enumerable) {
                    Object.defineProperty(g, O, {
                      enumerable: !1
                    });
                  }
                }
              }
            }
            if (d) {
              var w = Object.getOwnPropertyNames(l);
              for (b = 0; b < w.length; b++) {
                var C;
                var T = w[b];
                if (!((C = Object.getOwnPropertyDescriptor(l, T)) && C.enumerable)) {
                  g[T] = a(l[T], m - 1);
                  Object.defineProperty(g, T, {
                    enumerable: !1
                  });
                }
              }
            }
            return g;
          }(a, l);
        }
        function a(e) {
          return Object.prototype.toString.call(e);
        }
        function s(e) {
          var t = "";
          if (e.global) {
            t += "g";
          }
          if (e.ignoreCase) {
            t += "i";
          }
          if (e.multiline) {
            t += "m";
          }
          return t;
        }
        i.clonePrototype = function (e) {
          if (null === e) {
            return null;
          }
          var t = function () {};
          t.prototype = e;
          return new t();
        };
        i.__objToStr = a;
        i.__isDate = function (e) {
          return "object" === typeof e && "[object Date]" === a(e);
        };
        i.__isArray = function (e) {
          return "object" === typeof e && "[object Array]" === a(e);
        };
        i.__isRegExp = function (e) {
          return "object" === typeof e && "[object RegExp]" === a(e);
        };
        i.__getRegExpFlags = s;
        return i;
      }();
      if ("object" === typeof e && e.exports) {
        e.exports = r;
      }
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function (e, t) {
        if (Array.isArray(e)) {
          return e;
        }
        if (Symbol.iterator in Object(e)) {
          return function (e, t) {
            var n = [];
            var r = !0;
            var o = !1;
            var i = void 0;
            try {
              for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) {
                ;
              }
            } catch (c) {
              o = !0;
              i = c;
            } finally {
              try {
                if (!r && s.return) {
                  s.return();
                }
              } finally {
                if (o) {
                  throw i;
                }
              }
            }
            return n;
          }(e, t);
        }
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
      var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var i = function e(t, n, r) {
        if (null === t) {
          t = Function.prototype;
        }
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ("value" in o) {
          return o.value;
        }
        var a = o.get;
        return void 0 !== a ? a.call(r) : void 0;
      };
      var a = f(n(0));
      var s = f(n(8));
      var c = n(4);
      var l = f(c);
      var u = f(n(16));
      var d = f(n(13));
      var p = f(n(25));
      function f(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      function h(e) {
        return e instanceof l.default || e instanceof c.BlockEmbed;
      }
      var m = function (e) {
        function t(e, n) {
          !function (e, t) {
            if (!(e instanceof t)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }(this, t);
          var r = function (e, t) {
            if (!e) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          r.emitter = n.emitter;
          if (Array.isArray(n.whitelist)) {
            r.whitelist = n.whitelist.reduce(function (e, t) {
              e[t] = !0;
              return e;
            }, {});
          }
          r.domNode.addEventListener("DOMNodeInserted", function () {});
          r.optimize();
          r.enable();
          return r;
        }
        (function (e, t) {
          if ("function" !== typeof t && null !== t) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(t, e);
        o(t, [{
          key: "batchStart",
          value: function () {
            this.batch = !0;
          }
        }, {
          key: "batchEnd",
          value: function () {
            this.batch = !1;
            this.optimize();
          }
        }, {
          key: "deleteAt",
          value: function (e, n) {
            var o = this.line(e);
            var a = r(o, 2);
            var s = a[0];
            var l = a[1];
            var p = this.line(e + n);
            var f = r(p, 1)[0];
            i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "deleteAt", this).call(this, e, n);
            if (null != f && s !== f && l > 0) {
              if (s instanceof c.BlockEmbed || f instanceof c.BlockEmbed) {
                return void this.optimize();
              }
              if (s instanceof d.default) {
                var h = s.newlineIndex(s.length(), !0);
                if (h > -1 && (s = s.split(h + 1)) === f) {
                  return void this.optimize();
                }
              } else if (f instanceof d.default) {
                var m = f.newlineIndex(0);
                if (m > -1) {
                  f.split(m + 1);
                }
              }
              var g = f.children.head instanceof u.default ? null : f.children.head;
              s.moveChildren(f, g);
              s.remove();
            }
            this.optimize();
          }
        }, {
          key: "enable",
          value: function () {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            this.domNode.setAttribute("contenteditable", e);
          }
        }, {
          key: "formatAt",
          value: function (e, n, r, o) {
            if (null == this.whitelist || this.whitelist[r]) {
              i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "formatAt", this).call(this, e, n, r, o);
              this.optimize();
            }
          }
        }, {
          key: "insertAt",
          value: function (e, n, r) {
            if (null == r || null == this.whitelist || this.whitelist[n]) {
              if (e >= this.length()) {
                if (null == r || null == a.default.query(n, a.default.Scope.BLOCK)) {
                  var o = a.default.create(this.statics.defaultChild);
                  this.appendChild(o);
                  if (null == r && n.endsWith("\n")) {
                    n = n.slice(0, -1);
                  }
                  o.insertAt(0, n, r);
                } else {
                  var s = a.default.create(n, r);
                  this.appendChild(s);
                }
              } else {
                i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "insertAt", this).call(this, e, n, r);
              }
              this.optimize();
            }
          }
        }, {
          key: "insertBefore",
          value: function (e, n) {
            if (e.statics.scope === a.default.Scope.INLINE_BLOT) {
              var r = a.default.create(this.statics.defaultChild);
              r.appendChild(e);
              e = r;
            }
            i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "insertBefore", this).call(this, e, n);
          }
        }, {
          key: "leaf",
          value: function (e) {
            return this.path(e).pop() || [null, -1];
          }
        }, {
          key: "line",
          value: function (e) {
            return e === this.length() ? this.line(e - 1) : this.descendant(h, e);
          }
        }, {
          key: "lines",
          value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;
            var n = function e(t, n, r) {
              var o = [];
              var i = r;
              t.children.forEachAt(n, r, function (t, n, r) {
                if (h(t)) {
                  o.push(t);
                } else {
                  if (t instanceof a.default.Container) {
                    o = o.concat(e(t, n, i));
                  }
                }
                i -= r;
              });
              return o;
            };
            return n(this, e, t);
          }
        }, {
          key: "optimize",
          value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!0 !== this.batch) {
              i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "optimize", this).call(this, e, n);
              if (e.length > 0) {
                this.emitter.emit(s.default.events.SCROLL_OPTIMIZE, e, n);
              }
            }
          }
        }, {
          key: "path",
          value: function (e) {
            return i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "path", this).call(this, e).slice(1);
          }
        }, {
          key: "update",
          value: function (e) {
            if (!0 !== this.batch) {
              var n = s.default.sources.USER;
              if ("string" === typeof e) {
                n = e;
              }
              if (!Array.isArray(e)) {
                e = this.observer.takeRecords();
              }
              if (e.length > 0) {
                this.emitter.emit(s.default.events.SCROLL_BEFORE_UPDATE, n, e);
              }
              i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "update", this).call(this, e.concat([]));
              if (e.length > 0) {
                this.emitter.emit(s.default.events.SCROLL_UPDATE, n, e);
              }
            }
          }
        }]);
        return t;
      }(a.default.Scroll);
      m.blotName = "scroll";
      m.className = "ql-editor";
      m.tagName = "DIV";
      m.defaultChild = "block";
      m.allowedChildren = [l.default, c.BlockEmbed, p.default];
      t.default = m;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.SHORTKEY = t.default = void 0;
      var r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      };
      var o = function (e, t) {
        if (Array.isArray(e)) {
          return e;
        }
        if (Symbol.iterator in Object(e)) {
          return function (e, t) {
            var n = [];
            var r = !0;
            var o = !1;
            var i = void 0;
            try {
              for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) {
                ;
              }
            } catch (c) {
              o = !0;
              i = c;
            } finally {
              try {
                if (!r && s.return) {
                  s.return();
                }
              } finally {
                if (o) {
                  throw i;
                }
              }
            }
            return n;
          }(e, t);
        }
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
      var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var a = m(n(21));
      var s = m(n(11));
      var c = m(n(3));
      var l = m(n(2));
      var u = m(n(20));
      var d = m(n(0));
      var p = m(n(5));
      var f = m(n(10));
      var h = m(n(9));
      function m(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      function g(e, t, n) {
        if (t in e) {
          Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          });
        } else {
          e[t] = n;
        }
        return e;
      }
      var _ = (0, f.default)("quill:keyboard");
      var v = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey";
      var b = function (e) {
        function t(e, n) {
          !function (e, t) {
            if (!(e instanceof t)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }(this, t);
          var r = function (e, t) {
            if (!e) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
          r.bindings = {};
          Object.keys(r.options.bindings).forEach(function (t) {
            if (("list autofill" !== t || null == e.scroll.whitelist || e.scroll.whitelist.list) && r.options.bindings[t]) {
              r.addBinding(r.options.bindings[t]);
            }
          });
          r.addBinding({
            key: t.keys.ENTER,
            shiftKey: null
          }, C);
          r.addBinding({
            key: t.keys.ENTER,
            metaKey: null,
            ctrlKey: null,
            altKey: null
          }, function () {});
          if (/Firefox/i.test(navigator.userAgent)) {
            r.addBinding({
              key: t.keys.BACKSPACE
            }, {
              collapsed: !0
            }, E);
            r.addBinding({
              key: t.keys.DELETE
            }, {
              collapsed: !0
            }, O);
          } else {
            r.addBinding({
              key: t.keys.BACKSPACE
            }, {
              collapsed: !0,
              prefix: /^.?$/
            }, E);
            r.addBinding({
              key: t.keys.DELETE
            }, {
              collapsed: !0,
              suffix: /^.?$/
            }, O);
          }
          r.addBinding({
            key: t.keys.BACKSPACE
          }, {
            collapsed: !1
          }, w);
          r.addBinding({
            key: t.keys.DELETE
          }, {
            collapsed: !1
          }, w);
          r.addBinding({
            key: t.keys.BACKSPACE,
            altKey: null,
            ctrlKey: null,
            metaKey: null,
            shiftKey: null
          }, {
            collapsed: !0,
            offset: 0
          }, E);
          r.listen();
          return r;
        }
        (function (e, t) {
          if ("function" !== typeof t && null !== t) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(t, e);
        i(t, null, [{
          key: "match",
          value: function (e, t) {
            t = I(t);
            return !["altKey", "ctrlKey", "metaKey", "shiftKey"].some(function (n) {
              return !!t[n] !== e[n] && null !== t[n];
            }) && t.key === (e.which || e.keyCode);
          }
        }]);
        i(t, [{
          key: "addBinding",
          value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            var r = I(e);
            if (null == r || null == r.key) {
              return _.warn("Attempted to add invalid keyboard binding", r);
            }
            if ("function" === typeof t) {
              t = {
                handler: t
              };
            }
            if ("function" === typeof n) {
              n = {
                handler: n
              };
            }
            r = (0, c.default)(r, t, n);
            this.bindings[r.key] = this.bindings[r.key] || [];
            this.bindings[r.key].push(r);
          }
        }, {
          key: "listen",
          value: function () {
            var e = this;
            this.quill.root.addEventListener("keydown", function (n) {
              if (!n.defaultPrevented) {
                var i = n.which || n.keyCode;
                var a = (e.bindings[i] || []).filter(function (e) {
                  return t.match(n, e);
                });
                if (0 !== a.length) {
                  var c = e.quill.getSelection();
                  if (null != c && e.quill.hasFocus()) {
                    var l = e.quill.getLine(c.index);
                    var u = o(l, 2);
                    var p = u[0];
                    var f = u[1];
                    var h = e.quill.getLeaf(c.index);
                    var m = o(h, 2);
                    var g = m[0];
                    var _ = m[1];
                    var v = 0 === c.length ? [g, _] : e.quill.getLeaf(c.index + c.length);
                    var b = o(v, 2);
                    var y = b[0];
                    var E = b[1];
                    var O = g instanceof d.default.Text ? g.value().slice(0, _) : "";
                    var w = y instanceof d.default.Text ? y.value().slice(E) : "";
                    var C = {
                      collapsed: 0 === c.length,
                      empty: 0 === c.length && p.length() <= 1,
                      format: e.quill.getFormat(c),
                      offset: f,
                      prefix: O,
                      suffix: w
                    };
                    if (a.some(function (t) {
                      if (null != t.collapsed && t.collapsed !== C.collapsed) {
                        return !1;
                      }
                      if (null != t.empty && t.empty !== C.empty) {
                        return !1;
                      }
                      if (null != t.offset && t.offset !== C.offset) {
                        return !1;
                      }
                      if (Array.isArray(t.format)) {
                        if (t.format.every(function (e) {
                          return null == C.format[e];
                        })) {
                          return !1;
                        }
                      } else if ("object" === r(t.format) && !Object.keys(t.format).every(function (e) {
                        return !0 === t.format[e] ? null != C.format[e] : !1 === t.format[e] ? null == C.format[e] : (0, s.default)(t.format[e], C.format[e]);
                      })) {
                        return !1;
                      }
                      return !(null != t.prefix && !t.prefix.test(C.prefix)) && !(null != t.suffix && !t.suffix.test(C.suffix)) && !0 !== t.handler.call(e, c, C);
                    })) {
                      n.preventDefault();
                    }
                  }
                }
              }
            });
          }
        }]);
        return t;
      }(h.default);
      function y(e, t) {
        var n;
        var r = e === b.keys.LEFT ? "prefix" : "suffix";
        g(n = {
          key: e,
          shiftKey: t,
          altKey: null
        }, r, /^$/);
        g(n, "handler", function (n) {
          var r = n.index;
          if (e === b.keys.RIGHT) {
            r += n.length + 1;
          }
          var i = this.quill.getLeaf(r);
          return !(o(i, 1)[0] instanceof d.default.Embed) || (e === b.keys.LEFT ? t ? this.quill.setSelection(n.index - 1, n.length + 1, p.default.sources.USER) : this.quill.setSelection(n.index - 1, p.default.sources.USER) : t ? this.quill.setSelection(n.index, n.length + 1, p.default.sources.USER) : this.quill.setSelection(n.index + n.length + 1, p.default.sources.USER), !1);
        });
        return n;
      }
      function E(e, t) {
        if (!(0 === e.index || this.quill.getLength() <= 1)) {
          var n = this.quill.getLine(e.index);
          var r = o(n, 1)[0];
          var i = {};
          if (0 === t.offset) {
            var a = this.quill.getLine(e.index - 1);
            var s = o(a, 1)[0];
            if (null != s && s.length() > 1) {
              var c = r.formats();
              var l = this.quill.getFormat(e.index - 1, 1);
              i = u.default.attributes.diff(c, l) || {};
            }
          }
          var d = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(t.prefix) ? 2 : 1;
          this.quill.deleteText(e.index - d, d, p.default.sources.USER);
          if (Object.keys(i).length > 0) {
            this.quill.formatLine(e.index - d, d, i, p.default.sources.USER);
          }
          this.quill.focus();
        }
      }
      function O(e, t) {
        var n = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(t.suffix) ? 2 : 1;
        if (!(e.index >= this.quill.getLength() - n)) {
          var r = {};
          var i = 0;
          var a = this.quill.getLine(e.index);
          var s = o(a, 1)[0];
          if (t.offset >= s.length() - 1) {
            var c = this.quill.getLine(e.index + 1);
            var l = o(c, 1)[0];
            if (l) {
              var d = s.formats();
              var f = this.quill.getFormat(e.index, 1);
              r = u.default.attributes.diff(d, f) || {};
              i = l.length();
            }
          }
          this.quill.deleteText(e.index, n, p.default.sources.USER);
          if (Object.keys(r).length > 0) {
            this.quill.formatLine(e.index + i - 1, n, r, p.default.sources.USER);
          }
        }
      }
      function w(e) {
        var t = this.quill.getLines(e);
        var n = {};
        if (t.length > 1) {
          var r = t[0].formats();
          var o = t[t.length - 1].formats();
          n = u.default.attributes.diff(o, r) || {};
        }
        this.quill.deleteText(e, p.default.sources.USER);
        if (Object.keys(n).length > 0) {
          this.quill.formatLine(e.index, 1, n, p.default.sources.USER);
        }
        this.quill.setSelection(e.index, p.default.sources.SILENT);
        this.quill.focus();
      }
      function C(e, t) {
        var n = this;
        if (e.length > 0) {
          this.quill.scroll.deleteAt(e.index, e.length);
        }
        var r = Object.keys(t.format).reduce(function (e, n) {
          if (d.default.query(n, d.default.Scope.BLOCK) && !Array.isArray(t.format[n])) {
            e[n] = t.format[n];
          }
          return e;
        }, {});
        this.quill.insertText(e.index, "\n", r, p.default.sources.USER);
        this.quill.setSelection(e.index + 1, p.default.sources.SILENT);
        this.quill.focus();
        Object.keys(t.format).forEach(function (e) {
          if (null == r[e]) {
            if (!Array.isArray(t.format[e])) {
              if ("link" !== e) {
                n.quill.format(e, t.format[e], p.default.sources.USER);
              }
            }
          }
        });
      }
      function T(e) {
        return {
          key: b.keys.TAB,
          shiftKey: !e,
          format: {
            "code-block": !0
          },
          handler: function (t) {
            var n = d.default.query("code-block");
            var r = t.index;
            var i = t.length;
            var a = this.quill.scroll.descendant(n, r);
            var s = o(a, 2);
            var c = s[0];
            var l = s[1];
            if (null != c) {
              var u = this.quill.getIndex(c);
              var f = c.newlineIndex(l, !0) + 1;
              var h = c.newlineIndex(u + l + i);
              var m = c.domNode.textContent.slice(f, h).split("\n");
              l = 0;
              m.forEach(function (t, o) {
                if (e) {
                  c.insertAt(f + l, n.TAB);
                  l += n.TAB.length;
                  if (0 === o) {
                    r += n.TAB.length;
                  } else {
                    i += n.TAB.length;
                  }
                } else {
                  if (t.startsWith(n.TAB)) {
                    c.deleteAt(f + l, n.TAB.length);
                    l -= n.TAB.length;
                    if (0 === o) {
                      r -= n.TAB.length;
                    } else {
                      i -= n.TAB.length;
                    }
                  }
                }
                l += t.length + 1;
              });
              this.quill.update(p.default.sources.USER);
              this.quill.setSelection(r, i, p.default.sources.SILENT);
            }
          }
        };
      }
      function S(e) {
        return {
          key: e[0].toUpperCase(),
          shortKey: !0,
          handler: function (t, n) {
            this.quill.format(e, !n.format[e], p.default.sources.USER);
          }
        };
      }
      function I(e) {
        if ("string" === typeof e || "number" === typeof e) {
          return I({
            key: e
          });
        }
        if ("object" === ("undefined" === typeof e ? "undefined" : r(e))) {
          e = (0, a.default)(e, !1);
        }
        if ("string" === typeof e.key) {
          if (null != b.keys[e.key.toUpperCase()]) {
            e.key = b.keys[e.key.toUpperCase()];
          } else {
            if (1 !== e.key.length) {
              return null;
            }
            e.key = e.key.toUpperCase().charCodeAt(0);
          }
        }
        if (e.shortKey) {
          e[v] = e.shortKey;
          delete e.shortKey;
        }
        return e;
      }
      b.keys = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        ESCAPE: 27,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        DELETE: 46
      };
      b.DEFAULTS = {
        bindings: {
          bold: S("bold"),
          italic: S("italic"),
          underline: S("underline"),
          indent: {
            key: b.keys.TAB,
            format: ["blockquote", "indent", "list"],
            handler: function (e, t) {
              if (t.collapsed && 0 !== t.offset) {
                return !0;
              }
              this.quill.format("indent", "+1", p.default.sources.USER);
            }
          },
          outdent: {
            key: b.keys.TAB,
            shiftKey: !0,
            format: ["blockquote", "indent", "list"],
            handler: function (e, t) {
              if (t.collapsed && 0 !== t.offset) {
                return !0;
              }
              this.quill.format("indent", "-1", p.default.sources.USER);
            }
          },
          "outdent backspace": {
            key: b.keys.BACKSPACE,
            collapsed: !0,
            shiftKey: null,
            metaKey: null,
            ctrlKey: null,
            altKey: null,
            format: ["indent", "list"],
            offset: 0,
            handler: function (e, t) {
              if (null != t.format.indent) {
                this.quill.format("indent", "-1", p.default.sources.USER);
              } else {
                if (null != t.format.list) {
                  this.quill.format("list", !1, p.default.sources.USER);
                }
              }
            }
          },
          "indent code-block": T(!0),
          "outdent code-block": T(!1),
          "remove tab": {
            key: b.keys.TAB,
            shiftKey: !0,
            collapsed: !0,
            prefix: /\t$/,
            handler: function (e) {
              this.quill.deleteText(e.index - 1, 1, p.default.sources.USER);
            }
          },
          tab: {
            key: b.keys.TAB,
            handler: function (e) {
              this.quill.history.cutoff();
              var t = new l.default().retain(e.index).delete(e.length).insert("\t");
              this.quill.updateContents(t, p.default.sources.USER);
              this.quill.history.cutoff();
              this.quill.setSelection(e.index + 1, p.default.sources.SILENT);
            }
          },
          "list empty enter": {
            key: b.keys.ENTER,
            collapsed: !0,
            format: ["list"],
            empty: !0,
            handler: function (e, t) {
              this.quill.format("list", !1, p.default.sources.USER);
              if (t.format.indent) {
                this.quill.format("indent", !1, p.default.sources.USER);
              }
            }
          },
          "checklist enter": {
            key: b.keys.ENTER,
            collapsed: !0,
            format: {
              list: "checked"
            },
            handler: function (e) {
              var t = this.quill.getLine(e.index);
              var n = o(t, 2);
              var r = n[0];
              var i = n[1];
              var a = (0, c.default)({}, r.formats(), {
                list: "checked"
              });
              var s = new l.default().retain(e.index).insert("\n", a).retain(r.length() - i - 1).retain(1, {
                list: "unchecked"
              });
              this.quill.updateContents(s, p.default.sources.USER);
              this.quill.setSelection(e.index + 1, p.default.sources.SILENT);
              this.quill.scrollIntoView();
            }
          },
          "header enter": {
            key: b.keys.ENTER,
            collapsed: !0,
            format: ["header"],
            suffix: /^$/,
            handler: function (e, t) {
              var n = this.quill.getLine(e.index);
              var r = o(n, 2);
              var i = r[0];
              var a = r[1];
              var s = new l.default().retain(e.index).insert("\n", t.format).retain(i.length() - a - 1).retain(1, {
                header: null
              });
              this.quill.updateContents(s, p.default.sources.USER);
              this.quill.setSelection(e.index + 1, p.default.sources.SILENT);
              this.quill.scrollIntoView();
            }
          },
          "list autofill": {
            key: " ",
            collapsed: !0,
            format: {
              list: !1
            },
            prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
            handler: function (e, t) {
              var n = t.prefix.length;
              var r = this.quill.getLine(e.index);
              var i = o(r, 2);
              var a = i[0];
              var s = i[1];
              if (s > n) {
                return !0;
              }
              var c = void 0;
              switch (t.prefix.trim()) {
                case "[]":
                case "[ ]":
                  c = "unchecked";
                  break;
                case "[x]":
                  c = "checked";
                  break;
                case "-":
                case "*":
                  c = "bullet";
                  break;
                default:
                  c = "ordered";
              }
              this.quill.insertText(e.index, " ", p.default.sources.USER);
              this.quill.history.cutoff();
              var u = new l.default().retain(e.index - s).delete(n + 1).retain(a.length() - 2 - s).retain(1, {
                list: c
              });
              this.quill.updateContents(u, p.default.sources.USER);
              this.quill.history.cutoff();
              this.quill.setSelection(e.index - n, p.default.sources.SILENT);
            }
          },
          "code exit": {
            key: b.keys.ENTER,
            collapsed: !0,
            format: ["code-block"],
            prefix: /\n\n$/,
            suffix: /^\s+$/,
            handler: function (e) {
              var t = this.quill.getLine(e.index);
              var n = o(t, 2);
              var r = n[0];
              var i = n[1];
              var a = new l.default().retain(e.index + r.length() - i - 2).retain(1, {
                "code-block": null
              }).delete(1);
              this.quill.updateContents(a, p.default.sources.USER);
            }
          },
          "embed left": y(b.keys.LEFT, !1),
          "embed left shift": y(b.keys.LEFT, !0),
          "embed right": y(b.keys.RIGHT, !1),
          "embed right shift": y(b.keys.RIGHT, !0)
        }
      };
      t.default = b;
      t.SHORTKEY = v;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function (e, t) {
        if (Array.isArray(e)) {
          return e;
        }
        if (Symbol.iterator in Object(e)) {
          return function (e, t) {
            var n = [];
            var r = !0;
            var o = !1;
            var i = void 0;
            try {
              for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) {
                ;
              }
            } catch (c) {
              o = !0;
              i = c;
            } finally {
              try {
                if (!r && s.return) {
                  s.return();
                }
              } finally {
                if (o) {
                  throw i;
                }
              }
            }
            return n;
          }(e, t);
        }
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
      var o = function e(t, n, r) {
        if (null === t) {
          t = Function.prototype;
        }
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ("value" in o) {
          return o.value;
        }
        var a = o.get;
        return void 0 !== a ? a.call(r) : void 0;
      };
      var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var a = c(n(0));
      var s = c(n(7));
      function c(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      var l = function (e) {
        function t(e, n) {
          !function (e, t) {
            if (!(e instanceof t)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }(this, t);
          var r = function (e, t) {
            if (!e) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          r.selection = n;
          r.textNode = document.createTextNode(t.CONTENTS);
          r.domNode.appendChild(r.textNode);
          r._length = 0;
          return r;
        }
        (function (e, t) {
          if ("function" !== typeof t && null !== t) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(t, e);
        i(t, null, [{
          key: "value",
          value: function () {}
        }]);
        i(t, [{
          key: "detach",
          value: function () {
            if (null != this.parent) {
              this.parent.removeChild(this);
            }
          }
        }, {
          key: "format",
          value: function (e, n) {
            if (0 !== this._length) {
              return o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "format", this).call(this, e, n);
            }
            for (var r = this, i = 0; null != r && r.statics.scope !== a.default.Scope.BLOCK_BLOT;) {
              i += r.offset(r.parent);
              r = r.parent;
            }
            if (null != r) {
              this._length = t.CONTENTS.length;
              r.optimize();
              r.formatAt(i, t.CONTENTS.length, e, n);
              this._length = 0;
            }
          }
        }, {
          key: "index",
          value: function (e, n) {
            return e === this.textNode ? 0 : o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "index", this).call(this, e, n);
          }
        }, {
          key: "length",
          value: function () {
            return this._length;
          }
        }, {
          key: "position",
          value: function () {
            return [this.textNode, this.textNode.data.length];
          }
        }, {
          key: "remove",
          value: function () {
            o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "remove", this).call(this);
            this.parent = null;
          }
        }, {
          key: "restore",
          value: function () {
            if (!this.selection.composing && null != this.parent) {
              var e = this.textNode;
              var n = this.selection.getNativeRange();
              var o = void 0;
              var i = void 0;
              var c = void 0;
              if (null != n && n.start.node === e && n.end.node === e) {
                var l = [e, n.start.offset, n.end.offset];
                o = l[0];
                i = l[1];
                c = l[2];
              }
              for (; null != this.domNode.lastChild && this.domNode.lastChild !== this.textNode;) {
                this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
              }
              if (this.textNode.data !== t.CONTENTS) {
                var u = this.textNode.data.split(t.CONTENTS).join("");
                if (this.next instanceof s.default) {
                  o = this.next.domNode;
                  this.next.insertAt(0, u);
                  this.textNode.data = t.CONTENTS;
                } else {
                  this.textNode.data = u;
                  this.parent.insertBefore(a.default.create(this.textNode), this);
                  this.textNode = document.createTextNode(t.CONTENTS);
                  this.domNode.appendChild(this.textNode);
                }
              }
              this.remove();
              if (null != i) {
                var d = [i, c].map(function (e) {
                  return Math.max(0, Math.min(o.data.length, e - 1));
                });
                var p = r(d, 2);
                i = p[0];
                c = p[1];
                return {
                  startNode: o,
                  startOffset: i,
                  endNode: o,
                  endOffset: c
                };
              }
            }
          }
        }, {
          key: "update",
          value: function (e, t) {
            var n = this;
            if (e.some(function (e) {
              return "characterData" === e.type && e.target === n.textNode;
            })) {
              var r = this.restore();
              if (r) {
                t.range = r;
              }
            }
          }
        }, {
          key: "value",
          value: function () {
            return "";
          }
        }]);
        return t;
      }(a.default.Embed);
      l.blotName = "cursor";
      l.className = "ql-cursor";
      l.tagName = "span";
      l.CONTENTS = "﻿";
      t.default = l;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = a(n(0));
      var o = n(4);
      var i = a(o);
      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      function s(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function c(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
      }
      var l = function (e) {
        function t() {
          s(this, t);
          return c(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        (function (e, t) {
          if ("function" !== typeof t && null !== t) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(t, e);
        return t;
      }(r.default.Container);
      l.allowedChildren = [i.default, o.BlockEmbed, l];
      t.default = l;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.ColorStyle = t.ColorClass = t.ColorAttributor = void 0;
      var r;
      var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var i = n(0);
      var a = (r = i) && r.__esModule ? r : {
        default: r
      };
      function s(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function c(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
      }
      var l = function (e) {
        function t() {
          s(this, t);
          return c(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        (function (e, t) {
          if ("function" !== typeof t && null !== t) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(t, e);
        o(t, [{
          key: "value",
          value: function (e) {
            var n = function e(t, n, r) {
              if (null === t) {
                t = Function.prototype;
              }
              var o = Object.getOwnPropertyDescriptor(t, n);
              if (void 0 === o) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, r);
              }
              if ("value" in o) {
                return o.value;
              }
              var a = o.get;
              return void 0 !== a ? a.call(r) : void 0;
            }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "value", this).call(this, e);
            return n.startsWith("rgb(") ? (n = n.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), "#" + n.split(",").map(function (e) {
              return ("00" + parseInt(e).toString(16)).slice(-2);
            }).join("")) : n;
          }
        }]);
        return t;
      }(a.default.Attributor.Style);
      var u = new a.default.Attributor.Class("color", "ql-color", {
        scope: a.default.Scope.INLINE
      });
      var d = new l("color", "color", {
        scope: a.default.Scope.INLINE
      });
      t.ColorAttributor = l;
      t.ColorClass = u;
      t.ColorStyle = d;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.sanitize = t.default = void 0;
      var r;
      var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var i = function e(t, n, r) {
        if (null === t) {
          t = Function.prototype;
        }
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ("value" in o) {
          return o.value;
        }
        var a = o.get;
        return void 0 !== a ? a.call(r) : void 0;
      };
      var a = n(6);
      function s(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function c(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
      }
      var l = function (e) {
        function t() {
          s(this, t);
          return c(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        (function (e, t) {
          if ("function" !== typeof t && null !== t) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(t, e);
        o(t, [{
          key: "format",
          value: function (e, n) {
            if (e !== this.statics.blotName || !n) {
              return i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "format", this).call(this, e, n);
            }
            n = this.constructor.sanitize(n);
            this.domNode.setAttribute("href", n);
          }
        }], [{
          key: "create",
          value: function (e) {
            var n = i(t.__proto__ || Object.getPrototypeOf(t), "create", this).call(this, e);
            e = this.sanitize(e);
            n.setAttribute("href", e);
            n.setAttribute("rel", "noopener noreferrer");
            n.setAttribute("target", "_blank");
            return n;
          }
        }, {
          key: "formats",
          value: function (e) {
            return e.getAttribute("href");
          }
        }, {
          key: "sanitize",
          value: function (e) {
            return u(e, this.PROTOCOL_WHITELIST) ? e : this.SANITIZED_URL;
          }
        }]);
        return t;
      }(((r = a) && r.__esModule ? r : {
        default: r
      }).default);
      function u(e, t) {
        var n = document.createElement("a");
        n.href = e;
        var r = n.href.slice(0, n.href.indexOf(":"));
        return t.indexOf(r) > -1;
      }
      l.blotName = "link";
      l.tagName = "A";
      l.SANITIZED_URL = "about:blank";
      l.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"];
      t.default = l;
      t.sanitize = u;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      };
      var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var i = s(n(23));
      var a = s(n(107));
      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      var c = 0;
      function l(e, t) {
        e.setAttribute(t, !("true" === e.getAttribute(t)));
      }
      var u = function () {
        function e(t) {
          var n = this;
          !function (e, t) {
            if (!(e instanceof t)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }(this, e);
          this.select = t;
          this.container = document.createElement("span");
          this.buildPicker();
          this.select.style.display = "none";
          this.select.parentNode.insertBefore(this.container, this.select);
          this.label.addEventListener("mousedown", function () {
            n.togglePicker();
          });
          this.label.addEventListener("keydown", function (e) {
            switch (e.keyCode) {
              case i.default.keys.ENTER:
                n.togglePicker();
                break;
              case i.default.keys.ESCAPE:
                n.escape();
                e.preventDefault();
            }
          });
          this.select.addEventListener("change", this.update.bind(this));
        }
        o(e, [{
          key: "togglePicker",
          value: function () {
            this.container.classList.toggle("ql-expanded");
            l(this.label, "aria-expanded");
            l(this.options, "aria-hidden");
          }
        }, {
          key: "buildItem",
          value: function (e) {
            var t = this;
            var n = document.createElement("span");
            n.tabIndex = "0";
            n.setAttribute("role", "button");
            n.classList.add("ql-picker-item");
            if (e.hasAttribute("value")) {
              n.setAttribute("data-value", e.getAttribute("value"));
            }
            if (e.textContent) {
              n.setAttribute("data-label", e.textContent);
            }
            n.addEventListener("click", function () {
              t.selectItem(n, !0);
            });
            n.addEventListener("keydown", function (e) {
              switch (e.keyCode) {
                case i.default.keys.ENTER:
                  t.selectItem(n, !0);
                  e.preventDefault();
                  break;
                case i.default.keys.ESCAPE:
                  t.escape();
                  e.preventDefault();
              }
            });
            return n;
          }
        }, {
          key: "buildLabel",
          value: function () {
            var e = document.createElement("span");
            e.classList.add("ql-picker-label");
            e.innerHTML = a.default;
            e.tabIndex = "0";
            e.setAttribute("role", "button");
            e.setAttribute("aria-expanded", "false");
            this.container.appendChild(e);
            return e;
          }
        }, {
          key: "buildOptions",
          value: function () {
            var e = this;
            var t = document.createElement("span");
            t.classList.add("ql-picker-options");
            t.setAttribute("aria-hidden", "true");
            t.tabIndex = "-1";
            t.id = "ql-picker-options-" + c;
            c += 1;
            this.label.setAttribute("aria-controls", t.id);
            this.options = t;
            [].slice.call(this.select.options).forEach(function (n) {
              var r = e.buildItem(n);
              t.appendChild(r);
              if (!0 === n.selected) {
                e.selectItem(r);
              }
            });
            this.container.appendChild(t);
          }
        }, {
          key: "buildPicker",
          value: function () {
            var e = this;
            [].slice.call(this.select.attributes).forEach(function (t) {
              e.container.setAttribute(t.name, t.value);
            });
            this.container.classList.add("ql-picker");
            this.label = this.buildLabel();
            this.buildOptions();
          }
        }, {
          key: "escape",
          value: function () {
            var e = this;
            this.close();
            setTimeout(function () {
              return e.label.focus();
            }, 1);
          }
        }, {
          key: "close",
          value: function () {
            this.container.classList.remove("ql-expanded");
            this.label.setAttribute("aria-expanded", "false");
            this.options.setAttribute("aria-hidden", "true");
          }
        }, {
          key: "selectItem",
          value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            var n = this.container.querySelector(".ql-selected");
            if (e !== n && (null != n && n.classList.remove("ql-selected"), null != e && (e.classList.add("ql-selected"), this.select.selectedIndex = [].indexOf.call(e.parentNode.children, e), e.hasAttribute("data-value") ? this.label.setAttribute("data-value", e.getAttribute("data-value")) : this.label.removeAttribute("data-value"), e.hasAttribute("data-label") ? this.label.setAttribute("data-label", e.getAttribute("data-label")) : this.label.removeAttribute("data-label"), t))) {
              if ("function" === typeof Event) {
                this.select.dispatchEvent(new Event("change"));
              } else if ("object" === ("undefined" === typeof Event ? "undefined" : r(Event))) {
                var o = document.createEvent("Event");
                o.initEvent("change", !0, !0);
                this.select.dispatchEvent(o);
              }
              this.close();
            }
          }
        }, {
          key: "update",
          value: function () {
            var e = void 0;
            if (this.select.selectedIndex > -1) {
              var t = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
              e = this.select.options[this.select.selectedIndex];
              this.selectItem(t);
            } else {
              this.selectItem(null);
            }
            var n = null != e && e !== this.select.querySelector("option[selected]");
            this.label.classList.toggle("ql-active", n);
          }
        }]);
        return e;
      }();
      t.default = u;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = _(n(0));
      var o = _(n(5));
      var i = n(4);
      var a = _(i);
      var s = _(n(16));
      var c = _(n(25));
      var l = _(n(24));
      var u = _(n(35));
      var d = _(n(6));
      var p = _(n(22));
      var f = _(n(7));
      var h = _(n(55));
      var m = _(n(42));
      var g = _(n(23));
      function _(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      o.default.register({
        "blots/block": a.default,
        "blots/block/embed": i.BlockEmbed,
        "blots/break": s.default,
        "blots/container": c.default,
        "blots/cursor": l.default,
        "blots/embed": u.default,
        "blots/inline": d.default,
        "blots/scroll": p.default,
        "blots/text": f.default,
        "modules/clipboard": h.default,
        "modules/history": m.default,
        "modules/keyboard": g.default
      });
      r.default.register(a.default, s.default, l.default, d.default, p.default, f.default);
      t.default = o.default;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = n(1);
      var o = function () {
        function e(e) {
          this.domNode = e;
          this.domNode[r.DATA_KEY] = {
            blot: this
          };
        }
        Object.defineProperty(e.prototype, "statics", {
          get: function () {
            return this.constructor;
          },
          enumerable: !0,
          configurable: !0
        });
        e.create = function (e) {
          if (null == this.tagName) {
            throw new r.ParchmentError("Blot definition missing tagName");
          }
          var t;
          if (Array.isArray(this.tagName)) {
            if ("string" === typeof e) {
              e = e.toUpperCase();
              if (parseInt(e).toString() === e) {
                e = parseInt(e);
              }
            }
            t = "number" === typeof e ? document.createElement(this.tagName[e - 1]) : this.tagName.indexOf(e) > -1 ? document.createElement(e) : document.createElement(this.tagName[0]);
          } else {
            t = document.createElement(this.tagName);
          }
          if (this.className) {
            t.classList.add(this.className);
          }
          return t;
        };
        e.prototype.attach = function () {
          if (null != this.parent) {
            this.scroll = this.parent.scroll;
          }
        };
        e.prototype.clone = function () {
          var e = this.domNode.cloneNode(!1);
          return r.create(e);
        };
        e.prototype.detach = function () {
          if (null != this.parent) {
            this.parent.removeChild(this);
          }
          delete this.domNode[r.DATA_KEY];
        };
        e.prototype.deleteAt = function (e, t) {
          this.isolate(e, t).remove();
        };
        e.prototype.formatAt = function (e, t, n, o) {
          var i = this.isolate(e, t);
          if (null != r.query(n, r.Scope.BLOT) && o) {
            i.wrap(n, o);
          } else if (null != r.query(n, r.Scope.ATTRIBUTE)) {
            var a = r.create(this.statics.scope);
            i.wrap(a);
            a.format(n, o);
          }
        };
        e.prototype.insertAt = function (e, t, n) {
          var o = null == n ? r.create("text", t) : r.create(t, n);
          var i = this.split(e);
          this.parent.insertBefore(o, i);
        };
        e.prototype.insertInto = function (e, t) {
          if (void 0 === t) {
            t = null;
          }
          if (null != this.parent) {
            this.parent.children.remove(this);
          }
          var n = null;
          e.children.insertBefore(this, t);
          if (null != t) {
            n = t.domNode;
          }
          if (!(this.domNode.parentNode == e.domNode && this.domNode.nextSibling == n)) {
            e.domNode.insertBefore(this.domNode, n);
          }
          this.parent = e;
          this.attach();
        };
        e.prototype.isolate = function (e, t) {
          var n = this.split(e);
          n.split(t);
          return n;
        };
        e.prototype.length = function () {
          return 1;
        };
        e.prototype.offset = function (e) {
          if (void 0 === e) {
            e = this.parent;
          }
          return null == this.parent || this == e ? 0 : this.parent.children.offset(this) + this.parent.offset(e);
        };
        e.prototype.optimize = function (e) {
          if (null != this.domNode[r.DATA_KEY]) {
            delete this.domNode[r.DATA_KEY].mutations;
          }
        };
        e.prototype.remove = function () {
          if (null != this.domNode.parentNode) {
            this.domNode.parentNode.removeChild(this.domNode);
          }
          this.detach();
        };
        e.prototype.replace = function (e) {
          if (null != e.parent) {
            e.parent.insertBefore(this, e.next);
            e.remove();
          }
        };
        e.prototype.replaceWith = function (e, t) {
          var n = "string" === typeof e ? r.create(e, t) : e;
          n.replace(this);
          return n;
        };
        e.prototype.split = function (e, t) {
          return 0 === e ? this : this.next;
        };
        e.prototype.update = function (e, t) {};
        e.prototype.wrap = function (e, t) {
          var n = "string" === typeof e ? r.create(e, t) : e;
          if (null != this.parent) {
            this.parent.insertBefore(n, this.next);
          }
          n.appendChild(this);
          return n;
        };
        e.blotName = "abstract";
        return e;
      }();
      t.default = o;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = n(12);
      var o = n(32);
      var i = n(33);
      var a = n(1);
      var s = function () {
        function e(e) {
          this.attributes = {};
          this.domNode = e;
          this.build();
        }
        e.prototype.attribute = function (e, t) {
          if (t) {
            if (e.add(this.domNode, t)) {
              if (null != e.value(this.domNode)) {
                this.attributes[e.attrName] = e;
              } else {
                delete this.attributes[e.attrName];
              }
            }
          } else {
            e.remove(this.domNode);
            delete this.attributes[e.attrName];
          }
        };
        e.prototype.build = function () {
          var e = this;
          this.attributes = {};
          var t = r.default.keys(this.domNode);
          var n = o.default.keys(this.domNode);
          var s = i.default.keys(this.domNode);
          t.concat(n).concat(s).forEach(function (t) {
            var n = a.query(t, a.Scope.ATTRIBUTE);
            if (n instanceof r.default) {
              e.attributes[n.attrName] = n;
            }
          });
        };
        e.prototype.copy = function (e) {
          var t = this;
          Object.keys(this.attributes).forEach(function (n) {
            var r = t.attributes[n].value(t.domNode);
            e.format(n, r);
          });
        };
        e.prototype.move = function (e) {
          var t = this;
          this.copy(e);
          Object.keys(this.attributes).forEach(function (e) {
            t.attributes[e].remove(t.domNode);
          });
          this.attributes = {};
        };
        e.prototype.values = function () {
          var e = this;
          return Object.keys(this.attributes).reduce(function (t, n) {
            t[n] = e.attributes[n].value(e.domNode);
            return t;
          }, {});
        };
        return e;
      }();
      t.default = s;
    }, function (e, t, n) {
      "use strict";

      var r = this && this.__extends || function () {
        var e = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (e, t) {
          e.__proto__ = t;
        } || function (e, t) {
          for (var n in t) if (t.hasOwnProperty(n)) {
            e[n] = t[n];
          }
        };
        return function (t, n) {
          function r() {
            this.constructor = t;
          }
          e(t, n);
          t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
        };
      }();
      function o(e, t) {
        return (e.getAttribute("class") || "").split(/\s+/).filter(function (e) {
          return 0 === e.indexOf(t + "-");
        });
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = function (e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this;
        }
        r(t, e);
        t.keys = function (e) {
          return (e.getAttribute("class") || "").split(/\s+/).map(function (e) {
            return e.split("-").slice(0, -1).join("-");
          });
        };
        t.prototype.add = function (e, t) {
          return !!this.canAdd(e, t) && (this.remove(e), e.classList.add(this.keyName + "-" + t), !0);
        };
        t.prototype.remove = function (e) {
          o(e, this.keyName).forEach(function (t) {
            e.classList.remove(t);
          });
          if (0 === e.classList.length) {
            e.removeAttribute("class");
          }
        };
        t.prototype.value = function (e) {
          var t = (o(e, this.keyName)[0] || "").slice(this.keyName.length + 1);
          return this.canAdd(e, t) ? t : "";
        };
        return t;
      }(n(12).default);
      t.default = i;
    }, function (e, t, n) {
      "use strict";

      var r = this && this.__extends || function () {
        var e = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (e, t) {
          e.__proto__ = t;
        } || function (e, t) {
          for (var n in t) if (t.hasOwnProperty(n)) {
            e[n] = t[n];
          }
        };
        return function (t, n) {
          function r() {
            this.constructor = t;
          }
          e(t, n);
          t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
        };
      }();
      function o(e) {
        var t = e.split("-");
        var n = t.slice(1).map(function (e) {
          return e[0].toUpperCase() + e.slice(1);
        }).join("");
        return t[0] + n;
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = function (e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this;
        }
        r(t, e);
        t.keys = function (e) {
          return (e.getAttribute("style") || "").split(";").map(function (e) {
            return e.split(":")[0].trim();
          });
        };
        t.prototype.add = function (e, t) {
          return !!this.canAdd(e, t) && (e.style[o(this.keyName)] = t, !0);
        };
        t.prototype.remove = function (e) {
          e.style[o(this.keyName)] = "";
          if (!e.getAttribute("style")) {
            e.removeAttribute("style");
          }
        };
        t.prototype.value = function (e) {
          var t = e.style[o(this.keyName)];
          return this.canAdd(e, t) ? t : "";
        };
        return t;
      }(n(12).default);
      t.default = i;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var o = function () {
        function e(t, n) {
          !function (e, t) {
            if (!(e instanceof t)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }(this, e);
          this.quill = t;
          this.options = n;
          this.modules = {};
        }
        r(e, [{
          key: "init",
          value: function () {
            var e = this;
            Object.keys(this.options.modules).forEach(function (t) {
              if (null == e.modules[t]) {
                e.addModule(t);
              }
            });
          }
        }, {
          key: "addModule",
          value: function (e) {
            var t = this.quill.constructor.import("modules/" + e);
            this.modules[e] = new t(this.quill, this.options.modules[e] || {});
            return this.modules[e];
          }
        }]);
        return e;
      }();
      o.DEFAULTS = {
        modules: {}
      };
      o.themes = {
        default: o
      };
      t.default = o;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var o = a(n(0));
      var i = a(n(7));
      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      var s = function (e) {
        function t(e) {
          !function (e, t) {
            if (!(e instanceof t)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }(this, t);
          var n = function (e, t) {
            if (!e) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          n.contentNode = document.createElement("span");
          n.contentNode.setAttribute("contenteditable", !1);
          [].slice.call(n.domNode.childNodes).forEach(function (e) {
            n.contentNode.appendChild(e);
          });
          n.leftGuard = document.createTextNode("﻿");
          n.rightGuard = document.createTextNode("﻿");
          n.domNode.appendChild(n.leftGuard);
          n.domNode.appendChild(n.contentNode);
          n.domNode.appendChild(n.rightGuard);
          return n;
        }
        (function (e, t) {
          if ("function" !== typeof t && null !== t) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(t, e);
        r(t, [{
          key: "index",
          value: function (e, n) {
            return e === this.leftGuard ? 0 : e === this.rightGuard ? 1 : function e(t, n, r) {
              if (null === t) {
                t = Function.prototype;
              }
              var o = Object.getOwnPropertyDescriptor(t, n);
              if (void 0 === o) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, r);
              }
              if ("value" in o) {
                return o.value;
              }
              var a = o.get;
              return void 0 !== a ? a.call(r) : void 0;
            }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "index", this).call(this, e, n);
          }
        }, {
          key: "restore",
          value: function (e) {
            var t = void 0;
            var n = void 0;
            var r = e.data.split("﻿").join("");
            if (e === this.leftGuard) {
              if (this.prev instanceof i.default) {
                var a = this.prev.length();
                this.prev.insertAt(a, r);
                t = {
                  startNode: this.prev.domNode,
                  startOffset: a + r.length
                };
              } else {
                n = document.createTextNode(r);
                this.parent.insertBefore(o.default.create(n), this);
                t = {
                  startNode: n,
                  startOffset: r.length
                };
              }
            } else if (e === this.rightGuard) {
              if (this.next instanceof i.default) {
                this.next.insertAt(0, r);
                t = {
                  startNode: this.next.domNode,
                  startOffset: r.length
                };
              } else {
                n = document.createTextNode(r);
                this.parent.insertBefore(o.default.create(n), this.next);
                t = {
                  startNode: n,
                  startOffset: r.length
                };
              }
            }
            e.data = "﻿";
            return t;
          }
        }, {
          key: "update",
          value: function (e, t) {
            var n = this;
            e.forEach(function (e) {
              if ("characterData" === e.type && (e.target === n.leftGuard || e.target === n.rightGuard)) {
                var r = n.restore(e.target);
                if (r) {
                  t.range = r;
                }
              }
            });
          }
        }]);
        return t;
      }(o.default.Embed);
      t.default = s;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.AlignStyle = t.AlignClass = t.AlignAttribute = void 0;
      var r;
      var o = n(0);
      var i = (r = o) && r.__esModule ? r : {
        default: r
      };
      var a = {
        scope: i.default.Scope.BLOCK,
        whitelist: ["right", "center", "justify"]
      };
      var s = new i.default.Attributor.Attribute("align", "align", a);
      var c = new i.default.Attributor.Class("align", "ql-align", a);
      var l = new i.default.Attributor.Style("align", "text-align", a);
      t.AlignAttribute = s;
      t.AlignClass = c;
      t.AlignStyle = l;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.BackgroundStyle = t.BackgroundClass = void 0;
      var r;
      var o = n(0);
      var i = (r = o) && r.__esModule ? r : {
        default: r
      };
      var a = n(26);
      var s = new i.default.Attributor.Class("background", "ql-bg", {
        scope: i.default.Scope.INLINE
      });
      var c = new a.ColorAttributor("background", "background-color", {
        scope: i.default.Scope.INLINE
      });
      t.BackgroundClass = s;
      t.BackgroundStyle = c;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.DirectionStyle = t.DirectionClass = t.DirectionAttribute = void 0;
      var r;
      var o = n(0);
      var i = (r = o) && r.__esModule ? r : {
        default: r
      };
      var a = {
        scope: i.default.Scope.BLOCK,
        whitelist: ["rtl"]
      };
      var s = new i.default.Attributor.Attribute("direction", "dir", a);
      var c = new i.default.Attributor.Class("direction", "ql-direction", a);
      var l = new i.default.Attributor.Style("direction", "direction", a);
      t.DirectionAttribute = s;
      t.DirectionClass = c;
      t.DirectionStyle = l;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.FontClass = t.FontStyle = void 0;
      var r;
      var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var i = n(0);
      var a = (r = i) && r.__esModule ? r : {
        default: r
      };
      function s(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function c(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
      }
      var l = {
        scope: a.default.Scope.INLINE,
        whitelist: ["serif", "monospace"]
      };
      var u = new a.default.Attributor.Class("font", "ql-font", l);
      var d = new (function (e) {
        function t() {
          s(this, t);
          return c(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        (function (e, t) {
          if ("function" !== typeof t && null !== t) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(t, e);
        o(t, [{
          key: "value",
          value: function (e) {
            return function e(t, n, r) {
              if (null === t) {
                t = Function.prototype;
              }
              var o = Object.getOwnPropertyDescriptor(t, n);
              if (void 0 === o) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, r);
              }
              if ("value" in o) {
                return o.value;
              }
              var a = o.get;
              return void 0 !== a ? a.call(r) : void 0;
            }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "value", this).call(this, e).replace(/["']/g, "");
          }
        }]);
        return t;
      }(a.default.Attributor.Style))("font", "font-family", l);
      t.FontStyle = d;
      t.FontClass = u;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.SizeStyle = t.SizeClass = void 0;
      var r;
      var o = n(0);
      var i = (r = o) && r.__esModule ? r : {
        default: r
      };
      var a = new i.default.Attributor.Class("size", "ql-size", {
        scope: i.default.Scope.INLINE,
        whitelist: ["small", "large", "huge"]
      });
      var s = new i.default.Attributor.Style("size", "font-size", {
        scope: i.default.Scope.INLINE,
        whitelist: ["10px", "18px", "32px"]
      });
      t.SizeClass = a;
      t.SizeStyle = s;
    }, function (e, t, n) {
      "use strict";

      e.exports = {
        align: {
          "": n(76),
          center: n(77),
          right: n(78),
          justify: n(79)
        },
        background: n(80),
        blockquote: n(81),
        bold: n(82),
        clean: n(83),
        code: n(58),
        "code-block": n(58),
        color: n(84),
        direction: {
          "": n(85),
          rtl: n(86)
        },
        float: {
          center: n(87),
          full: n(88),
          left: n(89),
          right: n(90)
        },
        formula: n(91),
        header: {
          1: n(92),
          2: n(93)
        },
        italic: n(94),
        image: n(95),
        indent: {
          "+1": n(96),
          "-1": n(97)
        },
        link: n(98),
        list: {
          ordered: n(99),
          bullet: n(100),
          check: n(101)
        },
        script: {
          sub: n(102),
          super: n(103)
        },
        strike: n(104),
        underline: n(105),
        video: n(106)
      };
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.getLastChangeIndex = t.default = void 0;
      var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var o = a(n(0));
      var i = a(n(5));
      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      var s = function (e) {
        function t(e, n) {
          !function (e, t) {
            if (!(e instanceof t)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }(this, t);
          var r = function (e, t) {
            if (!e) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
          r.lastRecorded = 0;
          r.ignoreChange = !1;
          r.clear();
          r.quill.on(i.default.events.EDITOR_CHANGE, function (e, t, n, o) {
            if (!(e !== i.default.events.TEXT_CHANGE || r.ignoreChange)) {
              if (r.options.userOnly && o !== i.default.sources.USER) {
                r.transform(t);
              } else {
                r.record(t, n);
              }
            }
          });
          r.quill.keyboard.addBinding({
            key: "Z",
            shortKey: !0
          }, r.undo.bind(r));
          r.quill.keyboard.addBinding({
            key: "Z",
            shortKey: !0,
            shiftKey: !0
          }, r.redo.bind(r));
          if (/Win/i.test(navigator.platform)) {
            r.quill.keyboard.addBinding({
              key: "Y",
              shortKey: !0
            }, r.redo.bind(r));
          }
          return r;
        }
        (function (e, t) {
          if ("function" !== typeof t && null !== t) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(t, e);
        r(t, [{
          key: "change",
          value: function (e, t) {
            if (0 !== this.stack[e].length) {
              var n = this.stack[e].pop();
              this.stack[t].push(n);
              this.lastRecorded = 0;
              this.ignoreChange = !0;
              this.quill.updateContents(n[e], i.default.sources.USER);
              this.ignoreChange = !1;
              var r = c(n[e]);
              this.quill.setSelection(r);
            }
          }
        }, {
          key: "clear",
          value: function () {
            this.stack = {
              undo: [],
              redo: []
            };
          }
        }, {
          key: "cutoff",
          value: function () {
            this.lastRecorded = 0;
          }
        }, {
          key: "record",
          value: function (e, t) {
            if (0 !== e.ops.length) {
              this.stack.redo = [];
              var n = this.quill.getContents().diff(t);
              var r = Date.now();
              if (this.lastRecorded + this.options.delay > r && this.stack.undo.length > 0) {
                var o = this.stack.undo.pop();
                n = n.compose(o.undo);
                e = o.redo.compose(e);
              } else {
                this.lastRecorded = r;
              }
              this.stack.undo.push({
                redo: e,
                undo: n
              });
              if (this.stack.undo.length > this.options.maxStack) {
                this.stack.undo.shift();
              }
            }
          }
        }, {
          key: "redo",
          value: function () {
            this.change("redo", "undo");
          }
        }, {
          key: "transform",
          value: function (e) {
            this.stack.undo.forEach(function (t) {
              t.undo = e.transform(t.undo, !0);
              t.redo = e.transform(t.redo, !0);
            });
            this.stack.redo.forEach(function (t) {
              t.undo = e.transform(t.undo, !0);
              t.redo = e.transform(t.redo, !0);
            });
          }
        }, {
          key: "undo",
          value: function () {
            this.change("undo", "redo");
          }
        }]);
        return t;
      }(a(n(9)).default);
      function c(e) {
        var t = e.reduce(function (e, t) {
          return e += t.delete || 0;
        }, 0);
        var n = e.length() - t;
        if (function (e) {
          var t = e.ops[e.ops.length - 1];
          return null != t && (null != t.insert ? "string" === typeof t.insert && t.insert.endsWith("\n") : null != t.attributes && Object.keys(t.attributes).some(function (e) {
            return null != o.default.query(e, o.default.Scope.BLOCK);
          }));
        }(e)) {
          n -= 1;
        }
        return n;
      }
      s.DEFAULTS = {
        delay: 1e3,
        maxStack: 100,
        userOnly: !1
      };
      t.default = s;
      t.getLastChangeIndex = c;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.default = t.BaseTooltip = void 0;
      var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var o = f(n(3));
      var i = f(n(2));
      var a = f(n(8));
      var s = f(n(23));
      var c = f(n(34));
      var l = f(n(59));
      var u = f(n(60));
      var d = f(n(28));
      var p = f(n(61));
      function f(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      function h(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function m(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
      }
      function g(e, t) {
        if ("function" !== typeof t && null !== t) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e, t);
          } else {
            e.__proto__ = t;
          }
        }
      }
      var _ = [!1, "center", "right", "justify"];
      var v = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"];
      var b = [!1, "serif", "monospace"];
      var y = ["1", "2", "3", !1];
      var E = ["small", !1, "large", "huge"];
      var O = function (e) {
        function t(e, n) {
          h(this, t);
          var r = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
          e.emitter.listenDOM("click", document.body, function t(n) {
            if (!document.body.contains(e.root)) {
              return document.body.removeEventListener("click", t);
            }
            if (!(null == r.tooltip || r.tooltip.root.contains(n.target) || document.activeElement === r.tooltip.textbox || r.quill.hasFocus())) {
              r.tooltip.hide();
            }
            if (null != r.pickers) {
              r.pickers.forEach(function (e) {
                if (!e.container.contains(n.target)) {
                  e.close();
                }
              });
            }
          });
          return r;
        }
        g(t, e);
        r(t, [{
          key: "addModule",
          value: function (e) {
            var n = function e(t, n, r) {
              if (null === t) {
                t = Function.prototype;
              }
              var o = Object.getOwnPropertyDescriptor(t, n);
              if (void 0 === o) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, r);
              }
              if ("value" in o) {
                return o.value;
              }
              var a = o.get;
              return void 0 !== a ? a.call(r) : void 0;
            }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "addModule", this).call(this, e);
            if ("toolbar" === e) {
              this.extendToolbar(n);
            }
            return n;
          }
        }, {
          key: "buildButtons",
          value: function (e, t) {
            e.forEach(function (e) {
              (e.getAttribute("class") || "").split(/\s+/).forEach(function (n) {
                if (n.startsWith("ql-") && (n = n.slice("ql-".length), null != t[n])) {
                  if ("direction" === n) {
                    e.innerHTML = t[n][""] + t[n].rtl;
                  } else if ("string" === typeof t[n]) {
                    e.innerHTML = t[n];
                  } else {
                    var r = e.value || "";
                    if (null != r && t[n][r]) {
                      e.innerHTML = t[n][r];
                    }
                  }
                }
              });
            });
          }
        }, {
          key: "buildPickers",
          value: function (e, t) {
            var n = this;
            this.pickers = e.map(function (e) {
              if (e.classList.contains("ql-align")) {
                if (null == e.querySelector("option")) {
                  C(e, _);
                }
                return new u.default(e, t.align);
              }
              if (e.classList.contains("ql-background") || e.classList.contains("ql-color")) {
                var n = e.classList.contains("ql-background") ? "background" : "color";
                if (null == e.querySelector("option")) {
                  C(e, v, "background" === n ? "#ffffff" : "#000000");
                }
                return new l.default(e, t[n]);
              }
              if (null == e.querySelector("option")) {
                if (e.classList.contains("ql-font")) {
                  C(e, b);
                } else {
                  if (e.classList.contains("ql-header")) {
                    C(e, y);
                  } else {
                    if (e.classList.contains("ql-size")) {
                      C(e, E);
                    }
                  }
                }
              }
              return new d.default(e);
            });
            this.quill.on(a.default.events.EDITOR_CHANGE, function () {
              n.pickers.forEach(function (e) {
                e.update();
              });
            });
          }
        }]);
        return t;
      }(c.default);
      O.DEFAULTS = (0, o.default)(!0, {}, c.default.DEFAULTS, {
        modules: {
          toolbar: {
            handlers: {
              formula: function () {
                this.quill.theme.tooltip.edit("formula");
              },
              image: function () {
                var e = this;
                var t = this.container.querySelector("input.ql-image[type=file]");
                if (null == t) {
                  (t = document.createElement("input")).setAttribute("type", "file");
                  t.setAttribute("accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon");
                  t.classList.add("ql-image");
                  t.addEventListener("change", function () {
                    if (null != t.files && null != t.files[0]) {
                      var n = new FileReader();
                      n.onload = function (n) {
                        var r = e.quill.getSelection(!0);
                        e.quill.updateContents(new i.default().retain(r.index).delete(r.length).insert({
                          image: n.target.result
                        }), a.default.sources.USER);
                        e.quill.setSelection(r.index + 1, a.default.sources.SILENT);
                        t.value = "";
                      };
                      n.readAsDataURL(t.files[0]);
                    }
                  });
                  this.container.appendChild(t);
                }
                t.click();
              },
              video: function () {
                this.quill.theme.tooltip.edit("video");
              }
            }
          }
        }
      });
      var w = function (e) {
        function t(e, n) {
          h(this, t);
          var r = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
          r.textbox = r.root.querySelector("input[type=\"text\"]");
          r.listen();
          return r;
        }
        g(t, e);
        r(t, [{
          key: "listen",
          value: function () {
            var e = this;
            this.textbox.addEventListener("keydown", function (t) {
              if (s.default.match(t, "enter")) {
                e.save();
                t.preventDefault();
              } else {
                if (s.default.match(t, "escape")) {
                  e.cancel();
                  t.preventDefault();
                }
              }
            });
          }
        }, {
          key: "cancel",
          value: function () {
            this.hide();
          }
        }, {
          key: "edit",
          value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "link";
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            this.root.classList.remove("ql-hidden");
            this.root.classList.add("ql-editing");
            if (null != t) {
              this.textbox.value = t;
            } else {
              if (e !== this.root.getAttribute("data-mode")) {
                this.textbox.value = "";
              }
            }
            this.position(this.quill.getBounds(this.quill.selection.savedRange));
            this.textbox.select();
            this.textbox.setAttribute("placeholder", this.textbox.getAttribute("data-" + e) || "");
            this.root.setAttribute("data-mode", e);
          }
        }, {
          key: "restoreFocus",
          value: function () {
            var e = this.quill.scrollingContainer.scrollTop;
            this.quill.focus();
            this.quill.scrollingContainer.scrollTop = e;
          }
        }, {
          key: "save",
          value: function () {
            var e = this.textbox.value;
            switch (this.root.getAttribute("data-mode")) {
              case "link":
                var t = this.quill.root.scrollTop;
                if (this.linkRange) {
                  this.quill.formatText(this.linkRange, "link", e, a.default.sources.USER);
                  delete this.linkRange;
                } else {
                  this.restoreFocus();
                  this.quill.format("link", e, a.default.sources.USER);
                }
                this.quill.root.scrollTop = t;
                break;
              case "video":
                e = function (e) {
                  var t = e.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || e.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
                  return t ? (t[1] || "https") + "://www.youtube.com/embed/" + t[2] + "?showinfo=0" : (t = e.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? (t[1] || "https") + "://player.vimeo.com/video/" + t[2] + "/" : e;
                }(e);
              case "formula":
                if (!e) {
                  break;
                }
                var n = this.quill.getSelection(!0);
                if (null != n) {
                  var r = n.index + n.length;
                  this.quill.insertEmbed(r, this.root.getAttribute("data-mode"), e, a.default.sources.USER);
                  if ("formula" === this.root.getAttribute("data-mode")) {
                    this.quill.insertText(r + 1, " ", a.default.sources.USER);
                  }
                  this.quill.setSelection(r + 2, a.default.sources.USER);
                }
            }
            this.textbox.value = "";
            this.hide();
          }
        }]);
        return t;
      }(p.default);
      function C(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        t.forEach(function (t) {
          var r = document.createElement("option");
          if (t === n) {
            r.setAttribute("selected", "selected");
          } else {
            r.setAttribute("value", t);
          }
          e.appendChild(r);
        });
      }
      t.BaseTooltip = w;
      t.default = O;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function () {
        function e() {
          this.head = this.tail = null;
          this.length = 0;
        }
        e.prototype.append = function () {
          for (var e = [], t = 0; t < arguments.length; t++) {
            e[t] = arguments[t];
          }
          this.insertBefore(e[0], null);
          if (e.length > 1) {
            this.append.apply(this, e.slice(1));
          }
        };
        e.prototype.contains = function (e) {
          for (var t, n = this.iterator(); t = n();) {
            if (t === e) {
              return !0;
            }
          }
          return !1;
        };
        e.prototype.insertBefore = function (e, t) {
          if (e) {
            e.next = t;
            if (null != t) {
              e.prev = t.prev;
              if (null != t.prev) {
                t.prev.next = e;
              }
              t.prev = e;
              if (t === this.head) {
                this.head = e;
              }
            } else {
              if (null != this.tail) {
                this.tail.next = e;
                e.prev = this.tail;
                this.tail = e;
              } else {
                e.prev = null;
                this.head = this.tail = e;
              }
            }
            this.length += 1;
          }
        };
        e.prototype.offset = function (e) {
          for (var t = 0, n = this.head; null != n;) {
            if (n === e) {
              return t;
            }
            t += n.length();
            n = n.next;
          }
          return -1;
        };
        e.prototype.remove = function (e) {
          if (this.contains(e)) {
            if (null != e.prev) {
              e.prev.next = e.next;
            }
            if (null != e.next) {
              e.next.prev = e.prev;
            }
            if (e === this.head) {
              this.head = e.next;
            }
            if (e === this.tail) {
              this.tail = e.prev;
            }
            this.length -= 1;
          }
        };
        e.prototype.iterator = function (e) {
          if (void 0 === e) {
            e = this.head;
          }
          return function () {
            var t = e;
            if (null != e) {
              e = e.next;
            }
            return t;
          };
        };
        e.prototype.find = function (e, t) {
          if (void 0 === t) {
            t = !1;
          }
          for (var n, r = this.iterator(); n = r();) {
            var o = n.length();
            if (e < o || t && e === o && (null == n.next || 0 !== n.next.length())) {
              return [n, e];
            }
            e -= o;
          }
          return [null, 0];
        };
        e.prototype.forEach = function (e) {
          for (var t, n = this.iterator(); t = n();) {
            e(t);
          }
        };
        e.prototype.forEachAt = function (e, t, n) {
          if (!(t <= 0)) {
            for (var r, o = this.find(e), i = o[0], a = e - o[1], s = this.iterator(i); (r = s()) && a < e + t;) {
              var c = r.length();
              if (e > a) {
                n(r, e - a, Math.min(t, a + c - e));
              } else {
                n(r, 0, Math.min(c, e + t - a));
              }
              a += c;
            }
          }
        };
        e.prototype.map = function (e) {
          return this.reduce(function (t, n) {
            t.push(e(n));
            return t;
          }, []);
        };
        e.prototype.reduce = function (e, t) {
          for (var n, r = this.iterator(); n = r();) {
            t = e(t, n);
          }
          return t;
        };
        return e;
      }();
      t.default = r;
    }, function (e, t, n) {
      "use strict";

      var r = this && this.__extends || function () {
        var e = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (e, t) {
          e.__proto__ = t;
        } || function (e, t) {
          for (var n in t) if (t.hasOwnProperty(n)) {
            e[n] = t[n];
          }
        };
        return function (t, n) {
          function r() {
            this.constructor = t;
          }
          e(t, n);
          t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
        };
      }();
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = n(17);
      var i = n(1);
      var a = {
        attributes: !0,
        characterData: !0,
        characterDataOldValue: !0,
        childList: !0,
        subtree: !0
      };
      var s = function (e) {
        function t(t) {
          var n = e.call(this, t) || this;
          n.scroll = n;
          n.observer = new MutationObserver(function (e) {
            n.update(e);
          });
          n.observer.observe(n.domNode, a);
          n.attach();
          return n;
        }
        r(t, e);
        t.prototype.detach = function () {
          e.prototype.detach.call(this);
          this.observer.disconnect();
        };
        t.prototype.deleteAt = function (t, n) {
          this.update();
          if (0 === t && n === this.length()) {
            this.children.forEach(function (e) {
              e.remove();
            });
          } else {
            e.prototype.deleteAt.call(this, t, n);
          }
        };
        t.prototype.formatAt = function (t, n, r, o) {
          this.update();
          e.prototype.formatAt.call(this, t, n, r, o);
        };
        t.prototype.insertAt = function (t, n, r) {
          this.update();
          e.prototype.insertAt.call(this, t, n, r);
        };
        t.prototype.optimize = function (t, n) {
          var r = this;
          if (void 0 === t) {
            t = [];
          }
          if (void 0 === n) {
            n = {};
          }
          e.prototype.optimize.call(this, n);
          for (var a = [].slice.call(this.observer.takeRecords()); a.length > 0;) {
            t.push(a.pop());
          }
          for (var s = function e(t, n) {
              if (void 0 === n) {
                n = !0;
              }
              if (null != t && t !== r && null != t.domNode.parentNode) {
                if (null == t.domNode[i.DATA_KEY].mutations) {
                  t.domNode[i.DATA_KEY].mutations = [];
                }
                if (n) {
                  e(t.parent);
                }
              }
            }, c = function e(t) {
              if (null != t.domNode[i.DATA_KEY] && null != t.domNode[i.DATA_KEY].mutations) {
                if (t instanceof o.default) {
                  t.children.forEach(e);
                }
                t.optimize(n);
              }
            }, l = t, u = 0; l.length > 0; u += 1) {
            if (u >= 100) {
              throw new Error("[Parchment] Maximum optimize iterations reached");
            }
            for (l.forEach(function (e) {
              var t = i.find(e.target, !0);
              if (null != t) {
                if (t.domNode === e.target) {
                  if ("childList" === e.type) {
                    s(i.find(e.previousSibling, !1));
                    [].forEach.call(e.addedNodes, function (e) {
                      var t = i.find(e, !1);
                      s(t, !1);
                      if (t instanceof o.default) {
                        t.children.forEach(function (e) {
                          s(e, !1);
                        });
                      }
                    });
                  } else {
                    if ("attributes" === e.type) {
                      s(t.prev);
                    }
                  }
                }
                s(t);
              }
            }), this.children.forEach(c), a = (l = [].slice.call(this.observer.takeRecords())).slice(); a.length > 0;) {
              t.push(a.pop());
            }
          }
        };
        t.prototype.update = function (t, n) {
          var r = this;
          if (void 0 === n) {
            n = {};
          }
          (t = t || this.observer.takeRecords()).map(function (e) {
            var t = i.find(e.target, !0);
            return null == t ? null : null == t.domNode[i.DATA_KEY].mutations ? (t.domNode[i.DATA_KEY].mutations = [e], t) : (t.domNode[i.DATA_KEY].mutations.push(e), null);
          }).forEach(function (e) {
            if (null != e && e !== r && null != e.domNode[i.DATA_KEY]) {
              e.update(e.domNode[i.DATA_KEY].mutations || [], n);
            }
          });
          if (null != this.domNode[i.DATA_KEY].mutations) {
            e.prototype.update.call(this, this.domNode[i.DATA_KEY].mutations, n);
          }
          this.optimize(t, n);
        };
        t.blotName = "scroll";
        t.defaultChild = "block";
        t.scope = i.Scope.BLOCK_BLOT;
        t.tagName = "DIV";
        return t;
      }(o.default);
      t.default = s;
    }, function (e, t, n) {
      "use strict";

      var r = this && this.__extends || function () {
        var e = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (e, t) {
          e.__proto__ = t;
        } || function (e, t) {
          for (var n in t) if (t.hasOwnProperty(n)) {
            e[n] = t[n];
          }
        };
        return function (t, n) {
          function r() {
            this.constructor = t;
          }
          e(t, n);
          t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
        };
      }();
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = n(18);
      var i = n(1);
      var a = function (e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this;
        }
        r(t, e);
        t.formats = function (n) {
          if (n.tagName !== t.tagName) {
            return e.formats.call(this, n);
          }
        };
        t.prototype.format = function (n, r) {
          var i = this;
          if (n !== this.statics.blotName || r) {
            e.prototype.format.call(this, n, r);
          } else {
            this.children.forEach(function (e) {
              if (!(e instanceof o.default)) {
                e = e.wrap(t.blotName, !0);
              }
              i.attributes.copy(e);
            });
            this.unwrap();
          }
        };
        t.prototype.formatAt = function (t, n, r, o) {
          if (null != this.formats()[r] || i.query(r, i.Scope.ATTRIBUTE)) {
            this.isolate(t, n).format(r, o);
          } else {
            e.prototype.formatAt.call(this, t, n, r, o);
          }
        };
        t.prototype.optimize = function (n) {
          e.prototype.optimize.call(this, n);
          var r = this.formats();
          if (0 === Object.keys(r).length) {
            return this.unwrap();
          }
          var o = this.next;
          if (o instanceof t && o.prev === this && function (e, t) {
            if (Object.keys(e).length !== Object.keys(t).length) {
              return !1;
            }
            for (var n in e) if (e[n] !== t[n]) {
              return !1;
            }
            return !0;
          }(r, o.formats())) {
            o.moveChildren(this);
            o.remove();
          }
        };
        t.blotName = "inline";
        t.scope = i.Scope.INLINE_BLOT;
        t.tagName = "SPAN";
        return t;
      }(o.default);
      t.default = a;
    }, function (e, t, n) {
      "use strict";

      var r = this && this.__extends || function () {
        var e = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (e, t) {
          e.__proto__ = t;
        } || function (e, t) {
          for (var n in t) if (t.hasOwnProperty(n)) {
            e[n] = t[n];
          }
        };
        return function (t, n) {
          function r() {
            this.constructor = t;
          }
          e(t, n);
          t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
        };
      }();
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = n(18);
      var i = n(1);
      var a = function (e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this;
        }
        r(t, e);
        t.formats = function (n) {
          var r = i.query(t.blotName).tagName;
          if (n.tagName !== r) {
            return e.formats.call(this, n);
          }
        };
        t.prototype.format = function (n, r) {
          if (null != i.query(n, i.Scope.BLOCK)) {
            if (n !== this.statics.blotName || r) {
              e.prototype.format.call(this, n, r);
            } else {
              this.replaceWith(t.blotName);
            }
          }
        };
        t.prototype.formatAt = function (t, n, r, o) {
          if (null != i.query(r, i.Scope.BLOCK)) {
            this.format(r, o);
          } else {
            e.prototype.formatAt.call(this, t, n, r, o);
          }
        };
        t.prototype.insertAt = function (t, n, r) {
          if (null == r || null != i.query(n, i.Scope.INLINE)) {
            e.prototype.insertAt.call(this, t, n, r);
          } else {
            var o = this.split(t);
            var a = i.create(n, r);
            o.parent.insertBefore(a, o);
          }
        };
        t.prototype.update = function (t, n) {
          if (navigator.userAgent.match(/Trident/)) {
            this.build();
          } else {
            e.prototype.update.call(this, t, n);
          }
        };
        t.blotName = "block";
        t.scope = i.Scope.BLOCK_BLOT;
        t.tagName = "P";
        return t;
      }(o.default);
      t.default = a;
    }, function (e, t, n) {
      "use strict";

      var r = this && this.__extends || function () {
        var e = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (e, t) {
          e.__proto__ = t;
        } || function (e, t) {
          for (var n in t) if (t.hasOwnProperty(n)) {
            e[n] = t[n];
          }
        };
        return function (t, n) {
          function r() {
            this.constructor = t;
          }
          e(t, n);
          t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
        };
      }();
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = function (e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this;
        }
        r(t, e);
        t.formats = function (e) {};
        t.prototype.format = function (t, n) {
          e.prototype.formatAt.call(this, 0, this.length(), t, n);
        };
        t.prototype.formatAt = function (t, n, r, o) {
          if (0 === t && n === this.length()) {
            this.format(r, o);
          } else {
            e.prototype.formatAt.call(this, t, n, r, o);
          }
        };
        t.prototype.formats = function () {
          return this.statics.formats(this.domNode);
        };
        return t;
      }(n(19).default);
      t.default = o;
    }, function (e, t, n) {
      "use strict";

      var r = this && this.__extends || function () {
        var e = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (e, t) {
          e.__proto__ = t;
        } || function (e, t) {
          for (var n in t) if (t.hasOwnProperty(n)) {
            e[n] = t[n];
          }
        };
        return function (t, n) {
          function r() {
            this.constructor = t;
          }
          e(t, n);
          t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
        };
      }();
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = n(19);
      var i = n(1);
      var a = function (e) {
        function t(t) {
          var n = e.call(this, t) || this;
          n.text = n.statics.value(n.domNode);
          return n;
        }
        r(t, e);
        t.create = function (e) {
          return document.createTextNode(e);
        };
        t.value = function (e) {
          var t = e.data;
          if (t.normalize) {
            t = t.normalize();
          }
          return t;
        };
        t.prototype.deleteAt = function (e, t) {
          this.domNode.data = this.text = this.text.slice(0, e) + this.text.slice(e + t);
        };
        t.prototype.index = function (e, t) {
          return this.domNode === e ? t : -1;
        };
        t.prototype.insertAt = function (t, n, r) {
          if (null == r) {
            this.text = this.text.slice(0, t) + n + this.text.slice(t);
            this.domNode.data = this.text;
          } else {
            e.prototype.insertAt.call(this, t, n, r);
          }
        };
        t.prototype.length = function () {
          return this.text.length;
        };
        t.prototype.optimize = function (n) {
          e.prototype.optimize.call(this, n);
          this.text = this.statics.value(this.domNode);
          if (0 === this.text.length) {
            this.remove();
          } else {
            if (this.next instanceof t && this.next.prev === this) {
              this.insertAt(this.length(), this.next.value());
              this.next.remove();
            }
          }
        };
        t.prototype.position = function (e, t) {
          if (void 0 === t) {
            t = !1;
          }
          return [this.domNode, e];
        };
        t.prototype.split = function (e, t) {
          if (void 0 === t) {
            t = !1;
          }
          if (!t) {
            if (0 === e) {
              return this;
            }
            if (e === this.length()) {
              return this.next;
            }
          }
          var n = i.create(this.domNode.splitText(e));
          this.parent.insertBefore(n, this.next);
          this.text = this.statics.value(this.domNode);
          return n;
        };
        t.prototype.update = function (e, t) {
          var n = this;
          if (e.some(function (e) {
            return "characterData" === e.type && e.target === n.domNode;
          })) {
            this.text = this.statics.value(this.domNode);
          }
        };
        t.prototype.value = function () {
          return this.text;
        };
        t.blotName = "text";
        t.scope = i.Scope.INLINE_BLOT;
        return t;
      }(o.default);
      t.default = a;
    }, function (e, t, n) {
      "use strict";

      var r = document.createElement("div");
      r.classList.toggle("test-class", !1);
      if (r.classList.contains("test-class")) {
        var o = DOMTokenList.prototype.toggle;
        DOMTokenList.prototype.toggle = function (e, t) {
          return arguments.length > 1 && !this.contains(e) === !t ? t : o.call(this, e);
        };
      }
      if (!String.prototype.startsWith) {
        String.prototype.startsWith = function (e, t) {
          t = t || 0;
          return this.substr(t, e.length) === e;
        };
      }
      if (!String.prototype.endsWith) {
        String.prototype.endsWith = function (e, t) {
          var n = this.toString();
          if ("number" !== typeof t || !isFinite(t) || Math.floor(t) !== t || t > n.length) {
            t = n.length;
          }
          t -= e.length;
          var r = n.indexOf(e, t);
          return -1 !== r && r === t;
        };
      }
      if (!Array.prototype.find) {
        Object.defineProperty(Array.prototype, "find", {
          value: function (e) {
            if (null === this) {
              throw new TypeError("Array.prototype.find called on null or undefined");
            }
            if ("function" !== typeof e) {
              throw new TypeError("predicate must be a function");
            }
            for (var t, n = Object(this), r = n.length >>> 0, o = arguments[1], i = 0; i < r; i++) {
              t = n[i];
              if (e.call(o, t, i, n)) {
                return t;
              }
            }
          }
        });
      }
      document.addEventListener("DOMContentLoaded", function () {
        document.execCommand("enableObjectResizing", !1, !1);
        document.execCommand("autoUrlDetect", !1, !1);
      });
    }, function (e, t) {
      function n(e, t, a) {
        if (e == t) {
          return e ? [[0, e]] : [];
        }
        if (a < 0 || e.length < a) {
          a = null;
        }
        var c = o(e, t);
        var l = e.substring(0, c);
        c = i(e = e.substring(c), t = t.substring(c));
        var u = e.substring(e.length - c);
        var d = function (e, t) {
          var a;
          if (!e) {
            return [[1, t]];
          }
          if (!t) {
            return [[-1, e]];
          }
          var s = e.length > t.length ? e : t;
          var c = e.length > t.length ? t : e;
          var l = s.indexOf(c);
          if (-1 != l) {
            a = [[1, s.substring(0, l)], [0, c], [1, s.substring(l + c.length)]];
            if (e.length > t.length) {
              a[0][0] = a[2][0] = -1;
            }
            return a;
          }
          if (1 == c.length) {
            return [[-1, e], [1, t]];
          }
          var u = function (e, t) {
            var n = e.length > t.length ? e : t;
            var r = e.length > t.length ? t : e;
            if (n.length < 4 || 2 * r.length < n.length) {
              return null;
            }
            function a(e, t, n) {
              for (var r, a, s, c, l = e.substring(n, n + Math.floor(e.length / 4)), u = -1, d = ""; -1 != (u = t.indexOf(l, u + 1));) {
                var p = o(e.substring(n), t.substring(u));
                var f = i(e.substring(0, n), t.substring(0, u));
                if (d.length < f + p) {
                  d = t.substring(u - f, u) + t.substring(u, u + p);
                  r = e.substring(0, n - f);
                  a = e.substring(n + p);
                  s = t.substring(0, u - f);
                  c = t.substring(u + p);
                }
              }
              return 2 * d.length >= e.length ? [r, a, s, c, d] : null;
            }
            var s;
            var c;
            var l;
            var u;
            var d;
            var p = a(n, r, Math.ceil(n.length / 4));
            var f = a(n, r, Math.ceil(n.length / 2));
            if (!p && !f) {
              return null;
            }
            s = f ? p && p[4].length > f[4].length ? p : f : p;
            if (e.length > t.length) {
              c = s[0];
              l = s[1];
              u = s[2];
              d = s[3];
            } else {
              u = s[0];
              d = s[1];
              c = s[2];
              l = s[3];
            }
            var h = s[4];
            return [c, l, u, d, h];
          }(e, t);
          if (u) {
            var d = u[0];
            var p = u[1];
            var f = u[2];
            var h = u[3];
            var m = u[4];
            var g = n(d, f);
            var _ = n(p, h);
            return g.concat([[0, m]], _);
          }
          return function (e, t) {
            for (var n = e.length, o = t.length, i = Math.ceil((n + o) / 2), a = i, s = 2 * i, c = new Array(s), l = new Array(s), u = 0; u < s; u++) {
              c[u] = -1;
              l[u] = -1;
            }
            c[a + 1] = 0;
            l[a + 1] = 0;
            for (var d = n - o, p = d % 2 != 0, f = 0, h = 0, m = 0, g = 0, _ = 0; _ < i; _++) {
              for (var v = -_ + f; v <= _ - h; v += 2) {
                for (var b = a + v, y = (T = v == -_ || v != _ && c[b - 1] < c[b + 1] ? c[b + 1] : c[b - 1] + 1) - v; T < n && y < o && e.charAt(T) == t.charAt(y);) {
                  T++;
                  y++;
                }
                c[b] = T;
                if (T > n) {
                  h += 2;
                } else if (y > o) {
                  f += 2;
                } else if (p && (w = a + d - v) >= 0 && w < s && -1 != l[w]) {
                  var E = n - l[w];
                  if (T >= E) {
                    return r(e, t, T, y);
                  }
                }
              }
              for (var O = -_ + m; O <= _ - g; O += 2) {
                for (var w = a + O, C = (E = O == -_ || O != _ && l[w - 1] < l[w + 1] ? l[w + 1] : l[w - 1] + 1) - O; E < n && C < o && e.charAt(n - E - 1) == t.charAt(o - C - 1);) {
                  E++;
                  C++;
                }
                l[w] = E;
                if (E > n) {
                  g += 2;
                } else if (C > o) {
                  m += 2;
                } else if (!p && (b = a + d - O) >= 0 && b < s && -1 != c[b]) {
                  var T = c[b];
                  y = a + T - b;
                  if (T >= (E = n - E)) {
                    return r(e, t, T, y);
                  }
                }
              }
            }
            return [[-1, e], [1, t]];
          }(e, t);
        }(e = e.substring(0, e.length - c), t = t.substring(0, t.length - c));
        if (l) {
          d.unshift([0, l]);
        }
        if (u) {
          d.push([0, u]);
        }
        (function e(t) {
          t.push([0, ""]);
          for (var n, r = 0, a = 0, s = 0, c = "", l = ""; r < t.length;) {
            switch (t[r][0]) {
              case 1:
                s++;
                l += t[r][1];
                r++;
                break;
              case -1:
                a++;
                c += t[r][1];
                r++;
                break;
              case 0:
                if (a + s > 1) {
                  if (0 !== a && 0 !== s) {
                    if (0 !== (n = o(l, c))) {
                      if (r - a - s > 0 && 0 == t[r - a - s - 1][0]) {
                        t[r - a - s - 1][1] += l.substring(0, n);
                      } else {
                        t.splice(0, 0, [0, l.substring(0, n)]);
                        r++;
                      }
                      l = l.substring(n);
                      c = c.substring(n);
                    }
                    if (0 !== (n = i(l, c))) {
                      t[r][1] = l.substring(l.length - n) + t[r][1];
                      l = l.substring(0, l.length - n);
                      c = c.substring(0, c.length - n);
                    }
                  }
                  if (0 === a) {
                    t.splice(r - s, a + s, [1, l]);
                  } else {
                    if (0 === s) {
                      t.splice(r - a, a + s, [-1, c]);
                    } else {
                      t.splice(r - a - s, a + s, [-1, c], [1, l]);
                    }
                  }
                  r = r - a - s + (a ? 1 : 0) + (s ? 1 : 0) + 1;
                } else {
                  if (0 !== r && 0 == t[r - 1][0]) {
                    t[r - 1][1] += t[r][1];
                    t.splice(r, 1);
                  } else {
                    r++;
                  }
                }
                s = 0;
                a = 0;
                c = "";
                l = "";
            }
          }
          if ("" === t[t.length - 1][1]) {
            t.pop();
          }
          var u = !1;
          for (r = 1; r < t.length - 1;) {
            if (0 == t[r - 1][0] && 0 == t[r + 1][0]) {
              if (t[r][1].substring(t[r][1].length - t[r - 1][1].length) == t[r - 1][1]) {
                t[r][1] = t[r - 1][1] + t[r][1].substring(0, t[r][1].length - t[r - 1][1].length);
                t[r + 1][1] = t[r - 1][1] + t[r + 1][1];
                t.splice(r - 1, 1);
                u = !0;
              } else {
                if (t[r][1].substring(0, t[r + 1][1].length) == t[r + 1][1]) {
                  t[r - 1][1] += t[r + 1][1];
                  t[r][1] = t[r][1].substring(t[r + 1][1].length) + t[r + 1][1];
                  t.splice(r + 1, 1);
                  u = !0;
                }
              }
            }
            r++;
          }
          if (u) {
            e(t);
          }
        })(d);
        if (null != a) {
          d = function (e, t) {
            var n = function (e, t) {
              if (0 === t) {
                return [0, e];
              }
              for (var n = 0, r = 0; r < e.length; r++) {
                var o = e[r];
                if (-1 === o[0] || 0 === o[0]) {
                  var i = n + o[1].length;
                  if (t === i) {
                    return [r + 1, e];
                  }
                  if (t < i) {
                    e = e.slice();
                    var a = t - n;
                    var s = [o[0], o[1].slice(0, a)];
                    var c = [o[0], o[1].slice(a)];
                    e.splice(r, 1, s, c);
                    return [r + 1, e];
                  }
                  n = i;
                }
              }
              throw new Error("cursor_pos is out of bounds!");
            }(e, t);
            var r = n[1];
            var o = n[0];
            var i = r[o];
            var a = r[o + 1];
            if (null == i) {
              return e;
            }
            if (0 !== i[0]) {
              return e;
            }
            if (null != a && i[1] + a[1] === a[1] + i[1]) {
              r.splice(o, 2, a, i);
              return s(r, o, 2);
            }
            if (null != a && 0 === a[1].indexOf(i[1])) {
              r.splice(o, 2, [a[0], i[1]], [0, i[1]]);
              var c = a[1].slice(i[1].length);
              if (c.length > 0) {
                r.splice(o + 2, 0, [a[0], c]);
              }
              return s(r, o, 3);
            }
            return e;
          }(d, a);
        }
        return d = function (e) {
          for (var t = !1, n = function (e) {
              return e.charCodeAt(0) >= 56320 && e.charCodeAt(0) <= 57343;
            }, r = 2; r < e.length; r += 1) {
            if (0 === e[r - 2][0] && (o = e[r - 2][1]).charCodeAt(o.length - 1) >= 55296 && o.charCodeAt(o.length - 1) <= 56319 && -1 === e[r - 1][0] && n(e[r - 1][1]) && 1 === e[r][0] && n(e[r][1])) {
              t = !0;
              e[r - 1][1] = e[r - 2][1].slice(-1) + e[r - 1][1];
              e[r][1] = e[r - 2][1].slice(-1) + e[r][1];
              e[r - 2][1] = e[r - 2][1].slice(0, -1);
            }
          }
          var o;
          if (!t) {
            return e;
          }
          var i = [];
          for (r = 0; r < e.length; r += 1) {
            if (e[r][1].length > 0) {
              i.push(e[r]);
            }
          }
          return i;
        }(d);
      }
      function r(e, t, r, o) {
        var i = e.substring(0, r);
        var a = t.substring(0, o);
        var s = e.substring(r);
        var c = t.substring(o);
        var l = n(i, a);
        var u = n(s, c);
        return l.concat(u);
      }
      function o(e, t) {
        if (!e || !t || e.charAt(0) != t.charAt(0)) {
          return 0;
        }
        for (var n = 0, r = Math.min(e.length, t.length), o = r, i = 0; n < o;) {
          if (e.substring(i, o) == t.substring(i, o)) {
            i = n = o;
          } else {
            r = o;
          }
          o = Math.floor((r - n) / 2 + n);
        }
        return o;
      }
      function i(e, t) {
        if (!e || !t || e.charAt(e.length - 1) != t.charAt(t.length - 1)) {
          return 0;
        }
        for (var n = 0, r = Math.min(e.length, t.length), o = r, i = 0; n < o;) {
          if (e.substring(e.length - o, e.length - i) == t.substring(t.length - o, t.length - i)) {
            i = n = o;
          } else {
            r = o;
          }
          o = Math.floor((r - n) / 2 + n);
        }
        return o;
      }
      var a = n;
      function s(e, t, n) {
        for (var r = t + n - 1; r >= 0 && r >= t - 1; r--) {
          if (r + 1 < e.length) {
            var o = e[r];
            var i = e[r + 1];
            if (o[0] === i[1]) {
              e.splice(r, 2, [o[0], o[1] + i[1]]);
            }
          }
        }
        return e;
      }
      a.INSERT = 1;
      a.DELETE = -1;
      a.EQUAL = 0;
      e.exports = a;
    }, function (e, t) {
      function n(e) {
        var t = [];
        for (var n in e) t.push(n);
        return t;
      }
      (e.exports = "function" === typeof Object.keys ? Object.keys : n).shim = n;
    }, function (e, t) {
      var n = "[object Arguments]" == function () {
        return Object.prototype.toString.call(arguments);
      }();
      function r(e) {
        return "[object Arguments]" == Object.prototype.toString.call(e);
      }
      function o(e) {
        return e && "object" == typeof e && "number" == typeof e.length && Object.prototype.hasOwnProperty.call(e, "callee") && !Object.prototype.propertyIsEnumerable.call(e, "callee") || !1;
      }
      (t = e.exports = n ? r : o).supported = r;
      t.unsupported = o;
    }, function (e, t) {
      "use strict";

      var n = Object.prototype.hasOwnProperty;
      var r = "~";
      function o() {}
      function i(e, t, n) {
        this.fn = e;
        this.context = t;
        this.once = n || !1;
      }
      function a() {
        this._events = new o();
        this._eventsCount = 0;
      }
      if (Object.create) {
        o.prototype = Object.create(null);
        if (!new o().__proto__) {
          r = !1;
        }
      }
      a.prototype.eventNames = function () {
        var e;
        var t;
        var o = [];
        if (0 === this._eventsCount) {
          return o;
        }
        for (t in e = this._events) if (n.call(e, t)) {
          o.push(r ? t.slice(1) : t);
        }
        return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(e)) : o;
      };
      a.prototype.listeners = function (e, t) {
        var n = r ? r + e : e;
        var o = this._events[n];
        if (t) {
          return !!o;
        }
        if (!o) {
          return [];
        }
        if (o.fn) {
          return [o.fn];
        }
        for (var i = 0, a = o.length, s = new Array(a); i < a; i++) {
          s[i] = o[i].fn;
        }
        return s;
      };
      a.prototype.emit = function (e, t, n, o, i, a) {
        var s = r ? r + e : e;
        if (!this._events[s]) {
          return !1;
        }
        var c;
        var l;
        var u = this._events[s];
        var d = arguments.length;
        if (u.fn) {
          switch (u.once && this.removeListener(e, u.fn, void 0, !0), d) {
            case 1:
              u.fn.call(u.context);
              return !0;
            case 2:
              u.fn.call(u.context, t);
              return !0;
            case 3:
              u.fn.call(u.context, t, n);
              return !0;
            case 4:
              u.fn.call(u.context, t, n, o);
              return !0;
            case 5:
              u.fn.call(u.context, t, n, o, i);
              return !0;
            case 6:
              u.fn.call(u.context, t, n, o, i, a);
              return !0;
          }
          for (l = 1, c = new Array(d - 1); l < d; l++) {
            c[l - 1] = arguments[l];
          }
          u.fn.apply(u.context, c);
        } else {
          var p;
          var f = u.length;
          for (l = 0; l < f; l++) {
            switch (u[l].once && this.removeListener(e, u[l].fn, void 0, !0), d) {
              case 1:
                u[l].fn.call(u[l].context);
                break;
              case 2:
                u[l].fn.call(u[l].context, t);
                break;
              case 3:
                u[l].fn.call(u[l].context, t, n);
                break;
              case 4:
                u[l].fn.call(u[l].context, t, n, o);
                break;
              default:
                if (!c) {
                  for (p = 1, c = new Array(d - 1); p < d; p++) {
                    c[p - 1] = arguments[p];
                  }
                }
                u[l].fn.apply(u[l].context, c);
            }
          }
        }
        return !0;
      };
      a.prototype.on = function (e, t, n) {
        var o = new i(t, n || this);
        var a = r ? r + e : e;
        if (this._events[a]) {
          if (this._events[a].fn) {
            this._events[a] = [this._events[a], o];
          } else {
            this._events[a].push(o);
          }
        } else {
          this._events[a] = o;
          this._eventsCount++;
        }
        return this;
      };
      a.prototype.once = function (e, t, n) {
        var o = new i(t, n || this, !0);
        var a = r ? r + e : e;
        if (this._events[a]) {
          if (this._events[a].fn) {
            this._events[a] = [this._events[a], o];
          } else {
            this._events[a].push(o);
          }
        } else {
          this._events[a] = o;
          this._eventsCount++;
        }
        return this;
      };
      a.prototype.removeListener = function (e, t, n, i) {
        var a = r ? r + e : e;
        if (!this._events[a]) {
          return this;
        }
        if (!t) {
          if (0 === --this._eventsCount) {
            this._events = new o();
          } else {
            delete this._events[a];
          }
          return this;
        }
        var s = this._events[a];
        if (s.fn) {
          if (!(s.fn !== t || i && !s.once || n && s.context !== n)) {
            if (0 === --this._eventsCount) {
              this._events = new o();
            } else {
              delete this._events[a];
            }
          }
        } else {
          for (var c = 0, l = [], u = s.length; c < u; c++) {
            if (s[c].fn !== t || i && !s[c].once || n && s[c].context !== n) {
              l.push(s[c]);
            }
          }
          if (l.length) {
            this._events[a] = 1 === l.length ? l[0] : l;
          } else {
            if (0 === --this._eventsCount) {
              this._events = new o();
            } else {
              delete this._events[a];
            }
          }
        }
        return this;
      };
      a.prototype.removeAllListeners = function (e) {
        var t;
        if (e) {
          t = r ? r + e : e;
          if (this._events[t]) {
            if (0 === --this._eventsCount) {
              this._events = new o();
            } else {
              delete this._events[t];
            }
          }
        } else {
          this._events = new o();
          this._eventsCount = 0;
        }
        return this;
      };
      a.prototype.off = a.prototype.removeListener;
      a.prototype.addListener = a.prototype.on;
      a.prototype.setMaxListeners = function () {
        return this;
      };
      a.prefixed = r;
      a.EventEmitter = a;
      if ("undefined" !== typeof e) {
        e.exports = a;
      }
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.matchText = t.matchSpacing = t.matchNewline = t.matchBlot = t.matchAttributor = t.default = void 0;
      var r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      };
      var o = function (e, t) {
        if (Array.isArray(e)) {
          return e;
        }
        if (Symbol.iterator in Object(e)) {
          return function (e, t) {
            var n = [];
            var r = !0;
            var o = !1;
            var i = void 0;
            try {
              for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) {
                ;
              }
            } catch (c) {
              o = !0;
              i = c;
            } finally {
              try {
                if (!r && s.return) {
                  s.return();
                }
              } finally {
                if (o) {
                  throw i;
                }
              }
            }
            return n;
          }(e, t);
        }
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
      var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var a = b(n(3));
      var s = b(n(2));
      var c = b(n(0));
      var l = b(n(5));
      var u = b(n(10));
      var d = b(n(9));
      var p = n(36);
      var f = n(37);
      var h = b(n(13));
      var m = n(26);
      var g = n(38);
      var _ = n(39);
      var v = n(40);
      function b(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      function y(e, t, n) {
        if (t in e) {
          Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          });
        } else {
          e[t] = n;
        }
        return e;
      }
      var E = (0, u.default)("quill:clipboard");
      var O = "__ql-matcher";
      var w = [[Node.TEXT_NODE, L], [Node.TEXT_NODE, D], ["br", function (e, t) {
        if (!j(t, "\n")) {
          t.insert("\n");
        }
        return t;
      }], [Node.ELEMENT_NODE, D], [Node.ELEMENT_NODE, x], [Node.ELEMENT_NODE, M], [Node.ELEMENT_NODE, k], [Node.ELEMENT_NODE, function (e, t) {
        var n = {};
        var r = e.style || {};
        if (r.fontStyle && "italic" === A(e).fontStyle) {
          n.italic = !0;
        }
        if (r.fontWeight && (A(e).fontWeight.startsWith("bold") || parseInt(A(e).fontWeight) >= 700)) {
          n.bold = !0;
        }
        if (Object.keys(n).length > 0) {
          t = I(t, n);
        }
        if (parseFloat(r.textIndent || 0) > 0) {
          t = new s.default().insert("\t").concat(t);
        }
        return t;
      }], ["li", function (e, t) {
        var n = c.default.query(e);
        if (null == n || "list-item" !== n.blotName || !j(t, "\n")) {
          return t;
        }
        for (var r = -1, o = e.parentNode; !o.classList.contains("ql-clipboard");) {
          if ("list" === (c.default.query(o) || {}).blotName) {
            r += 1;
          }
          o = o.parentNode;
        }
        return r <= 0 ? t : t.compose(new s.default().retain(t.length() - 1).retain(1, {
          indent: r
        }));
      }], ["b", R.bind(R, "bold")], ["i", R.bind(R, "italic")], ["style", function () {
        return new s.default();
      }]];
      var C = [p.AlignAttribute, g.DirectionAttribute].reduce(function (e, t) {
        e[t.keyName] = t;
        return e;
      }, {});
      var T = [p.AlignStyle, f.BackgroundStyle, m.ColorStyle, g.DirectionStyle, _.FontStyle, v.SizeStyle].reduce(function (e, t) {
        e[t.keyName] = t;
        return e;
      }, {});
      var S = function (e) {
        function t(e, n) {
          !function (e, t) {
            if (!(e instanceof t)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }(this, t);
          var r = function (e, t) {
            if (!e) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
          r.quill.root.addEventListener("paste", r.onPaste.bind(r));
          r.container = r.quill.addContainer("ql-clipboard");
          r.container.setAttribute("contenteditable", !0);
          r.container.setAttribute("tabindex", -1);
          r.matchers = [];
          w.concat(r.options.matchers).forEach(function (e) {
            var t = o(e, 2);
            var i = t[0];
            var a = t[1];
            if (n.matchVisual || a !== M) {
              r.addMatcher(i, a);
            }
          });
          return r;
        }
        (function (e, t) {
          if ("function" !== typeof t && null !== t) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(t, e);
        i(t, [{
          key: "addMatcher",
          value: function (e, t) {
            this.matchers.push([e, t]);
          }
        }, {
          key: "convert",
          value: function (e) {
            if ("string" === typeof e) {
              this.container.innerHTML = e.replace(/\>\r?\n +\</g, "><");
              return this.convert();
            }
            var t = this.quill.getFormat(this.quill.selection.savedRange.index);
            if (t[h.default.blotName]) {
              var n = this.container.innerText;
              this.container.innerHTML = "";
              return new s.default().insert(n, y({}, h.default.blotName, t[h.default.blotName]));
            }
            var r = this.prepareMatching();
            var i = o(r, 2);
            var a = i[0];
            var c = i[1];
            var l = function e(t, n, r) {
              return t.nodeType === t.TEXT_NODE ? r.reduce(function (e, n) {
                return n(t, e);
              }, new s.default()) : t.nodeType === t.ELEMENT_NODE ? [].reduce.call(t.childNodes || [], function (o, i) {
                var a = e(i, n, r);
                if (i.nodeType === t.ELEMENT_NODE) {
                  a = n.reduce(function (e, t) {
                    return t(i, e);
                  }, a);
                  a = (i[O] || []).reduce(function (e, t) {
                    return t(i, e);
                  }, a);
                }
                return o.concat(a);
              }, new s.default()) : new s.default();
            }(this.container, a, c);
            if (j(l, "\n") && null == l.ops[l.ops.length - 1].attributes) {
              l = l.compose(new s.default().retain(l.length() - 1).delete(1));
            }
            E.log("convert", this.container.innerHTML, l);
            this.container.innerHTML = "";
            return l;
          }
        }, {
          key: "dangerouslyPasteHTML",
          value: function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.default.sources.API;
            if ("string" === typeof e) {
              this.quill.setContents(this.convert(e), t);
              this.quill.setSelection(0, l.default.sources.SILENT);
            } else {
              var r = this.convert(t);
              this.quill.updateContents(new s.default().retain(e).concat(r), n);
              this.quill.setSelection(e + r.length(), l.default.sources.SILENT);
            }
          }
        }, {
          key: "onPaste",
          value: function (e) {
            var t = this;
            if (!e.defaultPrevented && this.quill.isEnabled()) {
              var n = this.quill.getSelection();
              var r = new s.default().retain(n.index);
              var o = this.quill.scrollingContainer.scrollTop;
              this.container.focus();
              this.quill.selection.update(l.default.sources.SILENT);
              setTimeout(function () {
                r = r.concat(t.convert()).delete(n.length);
                t.quill.updateContents(r, l.default.sources.USER);
                t.quill.setSelection(r.length() - n.length, l.default.sources.SILENT);
                t.quill.scrollingContainer.scrollTop = o;
                t.quill.focus();
              }, 1);
            }
          }
        }, {
          key: "prepareMatching",
          value: function () {
            var e = this;
            var t = [];
            var n = [];
            this.matchers.forEach(function (r) {
              var i = o(r, 2);
              var a = i[0];
              var s = i[1];
              switch (a) {
                case Node.TEXT_NODE:
                  n.push(s);
                  break;
                case Node.ELEMENT_NODE:
                  t.push(s);
                  break;
                default:
                  [].forEach.call(e.container.querySelectorAll(a), function (e) {
                    e[O] = e[O] || [];
                    e[O].push(s);
                  });
              }
            });
            return [t, n];
          }
        }]);
        return t;
      }(d.default);
      function I(e, t, n) {
        return "object" === ("undefined" === typeof t ? "undefined" : r(t)) ? Object.keys(t).reduce(function (e, n) {
          return I(e, n, t[n]);
        }, e) : e.reduce(function (e, r) {
          return r.attributes && r.attributes[t] ? e.push(r) : e.insert(r.insert, (0, a.default)({}, y({}, t, n), r.attributes));
        }, new s.default());
      }
      function A(e) {
        return e.nodeType !== Node.ELEMENT_NODE ? {} : e["__ql-computed-style"] || (e["__ql-computed-style"] = window.getComputedStyle(e));
      }
      function j(e, t) {
        for (var n = "", r = e.ops.length - 1; r >= 0 && n.length < t.length; --r) {
          var o = e.ops[r];
          if ("string" !== typeof o.insert) {
            break;
          }
          n = o.insert + n;
        }
        return n.slice(-1 * t.length) === t;
      }
      function N(e) {
        if (0 === e.childNodes.length) {
          return !1;
        }
        var t = A(e);
        return ["block", "list-item"].indexOf(t.display) > -1;
      }
      function R(e, t, n) {
        return I(n, e, !0);
      }
      function k(e, t) {
        var n = c.default.Attributor.Attribute.keys(e);
        var r = c.default.Attributor.Class.keys(e);
        var o = c.default.Attributor.Style.keys(e);
        var i = {};
        n.concat(r).concat(o).forEach(function (t) {
          var n = c.default.query(t, c.default.Scope.ATTRIBUTE);
          if (!(null != n && (i[n.attrName] = n.value(e), i[n.attrName]))) {
            if (!(null == (n = C[t]) || n.attrName !== t && n.keyName !== t)) {
              i[n.attrName] = n.value(e) || void 0;
            }
            if (!(null == (n = T[t]) || n.attrName !== t && n.keyName !== t)) {
              n = T[t];
              i[n.attrName] = n.value(e) || void 0;
            }
          }
        });
        if (Object.keys(i).length > 0) {
          t = I(t, i);
        }
        return t;
      }
      function x(e, t) {
        var n = c.default.query(e);
        if (null == n) {
          return t;
        }
        if (n.prototype instanceof c.default.Embed) {
          var r = {};
          var o = n.value(e);
          if (null != o) {
            r[n.blotName] = o;
            t = new s.default().insert(r, n.formats(e));
          }
        } else if ("function" === typeof n.formats) {
          t = I(t, n.blotName, n.formats(e));
        }
        return t;
      }
      function D(e, t) {
        if (!j(t, "\n")) {
          if (N(e) || t.length() > 0 && e.nextSibling && N(e.nextSibling)) {
            t.insert("\n");
          }
        }
        return t;
      }
      function M(e, t) {
        if (N(e) && null != e.nextElementSibling && !j(t, "\n\n")) {
          var n = e.offsetHeight + parseFloat(A(e).marginTop) + parseFloat(A(e).marginBottom);
          if (e.nextElementSibling.offsetTop > e.offsetTop + 1.5 * n) {
            t.insert("\n");
          }
        }
        return t;
      }
      function L(e, t) {
        var n = e.data;
        if ("O:P" === e.parentNode.tagName) {
          return t.insert(n.trim());
        }
        if (0 === n.trim().length && e.parentNode.classList.contains("ql-clipboard")) {
          return t;
        }
        if (!A(e.parentNode).whiteSpace.startsWith("pre")) {
          var r = function (e, t) {
            return (t = t.replace(/[^\u00a0]/g, "")).length < 1 && e ? " " : t;
          };
          n = (n = n.replace(/\r\n/g, " ").replace(/\n/g, " ")).replace(/\s\s+/g, r.bind(r, !0));
          if (null == e.previousSibling && N(e.parentNode) || null != e.previousSibling && N(e.previousSibling)) {
            n = n.replace(/^\s+/, r.bind(r, !1));
          }
          if (null == e.nextSibling && N(e.parentNode) || null != e.nextSibling && N(e.nextSibling)) {
            n = n.replace(/\s+$/, r.bind(r, !1));
          }
        }
        return t.insert(n);
      }
      S.DEFAULTS = {
        matchers: [],
        matchVisual: !0
      };
      t.default = S;
      t.matchAttributor = k;
      t.matchBlot = x;
      t.matchNewline = D;
      t.matchSpacing = M;
      t.matchText = L;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r;
      var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var i = function e(t, n, r) {
        if (null === t) {
          t = Function.prototype;
        }
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ("value" in o) {
          return o.value;
        }
        var a = o.get;
        return void 0 !== a ? a.call(r) : void 0;
      };
      var a = n(6);
      function s(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function c(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
      }
      var l = function (e) {
        function t() {
          s(this, t);
          return c(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        (function (e, t) {
          if ("function" !== typeof t && null !== t) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(t, e);
        o(t, [{
          key: "optimize",
          value: function (e) {
            i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "optimize", this).call(this, e);
            if (this.domNode.tagName !== this.statics.tagName[0]) {
              this.replaceWith(this.statics.blotName);
            }
          }
        }], [{
          key: "create",
          value: function () {
            return i(t.__proto__ || Object.getPrototypeOf(t), "create", this).call(this);
          }
        }, {
          key: "formats",
          value: function () {
            return !0;
          }
        }]);
        return t;
      }(((r = a) && r.__esModule ? r : {
        default: r
      }).default);
      l.blotName = "bold";
      l.tagName = ["STRONG", "B"];
      t.default = l;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.addControls = t.default = void 0;
      var r = function (e, t) {
        if (Array.isArray(e)) {
          return e;
        }
        if (Symbol.iterator in Object(e)) {
          return function (e, t) {
            var n = [];
            var r = !0;
            var o = !1;
            var i = void 0;
            try {
              for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) {
                ;
              }
            } catch (c) {
              o = !0;
              i = c;
            } finally {
              try {
                if (!r && s.return) {
                  s.return();
                }
              } finally {
                if (o) {
                  throw i;
                }
              }
            }
            return n;
          }(e, t);
        }
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
      var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var i = u(n(2));
      var a = u(n(0));
      var s = u(n(5));
      var c = u(n(10));
      var l = u(n(9));
      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      function d(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
      }
      var p = (0, c.default)("quill:toolbar");
      var f = function (e) {
        function t(e, n) {
          !function (e, t) {
            if (!(e instanceof t)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }(this, t);
          var o;
          var i = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
          if (Array.isArray(i.options.container)) {
            var a = document.createElement("div");
            m(a, i.options.container);
            e.container.parentNode.insertBefore(a, e.container);
            i.container = a;
          } else if ("string" === typeof i.options.container) {
            i.container = document.querySelector(i.options.container);
          } else {
            i.container = i.options.container;
          }
          return i.container instanceof HTMLElement ? (i.container.classList.add("ql-toolbar"), i.controls = [], i.handlers = {}, Object.keys(i.options.handlers).forEach(function (e) {
            i.addHandler(e, i.options.handlers[e]);
          }), [].forEach.call(i.container.querySelectorAll("button, select"), function (e) {
            i.attach(e);
          }), i.quill.on(s.default.events.EDITOR_CHANGE, function (e, t) {
            if (e === s.default.events.SELECTION_CHANGE) {
              i.update(t);
            }
          }), i.quill.on(s.default.events.SCROLL_OPTIMIZE, function () {
            var e = i.quill.selection.getRange();
            var t = r(e, 1)[0];
            i.update(t);
          }), i) : (o = p.error("Container required for toolbar", i.options), d(i, o));
        }
        (function (e, t) {
          if ("function" !== typeof t && null !== t) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(t, e);
        o(t, [{
          key: "addHandler",
          value: function (e, t) {
            this.handlers[e] = t;
          }
        }, {
          key: "attach",
          value: function (e) {
            var t = this;
            var n = [].find.call(e.classList, function (e) {
              return 0 === e.indexOf("ql-");
            });
            if (n) {
              n = n.slice("ql-".length);
              if ("BUTTON" === e.tagName) {
                e.setAttribute("type", "button");
              }
              if (null == this.handlers[n]) {
                if (null != this.quill.scroll.whitelist && null == this.quill.scroll.whitelist[n]) {
                  return void p.warn("ignoring attaching to disabled format", n, e);
                }
                if (null == a.default.query(n)) {
                  return void p.warn("ignoring attaching to nonexistent format", n, e);
                }
              }
              var o = "SELECT" === e.tagName ? "change" : "click";
              e.addEventListener(o, function (o) {
                var c = void 0;
                if ("SELECT" === e.tagName) {
                  if (e.selectedIndex < 0) {
                    return;
                  }
                  var l = e.options[e.selectedIndex];
                  c = !l.hasAttribute("selected") && (l.value || !1);
                } else {
                  c = !e.classList.contains("ql-active") && (e.value || !e.hasAttribute("value"));
                  o.preventDefault();
                }
                t.quill.focus();
                var u = t.quill.selection.getRange();
                var d = r(u, 1)[0];
                if (null != t.handlers[n]) {
                  t.handlers[n].call(t, c);
                } else if (a.default.query(n).prototype instanceof a.default.Embed) {
                  if (!(c = prompt("Enter " + n))) {
                    return;
                  }
                  t.quill.updateContents(new i.default().retain(d.index).delete(d.length).insert(function (e, t, n) {
                    if (t in e) {
                      Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                      });
                    } else {
                      e[t] = n;
                    }
                    return e;
                  }({}, n, c)), s.default.sources.USER);
                } else {
                  t.quill.format(n, c, s.default.sources.USER);
                }
                t.update(d);
              });
              this.controls.push([n, e]);
            }
          }
        }, {
          key: "update",
          value: function (e) {
            var t = null == e ? {} : this.quill.getFormat(e);
            this.controls.forEach(function (n) {
              var o = r(n, 2);
              var i = o[0];
              var a = o[1];
              if ("SELECT" === a.tagName) {
                var s = void 0;
                if (null == e) {
                  s = null;
                } else if (null == t[i]) {
                  s = a.querySelector("option[selected]");
                } else if (!Array.isArray(t[i])) {
                  var c = t[i];
                  if ("string" === typeof c) {
                    c = c.replace(/\"/g, "\\\"");
                  }
                  s = a.querySelector("option[value=\"" + c + "\"]");
                }
                if (null == s) {
                  a.value = "";
                  a.selectedIndex = -1;
                } else {
                  s.selected = !0;
                }
              } else if (null == e) {
                a.classList.remove("ql-active");
              } else if (a.hasAttribute("value")) {
                var l = t[i] === a.getAttribute("value") || null != t[i] && t[i].toString() === a.getAttribute("value") || null == t[i] && !a.getAttribute("value");
                a.classList.toggle("ql-active", l);
              } else {
                a.classList.toggle("ql-active", null != t[i]);
              }
            });
          }
        }]);
        return t;
      }(l.default);
      function h(e, t, n) {
        var r = document.createElement("button");
        r.setAttribute("type", "button");
        r.classList.add("ql-" + t);
        if (null != n) {
          r.value = n;
        }
        e.appendChild(r);
      }
      function m(e, t) {
        if (!Array.isArray(t[0])) {
          t = [t];
        }
        t.forEach(function (t) {
          var n = document.createElement("span");
          n.classList.add("ql-formats");
          t.forEach(function (e) {
            if ("string" === typeof e) {
              h(n, e);
            } else {
              var t = Object.keys(e)[0];
              var r = e[t];
              if (Array.isArray(r)) {
                (function (e, t, n) {
                  var r = document.createElement("select");
                  r.classList.add("ql-" + t);
                  n.forEach(function (e) {
                    var t = document.createElement("option");
                    if (!1 !== e) {
                      t.setAttribute("value", e);
                    } else {
                      t.setAttribute("selected", "selected");
                    }
                    r.appendChild(t);
                  });
                  e.appendChild(r);
                })(n, t, r);
              } else {
                h(n, t, r);
              }
            }
          });
          e.appendChild(n);
        });
      }
      f.DEFAULTS = {};
      f.DEFAULTS = {
        container: null,
        handlers: {
          clean: function () {
            var e = this;
            var t = this.quill.getSelection();
            if (null != t) {
              if (0 == t.length) {
                var n = this.quill.getFormat();
                Object.keys(n).forEach(function (t) {
                  if (null != a.default.query(t, a.default.Scope.INLINE)) {
                    e.quill.format(t, !1);
                  }
                });
              } else {
                this.quill.removeFormat(t, s.default.sources.USER);
              }
            }
          },
          direction: function (e) {
            var t = this.quill.getFormat().align;
            if ("rtl" === e && null == t) {
              this.quill.format("align", "right", s.default.sources.USER);
            } else {
              if (!(e || "right" !== t)) {
                this.quill.format("align", !1, s.default.sources.USER);
              }
            }
            this.quill.format("direction", e, s.default.sources.USER);
          },
          indent: function (e) {
            var t = this.quill.getSelection();
            var n = this.quill.getFormat(t);
            var r = parseInt(n.indent || 0);
            if ("+1" === e || "-1" === e) {
              var o = "+1" === e ? 1 : -1;
              if ("rtl" === n.direction) {
                o *= -1;
              }
              this.quill.format("indent", r + o, s.default.sources.USER);
            }
          },
          link: function (e) {
            if (!0 === e) {
              e = prompt("Enter link URL:");
            }
            this.quill.format("link", e, s.default.sources.USER);
          },
          list: function (e) {
            var t = this.quill.getSelection();
            var n = this.quill.getFormat(t);
            if ("check" === e) {
              if ("checked" === n.list || "unchecked" === n.list) {
                this.quill.format("list", !1, s.default.sources.USER);
              } else {
                this.quill.format("list", "unchecked", s.default.sources.USER);
              }
            } else {
              this.quill.format("list", e, s.default.sources.USER);
            }
          }
        }
      };
      t.default = f;
      t.addControls = m;
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <polyline class=\"ql-even ql-stroke\" points=\"5 7 3 9 5 11\"></polyline> <polyline class=\"ql-even ql-stroke\" points=\"13 7 15 9 13 11\"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>";
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r;
      var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var i = function e(t, n, r) {
        if (null === t) {
          t = Function.prototype;
        }
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ("value" in o) {
          return o.value;
        }
        var a = o.get;
        return void 0 !== a ? a.call(r) : void 0;
      };
      var a = n(28);
      var s = function (e) {
        function t(e, n) {
          !function (e, t) {
            if (!(e instanceof t)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }(this, t);
          var r = function (e, t) {
            if (!e) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          r.label.innerHTML = n;
          r.container.classList.add("ql-color-picker");
          [].slice.call(r.container.querySelectorAll(".ql-picker-item"), 0, 7).forEach(function (e) {
            e.classList.add("ql-primary");
          });
          return r;
        }
        (function (e, t) {
          if ("function" !== typeof t && null !== t) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(t, e);
        o(t, [{
          key: "buildItem",
          value: function (e) {
            var n = i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "buildItem", this).call(this, e);
            n.style.backgroundColor = e.getAttribute("value") || "";
            return n;
          }
        }, {
          key: "selectItem",
          value: function (e, n) {
            i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "selectItem", this).call(this, e, n);
            var r = this.label.querySelector(".ql-color-label");
            var o = e && e.getAttribute("data-value") || "";
            if (r) {
              if ("line" === r.tagName) {
                r.style.stroke = o;
              } else {
                r.style.fill = o;
              }
            }
          }
        }]);
        return t;
      }(((r = a) && r.__esModule ? r : {
        default: r
      }).default);
      t.default = s;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r;
      var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var i = n(28);
      var a = function (e) {
        function t(e, n) {
          !function (e, t) {
            if (!(e instanceof t)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }(this, t);
          var r = function (e, t) {
            if (!e) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          r.container.classList.add("ql-icon-picker");
          [].forEach.call(r.container.querySelectorAll(".ql-picker-item"), function (e) {
            e.innerHTML = n[e.getAttribute("data-value") || ""];
          });
          r.defaultItem = r.container.querySelector(".ql-selected");
          r.selectItem(r.defaultItem);
          return r;
        }
        (function (e, t) {
          if ("function" !== typeof t && null !== t) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(t, e);
        o(t, [{
          key: "selectItem",
          value: function (e, n) {
            (function e(t, n, r) {
              if (null === t) {
                t = Function.prototype;
              }
              var o = Object.getOwnPropertyDescriptor(t, n);
              if (void 0 === o) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, r);
              }
              if ("value" in o) {
                return o.value;
              }
              var a = o.get;
              return void 0 !== a ? a.call(r) : void 0;
            })(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "selectItem", this).call(this, e, n);
            e = e || this.defaultItem;
            this.label.innerHTML = e.innerHTML;
          }
        }]);
        return t;
      }(((r = i) && r.__esModule ? r : {
        default: r
      }).default);
      t.default = a;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var o = function () {
        function e(t, n) {
          var r = this;
          !function (e, t) {
            if (!(e instanceof t)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }(this, e);
          this.quill = t;
          this.boundsContainer = n || document.body;
          this.root = t.addContainer("ql-tooltip");
          this.root.innerHTML = this.constructor.TEMPLATE;
          if (this.quill.root === this.quill.scrollingContainer) {
            this.quill.root.addEventListener("scroll", function () {
              r.root.style.marginTop = -1 * r.quill.root.scrollTop + "px";
            });
          }
          this.hide();
        }
        r(e, [{
          key: "hide",
          value: function () {
            this.root.classList.add("ql-hidden");
          }
        }, {
          key: "position",
          value: function (e) {
            var t = e.left + e.width / 2 - this.root.offsetWidth / 2;
            var n = e.bottom + this.quill.root.scrollTop;
            this.root.style.left = t + "px";
            this.root.style.top = n + "px";
            this.root.classList.remove("ql-flip");
            var r = this.boundsContainer.getBoundingClientRect();
            var o = this.root.getBoundingClientRect();
            var i = 0;
            if (o.right > r.right) {
              i = r.right - o.right;
              this.root.style.left = t + i + "px";
            }
            if (o.left < r.left) {
              i = r.left - o.left;
              this.root.style.left = t + i + "px";
            }
            if (o.bottom > r.bottom) {
              var a = o.bottom - o.top;
              var s = e.bottom - e.top + a;
              this.root.style.top = n - s + "px";
              this.root.classList.add("ql-flip");
            }
            return i;
          }
        }, {
          key: "show",
          value: function () {
            this.root.classList.remove("ql-editing");
            this.root.classList.remove("ql-hidden");
          }
        }]);
        return e;
      }();
      t.default = o;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function (e, t) {
        if (Array.isArray(e)) {
          return e;
        }
        if (Symbol.iterator in Object(e)) {
          return function (e, t) {
            var n = [];
            var r = !0;
            var o = !1;
            var i = void 0;
            try {
              for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) {
                ;
              }
            } catch (c) {
              o = !0;
              i = c;
            } finally {
              try {
                if (!r && s.return) {
                  s.return();
                }
              } finally {
                if (o) {
                  throw i;
                }
              }
            }
            return n;
          }(e, t);
        }
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
      var o = function e(t, n, r) {
        if (null === t) {
          t = Function.prototype;
        }
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ("value" in o) {
          return o.value;
        }
        var a = o.get;
        return void 0 !== a ? a.call(r) : void 0;
      };
      var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var a = f(n(3));
      var s = f(n(8));
      var c = n(43);
      var l = f(c);
      var u = f(n(27));
      var d = n(15);
      var p = f(n(41));
      function f(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      function h(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function m(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
      }
      function g(e, t) {
        if ("function" !== typeof t && null !== t) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e, t);
          } else {
            e.__proto__ = t;
          }
        }
      }
      var _ = [[{
        header: ["1", "2", "3", !1]
      }], ["bold", "italic", "underline", "link"], [{
        list: "ordered"
      }, {
        list: "bullet"
      }], ["clean"]];
      var v = function (e) {
        function t(e, n) {
          h(this, t);
          if (null != n.modules.toolbar && null == n.modules.toolbar.container) {
            n.modules.toolbar.container = _;
          }
          var r = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
          r.quill.container.classList.add("ql-snow");
          return r;
        }
        g(t, e);
        i(t, [{
          key: "extendToolbar",
          value: function (e) {
            e.container.classList.add("ql-snow");
            this.buildButtons([].slice.call(e.container.querySelectorAll("button")), p.default);
            this.buildPickers([].slice.call(e.container.querySelectorAll("select")), p.default);
            this.tooltip = new b(this.quill, this.options.bounds);
            if (e.container.querySelector(".ql-link")) {
              this.quill.keyboard.addBinding({
                key: "K",
                shortKey: !0
              }, function (t, n) {
                e.handlers.link.call(e, !n.format.link);
              });
            }
          }
        }]);
        return t;
      }(l.default);
      v.DEFAULTS = (0, a.default)(!0, {}, l.default.DEFAULTS, {
        modules: {
          toolbar: {
            handlers: {
              link: function (e) {
                if (e) {
                  var t = this.quill.getSelection();
                  if (null == t || 0 == t.length) {
                    return;
                  }
                  var n = this.quill.getText(t);
                  if (/^\S+@\S+\.\S+$/.test(n) && 0 !== n.indexOf("mailto:")) {
                    n = "mailto:" + n;
                  }
                  this.quill.theme.tooltip.edit("link", n);
                } else {
                  this.quill.format("link", !1);
                }
              }
            }
          }
        }
      });
      var b = function (e) {
        function t(e, n) {
          h(this, t);
          var r = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
          r.preview = r.root.querySelector("a.ql-preview");
          return r;
        }
        g(t, e);
        i(t, [{
          key: "listen",
          value: function () {
            var e = this;
            o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "listen", this).call(this);
            this.root.querySelector("a.ql-action").addEventListener("click", function (t) {
              if (e.root.classList.contains("ql-editing")) {
                e.save();
              } else {
                e.edit("link", e.preview.textContent);
              }
              t.preventDefault();
            });
            this.root.querySelector("a.ql-remove").addEventListener("click", function (t) {
              if (null != e.linkRange) {
                var n = e.linkRange;
                e.restoreFocus();
                e.quill.formatText(n, "link", !1, s.default.sources.USER);
                delete e.linkRange;
              }
              t.preventDefault();
              e.hide();
            });
            this.quill.on(s.default.events.SELECTION_CHANGE, function (t, n, o) {
              if (null != t) {
                if (0 === t.length && o === s.default.sources.USER) {
                  var i = e.quill.scroll.descendant(u.default, t.index);
                  var a = r(i, 2);
                  var c = a[0];
                  var l = a[1];
                  if (null != c) {
                    e.linkRange = new d.Range(t.index - l, c.length());
                    var p = u.default.formats(c.domNode);
                    e.preview.textContent = p;
                    e.preview.setAttribute("href", p);
                    e.show();
                    return void e.position(e.quill.getBounds(e.linkRange));
                  }
                } else {
                  delete e.linkRange;
                }
                e.hide();
              }
            });
          }
        }, {
          key: "show",
          value: function () {
            o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "show", this).call(this);
            this.root.removeAttribute("data-mode");
          }
        }]);
        return t;
      }(c.BaseTooltip);
      b.TEMPLATE = ["<a class=\"ql-preview\" rel=\"noopener noreferrer\" target=\"_blank\" href=\"about:blank\"></a>", "<input type=\"text\" data-formula=\"e=mc^2\" data-link=\"https://quilljs.com\" data-video=\"Embed URL\">", "<a class=\"ql-action\"></a>", "<a class=\"ql-remove\"></a>"].join("");
      t.default = v;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = M(n(29));
      var o = n(36);
      var i = n(38);
      var a = n(64);
      var s = M(n(65));
      var c = M(n(66));
      var l = n(67);
      var u = M(l);
      var d = n(37);
      var p = n(26);
      var f = n(39);
      var h = n(40);
      var m = M(n(56));
      var g = M(n(68));
      var _ = M(n(27));
      var v = M(n(69));
      var b = M(n(70));
      var y = M(n(71));
      var E = M(n(72));
      var O = M(n(73));
      var w = n(13);
      var C = M(w);
      var T = M(n(74));
      var S = M(n(75));
      var I = M(n(57));
      var A = M(n(41));
      var j = M(n(28));
      var N = M(n(59));
      var R = M(n(60));
      var k = M(n(61));
      var x = M(n(108));
      var D = M(n(62));
      function M(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      r.default.register({
        "attributors/attribute/direction": i.DirectionAttribute,
        "attributors/class/align": o.AlignClass,
        "attributors/class/background": d.BackgroundClass,
        "attributors/class/color": p.ColorClass,
        "attributors/class/direction": i.DirectionClass,
        "attributors/class/font": f.FontClass,
        "attributors/class/size": h.SizeClass,
        "attributors/style/align": o.AlignStyle,
        "attributors/style/background": d.BackgroundStyle,
        "attributors/style/color": p.ColorStyle,
        "attributors/style/direction": i.DirectionStyle,
        "attributors/style/font": f.FontStyle,
        "attributors/style/size": h.SizeStyle
      }, !0);
      r.default.register({
        "formats/align": o.AlignClass,
        "formats/direction": i.DirectionClass,
        "formats/indent": a.IndentClass,
        "formats/background": d.BackgroundStyle,
        "formats/color": p.ColorStyle,
        "formats/font": f.FontClass,
        "formats/size": h.SizeClass,
        "formats/blockquote": s.default,
        "formats/code-block": C.default,
        "formats/header": c.default,
        "formats/list": u.default,
        "formats/bold": m.default,
        "formats/code": w.Code,
        "formats/italic": g.default,
        "formats/link": _.default,
        "formats/script": v.default,
        "formats/strike": b.default,
        "formats/underline": y.default,
        "formats/image": E.default,
        "formats/video": O.default,
        "formats/list/item": l.ListItem,
        "modules/formula": T.default,
        "modules/syntax": S.default,
        "modules/toolbar": I.default,
        "themes/bubble": x.default,
        "themes/snow": D.default,
        "ui/icons": A.default,
        "ui/picker": j.default,
        "ui/icon-picker": R.default,
        "ui/color-picker": N.default,
        "ui/tooltip": k.default
      }, !0);
      t.default = r.default;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.IndentClass = void 0;
      var r;
      var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var i = function e(t, n, r) {
        if (null === t) {
          t = Function.prototype;
        }
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ("value" in o) {
          return o.value;
        }
        var a = o.get;
        return void 0 !== a ? a.call(r) : void 0;
      };
      var a = n(0);
      var s = (r = a) && r.__esModule ? r : {
        default: r
      };
      function c(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function l(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
      }
      var u = new (function (e) {
        function t() {
          c(this, t);
          return l(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        (function (e, t) {
          if ("function" !== typeof t && null !== t) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(t, e);
        o(t, [{
          key: "add",
          value: function (e, n) {
            if ("+1" === n || "-1" === n) {
              var r = this.value(e) || 0;
              n = "+1" === n ? r + 1 : r - 1;
            }
            return 0 === n ? (this.remove(e), !0) : i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "add", this).call(this, e, n);
          }
        }, {
          key: "canAdd",
          value: function (e, n) {
            return i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "canAdd", this).call(this, e, n) || i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "canAdd", this).call(this, e, parseInt(n));
          }
        }, {
          key: "value",
          value: function (e) {
            return parseInt(i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "value", this).call(this, e)) || void 0;
          }
        }]);
        return t;
      }(s.default.Attributor.Class))("indent", "ql-indent", {
        scope: s.default.Scope.BLOCK,
        whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
      });
      t.IndentClass = u;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r;
      var o = n(4);
      function i(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
      }
      var s = function (e) {
        function t() {
          i(this, t);
          return a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        (function (e, t) {
          if ("function" !== typeof t && null !== t) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(t, e);
        return t;
      }(((r = o) && r.__esModule ? r : {
        default: r
      }).default);
      s.blotName = "blockquote";
      s.tagName = "blockquote";
      t.default = s;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r;
      var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var i = n(4);
      function a(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function s(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
      }
      var c = function (e) {
        function t() {
          a(this, t);
          return s(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        (function (e, t) {
          if ("function" !== typeof t && null !== t) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(t, e);
        o(t, null, [{
          key: "formats",
          value: function (e) {
            return this.tagName.indexOf(e.tagName) + 1;
          }
        }]);
        return t;
      }(((r = i) && r.__esModule ? r : {
        default: r
      }).default);
      c.blotName = "header";
      c.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"];
      t.default = c;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.default = t.ListItem = void 0;
      var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var o = function e(t, n, r) {
        if (null === t) {
          t = Function.prototype;
        }
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ("value" in o) {
          return o.value;
        }
        var a = o.get;
        return void 0 !== a ? a.call(r) : void 0;
      };
      var i = c(n(0));
      var a = c(n(4));
      var s = c(n(25));
      function c(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      function l(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function u(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
      }
      function d(e, t) {
        if ("function" !== typeof t && null !== t) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e, t);
          } else {
            e.__proto__ = t;
          }
        }
      }
      var p = function (e) {
        function t() {
          l(this, t);
          return u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        d(t, e);
        r(t, [{
          key: "format",
          value: function (e, n) {
            if (e !== f.blotName || n) {
              o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "format", this).call(this, e, n);
            } else {
              this.replaceWith(i.default.create(this.statics.scope));
            }
          }
        }, {
          key: "remove",
          value: function () {
            if (null == this.prev && null == this.next) {
              this.parent.remove();
            } else {
              o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "remove", this).call(this);
            }
          }
        }, {
          key: "replaceWith",
          value: function (e, n) {
            this.parent.isolate(this.offset(this.parent), this.length());
            return e === this.parent.statics.blotName ? (this.parent.replaceWith(e, n), this) : (this.parent.unwrap(), o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "replaceWith", this).call(this, e, n));
          }
        }], [{
          key: "formats",
          value: function (e) {
            return e.tagName === this.tagName ? void 0 : o(t.__proto__ || Object.getPrototypeOf(t), "formats", this).call(this, e);
          }
        }]);
        return t;
      }(a.default);
      p.blotName = "list-item";
      p.tagName = "LI";
      var f = function (e) {
        function t(e) {
          l(this, t);
          var n = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          var r = function (t) {
            if (t.target.parentNode === e) {
              var r = n.statics.formats(e);
              var o = i.default.find(t.target);
              if ("checked" === r) {
                o.format("list", "unchecked");
              } else {
                if ("unchecked" === r) {
                  o.format("list", "checked");
                }
              }
            }
          };
          e.addEventListener("touchstart", r);
          e.addEventListener("mousedown", r);
          return n;
        }
        d(t, e);
        r(t, null, [{
          key: "create",
          value: function (e) {
            var n = "ordered" === e ? "OL" : "UL";
            var r = o(t.__proto__ || Object.getPrototypeOf(t), "create", this).call(this, n);
            if (!("checked" !== e && "unchecked" !== e)) {
              r.setAttribute("data-checked", "checked" === e);
            }
            return r;
          }
        }, {
          key: "formats",
          value: function (e) {
            return "OL" === e.tagName ? "ordered" : "UL" === e.tagName ? e.hasAttribute("data-checked") ? "true" === e.getAttribute("data-checked") ? "checked" : "unchecked" : "bullet" : void 0;
          }
        }]);
        r(t, [{
          key: "format",
          value: function (e, t) {
            if (this.children.length > 0) {
              this.children.tail.format(e, t);
            }
          }
        }, {
          key: "formats",
          value: function () {
            return function (e, t, n) {
              if (t in e) {
                Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                });
              } else {
                e[t] = n;
              }
              return e;
            }({}, this.statics.blotName, this.statics.formats(this.domNode));
          }
        }, {
          key: "insertBefore",
          value: function (e, n) {
            if (e instanceof p) {
              o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "insertBefore", this).call(this, e, n);
            } else {
              var r = null == n ? this.length() : n.offset(this);
              var i = this.split(r);
              i.parent.insertBefore(e, i);
            }
          }
        }, {
          key: "optimize",
          value: function (e) {
            o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "optimize", this).call(this, e);
            var n = this.next;
            if (null != n && n.prev === this && n.statics.blotName === this.statics.blotName && n.domNode.tagName === this.domNode.tagName && n.domNode.getAttribute("data-checked") === this.domNode.getAttribute("data-checked")) {
              n.moveChildren(this);
              n.remove();
            }
          }
        }, {
          key: "replace",
          value: function (e) {
            if (e.statics.blotName !== this.statics.blotName) {
              var n = i.default.create(this.statics.defaultChild);
              e.moveChildren(n);
              this.appendChild(n);
            }
            o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "replace", this).call(this, e);
          }
        }]);
        return t;
      }(s.default);
      f.blotName = "list";
      f.scope = i.default.Scope.BLOCK_BLOT;
      f.tagName = ["OL", "UL"];
      f.defaultChild = "list-item";
      f.allowedChildren = [p];
      t.ListItem = p;
      t.default = f;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r;
      var o = n(56);
      function i(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
      }
      var s = function (e) {
        function t() {
          i(this, t);
          return a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        (function (e, t) {
          if ("function" !== typeof t && null !== t) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(t, e);
        return t;
      }(((r = o) && r.__esModule ? r : {
        default: r
      }).default);
      s.blotName = "italic";
      s.tagName = ["EM", "I"];
      t.default = s;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r;
      var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var i = n(6);
      function a(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function s(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
      }
      var c = function (e) {
        function t() {
          a(this, t);
          return s(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        (function (e, t) {
          if ("function" !== typeof t && null !== t) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(t, e);
        o(t, null, [{
          key: "create",
          value: function (e) {
            return "super" === e ? document.createElement("sup") : "sub" === e ? document.createElement("sub") : function e(t, n, r) {
              if (null === t) {
                t = Function.prototype;
              }
              var o = Object.getOwnPropertyDescriptor(t, n);
              if (void 0 === o) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, r);
              }
              if ("value" in o) {
                return o.value;
              }
              var a = o.get;
              return void 0 !== a ? a.call(r) : void 0;
            }(t.__proto__ || Object.getPrototypeOf(t), "create", this).call(this, e);
          }
        }, {
          key: "formats",
          value: function (e) {
            return "SUB" === e.tagName ? "sub" : "SUP" === e.tagName ? "super" : void 0;
          }
        }]);
        return t;
      }(((r = i) && r.__esModule ? r : {
        default: r
      }).default);
      c.blotName = "script";
      c.tagName = ["SUB", "SUP"];
      t.default = c;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r;
      var o = n(6);
      function i(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
      }
      var s = function (e) {
        function t() {
          i(this, t);
          return a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        (function (e, t) {
          if ("function" !== typeof t && null !== t) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(t, e);
        return t;
      }(((r = o) && r.__esModule ? r : {
        default: r
      }).default);
      s.blotName = "strike";
      s.tagName = "S";
      t.default = s;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r;
      var o = n(6);
      function i(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
      }
      var s = function (e) {
        function t() {
          i(this, t);
          return a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        (function (e, t) {
          if ("function" !== typeof t && null !== t) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(t, e);
        return t;
      }(((r = o) && r.__esModule ? r : {
        default: r
      }).default);
      s.blotName = "underline";
      s.tagName = "U";
      t.default = s;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r;
      var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var i = function e(t, n, r) {
        if (null === t) {
          t = Function.prototype;
        }
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ("value" in o) {
          return o.value;
        }
        var a = o.get;
        return void 0 !== a ? a.call(r) : void 0;
      };
      var a = n(0);
      var s = (r = a) && r.__esModule ? r : {
        default: r
      };
      var c = n(27);
      function l(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function u(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
      }
      var d = ["alt", "height", "width"];
      var p = function (e) {
        function t() {
          l(this, t);
          return u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        (function (e, t) {
          if ("function" !== typeof t && null !== t) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(t, e);
        o(t, [{
          key: "format",
          value: function (e, n) {
            if (d.indexOf(e) > -1) {
              if (n) {
                this.domNode.setAttribute(e, n);
              } else {
                this.domNode.removeAttribute(e);
              }
            } else {
              i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "format", this).call(this, e, n);
            }
          }
        }], [{
          key: "create",
          value: function (e) {
            var n = i(t.__proto__ || Object.getPrototypeOf(t), "create", this).call(this, e);
            if ("string" === typeof e) {
              n.setAttribute("src", this.sanitize(e));
            }
            return n;
          }
        }, {
          key: "formats",
          value: function (e) {
            return d.reduce(function (t, n) {
              if (e.hasAttribute(n)) {
                t[n] = e.getAttribute(n);
              }
              return t;
            }, {});
          }
        }, {
          key: "match",
          value: function (e) {
            return /\.(jpe?g|gif|png)$/.test(e) || /^data:image\/.+;base64/.test(e);
          }
        }, {
          key: "sanitize",
          value: function (e) {
            return (0, c.sanitize)(e, ["http", "https", "data"]) ? e : "//:0";
          }
        }, {
          key: "value",
          value: function (e) {
            return e.getAttribute("src");
          }
        }]);
        return t;
      }(s.default.Embed);
      p.blotName = "image";
      p.tagName = "IMG";
      t.default = p;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r;
      var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var i = function e(t, n, r) {
        if (null === t) {
          t = Function.prototype;
        }
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ("value" in o) {
          return o.value;
        }
        var a = o.get;
        return void 0 !== a ? a.call(r) : void 0;
      };
      var a = n(4);
      var s = n(27);
      var c = (r = s) && r.__esModule ? r : {
        default: r
      };
      function l(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function u(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
      }
      var d = ["height", "width"];
      var p = function (e) {
        function t() {
          l(this, t);
          return u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        (function (e, t) {
          if ("function" !== typeof t && null !== t) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          });
          if (t) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(e, t);
            } else {
              e.__proto__ = t;
            }
          }
        })(t, e);
        o(t, [{
          key: "format",
          value: function (e, n) {
            if (d.indexOf(e) > -1) {
              if (n) {
                this.domNode.setAttribute(e, n);
              } else {
                this.domNode.removeAttribute(e);
              }
            } else {
              i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "format", this).call(this, e, n);
            }
          }
        }], [{
          key: "create",
          value: function (e) {
            var n = i(t.__proto__ || Object.getPrototypeOf(t), "create", this).call(this, e);
            n.setAttribute("frameborder", "0");
            n.setAttribute("allowfullscreen", !0);
            n.setAttribute("src", this.sanitize(e));
            return n;
          }
        }, {
          key: "formats",
          value: function (e) {
            return d.reduce(function (t, n) {
              if (e.hasAttribute(n)) {
                t[n] = e.getAttribute(n);
              }
              return t;
            }, {});
          }
        }, {
          key: "sanitize",
          value: function (e) {
            return c.default.sanitize(e);
          }
        }, {
          key: "value",
          value: function (e) {
            return e.getAttribute("src");
          }
        }]);
        return t;
      }(a.BlockEmbed);
      p.blotName = "video";
      p.className = "ql-video";
      p.tagName = "IFRAME";
      t.default = p;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.default = t.FormulaBlot = void 0;
      var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var o = s(n(35));
      var i = s(n(5));
      var a = s(n(9));
      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      function c(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function l(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
      }
      function u(e, t) {
        if ("function" !== typeof t && null !== t) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e, t);
          } else {
            e.__proto__ = t;
          }
        }
      }
      var d = function (e) {
        function t() {
          c(this, t);
          return l(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        u(t, e);
        r(t, null, [{
          key: "create",
          value: function (e) {
            var n = function e(t, n, r) {
              if (null === t) {
                t = Function.prototype;
              }
              var o = Object.getOwnPropertyDescriptor(t, n);
              if (void 0 === o) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, r);
              }
              if ("value" in o) {
                return o.value;
              }
              var a = o.get;
              return void 0 !== a ? a.call(r) : void 0;
            }(t.__proto__ || Object.getPrototypeOf(t), "create", this).call(this, e);
            if ("string" === typeof e) {
              window.katex.render(e, n, {
                throwOnError: !1,
                errorColor: "#f00"
              });
              n.setAttribute("data-value", e);
            }
            return n;
          }
        }, {
          key: "value",
          value: function (e) {
            return e.getAttribute("data-value");
          }
        }]);
        return t;
      }(o.default);
      d.blotName = "formula";
      d.className = "ql-formula";
      d.tagName = "SPAN";
      var p = function (e) {
        function t() {
          c(this, t);
          var e = l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          if (null == window.katex) {
            throw new Error("Formula module requires KaTeX.");
          }
          return e;
        }
        u(t, e);
        r(t, null, [{
          key: "register",
          value: function () {
            i.default.register(d, !0);
          }
        }]);
        return t;
      }(a.default);
      t.FormulaBlot = d;
      t.default = p;
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.default = t.CodeToken = t.CodeBlock = void 0;
      var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var o = s(n(0));
      var i = s(n(5));
      var a = s(n(9));
      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      function c(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function l(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
      }
      function u(e, t) {
        if ("function" !== typeof t && null !== t) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e, t);
          } else {
            e.__proto__ = t;
          }
        }
      }
      var d = function (e) {
        function t() {
          c(this, t);
          return l(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        u(t, e);
        r(t, [{
          key: "replaceWith",
          value: function (e) {
            this.domNode.textContent = this.domNode.textContent;
            this.attach();
            (function e(t, n, r) {
              if (null === t) {
                t = Function.prototype;
              }
              var o = Object.getOwnPropertyDescriptor(t, n);
              if (void 0 === o) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, r);
              }
              if ("value" in o) {
                return o.value;
              }
              var a = o.get;
              return void 0 !== a ? a.call(r) : void 0;
            })(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "replaceWith", this).call(this, e);
          }
        }, {
          key: "highlight",
          value: function (e) {
            var t = this.domNode.textContent;
            if (this.cachedText !== t) {
              if (t.trim().length > 0 || null == this.cachedText) {
                this.domNode.innerHTML = e(t);
                this.domNode.normalize();
                this.attach();
              }
              this.cachedText = t;
            }
          }
        }]);
        return t;
      }(s(n(13)).default);
      d.className = "ql-syntax";
      var p = new o.default.Attributor.Class("token", "hljs", {
        scope: o.default.Scope.INLINE
      });
      var f = function (e) {
        function t(e, n) {
          c(this, t);
          var r = l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
          if ("function" !== typeof r.options.highlight) {
            throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
          }
          var o = null;
          r.quill.on(i.default.events.SCROLL_OPTIMIZE, function () {
            clearTimeout(o);
            o = setTimeout(function () {
              r.highlight();
              o = null;
            }, r.options.interval);
          });
          r.highlight();
          return r;
        }
        u(t, e);
        r(t, null, [{
          key: "register",
          value: function () {
            i.default.register(p, !0);
            i.default.register(d, !0);
          }
        }]);
        r(t, [{
          key: "highlight",
          value: function () {
            var e = this;
            if (!this.quill.selection.composing) {
              this.quill.update(i.default.sources.USER);
              var t = this.quill.getSelection();
              this.quill.scroll.descendants(d).forEach(function (t) {
                t.highlight(e.options.highlight);
              });
              this.quill.update(i.default.sources.SILENT);
              if (null != t) {
                this.quill.setSelection(t, i.default.sources.SILENT);
              }
            }
          }
        }]);
        return t;
      }(a.default);
      f.DEFAULTS = {
        highlight: null == window.hljs ? null : function (e) {
          return window.hljs.highlightAuto(e).value;
        },
        interval: 1e3
      };
      t.CodeBlock = d;
      t.CodeToken = p;
      t.default = f;
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <g class=\"ql-fill ql-color-label\"> <polygon points=\"6 6.868 6 6 5 6 5 7 5.942 7 6 6.868\"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points=\"6.817 5 6 5 6 6 6.38 6 6.817 5\"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points=\"4 11.439 4 11 3 11 3 12 3.755 12 4 11.439\"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points=\"4.63 10 4 10 4 11 4.192 11 4.63 10\"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points=\"13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174\"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points=\"12 6.868 12 6 11.62 6 12 6.868\"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points=\"12.933 9 13 9 13 8 12.495 8 12.933 9\"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points=\"5.5 13 9 5 12.5 13\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=\"ql-fill ql-stroke\" height=3 width=3 x=4 y=5></rect> <rect class=\"ql-fill ql-stroke\" height=3 width=3 x=11 y=5></rect> <path class=\"ql-even ql-fill ql-stroke\" d=M7,8c0,4.031-3,5-3,5></path> <path class=\"ql-even ql-fill ql-stroke\" d=M14,8c0,4.031-3,5-3,5></path> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>";
    }, function (e, t) {
      e.exports = "<svg class=\"\" viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <line class=\"ql-color-label ql-stroke ql-transparent\" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points=\"5.5 11 9 3 12.5 11\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=\"ql-stroke ql-fill\" points=\"3 11 5 9 3 7 3 11\"></polygon> <line class=\"ql-stroke ql-fill\" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=\"ql-stroke ql-fill\" points=\"15 12 13 10 15 8 15 12\"></polygon> <line class=\"ql-stroke ql-fill\" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform=\"translate(24 18) rotate(-180)\"/> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewBox=\"0 0 18 18\"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewBox=\"0 0 18 18\"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class=\"ql-even ql-fill\" points=\"5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12\"></polyline> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=\"ql-fill ql-stroke\" points=\"3 7 3 11 5 9 3 7\"></polyline> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\"5 7 5 11 3 9 5 7\"></polyline> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class=\"ql-even ql-stroke\" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class=\"ql-even ql-stroke\" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class=\"ql-stroke ql-thin\" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class=\"ql-stroke ql-thin\" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class=\"ql-stroke ql-thin\" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>";
    }, function (e, t) {
      e.exports = "<svg class=\"\" viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points=\"3 4 4 5 6 3\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points=\"3 14 4 15 6 13\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\"3 9 4 10 6 8\"></polyline> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <line class=\"ql-stroke ql-thin\" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>";
    }, function (e, t) {
      e.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=ql-stroke points=\"7 11 9 13 11 11 7 11\"></polygon> <polygon class=ql-stroke points=\"7 7 9 5 11 7 7 7\"></polygon> </svg>";
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.default = t.BubbleTooltip = void 0;
      var r = function e(t, n, r) {
        if (null === t) {
          t = Function.prototype;
        }
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ("value" in o) {
          return o.value;
        }
        var a = o.get;
        return void 0 !== a ? a.call(r) : void 0;
      };
      var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var i = d(n(3));
      var a = d(n(8));
      var s = n(43);
      var c = d(s);
      var l = n(15);
      var u = d(n(41));
      function d(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      function p(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function f(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
      }
      function h(e, t) {
        if ("function" !== typeof t && null !== t) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e, t);
          } else {
            e.__proto__ = t;
          }
        }
      }
      var m = [["bold", "italic", "link"], [{
        header: 1
      }, {
        header: 2
      }, "blockquote"]];
      var g = function (e) {
        function t(e, n) {
          p(this, t);
          if (null != n.modules.toolbar && null == n.modules.toolbar.container) {
            n.modules.toolbar.container = m;
          }
          var r = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
          r.quill.container.classList.add("ql-bubble");
          return r;
        }
        h(t, e);
        o(t, [{
          key: "extendToolbar",
          value: function (e) {
            this.tooltip = new _(this.quill, this.options.bounds);
            this.tooltip.root.appendChild(e.container);
            this.buildButtons([].slice.call(e.container.querySelectorAll("button")), u.default);
            this.buildPickers([].slice.call(e.container.querySelectorAll("select")), u.default);
          }
        }]);
        return t;
      }(c.default);
      g.DEFAULTS = (0, i.default)(!0, {}, c.default.DEFAULTS, {
        modules: {
          toolbar: {
            handlers: {
              link: function (e) {
                if (e) {
                  this.quill.theme.tooltip.edit();
                } else {
                  this.quill.format("link", !1);
                }
              }
            }
          }
        }
      });
      var _ = function (e) {
        function t(e, n) {
          p(this, t);
          var r = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
          r.quill.on(a.default.events.EDITOR_CHANGE, function (e, t, n, o) {
            if (e === a.default.events.SELECTION_CHANGE) {
              if (null != t && t.length > 0 && o === a.default.sources.USER) {
                r.show();
                r.root.style.left = "0px";
                r.root.style.width = "";
                r.root.style.width = r.root.offsetWidth + "px";
                var i = r.quill.getLines(t.index, t.length);
                if (1 === i.length) {
                  r.position(r.quill.getBounds(t));
                } else {
                  var s = i[i.length - 1];
                  var c = r.quill.getIndex(s);
                  var u = Math.min(s.length() - 1, t.index + t.length - c);
                  var d = r.quill.getBounds(new l.Range(c, u));
                  r.position(d);
                }
              } else if (document.activeElement !== r.textbox && r.quill.hasFocus()) {
                r.hide();
              }
            }
          });
          return r;
        }
        h(t, e);
        o(t, [{
          key: "listen",
          value: function () {
            var e = this;
            r(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "listen", this).call(this);
            this.root.querySelector(".ql-close").addEventListener("click", function () {
              e.root.classList.remove("ql-editing");
            });
            this.quill.on(a.default.events.SCROLL_OPTIMIZE, function () {
              setTimeout(function () {
                if (!e.root.classList.contains("ql-hidden")) {
                  var t = e.quill.getSelection();
                  if (null != t) {
                    e.position(e.quill.getBounds(t));
                  }
                }
              }, 1);
            });
          }
        }, {
          key: "cancel",
          value: function () {
            this.show();
          }
        }, {
          key: "position",
          value: function (e) {
            var n = r(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "position", this).call(this, e);
            var o = this.root.querySelector(".ql-tooltip-arrow");
            o.style.marginLeft = "";
            if (0 === n) {
              return n;
            }
            o.style.marginLeft = -1 * n - o.offsetWidth / 2 + "px";
          }
        }]);
        return t;
      }(s.BaseTooltip);
      _.TEMPLATE = ["<span class=\"ql-tooltip-arrow\"></span>", "<div class=\"ql-tooltip-editor\">", "<input type=\"text\" data-formula=\"e=mc^2\" data-link=\"https://quilljs.com\" data-video=\"Embed URL\">", "<a class=\"ql-close\"></a>", "</div>"].join("");
      t.BubbleTooltip = _;
      t.default = g;
    }, function (e, t, n) {
      e.exports = n(63);
    }]).default;
  };
  module.exports = n();
}).call(this, require("./570/index").Buffer);