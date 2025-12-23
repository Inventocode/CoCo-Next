/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：EPod
 */

import * as React from "react"
import * as ReactRedux from "react-redux"
import * as Redux from "redux"
import { withRouter, BrowserRouter } from "react-router-dom"
import { ViewRouterComponent } from "./template"
import { getTemplateListAction, getCourseListAction } from "./Home/model/actions"

/**
 * use withRouter to listen the change of router
 * withRouter show use outside of Router
 * in typescript is better to use withRouter to constructor HOC than as a decorator
 */
function map_state(state) {
  return {
    signDialogVisible: state.main_reducer.signDialogVisible,
    courseDialogVisible: state.main_reducer.courseDialogVisible,
    playCourseInfo: state.home_reducer.playCourseInfo
  }
}

function map_dispatch(dispatch) {
  return Redux.bindActionCreators({
    getTemplateListAction,
    getCourseListAction
  }, dispatch)
}

const ViewWithRouter = withRouter(ReactRedux.connect(map_state, map_dispatch)(ViewRouterComponent))

export function ViewRouter() {
  return <BrowserRouter><ViewWithRouter/></BrowserRouter>
}
