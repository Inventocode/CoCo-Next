/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：sdA1
 */

import * as Redux from "redux"
import * as ReactRedux from "react-redux"
import { withRouter } from "react-router"
import { MenuView } from "./template"

function mapStateToProps(state, ownProps) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return Redux.bindActionCreators({}, dispatch)
}

export const Menu = withRouter(ReactRedux.connect(mapStateToProps, mapDispatchToProps)(MenuView))

export { store_manager } from "../../../redux/store"
export { config } from "../../../../../unrestored/home/cfg-dpNx"
