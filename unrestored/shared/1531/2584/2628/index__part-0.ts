/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2628__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$_988 from "./988"
import * as /* [auto-meaningful-name] */$_275 from "./275"
import * as /* [auto-meaningful-name] */$_277 from "./277"
var s = ["localeMatcher", "style", "currency", "currencyDisplay", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay"]
function c(e, t, n) {
  var /* [auto-meaningful-name] */e$locale = e.locale
  var /* [auto-meaningful-name] */e$formats = e.formats
  var /* [auto-meaningful-name] */e$onError = e.onError
  if (undefined === n) {
    n = {}
  }
  var /* [auto-meaningful-name] */n$format = n.format
  var u = n$format && $_275.f(e$formats, "number", n$format, e$onError) || {}
  return t(e$locale, $_275.e(n, s, u))
}
function u(e, t, n, r) {
  if (undefined === r) {
    r = {}
  }
  try {
    return c(e, t, r).format(n)
  } catch (i) {
    e.onError(new $_277.e("FORMAT_ERROR", "Error formatting number.", i))
  }
  return String(n)
}
function l(e, t, n, r) {
  if (undefined === r) {
    r = {}
  }
  try {
    return c(e, t, r).formatToParts(n)
  } catch (i) {
    e.onError(new $_277.e("FORMAT_ERROR", "Error formatting number.", i))
  }
  return []
}
export { u as "2628__part-0__u" }
export { l as "2628__part-0__l" }
