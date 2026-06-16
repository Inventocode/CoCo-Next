/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-15
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_84 from /* 84 */"../84"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../6"
import * as /* [auto-meaningful-name] */Module_48 from /* 48 */"../../48/index"
import * as /* [auto-meaningful-name] */Module_14 from /* 14 */"../../14"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../../28/index"
import * as /* [auto-meaningful-name] */Src_shared_utils_network_axiosWithCredentials from /* 41 */"../../../../../../src/shared/utils/network/axios-with-credentials"
function _l(e) {
  return vl.apply(this, arguments)
}
function vl() {
  return (vl = Module_7.a(RegeneratorRuntime.mark(function e(t) {
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
            return Src_shared_utils_network_axiosWithCredentials.a({
              url: r,
              method: t.method,
              headers: Module_6.a({}, t.headers),
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
  for (var t in e) if (e[t].type === Src_editor_widget_builtIn_types.u) {
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
    Module_48.a().getState().httpClientMap.set(t, a)
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
  var n = Module_48.a().getState().httpClientMap.get(e)
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
  Module_48.a().getState().httpClientMap.set(e, n)
}
function wl(e, t) {
  var n = Module_48.a().getState().httpClientMap.get(e)
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
    Module_48.a().getState().httpClientMap.set(e, n)
  } catch (o) {
    console.info(o)
  }
}
function Cl(e, t) {
  return Tl.apply(this, arguments)
}
function Tl() {
  return (Tl = Module_7.a(RegeneratorRuntime.mark(function e(t, n) {
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
            if (null === (r = Module_48.a().getState().httpClientMap.get(t)) || undefined === r ? undefined : r.url) {
              e.next = 3
              break
            }
            return e.abrupt("return")
          case 3:
            if (Src_shared_tools_index.Y(r.url)) {
              e.next = 6
              break
            }
            Module_84.fb(t, 601, "非法的请求链接")
            return e.abrupt("return")
          case 6:
            if (o = new URL(r.url), a = o.search ? {} : r.params, s = El(r.url, a), !Module_28.d()) {
              e.next = 14
              break
            }
            c = {
              headers: Module_6.a({}, r.header),
              method: n
            }
            window.cordova.plugin.http.sendRequest(s, c, function (e) {
              Module_84.gb(t, e.status, e.data)
            }, function (e) {
              console.error("http client ".concat(n, " error"), r.url, e)
              Module_84.fb(t, e.status, e.error)
            })
            e.next = 25
            break
          case 14:
            e.prev = 14
            e.next = 17
            return _l({
              url: s,
              headers: Module_6.a({}, r.header),
              method: n
            })
          case 17:
            e$sent = e.sent
            Module_84.gb(t, e$sent.status, "string" === typeof e$sent.data ? e$sent.data : JSON.stringify(e$sent.data))
            e.next = 25
            break
          case 21:
            e.prev = 21
            e.t0 = e.catch(14)
            console.error(e.t0)
            if (e.t0.response) {
              Module_84.fb(t, e.t0.response.status, "string" === typeof e.t0.response.data ? e.t0.response.data : JSON.stringify(e.t0.response.data))
            } else {
              if (navigator.onLine) {
                Module_84.fb(t, 601, (null === e.t0 || undefined === e.t0 ? undefined : e.t0.toString()) || "request error")
              } else {
                Module_14.a.condition(false, {
                  type: "error",
                  messageId: "httpOnWeakNetworkTips"
                })
                Module_84.fb(t, 602, "网络断开中")
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
  return (Al = Module_7.a(RegeneratorRuntime.mark(function e(t, n, r) {
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
            if (null === (o = Module_48.a().getState().httpClientMap.get(t)) || undefined === o ? undefined : o.url) {
              e.next = 6
              break
            }
            return e.abrupt("return")
          case 6:
            if (Src_shared_tools_index.Y(o.url)) {
              e.next = 9
              break
            }
            Module_84.fb(t, 601, "非法的请求链接")
            return e.abrupt("return")
          case 9:
            if (a = r || o.body, !Module_28.d()) {
              e.next = 17
              break
            }
            s = {
              data: a,
              headers: Module_6.a({}, o.header),
              method: n
            };
            (window$cordova = window.cordova).plugin.http.setDataSerializer("utf8")
            window$cordova.plugin.http.sendRequest(o.url, s, function (e) {
              Module_84.gb(t, e.status, e.data)
            }, function (e) {
              console.error("http client ".concat(n, " error"), o.url, e)
              Module_84.fb(t, e.status, e.error)
            })
            e.next = 28
            break
          case 17:
            e.prev = 17
            e.next = 20
            return _l({
              url: o.url,
              body: a,
              headers: Module_6.a({}, o.header),
              method: n
            })
          case 20:
            e$sent = e.sent
            Module_84.gb(t, e$sent.status, "string" === typeof e$sent.data ? e$sent.data : JSON.stringify(e$sent.data))
            e.next = 28
            break
          case 24:
            e.prev = 24
            e.t0 = e.catch(17)
            console.error(e.t0)
            if (e.t0.response) {
              Module_84.fb(t, e.t0.response.status, "string" === typeof e.t0.response.data ? e.t0.response.data : JSON.stringify(e.t0.response.data))
            } else {
              if (navigator.onLine) {
                Module_84.fb(t, 601, (null === e.t0 || undefined === e.t0 ? undefined : e.t0.toString()) || "request error")
              } else {
                Module_14.a.condition(false, {
                  type: "error",
                  messageId: "httpOnWeakNetworkTips"
                })
                Module_84.fb(t, 602, "网络断开中")
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
  var t = Module_48.a().getState().httpClientMap.get(e)
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
