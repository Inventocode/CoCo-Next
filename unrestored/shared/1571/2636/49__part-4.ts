/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：49__part-4
 */

"use strict"

import * as Oe from "./43"
import * as ye from "./9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_24_index from "./24/index"
import * as /* [auto-meaningful-name] */OtJson1 from "ot-json1"
import * as Q from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
function Ue(e) {
  return He.apply(this, arguments)
}
function He() {
  return (He = Q.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var r
    var o
    var i
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            (r = Lodash.cloneDeep(t)).source = ""
            o = null === (n = $_24_index.a.getDoc()) || undefined === n ? undefined : n.imageFileList
            i = OtJson1.insertOp(["imageFileList", (null === o || undefined === o ? undefined : o.length) || 0], r)
            $_24_index.a.applyClient(i)
          case 5:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Ve(e) {
  var t
  var n = null === (t = $_24_index.a.getDoc()) || undefined === t ? undefined : t.imageFileList
  var r = null === n || undefined === n ? undefined : n.findIndex(function (t) {
    return t.id === e
  })
  if (undefined !== r && r > -1) {
    var o = OtJson1.removeOp(["imageFileList", r])
    $_24_index.a.applyClient(o)
  }
}
function ze(e, t) {
  var n
  var r = null === (n = $_24_index.a.getDoc()) || undefined === n ? undefined : n.imageFileList
  if (r) {
    var o = r.findIndex(function (t) {
      return t.id === e
    })
    if (o > -1) {
      var i = OtJson1.replaceOp(["imageFileList", o, "id"], true, t)
      $_24_index.a.applyClient(i)
    }
  }
}
function Ye(e, t) {
  var n
  var r = null === (n = $_24_index.a.getDoc()) || undefined === n ? undefined : n.imageFileList
  if (r) {
    var o = r.findIndex(function (t) {
      return t.id === e
    })
    var i = OtJson1.replaceOp(["imageFileList", o, "cdnUrl"], true, t)
    $_24_index.a.applyClient(i)
  }
}
function Ke(e) {
  return 2 === e.length && "imageFileList" === e[0]
}
function qe(e) {
  if (Ke(e.path)) {
    (function (e) {
      var t
      var /* [auto-meaningful-name] */e$path = e.path
      var r = null === (t = $_24_index.a.getPreviousDoc()) || undefined === t ? undefined : t.imageFileList[e$path[1]]
      if (r) {
        Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Jf(r.id, false))
      }
    })(e)
  }
}
function Xe(e) {
  var /* [auto-meaningful-name] */e$path
  if (Ke(e.path)) {
    (function (e) {
      var t = e.op
      var /* [auto-meaningful-name] */e$path1 = e.path
      var r = t.i
      var o = e$path1[1]
      ye.Tb(r, o)
      Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Zj())
      Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Uj())
      Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Qj())
    })(e)
  }
  if (3 === (e$path = e.path).length && "imageFileList" === e$path[0]) {
    (function (e) {
      var t
      var /* [auto-meaningful-name] */e$path1 = e.path
      var r = e.op
      var o = e$path1[1]
      var i = e$path1[2]
      var a = r.i
      var s = null === (t = $_24_index.a.getPreviousDoc()) || undefined === t ? undefined : t.imageFileList[o]
      if (s) {
        if ("id" === i) {
          Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.zf(a, s.id, false))
        }
        if ("cdnUrl" === i) {
          ye.bc(s.id, a)
        }
        Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Zj())
        Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Uj())
        Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Qj())
      }
    })(e)
  }
}
function Qe(e) {
  return Ze.apply(this, arguments)
}
function Ze() {
  return (Ze = Q.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var r
    var o
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = null === (n = $_24_index.a.getDoc()) || undefined === n ? undefined : n.soundFileList
            o = (null === r || undefined === r ? undefined : r.length) || 0
            t.forEach(function (e, t) {
              var n = Lodash.cloneDeep(e)
              n.source = ""
              var r = OtJson1.insertOp(["soundFileList", o + t], n)
              $_24_index.a.applyClient(r)
            })
          case 3:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Je(e) {
  var t
  var n = null === (t = $_24_index.a.getDoc()) || undefined === t ? undefined : t.soundFileList
  var r = null === n || undefined === n ? undefined : n.findIndex(function (t) {
    return t.id === e
  })
  if (undefined !== r && r > -1) {
    var o = OtJson1.removeOp(["soundFileList", r])
    $_24_index.a.applyClient(o)
  }
}
function $e(e, t) {
  var n
  var r = null === (n = $_24_index.a.getDoc()) || undefined === n ? undefined : n.soundFileList
  if (r) {
    var o = r.findIndex(function (t) {
      return t.id === e
    })
    if (o > -1) {
      var i = OtJson1.replaceOp(["soundFileList", o, "name"], true, t)
      $_24_index.a.applyClient(i)
    }
  }
}
function et(e, t) {
  var n
  var r = null === (n = $_24_index.a.getDoc()) || undefined === n ? undefined : n.soundFileList
  if (r) {
    var o = r.findIndex(function (t) {
      return t.id === e
    })
    var i = OtJson1.replaceOp(["soundFileList", o, "cdnUrl"], true, t)
    $_24_index.a.applyClient(i)
  }
}
export { Ue }
export { Ve }
export { ze }
export { Ye }
export { qe }
export { Xe }
export { Qe }
export { Je }
export { $e }
export { et }
