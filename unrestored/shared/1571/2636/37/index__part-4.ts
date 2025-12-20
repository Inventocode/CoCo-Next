/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：37__part-4
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_18 from "../18"
import * as /* [auto-meaningful-name] */$$_738_66 from "../738/66"
import * as /* [auto-meaningful-name] */$$_2_343 from "../2/343"
var nt = $$_738_66.a.Record({
  header: {
    logo: $$_18.j.Show,
    file: {
      newProject: $$_18.j.Show,
      openMyProject: $$_18.j.Show,
      saveAs: $$_18.j.Show,
      showHistory: $$_18.j.Show,
      openLocalFile: $$_18.j.Show,
      exportLocalFile: $$_18.j.Show
    },
    tutorial: {
      tutorial: $$_18.j.Show,
      feedback: $$_18.j.Show,
      releaseInfo: $$_18.j.Show,
      about: $$_18.j.Show
    },
    help: {
      ruler: $$_18.j.Show,
      stage: $$_18.j.Show
    },
    projectName: $$_18.j.Show,
    coll: $$_18.j.Show,
    save: $$_18.j.Show,
    cloudDBManager: $$_18.j.Show,
    cloudSpaceManager: $$_18.j.Show,
    cutLine: $$_18.j.Show,
    package: $$_18.j.Show,
    userInfo: $$_18.j.Show,
    preventLeave: $$_18.j.Show
  },
  widgetPanel: $$_18.j.Show,
  stage: $$_18.j.Show,
  widgetEditor: $$_18.j.Show,
  workspace: $$_18.j.Show,
  screenPanel: $$_18.j.Show,
  resourceLibrary: $$_18.j.Show
})()
var rt = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : nt
  var t = arguments.length > 1 ? arguments[1] : undefined
  switch (t.type) {
    case $$_2_343.a:
      return e.merge(t.payload)
    case $$_2_343.c:
      return e.mergeDeep(t.payload)
    case $$_2_343.b:
      return e.setIn(["header", "preventLeave"], t.payload)
    default:
      return e
  }
}
export { rt }
