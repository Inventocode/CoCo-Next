import { tT } from "../../../../../unrestored/shared/1571/2636/index__part-144"
import { cA } from "../../../../../unrestored/shared/1571/2636/index__part-161"
import { LA } from "../../../../../unrestored/shared/1571/2636/index__part-168"
import { $A } from "../../../../../unrestored/shared/1571/2636/index__part-169"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../../../../unrestored/shared/1571/2636/18"
import classNames from "classnames"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../unrestored/shared/1571/2636/10/index"
import { useSelector } from /* 16 */"react-redux"
import React, { memo, useState, useRef, useEffect } from "react"
import styles from "../../../../../unrestored/shared/1571/2636/706"

export var nI = React.createContext({
  bulkSelectVisible: false,
  setBulkSelectVisible: function (e) {}
})

export const RightSideMenu = memo(() => {
  var e = useSelector(function (e) {
    return e.common.rightSideActiveMenu
  })
  var t = useSelector(function (e) {
    return e.common.consoleHeight
  })
  var n = useState(false)
  var r = Module_10.a(n, 2)
  var o = r[0]
  var i = r[1]
  var a = useRef(null)
  var s = useRef(null)
  var c = t + 66
  useEffect(function () {
    if (s.current) {
      tT(s.current, function (e, t) {
        var /* [auto-meaningful-name] */a$current
        var r = t.target.classList.toString()
        if (r && !r.includes("SearchInput")) {
          i(false)
          if (!(null === (a$current = a.current) || undefined === a$current)) {
            a$current.cancel()
          }
        }
      })
    }
  }, [i])
  useEffect(function () {
    if (!e) {
      i(false)
    }
  }, [e])
  useEffect(function () {
    var e = function () {
      i(false)
    }
    window.addEventListener("drag", e)
    return function () {
      window.removeEventListener("drag", e)
    }
  }, [])
  useEffect(function () {
    i(false)
  }, [t])
  return <nI.Provider
    value={{
      bulkSelectVisible: o,
      setBulkSelectVisible: i
    }}
  >
    {<div>
      {<div
        className={classNames(styles.content, e && styles.showContent)}
        style={{
          bottom: "".concat(c, "px")
        }}
      >
        {<div
          className={classNames(styles.hideComponent, e === Module_18.h.DevTools && styles.showComponent)}
        >
          {React.createElement(cA, null)}
        </div>}
        {<div
          className={classNames(styles.hideComponent, e === Module_18.h.ResourceLayout && styles.showComponent)}
        >
          {<LA/>}
        </div>}
      </div>}
      {<div
        className={classNames(styles.searchInput, "search-outside")}
        ref={s}
      >
        {<$A
          visible={o}
          setVisible={i}
          ref={a}
        />}
      </div>}
    </div>}
  </nI.Provider>
})
