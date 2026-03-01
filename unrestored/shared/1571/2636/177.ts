/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：177
 */

"use strict"

export { d as c }
export { p as l }
export { h as a }
export { g as e }
export { v as d }
export { y as i }
export { O as b }
export { C as h }
export { S as k }
export { I as m }
export { N as j }
export { k as g }
export { D as n }
export { L as f }
import * as /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"./7"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_storage from /* 96 */"../../../../src/shared/widget/custom/storage"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"./53"
import * as /* [auto-meaningful-name] */Src_shared_env from /* 57 */"../../../../src/shared/env"
import * as /* [auto-meaningful-name] */Src_shared_utils_network_axiosWithCredentials from /* 41 */"../../../../src/shared/utils/network/axios-with-credentials"
function d(e, t, n, r, o, i, l, u, d, p, f, h) {
  var m = Src_shared_widget_custom_storage.d()
  var g = Src_shared_widget_custom_storage.e()
  var _ = {
    id: e,
    version: Module_53.e,
    screenList: [],
    widgetMap: {},
    variableMap: {},
    gridMap: {},
    blockJsonMap: {},
    initialScreenId: d,
    apiToken: p,
    extensionWidgetList: m,
    unsafeExtensionWidgetList: g
  }
  r.forEach(function (e) {
    return _.variableMap[e.id] = e.defaultValue
  })
  o.forEach(function (e) {
    return _.variableMap[e.id] = e.defaultValue
  })
  h.forEach(function (e) {
    return _.variableMap[e.id] = e.defaultValue
  })
  f.forEach(function (e) {
    var t = Module_33.Cb(e)
    if (t) {
      _.widgetMap[e] = t
    }
  })
  n.forEach(function (e) {
    var /* [auto-meaningful-name] */e$invisibleWidgetIds
    e.primitiveVariables.forEach(function (e) {
      return _.variableMap[e.id] = e.defaultValue
    })
    e.arrayVariables.forEach(function (e) {
      return _.variableMap[e.id] = e.defaultValue
    })
    e.objectVariables.forEach(function (e) {
      return _.variableMap[e.id] = e.defaultValue
    })
    e.widgetIds.forEach(function (e) {
      var t = Module_33.Cb(e)
      if (t) {
        _.widgetMap[e] = t
      }
    })
    if (!(null === (e$invisibleWidgetIds = e.invisibleWidgetIds) || undefined === e$invisibleWidgetIds)) {
      e$invisibleWidgetIds.forEach(function (e) {
        var t = Module_33.Cb(e)
        if (t) {
          _.widgetMap[e] = t
        }
      })
    }
    _.screenList.push({
      id: e.id,
      title: e.title,
      type: e.type,
      position: e.position,
      size: e.size,
      widgetIds: e.widgetIds,
      invisibleWidgetIds: e.invisibleWidgetIds,
      backgroundColor: e.backgroundColor,
      backgroundImage: e.backgroundImage,
      backgroundImageResizeMode: e.backgroundImageResizeMode
    })
    var r = t.getWorkspaceDataByScreenId(e.id)
    if (r) {
      _.blockJsonMap[e.id] = r.getWorkspaceJson()
    }
    _.imageFileMap = i
    _.soundFileMap = l
    _.iconFileMap = u
  })
  return _
}
function p(e, t) {
  return f.apply(this, arguments)
}
function f() {
  return (f = Module_7.a(RegeneratorRuntime1.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent1
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return fetch(Src_shared_env.a.serverHost + "/coconut/web/build", {
              method: "POST",
              credentials: "include",
              body: JSON.stringify({
                name: t.apkName,
                data: n,
                icon: t.apkIcon,
                appSplash: t.apkSplash,
                workId: n.id
              }),
              headers: {
                "Content-Type": "application/json"
              }
            })
          case 2:
            e$sent = e.sent
            e.next = 5
            return e$sent.json()
          case 5:
            e$sent1 = e.sent
            return e.abrupt("return", e$sent1.data)
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function h(e) {
  return m.apply(this, arguments)
}
function m() {
  return (m = Module_7.a(RegeneratorRuntime1.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent1
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return fetch(Src_shared_env.a.serverHost + "/coconut/web/build/progress?pack_label=" + t, {
              mode: "cors",
              method: "GET",
              cache: "no-cache",
              credentials: "include"
            })
          case 2:
            e$sent = e.sent
            e.next = 5
            return e$sent.json()
          case 5:
            e$sent1 = e.sent
            return e.abrupt("return", e$sent1.data)
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function g(e) {
  return _.apply(this, arguments)
}
function _() {
  return (_ = Module_7.a(RegeneratorRuntime1.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent1
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return fetch(Src_shared_env.a.serverHost + "/coconut/web/apk/info/latest?work_id=" + t, {
              mode: "cors",
              method: "GET",
              cache: "no-cache",
              credentials: "include"
            })
          case 2:
            e$sent = e.sent
            e.next = 5
            return e$sent.json()
          case 5:
            e$sent1 = e.sent
            return e.abrupt("return", e$sent1.data)
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function v(e) {
  return b.apply(this, arguments)
}
function b() {
  return (b = Module_7.a(RegeneratorRuntime1.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent1
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return fetch(Src_shared_env.a.serverHost + "/coconut/web/apk/pack/stop?pack_label=" + t, {
              mode: "cors",
              method: "put",
              cache: "no-cache",
              credentials: "include"
            })
          case 2:
            e$sent = e.sent
            e.next = 5
            return e$sent.json()
          case 5:
            e$sent1 = e.sent
            return e.abrupt("return", e$sent1.success)
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function y(e) {
  return E.apply(this, arguments)
}
function E() {
  return (E = Module_7.a(RegeneratorRuntime1.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent1
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return fetch(Src_shared_env.a.serverHost + "/coconut/web/apk/info?pack_label=" + encodeURIComponent(t), {
              mode: "cors",
              method: "GET",
              cache: "no-cache",
              credentials: "include"
            })
          case 2:
            e$sent = e.sent
            e.next = 5
            return e$sent.json()
          case 5:
            e$sent1 = e.sent
            return e.abrupt("return", {
              url: e$sent1.data.apk_url,
              version: e$sent1.data.version,
              expireTime: e$sent1.data.apk_download_url_expire_time
            })
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function O(e, t) {
  return w.apply(this, arguments)
}
function w() {
  return (w = Module_7.a(RegeneratorRuntime1.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return fetch("/editor/service/compile", {
              mode: "same-origin",
              method: "POST",
              body: JSON.stringify({
                id: t,
                data: n
              }),
              headers: {
                "Content-Type": "application/json"
              }
            })
          case 2:
            e$sent = e.sent
            return e.abrupt("return", e$sent.status)
          case 4:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function C(e) {
  return T.apply(this, arguments)
}
function T() {
  return (T = Module_7.a(RegeneratorRuntime1.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent1
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return fetch("/editor/service/code?id=".concat(t), {
              method: "GET"
            })
          case 2:
            e$sent = e.sent
            e.next = 5
            return e$sent.text()
          case 5:
            e$sent1 = e.sent
            return e.abrupt("return", e$sent1)
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function S(e) {
  return A.apply(this, arguments)
}
function A() {
  return (A = Module_7.a(RegeneratorRuntime1.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent1
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return fetch(Src_shared_env.a.serverHost + "/coconut/web/token?work_id=".concat(t), {
              mode: "cors",
              method: "GET",
              credentials: "include"
            })
          case 2:
            e$sent = e.sent
            e.next = 5
            return e$sent.json()
          case 5:
            e$sent1 = e.sent
            return e.abrupt("return", e$sent1.data)
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function I(e) {
  return j.apply(this, arguments)
}
function j() {
  return (j = Module_7.a(RegeneratorRuntime1.mark(function e(t) {
    var /* [auto-meaningful-name] */t$name
    var /* [auto-meaningful-name] */t$description
    var /* [auto-meaningful-name] */t$operation
    var /* [auto-meaningful-name] */t$coverUrl
    var /* [auto-meaningful-name] */t$bcmcUrl
    var /* [auto-meaningful-name] */t$playerUrl
    var /* [auto-meaningful-name] */t$workId
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            t$name = t.name
            t$description = t.description
            t$operation = t.operation
            t$coverUrl = t.coverUrl
            t$bcmcUrl = t.bcmcUrl
            t$playerUrl = t.playerUrl
            t$workId = t.workId
            e.next = 3
            return Src_shared_utils_network_axiosWithCredentials.a.put(Src_shared_env.a.serverHost + "/coconut/web/work/".concat(t$workId, "/publish"), {
              name: t$name,
              description: t$description,
              operation: t$operation,
              cover_url: t$coverUrl,
              bcmc_url: t$bcmcUrl,
              player_url: t$playerUrl
            })
          case 3:
            e$sent = e.sent
            return e.abrupt("return", e$sent.data)
          case 5:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function N(e) {
  return R.apply(this, arguments)
}
function R() {
  return (R = Module_7.a(RegeneratorRuntime1.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return Src_shared_utils_network_axiosWithCredentials.a.get(Src_shared_env.a.serverHost + "/coconut/web/work/".concat(t, "/info"))
          case 2:
            e$sent = e.sent
            return e.abrupt("return", e$sent.data)
          case 4:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function k(e) {
  return x.apply(this, arguments)
}
function x() {
  return (x = Module_7.a(RegeneratorRuntime1.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    var i = arguments
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = i.length > 1 && undefined !== i[1] ? i[1] : 1
            e.next = 3
            return Src_shared_utils_network_axiosWithCredentials.a.get(Src_shared_env.a.serverHost + "/coconut/web/work/".concat(t, "/load?channel=").concat(n))
          case 3:
            e$sent = e.sent
            return e.abrupt("return", e$sent.data)
          case 5:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function D(e, t) {
  return M.apply(this, arguments)
}
function M() {
  return (M = Module_7.a(RegeneratorRuntime1.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return Src_shared_utils_network_axiosWithCredentials.a.put(Src_shared_env.a.serverHost + "/coconut/web/work/".concat(t, "/publish_h5"), {
              bcmc_url: n
            })
          case 2:
            e$sent = e.sent
            return e.abrupt("return", e$sent.data)
          case 4:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function L(e) {
  return P.apply(this, arguments)
}
function P() {
  return (P = Module_7.a(RegeneratorRuntime1.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return Src_shared_utils_network_axiosWithCredentials.a.get(Src_shared_env.a.serverHost + "/coconut/web/work/archive/list/".concat(t, "?offset=0&limit=").concat(50))
          case 2:
            e$sent = e.sent
            return e.abrupt("return", e$sent.data.data.items)
          case 4:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
export default h
