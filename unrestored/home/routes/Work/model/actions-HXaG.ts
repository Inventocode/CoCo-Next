"use strict";

/* harmony export (binding) */
export { SET_CREATE_WORK_OFFSET_ACTION };
/* harmony export (binding) */
export { setCreateWorkOffsetAction };
/* harmony export (binding) */
export { SET_CREATE_WORK_IS_LOADED_ACTION };
/* harmony export (binding) */
export { setCreateWorkIsLoadedAction };
/* harmony export (binding) */
export { GET_CREATE_WORK_LIST_ACTION };
/* harmony export (binding) */
export { getCreateWorkListAction };
/* harmony export (binding) */
export { SET_CREATE_WORK_LIST_ACTION };
/* harmony export (binding) */
export { setCreateWorkListAction };
/* harmony export (binding) */
export { SET_COLL_WORK_OFFSET_ACTION };
/* harmony export (binding) */
export { setCollWorkOffsetAction };
/* harmony export (binding) */
export { SET_COLL_WORK_IS_LOADED_ACTION };
/* harmony export (binding) */
export { setCollWorkIsLoadedAction };
/* harmony export (binding) */
export { GET_COLL_WORK_LIST_ACTION };
/* harmony export (binding) */
export { getCollWorkListAction };
/* harmony export (binding) */
export { SET_COLL_WORK_LIST_ACTION };
/* harmony export (binding) */
export { setCollWorkListAction };
/* harmony export (binding) */
export { SET_DELETE_WORK_OFFSET_ACTION };
/* harmony export (binding) */
export { setDeleteWorkOffsetAction };
/* harmony export (binding) */
export { SET_DELETE_WORK_IS_LOADED_ACTION };
/* harmony export (binding) */
export { setDeleteWorkIsLoadedAction };
/* harmony export (binding) */
export { GET_DELETE_WORK_LIST_ACTION };
/* harmony export (binding) */
export { getDeleteWorkListAction as x };
/* harmony export (binding) */
export { SET_DELETE_WORK_LIST_ACTION };
/* harmony export (binding) */
export { setDeleteWorkListAction };
/* harmony export (binding) */
export { RENAME_WORK_ACTION };
/* harmony export (binding) */
export { renameWorkAction };
/* harmony export (binding) */
export { QUIT_COLL_WORK_ACTION };
/* harmony export (binding) */
export { quitCollWorkAction };
/* harmony export (binding) */
export { DELETE_WORK_ACTION };
/* harmony export (binding) */
export { deleteWorkAction };
/* harmony export (binding) */
export { RECOVER_DELETE_WORK_ACTION };
/* harmony export (binding) */
export { recoverDeleteWorkAction };
/* harmony export (binding) */
export { AGAIN_DELETE_WORK_ACTION };
/* harmony export (binding) */
export { againDeleteWorkAction };
/* harmony export (binding) */
export { CLEAR_DELETED_WORK_ACTION };
/* harmony export (binding) */
export { clearDeletedWorkAction as t };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_redux_actions__ from "../../../redux/actions-sTbe"; // 我创建的
var SET_CREATE_WORK_OFFSET_ACTION = 'work/set_create_work_offset';
var setCreateWorkOffsetAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__.createAction)(SET_CREATE_WORK_OFFSET_ACTION);
var SET_CREATE_WORK_IS_LOADED_ACTION = 'work/set_create_work_is_loaded';
var setCreateWorkIsLoadedAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__.createAction)(SET_CREATE_WORK_IS_LOADED_ACTION);
var GET_CREATE_WORK_LIST_ACTION = 'work/get_create_work_list';
var getCreateWorkListAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__.createAction)(GET_CREATE_WORK_LIST_ACTION);
var SET_CREATE_WORK_LIST_ACTION = 'work/set_create_work_list';
var setCreateWorkListAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__.createAction)(SET_CREATE_WORK_LIST_ACTION);
// 我参与的
var SET_COLL_WORK_OFFSET_ACTION = 'work/set_coll_work_offset';
var setCollWorkOffsetAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__.createAction)(SET_COLL_WORK_OFFSET_ACTION);
var SET_COLL_WORK_IS_LOADED_ACTION = 'work/set_coll_work_is_loaded';
var setCollWorkIsLoadedAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__.createAction)(SET_COLL_WORK_IS_LOADED_ACTION);
var GET_COLL_WORK_LIST_ACTION = 'work/get_coll_work_list';
var getCollWorkListAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__.createAction)(GET_COLL_WORK_LIST_ACTION);
var SET_COLL_WORK_LIST_ACTION = 'work/set_coll_work_list';
var setCollWorkListAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__.createAction)(SET_COLL_WORK_LIST_ACTION);
// 回收站作品
var SET_DELETE_WORK_OFFSET_ACTION = 'work/set_delete_work_offset';
var setDeleteWorkOffsetAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__.createAction)(SET_DELETE_WORK_OFFSET_ACTION);
var SET_DELETE_WORK_IS_LOADED_ACTION = 'work/set_delete_work_is_loaded';
var setDeleteWorkIsLoadedAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__.createAction)(SET_DELETE_WORK_IS_LOADED_ACTION);
var GET_DELETE_WORK_LIST_ACTION = 'work/get_delete_work_list';
var getDeleteWorkListAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__.createAction)(GET_DELETE_WORK_LIST_ACTION);
var SET_DELETE_WORK_LIST_ACTION = 'work/set_delete_work_list';
var setDeleteWorkListAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__.createAction)(SET_DELETE_WORK_LIST_ACTION);
// 作品重命名
var RENAME_WORK_ACTION = 'work/rename_work';
var renameWorkAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__.createAction)(RENAME_WORK_ACTION);
// 退出协作
var QUIT_COLL_WORK_ACTION = 'work/quit_coll_work';
var quitCollWorkAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__.createAction)(QUIT_COLL_WORK_ACTION);
// 删除coco作品到回收站
var DELETE_WORK_ACTION = 'work/delete_work';
var deleteWorkAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__.createAction)(DELETE_WORK_ACTION);
// 回收站 恢复作品
var RECOVER_DELETE_WORK_ACTION = 'work/recover_delete_work';
var recoverDeleteWorkAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__.createAction)(RECOVER_DELETE_WORK_ACTION);
// 回收站 彻底删除coco作品
var AGAIN_DELETE_WORK_ACTION = 'work/again_delete_work';
var againDeleteWorkAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__.createAction)(AGAIN_DELETE_WORK_ACTION);
// 清空回收站
var CLEAR_DELETED_WORK_ACTION = 'work/clear_deleted_work';
var clearDeletedWorkAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__.createAction)(CLEAR_DELETED_WORK_ACTION);

/***/