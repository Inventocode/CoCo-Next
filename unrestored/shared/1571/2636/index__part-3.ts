/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-3
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_ui_components_index from "../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as K from "./18"
import * as /* [auto-meaningful-name] */$_454 from "./454"
import * as X from "./27"
var Q = new function e() {
  var t = this
  X.a(this, e)
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
