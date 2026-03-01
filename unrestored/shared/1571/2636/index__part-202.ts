/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-202
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"./18"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from /* 0 */"react"
import /* 2628 */"./2628"
import /* 2629 */"./2629"
var yL = {
  header: {
    logo: Module_18.j.Show,
    file: {
      newProject: Module_18.j.Show,
      openMyProject: Module_18.j.Show,
      saveAs: Module_18.j.Hide,
      showHistory: Module_18.j.Hide,
      openLocalFile: Module_18.j.Show,
      exportLocalFile: Module_18.j.Hide
    },
    tutorial: {
      tutorial: Module_18.j.Show,
      feedback: Module_18.j.Show,
      releaseInfo: Module_18.j.Show,
      about: Module_18.j.Show
    },
    help: {
      ruler: Module_18.j.Show,
      stage: Module_18.j.Show
    },
    projectName: Module_18.j.ReadOnly,
    coll: Module_18.j.Show,
    save: Module_18.j.Hide,
    cloudDBManager: Module_18.j.Hide,
    cloudSpaceManager: Module_18.j.Show,
    cutLine: Module_18.j.Show,
    package: Module_18.j.Hide,
    userInfo: Module_18.j.Show,
    preventLeave: Module_18.j.Show
  },
  widgetPanel: Module_18.j.ReadOnly,
  stage: Module_18.j.ReadOnly,
  widgetEditor: Module_18.j.ReadOnly,
  workspace: Module_18.j.ReadOnly,
  screenPanel: Module_18.j.ReadOnly,
  resourceLibrary: Module_18.j.ReadOnly
}
var EL = {
  header: {
    logo: Module_18.j.Show,
    file: {
      newProject: Module_18.j.Show,
      openMyProject: Module_18.j.Show,
      saveAs: Module_18.j.Show,
      showHistory: Module_18.j.Show,
      openLocalFile: Module_18.j.Show,
      exportLocalFile: Module_18.j.Show
    },
    tutorial: {
      tutorial: Module_18.j.Show,
      feedback: Module_18.j.Show,
      releaseInfo: Module_18.j.Show,
      about: Module_18.j.Show
    },
    help: {
      ruler: Module_18.j.Show,
      stage: Module_18.j.Show
    },
    projectName: Module_18.j.Show,
    coll: Module_18.j.Show,
    save: Module_18.j.Show,
    cloudDBManager: Module_18.j.Hide,
    cloudSpaceManager: Module_18.j.Show,
    cutLine: Module_18.j.Show,
    package: Module_18.j.Show,
    userInfo: Module_18.j.Show,
    preventLeave: Module_18.j.Show
  },
  widgetPanel: Module_18.j.Show,
  stage: Module_18.j.Show,
  widgetEditor: Module_18.j.Show,
  workspace: Module_18.j.Show,
  screenPanel: Module_18.j.Show,
  resourceLibrary: Module_18.j.Show
}
var OL = {
  header: {
    logo: Module_18.j.Hide,
    file: {
      newProject: Module_18.j.Hide,
      openMyProject: Module_18.j.Hide,
      saveAs: Module_18.j.Hide,
      showHistory: Module_18.j.Hide,
      openLocalFile: Module_18.j.Hide,
      exportLocalFile: Module_18.j.Hide
    },
    tutorial: {
      tutorial: Module_18.j.Hide,
      feedback: Module_18.j.Hide,
      releaseInfo: Module_18.j.Hide,
      about: Module_18.j.Hide
    },
    help: {
      ruler: Module_18.j.Hide,
      stage: Module_18.j.Hide
    },
    projectName: Module_18.j.Hide,
    coll: Module_18.j.Hide,
    save: Module_18.j.Hide,
    cloudDBManager: Module_18.j.Hide,
    cloudSpaceManager: Module_18.j.Hide,
    cutLine: Module_18.j.Hide,
    package: Module_18.j.Hide,
    userInfo: Module_18.j.Hide,
    preventLeave: Module_18.j.Hide
  },
  widgetPanel: Module_18.j.ReadOnly,
  stage: Module_18.j.ReadOnly,
  widgetEditor: Module_18.j.ReadOnly,
  workspace: Module_18.j.ReadOnly,
  screenPanel: Module_18.j.ReadOnly,
  resourceLibrary: Module_18.j.ReadOnly
}
var wL = function () {
  var e = useSelector(function (e) {
    return e.common.editPermission
  })
  var t = useDispatch()
  React1.useLayoutEffect(function () {
    var n
    var r = "readonly" === (n = function (e) {
      switch (e) {
        case Module_18.c.ReadOnly:
          return "readonly"
        case Module_18.c.Preview:
          return "preview"
        default:
          return "normal"
      }
    }(e)) ? yL : "preview" === n ? OL : EL
    t(Src_editor_redux_common_actions.cj(r))
  }, [e, t])
  return React.createElement(React.Fragment, null)
}
export { wL }
