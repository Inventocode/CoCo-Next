/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-19
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_ui_components_index from "../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from "classnames"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_188 from "./188"
import /* [auto-meaningful-name] */React from "react"
import { memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_931 from "./931"
import /* [auto-meaningful-name] */$_9311 from "./931"
var cn = memo(function (e) {
  var /* [auto-meaningful-name] */e$networkErrorVisible = e.networkErrorVisible
  var /* [auto-meaningful-name] */e$title = e.title
  var o = undefined === e$title ? "" : e$title
  var /* [auto-meaningful-name] */e$showCloseButton = e.showCloseButton
  var a = undefined !== e$showCloseButton && e$showCloseButton
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$onRetry = e.onRetry
  var /* [auto-meaningful-name] */e$onCancelRetry = e.onCancelRetry
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  return React.createElement($$_$$_$$_$$_src_shared_ui_components_index.f, {
    title: o,
    className: Classnames(e$className, $_9311.networkDialog),
    visible: e$networkErrorVisible,
    showCloseButton: a,
    onClose: function () {
      return e$onCancelRetry && e$onCancelRetry()
    },
    footer: React.createElement("div", {
      className: $_9311.networkFooterWrapper
    }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.d, {
      onClick: function () {
        if (e$onCancelRetry) {
          e$onCancelRetry()
        }
      }
    }, $_710$a$formatMessage({
      id: "cancel"
    })), React.createElement($$_$$_$$_$$_src_shared_ui_components_index.d, {
      onClick: e$onRetry,
      type: "primary"
    }, $_710$a$formatMessage({
      id: "retry"
    })))
  }, e$networkErrorVisible && React.createElement($_188.a, null, React.createElement($_188.b, {
    keys: "enter",
    callback: e$onRetry
  })), React.createElement("div", {
    className: $_9311.networkContent
  }, React.createElement("img", {
    src: require("./1191"),
    alt: ""
  }), React.createElement("div", {
    className: $_9311.networkText
  }, e$children)))
})
export { cn }
