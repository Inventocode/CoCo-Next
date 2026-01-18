/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：49__part-5
 */

"use strict"

import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as Oe from "./43"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_24_index from "./24/index"
import * as /* [auto-meaningful-name] */OtJson1 from "ot-json1"
import * as Q from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_26_index from "./26/index"
function nt(e) {
  return 2 === e.length && "soundFileList" === e[0]
}
function rt(e) {
  if (nt(e.path)) {
    (function (e) {
      var t
      var /* [auto-meaningful-name] */t$soundFileList
      var /* [auto-meaningful-name] */e$path = e.path
      var o = null === (t = $_24_index.a.getPreviousDoc()) || undefined === t || null === (t$soundFileList = t.soundFileList) || undefined === t$soundFileList ? undefined : t$soundFileList[e$path[1]]
      if (o) {
        Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.og(o.id, false))
      }
    })(e)
  }
}
function ot(e) {
  var /* [auto-meaningful-name] */e$path
  if (nt(e.path)) {
    (function (e) {
      var t = e.op
      var /* [auto-meaningful-name] */e$path1 = e.path
      var r = t.i
      var o = e$path1[1]
      Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.kf([r], o))
      Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Zj())
      Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Uj())
      Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Qj())
    })(e)
  }
  if (3 === (e$path = e.path).length && "soundFileList" === e$path[0]) {
    (function (e) {
      var t
      var /* [auto-meaningful-name] */t$soundFileList
      var /* [auto-meaningful-name] */e$path1 = e.path
      var o = e.op
      var i = e$path1[1]
      var a = e$path1[2]
      var s = o.i
      var c = null === (t = $_24_index.a.getPreviousDoc()) || undefined === t || null === (t$soundFileList = t.soundFileList) || undefined === t$soundFileList ? undefined : t$soundFileList[i]
      if (c) {
        if ("cdnUrl" === a) {
          Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Rg(c.id, s))
        }
        if ("name" === a) {
          var /* [auto-meaningful-name] */c$name = c.name
          Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Ph(c.id, s))
          $_26_index.z.replaceTextValue("audio_sound_file_list_dropdown", "SOUND_FILE_ID", c$name, s)
        }
        Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Uj())
        Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Qj())
      }
    })(e)
  }
}
function it(e) {
  return at.apply(this, arguments)
}
function at() {
  return (at = Q.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var r
    var o
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = null === (n = $_24_index.a.getDoc()) || undefined === n ? undefined : n.iconFileList
            o = (null === r || undefined === r ? undefined : r.length) || 0
            t.forEach(function (e, t) {
              var n = Lodash.cloneDeep(e)
              n.source = ""
              var r = OtJson1.insertOp(["iconFileList", o + t], n)
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
function st(e) {
  return ct.apply(this, arguments)
}
function ct() {
  return (ct = Q.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var r
    var o
    var i
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = null === (n = $_24_index.a.getDoc()) || undefined === n ? undefined : n.iconFileList
            if (undefined !== (o = null === r || undefined === r ? undefined : r.findIndex(function (e) {
              return e.id === t
            })) && o > -1) {
              i = OtJson1.removeOp(["iconFileList", o])
              $_24_index.a.applyClient(i)
            }
          case 3:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function lt(e, t) {
  var n
  var r = null === (n = $_24_index.a.getDoc()) || undefined === n ? undefined : n.iconFileList
  if (r) {
    var o = r.findIndex(function (t) {
      return t.id === e
    })
    if (o > -1) {
      var i = OtJson1.replaceOp(["iconFileList", o, "name"], true, t)
      $_24_index.a.applyClient(i)
    }
  }
}
function ut(e, t) {
  var n
  var r = null === (n = $_24_index.a.getDoc()) || undefined === n ? undefined : n.iconFileList
  if (r) {
    var o = r.findIndex(function (t) {
      return t.id === e
    })
    var i = OtJson1.replaceOp(["iconFileList", o, "cdnUrl"], true, t)
    $_24_index.a.applyClient(i)
  }
}
function dt(e) {
  return 2 === e.length && "iconFileList" === e[0]
}
function pt(e) {
  if (dt(e.path)) {
    (function (e) {
      var t
      var /* [auto-meaningful-name] */t$iconFileList
      var /* [auto-meaningful-name] */e$path = e.path
      var o = null === (t = $_24_index.a.getPreviousDoc()) || undefined === t || null === (t$iconFileList = t.iconFileList) || undefined === t$iconFileList ? undefined : t$iconFileList[e$path[1]]
      if (o) {
        Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.mg(o.id, false))
      }
    })(e)
  }
}
function ft(e) {
  var /* [auto-meaningful-name] */e$path
  if (dt(e.path)) {
    (function (e) {
      var t = e.op
      var /* [auto-meaningful-name] */e$path1 = e.path
      var r = t.i
      var o = e$path1[1]
      Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.df([r], o))
      Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Zj())
      Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Uj())
      Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Qj())
    })(e)
  }
  if (3 === (e$path = e.path).length && "iconFileList" === e$path[0]) {
    (function (e) {
      var t
      var /* [auto-meaningful-name] */t$iconFileList
      var /* [auto-meaningful-name] */e$path1 = e.path
      var o = e.op
      var i = e$path1[1]
      var a = e$path1[2]
      var s = o.i
      var c = null === (t = $_24_index.a.getPreviousDoc()) || undefined === t || null === (t$iconFileList = t.iconFileList) || undefined === t$iconFileList ? undefined : t$iconFileList[i]
      if (c) {
        if ("cdnUrl" === a) {
          Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Pg(c.id, s))
        }
        if ("name" === a) {
          Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Oh(c.id, s))
        }
        Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Uj())
        Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Qj())
      }
    })(e)
  }
}
export { rt }
export { ot }
export { it }
export { st }
export { lt }
export { ut }
export { pt }
export { ft }
