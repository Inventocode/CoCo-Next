/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：463
 */

"use strict"

export { u as b }
export { p as c }
export { h as a }
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */_RegeneratorRuntime from "regenerator-runtime"
import * as i from "./7"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials from "../../../../src/shared/utils/network/axios-with-credentials"
import * as /* [auto-meaningful-name] */$_59_index from "./59/index"
$_59_index.a.materialHost
var /* [auto-meaningful-name] */$_59_index$a$serverHost = $_59_index.a.serverHost
var /* [auto-meaningful-name] */$_59_index$a$openServiceHost = $_59_index.a.openServiceHost
function u() {
  return d.apply(this, arguments)
}
function d() {
  return (d = i.a(_RegeneratorRuntime.mark(function e() {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    var r
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get($_59_index$a$serverHost + "/coconut/primary-course/list")
          case 3:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 10
              break
            }
            r = e$sent$data.data.items.map(function (e) {
              return {
                id: e.id,
                gif: e.gif,
                preview: e.preview,
                title: e.title,
                bcmUrl: e.bcm_url,
                videoUrl: e.video_url,
                courseIntro: e.course_intro
              }
            })
            return e.abrupt("return", r)
          case 10:
            return e.abrupt("return", [])
          case 11:
            e.next = 17
            break
          case 13:
            e.prev = 13
            e.t0 = e.catch(0)
            console.error(e.t0)
            throw e.t0
          case 17:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 13]])
  }))).apply(this, arguments)
}
function p() {
  return f.apply(this, arguments)
}
function f() {
  return (f = i.a(_RegeneratorRuntime.mark(function e() {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    var r
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get($_59_index$a$serverHost + "/coconut/sample/list")
          case 3:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 10
              break
            }
            r = e$sent$data.data.items.map(function (e) {
              return {
                id: e.id.toString(),
                name: e.name,
                gif: e.gif_url,
                image: e.preview_url,
                bcmUrl: e.bcm_url
              }
            })
            return e.abrupt("return", r)
          case 10:
            return e.abrupt("return", [])
          case 11:
            e.next = 17
            break
          case 13:
            e.prev = 13
            e.t0 = e.catch(0)
            console.error(e.t0)
            throw e.t0
          case 17:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 13]])
  }))).apply(this, arguments)
}
function h(e) {
  return m.apply(this, arguments)
}
function m() {
  return (m = i.a(_RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.post($_59_index$a$openServiceHost + "/content-security/image/sensor", {
              businessCode: "coco",
              uri: t,
              params: ["PULP"]
            })
          case 3:
            if (200 !== (e$sent = e.sent).status || !e$sent.data) {
              e.next = 7
              break
            }
            e$sent$data = e$sent.data
            return e.abrupt("return", e$sent$data.result)
          case 7:
            return e.abrupt("return", false)
          case 10:
            e.prev = 10
            e.t0 = e.catch(0)
            console.error(e.t0)
            throw e.t0
          case 14:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 10]])
  }))).apply(this, arguments)
}
export default h
