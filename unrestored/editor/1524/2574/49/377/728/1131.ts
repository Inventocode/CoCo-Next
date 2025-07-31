"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.analyze_path = exports.decompose_and_sort_op = exports.filter_events = void 0;
var r = require("../../../1000/93");
var i = (0, r.__importStar)(require("../../../17/533"));
var o = (0, r.__importStar)(require("./1130"));
function a(e) {
  var t = e[e.length - 2];
  var n = e[e.length - 3];
  if ("field_extra_attr" === n) {
    var r = e.slice(-5);
    return o.is_path_5_array(r) ? {
      target_type: r[o.PathParams5.BLOCK],
      target_id: r[o.PathParams5.ID],
      property: r[o.PathParams5.PROPERTY],
      property_name: r[o.PathParams5.PROPERTY_NAME],
      field_attr: r[o.PathParams5.FIELD_ATTR]
    } : void console.error("Invalid op path: " + e);
  }
  if (t in o.Field_Type) {
    var i = e.slice(-4);
    return o.is_path_4_array(i) ? {
      target_type: i[o.PathParams4.BLOCK],
      target_id: i[o.PathParams4.ID],
      property: i[o.PathParams4.PROPERTY],
      property_name: i[o.PathParams4.PROPERTY_NAME]
    } : void console.error("Invalid op path: " + e);
  }
  if (n in o.Target_Type) {
    var a = e.slice(-3);
    return o.is_path_3_array(a) ? {
      target_type: a[o.PathParams3.TARGET],
      target_id: a[o.PathParams3.ID],
      property: a[o.PathParams3.PROPERTY]
    } : void console.error("Invalid op path: " + e);
  }
  if (t in o.Target_Type) {
    var s = e.slice(-2);
    return o.is_path_2_array(s) ? {
      target_type: s[o.PathParams2.TARGET],
      target_id: s[o.PathParams2.ID]
    } : void console.error("Invalid op path: " + e);
  }
}
exports.filter_events = function (e) {
  if (0 === e.length) {
    return [];
  }
  var t = [];
  e.forEach(function (e) {
    if (!(e.type !== i.BlockEventType.CREATE && e.type !== i.BlockEventType.DELETE && e.type !== i.BlockEventType.CHANGE && e.type !== i.BlockEventType.MOVE)) {
      t.push(e);
    }
  });
  for (var n = new Map(), r = 0; r <= t.length - 1;) {
    var o = t[r];
    if (o.type !== i.BlockEventType.CREATE) {
      if (o.type !== i.BlockEventType.DELETE) {
        r++;
      } else {
        s = o.get_block_id();
        var a = n.get(s);
        if (void 0 !== a) {
          t.splice(a, r - a + 1);
          r = a;
          n.set(s, void 0);
          continue;
        }
        r++;
      }
    } else {
      var s = o.get_block_id();
      if (void 0 !== n.get(s)) {
        console.error("create the same block " + s + " multi times.");
        return [];
      }
      n.set(s, r);
      r++;
    }
  }
  return t;
};
exports.decompose_and_sort_op = function (e) {
  var t = function (e) {
    for (var t = {
        pick_ops: [],
        drop_ops: [],
        edit_ops: []
      }, n = [{
        path: [],
        operation: e
      }], r = []; 0 !== n.length && null != n[0].operation;) {
      for (var i = 0; i < n.length; i++) {
        var o = n[i];
        var a = o.path.slice(0);
        var s = o.operation;
        if (!s) {
          return;
        }
        for (var c = function (e) {
            var n = s[e];
            if ("string" === typeof n || "number" === typeof n) {
              a.push(n);
              return "continue";
            }
            if (Array.isArray(n)) {
              r.push({
                path: a.slice(0),
                operation: n
              });
              return "continue";
            }
            if ("object" === typeof n) {
              var i = a.slice(0);
              Object.keys(n).forEach(function (e) {
                var r;
                var o;
                var a;
                if ("p" !== e && "r" !== e) {
                  if ("i" !== e && "d" !== e) {
                    if (!("es" !== e && "ena" !== e)) {
                      t.edit_ops.push({
                        path: i.slice(0),
                        operation: (a = {}, a[e] = n[e], a)
                      });
                    }
                  } else {
                    t.drop_ops.push({
                      path: i.slice(0),
                      operation: (o = {}, o[e] = n[e], o)
                    });
                  }
                } else {
                  t.pick_ops.push({
                    path: i.slice(0),
                    operation: (r = {}, r[e] = n[e], r)
                  });
                }
              });
            }
          }, u = 0; u < s.length; u++) {
          c(u);
        }
        a = [];
      }
      n = r;
      r = [];
    }
    return t;
  }(e);
  return t ? function (e) {
    var t = function (e) {
      var t = [];
      var n = [];
      var r = [];
      e.forEach(function (e) {
        var i = a(e.path);
        if (i) {
          switch (i.target_type) {
            case "blocks":
              t.push(e);
              break;
            case "connections":
              r.push(e);
              break;
            case "comments":
              n.push(e);
          }
        }
      });
      return {
        block_ops: t,
        comment_ops: n,
        conn_ops: r
      };
    };
    var n = t(e.pick_ops);
    var r = n.conn_ops.concat(n.block_ops).concat(n.comment_ops);
    var i = t(e.drop_ops);
    return {
      pick_ops: r,
      drop_ops: i.block_ops.concat(i.conn_ops).concat(i.comment_ops),
      edit_ops: e.edit_ops
    };
  }(t) : (console.error(e + " cannot be decomposed"), {
    pick_ops: [],
    drop_ops: [],
    edit_ops: []
  });
};
exports.analyze_path = function (e, t) {
  var n = void 0;
  var r = a(t);
  if (r) {
    var i = r.target_type;
    if ("pick" === e) {
      if (o.is_path_2(r)) {
        switch (i) {
          case "blocks":
            n = o.EventType.DELETE_BLOCK;
            break;
          case "comments":
            n = o.EventType.DELETE_COMMENT;
        }
      }
      if (o.is_path_3(r) && "connections" === i) {
        n = o.EventType.DISCONNECT;
      }
      if (o.is_path_4(r) && "blocks" === i && "shadows" === r.property) {
        n = o.EventType.REMOVE_SHADOW_INPUT;
      }
    }
    if ("drop" === e) {
      if (o.is_path_2(r)) {
        switch (i) {
          case "blocks":
            n = o.EventType.CREATE_BLOCK;
            break;
          case "comments":
            n = o.EventType.CREATE_COMMENT;
        }
      }
      if (o.is_path_3(r)) {
        switch (i) {
          case "blocks":
            switch (r.property) {
              case "location":
                n = o.EventType.MOVE_BLOCK;
                break;
              case "collapsed":
                n = o.EventType.COLLAPSE_BLOCK;
                break;
              case "disabled":
                n = o.EventType.DISABLE_BLOCK;
                break;
              case "visible":
                n = o.EventType.SET_BLOCK_VISIBILITY;
            }
            break;
          case "connections":
            n = o.EventType.CONNECT;
            break;
          case "comments":
            switch (r.property) {
              case "location":
                n = o.EventType.MOVE_COMMENT;
                break;
              case "text":
                n = o.EventType.EDIT_COMMENT;
                break;
              case "pinned":
                n = o.EventType.COLLAPSE_COMMENT;
                break;
              case "color_theme":
                n = o.EventType.CHANGE_COMMENT_COLOR;
                break;
              case "size":
                n = o.EventType.RESIZE_COMMENT;
            }
        }
      }
      if (o.is_path_4(r)) {
        switch (r.property) {
          case "fields":
            n = o.EventType.EDIT_BLOCK_FIELD;
            break;
          case "shadows":
            n = o.EventType.APPEND_SHADOW_INPUT;
        }
      }
      if (o.is_path_5(r)) {
        n = o.EventType.EDIT_FIELD_EXTRA_ATTR;
      }
    }
    if (void 0 !== n) {
      return {
        event_type: n,
        normalized_path: r
      };
    }
  } else {
    console.warn("path " + t + " cannot be normalized");
  }
};