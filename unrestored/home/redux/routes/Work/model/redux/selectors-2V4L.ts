"use strict";

/* harmony export (binding) */
export { getHomeAllWorkList };
/* harmony export (binding) */
export { getCreateWorkList };
/* harmony export (binding) */
export { getCollWorkList };
/* harmony export (binding) */
export { getDeleteWorkList };
var getHomeAllWorkList = function getHomeAllWorkList(state) {
  return state.home_reducer.workList;
};
var getCreateWorkList = function getCreateWorkList(state) {
  return state.work_reducer.createWorkList;
};
var getCollWorkList = function getCollWorkList(state) {
  return state.work_reducer.collWorkList;
};
var getDeleteWorkList = function getDeleteWorkList(state) {
  return state.work_reducer.deleteWorkList;
};

/***/