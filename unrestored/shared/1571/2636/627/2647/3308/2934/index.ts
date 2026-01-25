/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2934
 */

"use strict"

var a = require("../../../../13/780/1068")
var r = require("../../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = undefined
var o = r(require("../../../../13/780/1066"))
var i = r(require("../../../../13/780/1067"))
var l = r(require("../../../../13/780/1070/index"))
var u = r(require("../../../../13/780/940"))
var s = r(require("../../../../13/780/1070/1551"))
var d = r(require("../../../../13/780/1069/index"))
var c = r(require("../../../../50/index"))
var f = a(require("react"))
var h = r(require("../../../../8"))
var p = r(require("./3317"))
var v = r(require("./3318"))
var m = r(require("./2933"))
var y = {
  inline: c.default.bool,
  items: c.default.array,
  className: c.default.string,
  onSelectItem: c.default.func,
  children: c.default.any,
  selectedIndex: c.default.number
}
var g = function (e) {
  function t(e, n) {
    var a;
    (0, o.default)(this, t);
    (a = (0, l.default)(this, (0, u.default)(t).call(this, e, n))).state = {
      active: false,
      activateIndex: e.selectedIndex || 0
    }
    a.commitSelection = a.commitSelection.bind((0, s.default)(a))
    a.activateMenuItem = a.activateMenuItem.bind((0, s.default)(a))
    a.handleClick = a.handleClick.bind((0, s.default)(a))
    a.renderMenu = a.renderMenu.bind((0, s.default)(a))
    a.handleFocus = a.handleFocus.bind((0, s.default)(a))
    a.handleBlur = a.handleBlur.bind((0, s.default)(a))
    a.handleUpArrow = a.handleUpArrow.bind((0, s.default)(a))
    a.handleDownArrow = a.handleDownArrow.bind((0, s.default)(a))
    a.handleEscape = a.handleEscape.bind((0, s.default)(a))
    a.handleReturn = a.handleReturn.bind((0, s.default)(a))
    a.handleTab = a.handleTab.bind((0, s.default)(a))
    a.handleKeyPress = a.handleKeyPress.bind((0, s.default)(a))
    a.handleSelectItem = a.handleSelectItem.bind((0, s.default)(a))
    a.handleIndexChange = a.handleIndexChange.bind((0, s.default)(a))
    return a
  }
  (0, d.default)(t, e);
  (0, i.default)(t, [
    {
      key: "componentDidUpdate",
      value: function (e) {
        if (e.selectedIndex !== this.props.selectedIndex) {
          this.activateMenuItem(this.props.selectedIndex)
        }
      }
    }, {
      key: "commitSelection",
      value: function (e) {
        this.setState({
          activateIndex: e,
          active: false
        })
        this.handleIndexChange(e)
      }
    }, {
      key: "activateMenuItem",
      value: function (e) {
        this.setState({
          activateIndex: e
        })
        this.handleIndexChange(e)
      }
    }, {
      key: "handleIndexChange",
      value: function (e) {
        (0, this.props.onSelectItem)(e)
      }
    }, {
      key: "handleClick",
      value: function () {
        this.setState(function (e) {
          return {
            active: !e.active
          }
        })
      }
    }, {
      key: "handleFocus",
      value: function () {
        document.addEventListener("keydown", this.handleKeyPress)
      }
    }, {
      key: "handleBlur",
      value: function () {
        this.setState({
          active: false
        })
        document.removeEventListener("keydown", this.handleKeyPress)
      }
    }, {
      key: "handleUpArrow",
      value: function (e) {
        var /* [auto-meaningful-name] */this$props$items = this.props.items
        if (this.state.active) {
          e.preventDefault()
          var n = this.state.activateIndex - 1
          if (n < 0) {
            n = this$props$items.length ? this$props$items.length - 1 : 0
          }
          this.activateMenuItem(n)
        }
      }
    }, {
      key: "handleDownArrow",
      value: function (e) {
        var /* [auto-meaningful-name] */this$props$items = this.props.items
        if (this.state.active) {
          e.preventDefault()
          var n = this.state.activateIndex + 1
          if (n >= this$props$items.length) {
            n = 0
          }
          this.activateMenuItem(n)
        }
      }
    }, {
      key: "handleTab",
      value: function (e) {
        if (this.state.active) {
          e.preventDefault()
          this.commitSelection(this.state.activateIndex)
        }
      }
    }, {
      key: "handleReturn",
      value: function (e) {
        e.preventDefault()
        if (this.state.active) {
          this.commitSelection(this.state.activateIndex)
        } else {
          this.setState({
            active: true
          })
        }
      }
    }, {
      key: "handleEscape",
      value: function () {
        this.setState({
          active: false,
          activateIndex: 0
        })
      }
    }, {
      key: "handleKeyPress",
      value: function (e) {
        if (27 === e.which) {
          this.handleEscape(e)
        } else {
          if (9 === e.which) {
            this.handleTab(e)
          } else {
            if (13 === e.which) {
              this.handleReturn(e)
            } else {
              if (38 === e.which) {
                this.handleUpArrow(e)
              } else {
                if (40 === e.which) {
                  this.handleDownArrow(e)
                }
              }
            }
          }
        }
      }
    }, {
      key: "handleSelectItem",
      value: function (e) {
        this.commitSelection(e)
      }
    }, {
      key: "renderMenu",
      value: function () {
        var e = this
        if (!this.state.active) {
          return null
        }
        var /* [auto-meaningful-name] */this$props$items = this.props.items
        return f.default.createElement(p.default, null, this$props$items.map(function (t, n) {
          return f.default.createElement(v.default, {
            item: t,
            index: n,
            onSelectItem: e.handleSelectItem,
            activateIndex: e.state.activateIndex,
            key: "item-".concat(n++)
          })
        }))
      }
    }, {
      key: "render",
      value: function () {
        var e = this
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$inline = this$props.inline
        var /* [auto-meaningful-name] */this$props$className = this$props.className
        return f.default.createElement(m.default, {
          className: (0, h.default)(this$props$className, {
            "video-react-menu-button-inline": !!this$props$inline,
            "video-react-menu-button-popup": !this$props$inline,
            "video-react-menu-button-active": this.state.active
          }, "video-react-control video-react-button video-react-menu-button"),
          role: "button",
          tabIndex: "0",
          ref: function (t) {
            e.menuButton = t
          },
          onClick: this.handleClick,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        }, this.props.children, this.renderMenu())
      }
    }
  ])
  return t
}(f.Component)
exports.default = g
g.propTypes = y
g.displayName = "MenuButton"
