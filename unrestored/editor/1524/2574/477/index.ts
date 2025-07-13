"use strict";

export { c as a };
export { l as b };
import * as r from "./1181/index";
import * as o from "./340";
import * as i from "./786/index";
import * as a from "./650";
import * as s from "../59/index";
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