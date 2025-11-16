/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：24__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */_RegeneratorRuntime from "regenerator-runtime"
import * as s from "../7"
import * as /* [auto-meaningful-name] */$$_27 from "../27"
import * as /* [auto-meaningful-name] */$$_40 from "../40"
import * as /* [auto-meaningful-name] */OtJson1 from "ot-json1"
import * as /* [auto-meaningful-name] */$$_15 from "../15"
import * as /* [auto-meaningful-name] */$$_48_66 from "../48/66"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as /* [auto-meaningful-name] */$$_389 from "../389"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_ui_language from "../../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../../src/shared/events/messages-wrapper"
import * as /* [auto-meaningful-name] */$$_102 from "../102"
import * as /* [auto-meaningful-name] */$$_18 from "../18"
import * as /* [auto-meaningful-name] */$$_10_index from "../10/index"
import * as /* [auto-meaningful-name] */$$_25_index from "../25/index"
import * as /* [auto-meaningful-name] */$_304 from "./304"
import * as /* [auto-meaningful-name] */$$_49 from "../49"
import * as /* [auto-meaningful-name] */$$_43 from "../43"
import * as /* [auto-meaningful-name] */$_244 from "./244"
var T = function () {
  function e() {
    $$_27.a(this, e)
    this._doc = null
    this._previousDoc = null
  }
  $$_40.a(e, [{
    key: "setDoc",
    value: function (e) {
      this._previousDoc = this._doc
      this._doc = e
    }
  }, {
    key: "getDoc",
    value: function () {
      if (this._doc) {
        return this._doc
      }
      console.error("error:the doc is null")
    }
  }, {
    key: "getPreviousDoc",
    value: function () {
      return this._previousDoc
    }
  }, {
    key: "setPreviousDoc",
    value: function (e) {
      return this._previousDoc = e
    }
  }, {
    key: "onGetSnapShort",
    value: function (e) {
      $$_43.f(Lodash.cloneDeep(e))
    }
  }, {
    key: "applyServerOp2IDE",
    value: function (e) {
      var t = this
      if ($_244.c(e)) {
        e.forEach(function (e) {
          t.handleServerOp2IDE(e)
        })
      } else {
        this.handleServerOp2IDE(e)
      }
    }
  }, {
    key: "handleServerOp2IDE",
    value: function (e) {
      var t = this
      var n = OtJson1.type.apply(this._doc, e)
      if (n && e) {
        this.setDoc(n)
        if ("blockly" !== e[0]) {
          var r = new Map()
          var o = $_244.b(e)
          var /* [auto-meaningful-name] */o$picks = o.picks
          var /* [auto-meaningful-name] */o$drops = o.drops
          o$picks.forEach(function (e) {
            if ($_244.f(e.op)) {
              r.set(e.op.p, $_304.a({
                path: ["$"].concat($$_25_index.a(e.path)),
                json: t._previousDoc
              })[0])
            }
            Object.entries($$_49.oTHelper).forEach(function (t) {
              var n = $$_10_index.a(t, 2)[1]
              if (n && n.serverOp && n.serverOp.pick) {
                n.serverOp.pick(e)
              }
            })
          })
          o$drops.forEach(function (e) {
            if ($_244.d(e.op)) {
              var t = r.get(e.op.d)
              e.op = {
                i: t
              }
            }
            Object.entries($$_49.oTHelper).forEach(function (t) {
              var n = $$_10_index.a(t, 2)[1]
              if (n && n.serverOp && n.serverOp.drop) {
                n.serverOp.drop(e)
              }
            })
          })
        } else {
          var /* [auto-meaningful-name] */$$_49$oTHelper$blink
          if (!(null === ($$_49$oTHelper$blink = $$_49.oTHelper.blink) || undefined === $$_49$oTHelper$blink)) {
            $$_49$oTHelper$blink.serverOp.applyServerOp(e)
          }
        }
      }
    }
  }, {
    key: "applyOpFromIDE",
    value: function (e) {
      var t = OtJson1.type.apply(this._doc, e)
      if (t) {
        this.setDoc(t)
      }
    }
  }])
  return e
}()
var /* [auto-meaningful-name] */Set_doc = "set_doc"
var /* [auto-meaningful-name] */Set_doc_ack = "set_doc_ack"
var A = "join"
var /* [auto-meaningful-name] */Join_ack = "join_ack"
var /* [auto-meaningful-name] */Operation = "operation"
var /* [auto-meaningful-name] */Operation_ack = "operation_ack"
var /* [auto-meaningful-name] */Operation_relay = "operation_relay"
var /* [auto-meaningful-name] */Get_online_user_list_ack = "get_online_user_list_ack"
var /* [auto-meaningful-name] */Svr_user_status_change = "svr_user_status_change"
var /* [auto-meaningful-name] */Svr_coll_user_change = "svr_coll_user_change"
var /* [auto-meaningful-name] */Svr_coll_user_eliminated = "svr_coll_user_eliminated"
var /* [auto-meaningful-name] */Svr_save_work = "svr_save_work"
var /* [auto-meaningful-name] */Svr_edit_permit_change = "svr_edit_permit_change"
var /* [auto-meaningful-name] */Set_doc_relay = "set_doc_relay"
var /* [auto-meaningful-name] */User_focus_on_pos = "user_focus_on_pos"
var /* [auto-meaningful-name] */User_focus_on_pos_ack = "user_focus_on_pos_ack"
var /* [auto-meaningful-name] */User_focus_on_pos_relay = "user_focus_on_pos_relay"
export { T as "24__part-1__T" }
export { Set_doc as "24__part-1__S" }
export { Set_doc_ack as "24__part-1__I" }
export { A as "24__part-1__A" }
export { Join_ack as "24__part-1__j" }
export { Operation as "24__part-1__N" }
export { Operation_ack as "24__part-1__R" }
export { Operation_relay as "24__part-1__k" }
export { Get_online_user_list_ack as "24__part-1__x" }
export { Svr_user_status_change as "24__part-1__D" }
export { Svr_coll_user_change as "24__part-1__M" }
export { Svr_coll_user_eliminated as "24__part-1__L" }
export { Svr_save_work as "24__part-1__P" }
export { Svr_edit_permit_change as "24__part-1__B" }
export { Set_doc_relay as "24__part-1__F" }
export { User_focus_on_pos as "24__part-1__G" }
export { User_focus_on_pos_ack as "24__part-1__U" }
export { User_focus_on_pos_relay as "24__part-1__W" }
