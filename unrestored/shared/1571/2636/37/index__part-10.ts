/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：37__part-10
 */

"use strict"

var /* [auto-meaningful-name] */e$sent
var Xn
import * as St from "../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_33 from "../33"
import * as /* [auto-meaningful-name] */$_674_index from "./674/index"
import /* [auto-meaningful-name] */_$_674_index from "./674/index"
import * as /* [auto-meaningful-name] */$_1412_index from "./1412/index"
var tr = []
var nr = false
var rr = false
function or() {
  return ir.apply(this, arguments)
}
function ir() {
  return (ir = St.a(RegeneratorRuntime.mark(function e() {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (e.prev = 0, nr) {
              e.next = 6
              break
            }
            e.next = 4
            return Promise.reject(new Error("module (key: 3326) not found!"))
          case 4:
            e$sent = e.sent
            nr = true
          case 6:
            e.next = 12
            break
          case 8:
            if (e.prev = 8, e.t0 = e.catch(0), !(e.t0.message.indexOf("Loading chunk") > -1)) {
              e.next = 12
              break
            }
            throw Error("No NetWork")
          case 12:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 8]])
  }))).apply(this, arguments)
}
function ar(e, t) {
  return sr.apply(this, arguments)
}
function sr() {
  return (sr = St.a(RegeneratorRuntime.mark(function e(t, n) {
    var r
    var o
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = $_1412_index.a()
            o = {
              id: r,
              file: t,
              callback: n
            }
            e.prev = 2
            e.next = 5
            return or()
          case 5:
            tr.push(o)
            if (!Xn) {
              cr()
            }
            e.next = 12
            break
          case 9:
            e.prev = 9
            e.t0 = e.catch(2)
            mr(o)
          case 12:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[2, 9]])
  }))).apply(this, arguments)
}
function cr() {
  if (0 !== tr.length) {
    if (Xn = new _$_674_index()) {
      Xn.addEventListener("error", function () {
        rr = true
        tr.shift()
      })
      Xn.addEventListener("message", function (e) {
        switch (e.data.type) {
          case "compress_jpeg_done":
          case "compress_png_done":
            (function (e, t) {
              return hr.apply(this, arguments)
            })(e.data.data, e.data.id).catch(function (e) {
              console.error(e)
            })
            break
          case "compress_transparent_png_done":
            (function (e, t) {
              return fr.apply(this, arguments)
            })(e.data.data, e.data.id).catch(function (e) {
              console.error(e)
            })
        }
      })
    }
    lr().catch(function (e) {
      console.error(e)
    })
  }
}
function lr() {
  return ur.apply(this, arguments)
}
function ur() {
  return (ur = St.a(RegeneratorRuntime.mark(function e() {
    var t
    var /* [auto-meaningful-name] */_e$sent
    var /* [auto-meaningful-name] */_e$sent$image_data
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (e$sent) {
              e.next = 3
              break
            }
            e.next = 3
            return or()
          case 3:
            if (0 !== tr.length) {
              e.next = 7
              break
            }
            if (Xn) {
              Xn.terminate()
            }
            Xn = undefined
            return e.abrupt("return")
          case 7:
            t = tr[0]
            e.prev = 8
            e.next = 11
            return e$sent.get_file_img_info(t.file)
          case 11:
            if (!(_e$sent = e.sent)) {
              e.next = 23
              break
            }
            if (_e$sent$image_data = _e$sent.image_data, "image/jpeg" !== _e$sent.type && "image/png" !== _e$sent.type) {
              e.next = 22
              break
            }
            if (!_e$sent.transparent) {
              e.next = 20
              break
            }
            dr(_e$sent$image_data, t, "transparent_png").catch(function (e) {
              console.error(e)
            })
            return e.abrupt("return")
          case 20:
            dr(_e$sent$image_data, t, "mozjpeg").catch(function (e) {
              console.error(e)
            })
            return e.abrupt("return")
          case 22:
            throw Error("not_png_jpg")
          case 23:
            e.next = 31
            break
          case 25:
            e.prev = 25
            e.t0 = e.catch(8)
            console.error(e.t0)
            tr.shift()
            mr(t)
            lr().catch(function (e) {
              console.error(e)
            })
          case 31:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[8, 25]])
  }))).apply(this, arguments)
}
function dr(e, t, n) {
  return pr.apply(this, arguments)
}
function pr() {
  return (pr = St.a(RegeneratorRuntime.mark(function e(t, n, r) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (!rr) {
              e.next = 3
              break
            }
            mr(n)
            return e.abrupt("return")
          case 3:
            if (Xn) {
              Xn.postMessage({
                type: r,
                id: n.id,
                data: t
              })
            } else {
              cr()
            }
          case 4:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function fr() {
  return (fr = St.a(RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */_e$sent2
    var /* [auto-meaningful-name] */_e$sent3
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (e$sent) {
              e.next = 3
              break
            }
            e.next = 3
            return or()
          case 3:
            e.next = 5
            return e$sent.imagedata_to_blob(t, "image/png")
          case 5:
            _e$sent2 = e.sent
            e.next = 8
            return e$sent.blob_to_arrayBuffer(_e$sent2)
          case 8:
            if (_e$sent3 = e.sent, !Xn || rr) {
              e.next = 12
              break
            }
            Xn.postMessage({
              type: "optipng",
              id: n,
              buffer: _e$sent3
            })
            return e.abrupt("return")
          case 12:
            cr()
          case 13:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function hr() {
  return (hr = St.a(RegeneratorRuntime.mark(function e(t, n) {
    var r
    var o
    var /* [auto-meaningful-name] */_e$sent4
    var /* [auto-meaningful-name] */r$file$name
    var s
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (e$sent) {
              e.next = 3
              break
            }
            e.next = 3
            return or()
          case 3:
            if (0 === tr.length) {
              e.next = 23
              break
            }
            if (!(r = tr.shift())) {
              e.next = 23
              break
            }
            if (r.id !== n) {
              e.next = 22
              break
            }
            if (!(t instanceof ImageData)) {
              e.next = 16
              break
            }
            e.next = 10
            return e$sent.imagedata_to_blob(t, r.file.type)
          case 10:
            _e$sent4 = e.sent
            e.next = 13
            return e$sent.blob_to_arrayBuffer(_e$sent4)
          case 13:
            o = e.sent
            e.next = 17
            break
          case 16:
            o = t
          case 17:
            r$file$name = r.file.name
            s = e$sent.get_file_from_array_buffer(o, r.file.type, r$file$name)
            r.callback(s)
            e.next = 23
            break
          case 22:
            mr(r)
          case 23:
            lr().catch(function (e) {
              console.error(e)
            })
          case 24:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function mr(e) {
  e.callback(e.file)
}
export { ar }
