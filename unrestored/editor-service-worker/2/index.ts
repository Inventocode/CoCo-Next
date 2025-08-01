"use strict";

import * as n from "./0/index";
import o from "./0/index";
function i(t, e, r, n, o, i, a) {
  try {
    var c = t[i](a);
    var u = c.value;
  } catch (s) {
    return void r(s);
  }
  if (c.done) {
    e(u);
  } else {
    Promise.resolve(u).then(n, o);
  }
}
function a(t) {
  return function () {
    var e = this;
    var r = arguments;
    return new Promise(function (n, o) {
      var a = t.apply(e, r);
      function c(t) {
        i(a, n, o, c, u, "next", t);
      }
      function u(t) {
        i(a, n, o, c, u, "throw", t);
      }
      c(void 0);
    });
  };
}
var c;
var u = new Map();
function s() {
  return (s = a(o.mark(function t(e) {
    var r;
    var n;
    var i;
    var a;
    return o.wrap(function (t) {
      for (;;) {
        switch (t.prev = t.next) {
          case 0:
            t.next = 2;
            return e.json();
          case 2:
            r = t.sent;
            n = r.id;
            i = r.data;
            t.prev = 4;
            a = JSON.stringify(i);
            u.set(n, a);
            return t.abrupt("return", new Response(JSON.stringify({
              id: n
            }), {
              status: 200,
              statusText: "OK"
            }));
          case 10:
            t.prev = 10;
            t.t0 = t.catch(4);
            console.error(t.t0);
            return t.abrupt("return", new Response(void 0, {
              status: 400,
              statusText: "Bad Request"
            }));
          case 14:
          case "end":
            return t.stop();
        }
      }
    }, t, null, [[4, 10]]);
  }))).apply(this, arguments);
}
(c = self).compiledCodeCache = u;
c.addEventListener("install", function () {
  console.info("Service Worker Installing...");
  c.skipWaiting();
});
c.addEventListener("activate", function () {
  console.info("Service Worker Ready!");
  c.clients.claim();
});
c.addEventListener("fetch", function (t) {
  var e = t.request;
  var r = new URL(e.url);
  if ("POST" === e.method && r.origin === c.location.origin && "/editor/service/compile" === r.pathname) {
    return t.respondWith(function (t) {
      return s.apply(this, arguments);
    }(e));
  }
  if ("GET" === e.method && r.origin === c.location.origin && "/editor/service/code" === r.pathname) {
    var n = function (t) {
      var e = new URL(t.url).searchParams.get("id");
      var r = e ? u.get(e) : void 0;
      return void 0 === r ? new Response(JSON.stringify({}), {
        status: 404,
        statusText: "Not Found"
      }) : new Response(r, {
        status: 200,
        statusText: "OK"
      });
    }(e);
    return t.respondWith(n);
  }
});