"use strict";

/* harmony export (immutable) */
export default sagaMiddlewareFactory;
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__utils__ from "../utils-Vr3j";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__channel__ from "../channel-xJpq";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__runSaga__ from "../internal/runSaga-YWCq";
function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}
function sagaMiddlewareFactory() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _ref$context = _ref.context,
    context = _ref$context === undefined ? {} : _ref$context,
    options = _objectWithoutProperties(_ref, ['context']);
  var sagaMonitor = options.sagaMonitor,
    logger = options.logger,
    onError = options.onError;
  if (__WEBPACK_IMPORTED_MODULE_0__utils__.is.func(options)) {
    if (true) {
      throw new Error('Saga middleware no longer accept Generator functions. Use sagaMiddleware.run instead');
    } else {
      throw new Error('You passed a function to the Saga middleware. You are likely trying to start a        Saga by directly passing it to the middleware. This is no longer possible starting from 0.10.0.        To run a Saga, you must do it dynamically AFTER mounting the middleware into the store.\n        Example:\n          import createSagaMiddleware from \'redux-saga\'\n          ... other imports\n\n          const sagaMiddleware = createSagaMiddleware()\n          const store = createStore(reducer, applyMiddleware(sagaMiddleware))\n          sagaMiddleware.run(saga, ...args)\n      ');
    }
  }
  if (logger && !__WEBPACK_IMPORTED_MODULE_0__utils__.is.func(logger)) {
    throw new Error('`options.logger` passed to the Saga middleware is not a function!');
  }
  if (false) {
    throw new Error('`options.onerror` was removed. Use `options.onError` instead.');
  }
  if (onError && !__WEBPACK_IMPORTED_MODULE_0__utils__.is.func(onError)) {
    throw new Error('`options.onError` passed to the Saga middleware is not a function!');
  }
  if (options.emitter && !__WEBPACK_IMPORTED_MODULE_0__utils__.is.func(options.emitter)) {
    throw new Error('`options.emitter` passed to the Saga middleware is not a function!');
  }
  function sagaMiddleware(_ref2) {
    var getState = _ref2.getState,
      dispatch = _ref2.dispatch;
    var sagaEmitter = Object(__WEBPACK_IMPORTED_MODULE_1__channel__.emitter)();
    sagaEmitter.emit = (options.emitter || __WEBPACK_IMPORTED_MODULE_0__utils__.ident)(sagaEmitter.emit);
    sagaMiddleware.run = __WEBPACK_IMPORTED_MODULE_2__runSaga__.runSaga.bind(null, {
      context: context,
      subscribe: sagaEmitter.subscribe,
      dispatch: dispatch,
      getState: getState,
      sagaMonitor: sagaMonitor,
      logger: logger,
      onError: onError
    });
    return function (next) {
      return function (action) {
        if (sagaMonitor && sagaMonitor.actionDispatched) {
          sagaMonitor.actionDispatched(action);
        }
        var result = next(action); // hit reducers
        sagaEmitter.emit(action);
        return result;
      };
    };
  }
  sagaMiddleware.run = function () {
    throw new Error('Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware');
  };
  sagaMiddleware.setContext = function (props) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__.check)(props, __WEBPACK_IMPORTED_MODULE_0__utils__.is.object, Object(__WEBPACK_IMPORTED_MODULE_0__utils__.createSetContextWarning)('sagaMiddleware', props));
    __WEBPACK_IMPORTED_MODULE_0__utils__.object.assign(context, props);
  };
  return sagaMiddleware;
}

/***/