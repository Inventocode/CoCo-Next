!function(t) {
    var e = {};
    function r(n) {
        if (e[n])
            return e[n].exports;
        var o = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, r),
        o.l = !0,
        o.exports
    }
    r.m = t,
    r.c = e,
    r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }
    ,
    r.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(t, e) {
        if (1 & e && (t = r(t)),
        8 & e)
            return t;
        if (4 & e && "object" === typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (r.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var o in t)
                r.d(n, o, function(e) {
                    return t[e]
                }
                .bind(null, o));
        return n
    }
    ,
    r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return r.d(e, "a", e),
        e
    }
    ,
    r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    r.p = "https://creation.codemao.cn/coconut/web/1.22.0-0/",
    r(r.s = 2)
}([function(t, e, r) {
    t.exports = r(1)
}
, function(t, e, r) {
    var n = function(t) {
        "use strict";
        var e = Object.prototype
          , r = e.hasOwnProperty
          , n = "function" === typeof Symbol ? Symbol : {}
          , o = n.iterator || "@@iterator"
          , i = n.asyncIterator || "@@asyncIterator"
          , a = n.toStringTag || "@@toStringTag";
        function c(t, e, r) {
            return Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            t[e]
        }
        try {
            c({}, "")
        } catch (j) {
            c = function(t, e, r) {
                return t[e] = r
            }
        }
        function u(t, e, r, n) {
            var o = e && e.prototype instanceof l ? e : l
              , i = Object.create(o.prototype)
              , a = new E(n || []);
            return i._invoke = function(t, e, r) {
                var n = "suspendedStart";
                return function(o, i) {
                    if ("executing" === n)
                        throw new Error("Generator is already running");
                    if ("completed" === n) {
                        if ("throw" === o)
                            throw i;
                        return _()
                    }
                    for (r.method = o,
                    r.arg = i; ; ) {
                        var a = r.delegate;
                        if (a) {
                            var c = x(a, r);
                            if (c) {
                                if (c === f)
                                    continue;
                                return c
                            }
                        }
                        if ("next" === r.method)
                            r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if ("suspendedStart" === n)
                                throw n = "completed",
                                r.arg;
                            r.dispatchException(r.arg)
                        } else
                            "return" === r.method && r.abrupt("return", r.arg);
                        n = "executing";
                        var u = s(t, e, r);
                        if ("normal" === u.type) {
                            if (n = r.done ? "completed" : "suspendedYield",
                            u.arg === f)
                                continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (n = "completed",
                        r.method = "throw",
                        r.arg = u.arg)
                    }
                }
            }(t, r, a),
            i
        }
        function s(t, e, r) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, r)
                }
            } catch (j) {
                return {
                    type: "throw",
                    arg: j
                }
            }
        }
        t.wrap = u;
        var f = {};
        function l() {}
        function h() {}
        function p() {}
        var d = {};
        d[o] = function() {
            return this
        }
        ;
        var v = Object.getPrototypeOf
          , y = v && v(v(O([])));
        y && y !== e && r.call(y, o) && (d = y);
        var g = p.prototype = l.prototype = Object.create(d);
        function m(t) {
            ["next", "throw", "return"].forEach((function(e) {
                c(t, e, (function(t) {
                    return this._invoke(e, t)
                }
                ))
            }
            ))
        }
        function w(t, e) {
            var n;
            this._invoke = function(o, i) {
                function a() {
                    return new e((function(n, a) {
                        !function n(o, i, a, c) {
                            var u = s(t[o], t, i);
                            if ("throw" !== u.type) {
                                var f = u.arg
                                  , l = f.value;
                                return l && "object" === typeof l && r.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                                    n("next", t, a, c)
                                }
                                ), (function(t) {
                                    n("throw", t, a, c)
                                }
                                )) : e.resolve(l).then((function(t) {
                                    f.value = t,
                                    a(f)
                                }
                                ), (function(t) {
                                    return n("throw", t, a, c)
                                }
                                ))
                            }
                            c(u.arg)
                        }(o, i, n, a)
                    }
                    ))
                }
                return n = n ? n.then(a, a) : a()
            }
        }
        function x(t, e) {
            var r = t.iterator[e.method];
            if (void 0 === r) {
                if (e.delegate = null,
                "throw" === e.method) {
                    if (t.iterator.return && (e.method = "return",
                    e.arg = void 0,
                    x(t, e),
                    "throw" === e.method))
                        return f;
                    e.method = "throw",
                    e.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return f
            }
            var n = s(r, t.iterator, e.arg);
            if ("throw" === n.type)
                return e.method = "throw",
                e.arg = n.arg,
                e.delegate = null,
                f;
            var o = n.arg;
            return o ? o.done ? (e[t.resultName] = o.value,
            e.next = t.nextLoc,
            "return" !== e.method && (e.method = "next",
            e.arg = void 0),
            e.delegate = null,
            f) : o : (e.method = "throw",
            e.arg = new TypeError("iterator result is not an object"),
            e.delegate = null,
            f)
        }
        function b(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]),
            2 in t && (e.finallyLoc = t[2],
            e.afterLoc = t[3]),
            this.tryEntries.push(e)
        }
        function L(t) {
            var e = t.completion || {};
            e.type = "normal",
            delete e.arg,
            t.completion = e
        }
        function E(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            t.forEach(b, this),
            this.reset(!0)
        }
        function O(t) {
            if (t) {
                var e = t[o];
                if (e)
                    return e.call(t);
                if ("function" === typeof t.next)
                    return t;
                if (!isNaN(t.length)) {
                    var n = -1
                      , i = function e() {
                        for (; ++n < t.length; )
                            if (r.call(t, n))
                                return e.value = t[n],
                                e.done = !1,
                                e;
                        return e.value = void 0,
                        e.done = !0,
                        e
                    };
                    return i.next = i
                }
            }
            return {
                next: _
            }
        }
        function _() {
            return {
                value: void 0,
                done: !0
            }
        }
        return h.prototype = g.constructor = p,
        p.constructor = h,
        h.displayName = c(p, a, "GeneratorFunction"),
        t.isGeneratorFunction = function(t) {
            var e = "function" === typeof t && t.constructor;
            return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
        }
        ,
        t.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p,
            c(t, a, "GeneratorFunction")),
            t.prototype = Object.create(g),
            t
        }
        ,
        t.awrap = function(t) {
            return {
                __await: t
            }
        }
        ,
        m(w.prototype),
        w.prototype[i] = function() {
            return this
        }
        ,
        t.AsyncIterator = w,
        t.async = function(e, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new w(u(e, r, n, o),i);
            return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                return t.done ? t.value : a.next()
            }
            ))
        }
        ,
        m(g),
        c(g, a, "Generator"),
        g[o] = function() {
            return this
        }
        ,
        g.toString = function() {
            return "[object Generator]"
        }
        ,
        t.keys = function(t) {
            var e = [];
            for (var r in t)
                e.push(r);
            return e.reverse(),
            function r() {
                for (; e.length; ) {
                    var n = e.pop();
                    if (n in t)
                        return r.value = n,
                        r.done = !1,
                        r
                }
                return r.done = !0,
                r
            }
        }
        ,
        t.values = O,
        E.prototype = {
            constructor: E,
            reset: function(t) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = void 0,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = void 0,
                this.tryEntries.forEach(L),
                !t)
                    for (var e in this)
                        "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type)
                    throw t.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done)
                    throw t;
                var e = this;
                function n(r, n) {
                    return a.type = "throw",
                    a.arg = t,
                    e.next = r,
                    n && (e.method = "next",
                    e.arg = void 0),
                    !!n
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var i = this.tryEntries[o]
                      , a = i.completion;
                    if ("root" === i.tryLoc)
                        return n("end");
                    if (i.tryLoc <= this.prev) {
                        var c = r.call(i, "catchLoc")
                          , u = r.call(i, "finallyLoc");
                        if (c && u) {
                            if (this.prev < i.catchLoc)
                                return n(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc)
                                return n(i.finallyLoc)
                        } else if (c) {
                            if (this.prev < i.catchLoc)
                                return n(i.catchLoc, !0)
                        } else {
                            if (!u)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc)
                                return n(i.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n];
                    if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break
                    }
                }
                i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = t,
                a.arg = e,
                i ? (this.method = "next",
                this.next = i.finallyLoc,
                f) : this.complete(a)
            },
            complete: function(t, e) {
                if ("throw" === t.type)
                    throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                this.method = "return",
                this.next = "end") : "normal" === t.type && e && (this.next = e),
                f
            },
            finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.finallyLoc === t)
                        return this.complete(r.completion, r.afterLoc),
                        L(r),
                        f
                }
            },
            catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.tryLoc === t) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                            var o = n.arg;
                            L(r)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, e, r) {
                return this.delegate = {
                    iterator: O(t),
                    resultName: e,
                    nextLoc: r
                },
                "next" === this.method && (this.arg = void 0),
                f
            }
        },
        t
    }(t.exports);
    try {
        regeneratorRuntime = n
    } catch (o) {
        Function("r", "regeneratorRuntime = r")(n)
    }
}
, function(t, e, r) {
    "use strict";
    r.r(e);
    var n = r(0)
      , o = r.n(n);
    function i(t, e, r, n, o, i, a) {
        try {
            var c = t[i](a)
              , u = c.value
        } catch (s) {
            return void r(s)
        }
        c.done ? e(u) : Promise.resolve(u).then(n, o)
    }
    function a(t) {
        return function() {
            var e = this
              , r = arguments;
            return new Promise((function(n, o) {
                var a = t.apply(e, r);
                function c(t) {
                    i(a, n, o, c, u, "next", t)
                }
                function u(t) {
                    i(a, n, o, c, u, "throw", t)
                }
                c(void 0)
            }
            ))
        }
    }
    var c, u = new Map;
    function s() {
        return (s = a(o.a.mark((function t(e) {
            var r, n, i, a;
            return o.a.wrap((function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2,
                        e.json();
                    case 2:
                        return r = t.sent,
                        n = r.id,
                        i = r.data,
                        t.prev = 4,
                        a = JSON.stringify(i),
                        u.set(n, a),
                        t.abrupt("return", new Response(JSON.stringify({
                            id: n
                        }),{
                            status: 200,
                            statusText: "OK"
                        }));
                    case 10:
                        return t.prev = 10,
                        t.t0 = t.catch(4),
                        console.error(t.t0),
                        t.abrupt("return", new Response(void 0,{
                            status: 400,
                            statusText: "Bad Request"
                        }));
                    case 14:
                    case "end":
                        return t.stop()
                    }
            }
            ), t, null, [[4, 10]])
        }
        )))).apply(this, arguments)
    }
    (c = self).compiledCodeCache = u,
    c.addEventListener("install", (function() {
        console.info("Service Worker Installing..."),
        c.skipWaiting()
    }
    )),
    c.addEventListener("activate", (function() {
        console.info("Service Worker Ready!"),
        c.clients.claim()
    }
    )),
    c.addEventListener("fetch", (function(t) {
        var e = t.request
          , r = new URL(e.url);
        if ("POST" === e.method && r.origin === c.location.origin && "/editor/service/compile" === r.pathname)
            return t.respondWith(function(t) {
                return s.apply(this, arguments)
            }(e));
        if ("GET" === e.method && r.origin === c.location.origin && "/editor/service/code" === r.pathname) {
            var n = function(t) {
                var e = new URL(t.url).searchParams.get("id")
                  , r = e ? u.get(e) : void 0;
                return void 0 === r ? new Response(JSON.stringify({}),{
                    status: 404,
                    statusText: "Not Found"
                }) : new Response(r,{
                    status: 200,
                    statusText: "OK"
                })
            }(e);
            return t.respondWith(n)
        }
    }
    ))
}
]);
//# sourceMappingURL=main.sw.js.map
