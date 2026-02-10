/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：20__part-1
 */

"use strict"

var o
var r
import * as /* [auto-meaningful-name] */$_429 from "./429"
import * as a from "./84"
import * as /* [auto-meaningful-name] */$_428_index from "./428/index"
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from "regenerator-runtime"
import * as u from "../7"
import * as /* [auto-meaningful-name] */Axios from "axios"
import /* [auto-meaningful-name] */Axios1 from "axios"
import * as /* [auto-meaningful-name] */$_791_index from "./791/index"
import * as /* [auto-meaningful-name] */$$_28_index from "../28/index"
import * as /* [auto-meaningful-name] */$_128 from "./128"
function g(e) {
  return _.apply(this, arguments)
}
function _() {
  return (_ = u.a(RegeneratorRuntime1.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    var o = arguments
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = !(o.length > 1 && undefined !== o[1]) || o[1]
            e.next = 3
            return Axios1.get("".concat($_128.a.openServiceHost, "/cdn/qi-niu/tokens/uploading"), {
              withCredentials: true,
              params: {
                cdnName: "qiniu",
                insertOnly: n,
                filePaths: t.join(","),
                projectName: $_128.a.productCode
              }
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
function v(e, t, n) {
  return b.apply(this, arguments)
}
function b() {
  return (b = u.a(RegeneratorRuntime1.mark(function e(t, n, r) {
    var o
    var i
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */u$response
    var /* [auto-meaningful-name] */u$response$data
    var u
    var d = arguments
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            o = d.length > 3 && undefined !== d[3] ? d[3] : "https://upload.qiniup.com/";
            (i = new FormData()).append("key", t)
            i.append("file", n)
            i.append("token", r)
            e.prev = 5
            e.next = 8
            return Axios1.post(o, i, {
              headers: {
                "Content-Type": "multipart/form-data"
              },
              withCredentials: false
            })
          case 8:
            e$sent = e.sent
            return e.abrupt("return", e$sent.data)
          case 12:
            if (e.prev = 12, e.t0 = e.catch(5), !("response" in (u = e.t0)) || 614 !== (null === (u$response = u.response) || undefined === u$response ? undefined : u$response.status) || "file exists" !== (null === (u$response$data = u.response.data) || undefined === u$response$data ? undefined : u$response$data.error)) {
              e.next = 17
              break
            }
            return e.abrupt("return", {
              key: t,
              hash: t.split("/").pop()
            })
          case 17:
            console.error(u)
            throw new Error("QiNiu upload file failed")
          case 19:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[5, 12]])
  }))).apply(this, arguments)
}
function y(e) {
  return ["prod" === $_128.a.env ? "".concat(716) : "dev/".concat(716), "user_files", window.__cm_user_id || "unknown", window.__cm_work_id || "unknown", $$_28_index.j(Date.now() + "")].join("/")
}
function E(e) {
  return O.apply(this, arguments)
}
function O() {
  return (O = u.a(RegeneratorRuntime1.mark(function e(t) {
    var n
    var r
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent1
    var a
    var /* [auto-meaningful-name] */e$sent2
    var c
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if ("string" !== typeof (r = t) || !(r.startsWith("blob:") || r.startsWith("data:") || r.startsWith("file:"))) {
              e.next = 6
              break
            }
            e.next = 4
            return Axios1.get(r, {
              responseType: "blob"
            })
          case 4:
            e$sent = e.sent
            r = e$sent.data
          case 6:
            if (!(r instanceof Blob)) {
              e.next = 12
              break
            }
            if (r.type && "application/octet-stream" !== r.type) {
              e.next = 12
              break
            }
            e.next = 10
            return $_791_index.fromBlob(r)
          case 10:
            e$sent1 = e.sent
            r = (null === e$sent1 || undefined === e$sent1 ? undefined : e$sent1.mime) ? new Blob([r], {
              type: e$sent1.mime
            }) : r
          case 12:
            a = y()
            e.next = 15
            return g([a])
          case 15:
            if (e$sent2 = e.sent, !(c = null === (n = e$sent2.tokens.find(function (e) {
              return e.file_path
            })) || undefined === n ? undefined : n.token)) {
              e.next = 21
              break
            }
            e.next = 20
            return v(a, r, c)
          case 20:
            return e.abrupt("return", e$sent2.bucket_url + a)
          case 21:
            throw new Error("Upload token not found!")
          case 22:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function w(e) {
  window.__cm_user_id = r = e
}
function C(e) {
  return r
}
function T(e) {
  window.__cm_work_id = o = e
  window.__coco = this
}
function S(e) {
  return o
}
export { E }
export { w }
export { C }
export { T }
export { S }
