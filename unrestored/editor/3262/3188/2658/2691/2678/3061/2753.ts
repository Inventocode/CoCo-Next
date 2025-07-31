Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyus]{1,6}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g;
exports.matchToToken = function (e) {
  var t = {
    type: "invalid",
    value: e[0],
    closed: void 0
  };
  if (e[1]) {
    t.type = "string";
    t.closed = !(!e[3] && !e[4]);
  } else {
    if (e[5]) {
      t.type = "comment";
    } else {
      if (e[6]) {
        t.type = "comment";
        t.closed = !!e[7];
      } else {
        if (e[8]) {
          t.type = "regex";
        } else {
          if (e[9]) {
            t.type = "number";
          } else {
            if (e[10]) {
              t.type = "name";
            } else {
              if (e[11]) {
                t.type = "punctuator";
              } else {
                if (e[12]) {
                  t.type = "whitespace";
                }
              }
            }
          }
        }
      }
    }
  }
  return t;
};