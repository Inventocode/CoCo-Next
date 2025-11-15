/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：sdA1
 */

"use strict"

/* harmony export (binding) */
/* harmony import */
export { Menu }
import * as __WEBPACK_IMPORTED_MODULE_0_redux__ from "redux"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_redux__ from "react-redux"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_react_router__ from "react-router"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__template__ from "./template-My5k"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__redux_store__ from "../redux/store-q9Rd"
/* unused harmony reexport store_manager */
/* unused harmony reexport ReduxState */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__cfg__ from "../cfg-dpNx"
/* unused harmony reexport config */
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {}
}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return __WEBPACK_IMPORTED_MODULE_0_redux__.bindActionCreators({}, dispatch)
}
var Menu = __WEBPACK_IMPORTED_MODULE_2_react_router__.withRouter(__WEBPACK_IMPORTED_MODULE_1_react_redux__.connect(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_3__template__.MenuView))

/***/
