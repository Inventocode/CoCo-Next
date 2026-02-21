/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-5
 */

"use strict"

import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_297 from "./297"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials from "../../../../src/shared/utils/network/axios-with-credentials"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_env from "../../../../src/shared/env"
var /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_env$a$oTServerHost = $$_$$_$$_$$_src_shared_env.a.oTServerHost
$$_$$_$$_$$_src_shared_env.a.oTSocketHost
$$_$$_$$_$$_src_shared_env.a.serverHost
function se(e) {
  return ce.apply(this, arguments)
}
function ce() {
  return (ce = O.a(RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data$code
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.post($$_$$_$$_$$_src_shared_env$a$oTServerHost + "/coll/coco/".concat(t))
          case 2:
            if (e$sent = e.sent, 200 !== (e$sent$data$code = e$sent.data.code) && 10000002 !== e$sent$data$code) {
              e.next = 8
              break
            }
            return e.abrupt("return", true)
          case 8:
            return e.abrupt("return", false)
          case 9:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function le(e) {
  return ue.apply(this, arguments)
}
function ue() {
  return (ue = O.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var r
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data$data$items
    var a
    var s = arguments
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = s.length > 1 && undefined !== s[1] ? s[1] : 1
            r = s.length > 2 && undefined !== s[2] ? s[2] : 200
            e.next = 4
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get($$_$$_$$_$$_src_shared_env$a$oTServerHost + "/coll/coco/collaborator/".concat(t), {
              params: {
                work_id: t,
                current_page: n,
                page_size: r
              }
            })
          case 4:
            e$sent = e.sent
            e$sent$data$data$items = e$sent.data.data.items
            a = e$sent$data$data$items.map(function (e) {
              return {
                id: e.coll_user_id,
                nickname: e.nickname,
                avatar_url: e.avatar_url,
                is_author: e.is_author,
                edit_permission: e.edit_permission || 2
              }
            })
            return e.abrupt("return", a)
          case 8:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function de(e, t) {
  return pe.apply(this, arguments)
}
function pe() {
  return (pe = O.a(RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.delete($$_$$_$$_$$_src_shared_env$a$oTServerHost + "/coll/coco/collaborator/".concat(t), {
              params: {
                work_id: t,
                coll_user_id: n
              }
            })
          case 2:
            if (e$sent = e.sent, 200 !== e$sent.data.code) {
              e.next = 8
              break
            }
            return e.abrupt("return", true)
          case 8:
            return e.abrupt("return", false)
          case 9:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function fe(e, t) {
  return he.apply(this, arguments)
}
function he() {
  return (he = O.a(RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get($$_$$_$$_$$_src_shared_env$a$oTServerHost + "/coll/coco/collaborator/code/".concat(t, "?edit_permission=").concat(n))
          case 2:
            if (200 !== (e$sent = e.sent).data.code) {
              e.next = 5
              break
            }
            return e.abrupt("return", e$sent.data.data.invite_code)
          case 5:
            return e.abrupt("return", "")
          case 6:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function me() {
  return (me = O.a(RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.post($$_$$_$$_$$_src_shared_env$a$oTServerHost + "/coll/coco/collaborator/code/add-collaborator", {
              work_id: Number(t),
              invite_code: n
            })
          case 2:
            e$sent = e.sent
            return e.abrupt("return", 200 === e$sent.data.code)
          case 4:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function ge(e, t, n) {
  return _e.apply(this, arguments)
}
function _e() {
  return (_e = O.a(RegeneratorRuntime.mark(function e(t, n, r) {
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.put($$_$$_$$_$$_src_shared_env$a$oTServerHost + "/coll/coco/collaborator/edit_permission/".concat(n), {
              work_id: n,
              coll_user_id: t,
              edit_permission: r
            })
          case 2:
            e$sent = e.sent
            return e.abrupt("return", 200 === e$sent.data.code)
          case 4:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
export { se }
export { le }
export { de }
export { fe }
export { me }
export { ge }
