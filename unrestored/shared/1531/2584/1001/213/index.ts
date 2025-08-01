"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.merge_deep = exports.debounce = exports.throttle = exports.is_workspace = exports.is_old_dropdown_option = exports.is_comment_theme = exports.is_field_mutation = exports.is_field_dropdown = exports.is_field_default_value = exports.is_field_text_input = exports.is_field_number = exports.is_workspace_comment = exports.is_block_group = exports.is_block_svg = exports.is_valid_color = exports.parse_attr_deep = exports.clone_deep = exports.obj_for_each = exports.unique_id = exports.is_array_like = exports.is_number = exports.is_nil = exports.is_array = exports.is_object = exports.is_func = exports.is_string = exports.BrowserFeature = void 0;
var r = (0, require("../93").__importStar)(require("./2107"));
var i = require("../../125/195/index");
function o(e) {
  return e && "[object Function]" === {}.toString.call(e);
}
function a(e) {
  var t = typeof e;
  return "object" == t && void 0 != e || "function" == t;
}
function s(e) {
  return Array.isArray(e);
}
exports.BrowserFeature = {
  TOUCH_ENABLED: "ontouchstart" in window || !!(document && document.documentElement && "ontouchstart" in document.documentElement) || !(!navigator || !navigator.maxTouchPoints && !navigator.msMaxTouchPoints)
};
exports.is_string = function (e) {
  return "string" == typeof e || e instanceof String;
};
exports.is_func = o;
exports.is_object = a;
exports.is_array = s;
exports.is_nil = function (e) {
  return void 0 === e || null === e;
};
exports.is_number = function (e) {
  return "number" == typeof e;
};
exports.is_array_like = function (e) {
  return null != e && function (e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= Number.MAX_SAFE_INTEGER;
  }(e.length) && !o(e);
};
var c = 0;
function u(e) {
  return r.default ? r.default(e) : r(e);
}
exports.unique_id = function (e) {
  var t = ++c;
  return e.toString() + t;
};
exports.obj_for_each = function (e, t) {
  if (!a(e)) {
    throw new Error("param is not a Object");
  }
  for (var n = Object.keys(e), r = 0; r < n.length; r++) {
    var i = n[r];
    t(e[i], i);
  }
};
exports.clone_deep = u;
exports.parse_attr_deep = function e(t, n) {
  if (!n) {
    return t;
  }
  var r = u(t);
  for (var i in r) {
    var c = n[i];
    if (void 0 != c) {
      var l = t[i];
      if (!a(l) || s(l) || o(l)) {
        r[i] = c;
      } else {
        r[i] = e(l, c);
      }
    }
  }
  return r;
};
exports.is_valid_color = function (e) {
  var t = document.createElement("span");
  t.style.color = e;
  return "" !== t.style.color;
};
exports.is_block_svg = function (e) {
  return !!e && typeof e.type && ("block" === e.element_type || "block_group" == e.element_type || "param" === e.element_type || "param_color" === e.element_type);
};
exports.is_block_group = function (e) {
  return !!e && typeof e.type && "block_group" == e.element_type;
};
exports.is_workspace_comment = function (e) {
  return !!e && "comment" === e.element_type;
};
exports.is_field_number = function (e) {
  return "FieldNumber" === (null === e || void 0 === e ? void 0 : e.field_type);
};
exports.is_field_text_input = function (e) {
  return "FieldTextInput" === e.field_type;
};
exports.is_field_default_value = function (e) {
  return "FieldDefaultValue" === e.field_type;
};
exports.is_field_dropdown = function (e) {
  return "FieldDropdown" === (null === e || void 0 === e ? void 0 : e.field_type);
};
exports.is_field_mutation = function (e) {
  return "FieldMutation" === (null === e || void 0 === e ? void 0 : e.field_type);
};
exports.is_comment_theme = function (e) {
  return e && Object.keys(i.THEME_COLOR_MAP).includes(e);
};
exports.is_old_dropdown_option = function (e) {
  return !!e && !e.type;
};
exports.is_workspace = function (e) {
  return !!e.add_flyout;
};
exports.throttle = function (e, t) {
  var n = Date.now();
  return function () {
    for (var r = [], i = 0; i < arguments.length; i++) {
      r[i] = arguments[i];
    }
    var o = Date.now();
    if (o - n >= t) {
      e.apply(void 0, r);
      n = o;
    }
  };
};
exports.debounce = function (e, t) {
  var n;
  return function () {
    for (var r = [], i = 0; i < arguments.length; i++) {
      r[i] = arguments[i];
    }
    if (void 0 !== n) {
      clearTimeout(n);
    }
    n = window.setTimeout(function () {
      e.apply(void 0, r);
    }, t);
  };
};
exports.merge_deep = function e(t, n) {
  var r = u(t);
  for (var i in n) if (null != n[i] && a(n[i])) {
    r[i] = e(r[i] || Object.create(null), n[i]);
  } else {
    r[i] = n[i];
  }
  return r;
};