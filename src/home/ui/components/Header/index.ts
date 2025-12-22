/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：sEiI
 */

import * as Redux from "redux"
import * as ReactRedux from "react-redux"
import { HeaderView } from "./template"
import { setCourseListVisibleAction } from "../../routes/Home/model/actions"
import { asyncSetUserInfoAction, setSignDialogVisibleAction, setCourseDialogVisibleAction } from "../../../redux/main/actions"

function mapStateToProps(state, ownProps) {
  return {
    userInfo: state.main_reducer.userInfo,
    // 主页-入门教程是否显示
    courseListVisible: state.home_reducer.courseListVisible
  }
}

function mapDispatchToProps(dispatch) {
  return Redux.bindActionCreators({
    setCourseListVisibleAction,
    asyncSetUserInfoAction,
    setSignDialogVisibleAction,
    setCourseDialogVisibleAction
  }, dispatch)
}

export const Header = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(HeaderView)

export { store_manager }  from "../../../redux/store"
export { config } from "../../../../../unrestored/home/cfg-dpNx"
