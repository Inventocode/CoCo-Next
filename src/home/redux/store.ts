/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：q9Rd
 */

import { combineReducers, createStore, applyMiddleware } from "redux"
import ReduxSaga from "redux-saga"
import { fork } from "redux-saga/effects"

import { homeReducer, homeSaga } from "../ui/routes/Home/model/reducer"
import { workReducer, workSaga } from "../ui/routes/Work/model/reducer"
import { main_reducer, mainSaga } from "./main/reducer"

function get_root_reducer() {
  return combineReducers({
    home_reducer: homeReducer,
    main_reducer: main_reducer,
    work_reducer: workReducer
  })
}

function create_store() {
  const root_reducer = get_root_reducer()
  const middleware_list = []
  const saga_middleware = ReduxSaga()
  middleware_list.push(saga_middleware)
  const store = createStore(
    root_reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware.apply(undefined, middleware_list)
  )
  saga_middleware.run(root_saga)
  return store
}

function* root_saga() {
  yield fork(mainSaga)
  yield fork(homeSaga)
  yield fork(workSaga)
}
class StoreManager {

  private store

  public constructor() {
    this.store = create_store()
  }

  public get_store() {
    return this.store
  }

  public get_state() {
    return this.store.getState()
  }

  public subscribe(listener) {
    this.store.subscribe(listener)
  }

  public dispatch(action) {
    return this.store.dispatch(action)
  }
}

export const store_manager = new StoreManager()
