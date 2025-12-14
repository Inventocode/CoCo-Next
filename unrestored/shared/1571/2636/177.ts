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
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */_RegeneratorRuntime from "regenerator-runtime"
import * as i from "./7"
import * as a from "./33"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_widget_custom_storage from "../../../../src/shared/widget/custom/storage"
import * as c from "./53"
import * as /* [auto-meaningful-name] */$_57_index from "./57/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials from "../../../../src/shared/utils/network/axios-with-credentials"
function d(e, t, n, r, o, i, l, u, d, p, f, h) {
  var m = $$_$$_$$_$$_src_shared_widget_custom_storage.d()
  var g = $$_$$_$$_$$_src_shared_widget_custom_storage.e()
  var _ = {
    id: e,
    version: c.e,
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
    var t = a.Cb(e)
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
      var t = a.Cb(e)
      if (t) {
        _.widgetMap[e] = t
      }
    })
    if (!(null === (e$invisibleWidgetIds = e.invisibleWidgetIds) || undefined === e$invisibleWidgetIds)) {
      e$invisibleWidgetIds.forEach(function (e) {
        var t = a.Cb(e)
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
  return (f = i.a(_RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */_e$sent
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return fetch($_57_index.a.serverHost + "/coconut/web/build", {
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
            _e$sent = e.sent
            return e.abrupt("return", _e$sent.data)
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
  return (m = i.a(_RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */_e$sent2
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return fetch($_57_index.a.serverHost + "/coconut/web/build/progress?pack_label=" + t, {
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
            _e$sent2 = e.sent
            return e.abrupt("return", _e$sent2.data)
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
  return (_ = i.a(_RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */_e$sent3
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return fetch($_57_index.a.serverHost + "/coconut/web/apk/info/latest?work_id=" + t, {
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
            _e$sent3 = e.sent
            return e.abrupt("return", _e$sent3.data)
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
  return (b = i.a(_RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */_e$sent4
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return fetch($_57_index.a.serverHost + "/coconut/web/apk/pack/stop?pack_label=" + t, {
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
            _e$sent4 = e.sent
            return e.abrupt("return", _e$sent4.success)
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
  return (E = i.a(_RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */_e$sent5
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return fetch($_57_index.a.serverHost + "/coconut/web/apk/info?pack_label=" + encodeURIComponent(t), {
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
            _e$sent5 = e.sent
            return e.abrupt("return", {
              url: _e$sent5.data.apk_url,
              version: _e$sent5.data.version,
              expireTime: _e$sent5.data.apk_download_url_expire_time
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
  return (w = i.a(_RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent
    return _RegeneratorRuntime.wrap(function (e) {
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
  return (T = i.a(_RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */_e$sent6
    return _RegeneratorRuntime.wrap(function (e) {
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
            _e$sent6 = e.sent
            return e.abrupt("return", _e$sent6)
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
  return (A = i.a(_RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */_e$sent7
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return fetch($_57_index.a.serverHost + "/coconut/web/token?work_id=".concat(t), {
              mode: "cors",
              method: "GET",
              credentials: "include"
            })
          case 2:
            e$sent = e.sent
            e.next = 5
            return e$sent.json()
          case 5:
            _e$sent7 = e.sent
            return e.abrupt("return", _e$sent7.data)
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
  return (j = i.a(_RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */t$name
    var /* [auto-meaningful-name] */t$description
    var /* [auto-meaningful-name] */t$operation
    var /* [auto-meaningful-name] */t$coverUrl
    var /* [auto-meaningful-name] */t$bcmcUrl
    var /* [auto-meaningful-name] */t$playerUrl
    var /* [auto-meaningful-name] */t$workId
    var /* [auto-meaningful-name] */e$sent
    return _RegeneratorRuntime.wrap(function (e) {
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
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.put($_57_index.a.serverHost + "/coconut/web/work/".concat(t$workId, "/publish"), {
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
  return (R = i.a(_RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get($_57_index.a.serverHost + "/coconut/web/work/".concat(t, "/info"))
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
  return (x = i.a(_RegeneratorRuntime.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    var i = arguments
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = i.length > 1 && undefined !== i[1] ? i[1] : 1
            e.next = 3
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get($_57_index.a.serverHost + "/coconut/web/work/".concat(t, "/load?channel=").concat(n))
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
  return (M = i.a(_RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.put($_57_index.a.serverHost + "/coconut/web/work/".concat(t, "/publish_h5"), {
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
  return (P = i.a(_RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get($_57_index.a.serverHost + "/coconut/web/work/archive/list/".concat(t, "?offset=0&limit=").concat(50))
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
