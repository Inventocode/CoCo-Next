/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：297
 */

"use strict"

export { h }
export { g as f }
export { v as g }
export { y as c }
export { O as b }
export { C as d }
export { S as e }
export { I as a }
import * as r from "./6"
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */_RegeneratorRuntime from "regenerator-runtime"
import * as a from "./7"
import * as s from "./60"
import * as /* [auto-meaningful-name] */$_197_index from "./197/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials from "../../../../src/shared/utils/network/axios-with-credentials"
import * as /* [auto-meaningful-name] */$_57_index from "./57/index"
import * as /* [auto-meaningful-name] */$_276 from "./276"
var /* [auto-meaningful-name] */$_57_index$a$serverHost = $_57_index.a.serverHost
var /* [auto-meaningful-name] */$_57_index$a$oTServerHost = $_57_index.a.oTServerHost
function h(e) {
  return m.apply(this, arguments)
}
function m() {
  return (m = a.a(_RegeneratorRuntime.mark(function e(t) {
    var n
    var r
    var /* [auto-meaningful-name] */e$sent
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = new Blob([t], {
              type: "application/json,charset=utf-8;"
            })
            r = new File([n], "project.json", {
              type: n.type
            })
            e.next = 4
            return $_197_index.e(r, "JSON")
          case 4:
            e$sent = e.sent
            return e.abrupt("return", e$sent.url)
          case 6:
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
  return (_ = a.a(_RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */t$name
    var /* [auto-meaningful-name] */t$bcmUrl
    var /* [auto-meaningful-name] */t$coverUrl
    var /* [auto-meaningful-name] */t$sourceTag
    var /* [auto-meaningful-name] */u$data
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data$data$work_id
    var /* [auto-meaningful-name] */e$t0$response
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            t$name = t.name
            t$bcmUrl = t.bcmUrl
            t$coverUrl = t.coverUrl
            t$sourceTag = t.sourceTag
            e.prev = 1
            e.next = 4
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.post($_57_index$a$serverHost + "/coconut/web/work", {
              name: t$name,
              preview_url: t$coverUrl,
              bcm_url: t$bcmUrl,
              archive_version: "0.1.0",
              save_type: t.saveType || s.b.ByUser,
              work_source_label: t$sourceTag
            })
          case 4:
            if (!(null === (e$sent = e.sent) || undefined === e$sent || null === (u$data = e$sent.data) || undefined === u$data ? undefined : u$data.data)) {
              e.next = 8
              break
            }
            e$sent$data$data$work_id = e$sent.data.data.work_id
            return e.abrupt("return", e$sent$data$data$work_id)
          case 8:
            console.error("saveProject error")
            throw new Error($_276.a.SAVE_PROJECT_ERROR)
          case 12:
            if (e.prev = 12, e.t0 = e.catch(1), console.error("saveProject error", e.t0), 401 !== (null === (e$t0$response = e.t0.response) || undefined === e$t0$response ? undefined : e$t0$response.status)) {
              e.next = 17
              break
            }
            throw new Error($_276.a.USER_NOT_LOGIN)
          case 17:
            throw e.t0
          case 18:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[1, 12]])
  }))).apply(this, arguments)
}
function v(e) {
  return b.apply(this, arguments)
}
function b() {
  return (b = a.a(_RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */t$name
    var /* [auto-meaningful-name] */t$bcmUrl
    var /* [auto-meaningful-name] */t$coverUrl
    var a
    var /* [auto-meaningful-name] */u$data
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$t0$response
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            t$name = t.name
            t$bcmUrl = t.bcmUrl
            t$coverUrl = t.coverUrl
            a = t.id
            e.prev = 1
            e.next = 4
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.put($_57_index$a$serverHost + "/coconut/web/work", {
              id: a,
              name: t$name,
              preview_url: t$coverUrl,
              bcm_url: t$bcmUrl,
              archive_version: "0.1.0",
              save_type: t.saveType || s.b.ByUser
            })
          case 4:
            if (null === (e$sent = e.sent) || undefined === e$sent || null === (u$data = e$sent.data) || undefined === u$data ? undefined : u$data.data) {
              e.next = 7
              break
            }
            throw new Error($_276.a.UPDATE_PROJECT_ERROR)
          case 7:
            e.next = 14
            break
          case 9:
            if (e.prev = 9, e.t0 = e.catch(1), 401 !== (null === (e$t0$response = e.t0.response) || undefined === e$t0$response ? undefined : e$t0$response.status)) {
              e.next = 13
              break
            }
            throw new Error($_276.a.USER_NOT_LOGIN)
          case 13:
            throw e.t0
          case 14:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[1, 9]])
  }))).apply(this, arguments)
}
function y(e, t, n) {
  return E.apply(this, arguments)
}
function E() {
  return (E = a.a(_RegeneratorRuntime.mark(function e(t, n, r) {
    var o
    var a
    var /* [auto-meaningful-name] */e$sent
    var c
    var /* [auto-meaningful-name] */e$sent$data
    var /* [auto-meaningful-name] */e$sent$data$currentTime
    var /* [auto-meaningful-name] */e$sent$data$data$items
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            o = "?offset=".concat(t, "&limit=").concat(n) + (undefined !== r ? "&published=".concat(r) : "")
            a = "".concat($_57_index$a$serverHost, "/coconut/web/work/list").concat(o)
            e.next = 4
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get(a)
          case 4:
            if (e$sent = e.sent, c = [], !(e$sent$data = e$sent.data)) {
              e.next = 12
              break
            }
            e$sent$data$currentTime = e$sent$data.currentTime
            e$sent$data$data$items = e$sent$data.data.items
            if (Array.isArray(e$sent$data$data$items)) {
              e$sent$data$data$items.forEach(function (e) {
                var t = e.id
                var /* [auto-meaningful-name] */e$work_id = e.work_id
                var /* [auto-meaningful-name] */e$name = e.name
                var /* [auto-meaningful-name] */e$cover_url = e.cover_url
                var /* [auto-meaningful-name] */e$preview_url = e.preview_url
                var /* [auto-meaningful-name] */e$updated_at = e.updated_at
                var /* [auto-meaningful-name] */e$is_coll_work = e.is_coll_work
                var /* [auto-meaningful-name] */e$published_at = e.published_at
                var u = {
                  id: e$work_id || t,
                  name: e$name,
                  coverUrl: e$cover_url,
                  previewUrl: e$preview_url,
                  updateTime: 1e3 * e$updated_at,
                  serverTime: 1e3 * e$sent$data$currentTime,
                  isCollWork: e$is_coll_work,
                  publishedTime: e$published_at
                }
                c.push(u)
              })
            }
            return e.abrupt("return", {
              list: c,
              total: e$sent$data.data.total
            })
          case 12:
            throw new Error("Get my project list error")
          case 13:
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
  return (w = a.a(_RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */o$data
    var /* [auto-meaningful-name] */e$sent
    var a
    var s
    var c
    var /* [auto-meaningful-name] */s$items
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get("".concat($_57_index$a$oTServerHost, "/coll/coco/coll_works"), {
              params: {
                current_page: t,
                page_size: n
              }
            })
          case 2:
            if (e$sent = e.sent, a = [], !(s = null === e$sent || undefined === e$sent || null === (o$data = e$sent.data) || undefined === o$data ? undefined : o$data.data)) {
              e.next = 10
              break
            }
            c = Math.round(Date.now() / 1e3)
            s$items = s.items
            if (Array.isArray(s$items)) {
              s$items.forEach(function (e) {
                var t = e.id
                var /* [auto-meaningful-name] */e$name = e.name
                var /* [auto-meaningful-name] */e$cover_url = e.cover_url
                var /* [auto-meaningful-name] */e$update_time = e.update_time
                var /* [auto-meaningful-name] */e$is_coll_work = e.is_coll_work
                var /* [auto-meaningful-name] */e$published_at = e.published_at
                var l = {
                  id: t.toString(),
                  name: e$name,
                  coverUrl: e$cover_url,
                  updateTime: 1e3 * e$update_time,
                  serverTime: 1e3 * c,
                  isCollWork: e$is_coll_work,
                  publishedTime: e$published_at
                }
                a.push(l)
              })
            }
            return e.abrupt("return", {
              list: a,
              total: s.total
            })
          case 10:
            throw new Error("Get my project list error")
          case 11:
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
  return (T = a.a(_RegeneratorRuntime.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    var /* [auto-meaningful-name] */e$sent$data$code
    var /* [auto-meaningful-name] */e$sent$data$data
    var /* [auto-meaningful-name] */e$sent$data$data$bcm_url
    var /* [auto-meaningful-name] */_e$sent
    var /* [auto-meaningful-name] */_e$sent2
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat($_57_index$a$serverHost, "/coconut/web/work/").concat(t, "/content")
            e.next = 3
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get(n)
          case 3:
            if (e$sent = e.sent, e$sent$data = e$sent.data, e$sent$data$code = e$sent$data.code, e$sent$data$data = e$sent$data.data) {
              e.next = 9
              break
            }
            return e.abrupt("return", {
              code: e$sent$data$code,
              data: e$sent$data$data
            })
          case 9:
            e$sent$data$data$bcm_url = e$sent$data$data.bcm_url
            e.next = 12
            return fetch(e$sent$data$data$bcm_url)
          case 12:
            _e$sent = e.sent
            e.next = 15
            return _e$sent.json()
          case 15:
            _e$sent2 = e.sent
            if (e$sent$data$data.name && e$sent$data$data.name !== _e$sent2.title) {
              _e$sent2.title = e$sent$data$data.name
            }
            return e.abrupt("return", {
              code: e$sent$data$code,
              data: r.a(r.a({}, e$sent$data$data), {}, {
                content: _e$sent2
              })
            })
          case 18:
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
  return (A = a.a(_RegeneratorRuntime.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data$data
    var /* [auto-meaningful-name] */e$sent$data$data$bcm_url
    var /* [auto-meaningful-name] */_e$sent3
    var /* [auto-meaningful-name] */_e$sent4
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat($_57_index$a$serverHost, "/coconut/web/work/archive/").concat(t)
            e.next = 3
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get(n)
          case 3:
            e$sent = e.sent
            e$sent$data$data = e$sent.data.data
            e$sent$data$data$bcm_url = e$sent$data$data.bcm_url
            e.next = 8
            return fetch(e$sent$data$data$bcm_url)
          case 8:
            _e$sent3 = e.sent
            e.next = 11
            return _e$sent3.json()
          case 11:
            _e$sent4 = e.sent
            return e.abrupt("return", {
              content: _e$sent4
            })
          case 13:
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
  return (j = a.a(_RegeneratorRuntime.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat($_57_index$a$serverHost, "/coconut/web/work/").concat(t)
            e.next = 3
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.delete(n)
          case 3:
            e$sent = e.sent
            return e.abrupt("return", 200 === e$sent.data.code)
          case 5:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
export default I
