/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：26__part-6
 */

"use strict"

var We
import * as /* [auto-meaningful-name] */$$_47 from "../47"
import * as H from "../6"
import * as p from "../5"
import * as l from "../9"
import * as /* [auto-meaningful-name] */$$_17_index from "../17/index"
import * as /* [auto-meaningful-name] */$$_11 from "../11"
!function (e) {
  e.PRIMITIVE = "PRIMITIVE"
  e.ARRAY = "ARRAY"
  e.STORAGE = "STORAGE"
  e.DOC_KEYS = "DOC_KEYS"
  e.BROADCAST = "BROADCAST"
  e.SCREEN = "SCREEN"
  e.IMAGE_LIBRARY = "IMAGE_LIBRARY"
  e.ICON_LIBRARY = "ICON_LIBRARY"
  e.SOUND_LIBRARY = "SOUND_LIBRARY"
  e.CLOUD_DATABASE = "CLOUD_DATABASE"
  e.CLOUD_DOC_KEYS = "CLOUD_DOC_KEYS"
  e.DATA_SOURCE = "DATA_SOURCE"
  e.GRID = "DATABASE_WIDGET"
  e.COLUMNS = "COLUMNS"
  e.CLOUD_DB = "CLOUD_DB"
  e.TABLE_DATA_COLUMN = "TABLE_DATA_COLUMN"
  e.OBJECT = "OBJECT"
  e.CLOUD_TABLE_COLUMNS = "CLOUD_TABLE_COLUMNS"
  e.CLOUD_DICT_KEYS = "CLOUD_DICT_KEYS"
}(We || (We = {}))
var Ve = function () {
  var e
  return H.a((e = {}, $$_11.a(e, We.PRIMITIVE, {
    blocksList: ["variables_get", "variables_set", "variables_change"],
    fieldName: "VAR"
  }), $$_11.a(e, We.ARRAY, {
    blocksList: ["array_get"],
    fieldName: "ARRAY"
  }), $$_11.a(e, We.OBJECT, {
    blocksList: ["object_get"],
    fieldName: "OBJECT"
  }), $$_11.a(e, We.BROADCAST, {
    blocksList: ["broadcast_input"],
    fieldName: "BROADCAST"
  }), $$_11.a(e, We.DOC_KEYS, {
    blocksList: ["local_document_all_key_field_dropdown", "local_document_set_field_item", "local_document_remove_field_item", "local_document_get_field_item", "local_document_check_if_field_key_exists", "new_local_document_all_key_field_dropdown", "new_local_document_set_field_item", "new_local_document_remove_field_item", "new_local_document_get_field_item", "new_local_document_check_if_field_key_exists"],
    fieldName: "DOC_KEYS"
  }), $$_11.a(e, We.IMAGE_LIBRARY, {
    blocksList: ["image_file_list_dropdown"],
    fieldName: "IMAGE_FILE_ID"
  }), $$_11.a(e, We.ICON_LIBRARY, {
    blocksList: ["icon_file_list_dropdown"],
    fieldName: "ICON_FILE_ID"
  }), $$_11.a(e, We.SOUND_LIBRARY, {
    blocksList: ["audio_sound_file_list_dropdown"],
    fieldName: "SOUND_FILE_ID"
  }), $$_11.a(e, We.CLOUD_DOC_KEYS, {
    blocksList: ["cloud_document_all_key_field_dropdown"],
    fieldName: "DOC_KEYS"
  }), $$_11.a(e, We.SCREEN, {
    blocksList: ["screen_set_background_color", "screen_set_background_image", "screen_navigate_to", "screen_navigate_to_by_value", "new_screen_navigate_to", "new_screen_navigate_to_by_value", "screen_get_size", "screen_get_color", "screen_get_background_image", "screen_check_if_pressed"],
    fieldName: "SCREEN_ID"
  }), $$_11.a(e, We.DATA_SOURCE, {
    blocksList: ["data_source_get"],
    fieldName: "DATA_SOURCE"
  }), $$_11.a(e, We.GRID, {
    blocksList: ["data_source_get"],
    fieldName: "DATA_SOURCE"
  }), $$_11.a(e, We.COLUMNS, {
    blocksList: ["cloudDB_all_column_dropdown"],
    fieldName: "COLUMNS"
  }), $$_11.a(e, We.CLOUD_DB, {
    blocksList: ["cloudDB_insert", "cloudDB_delete", "cloudDB_update", "cloudDB_query_by_column", "cloudDB_query_by_count"],
    fieldName: "WIDGET_ID"
  }), $$_11.a(e, We.TABLE_DATA_COLUMN, {
    blocksList: ["table_data_column_field_dropdown"],
    fieldName: "COLUMN"
  }), $$_11.a(e, We.CLOUD_DICT_KEYS, {
    blocksList: ["cloud_dict_all_key_dropdown"],
    fieldName: "KEYS"
  }), $$_11.a(e, We.CLOUD_TABLE_COLUMNS, {
    blocksList: ["cloudTable_all_column_dropdown"],
    fieldName: "COLUMNS"
  }), e), l.N())
}
function ze(e, t, n) {
  var r
  var o = Ve()
  var /* [auto-meaningful-name] */oE$blocksList = o[e].blocksList
  var /* [auto-meaningful-name] */oE$fieldName = o[e].fieldName
  if ($$_17_index.Blink.mainWorkspace) {
    $$_17_index.Blink.mainWorkspace.get_all_blocks().forEach(function (e) {
      if (oE$blocksList.includes(e.type) && e.inputList.length) {
        var r
        var o = e.get_field(oE$fieldName)
        if (!o || (null === (r = o.get_value()) || undefined === r ? undefined : r.toString()) !== t) {
          return
        }
        if (o.get_text() === n) {
          return
        }
        o.set_text(n)
      }
    })
    if (!(null === (r = $$_17_index.Blink.mainWorkspace.get_toolbox()) || undefined === r)) {
      r.refresh_selection()
    }
  }
}
function Ye(e, t) {
  var n
  var r = Ve()
  var /* [auto-meaningful-name] */rE$blocksList = r[e].blocksList
  var /* [auto-meaningful-name] */rE$fieldName = r[e].fieldName
  if ($$_17_index.Blink.mainWorkspace) {
    $$_17_index.Blink.mainWorkspace.get_all_blocks().forEach(function (e) {
      if (rE$blocksList.includes(e.type) && e.inputList.length) {
        var n
        var r = e.get_field(rE$fieldName)
        if (!r || (null === (n = r.get_value()) || undefined === n ? undefined : n.toString()) !== t) {
          return
        }
        if (!(null === r || undefined === r)) {
          r.set_value(l.h)
        }
        if (!(null === r || undefined === r)) {
          r.set_text(l.g)
        }
      }
    })
    if (!(null === (n = $$_17_index.Blink.mainWorkspace.get_toolbox()) || undefined === n)) {
      n.refresh_selection()
    }
  }
}
function Ke() {
  var e
  if ($$_17_index.Blink.mainWorkspace) {
    $$_17_index.Blink.mainWorkspace.get_all_blocks().forEach(function (e) {
      var /* [auto-meaningful-name] */e$parent_block
      if (e.inputList.length) {
        !function (e) {
          var t = e.get_field("BUMP_TYPE")
          if (t) {
            var n = e.get_field_value("BUMP_TYPE")
            if ((null === n || undefined === n ? undefined : n.startsWith("ACTOR_")) || (null === n || undefined === n ? undefined : n.startsWith("BRUSH_"))) {
              var r = l.Bb(n)
              if (r) {
                t.set_text(r.title)
              } else {
                t.set_value(l.h)
                t.set_text(l.g)
              }
            }
          }
        }(e);
        (function (e) {
          var t = e.get_field("TARGET")
          if (t) {
            var n = e.get_field_value("TARGET")
            if ((null === n || undefined === n ? undefined : n.startsWith("ACTOR_")) || (null === n || undefined === n ? undefined : n.startsWith("BRUSH_"))) {
              var r = l.Bb(n)
              if (r) {
                t.set_text(r.title)
              } else {
                t.set_value(l.h)
                t.set_text(l.g)
              }
            }
          }
        })(e)
        var n = e.get_field("ACTOR_ACTION_ID") || e.get_shadow_field("ACTOR_ACTION_WRAPPER", "ACTOR_ACTION_ID")
        if (n) {
          var r
          var o
          var i
          var a = e.get_field("ACTOR_STYLE_ID") || e.get_shadow_field("ACTOR_STYLE_WRAPPER", "ACTOR_STYLE_ID")
          var s = e.get_field("WIDGET_ID") || (null === (e$parent_block = e.parent_block) || undefined === e$parent_block ? undefined : e$parent_block.get_field("WIDGET_ID"))
          var c = null === s || undefined === s ? undefined : s.get_value()
          if (!c || undefined === (o = l.Bb(c)) || (r = n.get_value()) === l.h || undefined === (i = o.attributes.actionList.find(function (e) {
            return e.id === r
          }))) {
            n.set_value(l.h)
            n.set_text(l.g)
            if (!(null === a || undefined === a)) {
              a.set_value(l.h)
            }
            if (!(null === a || undefined === a)) {
              a.set_text(l.g)
            }
            return void (o || (null === s || undefined === s || s.set_value(l.h), null === s || undefined === s || s.set_text(l.g)))
          }
          n.set_value(i.id)
          n.set_text(i.name)
          if (a) {
            var u = a.get_value()
            var d = i.styleList.findIndex(function (e) {
              return e.id === u
            })
            var p = -1 === d ? undefined : i.styleList[d]
            a.set_value((null === p || undefined === p ? undefined : p.id) || l.h)
          }
        }
      }
    })
    if (!(null === (e = $$_17_index.Blink.mainWorkspace.get_toolbox()) || undefined === e)) {
      e.refresh_selection()
    }
  }
}
function qe(e, t, n) {
  if (e && n) {
    ze(n, e, t)
    if (!(n !== p.a && n !== p.c)) {
      Ke()
    }
  }
}
function Xe(e, t) {
  ze(We.SCREEN, e, t)
}
function Qe(e, t, n) {
  var /* [auto-meaningful-name] */VeWe$CLOUD_DOC_KEYS$blocksList = Ve()[We.CLOUD_DOC_KEYS].blocksList
  $$_17_index.Blink.mainWorkspace.get_all_blocks().forEach(function (o) {
    if (VeWe$CLOUD_DOC_KEYS$blocksList.includes(o.type)) {
      var i
      var /* [auto-meaningful-name] */o$parent_block = o.parent_block
      if (o$parent_block && o$parent_block.get_field_value("WIDGET_ID") === e) {
        if (o.get_field_value("DOC_KEYS") === t) {
          if (!(null === (i = o.get_field("DOC_KEYS")) || undefined === i)) {
            i.set_value(n)
          }
        }
      }
    }
  })
}
function Ze(e) {
  var t = Ve()
  var n = t.LIST_VIEWER_WIDGET.blocksList.concat(t.NEW_LIST_VIEWER_WIDGET.blocksList)
  if ($$_17_index.Blink.mainWorkspace) {
    $$_17_index.Blink.mainWorkspace.get_all_blocks().forEach(function (t) {
      if (n.includes(t.type) && t.inputList.length) {
        var r
        var o = t.get_field("WIDGET_ID")
        if (!o || (null === (r = o.get_value()) || undefined === r ? undefined : r.toString()) !== e) {
          return
        }
        var i = t.get_field("SLOT_WIDGET")
        if (!(null === i || undefined === i)) {
          i.set_value(l.h)
        }
        if (!(null === i || undefined === i)) {
          i.set_text(l.g)
        }
        var a = t.get_field("ATTRIBUTE")
        if (!(null === a || undefined === a)) {
          a.set_value(l.h)
        }
        if (!(null === a || undefined === a)) {
          a.set_text(l.g)
        }
      }
    })
  }
}
function Je(e, t) {
  var /* [auto-meaningful-name] */VeWe$DOC_KEYS$blocksList = Ve()[We.DOC_KEYS].blocksList
  $$_17_index.Blink.mainWorkspace.get_all_blocks().forEach(function (r) {
    if (VeWe$DOC_KEYS$blocksList.includes(r.type)) {
      var /* [auto-meaningful-name] */r$parent_block = r.parent_block
      if (r$parent_block && r$parent_block.get_field_value("WIDGET_ID") === e) {
        var i
        var a = r.get_field("DOC_KEYS")
        var s = $$_47.a(t)
        try {
          for (s.s(); !(i = s.n()).done;) {
            var /* [auto-meaningful-name] */i$value = i.value
            if (i$value.id === (null === a || undefined === a ? undefined : a.get_value())) {
              a.set_text(i$value.key)
            }
          }
        } catch (l) {
          s.e(l)
        } finally {
          s.f()
        }
      }
    }
  })
}
function $e(e, t) {
  var /* [auto-meaningful-name] */VeWe$TABLE_DATA_COLUMN$blocksList = Ve()[We.TABLE_DATA_COLUMN].blocksList
  $$_17_index.Blink.mainWorkspace.get_all_blocks().forEach(function (r) {
    if (VeWe$TABLE_DATA_COLUMN$blocksList.includes(r.type)) {
      var /* [auto-meaningful-name] */r$parent_block = r.parent_block
      if (r$parent_block && r$parent_block.get_field_value("WIDGET_ID") === e) {
        var i = r.get_field("COLUMN")
        var /* [auto-meaningful-name] */t$header = t.header
        for (var s in t$header) if (s === (null === i || undefined === i ? undefined : i.get_value())) {
          var c = t$header[s]
          i.set_text(c.field)
        }
      }
    }
  })
}
function et(e, t, n) {
  var /* [auto-meaningful-name] */VeWe$CLOUD_DICT_KEYS$blocksList = Ve()[We.CLOUD_DICT_KEYS].blocksList
  $$_17_index.Blink.mainWorkspace.get_all_blocks().forEach(function (o) {
    if (VeWe$CLOUD_DICT_KEYS$blocksList.includes(o.type)) {
      var /* [auto-meaningful-name] */o$parent_block = o.parent_block
      var a = null === o$parent_block || undefined === o$parent_block ? undefined : o$parent_block.get_field_value("WIDGET_ID")
      if (a) {
        var s = l.Z(a)
        if (e === s && o.get_field_value("KEYS") === t) {
          var c = o.get_field("KEYS")
          if (!(null === c || undefined === c)) {
            c.set_value(n)
          }
          if (!(null === c || undefined === c)) {
            c.set_text(n)
          }
        }
      }
    }
  })
}
function tt(e) {
  var /* [auto-meaningful-name] */VeWe$CLOUD_DICT_KEYS$blocksList = Ve()[We.CLOUD_DICT_KEYS].blocksList
  $$_17_index.Blink.mainWorkspace.get_all_blocks().forEach(function (n) {
    if (VeWe$CLOUD_DICT_KEYS$blocksList.includes(n.type)) {
      var /* [auto-meaningful-name] */n$parent_block = n.parent_block
      if (n$parent_block && n$parent_block.get_field_value("WIDGET_ID") === e) {
        var o = n.get_field("KEYS")
        if (!(null === o || undefined === o)) {
          o.set_value(l.h)
        }
        if (!(null === o || undefined === o)) {
          o.set_text(l.g)
        }
      }
    }
  })
}
function nt(e, t, n) {
  var /* [auto-meaningful-name] */VeWe$CLOUD_TABLE_COLUMNS$blocksList = Ve()[We.CLOUD_TABLE_COLUMNS].blocksList
  $$_17_index.Blink.mainWorkspace.get_all_blocks().forEach(function (o) {
    if (VeWe$CLOUD_TABLE_COLUMNS$blocksList.includes(o.type)) {
      var /* [auto-meaningful-name] */o$parent_block = o.parent_block
      var a = null === o$parent_block || undefined === o$parent_block ? undefined : o$parent_block.get_field_value("WIDGET_ID")
      if (a) {
        var s = l.db(a)
        if (e === s && o.get_field_value("COLUMNS") === t) {
          var c = o.get_field("COLUMNS")
          if (!(null === c || undefined === c)) {
            c.set_value(n)
          }
          if (!(null === c || undefined === c)) {
            c.set_text(n)
          }
        }
      }
    }
  })
}
function rt(e) {
  var /* [auto-meaningful-name] */VeWe$CLOUD_TABLE_COLUMNS$blocksList = Ve()[We.CLOUD_TABLE_COLUMNS].blocksList
  $$_17_index.Blink.mainWorkspace.get_all_blocks().forEach(function (n) {
    if (VeWe$CLOUD_TABLE_COLUMNS$blocksList.includes(n.type)) {
      var /* [auto-meaningful-name] */n$parent_block = n.parent_block
      if (n$parent_block && n$parent_block.get_field_value("WIDGET_ID") === e) {
        var o = n.get_field("COLUMNS")
        if (!(null === o || undefined === o)) {
          o.set_value(l.h)
        }
        if (!(null === o || undefined === o)) {
          o.set_text(l.g)
        }
      }
    }
  })
}
export { We as "26__part-6__We" }
export { ze as "26__part-6__ze" }
export { Ye as "26__part-6__Ye" }
export { Ke as "26__part-6__Ke" }
export { qe as "26__part-6__qe" }
export { Xe as "26__part-6__Xe" }
export { Qe as "26__part-6__Qe" }
export { Ze as "26__part-6__Ze" }
export { Je as "26__part-6__Je" }
export { $e as "26__part-6__$e" }
export { et as "26__part-6__et" }
export { tt as "26__part-6__tt" }
export { nt as "26__part-6__nt" }
export { rt as "26__part-6__rt" }
