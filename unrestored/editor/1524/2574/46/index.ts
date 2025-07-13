"use strict";

export { d as c };
export { p as f };
export { _ as e };
export { v as a };
export { b };
export { y as d };
import * as r from "../27";
import * as o from "../40";
var i = function () {
  function e() {
    Object(r.a)(this, e);
    this.profileMap = new Map();
  }
  Object(o.a)(e, [{
    key: "insertBlockProfile",
    value: function (e, t) {
      this.profileMap.set(e, t);
    }
  }, {
    key: "getBlockProfileList",
    value: function () {
      var e = [];
      this.profileMap.forEach(function (t) {
        return e.push(t);
      });
      return e;
    }
  }]);
  return e;
}();
import * as a from "./609/index";
import * as s from "../4/index";
var c = function () {
  function e() {
    var t = this;
    Object(r.a)(this, e);
    this.dynamicValueMap = new Map();
    this.generator = new a.JsonJavaScriptGenerator();
    this.getFieldValue = this.generator.get_field_value.bind(this.generator);
    this.quote = this.generator.quote.bind(this.generator);
    this.registerDelegate = this.generator.register.bind(this.generator);
    this.insertBlockSnippetGenerator = function (e, n) {
      t.registerDelegate(e, function (e, r) {
        var o = n(e, r);
        if ("string" === typeof o && o.trim().length > 0) {
          var i = e.blocks[r];
          var a = t.getFieldValue(i, "WIDGET_ID");
          var c = {
            blockId: i.id,
            blockType: i.type
          };
          if (a) {
            c.widgetId = a;
          }
          return Object(s.h)(o, c);
        }
        return o;
      });
    };
    this.statementToCode = this.generator.statement_to_code.bind(this.generator);
    this.valueToCode = this.generator.value_to_code.bind(this.generator);
    this.workspaceToCode = this.generator.workspace_to_code.bind(this.generator);
    this.ORDER_ATOMIC = this.generator.ORDER_ATOMIC;
    this.ORDER_NEW = this.generator.ORDER_NEW;
    this.ORDER_MEMBER = this.generator.ORDER_MEMBER;
    this.ORDER_FUNCTION_CALL = this.generator.ORDER_FUNCTION_CALL;
    this.ORDER_INCREMENT = this.generator.ORDER_INCREMENT;
    this.ORDER_DECREMENT = this.generator.ORDER_DECREMENT;
    this.ORDER_BITWISE_NOT = this.generator.ORDER_BITWISE_NOT;
    this.ORDER_UNARY_PLUS = this.generator.ORDER_UNARY_PLUS;
    this.ORDER_UNARY_NEGATION = this.generator.ORDER_UNARY_NEGATION;
    this.ORDER_LOGICAL_NOT = this.generator.ORDER_LOGICAL_NOT;
    this.ORDER_TYPEOF = this.generator.ORDER_TYPEOF;
    this.ORDER_VOID = this.generator.ORDER_VOID;
    this.ORDER_DELETE = this.generator.ORDER_DELETE;
    this.ORDER_DIVISION = this.generator.ORDER_DIVISION;
    this.ORDER_MULTIPLICATION = this.generator.ORDER_MULTIPLICATION;
    this.ORDER_MODULUS = this.generator.ORDER_MODULUS;
    this.ORDER_SUBTRACTION = this.generator.ORDER_SUBTRACTION;
    this.ORDER_ADDITION = this.generator.ORDER_ADDITION;
    this.ORDER_BITWISE_SHIFT = this.generator.ORDER_BITWISE_SHIFT;
    this.ORDER_RELATIONAL = this.generator.ORDER_RELATIONAL;
    this.ORDER_IN = this.generator.ORDER_IN;
    this.ORDER_INSTANCEOF = this.generator.ORDER_INSTANCEOF;
    this.ORDER_EQUALITY = this.generator.ORDER_EQUALITY;
    this.ORDER_BITWISE_AND = this.generator.ORDER_BITWISE_AND;
    this.ORDER_BITWISE_XOR = this.generator.ORDER_BITWISE_XOR;
    this.ORDER_BITWISE_OR = this.generator.ORDER_BITWISE_OR;
    this.ORDER_LOGICAL_AND = this.generator.ORDER_LOGICAL_AND;
    this.ORDER_LOGICAL_OR = this.generator.ORDER_LOGICAL_OR;
    this.ORDER_CONDITIONAL = this.generator.ORDER_CONDITIONAL;
    this.ORDER_ASSIGNMENT = this.generator.ORDER_ASSIGNMENT;
    this.ORDER_COMMA = this.generator.ORDER_COMMA;
    this.ORDER_NONE = this.generator.ORDER_NONE;
    Object(a.load_basic_blocks_json_js_generators)(this.generator);
  }
  Object(o.a)(e, [{
    key: "getDynamicValue",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      var n = this.dynamicValueMap.get(e);
      return t ? n || "" : n || e;
    }
  }, {
    key: "setDynamicValue",
    value: function (e, t) {
      this.dynamicValueMap.set(e, t);
    }
  }, {
    key: "deleteDynamicValue",
    value: function (e) {
      this.dynamicValueMap.delete(e);
    }
  }, {
    key: "clearAllDynamicValues",
    value: function () {
      this.dynamicValueMap.clear();
    }
  }]);
  return e;
}();
var l = function () {
  function e() {
    Object(r.a)(this, e);
    this.xmlMap = new Map();
  }
  Object(o.a)(e, [{
    key: "insertBlockXML",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      this.xmlMap.set(e, {
        xml: t,
        notCached: n
      });
    }
  }, {
    key: "getBlockXMLRecord",
    value: function () {
      var e = {};
      this.xmlMap.forEach(function (t, n) {
        var r = t.xml;
        var o = t.notCached;
        var i = "";
        if ("string" === typeof r) {
          i = '<block type="'.concat(n, '" uncache="').concat(o, '">').concat(r, "</block>");
        } else {
          r.forEach(function (e) {
            i += '<block type="'.concat(n, '">').concat(e, '</block> <sep gap="15"></sep>');
          });
        }
        e[n] = i;
      });
      return e;
    }
  }]);
  return e;
}();
var u = {
  getWidgetListByType: function (e, t) {
    return [];
  },
  getButtonTypeById: function (e) {
    return "";
  },
  getPrimitiveVariableList: function (e) {
    return [];
  },
  getArrayVariableList: function (e) {
    return [];
  },
  getObjectVariableList: function (e) {
    return [];
  },
  getBroadcastList: function (e) {
    return [];
  },
  getCloudDocumentList: function () {
    return [];
  },
  getLocalDocumentList: function () {
    return [];
  },
  getImageFiles: function () {
    return [];
  },
  getIconFiles: function () {
    return [];
  },
  getCloudDocumentFieldList: function (e, t) {
    return [];
  },
  getLocalDocumentFieldList: function (e, t) {
    return [];
  },
  getCloudDBList: function () {
    return [];
  },
  getCloudDBColumnList: function (e, t) {
    return [];
  },
  getCloudDictKeyList: function (e, t) {
    return [];
  },
  getScreenList: function () {
    return [];
  },
  dispatchAction: function () {},
  getActorActionList: function (e) {
    return [];
  },
  getActorStyleList: function (e, t) {
    return [];
  },
  getSoundFiles: function () {
    return [];
  },
  getSliderVisible: function () {
    return !1;
  },
  getListViewerChildWidgetList: function (e, t) {
    return [];
  },
  getGlobalGridList: function (e) {
    return [];
  },
  getTableDataColumnList: function (e) {
    return [];
  },
  getCloudTableColumnList: function (e, t) {
    return [];
  }
};
function d() {
  return u;
}
function p(e) {
  u = e;
}
var f = new i();
var h = new c();
var m = new l();
function g(e, t, n) {
  n.setBlockGroupProfile(f, e, t);
  if (n.setBlockGroupSnippet) {
    n.setBlockGroupSnippet(h);
  }
  if (n.setBlockGroupXML) {
    n.setBlockGroupXML(m, e);
  }
  if (n.setBlockGroupExtra) {
    n.setBlockGroupExtra(e, t);
  }
}
function _(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) {
    r[o - 2] = arguments[o];
  }
  r.forEach(g.bind(void 0, e, t));
}
function v() {
  return f.getBlockProfileList();
}
function b() {
  return m.getBlockXMLRecord();
}
function y() {
  return h;
}