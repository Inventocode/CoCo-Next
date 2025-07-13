import * as r from "../1741/1251";
var i = {};
for (var o in r) if (r.hasOwnProperty(o)) {
  i[r[o]] = o;
}
var a = module.exports = {
  rgb: {
    channels: 3,
    labels: "rgb"
  },
  hsl: {
    channels: 3,
    labels: "hsl"
  },
  hsv: {
    channels: 3,
    labels: "hsv"
  },
  hwb: {
    channels: 3,
    labels: "hwb"
  },
  cmyk: {
    channels: 4,
    labels: "cmyk"
  },
  xyz: {
    channels: 3,
    labels: "xyz"
  },
  lab: {
    channels: 3,
    labels: "lab"
  },
  lch: {
    channels: 3,
    labels: "lch"
  },
  hex: {
    channels: 1,
    labels: ["hex"]
  },
  keyword: {
    channels: 1,
    labels: ["keyword"]
  },
  ansi16: {
    channels: 1,
    labels: ["ansi16"]
  },
  ansi256: {
    channels: 1,
    labels: ["ansi256"]
  },
  hcg: {
    channels: 3,
    labels: ["h", "c", "g"]
  },
  apple: {
    channels: 3,
    labels: ["r16", "g16", "b16"]
  },
  gray: {
    channels: 1,
    labels: ["gray"]
  }
};
for (var s in a) if (a.hasOwnProperty(s)) {
  if (!("channels" in a[s])) {
    throw new Error("missing channels property: " + s);
  }
  if (!("labels" in a[s])) {
    throw new Error("missing channel labels property: " + s);
  }
  if (a[s].labels.length !== a[s].channels) {
    throw new Error("channel and label counts mismatch: " + s);
  }
  var c = a[s].channels;
  var u = a[s].labels;
  delete a[s].channels;
  delete a[s].labels;
  Object.defineProperty(a[s], "channels", {
    value: c
  });
  Object.defineProperty(a[s], "labels", {
    value: u
  });
}
a.rgb.hsl = function (e) {
  var t;
  var n;
  var r = e[0] / 255;
  var i = e[1] / 255;
  var o = e[2] / 255;
  var a = Math.min(r, i, o);
  var s = Math.max(r, i, o);
  var c = s - a;
  if (s === a) {
    t = 0;
  } else {
    if (r === s) {
      t = (i - o) / c;
    } else {
      if (i === s) {
        t = 2 + (o - r) / c;
      } else {
        if (o === s) {
          t = 4 + (r - i) / c;
        }
      }
    }
  }
  if ((t = Math.min(60 * t, 360)) < 0) {
    t += 360;
  }
  n = (a + s) / 2;
  return [t, 100 * (s === a ? 0 : n <= .5 ? c / (s + a) : c / (2 - s - a)), 100 * n];
};
a.rgb.hsv = function (e) {
  var t;
  var n;
  var r;
  var i;
  var o;
  var a = e[0] / 255;
  var s = e[1] / 255;
  var c = e[2] / 255;
  var u = Math.max(a, s, c);
  var l = u - Math.min(a, s, c);
  var f = function (e) {
    return (u - e) / 6 / l + .5;
  };
  if (0 === l) {
    i = o = 0;
  } else {
    o = l / u;
    t = f(a);
    n = f(s);
    r = f(c);
    if (a === u) {
      i = r - n;
    } else {
      if (s === u) {
        i = 1 / 3 + t - r;
      } else {
        if (c === u) {
          i = 2 / 3 + n - t;
        }
      }
    }
    if (i < 0) {
      i += 1;
    } else {
      if (i > 1) {
        i -= 1;
      }
    }
  }
  return [360 * i, 100 * o, 100 * u];
};
a.rgb.hwb = function (e) {
  var t = e[0];
  var n = e[1];
  var r = e[2];
  return [a.rgb.hsl(e)[0], 100 * (1 / 255 * Math.min(t, Math.min(n, r))), 100 * (r = 1 - 1 / 255 * Math.max(t, Math.max(n, r)))];
};
a.rgb.cmyk = function (e) {
  var t;
  var n = e[0] / 255;
  var r = e[1] / 255;
  var i = e[2] / 255;
  return [100 * ((1 - n - (t = Math.min(1 - n, 1 - r, 1 - i))) / (1 - t) || 0), 100 * ((1 - r - t) / (1 - t) || 0), 100 * ((1 - i - t) / (1 - t) || 0), 100 * t];
};
a.rgb.keyword = function (e) {
  var t = i[e];
  if (t) {
    return t;
  }
  var n;
  var o;
  var a;
  var s = 1 / 0;
  for (var c in r) if (r.hasOwnProperty(c)) {
    var u = r[c];
    var l = (o = e, a = u, Math.pow(o[0] - a[0], 2) + Math.pow(o[1] - a[1], 2) + Math.pow(o[2] - a[2], 2));
    if (l < s) {
      s = l;
      n = c;
    }
  }
  return n;
};
a.keyword.rgb = function (e) {
  return r[e];
};
a.rgb.xyz = function (e) {
  var t = e[0] / 255;
  var n = e[1] / 255;
  var r = e[2] / 255;
  return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92)), 100 * (.2126 * t + .7152 * n + .0722 * r), 100 * (.0193 * t + .1192 * n + .9505 * r)];
};
a.rgb.lab = function (e) {
  var t = a.rgb.xyz(e);
  var n = t[0];
  var r = t[1];
  var i = t[2];
  r /= 100;
  i /= 108.883;
  n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116;
  return [116 * (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116) - 16, 500 * (n - r), 200 * (r - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))];
};
a.hsl.rgb = function (e) {
  var t;
  var n;
  var r;
  var i;
  var o;
  var a = e[0] / 360;
  var s = e[1] / 100;
  var c = e[2] / 100;
  if (0 === s) {
    return [o = 255 * c, o, o];
  }
  t = 2 * c - (n = c < .5 ? c * (1 + s) : c + s - c * s);
  i = [0, 0, 0];
  for (var u = 0; u < 3; u++) {
    if ((r = a + 1 / 3 * -(u - 1)) < 0) {
      r++;
    }
    if (r > 1) {
      r--;
    }
    o = 6 * r < 1 ? t + 6 * (n - t) * r : 2 * r < 1 ? n : 3 * r < 2 ? t + (n - t) * (2 / 3 - r) * 6 : t;
    i[u] = 255 * o;
  }
  return i;
};
a.hsl.hsv = function (e) {
  var t = e[0];
  var n = e[1] / 100;
  var r = e[2] / 100;
  var i = n;
  var o = Math.max(r, .01);
  n *= (r *= 2) <= 1 ? r : 2 - r;
  i *= o <= 1 ? o : 2 - o;
  return [t, 100 * (0 === r ? 2 * i / (o + i) : 2 * n / (r + n)), 100 * ((r + n) / 2)];
};
a.hsv.rgb = function (e) {
  var t = e[0] / 60;
  var n = e[1] / 100;
  var r = e[2] / 100;
  var i = Math.floor(t) % 6;
  var o = t - Math.floor(t);
  var a = 255 * r * (1 - n);
  var s = 255 * r * (1 - n * o);
  var c = 255 * r * (1 - n * (1 - o));
  switch (r *= 255, i) {
    case 0:
      return [r, c, a];
    case 1:
      return [s, r, a];
    case 2:
      return [a, r, c];
    case 3:
      return [a, s, r];
    case 4:
      return [c, a, r];
    case 5:
      return [r, a, s];
  }
};
a.hsv.hsl = function (e) {
  var t;
  var n;
  var r;
  var i = e[0];
  var o = e[1] / 100;
  var a = e[2] / 100;
  var s = Math.max(a, .01);
  r = (2 - o) * a;
  n = o * s;
  return [i, 100 * (n = (n /= (t = (2 - o) * s) <= 1 ? t : 2 - t) || 0), 100 * (r /= 2)];
};
a.hwb.rgb = function (e) {
  var t;
  var n;
  var r;
  var i;
  var o;
  var a;
  var s;
  var c = e[0] / 360;
  var u = e[1] / 100;
  var l = e[2] / 100;
  var f = u + l;
  switch (f > 1 && (u /= f, l /= f), r = 6 * c - (t = Math.floor(6 * c)), 0 !== (1 & t) && (r = 1 - r), i = u + r * ((n = 1 - l) - u), t) {
    default:
    case 6:
    case 0:
      o = n;
      a = i;
      s = u;
      break;
    case 1:
      o = i;
      a = n;
      s = u;
      break;
    case 2:
      o = u;
      a = n;
      s = i;
      break;
    case 3:
      o = u;
      a = i;
      s = n;
      break;
    case 4:
      o = i;
      a = u;
      s = n;
      break;
    case 5:
      o = n;
      a = u;
      s = i;
  }
  return [255 * o, 255 * a, 255 * s];
};
a.cmyk.rgb = function (e) {
  var t = e[0] / 100;
  var n = e[1] / 100;
  var r = e[2] / 100;
  var i = e[3] / 100;
  return [255 * (1 - Math.min(1, t * (1 - i) + i)), 255 * (1 - Math.min(1, n * (1 - i) + i)), 255 * (1 - Math.min(1, r * (1 - i) + i))];
};
a.xyz.rgb = function (e) {
  var t;
  var n;
  var r;
  var i = e[0] / 100;
  var o = e[1] / 100;
  var a = e[2] / 100;
  n = -.9689 * i + 1.8758 * o + .0415 * a;
  r = .0557 * i + -.204 * o + 1.057 * a;
  t = (t = 3.2406 * i + -1.5372 * o + -.4986 * a) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t;
  n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n;
  r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r;
  return [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (r = Math.min(Math.max(0, r), 1))];
};
a.xyz.lab = function (e) {
  var t = e[0];
  var n = e[1];
  var r = e[2];
  n /= 100;
  r /= 108.883;
  t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116;
  return [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (t - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))];
};
a.lab.xyz = function (e) {
  var t;
  var n;
  var r;
  var i = e[0];
  t = e[1] / 500 + (n = (i + 16) / 116);
  r = n - e[2] / 200;
  var o = Math.pow(n, 3);
  var a = Math.pow(t, 3);
  var s = Math.pow(r, 3);
  n = o > .008856 ? o : (n - 16 / 116) / 7.787;
  t = a > .008856 ? a : (t - 16 / 116) / 7.787;
  r = s > .008856 ? s : (r - 16 / 116) / 7.787;
  return [t *= 95.047, n *= 100, r *= 108.883];
};
a.lab.lch = function (e) {
  var t;
  var n = e[0];
  var r = e[1];
  var i = e[2];
  if ((t = 360 * Math.atan2(i, r) / 2 / Math.PI) < 0) {
    t += 360;
  }
  return [n, Math.sqrt(r * r + i * i), t];
};
a.lch.lab = function (e) {
  var t;
  var n = e[0];
  var r = e[1];
  t = e[2] / 360 * 2 * Math.PI;
  return [n, r * Math.cos(t), r * Math.sin(t)];
};
a.rgb.ansi16 = function (e) {
  var t = e[0];
  var n = e[1];
  var r = e[2];
  var i = 1 in arguments ? arguments[1] : a.rgb.hsv(e)[2];
  if (0 === (i = Math.round(i / 50))) {
    return 30;
  }
  var o = 30 + (Math.round(r / 255) << 2 | Math.round(n / 255) << 1 | Math.round(t / 255));
  if (2 === i) {
    o += 60;
  }
  return o;
};
a.hsv.ansi16 = function (e) {
  return a.rgb.ansi16(a.hsv.rgb(e), e[2]);
};
a.rgb.ansi256 = function (e) {
  var t = e[0];
  var n = e[1];
  var r = e[2];
  return t === n && n === r ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5);
};
a.ansi16.rgb = function (e) {
  var t = e % 10;
  if (0 === t || 7 === t) {
    if (e > 50) {
      t += 3.5;
    }
    return [t = t / 10.5 * 255, t, t];
  }
  var n = .5 * (1 + ~~(e > 50));
  return [(1 & t) * n * 255, (t >> 1 & 1) * n * 255, (t >> 2 & 1) * n * 255];
};
a.ansi256.rgb = function (e) {
  if (e >= 232) {
    var t = 10 * (e - 232) + 8;
    return [t, t, t];
  }
  var n;
  e -= 16;
  return [Math.floor(e / 36) / 5 * 255, Math.floor((n = e % 36) / 6) / 5 * 255, n % 6 / 5 * 255];
};
a.rgb.hex = function (e) {
  var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();
  return "000000".substring(t.length) + t;
};
a.hex.rgb = function (e) {
  var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!t) {
    return [0, 0, 0];
  }
  var n = t[0];
  if (3 === t[0].length) {
    n = n.split("").map(function (e) {
      return e + e;
    }).join("");
  }
  var r = parseInt(n, 16);
  return [r >> 16 & 255, r >> 8 & 255, 255 & r];
};
a.rgb.hcg = function (e) {
  var t;
  var n = e[0] / 255;
  var r = e[1] / 255;
  var i = e[2] / 255;
  var o = Math.max(Math.max(n, r), i);
  var a = Math.min(Math.min(n, r), i);
  var s = o - a;
  t = s <= 0 ? 0 : o === n ? (r - i) / s % 6 : o === r ? 2 + (i - n) / s : 4 + (n - r) / s + 4;
  t /= 6;
  return [360 * (t %= 1), 100 * s, 100 * (s < 1 ? a / (1 - s) : 0)];
};
a.hsl.hcg = function (e) {
  var t = e[1] / 100;
  var n = e[2] / 100;
  var r = 1;
  var i = 0;
  if ((r = n < .5 ? 2 * t * n : 2 * t * (1 - n)) < 1) {
    i = (n - .5 * r) / (1 - r);
  }
  return [e[0], 100 * r, 100 * i];
};
a.hsv.hcg = function (e) {
  var t = e[1] / 100;
  var n = e[2] / 100;
  var r = t * n;
  var i = 0;
  if (r < 1) {
    i = (n - r) / (1 - r);
  }
  return [e[0], 100 * r, 100 * i];
};
a.hcg.rgb = function (e) {
  var t = e[0] / 360;
  var n = e[1] / 100;
  var r = e[2] / 100;
  if (0 === n) {
    return [255 * r, 255 * r, 255 * r];
  }
  var i;
  var o = [0, 0, 0];
  var a = t % 1 * 6;
  var s = a % 1;
  var c = 1 - s;
  switch (Math.floor(a)) {
    case 0:
      o[0] = 1;
      o[1] = s;
      o[2] = 0;
      break;
    case 1:
      o[0] = c;
      o[1] = 1;
      o[2] = 0;
      break;
    case 2:
      o[0] = 0;
      o[1] = 1;
      o[2] = s;
      break;
    case 3:
      o[0] = 0;
      o[1] = c;
      o[2] = 1;
      break;
    case 4:
      o[0] = s;
      o[1] = 0;
      o[2] = 1;
      break;
    default:
      o[0] = 1;
      o[1] = 0;
      o[2] = c;
  }
  i = (1 - n) * r;
  return [255 * (n * o[0] + i), 255 * (n * o[1] + i), 255 * (n * o[2] + i)];
};
a.hcg.hsv = function (e) {
  var t = e[1] / 100;
  var n = t + e[2] / 100 * (1 - t);
  var r = 0;
  if (n > 0) {
    r = t / n;
  }
  return [e[0], 100 * r, 100 * n];
};
a.hcg.hsl = function (e) {
  var t = e[1] / 100;
  var n = e[2] / 100 * (1 - t) + .5 * t;
  var r = 0;
  if (n > 0 && n < .5) {
    r = t / (2 * n);
  } else {
    if (n >= .5 && n < 1) {
      r = t / (2 * (1 - n));
    }
  }
  return [e[0], 100 * r, 100 * n];
};
a.hcg.hwb = function (e) {
  var t = e[1] / 100;
  var n = t + e[2] / 100 * (1 - t);
  return [e[0], 100 * (n - t), 100 * (1 - n)];
};
a.hwb.hcg = function (e) {
  var t = e[1] / 100;
  var n = 1 - e[2] / 100;
  var r = n - t;
  var i = 0;
  if (r < 1) {
    i = (n - r) / (1 - r);
  }
  return [e[0], 100 * r, 100 * i];
};
a.apple.rgb = function (e) {
  return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255];
};
a.rgb.apple = function (e) {
  return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535];
};
a.gray.rgb = function (e) {
  return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255];
};
a.gray.hsl = a.gray.hsv = function (e) {
  return [0, 0, e[0]];
};
a.gray.hwb = function (e) {
  return [0, 100, e[0]];
};
a.gray.cmyk = function (e) {
  return [0, 0, 0, e[0]];
};
a.gray.lab = function (e) {
  return [e[0], 0, 0];
};
a.gray.hex = function (e) {
  var t = 255 & Math.round(e[0] / 100 * 255);
  var n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
  return "000000".substring(n.length) + n;
};
a.rgb.gray = function (e) {
  return [(e[0] + e[1] + e[2]) / 3 / 255 * 100];
};