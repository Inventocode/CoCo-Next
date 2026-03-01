/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-3
 */

"use strict"

import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"./18"
import * as /* [auto-meaningful-name] */Module_454 from /* 454 */"./454/index"
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"./27"
var Q = new function e() {
  var t = this
  Module_27.a(this, e)
  this._store = undefined
  this.handle = function (e) {
    var n = t._store[e.data.type]
    if (n) {
      n.forEach(function (t) {
        return t.call(null, e.data)
      })
    }
  }
  this.add = function (e, n) {
    t._store[e] = t._store[e] ? t._store[e].concat(n) : [n]
  }
  this.remove = function (e, n) {
    var r = t._store[e]
    if (r) {
      if (n) {
        r.splice(r.indexOf(n), 1)
      } else {
        delete t._store[e]
      }
    }
  }
  this._store = {}
}()
export { Q }
