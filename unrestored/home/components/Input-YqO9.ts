/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：YqO9
 */

"use strict"

/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_react___default from "react"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_classnames__ from "classnames"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_classnames___default from "classnames"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__IconFont__ from "./IconFont-zVV7"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__style_scss__ from "./style/scss-IzpB"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_3__style_scss___default from "./style/scss-IzpB"
var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = []
    var _n = true
    var _d = false
    var _e = undefined
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value)
        if (i && _arr.length === i) {
          break
        }
      }
    } catch (err) {
      _d = true
      _e = err
    } finally {
      try {
        if (!_n && _i["return"]) {
          _i["return"]()
        }
      } finally {
        if (_d) {
          throw _e
        }
      }
    }
    return _arr
  }
  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i)
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
  }
}()
var minusRegEx = /^-+$/
var numberRegEx = /^(-|\+)?\d*$/
var formatNumberOnBlurEvent = function formatNumberOnBlurEvent(value, max, min) {
  var number = parseFloat(value) || 0
  if (min !== undefined) {
    number = Math.max(number, min)
  }
  if (max !== undefined) {
    number = Math.min(number, max)
  }
  return number.toString()
}
var formatNumberValueOnChangeEvent = function formatNumberValueOnChangeEvent(value, max) {
  var status = "success"
  if (!numberRegEx.test(value)) {
    status = "fail"
  }
  var number = parseFloat(value)
  // 超过最大值会报错，但超过最小值不会
  if (max && number > max) {
    status = "fail"
    number = max
  }
  return {
    status: status,
    value: isNaN(number) ? "" : number.toString()
  }
}
var formatNumberRulesOnChangeEvent = function formatNumberRulesOnChangeEvent(value, oldValue, rules) {
  var _iteratorNormalCompletion = true
  var _didIteratorError = false
  var _iteratorError = undefined
  try {
    for (var _iterator = rules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var rule = _step.value
      var result = value.match(rule.rule)
      if (!result) {
        return {
          status: "fail",
          value: oldValue,
          massage: rule.message
        }
      }
    }
  } catch (err) {
    _didIteratorError = true
    _iteratorError = err
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return()
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError
      }
    }
  }
  return {
    status: "success",
    value: value
  }
}
var formatOnChangeEvent = function formatOnChangeEvent(value, oldInputValueRef, maxLength, rules) {
  var oldValue = oldInputValueRef.current
  if (value !== "") {
    // rule verify
    if (rules) {
      var _iteratorNormalCompletion2 = true
      var _didIteratorError2 = false
      var _iteratorError2 = undefined
      try {
        for (var _iterator2 = rules[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var rule = _step2.value
          var result = value.match(rule.rule)
          if (!result) {
            return {
              status: "fail",
              value: oldValue,
              massage: rule.message
            }
          }
        }
      } catch (err) {
        _didIteratorError2 = true
        _iteratorError2 = err
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return()
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2
          }
        }
      }
    }
    // 未超过最大长度 or 删除字符时
    if (maxLength && (value.length <= maxLength || value.length < oldValue.length)) {
      oldInputValueRef.current = value
      return {
        status: "success",
        value: value
      }
    }
    // maxLength verify
    if (maxLength !== undefined && value.length > oldValue.length) {
      return {
        status: "fail",
        value: oldValue,
        massage: "The maximum support length is exceeded"
      }
    }
  }
  var start = -1
  for (var i = 0; i < value.length; i++) {
    if (value[i] !== oldValue[i]) {
      start = i // value 与 oldValue 差异开始的地方
      break
    }
  }
  if (start > -1) {
    var newInputValue = oldValue
    for (var _i = start; _i < value.length; _i++) {
      var str = oldValue.slice(0, start) + value.slice(start, _i) + oldValue.slice(start)
      if (maxLength !== undefined && str.length > maxLength) {
        break
      }
      newInputValue = str
    }
    oldInputValueRef.current = newInputValue
    return {
      status: "success",
      value: newInputValue
    }
  }
  return {
    status: "success",
    value: value
  }
}
var animationTimeId = undefined
var Input = function Input(props, ref) {
  var warning = props.warning
  var placeholder = props.placeholder
  var value = props.value
  var defaultValue = props.defaultValue
  var onChange = props.onChange
  var onBlur = props.onBlur
  var onClick = props.onClick
  var onMouseDown = props.onMouseDown
  var onKeyDown = props.onKeyDown
  var onFocus = props.onFocus
  var onCompositionStart = props.onCompositionStart
  var onCompositionEnd = props.onCompositionEnd
  var onClearCallback = props.onClearCallback
  var before = props.before
  var after = props.after
  var style = props.style
  var className = props.className
  var max = props.max
  var min = props.min
  var maxLength = props.maxLength
  var disabled = props.disabled
  var _props$type = props.type
  var type = _props$type === undefined ? "text" : _props$type
  var dependency = props.dependency
  var rules = props.rules
  var _props$readOnly = props.readOnly
  var readOnly = _props$readOnly === undefined ? false : _props$readOnly
  var _props$isTrimmed = props.isTrimmed
  var isTrimmed = _props$isTrimmed === undefined ? false : _props$isTrimmed
  var clearButtonVisible = props.clearButtonVisible
  var _useState = __WEBPACK_IMPORTED_MODULE_0_react__.useState(false)
  var _useState2 = _slicedToArray(_useState, 2)
  var isFocused = _useState2[0]
  var setIsFocused = _useState2[1]
  var _useState3 = __WEBPACK_IMPORTED_MODULE_0_react__.useState(false)
  var _useState4 = _slicedToArray(_useState3, 2)
  var isWarningAnimation = _useState4[0]
  var setWarningAnimation = _useState4[1]
  var inputRef = __WEBPACK_IMPORTED_MODULE_0_react__.useRef(null)
  var oldInputValueRef = __WEBPACK_IMPORTED_MODULE_0_react__.useRef("") // 记录input 框改变前的value
  var _useState5 = __WEBPACK_IMPORTED_MODULE_0_react__.useState(!!defaultValue || !!value)
  var _useState6 = _slicedToArray(_useState5, 2)
  var isEmptyValue = _useState6[0]
  var setIsEmptyValue = _useState6[1]
  var isCompositionEnd = __WEBPACK_IMPORTED_MODULE_0_react__.useRef(true)
  // 记录上一次输入框数据
  // NOTE: reset input value when dependency changed
  __WEBPACK_IMPORTED_MODULE_0_react__.useEffect(function () {
    var inputEl = inputRef.current
    if (value === undefined && inputEl) {
      inputEl.value = defaultValue === undefined ? "" : defaultValue.toString().substr(0, maxLength || Infinity)
      setIsEmptyValue(!inputEl.value)
    } else if (value) {
      setIsEmptyValue(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputRef, dependency, value, defaultValue])
  __WEBPACK_IMPORTED_MODULE_0_react__.useEffect(function () {
    var inputEl = inputRef.current
    if (value !== undefined && inputEl) {
      inputEl.value = value.toString().substr(0, maxLength)
    }
  }, [inputRef, value, maxLength])
  __WEBPACK_IMPORTED_MODULE_0_react__.useImperativeHandle(ref, function () {
    if (inputRef.current) {
      return {
        input: inputRef.current,
        value: inputRef.current.value || "",
        focus: function focus() {
          return inputRef.current.focus()
        },
        blur: function blur() {
          return inputRef.current.blur()
        },
        select: function select() {
          return inputRef.current.select()
        }
      }
    }
    return {
      input: inputRef.current,
      value: ""
    }
  })
  var handleChangeWhenNumberType = function handleChangeWhenNumberType(e) {
    var inputEL = inputRef.current
    if (!inputEL) {
      return
    }
    var inputValue = inputEL.value
    if (rules) {
      var _formatResult = formatNumberRulesOnChangeEvent(inputValue, oldInputValueRef.current, rules)
      if (_formatResult.status === "fail") {
        handleFormatResult(_formatResult)
        inputEL.value = _formatResult.value
        return
      }
    }
    if (minusRegEx.test(inputValue)) {
      // 多个 “-” 号改为一个 “-” 号
      inputEL.value = "-"
      return
    }
    var formatResult = formatNumberValueOnChangeEvent(inputValue, max)
    handleFormatResult(formatResult)
    inputEL.value = formatResult.value
    // 如果input 的值小于最小值时,直接返回，不触发onChange事件
    if (min && Number(formatResult.value) < min) {
      return
    }
    if (onChange) {
      onChange(formatResult.value || "0", e)
    }
  }
  var handleChangeWhenTextType = function handleChangeWhenTextType(e) {
    var resultValue = handleFormarTextResult()
    if (resultValue !== undefined && onChange) {
      onChange(resultValue, e)
    }
  }
  var handleFormarTextResult = function handleFormarTextResult() {
    var inputEL = inputRef.current
    if (!inputEL) {
      return
    }
    var inputValue = inputEL.value
    var resultValue = inputValue
    var formatResult = formatOnChangeEvent(inputValue, oldInputValueRef, maxLength, rules)
    resultValue = formatResult.value
    if (!isCompositionEnd.current) {
      resultValue = inputValue
    }
    inputEL.value = resultValue
    handleFormatResult(formatResult)
    return resultValue
  }
  var handleChange = function handleChange(e) {
    setIsEmptyValue(!e.target.value)
    if (type === "number") {
      handleChangeWhenNumberType(e)
    } else {
      handleChangeWhenTextType(e)
    }
  }
  var handleFormatResult = function handleFormatResult(result) {
    if (result.status === "fail") {
      if (!animationTimeId) {
        setWarningAnimation(true)
        animationTimeId = setTimeout(function () {
          setWarningAnimation(false)
          animationTimeId = null
        }, 600)
      }
    } else {
      setWarningAnimation(false)
    }
  }
  var handleFocus = __WEBPACK_IMPORTED_MODULE_0_react__.useCallback(function (e) {
    setIsFocused(true)
    if (onFocus) {
      onFocus(e)
    }
  }, [onFocus])
  var handleBlur = __WEBPACK_IMPORTED_MODULE_0_react__.useCallback(function (e) {
    setIsFocused(false)
    var inputEL = inputRef.current
    if (!inputEL) {
      return
    }
    var previousV = inputEL.value
    var lastV = inputEL.value
    if (type === "number") {
      lastV = formatNumberOnBlurEvent(previousV, max, min)
    }
    if (isTrimmed) {
      lastV = lastV.trim()
    }
    inputEL.value = lastV
    if (onBlur) {
      onBlur(lastV, e)
    }
    if (lastV !== previousV && onChange) {
      onChange(lastV, e)
    }
  }, [inputRef, type, isTrimmed, onBlur, onChange, max, min])
  var handleKeydown = function handleKeydown(e) {
    var inputEL = inputRef.current
    if (!inputEL) {
      return
    }
    if (e.keyCode === 13) {
      inputEL.blur()
    }
    if (onKeyDown) {
      onKeyDown(e)
    }
  }
  var handleClearButtonMouseDown = function handleClearButtonMouseDown(e) {
    var inputEl = inputRef.current
    e.stopPropagation()
    e.preventDefault()
    if (inputEl) {
      inputEl.value = ""
      inputEl.focus()
      setIsEmptyValue(true)
      if (onClearCallback) {
        onClearCallback()
      }
    }
  }
  var handleCompositionStart = function handleCompositionStart() {
    isCompositionEnd.current = false
    if (onCompositionStart) {
      onCompositionStart()
    }
  }
  var handleCompositionEnd = function handleCompositionEnd(e) {
    isCompositionEnd.current = true
    handleFormarTextResult()
    if (onCompositionEnd) {
      onCompositionEnd(e)
    }
  }
  var otherProps = {
    disabled: disabled,
    placeholder: placeholder,
    value: value
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1_classnames___default("coco-input", className, {
      "coco-input-focus": isFocused,
      "coco-input-disabled": disabled,
      "coco-input-warning": warning,
      "coco-input-warning-animation": isWarningAnimation
    }),
    style: style
  }, before, __WEBPACK_IMPORTED_MODULE_0_react___default.createElement("input", Object.assign({
    ref: inputRef,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onClick: onClick,
    onMouseDown: onMouseDown,
    onKeyDown: handleKeydown,
    readOnly: readOnly,
    onCompositionStart: handleCompositionStart,
    onCompositionEnd: handleCompositionEnd
  }, otherProps)), clearButtonVisible && !isEmptyValue && __WEBPACK_IMPORTED_MODULE_0_react___default.createElement("div", {
    onMouseDown: handleClearButtonMouseDown,
    className: "coco-input-clear-button"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.createElement(__WEBPACK_IMPORTED_MODULE_2__IconFont__.default, {
    type: "icon-close"
  })), after)
}
/* harmony default export */
export default __WEBPACK_IMPORTED_MODULE_0_react___default.memo(__WEBPACK_IMPORTED_MODULE_0_react___default.forwardRef(Input))
/***/
