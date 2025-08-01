"use strict";

export { c as a };
export { l as b };
var r = require("./1184/index");
var o = require("./340");
var i = require("./787/index");
var a = require("./650");
var s = require("../59/index");
function c(e, t) {
  o.b({
    id: e,
    name: t
  });
}
function l() {
  o.b(null);
}
try {
  r.a({
    release: a.a,
    dsn: "https://7c6478536deb43e98fe63267ae5c8c7d@sentry.codemao.cn/73",
    integrations: [new i.a.BrowserTracing()],
    environment: Object(s.b)(),
    tracesSampleRate: 1
  });
} catch (u) {
  console.error(u);
}
export default c;