/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-202
 */

"use strict"

import * as K from "./18"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import "./2628"
import "./2629"
var yL = {
  header: {
    logo: K.j.Show,
    file: {
      newProject: K.j.Show,
      openMyProject: K.j.Show,
      saveAs: K.j.Hide,
      showHistory: K.j.Hide,
      openLocalFile: K.j.Show,
      exportLocalFile: K.j.Hide
    },
    tutorial: {
      tutorial: K.j.Show,
      feedback: K.j.Show,
      releaseInfo: K.j.Show,
      about: K.j.Show
    },
    help: {
      ruler: K.j.Show,
      stage: K.j.Show
    },
    projectName: K.j.ReadOnly,
    coll: K.j.Show,
    save: K.j.Hide,
    cloudDBManager: K.j.Hide,
    cloudSpaceManager: K.j.Show,
    cutLine: K.j.Show,
    package: K.j.Hide,
    userInfo: K.j.Show,
    preventLeave: K.j.Show
  },
  widgetPanel: K.j.ReadOnly,
  stage: K.j.ReadOnly,
  widgetEditor: K.j.ReadOnly,
  workspace: K.j.ReadOnly,
  screenPanel: K.j.ReadOnly,
  resourceLibrary: K.j.ReadOnly
}
var EL = {
  header: {
    logo: K.j.Show,
    file: {
      newProject: K.j.Show,
      openMyProject: K.j.Show,
      saveAs: K.j.Show,
      showHistory: K.j.Show,
      openLocalFile: K.j.Show,
      exportLocalFile: K.j.Show
    },
    tutorial: {
      tutorial: K.j.Show,
      feedback: K.j.Show,
      releaseInfo: K.j.Show,
      about: K.j.Show
    },
    help: {
      ruler: K.j.Show,
      stage: K.j.Show
    },
    projectName: K.j.Show,
    coll: K.j.Show,
    save: K.j.Show,
    cloudDBManager: K.j.Hide,
    cloudSpaceManager: K.j.Show,
    cutLine: K.j.Show,
    package: K.j.Show,
    userInfo: K.j.Show,
    preventLeave: K.j.Show
  },
  widgetPanel: K.j.Show,
  stage: K.j.Show,
  widgetEditor: K.j.Show,
  workspace: K.j.Show,
  screenPanel: K.j.Show,
  resourceLibrary: K.j.Show
}
var OL = {
  header: {
    logo: K.j.Hide,
    file: {
      newProject: K.j.Hide,
      openMyProject: K.j.Hide,
      saveAs: K.j.Hide,
      showHistory: K.j.Hide,
      openLocalFile: K.j.Hide,
      exportLocalFile: K.j.Hide
    },
    tutorial: {
      tutorial: K.j.Hide,
      feedback: K.j.Hide,
      releaseInfo: K.j.Hide,
      about: K.j.Hide
    },
    help: {
      ruler: K.j.Hide,
      stage: K.j.Hide
    },
    projectName: K.j.Hide,
    coll: K.j.Hide,
    save: K.j.Hide,
    cloudDBManager: K.j.Hide,
    cloudSpaceManager: K.j.Hide,
    cutLine: K.j.Hide,
    package: K.j.Hide,
    userInfo: K.j.Hide,
    preventLeave: K.j.Hide
  },
  widgetPanel: K.j.ReadOnly,
  stage: K.j.ReadOnly,
  widgetEditor: K.j.ReadOnly,
  workspace: K.j.ReadOnly,
  screenPanel: K.j.ReadOnly,
  resourceLibrary: K.j.ReadOnly
}
var wL = function () {
  var e = $_16_index.e(function (e) {
    return e.common.editPermission
  })
  var t = $_16_index.d()
  _React.useLayoutEffect(function () {
    var n
    var r = "readonly" === (n = function (e) {
      switch (e) {
        case K.c.ReadOnly:
          return "readonly"
        case K.c.Preview:
          return "preview"
        default:
          return "normal"
      }
    }(e)) ? yL : "preview" === n ? OL : EL
    t($$_$$_$$_$$_src_editor_redux_common_actions.cj(r))
  }, [e, t])
  return React.createElement(React.Fragment, null)
}
export { wL }
