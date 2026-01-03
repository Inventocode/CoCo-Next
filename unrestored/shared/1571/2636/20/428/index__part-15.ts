/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-15
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_84 from "../84"
import * as /* [auto-meaningful-name] */$$_$$_6 from "../../6"
import * as /* [auto-meaningful-name] */$$_$$_48_index from "../../48/index"
import * as /* [auto-meaningful-name] */$$_$$_14 from "../../14"
import * as /* [auto-meaningful-name] */$$_$$_15 from "../../15"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$$_$$_7 from "../../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_28_index from "../../28/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials from "../../../../../../src/shared/utils/network/axios-with-credentials"
function _l(e) {
  return vl.apply(this, arguments)
}
function vl() {
  return (vl = $$_$$_7.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var r
    var /* [auto-meaningful-name] */n$origin
    var i
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            "/http-widget-proxy"
            "@SEP@"
            n = new URL(t.url)
            r = t.url
            n$origin = n.origin
            i = n$origin.replace("://", "@SEP@")
            if (!n.host.endsWith("codemao.cn")) {
              r = r.replace(n$origin, window.location.origin + "/http-widget-proxy/" + i)
            }
            e.next = 10
            return $$_$$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a({
              url: r,
              method: t.method,
              headers: $$_$$_6.a({}, t.headers),
              data: t.body,
              withCredentials: false
            })
          case 10:
            e$sent = e.sent
            return e.abrupt("return", e$sent)
          case 12:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function bl(e) {
  var t = {}
  e.forEach(function (e) {
    if (e.key) {
      t[e.key] = e.value
    }
  })
  return t
}
function yl(e) {
  for (var t in e) if (e[t].type === $$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.u) {
    var /* [auto-meaningful-name] */eT$attributes = e[t].attributes
    var /* [auto-meaningful-name] */eT$attributes$body = eT$attributes.body
    var /* [auto-meaningful-name] */eT$attributes$header = eT$attributes.header
    var /* [auto-meaningful-name] */eT$attributes$params = eT$attributes.params
    var a = {
      url: eT$attributes.url,
      body: eT$attributes$body,
      header: bl(eT$attributes$header),
      params: bl(eT$attributes$params)
    }
    $$_$$_48_index.a().getState().httpClientMap.set(t, a)
  }
}
function El(e, t) {
  var n = []
  for (var r in t) n.push("".concat(r, "=").concat(t[r]))
  if (n.length) {
    e = e.includes("?") ? "".concat(e).concat(n.join("&")) : "".concat(e, "?").concat(n.join("&"))
  }
  return e
}
function Ol(e, t) {
  var n = $$_$$_48_index.a().getState().httpClientMap.get(e)
  if (n) {
    n.url = t.toString()
  } else {
    n = {
      url: t.toString(),
      body: "",
      header: {},
      params: {}
    }
  }
  $$_$$_48_index.a().getState().httpClientMap.set(e, n)
}
function wl(e, t) {
  var n = $$_$$_48_index.a().getState().httpClientMap.get(e)
  try {
    var r = JSON.parse(t) || {}
    if (n) {
      n.header = r
    } else {
      n = {
        url: "",
        body: "",
        header: r,
        params: {}
      }
    }
    $$_$$_48_index.a().getState().httpClientMap.set(e, n)
  } catch (o) {
    console.info(o)
  }
}
function Cl(e, t) {
  return Tl.apply(this, arguments)
}
function Tl() {
  return (Tl = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var r
    var o
    var a
    var s
    var c
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (null === (r = $$_$$_48_index.a().getState().httpClientMap.get(t)) || undefined === r ? undefined : r.url) {
              e.next = 3
              break
            }
            return e.abrupt("return")
          case 3:
            if ($$_$$_15.Y(r.url)) {
              e.next = 6
              break
            }
            $$_84.fb(t, 601, "非法的请求链接")
            return e.abrupt("return")
          case 6:
            if (o = new URL(r.url), a = o.search ? {} : r.params, s = El(r.url, a), !$$_$$_28_index.d()) {
              e.next = 14
              break
            }
            c = {
              headers: $$_$$_6.a({}, r.header),
              method: n
            }
            window.cordova.plugin.http.sendRequest(s, c, function (e) {
              $$_84.gb(t, e.status, e.data)
            }, function (e) {
              console.error("http client ".concat(n, " error"), r.url, e)
              $$_84.fb(t, e.status, e.error)
            })
            e.next = 25
            break
          case 14:
            e.prev = 14
            e.next = 17
            return _l({
              url: s,
              headers: $$_$$_6.a({}, r.header),
              method: n
            })
          case 17:
            e$sent = e.sent
            $$_84.gb(t, e$sent.status, "string" === typeof e$sent.data ? e$sent.data : JSON.stringify(e$sent.data))
            e.next = 25
            break
          case 21:
            e.prev = 21
            e.t0 = e.catch(14)
            console.error(e.t0)
            if (e.t0.response) {
              $$_84.fb(t, e.t0.response.status, "string" === typeof e.t0.response.data ? e.t0.response.data : JSON.stringify(e.t0.response.data))
            } else {
              if (navigator.onLine) {
                $$_84.fb(t, 601, (null === e.t0 || undefined === e.t0 ? undefined : e.t0.toString()) || "request error")
              } else {
                $$_$$_14.a.condition(false, {
                  type: "error",
                  messageId: "httpOnWeakNetworkTips"
                })
                $$_84.fb(t, 602, "网络断开中")
              }
            }
          case 25:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[14, 21]])
  }))).apply(this, arguments)
}
function Sl(e, t, n) {
  return Al.apply(this, arguments)
}
function Al() {
  return (Al = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n, r) {
    var o
    var a
    var s
    var /* [auto-meaningful-name] */window$cordova
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if ("get" !== n && "delete" !== n) {
              e.next = 3
              break
            }
            Cl(t, n)
            return e.abrupt("return")
          case 3:
            if (null === (o = $$_$$_48_index.a().getState().httpClientMap.get(t)) || undefined === o ? undefined : o.url) {
              e.next = 6
              break
            }
            return e.abrupt("return")
          case 6:
            if ($$_$$_15.Y(o.url)) {
              e.next = 9
              break
            }
            $$_84.fb(t, 601, "非法的请求链接")
            return e.abrupt("return")
          case 9:
            if (a = r || o.body, !$$_$$_28_index.d()) {
              e.next = 17
              break
            }
            s = {
              data: a,
              headers: $$_$$_6.a({}, o.header),
              method: n
            };
            (window$cordova = window.cordova).plugin.http.setDataSerializer("utf8")
            window$cordova.plugin.http.sendRequest(o.url, s, function (e) {
              $$_84.gb(t, e.status, e.data)
            }, function (e) {
              console.error("http client ".concat(n, " error"), o.url, e)
              $$_84.fb(t, e.status, e.error)
            })
            e.next = 28
            break
          case 17:
            e.prev = 17
            e.next = 20
            return _l({
              url: o.url,
              body: a,
              headers: $$_$$_6.a({}, o.header),
              method: n
            })
          case 20:
            e$sent = e.sent
            $$_84.gb(t, e$sent.status, "string" === typeof e$sent.data ? e$sent.data : JSON.stringify(e$sent.data))
            e.next = 28
            break
          case 24:
            e.prev = 24
            e.t0 = e.catch(17)
            console.error(e.t0)
            if (e.t0.response) {
              $$_84.fb(t, e.t0.response.status, "string" === typeof e.t0.response.data ? e.t0.response.data : JSON.stringify(e.t0.response.data))
            } else {
              if (navigator.onLine) {
                $$_84.fb(t, 601, (null === e.t0 || undefined === e.t0 ? undefined : e.t0.toString()) || "request error")
              } else {
                $$_$$_14.a.condition(false, {
                  type: "error",
                  messageId: "httpOnWeakNetworkTips"
                })
                $$_84.fb(t, 602, "网络断开中")
              }
            }
          case 28:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[17, 24]])
  }))).apply(this, arguments)
}
function Il(e) {
  var t = $$_$$_48_index.a().getState().httpClientMap.get(e)
  return t && undefined !== t.url ? t.url : ""
}
function jl(e) {
  var t = {}
  try {
    t = JSON.parse(e)
  } catch (n) {
    console.error("jsonParseToObject error", n, e)
  }
  return t
}
function Nl(e, t) {
  if ("string" !== typeof e) {
    try {
      return e[t] || ""
    } catch (n) {
      return ""
    }
  }
  return ""
}
export { yl }
export { Ol }
export { wl }
export { Cl }
export { Sl }
export { Il }
export { jl }
export { Nl }
