/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：125
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.get_num_g = exports.reset_all_block_id = exports.insert_before = exports.insert_after = exports.clone_node = exports.get_size_attr = exports.get_translate = exports.update_visibility_class = exports.add_class_if_necessary = exports.remove_class_if_necessary = exports.is_in_same_shadow = exports.is_inside_shadow = exports.is_parent = exports.xmlstr_to_dom = exports.contains = exports.has_class = exports.get_owner_document = exports.get_viewport_bbox = exports.get_viewport_size = exports.get_document_scroll = exports.remove_children = exports.create_dom = exports.get_page_offset = exports.parse_to_SVG = exports.parse_to_DOM = exports.remove_class = exports.add_class = exports.create_font_icon = exports.create_div_element = exports.create_svg_element = exports.set_css_transform = exports.remove_attribute = exports.remove_node = exports.XLINK_NS = exports.SVG_NS = undefined
var r = require("tslib")
var i = require("@kitten-team/gl-matrix")
var o = require("./195/index")
var a = require("./534")
var s = (0, r.__importStar)(require("./714"))
var c = (0, r.__importStar)(require("./294"))
var u = (0, r.__importStar)(require("../1001/213/index"))
var l = require("./474")
exports.SVG_NS = "http://www.w3.org/2000/svg"
exports.XLINK_NS = "http://www.w3.org/1999/xlink"
function f(e, n, r) {
  if (undefined === n) {
    n = {}
  }
  var i = document.createElementNS(exports.SVG_NS, e)
  for (var o in n) if (0 === o.indexOf("xlink:")) {
    var a = o.slice("xlink:".length)
    i.setAttributeNS(exports.XLINK_NS, a, n[o])
  } else {
    i.setAttribute(o, n[o])
  }
  if (r) {
    r.appendChild(i)
  }
  return i
}
function d(e, t, n) {
  if (e) {
    n.appendChild(u.is_string(e) ? t.createTextNode(e) : e)
  }
}
function h(e) {
  if (e && "number" == typeof e.length) {
    if (u.is_object(e)) {
      return "function" == typeof e.item || "string" == typeof e.item
    }
    if (u.is_func(e)) {
      return "function" == typeof e.item
    }
  }
  return false
}
function p() {
  var window$document$body = window.document.body
  return new c.Size(window$document$body.clientWidth, window$document$body.clientHeight)
}
function _(e, t) {
  for (var n = t; n;) {
    if (e === n) {
      return true
    }
    n = n.parentElement
  }
  return false
}
function A(e, t) {
  if (e.classList.contains(t)) {
    e.classList.remove(t)
  }
}
function g(e, t) {
  if (!e.classList.contains(t)) {
    e.classList.add(t)
  }
}
exports.remove_node = function (e) {
  if (e && e.parentNode) {
    e.parentNode.removeChild(e)
  }
}
exports.remove_attribute = function (e, t) {
  if (l.is.ie(">=10")) {
    e.setAttribute(t, undefined)
  } else {
    e.removeAttribute(t)
  }
}
exports.set_css_transform = function (e, t) {
  e.style.transform = t
  e.style.webkitTransform = t
}
exports.create_svg_element = f
exports.create_div_element = function (e) {
  var t = document.createElement("div")
  if (e) {
    e.appendChild(t)
  }
  return t
}
exports.create_font_icon = function (e, t) {
  var n = f("svg", {
    fill: "currentColor"
  }, t)
  f("use", {
    "xlink:href": "#" + e
  }, n)
  return n
}
exports.add_class = function (e, t) {
  var n = e.getAttribute("class") || ""
  return -1 == (" " + n + " ").indexOf(" " + t + " ") && (n && (n += " "), e.setAttribute("class", n + t), true)
}
exports.remove_class = function (e, t) {
  if (!e || !t) {
    return false
  }
  var n = e.getAttribute("class")
  if (undefined == n || -1 == (" " + n + " ").indexOf(" " + t + " ")) {
    return false
  }
  for (var r = n.split(/\s+/), i = 0; i < r.length; i++) {
    if (!(r[i] && r[i] != t)) {
      r.splice(i, 1)
      i--
    }
  }
  if (r.length) {
    e.setAttribute("class", r.join(" "))
  } else {
    e.removeAttribute("class")
  }
  return true
}
exports.parse_to_DOM = function (e) {
  var t = document.createElement("div")
  t.innerHTML = e
  return t.firstElementChild
}
exports.parse_to_SVG = function (e) {
  var n = document.createElementNS(exports.SVG_NS, "div")
  n.innerHTML = "<svg xmlns=" + exports.SVG_NS + ">" + e + "</svg>"
  for (var r = document.createDocumentFragment(); n.firstChild && n.firstChild.firstChild;) {
    r.appendChild(n.firstChild.firstChild)
  }
  return r
}
exports.get_page_offset = function (e) {
  var t = e.getBoundingClientRect()
  return i.vec2.fromValues(t.left, t.top)
}
exports.create_dom = function (e, t, n) {
  e = String(e)
  var r = t
  var i = document.createElement(e)
  if (r) {
    if (u.is_string(r)) {
      i.className = r
    } else {
      if (u.is_array(r)) {
        i.className = r.join(" ")
      } else {
        (function (e, t) {
          u.obj_for_each(t, function (t, n) {
            if (t && t.implementsGoogStringTypedString) {
              t = t.getTypedStringValue()
            }
            if ("style" == n) {
              e.style.cssText = t
            } else {
              if ("class" == n) {
                e.className = t
              } else {
                e.setAttribute(n, t)
              }
            }
          })
        })(i, r)
      }
    }
  }
  if (n) {
    (function (e, t, n, r) {
      for (var i = r; i < n.length; i++) {
        var o = n[i]
        if (!u.is_array_like(o) || (c = o, u.is_object(c) && c.nodeType > 0)) {
          d(o, e, t)
        } else {
          for (var a = h(o) ? Array.from(o) : o, s = 0; s < a.length; ++s) {
            d(a[s], e, t)
          }
        }
      }
      var c
    })(document, i, [e, t, n], 2)
  }
  return i
}
exports.remove_children = function (e) {
  for (var e$firstChild = e.firstChild; undefined != e$firstChild;) {
    e.removeChild(e$firstChild)
    e$firstChild = e.firstChild
  }
}
exports.get_document_scroll = function () {
  var e = function (e) {
    if (e.scrollingElement) {
      return e.scrollingElement
    }
    return e.body || e.documentElement
  }(document)
  var document$defaultView = document.defaultView
  return i.vec2.fromValues(document$defaultView.pageXOffset || e.scrollLeft, document$defaultView.pageYOffset || e.scrollTop)
}
exports.get_viewport_size = p
exports.get_viewport_bbox = function () {
  var e = p()
  var t = s.get_viewport_page_offset(document)
  return {
    right: e.width + t[0],
    bottom: e.height + t[1],
    top: t[1],
    left: t[0]
  }
}
exports.get_owner_document = function (e) {
  if (!e) {
    throw new Error("Node cannot be undefined or undefined.")
  }
  return e instanceof Node ? e.nodeType == o.NodeType.DOCUMENT ? document : e.ownerDocument : e instanceof Window ? e.document : document
}
exports.has_class = function (e, t) {
  return -1 != (" " + e.getAttribute("class") + " ").indexOf(" " + t + " ")
}
exports.contains = function (e, t) {
  if (!e || !t) {
    return false
  }
  if (e.contains && t.nodeType == o.NodeType.ELEMENT) {
    return e == t || e.contains(t)
  }
  if ("undefined" != typeof e.compareDocumentPosition) {
    return e == t || Boolean(16 & e.compareDocumentPosition(t))
  }
  for (; t && e != t;) {
    t = t.parentNode
  }
  return t == e
}
exports.xmlstr_to_dom = function (e) {
  return new DOMParser().parseFromString(e, "text/xml").firstChild
}
exports.is_parent = _
exports.is_inside_shadow = function (e) {
  for (var t = null === e || undefined === e ? undefined : e.parentElement; t;) {
    if (t.classList.contains("blocklyShadow")) {
      return true
    }
    t = t.parentElement
  }
  return false
}
exports.is_in_same_shadow = function (e, t) {
  for (var e$parentElement = e.parentElement; e$parentElement;) {
    if (!e$parentElement) {
      return false
    }
    if (e$parentElement.classList.contains("blocklyShadow")) {
      break
    }
    e$parentElement = e$parentElement.parentElement
  }
  return _(e$parentElement, t)
}
exports.remove_class_if_necessary = A
exports.add_class_if_necessary = g
exports.update_visibility_class = function (e, t) {
  switch (t) {
    case o.BlockVisibility.VISIBLE:
      A(e, a.VISIBILITY_CLASSNAME.HIDDEN)
      A(e, a.VISIBILITY_CLASSNAME.TRANSLUCENT)
      break
    case o.BlockVisibility.TRANSLUCENT:
      A(e, a.VISIBILITY_CLASSNAME.HIDDEN)
      g(e, a.VISIBILITY_CLASSNAME.TRANSLUCENT)
      break
    case o.BlockVisibility.HIDDEN:
      A(e, a.VISIBILITY_CLASSNAME.TRANSLUCENT)
      g(e, a.VISIBILITY_CLASSNAME.HIDDEN)
  }
}
exports.get_translate = function (e) {
  var t = e.style.transform || e.style.webkitTransform || e.getAttribute("transform")
  if (!t) {
    return {
      x: 0,
      y: 0
    }
  }
  var n = t.match(/translate\(([+-]?\d+)[^,]*,[\s]*([+-]?\d+)[^,]*\)/)
  if (!n) {
    return {
      x: 0,
      y: 0
    }
  }
  var r = n[1]
  var i = n[2]
  return {
    x: Number(r) || 0,
    y: Number(i) || 0
  }
}
exports.get_size_attr = function (e) {
  return {
    width: parseFloat(e.getAttribute("width") || "0") || 0,
    height: parseFloat(e.getAttribute("height") || "0") || 0
  }
}
exports.clone_node = function (e, t) {
  return e.cloneNode(t)
}
exports.insert_after = function (e, t) {
  var t$nextSibling = t.nextSibling
  var t$parentNode = t.parentNode
  if (!t$parentNode) {
    throw new ReferenceError("Reference node has no parent.")
  }
  if (t$nextSibling) {
    t$parentNode.insertBefore(e, t$nextSibling)
  } else {
    t$parentNode.appendChild(e)
  }
}
exports.insert_before = function (e, t) {
  var t$parentNode = t.parentNode
  if (undefined == t$parentNode) {
    throw new ReferenceError("Reference node has no parent.")
  }
  t$parentNode.insertBefore(e, t)
}
exports.reset_all_block_id = function (e) {
  var t = {}
  var n = {}
  if (Array.isArray(e)) {
    e.forEach(r)
    e.forEach(i)
  } else {
    r(e)
    i(e)
  }
  return e
  function r(e) {
    if (e.attributes) {
      var i = e.getAttribute("id")
      for (var o in i && (t[i] = true, n[i] = c.gen_uid()), e.childNodes) if ("object" === typeof e.childNodes[o]) {
        r(e.childNodes[o])
      }
    }
  }
  function i(e) {
    if (e.attributes) {
      var t = e.getAttribute("id")
      if (t) {
        e.id = n[t]
        e.setAttribute("id", n[t])
      }
      var r = e.getAttribute("def_id")
      for (var o in r && n[r] && e.setAttribute("def_id", n[r]), e.childNodes) if ("object" === typeof e.childNodes[o]) {
        i(e.childNodes[o])
      }
    }
  }
}
exports.get_num_g = function (e) {
  var t = f("g", {
    "data-item-index": e,
    height: 18,
    width: 4 + 8 * e.toString().length + 4
  })
  t.classList.add("svg_num")
  f("text", {
    "font-weight": "900",
    "font-size": "12pt",
    "font-family": "NotoSansCJKsc-Black,NotoSansCJKsc",
    "dominant-baseline": "central",
    transform: "translate(2, 9)"
  }, t).textContent = e + "."
  return t
}
