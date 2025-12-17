/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-186
 */

"use strict"

import { bj } from "./index__part-182"
import { Tj } from "./index__part-183"
import { Dj } from "./index__part-185"
import * as /* [auto-meaningful-name] */$_135 from "./135"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as Tn from "./68"
import * as /* [auto-meaningful-name] */$_133 from "./133"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/events/main/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as /* [auto-meaningful-name] */$_25_index from "./25/index"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_164 from "./164"
import /* [auto-meaningful-name] */_$_ from "./164"
var Pj = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$mode = e.mode
  var /* [auto-meaningful-name] */e$searchName = e.searchName
  var /* [auto-meaningful-name] */e$selectedIds = e.selectedIds
  var /* [auto-meaningful-name] */e$canShowMultiply = e.canShowMultiply
  var /* [auto-meaningful-name] */e$selectHandler = e.selectHandler
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var s = $_16_index.d()
  var c = React.useState({})
  var l = $_10_index.a(c, 2)[1]
  var u = React.useCallback(function () {
    return l({})
  }, [])
  var d = _React.useState("")
  var p = $_10_index.a(d, 2)
  var m = p[0]
  var g = p[1]
  var v = $_25_index.a(Et.jb()).reverse()
  var b = $_16_index.e(function (e) {
    return e.resource.iconFileList.reverse()
  })
  var y = $_16_index.e(function (e) {
    return e.resource.soundFileList.reverse()
  })
  var E = function (e) {
    g(e)
  }
  return React.createElement("div", {
    className: _$_.LibraryMain
  }, React.createElement($_13_index.B, {
    className: _$_.uploadBtn,
    onChange: function (e) {
      if (e) {
        if (e$mode !== Tn.c.ImageLibrary) {
          if (e$mode !== Tn.c.SoundLibrary) {
            if (!(e$mode !== Tn.c.IconLibrary)) {
              s($$_$$_$$_$$_src_shared_events_messagesWrapper.rf(e))
            }
          } else {
            s($$_$$_$$_$$_src_shared_events_messagesWrapper.wf(e))
          }
        } else {
          s($$_$$_$$_$$_src_shared_events_messagesWrapper.Zf(e, function () {
            u()
          }, true))
        }
      }
    },
    multiple: true,
    accept: e$mode === Tn.c.ImageLibrary ? $_133.f : e$mode === Tn.c.SoundLibrary ? $_135.h : e$mode === Tn.c.IconLibrary ? "image/svg+xml" : ""
  }, React.createElement($_13_index.j, {
    type: "icon-add2"
  }), React.createElement("span", null, $_710_index$a$formatMessage({
    id: "Resource.upload"
  }))), function () {
    if (e$mode === Tn.c.ImageLibrary) {
      var e = Lodash.cloneDeep(v)
      if (e$searchName) {
        e = e.filter(function (e) {
          return e.id.includes(e$searchName)
        })
      }
      return (e = e.filter(function (e) {
        return !e.groupId
      })).map(function (e) {
        return React.createElement(Dj, {
          key: e.id,
          id: e.id,
          cdnUrl: e.cdnUrl,
          source: e.source,
          extension: e.extension,
          md5: e.md5,
          urls: e.urls,
          canShowMultiply: e$canShowMultiply,
          isSelect: e$selectedIds.includes(e.id),
          selectHandler: e$selectHandler
        })
      })
    }
    if (e$mode === Tn.c.SoundLibrary) {
      var a = Lodash.cloneDeep(y)
      if (e$searchName) {
        a = a.filter(function (e) {
          return e.name.includes(e$searchName)
        })
      }
      return a.map(function (e) {
        return React.createElement(Tj, {
          key: e.id,
          id: e.id,
          name: e.name,
          cdnUrl: e.cdnUrl,
          source: e.source,
          duration: e.duration,
          isSelect: e$selectedIds.includes(e.id),
          isPlaying: e.id === m,
          selectHandler: e$selectHandler,
          setSoundPlayingId: E
        })
      })
    }
    if (e$mode === Tn.c.IconLibrary) {
      var s = Lodash.cloneDeep(b)
      if (e$searchName) {
        s = s.filter(function (e) {
          return e.name.includes(e$searchName)
        })
      }
      return s.map(function (e) {
        return React.createElement(bj, {
          key: e.id,
          id: e.id,
          md5: e.md5,
          name: e.name,
          source: e.source,
          cdnUrl: e.cdnUrl,
          isSelect: e$selectedIds.includes(e.id),
          selectHandler: e$selectHandler
        })
      })
    }
    return ""
  }())
})
export { Pj }
