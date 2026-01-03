/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-2
 */

"use strict"

import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */_RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_47 from "../../47"
import * as /* [auto-meaningful-name] */$$_$$_7 from "../../7"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$$_$$_197_483_index from "../../197/483/index"
import * as /* [auto-meaningful-name] */Axios from "axios"
import /* [auto-meaningful-name] */_Axios from "axios"
import * as /* [auto-meaningful-name] */$$_$$_15 from "../../15"
import * as /* [auto-meaningful-name] */$$_$$_28_128 from "../../28/128"
new $$_$$_197_483_index.a({
  env: $$_$$_28_128.a.env,
  projectName: $$_$$_28_128.a.productCode,
  config: {
    pid: $$_$$_28_128.a.pid,
    api: $$_$$_28_128.a.openServiceHost
  }
})
function F(e) {
  return G.apply(this, arguments)
}
function G() {
  return (G = $$_$$_7.a(_RegeneratorRuntime.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    var o
    var /* [auto-meaningful-name] */o$filename
    var /* [auto-meaningful-name] */o$token
    var s
    var /* [auto-meaningful-name] */_e$sent
    var /* [auto-meaningful-name] */_e$sent$data
    var /* [auto-meaningful-name] */_e$sent$data$hash
    var /* [auto-meaningful-name] */_e$sent$data$key
    var p = arguments
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = p.length > 1 && undefined !== p[1] ? p[1] : $$_$$_28_128.a.cdnPath.root
            e.next = 3
            return W(t.type, n)
          case 3:
            e$sent = e.sent
            o = e$sent.data[0]
            o$filename = o.filename
            o$token = o.token;
            (s = new FormData()).append("token", o$token)
            s.append("file", t)
            s.append("key", o$filename)
            e.next = 11
            return _Axios.post($$_$$_28_128.a.apiQiniuHost, s)
          case 11:
            _e$sent = e.sent
            _e$sent$data = _e$sent.data
            _e$sent$data$hash = _e$sent$data.hash
            _e$sent$data$key = _e$sent$data.key
            return e.abrupt("return", "https://static.bcmcdn.com/" + _e$sent$data$key + "?hash=" + _e$sent$data$hash)
          case 14:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function W(e, t) {
  return U.apply(this, arguments)
}
function U() {
  return (U = $$_$$_7.a(_RegeneratorRuntime.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */e$sent
    var i = arguments
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = i.length > 2 && undefined !== i[2] ? i[2] : 1
            e.next = 3
            return _Axios.get($$_$$_28_128.a.apiOverseaServiceHost + "/tiger/kitten/cdn/token/".concat(r), {
              params: {
                type: t,
                prefix: n,
                bucket: "static"
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
function H(e) {
  return V.apply(this, arguments)
}
function V() {
  return (V = $$_$$_7.a(_RegeneratorRuntime.mark(function e(t) {
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", new Promise(function (e, n) {
              if ($$_$$_15.T(t)) {
                var r = $$_$$_15.m(t)
                if (r) {
                  e(r)
                }
              } else if ($$_$$_15.P(t)) {
                $$_$$_15.e(t).then(function (t) {
                  return e(t)
                })
              } else {
                if ($$_$$_15.S(t)) {
                  window.resolveLocalFileSystemURL(t, function (t) {
                    t.file(function () {
                      var t = $$_$$_7.a(_RegeneratorRuntime.mark(function t(n) {
                        var r
                        return _RegeneratorRuntime.wrap(function (t) {
                          for (;;) {
                            switch (t.prev = t.next) {
                              case 0:
                                (r = new FileReader()).onloadend = function () {
                                  if (this.result) {
                                    var t = new Blob([this.result], {
                                      type: n.type
                                    })
                                    if (t) {
                                      e(t)
                                    }
                                  }
                                }
                                r.readAsArrayBuffer(n)
                              case 3:
                              case "end":
                                return t.stop()
                            }
                          }
                        }, t)
                      }))
                      return function (e) {
                        return t.apply(this, arguments)
                      }
                    }(), function () {
                      console.error("load file error")
                    })
                  })
                } else {
                  e(null)
                }
              }
            }))
          case 1:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function z(e) {
  return Y.apply(this, arguments)
}
function Y() {
  return (Y = $$_$$_7.a(_RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return H(t)
          case 2:
            if (!(e$sent = e.sent)) {
              e.next = 13
              break
            }
            e.prev = 4
            e.next = 7
            return F(e$sent, $$_$$_28_128.a.cdnPath.playerUnstable)
          case 7:
            return e.abrupt("return", e.sent)
          case 10:
            e.prev = 10
            e.t0 = e.catch(4)
            console.error("图片上传失败")
          case 13:
            return e.abrupt("return", null)
          case 14:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[4, 10]])
  }))).apply(this, arguments)
}
export { z }
