"use strict";

export { re as Node };
export { U as Parser };
export { R as Position };
export { P as SourceLocation };
export { ae as TokContext };
export { Te as Token };
export { A as TokenType };
export { M as defaultOptions };
export { N as getLineInfo };
export { _ as isIdentifierChar };
export { p as isIdentifierStart };
export { C as isNewLine };
export { y as keywordTypes };
export { E as lineBreak };
export { x as lineBreakG };
export { O as nonASCIIwhitespace };
export { Pe as parse };
export { Ne as parseExpressionAt };
export { se as tokContexts };
export { w as tokTypes };
export { Me as tokenizer };
export { Re as version };
var r = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
};
var i = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";
var o = {
  5: i,
  "5module": i + " export import",
  6: i + " const class extends export import super"
};
var a = /^in(stanceof)?$/;
var s = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ";
var c = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿";
var u = new RegExp("[" + s + "]");
var l = new RegExp("[" + s + c + "]");
s = c = null;
var f = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938];
var d = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
function h(e, t) {
  for (var n = 65536, r = 0; r < t.length; r += 2) {
    if ((n += t[r]) > e) {
      return !1;
    }
    if ((n += t[r + 1]) >= e) {
      return !0;
    }
  }
}
function p(e, t) {
  return e < 65 ? 36 === e : e < 91 || (e < 97 ? 95 === e : e < 123 || (e <= 65535 ? e >= 170 && u.test(String.fromCharCode(e)) : !1 !== t && h(e, f)));
}
function _(e, t) {
  return e < 48 ? 36 === e : e < 58 || !(e < 65) && (e < 91 || (e < 97 ? 95 === e : e < 123 || (e <= 65535 ? e >= 170 && l.test(String.fromCharCode(e)) : !1 !== t && (h(e, f) || h(e, d)))));
}
var A = function (e, t) {
  if (void 0 === t) {
    t = {};
  }
  this.label = e;
  this.keyword = t.keyword;
  this.beforeExpr = !!t.beforeExpr;
  this.startsExpr = !!t.startsExpr;
  this.isLoop = !!t.isLoop;
  this.isAssign = !!t.isAssign;
  this.prefix = !!t.prefix;
  this.postfix = !!t.postfix;
  this.binop = t.binop || null;
  this.updateContext = null;
};
function g(e, t) {
  return new A(e, {
    beforeExpr: !0,
    binop: t
  });
}
var v = {
  beforeExpr: !0
};
var m = {
  startsExpr: !0
};
var y = {};
function b(e, t) {
  if (void 0 === t) {
    t = {};
  }
  t.keyword = e;
  return y[e] = new A(e, t);
}
var w = {
  num: new A("num", m),
  regexp: new A("regexp", m),
  string: new A("string", m),
  name: new A("name", m),
  eof: new A("eof"),
  bracketL: new A("[", {
    beforeExpr: !0,
    startsExpr: !0
  }),
  bracketR: new A("]"),
  braceL: new A("{", {
    beforeExpr: !0,
    startsExpr: !0
  }),
  braceR: new A("}"),
  parenL: new A("(", {
    beforeExpr: !0,
    startsExpr: !0
  }),
  parenR: new A(")"),
  comma: new A(",", v),
  semi: new A(";", v),
  colon: new A(":", v),
  dot: new A("."),
  question: new A("?", v),
  questionDot: new A("?."),
  arrow: new A("=>", v),
  template: new A("template"),
  invalidTemplate: new A("invalidTemplate"),
  ellipsis: new A("...", v),
  backQuote: new A("`", m),
  dollarBraceL: new A("${", {
    beforeExpr: !0,
    startsExpr: !0
  }),
  eq: new A("=", {
    beforeExpr: !0,
    isAssign: !0
  }),
  assign: new A("_=", {
    beforeExpr: !0,
    isAssign: !0
  }),
  incDec: new A("++/--", {
    prefix: !0,
    postfix: !0,
    startsExpr: !0
  }),
  prefix: new A("!/~", {
    beforeExpr: !0,
    prefix: !0,
    startsExpr: !0
  }),
  logicalOR: g("||", 1),
  logicalAND: g("&&", 2),
  bitwiseOR: g("|", 3),
  bitwiseXOR: g("^", 4),
  bitwiseAND: g("&", 5),
  equality: g("==/!=/===/!==", 6),
  relational: g("</>/<=/>=", 7),
  bitShift: g("<</>>/>>>", 8),
  plusMin: new A("+/-", {
    beforeExpr: !0,
    binop: 9,
    prefix: !0,
    startsExpr: !0
  }),
  modulo: g("%", 10),
  star: g("*", 10),
  slash: g("/", 10),
  starstar: new A("**", {
    beforeExpr: !0
  }),
  coalesce: g("??", 1),
  _break: b("break"),
  _case: b("case", v),
  _catch: b("catch"),
  _continue: b("continue"),
  _debugger: b("debugger"),
  _default: b("default", v),
  _do: b("do", {
    isLoop: !0,
    beforeExpr: !0
  }),
  _else: b("else", v),
  _finally: b("finally"),
  _for: b("for", {
    isLoop: !0
  }),
  _function: b("function", m),
  _if: b("if"),
  _return: b("return", v),
  _switch: b("switch"),
  _throw: b("throw", v),
  _try: b("try"),
  _var: b("var"),
  _const: b("const"),
  _while: b("while", {
    isLoop: !0
  }),
  _with: b("with"),
  _new: b("new", {
    beforeExpr: !0,
    startsExpr: !0
  }),
  _this: b("this", m),
  _super: b("super", m),
  _class: b("class", m),
  _extends: b("extends", v),
  _export: b("export"),
  _import: b("import", m),
  _null: b("null", m),
  _true: b("true", m),
  _false: b("false", m),
  _in: b("in", {
    beforeExpr: !0,
    binop: 7
  }),
  _instanceof: b("instanceof", {
    beforeExpr: !0,
    binop: 7
  }),
  _typeof: b("typeof", {
    beforeExpr: !0,
    prefix: !0,
    startsExpr: !0
  }),
  _void: b("void", {
    beforeExpr: !0,
    prefix: !0,
    startsExpr: !0
  }),
  _delete: b("delete", {
    beforeExpr: !0,
    prefix: !0,
    startsExpr: !0
  })
};
var E = /\r\n?|\n|\u2028|\u2029/;
var x = new RegExp(E.source, "g");
function C(e, t) {
  return 10 === e || 13 === e || !t && (8232 === e || 8233 === e);
}
var O = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
var k = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
var S = Object.prototype;
var T = S.hasOwnProperty;
var B = S.toString;
function D(e, t) {
  return T.call(e, t);
}
var I = Array.isArray || function (e) {
  return "[object Array]" === B.call(e);
};
function F(e) {
  return new RegExp("^(?:" + e.replace(/ /g, "|") + ")$");
}
var R = function (e, t) {
  this.line = e;
  this.column = t;
};
R.prototype.offset = function (e) {
  return new R(this.line, this.column + e);
};
var P = function (e, t, n) {
  this.start = t;
  this.end = n;
  if (null !== e.sourceFile) {
    this.source = e.sourceFile;
  }
};
function N(e, t) {
  for (var n = 1, r = 0;;) {
    x.lastIndex = r;
    var i = x.exec(e);
    if (!(i && i.index < t)) {
      return new R(n, t - r);
    }
    ++n;
    r = i.index + i[0].length;
  }
}
var M = {
  ecmaVersion: 10,
  sourceType: "script",
  onInsertedSemicolon: null,
  onTrailingComma: null,
  allowReserved: null,
  allowReturnOutsideFunction: !1,
  allowImportExportEverywhere: !1,
  allowAwaitOutsideFunction: !1,
  allowHashBang: !1,
  locations: !1,
  onToken: null,
  onComment: null,
  ranges: !1,
  program: null,
  sourceFile: null,
  directSourceFile: null,
  preserveParens: !1
};
function j(e) {
  var t = {};
  for (var n in M) t[n] = e && D(e, n) ? e[n] : M[n];
  if (t.ecmaVersion >= 2015) {
    t.ecmaVersion -= 2009;
  }
  if (null == t.allowReserved) {
    t.allowReserved = t.ecmaVersion < 5;
  }
  if (I(t.onToken)) {
    var r = t.onToken;
    t.onToken = function (e) {
      return r.push(e);
    };
  }
  if (I(t.onComment)) {
    t.onComment = function (e, t) {
      return function (n, r, i, o, a, s) {
        var c = {
          type: n ? "Block" : "Line",
          value: r,
          start: i,
          end: o
        };
        if (e.locations) {
          c.loc = new P(this, a, s);
        }
        if (e.ranges) {
          c.range = [i, o];
        }
        t.push(c);
      };
    }(t, t.onComment);
  }
  return t;
}
function L(e, t) {
  return 2 | (e ? 4 : 0) | (t ? 8 : 0);
}
var U = function (e, t, n) {
  this.options = e = j(e);
  this.sourceFile = e.sourceFile;
  this.keywords = F(o[e.ecmaVersion >= 6 ? 6 : "module" === e.sourceType ? "5module" : 5]);
  var i = "";
  if (!0 !== e.allowReserved) {
    for (var a = e.ecmaVersion; !(i = r[a]); a--) {
      ;
    }
    if ("module" === e.sourceType) {
      i += " await";
    }
  }
  this.reservedWords = F(i);
  var s = (i ? i + " " : "") + r.strict;
  this.reservedWordsStrict = F(s);
  this.reservedWordsStrictBind = F(s + " " + r.strictBind);
  this.input = String(t);
  this.containsEsc = !1;
  if (n) {
    this.pos = n;
    this.lineStart = this.input.lastIndexOf("\n", n - 1) + 1;
    this.curLine = this.input.slice(0, this.lineStart).split(E).length;
  } else {
    this.pos = this.lineStart = 0;
    this.curLine = 1;
  }
  this.type = w.eof;
  this.value = null;
  this.start = this.end = this.pos;
  this.startLoc = this.endLoc = this.curPosition();
  this.lastTokEndLoc = this.lastTokStartLoc = null;
  this.lastTokStart = this.lastTokEnd = this.pos;
  this.context = this.initialContext();
  this.exprAllowed = !0;
  this.inModule = "module" === e.sourceType;
  this.strict = this.inModule || this.strictDirective(this.pos);
  this.potentialArrowAt = -1;
  this.yieldPos = this.awaitPos = this.awaitIdentPos = 0;
  this.labels = [];
  this.undefinedExports = {};
  if (0 === this.pos && e.allowHashBang && "#!" === this.input.slice(0, 2)) {
    this.skipLineComment(2);
  }
  this.scopeStack = [];
  this.enterScope(1);
  this.regexpState = null;
};
var H = {
  inFunction: {
    configurable: !0
  },
  inGenerator: {
    configurable: !0
  },
  inAsync: {
    configurable: !0
  },
  allowSuper: {
    configurable: !0
  },
  allowDirectSuper: {
    configurable: !0
  },
  treatFunctionsAsVar: {
    configurable: !0
  }
};
U.prototype.parse = function () {
  var e = this.options.program || this.startNode();
  this.nextToken();
  return this.parseTopLevel(e);
};
H.inFunction.get = function () {
  return (2 & this.currentVarScope().flags) > 0;
};
H.inGenerator.get = function () {
  return (8 & this.currentVarScope().flags) > 0;
};
H.inAsync.get = function () {
  return (4 & this.currentVarScope().flags) > 0;
};
H.allowSuper.get = function () {
  return (64 & this.currentThisScope().flags) > 0;
};
H.allowDirectSuper.get = function () {
  return (128 & this.currentThisScope().flags) > 0;
};
H.treatFunctionsAsVar.get = function () {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
U.prototype.inNonArrowFunction = function () {
  return (2 & this.currentThisScope().flags) > 0;
};
U.extend = function () {
  for (var e = [], t = arguments.length; t--;) {
    e[t] = arguments[t];
  }
  for (var n = this, r = 0; r < e.length; r++) {
    n = e[r](n);
  }
  return n;
};
U.parse = function (e, t) {
  return new this(t, e).parse();
};
U.parseExpressionAt = function (e, t, n) {
  var r = new this(n, e, t);
  r.nextToken();
  return r.parseExpression();
};
U.tokenizer = function (e, t) {
  return new this(t, e);
};
Object.defineProperties(U.prototype, H);
var V = U.prototype;
var G = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
function z() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
}
V.strictDirective = function (e) {
  for (;;) {
    k.lastIndex = e;
    e += k.exec(this.input)[0].length;
    var t = G.exec(this.input.slice(e));
    if (!t) {
      return !1;
    }
    if ("use strict" === (t[1] || t[2])) {
      k.lastIndex = e + t[0].length;
      var n = k.exec(this.input);
      var r = n.index + n[0].length;
      var i = this.input.charAt(r);
      return ";" === i || "}" === i || E.test(n[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(i) || "!" === i && "=" === this.input.charAt(r + 1));
    }
    e += t[0].length;
    k.lastIndex = e;
    e += k.exec(this.input)[0].length;
    if (";" === this.input[e]) {
      e++;
    }
  }
};
V.eat = function (e) {
  return this.type === e && (this.next(), !0);
};
V.isContextual = function (e) {
  return this.type === w.name && this.value === e && !this.containsEsc;
};
V.eatContextual = function (e) {
  return !!this.isContextual(e) && (this.next(), !0);
};
V.expectContextual = function (e) {
  if (!this.eatContextual(e)) {
    this.unexpected();
  }
};
V.canInsertSemicolon = function () {
  return this.type === w.eof || this.type === w.braceR || E.test(this.input.slice(this.lastTokEnd, this.start));
};
V.insertSemicolon = function () {
  if (this.canInsertSemicolon()) {
    if (this.options.onInsertedSemicolon) {
      this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc);
    }
    return !0;
  }
};
V.semicolon = function () {
  if (!(this.eat(w.semi) || this.insertSemicolon())) {
    this.unexpected();
  }
};
V.afterTrailingComma = function (e, t) {
  if (this.type === e) {
    if (this.options.onTrailingComma) {
      this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc);
    }
    if (!t) {
      this.next();
    }
    return !0;
  }
};
V.expect = function (e) {
  if (!this.eat(e)) {
    this.unexpected();
  }
};
V.unexpected = function (e) {
  this.raise(null != e ? e : this.start, "Unexpected token");
};
V.checkPatternErrors = function (e, t) {
  if (e) {
    if (e.trailingComma > -1) {
      this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
    }
    var n = t ? e.parenthesizedAssign : e.parenthesizedBind;
    if (n > -1) {
      this.raiseRecoverable(n, "Parenthesized pattern");
    }
  }
};
V.checkExpressionErrors = function (e, t) {
  if (!e) {
    return !1;
  }
  var n = e.shorthandAssign;
  var r = e.doubleProto;
  if (!t) {
    return n >= 0 || r >= 0;
  }
  if (n >= 0) {
    this.raise(n, "Shorthand property assignments are valid only in destructuring patterns");
  }
  if (r >= 0) {
    this.raiseRecoverable(r, "Redefinition of __proto__ property");
  }
};
V.checkYieldAwaitInDefaultParams = function () {
  if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos)) {
    this.raise(this.yieldPos, "Yield expression cannot be a default value");
  }
  if (this.awaitPos) {
    this.raise(this.awaitPos, "Await expression cannot be a default value");
  }
};
V.isSimpleAssignTarget = function (e) {
  return "ParenthesizedExpression" === e.type ? this.isSimpleAssignTarget(e.expression) : "Identifier" === e.type || "MemberExpression" === e.type;
};
var Q = U.prototype;
Q.parseTopLevel = function (e) {
  var t = {};
  for (e.body || (e.body = []); this.type !== w.eof;) {
    var n = this.parseStatement(null, !0, t);
    e.body.push(n);
  }
  if (this.inModule) {
    for (var r = 0, i = Object.keys(this.undefinedExports); r < i.length; r += 1) {
      var o = i[r];
      this.raiseRecoverable(this.undefinedExports[o].start, "Export '" + o + "' is not defined");
    }
  }
  this.adaptDirectivePrologue(e.body);
  this.next();
  e.sourceType = this.options.sourceType;
  return this.finishNode(e, "Program");
};
var W = {
  kind: "loop"
};
var K = {
  kind: "switch"
};
Q.isLet = function (e) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let")) {
    return !1;
  }
  k.lastIndex = this.pos;
  var t = k.exec(this.input);
  var n = this.pos + t[0].length;
  var r = this.input.charCodeAt(n);
  if (91 === r) {
    return !0;
  }
  if (e) {
    return !1;
  }
  if (123 === r) {
    return !0;
  }
  if (p(r, !0)) {
    for (var i = n + 1; _(this.input.charCodeAt(i), !0);) {
      ++i;
    }
    var o = this.input.slice(n, i);
    if (!a.test(o)) {
      return !0;
    }
  }
  return !1;
};
Q.isAsyncFunction = function () {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async")) {
    return !1;
  }
  k.lastIndex = this.pos;
  var e = k.exec(this.input);
  var t = this.pos + e[0].length;
  return !E.test(this.input.slice(this.pos, t)) && "function" === this.input.slice(t, t + 8) && (t + 8 === this.input.length || !_(this.input.charAt(t + 8)));
};
Q.parseStatement = function (e, t, n) {
  var r;
  var i = this.type;
  var o = this.startNode();
  switch (this.isLet(e) && (i = w._var, r = "let"), i) {
    case w._break:
    case w._continue:
      return this.parseBreakContinueStatement(o, i.keyword);
    case w._debugger:
      return this.parseDebuggerStatement(o);
    case w._do:
      return this.parseDoStatement(o);
    case w._for:
      return this.parseForStatement(o);
    case w._function:
      if (e && (this.strict || "if" !== e && "label" !== e) && this.options.ecmaVersion >= 6) {
        this.unexpected();
      }
      return this.parseFunctionStatement(o, !1, !e);
    case w._class:
      if (e) {
        this.unexpected();
      }
      return this.parseClass(o, !0);
    case w._if:
      return this.parseIfStatement(o);
    case w._return:
      return this.parseReturnStatement(o);
    case w._switch:
      return this.parseSwitchStatement(o);
    case w._throw:
      return this.parseThrowStatement(o);
    case w._try:
      return this.parseTryStatement(o);
    case w._const:
    case w._var:
      r = r || this.value;
      if (e && "var" !== r) {
        this.unexpected();
      }
      return this.parseVarStatement(o, r);
    case w._while:
      return this.parseWhileStatement(o);
    case w._with:
      return this.parseWithStatement(o);
    case w.braceL:
      return this.parseBlock(!0, o);
    case w.semi:
      return this.parseEmptyStatement(o);
    case w._export:
    case w._import:
      if (this.options.ecmaVersion > 10 && i === w._import) {
        k.lastIndex = this.pos;
        var a = k.exec(this.input);
        var s = this.pos + a[0].length;
        var c = this.input.charCodeAt(s);
        if (40 === c || 46 === c) {
          return this.parseExpressionStatement(o, this.parseExpression());
        }
      }
      if (!this.options.allowImportExportEverywhere) {
        if (!t) {
          this.raise(this.start, "'import' and 'export' may only appear at the top level");
        }
        if (!this.inModule) {
          this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'");
        }
      }
      return i === w._import ? this.parseImport(o) : this.parseExport(o, n);
    default:
      if (this.isAsyncFunction()) {
        if (e) {
          this.unexpected();
        }
        this.next();
        return this.parseFunctionStatement(o, !0, !e);
      }
      var u = this.value,
        l = this.parseExpression();
      return i === w.name && "Identifier" === l.type && this.eat(w.colon) ? this.parseLabeledStatement(o, u, l, e) : this.parseExpressionStatement(o, l);
  }
};
Q.parseBreakContinueStatement = function (e, t) {
  var n = "break" === t;
  this.next();
  if (this.eat(w.semi) || this.insertSemicolon()) {
    e.label = null;
  } else {
    if (this.type !== w.name) {
      this.unexpected();
    } else {
      e.label = this.parseIdent();
      this.semicolon();
    }
  }
  for (var r = 0; r < this.labels.length; ++r) {
    var i = this.labels[r];
    if (null == e.label || i.name === e.label.name) {
      if (null != i.kind && (n || "loop" === i.kind)) {
        break;
      }
      if (e.label && n) {
        break;
      }
    }
  }
  if (r === this.labels.length) {
    this.raise(e.start, "Unsyntactic " + t);
  }
  return this.finishNode(e, n ? "BreakStatement" : "ContinueStatement");
};
Q.parseDebuggerStatement = function (e) {
  this.next();
  this.semicolon();
  return this.finishNode(e, "DebuggerStatement");
};
Q.parseDoStatement = function (e) {
  this.next();
  this.labels.push(W);
  e.body = this.parseStatement("do");
  this.labels.pop();
  this.expect(w._while);
  e.test = this.parseParenExpression();
  if (this.options.ecmaVersion >= 6) {
    this.eat(w.semi);
  } else {
    this.semicolon();
  }
  return this.finishNode(e, "DoWhileStatement");
};
Q.parseForStatement = function (e) {
  this.next();
  var t = this.options.ecmaVersion >= 9 && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction) && this.eatContextual("await") ? this.lastTokStart : -1;
  this.labels.push(W);
  this.enterScope(0);
  this.expect(w.parenL);
  if (this.type === w.semi) {
    if (t > -1) {
      this.unexpected(t);
    }
    return this.parseFor(e, null);
  }
  var n = this.isLet();
  if (this.type === w._var || this.type === w._const || n) {
    var r = this.startNode();
    var i = n ? "let" : this.value;
    this.next();
    this.parseVar(r, !0, i);
    this.finishNode(r, "VariableDeclaration");
    return (this.type === w._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && 1 === r.declarations.length ? (this.options.ecmaVersion >= 9 && (this.type === w._in ? t > -1 && this.unexpected(t) : e.await = t > -1), this.parseForIn(e, r)) : (t > -1 && this.unexpected(t), this.parseFor(e, r));
  }
  var o = new z();
  var a = this.parseExpression(!0, o);
  return this.type === w._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? (this.options.ecmaVersion >= 9 && (this.type === w._in ? t > -1 && this.unexpected(t) : e.await = t > -1), this.toAssignable(a, !1, o), this.checkLVal(a), this.parseForIn(e, a)) : (this.checkExpressionErrors(o, !0), t > -1 && this.unexpected(t), this.parseFor(e, a));
};
Q.parseFunctionStatement = function (e, t, n) {
  this.next();
  return this.parseFunction(e, Y | (n ? 0 : q), !1, t);
};
Q.parseIfStatement = function (e) {
  this.next();
  e.test = this.parseParenExpression();
  e.consequent = this.parseStatement("if");
  e.alternate = this.eat(w._else) ? this.parseStatement("if") : null;
  return this.finishNode(e, "IfStatement");
};
Q.parseReturnStatement = function (e) {
  if (!(this.inFunction || this.options.allowReturnOutsideFunction)) {
    this.raise(this.start, "'return' outside of function");
  }
  this.next();
  if (this.eat(w.semi) || this.insertSemicolon()) {
    e.argument = null;
  } else {
    e.argument = this.parseExpression();
    this.semicolon();
  }
  return this.finishNode(e, "ReturnStatement");
};
Q.parseSwitchStatement = function (e) {
  var t;
  this.next();
  e.discriminant = this.parseParenExpression();
  e.cases = [];
  this.expect(w.braceL);
  this.labels.push(K);
  this.enterScope(0);
  for (var n = !1; this.type !== w.braceR;) {
    if (this.type === w._case || this.type === w._default) {
      var r = this.type === w._case;
      if (t) {
        this.finishNode(t, "SwitchCase");
      }
      e.cases.push(t = this.startNode());
      t.consequent = [];
      this.next();
      if (r) {
        t.test = this.parseExpression();
      } else {
        if (n) {
          this.raiseRecoverable(this.lastTokStart, "Multiple default clauses");
        }
        n = !0;
        t.test = null;
      }
      this.expect(w.colon);
    } else {
      if (!t) {
        this.unexpected();
      }
      t.consequent.push(this.parseStatement(null));
    }
  }
  this.exitScope();
  if (t) {
    this.finishNode(t, "SwitchCase");
  }
  this.next();
  this.labels.pop();
  return this.finishNode(e, "SwitchStatement");
};
Q.parseThrowStatement = function (e) {
  this.next();
  if (E.test(this.input.slice(this.lastTokEnd, this.start))) {
    this.raise(this.lastTokEnd, "Illegal newline after throw");
  }
  e.argument = this.parseExpression();
  this.semicolon();
  return this.finishNode(e, "ThrowStatement");
};
var X = [];
Q.parseTryStatement = function (e) {
  this.next();
  e.block = this.parseBlock();
  e.handler = null;
  if (this.type === w._catch) {
    var t = this.startNode();
    this.next();
    if (this.eat(w.parenL)) {
      t.param = this.parseBindingAtom();
      var n = "Identifier" === t.param.type;
      this.enterScope(n ? 32 : 0);
      this.checkLVal(t.param, n ? 4 : 2);
      this.expect(w.parenR);
    } else {
      if (this.options.ecmaVersion < 10) {
        this.unexpected();
      }
      t.param = null;
      this.enterScope(0);
    }
    t.body = this.parseBlock(!1);
    this.exitScope();
    e.handler = this.finishNode(t, "CatchClause");
  }
  e.finalizer = this.eat(w._finally) ? this.parseBlock() : null;
  if (!(e.handler || e.finalizer)) {
    this.raise(e.start, "Missing catch or finally clause");
  }
  return this.finishNode(e, "TryStatement");
};
Q.parseVarStatement = function (e, t) {
  this.next();
  this.parseVar(e, !1, t);
  this.semicolon();
  return this.finishNode(e, "VariableDeclaration");
};
Q.parseWhileStatement = function (e) {
  this.next();
  e.test = this.parseParenExpression();
  this.labels.push(W);
  e.body = this.parseStatement("while");
  this.labels.pop();
  return this.finishNode(e, "WhileStatement");
};
Q.parseWithStatement = function (e) {
  if (this.strict) {
    this.raise(this.start, "'with' in strict mode");
  }
  this.next();
  e.object = this.parseParenExpression();
  e.body = this.parseStatement("with");
  return this.finishNode(e, "WithStatement");
};
Q.parseEmptyStatement = function (e) {
  this.next();
  return this.finishNode(e, "EmptyStatement");
};
Q.parseLabeledStatement = function (e, t, n, r) {
  for (var i = 0, o = this.labels; i < o.length; i += 1) {
    if (o[i].name === t) {
      this.raise(n.start, "Label '" + t + "' is already declared");
    }
  }
  for (var a = this.type.isLoop ? "loop" : this.type === w._switch ? "switch" : null, s = this.labels.length - 1; s >= 0; s--) {
    var c = this.labels[s];
    if (c.statementStart !== e.start) {
      break;
    }
    c.statementStart = this.start;
    c.kind = a;
  }
  this.labels.push({
    name: t,
    kind: a,
    statementStart: this.start
  });
  e.body = this.parseStatement(r ? -1 === r.indexOf("label") ? r + "label" : r : "label");
  this.labels.pop();
  e.label = n;
  return this.finishNode(e, "LabeledStatement");
};
Q.parseExpressionStatement = function (e, t) {
  e.expression = t;
  this.semicolon();
  return this.finishNode(e, "ExpressionStatement");
};
Q.parseBlock = function (e, t, n) {
  for (void 0 === e && (e = !0), void 0 === t && (t = this.startNode()), t.body = [], this.expect(w.braceL), e && this.enterScope(0); this.type !== w.braceR;) {
    var r = this.parseStatement(null);
    t.body.push(r);
  }
  if (n) {
    this.strict = !1;
  }
  this.next();
  if (e) {
    this.exitScope();
  }
  return this.finishNode(t, "BlockStatement");
};
Q.parseFor = function (e, t) {
  e.init = t;
  this.expect(w.semi);
  e.test = this.type === w.semi ? null : this.parseExpression();
  this.expect(w.semi);
  e.update = this.type === w.parenR ? null : this.parseExpression();
  this.expect(w.parenR);
  e.body = this.parseStatement("for");
  this.exitScope();
  this.labels.pop();
  return this.finishNode(e, "ForStatement");
};
Q.parseForIn = function (e, t) {
  var n = this.type === w._in;
  this.next();
  if ("VariableDeclaration" === t.type && null != t.declarations[0].init && (!n || this.options.ecmaVersion < 8 || this.strict || "var" !== t.kind || "Identifier" !== t.declarations[0].id.type)) {
    this.raise(t.start, (n ? "for-in" : "for-of") + " loop variable declaration may not have an initializer");
  } else {
    if ("AssignmentPattern" === t.type) {
      this.raise(t.start, "Invalid left-hand side in for-loop");
    }
  }
  e.left = t;
  e.right = n ? this.parseExpression() : this.parseMaybeAssign();
  this.expect(w.parenR);
  e.body = this.parseStatement("for");
  this.exitScope();
  this.labels.pop();
  return this.finishNode(e, n ? "ForInStatement" : "ForOfStatement");
};
Q.parseVar = function (e, t, n) {
  for (e.declarations = [], e.kind = n;;) {
    var r = this.startNode();
    this.parseVarId(r, n);
    if (this.eat(w.eq)) {
      r.init = this.parseMaybeAssign(t);
    } else {
      if ("const" !== n || this.type === w._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) {
        if ("Identifier" === r.id.type || t && (this.type === w._in || this.isContextual("of"))) {
          r.init = null;
        } else {
          this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value");
        }
      } else {
        this.unexpected();
      }
    }
    e.declarations.push(this.finishNode(r, "VariableDeclarator"));
    if (!this.eat(w.comma)) {
      break;
    }
  }
  return e;
};
Q.parseVarId = function (e, t) {
  e.id = this.parseBindingAtom();
  this.checkLVal(e.id, "var" === t ? 1 : 2, !1);
};
var Y = 1;
var q = 2;
Q.parseFunction = function (e, t, n, r) {
  this.initFunction(e);
  if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !r) {
    if (this.type === w.star && t & q) {
      this.unexpected();
    }
    e.generator = this.eat(w.star);
  }
  if (this.options.ecmaVersion >= 8) {
    e.async = !!r;
  }
  if (t & Y) {
    e.id = 4 & t && this.type !== w.name ? null : this.parseIdent();
    if (!(!e.id || t & q)) {
      this.checkLVal(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? 1 : 2 : 3);
    }
  }
  var i = this.yieldPos;
  var o = this.awaitPos;
  var a = this.awaitIdentPos;
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  this.enterScope(L(e.async, e.generator));
  if (!(t & Y)) {
    e.id = this.type === w.name ? this.parseIdent() : null;
  }
  this.parseFunctionParams(e);
  this.parseFunctionBody(e, n, !1);
  this.yieldPos = i;
  this.awaitPos = o;
  this.awaitIdentPos = a;
  return this.finishNode(e, t & Y ? "FunctionDeclaration" : "FunctionExpression");
};
Q.parseFunctionParams = function (e) {
  this.expect(w.parenL);
  e.params = this.parseBindingList(w.parenR, !1, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
};
Q.parseClass = function (e, t) {
  this.next();
  var n = this.strict;
  this.strict = !0;
  this.parseClassId(e, t);
  this.parseClassSuper(e);
  var r = this.startNode();
  var i = !1;
  for (r.body = [], this.expect(w.braceL); this.type !== w.braceR;) {
    var o = this.parseClassElement(null !== e.superClass);
    if (o) {
      r.body.push(o);
      if ("MethodDefinition" === o.type && "constructor" === o.kind) {
        if (i) {
          this.raise(o.start, "Duplicate constructor in the same class");
        }
        i = !0;
      }
    }
  }
  this.strict = n;
  this.next();
  e.body = this.finishNode(r, "ClassBody");
  return this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression");
};
Q.parseClassElement = function (e) {
  var t = this;
  if (this.eat(w.semi)) {
    return null;
  }
  var n = this.startNode();
  var r = function (e, r) {
    if (void 0 === r) {
      r = !1;
    }
    var i = t.start;
    var o = t.startLoc;
    return !!t.eatContextual(e) && (!(t.type === w.parenL || r && t.canInsertSemicolon()) || (n.key && t.unexpected(), n.computed = !1, n.key = t.startNodeAt(i, o), n.key.name = e, t.finishNode(n.key, "Identifier"), !1));
  };
  n.kind = "method";
  n.static = r("static");
  var i = this.eat(w.star);
  var o = !1;
  if (!i) {
    if (this.options.ecmaVersion >= 8 && r("async", !0)) {
      o = !0;
      i = this.options.ecmaVersion >= 9 && this.eat(w.star);
    } else {
      if (r("get")) {
        n.kind = "get";
      } else {
        if (r("set")) {
          n.kind = "set";
        }
      }
    }
  }
  if (!n.key) {
    this.parsePropertyName(n);
  }
  var a = n.key;
  var s = !1;
  if (n.computed || n.static || !("Identifier" === a.type && "constructor" === a.name || "Literal" === a.type && "constructor" === a.value)) {
    if (n.static && "Identifier" === a.type && "prototype" === a.name) {
      this.raise(a.start, "Classes may not have a static property named prototype");
    }
  } else {
    if ("method" !== n.kind) {
      this.raise(a.start, "Constructor can't have get/set modifier");
    }
    if (i) {
      this.raise(a.start, "Constructor can't be a generator");
    }
    if (o) {
      this.raise(a.start, "Constructor can't be an async method");
    }
    n.kind = "constructor";
    s = e;
  }
  this.parseClassMethod(n, i, o, s);
  if ("get" === n.kind && 0 !== n.value.params.length) {
    this.raiseRecoverable(n.value.start, "getter should have no params");
  }
  if ("set" === n.kind && 1 !== n.value.params.length) {
    this.raiseRecoverable(n.value.start, "setter should have exactly one param");
  }
  if ("set" === n.kind && "RestElement" === n.value.params[0].type) {
    this.raiseRecoverable(n.value.params[0].start, "Setter cannot use rest params");
  }
  return n;
};
Q.parseClassMethod = function (e, t, n, r) {
  e.value = this.parseMethod(t, n, r);
  return this.finishNode(e, "MethodDefinition");
};
Q.parseClassId = function (e, t) {
  if (this.type === w.name) {
    e.id = this.parseIdent();
    if (t) {
      this.checkLVal(e.id, 2, !1);
    }
  } else {
    if (!0 === t) {
      this.unexpected();
    }
    e.id = null;
  }
};
Q.parseClassSuper = function (e) {
  e.superClass = this.eat(w._extends) ? this.parseExprSubscripts() : null;
};
Q.parseExport = function (e, t) {
  this.next();
  if (this.eat(w.star)) {
    if (this.options.ecmaVersion >= 11) {
      if (this.eatContextual("as")) {
        e.exported = this.parseIdent(!0);
        this.checkExport(t, e.exported.name, this.lastTokStart);
      } else {
        e.exported = null;
      }
    }
    this.expectContextual("from");
    if (this.type !== w.string) {
      this.unexpected();
    }
    e.source = this.parseExprAtom();
    this.semicolon();
    return this.finishNode(e, "ExportAllDeclaration");
  }
  if (this.eat(w._default)) {
    var n;
    this.checkExport(t, "default", this.lastTokStart);
    if (this.type === w._function || (n = this.isAsyncFunction())) {
      var r = this.startNode();
      this.next();
      if (n) {
        this.next();
      }
      e.declaration = this.parseFunction(r, 4 | Y, !1, n);
    } else if (this.type === w._class) {
      var i = this.startNode();
      e.declaration = this.parseClass(i, "nullableID");
    } else {
      e.declaration = this.parseMaybeAssign();
      this.semicolon();
    }
    return this.finishNode(e, "ExportDefaultDeclaration");
  }
  if (this.shouldParseExportStatement()) {
    e.declaration = this.parseStatement(null);
    if ("VariableDeclaration" === e.declaration.type) {
      this.checkVariableExport(t, e.declaration.declarations);
    } else {
      this.checkExport(t, e.declaration.id.name, e.declaration.id.start);
    }
    e.specifiers = [];
    e.source = null;
  } else {
    e.declaration = null;
    e.specifiers = this.parseExportSpecifiers(t);
    if (this.eatContextual("from")) {
      if (this.type !== w.string) {
        this.unexpected();
      }
      e.source = this.parseExprAtom();
    } else {
      for (var o = 0, a = e.specifiers; o < a.length; o += 1) {
        var s = a[o];
        this.checkUnreserved(s.local);
        this.checkLocalExport(s.local);
      }
      e.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(e, "ExportNamedDeclaration");
};
Q.checkExport = function (e, t, n) {
  if (e) {
    if (D(e, t)) {
      this.raiseRecoverable(n, "Duplicate export '" + t + "'");
    }
    e[t] = !0;
  }
};
Q.checkPatternExport = function (e, t) {
  var n = t.type;
  if ("Identifier" === n) {
    this.checkExport(e, t.name, t.start);
  } else if ("ObjectPattern" === n) {
    for (var r = 0, i = t.properties; r < i.length; r += 1) {
      var o = i[r];
      this.checkPatternExport(e, o);
    }
  } else if ("ArrayPattern" === n) {
    for (var a = 0, s = t.elements; a < s.length; a += 1) {
      var c = s[a];
      if (c) {
        this.checkPatternExport(e, c);
      }
    }
  } else if ("Property" === n) {
    this.checkPatternExport(e, t.value);
  } else {
    if ("AssignmentPattern" === n) {
      this.checkPatternExport(e, t.left);
    } else {
      if ("RestElement" === n) {
        this.checkPatternExport(e, t.argument);
      } else {
        if ("ParenthesizedExpression" === n) {
          this.checkPatternExport(e, t.expression);
        }
      }
    }
  }
};
Q.checkVariableExport = function (e, t) {
  if (e) {
    for (var n = 0, r = t; n < r.length; n += 1) {
      var i = r[n];
      this.checkPatternExport(e, i.id);
    }
  }
};
Q.shouldParseExportStatement = function () {
  return "var" === this.type.keyword || "const" === this.type.keyword || "class" === this.type.keyword || "function" === this.type.keyword || this.isLet() || this.isAsyncFunction();
};
Q.parseExportSpecifiers = function (e) {
  var t = [];
  var n = !0;
  for (this.expect(w.braceL); !this.eat(w.braceR);) {
    if (n) {
      n = !1;
    } else if (this.expect(w.comma), this.afterTrailingComma(w.braceR)) {
      break;
    }
    var r = this.startNode();
    r.local = this.parseIdent(!0);
    r.exported = this.eatContextual("as") ? this.parseIdent(!0) : r.local;
    this.checkExport(e, r.exported.name, r.exported.start);
    t.push(this.finishNode(r, "ExportSpecifier"));
  }
  return t;
};
Q.parseImport = function (e) {
  this.next();
  if (this.type === w.string) {
    e.specifiers = X;
    e.source = this.parseExprAtom();
  } else {
    e.specifiers = this.parseImportSpecifiers();
    this.expectContextual("from");
    e.source = this.type === w.string ? this.parseExprAtom() : this.unexpected();
  }
  this.semicolon();
  return this.finishNode(e, "ImportDeclaration");
};
Q.parseImportSpecifiers = function () {
  var e = [];
  var t = !0;
  if (this.type === w.name) {
    var n = this.startNode();
    n.local = this.parseIdent();
    this.checkLVal(n.local, 2);
    e.push(this.finishNode(n, "ImportDefaultSpecifier"));
    if (!this.eat(w.comma)) {
      return e;
    }
  }
  if (this.type === w.star) {
    var r = this.startNode();
    this.next();
    this.expectContextual("as");
    r.local = this.parseIdent();
    this.checkLVal(r.local, 2);
    e.push(this.finishNode(r, "ImportNamespaceSpecifier"));
    return e;
  }
  for (this.expect(w.braceL); !this.eat(w.braceR);) {
    if (t) {
      t = !1;
    } else if (this.expect(w.comma), this.afterTrailingComma(w.braceR)) {
      break;
    }
    var i = this.startNode();
    i.imported = this.parseIdent(!0);
    if (this.eatContextual("as")) {
      i.local = this.parseIdent();
    } else {
      this.checkUnreserved(i.imported);
      i.local = i.imported;
    }
    this.checkLVal(i.local, 2);
    e.push(this.finishNode(i, "ImportSpecifier"));
  }
  return e;
};
Q.adaptDirectivePrologue = function (e) {
  for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t) {
    e[t].directive = e[t].expression.raw.slice(1, -1);
  }
};
Q.isDirectiveCandidate = function (e) {
  return "ExpressionStatement" === e.type && "Literal" === e.expression.type && "string" === typeof e.expression.value && ("\"" === this.input[e.start] || "'" === this.input[e.start]);
};
var $ = U.prototype;
$.toAssignable = function (e, t, n) {
  if (this.options.ecmaVersion >= 6 && e) {
    switch (e.type) {
      case "Identifier":
        if (this.inAsync && "await" === e.name) {
          this.raise(e.start, "Cannot use 'await' as identifier inside an async function");
        }
        break;
      case "ObjectPattern":
      case "ArrayPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        e.type = "ObjectPattern";
        if (n) {
          this.checkPatternErrors(n, !0);
        }
        for (var r = 0, i = e.properties; r < i.length; r += 1) {
          var o = i[r];
          this.toAssignable(o, t);
          if (!("RestElement" !== o.type || "ArrayPattern" !== o.argument.type && "ObjectPattern" !== o.argument.type)) {
            this.raise(o.argument.start, "Unexpected token");
          }
        }
        break;
      case "Property":
        if ("init" !== e.kind) {
          this.raise(e.key.start, "Object pattern can't contain getter or setter");
        }
        this.toAssignable(e.value, t);
        break;
      case "ArrayExpression":
        e.type = "ArrayPattern";
        if (n) {
          this.checkPatternErrors(n, !0);
        }
        this.toAssignableList(e.elements, t);
        break;
      case "SpreadElement":
        e.type = "RestElement";
        this.toAssignable(e.argument, t);
        if ("AssignmentPattern" === e.argument.type) {
          this.raise(e.argument.start, "Rest elements cannot have a default value");
        }
        break;
      case "AssignmentExpression":
        if ("=" !== e.operator) {
          this.raise(e.left.end, "Only '=' operator can be used for specifying default value.");
        }
        e.type = "AssignmentPattern";
        delete e.operator;
        this.toAssignable(e.left, t);
      case "AssignmentPattern":
        break;
      case "ParenthesizedExpression":
        this.toAssignable(e.expression, t, n);
        break;
      case "ChainExpression":
        this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        if (!t) {
          break;
        }
      default:
        this.raise(e.start, "Assigning to rvalue");
    }
  } else if (n) {
    this.checkPatternErrors(n, !0);
  }
  return e;
};
$.toAssignableList = function (e, t) {
  for (var n = e.length, r = 0; r < n; r++) {
    var i = e[r];
    if (i) {
      this.toAssignable(i, t);
    }
  }
  if (n) {
    var o = e[n - 1];
    if (6 === this.options.ecmaVersion && t && o && "RestElement" === o.type && "Identifier" !== o.argument.type) {
      this.unexpected(o.argument.start);
    }
  }
  return e;
};
$.parseSpread = function (e) {
  var t = this.startNode();
  this.next();
  t.argument = this.parseMaybeAssign(!1, e);
  return this.finishNode(t, "SpreadElement");
};
$.parseRestBinding = function () {
  var e = this.startNode();
  this.next();
  if (6 === this.options.ecmaVersion && this.type !== w.name) {
    this.unexpected();
  }
  e.argument = this.parseBindingAtom();
  return this.finishNode(e, "RestElement");
};
$.parseBindingAtom = function () {
  if (this.options.ecmaVersion >= 6) {
    switch (this.type) {
      case w.bracketL:
        var e = this.startNode();
        this.next();
        e.elements = this.parseBindingList(w.bracketR, !0, !0);
        return this.finishNode(e, "ArrayPattern");
      case w.braceL:
        return this.parseObj(!0);
    }
  }
  return this.parseIdent();
};
$.parseBindingList = function (e, t, n) {
  for (var r = [], i = !0; !this.eat(e);) {
    if (i) {
      i = !1;
    } else {
      this.expect(w.comma);
    }
    if (t && this.type === w.comma) {
      r.push(null);
    } else {
      if (n && this.afterTrailingComma(e)) {
        break;
      }
      if (this.type === w.ellipsis) {
        var o = this.parseRestBinding();
        this.parseBindingListItem(o);
        r.push(o);
        if (this.type === w.comma) {
          this.raise(this.start, "Comma is not permitted after the rest element");
        }
        this.expect(e);
        break;
      }
      var a = this.parseMaybeDefault(this.start, this.startLoc);
      this.parseBindingListItem(a);
      r.push(a);
    }
  }
  return r;
};
$.parseBindingListItem = function (e) {
  return e;
};
$.parseMaybeDefault = function (e, t, n) {
  n = n || this.parseBindingAtom();
  if (this.options.ecmaVersion < 6 || !this.eat(w.eq)) {
    return n;
  }
  var r = this.startNodeAt(e, t);
  r.left = n;
  r.right = this.parseMaybeAssign();
  return this.finishNode(r, "AssignmentPattern");
};
$.checkLVal = function (e, t, n) {
  switch (void 0 === t && (t = 0), e.type) {
    case "Identifier":
      if (2 === t && "let" === e.name) {
        this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name");
      }
      if (this.strict && this.reservedWordsStrictBind.test(e.name)) {
        this.raiseRecoverable(e.start, (t ? "Binding " : "Assigning to ") + e.name + " in strict mode");
      }
      if (n) {
        if (D(n, e.name)) {
          this.raiseRecoverable(e.start, "Argument name clash");
        }
        n[e.name] = !0;
      }
      if (0 !== t && 5 !== t) {
        this.declareName(e.name, t, e.start);
      }
      break;
    case "ChainExpression":
      this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      if (t) {
        this.raiseRecoverable(e.start, "Binding member expression");
      }
      break;
    case "ObjectPattern":
      for (var r = 0, i = e.properties; r < i.length; r += 1) {
        var o = i[r];
        this.checkLVal(o, t, n);
      }
      break;
    case "Property":
      this.checkLVal(e.value, t, n);
      break;
    case "ArrayPattern":
      for (var a = 0, s = e.elements; a < s.length; a += 1) {
        var c = s[a];
        if (c) {
          this.checkLVal(c, t, n);
        }
      }
      break;
    case "AssignmentPattern":
      this.checkLVal(e.left, t, n);
      break;
    case "RestElement":
      this.checkLVal(e.argument, t, n);
      break;
    case "ParenthesizedExpression":
      this.checkLVal(e.expression, t, n);
      break;
    default:
      this.raise(e.start, (t ? "Binding" : "Assigning to") + " rvalue");
  }
};
var J = U.prototype;
J.checkPropClash = function (e, t, n) {
  if (!(this.options.ecmaVersion >= 9 && "SpreadElement" === e.type) && !(this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))) {
    var r;
    var i = e.key;
    switch (i.type) {
      case "Identifier":
        r = i.name;
        break;
      case "Literal":
        r = String(i.value);
        break;
      default:
        return;
    }
    var o = e.kind;
    if (this.options.ecmaVersion >= 6) {
      if ("__proto__" === r && "init" === o) {
        if (t.proto) {
          if (n) {
            if (n.doubleProto < 0) {
              n.doubleProto = i.start;
            }
          } else {
            this.raiseRecoverable(i.start, "Redefinition of __proto__ property");
          }
        }
        t.proto = !0;
      }
    } else {
      var a = t[r = "$" + r];
      if (a) {
        if ("init" === o ? this.strict && a.init || a.get || a.set : a.init || a[o]) {
          this.raiseRecoverable(i.start, "Redefinition of property");
        }
      } else {
        a = t[r] = {
          init: !1,
          get: !1,
          set: !1
        };
      }
      a[o] = !0;
    }
  }
};
J.parseExpression = function (e, t) {
  var n = this.start;
  var r = this.startLoc;
  var i = this.parseMaybeAssign(e, t);
  if (this.type === w.comma) {
    var o = this.startNodeAt(n, r);
    for (o.expressions = [i]; this.eat(w.comma);) {
      o.expressions.push(this.parseMaybeAssign(e, t));
    }
    return this.finishNode(o, "SequenceExpression");
  }
  return i;
};
J.parseMaybeAssign = function (e, t, n) {
  if (this.isContextual("yield")) {
    if (this.inGenerator) {
      return this.parseYield(e);
    }
    this.exprAllowed = !1;
  }
  var r = !1;
  var i = -1;
  var o = -1;
  if (t) {
    i = t.parenthesizedAssign;
    o = t.trailingComma;
    t.parenthesizedAssign = t.trailingComma = -1;
  } else {
    t = new z();
    r = !0;
  }
  var a = this.start;
  var s = this.startLoc;
  if (!(this.type !== w.parenL && this.type !== w.name)) {
    this.potentialArrowAt = this.start;
  }
  var c = this.parseMaybeConditional(e, t);
  if (n) {
    c = n.call(this, c, a, s);
  }
  if (this.type.isAssign) {
    var u = this.startNodeAt(a, s);
    u.operator = this.value;
    u.left = this.type === w.eq ? this.toAssignable(c, !1, t) : c;
    if (!r) {
      t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1;
    }
    if (t.shorthandAssign >= u.left.start) {
      t.shorthandAssign = -1;
    }
    this.checkLVal(c);
    this.next();
    u.right = this.parseMaybeAssign(e);
    return this.finishNode(u, "AssignmentExpression");
  }
  if (r) {
    this.checkExpressionErrors(t, !0);
  }
  if (i > -1) {
    t.parenthesizedAssign = i;
  }
  if (o > -1) {
    t.trailingComma = o;
  }
  return c;
};
J.parseMaybeConditional = function (e, t) {
  var n = this.start;
  var r = this.startLoc;
  var i = this.parseExprOps(e, t);
  if (this.checkExpressionErrors(t)) {
    return i;
  }
  if (this.eat(w.question)) {
    var o = this.startNodeAt(n, r);
    o.test = i;
    o.consequent = this.parseMaybeAssign();
    this.expect(w.colon);
    o.alternate = this.parseMaybeAssign(e);
    return this.finishNode(o, "ConditionalExpression");
  }
  return i;
};
J.parseExprOps = function (e, t) {
  var n = this.start;
  var r = this.startLoc;
  var i = this.parseMaybeUnary(t, !1);
  return this.checkExpressionErrors(t) || i.start === n && "ArrowFunctionExpression" === i.type ? i : this.parseExprOp(i, n, r, -1, e);
};
J.parseExprOp = function (e, t, n, r, i) {
  var o = this.type.binop;
  if (null != o && (!i || this.type !== w._in) && o > r) {
    var a = this.type === w.logicalOR || this.type === w.logicalAND;
    var s = this.type === w.coalesce;
    if (s) {
      o = w.logicalAND.binop;
    }
    var c = this.value;
    this.next();
    var u = this.start;
    var l = this.startLoc;
    var f = this.parseExprOp(this.parseMaybeUnary(null, !1), u, l, o, i);
    var d = this.buildBinary(t, n, e, f, c, a || s);
    if (a && this.type === w.coalesce || s && (this.type === w.logicalOR || this.type === w.logicalAND)) {
      this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
    }
    return this.parseExprOp(d, t, n, r, i);
  }
  return e;
};
J.buildBinary = function (e, t, n, r, i, o) {
  var a = this.startNodeAt(e, t);
  a.left = n;
  a.operator = i;
  a.right = r;
  return this.finishNode(a, o ? "LogicalExpression" : "BinaryExpression");
};
J.parseMaybeUnary = function (e, t) {
  var n;
  var r = this.start;
  var i = this.startLoc;
  if (this.isContextual("await") && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction)) {
    n = this.parseAwait();
    t = !0;
  } else if (this.type.prefix) {
    var o = this.startNode();
    var a = this.type === w.incDec;
    o.operator = this.value;
    o.prefix = !0;
    this.next();
    o.argument = this.parseMaybeUnary(null, !0);
    this.checkExpressionErrors(e, !0);
    if (a) {
      this.checkLVal(o.argument);
    } else {
      if (this.strict && "delete" === o.operator && "Identifier" === o.argument.type) {
        this.raiseRecoverable(o.start, "Deleting local variable in strict mode");
      } else {
        t = !0;
      }
    }
    n = this.finishNode(o, a ? "UpdateExpression" : "UnaryExpression");
  } else {
    n = this.parseExprSubscripts(e);
    if (this.checkExpressionErrors(e)) {
      return n;
    }
    for (; this.type.postfix && !this.canInsertSemicolon();) {
      var s = this.startNodeAt(r, i);
      s.operator = this.value;
      s.prefix = !1;
      s.argument = n;
      this.checkLVal(n);
      this.next();
      n = this.finishNode(s, "UpdateExpression");
    }
  }
  return !t && this.eat(w.starstar) ? this.buildBinary(r, i, n, this.parseMaybeUnary(null, !1), "**", !1) : n;
};
J.parseExprSubscripts = function (e) {
  var t = this.start;
  var n = this.startLoc;
  var r = this.parseExprAtom(e);
  if ("ArrowFunctionExpression" === r.type && ")" !== this.input.slice(this.lastTokStart, this.lastTokEnd)) {
    return r;
  }
  var i = this.parseSubscripts(r, t, n);
  if (e && "MemberExpression" === i.type) {
    if (e.parenthesizedAssign >= i.start) {
      e.parenthesizedAssign = -1;
    }
    if (e.parenthesizedBind >= i.start) {
      e.parenthesizedBind = -1;
    }
  }
  return i;
};
J.parseSubscripts = function (e, t, n, r) {
  for (var i = this.options.ecmaVersion >= 8 && "Identifier" === e.type && "async" === e.name && this.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start === 5 && this.potentialArrowAt === e.start, o = !1;;) {
    var a = this.parseSubscript(e, t, n, r, i, o);
    if (a.optional) {
      o = !0;
    }
    if (a === e || "ArrowFunctionExpression" === a.type) {
      if (o) {
        var s = this.startNodeAt(t, n);
        s.expression = a;
        a = this.finishNode(s, "ChainExpression");
      }
      return a;
    }
    e = a;
  }
};
J.parseSubscript = function (e, t, n, r, i, o) {
  var a = this.options.ecmaVersion >= 11;
  var s = a && this.eat(w.questionDot);
  if (r && s) {
    this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  }
  var c = this.eat(w.bracketL);
  if (c || s && this.type !== w.parenL && this.type !== w.backQuote || this.eat(w.dot)) {
    var u = this.startNodeAt(t, n);
    u.object = e;
    u.property = c ? this.parseExpression() : this.parseIdent("never" !== this.options.allowReserved);
    u.computed = !!c;
    if (c) {
      this.expect(w.bracketR);
    }
    if (a) {
      u.optional = s;
    }
    e = this.finishNode(u, "MemberExpression");
  } else if (!r && this.eat(w.parenL)) {
    var l = new z();
    var f = this.yieldPos;
    var d = this.awaitPos;
    var h = this.awaitIdentPos;
    this.yieldPos = 0;
    this.awaitPos = 0;
    this.awaitIdentPos = 0;
    var p = this.parseExprList(w.parenR, this.options.ecmaVersion >= 8, !1, l);
    if (i && !s && !this.canInsertSemicolon() && this.eat(w.arrow)) {
      this.checkPatternErrors(l, !1);
      this.checkYieldAwaitInDefaultParams();
      if (this.awaitIdentPos > 0) {
        this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function");
      }
      this.yieldPos = f;
      this.awaitPos = d;
      this.awaitIdentPos = h;
      return this.parseArrowExpression(this.startNodeAt(t, n), p, !0);
    }
    this.checkExpressionErrors(l, !0);
    this.yieldPos = f || this.yieldPos;
    this.awaitPos = d || this.awaitPos;
    this.awaitIdentPos = h || this.awaitIdentPos;
    var _ = this.startNodeAt(t, n);
    _.callee = e;
    _.arguments = p;
    if (a) {
      _.optional = s;
    }
    e = this.finishNode(_, "CallExpression");
  } else if (this.type === w.backQuote) {
    if (s || o) {
      this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    }
    var A = this.startNodeAt(t, n);
    A.tag = e;
    A.quasi = this.parseTemplate({
      isTagged: !0
    });
    e = this.finishNode(A, "TaggedTemplateExpression");
  }
  return e;
};
J.parseExprAtom = function (e) {
  if (this.type === w.slash) {
    this.readRegexp();
  }
  var t;
  var n = this.potentialArrowAt === this.start;
  switch (this.type) {
    case w._super:
      if (!this.allowSuper) {
        this.raise(this.start, "'super' keyword outside a method");
      }
      t = this.startNode();
      this.next();
      if (!(this.type !== w.parenL || this.allowDirectSuper)) {
        this.raise(t.start, "super() call outside constructor of a subclass");
      }
      if (this.type !== w.dot && this.type !== w.bracketL && this.type !== w.parenL) {
        this.unexpected();
      }
      return this.finishNode(t, "Super");
    case w._this:
      t = this.startNode();
      this.next();
      return this.finishNode(t, "ThisExpression");
    case w.name:
      var r = this.start,
        i = this.startLoc,
        o = this.containsEsc,
        a = this.parseIdent(!1);
      if (this.options.ecmaVersion >= 8 && !o && "async" === a.name && !this.canInsertSemicolon() && this.eat(w._function)) {
        return this.parseFunction(this.startNodeAt(r, i), 0, !1, !0);
      }
      if (n && !this.canInsertSemicolon()) {
        if (this.eat(w.arrow)) {
          return this.parseArrowExpression(this.startNodeAt(r, i), [a], !1);
        }
        if (this.options.ecmaVersion >= 8 && "async" === a.name && this.type === w.name && !o) {
          a = this.parseIdent(!1);
          if (!(!this.canInsertSemicolon() && this.eat(w.arrow))) {
            this.unexpected();
          }
          return this.parseArrowExpression(this.startNodeAt(r, i), [a], !0);
        }
      }
      return a;
    case w.regexp:
      var s = this.value;
      (t = this.parseLiteral(s.value)).regex = {
        pattern: s.pattern,
        flags: s.flags
      };
      return t;
    case w.num:
    case w.string:
      return this.parseLiteral(this.value);
    case w._null:
    case w._true:
    case w._false:
      (t = this.startNode()).value = this.type === w._null ? null : this.type === w._true;
      t.raw = this.type.keyword;
      this.next();
      return this.finishNode(t, "Literal");
    case w.parenL:
      var c = this.start,
        u = this.parseParenAndDistinguishExpression(n);
      if (e) {
        if (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(u)) {
          e.parenthesizedAssign = c;
        }
        if (e.parenthesizedBind < 0) {
          e.parenthesizedBind = c;
        }
      }
      return u;
    case w.bracketL:
      t = this.startNode();
      this.next();
      t.elements = this.parseExprList(w.bracketR, !0, !0, e);
      return this.finishNode(t, "ArrayExpression");
    case w.braceL:
      return this.parseObj(!1, e);
    case w._function:
      t = this.startNode();
      this.next();
      return this.parseFunction(t, 0);
    case w._class:
      return this.parseClass(this.startNode(), !1);
    case w._new:
      return this.parseNew();
    case w.backQuote:
      return this.parseTemplate();
    case w._import:
      return this.options.ecmaVersion >= 11 ? this.parseExprImport() : this.unexpected();
    default:
      this.unexpected();
  }
};
J.parseExprImport = function () {
  var e = this.startNode();
  if (this.containsEsc) {
    this.raiseRecoverable(this.start, "Escape sequence in keyword import");
  }
  var t = this.parseIdent(!0);
  switch (this.type) {
    case w.parenL:
      return this.parseDynamicImport(e);
    case w.dot:
      e.meta = t;
      return this.parseImportMeta(e);
    default:
      this.unexpected();
  }
};
J.parseDynamicImport = function (e) {
  this.next();
  e.source = this.parseMaybeAssign();
  if (!this.eat(w.parenR)) {
    var t = this.start;
    if (this.eat(w.comma) && this.eat(w.parenR)) {
      this.raiseRecoverable(t, "Trailing comma is not allowed in import()");
    } else {
      this.unexpected(t);
    }
  }
  return this.finishNode(e, "ImportExpression");
};
J.parseImportMeta = function (e) {
  this.next();
  var t = this.containsEsc;
  e.property = this.parseIdent(!0);
  if ("meta" !== e.property.name) {
    this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'");
  }
  if (t) {
    this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters");
  }
  if ("module" !== this.options.sourceType) {
    this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module");
  }
  return this.finishNode(e, "MetaProperty");
};
J.parseLiteral = function (e) {
  var t = this.startNode();
  t.value = e;
  t.raw = this.input.slice(this.start, this.end);
  if (110 === t.raw.charCodeAt(t.raw.length - 1)) {
    t.bigint = t.raw.slice(0, -1).replace(/_/g, "");
  }
  this.next();
  return this.finishNode(t, "Literal");
};
J.parseParenExpression = function () {
  this.expect(w.parenL);
  var e = this.parseExpression();
  this.expect(w.parenR);
  return e;
};
J.parseParenAndDistinguishExpression = function (e) {
  var t;
  var n = this.start;
  var r = this.startLoc;
  var i = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var o;
    var a = this.start;
    var s = this.startLoc;
    var c = [];
    var u = !0;
    var l = !1;
    var f = new z();
    var d = this.yieldPos;
    var h = this.awaitPos;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== w.parenR;) {
      if (u) {
        u = !1;
      } else {
        this.expect(w.comma);
      }
      if (i && this.afterTrailingComma(w.parenR, !0)) {
        l = !0;
        break;
      }
      if (this.type === w.ellipsis) {
        o = this.start;
        c.push(this.parseParenItem(this.parseRestBinding()));
        if (this.type === w.comma) {
          this.raise(this.start, "Comma is not permitted after the rest element");
        }
        break;
      }
      c.push(this.parseMaybeAssign(!1, f, this.parseParenItem));
    }
    var p = this.start;
    var _ = this.startLoc;
    this.expect(w.parenR);
    if (e && !this.canInsertSemicolon() && this.eat(w.arrow)) {
      this.checkPatternErrors(f, !1);
      this.checkYieldAwaitInDefaultParams();
      this.yieldPos = d;
      this.awaitPos = h;
      return this.parseParenArrowList(n, r, c);
    }
    if (!(c.length && !l)) {
      this.unexpected(this.lastTokStart);
    }
    if (o) {
      this.unexpected(o);
    }
    this.checkExpressionErrors(f, !0);
    this.yieldPos = d || this.yieldPos;
    this.awaitPos = h || this.awaitPos;
    if (c.length > 1) {
      (t = this.startNodeAt(a, s)).expressions = c;
      this.finishNodeAt(t, "SequenceExpression", p, _);
    } else {
      t = c[0];
    }
  } else {
    t = this.parseParenExpression();
  }
  if (this.options.preserveParens) {
    var A = this.startNodeAt(n, r);
    A.expression = t;
    return this.finishNode(A, "ParenthesizedExpression");
  }
  return t;
};
J.parseParenItem = function (e) {
  return e;
};
J.parseParenArrowList = function (e, t, n) {
  return this.parseArrowExpression(this.startNodeAt(e, t), n);
};
var Z = [];
J.parseNew = function () {
  if (this.containsEsc) {
    this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  }
  var e = this.startNode();
  var t = this.parseIdent(!0);
  if (this.options.ecmaVersion >= 6 && this.eat(w.dot)) {
    e.meta = t;
    var n = this.containsEsc;
    e.property = this.parseIdent(!0);
    if ("target" !== e.property.name) {
      this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'");
    }
    if (n) {
      this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters");
    }
    if (!this.inNonArrowFunction()) {
      this.raiseRecoverable(e.start, "'new.target' can only be used in functions");
    }
    return this.finishNode(e, "MetaProperty");
  }
  var r = this.start;
  var i = this.startLoc;
  var o = this.type === w._import;
  e.callee = this.parseSubscripts(this.parseExprAtom(), r, i, !0);
  if (o && "ImportExpression" === e.callee.type) {
    this.raise(r, "Cannot use new with import()");
  }
  if (this.eat(w.parenL)) {
    e.arguments = this.parseExprList(w.parenR, this.options.ecmaVersion >= 8, !1);
  } else {
    e.arguments = Z;
  }
  return this.finishNode(e, "NewExpression");
};
J.parseTemplateElement = function (e) {
  var t = e.isTagged;
  var n = this.startNode();
  if (this.type === w.invalidTemplate) {
    if (!t) {
      this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
    }
    n.value = {
      raw: this.value,
      cooked: null
    };
  } else {
    n.value = {
      raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
      cooked: this.value
    };
  }
  this.next();
  n.tail = this.type === w.backQuote;
  return this.finishNode(n, "TemplateElement");
};
J.parseTemplate = function (e) {
  if (void 0 === e) {
    e = {};
  }
  var t = e.isTagged;
  if (void 0 === t) {
    t = !1;
  }
  var n = this.startNode();
  this.next();
  n.expressions = [];
  var r = this.parseTemplateElement({
    isTagged: t
  });
  for (n.quasis = [r]; !r.tail;) {
    if (this.type === w.eof) {
      this.raise(this.pos, "Unterminated template literal");
    }
    this.expect(w.dollarBraceL);
    n.expressions.push(this.parseExpression());
    this.expect(w.braceR);
    n.quasis.push(r = this.parseTemplateElement({
      isTagged: t
    }));
  }
  this.next();
  return this.finishNode(n, "TemplateLiteral");
};
J.isAsyncProp = function (e) {
  return !e.computed && "Identifier" === e.key.type && "async" === e.key.name && (this.type === w.name || this.type === w.num || this.type === w.string || this.type === w.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === w.star) && !E.test(this.input.slice(this.lastTokEnd, this.start));
};
J.parseObj = function (e, t) {
  var n = this.startNode();
  var r = !0;
  var i = {};
  for (n.properties = [], this.next(); !this.eat(w.braceR);) {
    if (r) {
      r = !1;
    } else if (this.expect(w.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(w.braceR)) {
      break;
    }
    var o = this.parseProperty(e, t);
    if (!e) {
      this.checkPropClash(o, i, t);
    }
    n.properties.push(o);
  }
  return this.finishNode(n, e ? "ObjectPattern" : "ObjectExpression");
};
J.parseProperty = function (e, t) {
  var n;
  var r;
  var i;
  var o;
  var a = this.startNode();
  if (this.options.ecmaVersion >= 9 && this.eat(w.ellipsis)) {
    return e ? (a.argument = this.parseIdent(!1), this.type === w.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.finishNode(a, "RestElement")) : (this.type === w.parenL && t && (t.parenthesizedAssign < 0 && (t.parenthesizedAssign = this.start), t.parenthesizedBind < 0 && (t.parenthesizedBind = this.start)), a.argument = this.parseMaybeAssign(!1, t), this.type === w.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start), this.finishNode(a, "SpreadElement"));
  }
  if (this.options.ecmaVersion >= 6) {
    a.method = !1;
    a.shorthand = !1;
    if (e || t) {
      i = this.start;
      o = this.startLoc;
    }
    if (!e) {
      n = this.eat(w.star);
    }
  }
  var s = this.containsEsc;
  this.parsePropertyName(a);
  if (!e && !s && this.options.ecmaVersion >= 8 && !n && this.isAsyncProp(a)) {
    r = !0;
    n = this.options.ecmaVersion >= 9 && this.eat(w.star);
    this.parsePropertyName(a, t);
  } else {
    r = !1;
  }
  this.parsePropertyValue(a, e, n, r, i, o, t, s);
  return this.finishNode(a, "Property");
};
J.parsePropertyValue = function (e, t, n, r, i, o, a, s) {
  if ((n || r) && this.type === w.colon) {
    this.unexpected();
  }
  if (this.eat(w.colon)) {
    e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, a);
    e.kind = "init";
  } else if (this.options.ecmaVersion >= 6 && this.type === w.parenL) {
    if (t) {
      this.unexpected();
    }
    e.kind = "init";
    e.method = !0;
    e.value = this.parseMethod(n, r);
  } else if (t || s || !(this.options.ecmaVersion >= 5) || e.computed || "Identifier" !== e.key.type || "get" !== e.key.name && "set" !== e.key.name || this.type === w.comma || this.type === w.braceR || this.type === w.eq) {
    if (this.options.ecmaVersion >= 6 && !e.computed && "Identifier" === e.key.type) {
      if (n || r) {
        this.unexpected();
      }
      this.checkUnreserved(e.key);
      if (!("await" !== e.key.name || this.awaitIdentPos)) {
        this.awaitIdentPos = i;
      }
      e.kind = "init";
      if (t) {
        e.value = this.parseMaybeDefault(i, o, e.key);
      } else {
        if (this.type === w.eq && a) {
          if (a.shorthandAssign < 0) {
            a.shorthandAssign = this.start;
          }
          e.value = this.parseMaybeDefault(i, o, e.key);
        } else {
          e.value = e.key;
        }
      }
      e.shorthand = !0;
    } else {
      this.unexpected();
    }
  } else {
    if (n || r) {
      this.unexpected();
    }
    e.kind = e.key.name;
    this.parsePropertyName(e);
    e.value = this.parseMethod(!1);
    var c = "get" === e.kind ? 0 : 1;
    if (e.value.params.length !== c) {
      var u = e.value.start;
      if ("get" === e.kind) {
        this.raiseRecoverable(u, "getter should have no params");
      } else {
        this.raiseRecoverable(u, "setter should have exactly one param");
      }
    } else if ("set" === e.kind && "RestElement" === e.value.params[0].type) {
      this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
    }
  }
};
J.parsePropertyName = function (e) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(w.bracketL)) {
      e.computed = !0;
      e.key = this.parseMaybeAssign();
      this.expect(w.bracketR);
      return e.key;
    }
    e.computed = !1;
  }
  return e.key = this.type === w.num || this.type === w.string ? this.parseExprAtom() : this.parseIdent("never" !== this.options.allowReserved);
};
J.initFunction = function (e) {
  e.id = null;
  if (this.options.ecmaVersion >= 6) {
    e.generator = e.expression = !1;
  }
  if (this.options.ecmaVersion >= 8) {
    e.async = !1;
  }
};
J.parseMethod = function (e, t, n) {
  var r = this.startNode();
  var i = this.yieldPos;
  var o = this.awaitPos;
  var a = this.awaitIdentPos;
  this.initFunction(r);
  if (this.options.ecmaVersion >= 6) {
    r.generator = e;
  }
  if (this.options.ecmaVersion >= 8) {
    r.async = !!t;
  }
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  this.enterScope(64 | L(t, r.generator) | (n ? 128 : 0));
  this.expect(w.parenL);
  r.params = this.parseBindingList(w.parenR, !1, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
  this.parseFunctionBody(r, !1, !0);
  this.yieldPos = i;
  this.awaitPos = o;
  this.awaitIdentPos = a;
  return this.finishNode(r, "FunctionExpression");
};
J.parseArrowExpression = function (e, t, n) {
  var r = this.yieldPos;
  var i = this.awaitPos;
  var o = this.awaitIdentPos;
  this.enterScope(16 | L(n, !1));
  this.initFunction(e);
  if (this.options.ecmaVersion >= 8) {
    e.async = !!n;
  }
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  e.params = this.toAssignableList(t, !0);
  this.parseFunctionBody(e, !0, !1);
  this.yieldPos = r;
  this.awaitPos = i;
  this.awaitIdentPos = o;
  return this.finishNode(e, "ArrowFunctionExpression");
};
J.parseFunctionBody = function (e, t, n) {
  var r = t && this.type !== w.braceL;
  var i = this.strict;
  var o = !1;
  if (r) {
    e.body = this.parseMaybeAssign();
    e.expression = !0;
    this.checkParams(e, !1);
  } else {
    var a = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
    if (!(i && !a)) {
      if ((o = this.strictDirective(this.end)) && a) {
        this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list");
      }
    }
    var s = this.labels;
    this.labels = [];
    if (o) {
      this.strict = !0;
    }
    this.checkParams(e, !i && !o && !t && !n && this.isSimpleParamList(e.params));
    if (this.strict && e.id) {
      this.checkLVal(e.id, 5);
    }
    e.body = this.parseBlock(!1, void 0, o && !i);
    e.expression = !1;
    this.adaptDirectivePrologue(e.body.body);
    this.labels = s;
  }
  this.exitScope();
};
J.isSimpleParamList = function (e) {
  for (var t = 0, n = e; t < n.length; t += 1) {
    if ("Identifier" !== n[t].type) {
      return !1;
    }
  }
  return !0;
};
J.checkParams = function (e, t) {
  for (var n = {}, r = 0, i = e.params; r < i.length; r += 1) {
    var o = i[r];
    this.checkLVal(o, 1, t ? null : n);
  }
};
J.parseExprList = function (e, t, n, r) {
  for (var i = [], o = !0; !this.eat(e);) {
    if (o) {
      o = !1;
    } else if (this.expect(w.comma), t && this.afterTrailingComma(e)) {
      break;
    }
    var a = void 0;
    if (n && this.type === w.comma) {
      a = null;
    } else {
      if (this.type === w.ellipsis) {
        a = this.parseSpread(r);
        if (r && this.type === w.comma && r.trailingComma < 0) {
          r.trailingComma = this.start;
        }
      } else {
        a = this.parseMaybeAssign(!1, r);
      }
    }
    i.push(a);
  }
  return i;
};
J.checkUnreserved = function (e) {
  var t = e.start;
  var n = e.end;
  var r = e.name;
  if (!(this.inGenerator && "yield" === r && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && "await" === r && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"), this.keywords.test(r) && this.raise(t, "Unexpected keyword '" + r + "'"), this.options.ecmaVersion < 6 && -1 !== this.input.slice(t, n).indexOf("\\"))) {
    if ((this.strict ? this.reservedWordsStrict : this.reservedWords).test(r)) {
      if (!(this.inAsync || "await" !== r)) {
        this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function");
      }
      this.raiseRecoverable(t, "The keyword '" + r + "' is reserved");
    }
  }
};
J.parseIdent = function (e, t) {
  var n = this.startNode();
  if (this.type === w.name) {
    n.name = this.value;
  } else {
    if (this.type.keyword) {
      n.name = this.type.keyword;
      if (!("class" !== n.name && "function" !== n.name || this.lastTokEnd === this.lastTokStart + 1 && 46 === this.input.charCodeAt(this.lastTokStart))) {
        this.context.pop();
      }
    } else {
      this.unexpected();
    }
  }
  this.next(!!e);
  this.finishNode(n, "Identifier");
  if (!e) {
    this.checkUnreserved(n);
    if (!("await" !== n.name || this.awaitIdentPos)) {
      this.awaitIdentPos = n.start;
    }
  }
  return n;
};
J.parseYield = function (e) {
  if (!this.yieldPos) {
    this.yieldPos = this.start;
  }
  var t = this.startNode();
  this.next();
  if (this.type === w.semi || this.canInsertSemicolon() || this.type !== w.star && !this.type.startsExpr) {
    t.delegate = !1;
    t.argument = null;
  } else {
    t.delegate = this.eat(w.star);
    t.argument = this.parseMaybeAssign(e);
  }
  return this.finishNode(t, "YieldExpression");
};
J.parseAwait = function () {
  if (!this.awaitPos) {
    this.awaitPos = this.start;
  }
  var e = this.startNode();
  this.next();
  e.argument = this.parseMaybeUnary(null, !1);
  return this.finishNode(e, "AwaitExpression");
};
var ee = U.prototype;
ee.raise = function (e, t) {
  var n = N(this.input, e);
  t += " (" + n.line + ":" + n.column + ")";
  var r = new SyntaxError(t);
  throw r.pos = e, r.loc = n, r.raisedAt = this.pos, r;
};
ee.raiseRecoverable = ee.raise;
ee.curPosition = function () {
  if (this.options.locations) {
    return new R(this.curLine, this.pos - this.lineStart);
  }
};
var te = U.prototype;
var ne = function (e) {
  this.flags = e;
  this.var = [];
  this.lexical = [];
  this.functions = [];
};
te.enterScope = function (e) {
  this.scopeStack.push(new ne(e));
};
te.exitScope = function () {
  this.scopeStack.pop();
};
te.treatFunctionsAsVarInScope = function (e) {
  return 2 & e.flags || !this.inModule && 1 & e.flags;
};
te.declareName = function (e, t, n) {
  var r = !1;
  if (2 === t) {
    var i = this.currentScope();
    r = i.lexical.indexOf(e) > -1 || i.functions.indexOf(e) > -1 || i.var.indexOf(e) > -1;
    i.lexical.push(e);
    if (this.inModule && 1 & i.flags) {
      delete this.undefinedExports[e];
    }
  } else if (4 === t) {
    this.currentScope().lexical.push(e);
  } else if (3 === t) {
    var o = this.currentScope();
    r = this.treatFunctionsAsVar ? o.lexical.indexOf(e) > -1 : o.lexical.indexOf(e) > -1 || o.var.indexOf(e) > -1;
    o.functions.push(e);
  } else {
    for (var a = this.scopeStack.length - 1; a >= 0; --a) {
      var s = this.scopeStack[a];
      if (s.lexical.indexOf(e) > -1 && !(32 & s.flags && s.lexical[0] === e) || !this.treatFunctionsAsVarInScope(s) && s.functions.indexOf(e) > -1) {
        r = !0;
        break;
      }
      s.var.push(e);
      if (this.inModule && 1 & s.flags) {
        delete this.undefinedExports[e];
      }
      if (3 & s.flags) {
        break;
      }
    }
  }
  if (r) {
    this.raiseRecoverable(n, "Identifier '" + e + "' has already been declared");
  }
};
te.checkLocalExport = function (e) {
  if (-1 === this.scopeStack[0].lexical.indexOf(e.name) && -1 === this.scopeStack[0].var.indexOf(e.name)) {
    this.undefinedExports[e.name] = e;
  }
};
te.currentScope = function () {
  return this.scopeStack[this.scopeStack.length - 1];
};
te.currentVarScope = function () {
  for (var e = this.scopeStack.length - 1;; e--) {
    var t = this.scopeStack[e];
    if (3 & t.flags) {
      return t;
    }
  }
};
te.currentThisScope = function () {
  for (var e = this.scopeStack.length - 1;; e--) {
    var t = this.scopeStack[e];
    if (3 & t.flags && !(16 & t.flags)) {
      return t;
    }
  }
};
var re = function (e, t, n) {
  this.type = "";
  this.start = t;
  this.end = 0;
  if (e.options.locations) {
    this.loc = new P(e, n);
  }
  if (e.options.directSourceFile) {
    this.sourceFile = e.options.directSourceFile;
  }
  if (e.options.ranges) {
    this.range = [t, 0];
  }
};
var ie = U.prototype;
function oe(e, t, n, r) {
  e.type = t;
  e.end = n;
  if (this.options.locations) {
    e.loc.end = r;
  }
  if (this.options.ranges) {
    e.range[1] = n;
  }
  return e;
}
ie.startNode = function () {
  return new re(this, this.start, this.startLoc);
};
ie.startNodeAt = function (e, t) {
  return new re(this, e, t);
};
ie.finishNode = function (e, t) {
  return oe.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
};
ie.finishNodeAt = function (e, t, n, r) {
  return oe.call(this, e, t, n, r);
};
var ae = function (e, t, n, r, i) {
  this.token = e;
  this.isExpr = !!t;
  this.preserveSpace = !!n;
  this.override = r;
  this.generator = !!i;
};
var se = {
  b_stat: new ae("{", !1),
  b_expr: new ae("{", !0),
  b_tmpl: new ae("${", !1),
  p_stat: new ae("(", !1),
  p_expr: new ae("(", !0),
  q_tmpl: new ae("`", !0, !0, function (e) {
    return e.tryReadTemplateToken();
  }),
  f_stat: new ae("function", !1),
  f_expr: new ae("function", !0),
  f_expr_gen: new ae("function", !0, !1, null, !0),
  f_gen: new ae("function", !1, !1, null, !0)
};
var ce = U.prototype;
ce.initialContext = function () {
  return [se.b_stat];
};
ce.braceIsBlock = function (e) {
  var t = this.curContext();
  return t === se.f_expr || t === se.f_stat || (e !== w.colon || t !== se.b_stat && t !== se.b_expr ? e === w._return || e === w.name && this.exprAllowed ? E.test(this.input.slice(this.lastTokEnd, this.start)) : e === w._else || e === w.semi || e === w.eof || e === w.parenR || e === w.arrow || (e === w.braceL ? t === se.b_stat : e !== w._var && e !== w._const && e !== w.name && !this.exprAllowed) : !t.isExpr);
};
ce.inGeneratorContext = function () {
  for (var e = this.context.length - 1; e >= 1; e--) {
    var t = this.context[e];
    if ("function" === t.token) {
      return t.generator;
    }
  }
  return !1;
};
ce.updateContext = function (e) {
  var t;
  var n = this.type;
  if (n.keyword && e === w.dot) {
    this.exprAllowed = !1;
  } else {
    if (t = n.updateContext) {
      t.call(this, e);
    } else {
      this.exprAllowed = n.beforeExpr;
    }
  }
};
w.parenR.updateContext = w.braceR.updateContext = function () {
  if (1 !== this.context.length) {
    var e = this.context.pop();
    if (e === se.b_stat && "function" === this.curContext().token) {
      e = this.context.pop();
    }
    this.exprAllowed = !e.isExpr;
  } else {
    this.exprAllowed = !0;
  }
};
w.braceL.updateContext = function (e) {
  this.context.push(this.braceIsBlock(e) ? se.b_stat : se.b_expr);
  this.exprAllowed = !0;
};
w.dollarBraceL.updateContext = function () {
  this.context.push(se.b_tmpl);
  this.exprAllowed = !0;
};
w.parenL.updateContext = function (e) {
  var t = e === w._if || e === w._for || e === w._with || e === w._while;
  this.context.push(t ? se.p_stat : se.p_expr);
  this.exprAllowed = !0;
};
w.incDec.updateContext = function () {};
w._function.updateContext = w._class.updateContext = function (e) {
  if (!e.beforeExpr || e === w.semi || e === w._else || e === w._return && E.test(this.input.slice(this.lastTokEnd, this.start)) || (e === w.colon || e === w.braceL) && this.curContext() === se.b_stat) {
    this.context.push(se.f_stat);
  } else {
    this.context.push(se.f_expr);
  }
  this.exprAllowed = !1;
};
w.backQuote.updateContext = function () {
  if (this.curContext() === se.q_tmpl) {
    this.context.pop();
  } else {
    this.context.push(se.q_tmpl);
  }
  this.exprAllowed = !1;
};
w.star.updateContext = function (e) {
  if (e === w._function) {
    var t = this.context.length - 1;
    if (this.context[t] === se.f_expr) {
      this.context[t] = se.f_expr_gen;
    } else {
      this.context[t] = se.f_gen;
    }
  }
  this.exprAllowed = !0;
};
w.name.updateContext = function (e) {
  var t = !1;
  if (this.options.ecmaVersion >= 6 && e !== w.dot && ("of" === this.value && !this.exprAllowed || "yield" === this.value && this.inGeneratorContext())) {
    t = !0;
  }
  this.exprAllowed = t;
};
var ue = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";
var le = ue + " Extended_Pictographic";
var fe = {
  9: ue,
  10: le,
  11: "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS Extended_Pictographic"
};
var de = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";
var he = "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";
var pe = he + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";
var _e = {
  9: he,
  10: pe,
  11: "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho"
};
var Ae = {};
function ge(e) {
  var t = Ae[e] = {
    binary: F(fe[e] + " " + de),
    nonBinary: {
      General_Category: F(de),
      Script: F(_e[e])
    }
  };
  t.nonBinary.Script_Extensions = t.nonBinary.Script;
  t.nonBinary.gc = t.nonBinary.General_Category;
  t.nonBinary.sc = t.nonBinary.Script;
  t.nonBinary.scx = t.nonBinary.Script_Extensions;
}
ge(9);
ge(10);
ge(11);
var ve = U.prototype;
var me = function (e) {
  this.parser = e;
  this.validFlags = "gim" + (e.options.ecmaVersion >= 6 ? "uy" : "") + (e.options.ecmaVersion >= 9 ? "s" : "");
  this.unicodeProperties = Ae[e.options.ecmaVersion >= 11 ? 11 : e.options.ecmaVersion];
  this.source = "";
  this.flags = "";
  this.start = 0;
  this.switchU = !1;
  this.switchN = !1;
  this.pos = 0;
  this.lastIntValue = 0;
  this.lastStringValue = "";
  this.lastAssertionIsQuantifiable = !1;
  this.numCapturingParens = 0;
  this.maxBackReference = 0;
  this.groupNames = [];
  this.backReferenceNames = [];
};
function ye(e) {
  return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)));
}
function be(e) {
  return 36 === e || e >= 40 && e <= 43 || 46 === e || 63 === e || e >= 91 && e <= 94 || e >= 123 && e <= 125;
}
function we(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
function Ee(e) {
  return we(e) || 95 === e;
}
function xe(e) {
  return Ee(e) || Ce(e);
}
function Ce(e) {
  return e >= 48 && e <= 57;
}
function Oe(e) {
  return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}
function ke(e) {
  return e >= 65 && e <= 70 ? e - 65 + 10 : e >= 97 && e <= 102 ? e - 97 + 10 : e - 48;
}
function Se(e) {
  return e >= 48 && e <= 55;
}
me.prototype.reset = function (e, t, n) {
  var r = -1 !== n.indexOf("u");
  this.start = 0 | e;
  this.source = t + "";
  this.flags = n;
  this.switchU = r && this.parser.options.ecmaVersion >= 6;
  this.switchN = r && this.parser.options.ecmaVersion >= 9;
};
me.prototype.raise = function (e) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + e);
};
me.prototype.at = function (e, t) {
  if (void 0 === t) {
    t = !1;
  }
  var n = this.source;
  var r = n.length;
  if (e >= r) {
    return -1;
  }
  var i = n.charCodeAt(e);
  if (!t && !this.switchU || i <= 55295 || i >= 57344 || e + 1 >= r) {
    return i;
  }
  var o = n.charCodeAt(e + 1);
  return o >= 56320 && o <= 57343 ? (i << 10) + o - 56613888 : i;
};
me.prototype.nextIndex = function (e, t) {
  if (void 0 === t) {
    t = !1;
  }
  var n = this.source;
  var r = n.length;
  if (e >= r) {
    return r;
  }
  var i;
  var o = n.charCodeAt(e);
  return !t && !this.switchU || o <= 55295 || o >= 57344 || e + 1 >= r || (i = n.charCodeAt(e + 1)) < 56320 || i > 57343 ? e + 1 : e + 2;
};
me.prototype.current = function (e) {
  if (void 0 === e) {
    e = !1;
  }
  return this.at(this.pos, e);
};
me.prototype.lookahead = function (e) {
  if (void 0 === e) {
    e = !1;
  }
  return this.at(this.nextIndex(this.pos, e), e);
};
me.prototype.advance = function (e) {
  if (void 0 === e) {
    e = !1;
  }
  this.pos = this.nextIndex(this.pos, e);
};
me.prototype.eat = function (e, t) {
  if (void 0 === t) {
    t = !1;
  }
  return this.current(t) === e && (this.advance(t), !0);
};
ve.validateRegExpFlags = function (e) {
  for (var t = e.validFlags, n = e.flags, r = 0; r < n.length; r++) {
    var i = n.charAt(r);
    if (-1 === t.indexOf(i)) {
      this.raise(e.start, "Invalid regular expression flag");
    }
    if (n.indexOf(i, r + 1) > -1) {
      this.raise(e.start, "Duplicate regular expression flag");
    }
  }
};
ve.validateRegExpPattern = function (e) {
  this.regexp_pattern(e);
  if (!e.switchN && this.options.ecmaVersion >= 9 && e.groupNames.length > 0) {
    e.switchN = !0;
    this.regexp_pattern(e);
  }
};
ve.regexp_pattern = function (e) {
  e.pos = 0;
  e.lastIntValue = 0;
  e.lastStringValue = "";
  e.lastAssertionIsQuantifiable = !1;
  e.numCapturingParens = 0;
  e.maxBackReference = 0;
  e.groupNames.length = 0;
  e.backReferenceNames.length = 0;
  this.regexp_disjunction(e);
  if (e.pos !== e.source.length) {
    if (e.eat(41)) {
      e.raise("Unmatched ')'");
    }
    if (e.eat(93) || e.eat(125)) {
      e.raise("Lone quantifier brackets");
    }
  }
  if (e.maxBackReference > e.numCapturingParens) {
    e.raise("Invalid escape");
  }
  for (var t = 0, n = e.backReferenceNames; t < n.length; t += 1) {
    var r = n[t];
    if (-1 === e.groupNames.indexOf(r)) {
      e.raise("Invalid named capture referenced");
    }
  }
};
ve.regexp_disjunction = function (e) {
  for (this.regexp_alternative(e); e.eat(124);) {
    this.regexp_alternative(e);
  }
  if (this.regexp_eatQuantifier(e, !0)) {
    e.raise("Nothing to repeat");
  }
  if (e.eat(123)) {
    e.raise("Lone quantifier brackets");
  }
};
ve.regexp_alternative = function (e) {
  for (; e.pos < e.source.length && this.regexp_eatTerm(e);) {
    ;
  }
};
ve.regexp_eatTerm = function (e) {
  return this.regexp_eatAssertion(e) ? (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e.switchU && e.raise("Invalid quantifier"), !0) : !!(e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e)) && (this.regexp_eatQuantifier(e), !0);
};
ve.regexp_eatAssertion = function (e) {
  var t = e.pos;
  e.lastAssertionIsQuantifiable = !1;
  if (e.eat(94) || e.eat(36)) {
    return !0;
  }
  if (e.eat(92)) {
    if (e.eat(66) || e.eat(98)) {
      return !0;
    }
    e.pos = t;
  }
  if (e.eat(40) && e.eat(63)) {
    var n = !1;
    if (this.options.ecmaVersion >= 9) {
      n = e.eat(60);
    }
    if (e.eat(61) || e.eat(33)) {
      this.regexp_disjunction(e);
      if (!e.eat(41)) {
        e.raise("Unterminated group");
      }
      e.lastAssertionIsQuantifiable = !n;
      return !0;
    }
  }
  e.pos = t;
  return !1;
};
ve.regexp_eatQuantifier = function (e, t) {
  if (void 0 === t) {
    t = !1;
  }
  return !!this.regexp_eatQuantifierPrefix(e, t) && (e.eat(63), !0);
};
ve.regexp_eatQuantifierPrefix = function (e, t) {
  return e.eat(42) || e.eat(43) || e.eat(63) || this.regexp_eatBracedQuantifier(e, t);
};
ve.regexp_eatBracedQuantifier = function (e, t) {
  var n = e.pos;
  if (e.eat(123)) {
    var r = 0;
    var i = -1;
    if (this.regexp_eatDecimalDigits(e) && (r = e.lastIntValue, e.eat(44) && this.regexp_eatDecimalDigits(e) && (i = e.lastIntValue), e.eat(125))) {
      if (-1 !== i && i < r && !t) {
        e.raise("numbers out of order in {} quantifier");
      }
      return !0;
    }
    if (e.switchU && !t) {
      e.raise("Incomplete quantifier");
    }
    e.pos = n;
  }
  return !1;
};
ve.regexp_eatAtom = function (e) {
  return this.regexp_eatPatternCharacters(e) || e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e);
};
ve.regexp_eatReverseSolidusAtomEscape = function (e) {
  var t = e.pos;
  if (e.eat(92)) {
    if (this.regexp_eatAtomEscape(e)) {
      return !0;
    }
    e.pos = t;
  }
  return !1;
};
ve.regexp_eatUncapturingGroup = function (e) {
  var t = e.pos;
  if (e.eat(40)) {
    if (e.eat(63) && e.eat(58)) {
      this.regexp_disjunction(e);
      if (e.eat(41)) {
        return !0;
      }
      e.raise("Unterminated group");
    }
    e.pos = t;
  }
  return !1;
};
ve.regexp_eatCapturingGroup = function (e) {
  if (e.eat(40)) {
    if (this.options.ecmaVersion >= 9) {
      this.regexp_groupSpecifier(e);
    } else {
      if (63 === e.current()) {
        e.raise("Invalid group");
      }
    }
    this.regexp_disjunction(e);
    if (e.eat(41)) {
      e.numCapturingParens += 1;
      return !0;
    }
    e.raise("Unterminated group");
  }
  return !1;
};
ve.regexp_eatExtendedAtom = function (e) {
  return e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e) || this.regexp_eatInvalidBracedQuantifier(e) || this.regexp_eatExtendedPatternCharacter(e);
};
ve.regexp_eatInvalidBracedQuantifier = function (e) {
  if (this.regexp_eatBracedQuantifier(e, !0)) {
    e.raise("Nothing to repeat");
  }
  return !1;
};
ve.regexp_eatSyntaxCharacter = function (e) {
  var t = e.current();
  return !!be(t) && (e.lastIntValue = t, e.advance(), !0);
};
ve.regexp_eatPatternCharacters = function (e) {
  for (var t = e.pos, n = 0; -1 !== (n = e.current()) && !be(n);) {
    e.advance();
  }
  return e.pos !== t;
};
ve.regexp_eatExtendedPatternCharacter = function (e) {
  var t = e.current();
  return !(-1 === t || 36 === t || t >= 40 && t <= 43 || 46 === t || 63 === t || 91 === t || 94 === t || 124 === t) && (e.advance(), !0);
};
ve.regexp_groupSpecifier = function (e) {
  if (e.eat(63)) {
    if (this.regexp_eatGroupName(e)) {
      if (-1 !== e.groupNames.indexOf(e.lastStringValue)) {
        e.raise("Duplicate capture group name");
      }
      return void e.groupNames.push(e.lastStringValue);
    }
    e.raise("Invalid group");
  }
};
ve.regexp_eatGroupName = function (e) {
  e.lastStringValue = "";
  if (e.eat(60)) {
    if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62)) {
      return !0;
    }
    e.raise("Invalid capture group name");
  }
  return !1;
};
ve.regexp_eatRegExpIdentifierName = function (e) {
  e.lastStringValue = "";
  if (this.regexp_eatRegExpIdentifierStart(e)) {
    for (e.lastStringValue += ye(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e);) {
      e.lastStringValue += ye(e.lastIntValue);
    }
    return !0;
  }
  return !1;
};
ve.regexp_eatRegExpIdentifierStart = function (e) {
  var t = e.pos;
  var n = this.options.ecmaVersion >= 11;
  var r = e.current(n);
  e.advance(n);
  if (92 === r && this.regexp_eatRegExpUnicodeEscapeSequence(e, n)) {
    r = e.lastIntValue;
  }
  return function (e) {
    return p(e, !0) || 36 === e || 95 === e;
  }(r) ? (e.lastIntValue = r, !0) : (e.pos = t, !1);
};
ve.regexp_eatRegExpIdentifierPart = function (e) {
  var t = e.pos;
  var n = this.options.ecmaVersion >= 11;
  var r = e.current(n);
  e.advance(n);
  if (92 === r && this.regexp_eatRegExpUnicodeEscapeSequence(e, n)) {
    r = e.lastIntValue;
  }
  return function (e) {
    return _(e, !0) || 36 === e || 95 === e || 8204 === e || 8205 === e;
  }(r) ? (e.lastIntValue = r, !0) : (e.pos = t, !1);
};
ve.regexp_eatAtomEscape = function (e) {
  return !!(this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e.switchN && this.regexp_eatKGroupName(e)) || (e.switchU && (99 === e.current() && e.raise("Invalid unicode escape"), e.raise("Invalid escape")), !1);
};
ve.regexp_eatBackReference = function (e) {
  var t = e.pos;
  if (this.regexp_eatDecimalEscape(e)) {
    var n = e.lastIntValue;
    if (e.switchU) {
      if (n > e.maxBackReference) {
        e.maxBackReference = n;
      }
      return !0;
    }
    if (n <= e.numCapturingParens) {
      return !0;
    }
    e.pos = t;
  }
  return !1;
};
ve.regexp_eatKGroupName = function (e) {
  if (e.eat(107)) {
    if (this.regexp_eatGroupName(e)) {
      e.backReferenceNames.push(e.lastStringValue);
      return !0;
    }
    e.raise("Invalid named reference");
  }
  return !1;
};
ve.regexp_eatCharacterEscape = function (e) {
  return this.regexp_eatControlEscape(e) || this.regexp_eatCControlLetter(e) || this.regexp_eatZero(e) || this.regexp_eatHexEscapeSequence(e) || this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) || !e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e) || this.regexp_eatIdentityEscape(e);
};
ve.regexp_eatCControlLetter = function (e) {
  var t = e.pos;
  if (e.eat(99)) {
    if (this.regexp_eatControlLetter(e)) {
      return !0;
    }
    e.pos = t;
  }
  return !1;
};
ve.regexp_eatZero = function (e) {
  return 48 === e.current() && !Ce(e.lookahead()) && (e.lastIntValue = 0, e.advance(), !0);
};
ve.regexp_eatControlEscape = function (e) {
  var t = e.current();
  return 116 === t ? (e.lastIntValue = 9, e.advance(), !0) : 110 === t ? (e.lastIntValue = 10, e.advance(), !0) : 118 === t ? (e.lastIntValue = 11, e.advance(), !0) : 102 === t ? (e.lastIntValue = 12, e.advance(), !0) : 114 === t && (e.lastIntValue = 13, e.advance(), !0);
};
ve.regexp_eatControlLetter = function (e) {
  var t = e.current();
  return !!we(t) && (e.lastIntValue = t % 32, e.advance(), !0);
};
ve.regexp_eatRegExpUnicodeEscapeSequence = function (e, t) {
  if (void 0 === t) {
    t = !1;
  }
  var n;
  var r = e.pos;
  var i = t || e.switchU;
  if (e.eat(117)) {
    if (this.regexp_eatFixedHexDigits(e, 4)) {
      var o = e.lastIntValue;
      if (i && o >= 55296 && o <= 56319) {
        var a = e.pos;
        if (e.eat(92) && e.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
          var s = e.lastIntValue;
          if (s >= 56320 && s <= 57343) {
            e.lastIntValue = 1024 * (o - 55296) + (s - 56320) + 65536;
            return !0;
          }
        }
        e.pos = a;
        e.lastIntValue = o;
      }
      return !0;
    }
    if (i && e.eat(123) && this.regexp_eatHexDigits(e) && e.eat(125) && (n = e.lastIntValue) >= 0 && n <= 1114111) {
      return !0;
    }
    if (i) {
      e.raise("Invalid unicode escape");
    }
    e.pos = r;
  }
  return !1;
};
ve.regexp_eatIdentityEscape = function (e) {
  if (e.switchU) {
    return !!this.regexp_eatSyntaxCharacter(e) || !!e.eat(47) && (e.lastIntValue = 47, !0);
  }
  var t = e.current();
  return !(99 === t || e.switchN && 107 === t) && (e.lastIntValue = t, e.advance(), !0);
};
ve.regexp_eatDecimalEscape = function (e) {
  e.lastIntValue = 0;
  var t = e.current();
  if (t >= 49 && t <= 57) {
    do {
      e.lastIntValue = 10 * e.lastIntValue + (t - 48);
      e.advance();
    } while ((t = e.current()) >= 48 && t <= 57);
    return !0;
  }
  return !1;
};
ve.regexp_eatCharacterClassEscape = function (e) {
  var t = e.current();
  if (function (e) {
    return 100 === e || 68 === e || 115 === e || 83 === e || 119 === e || 87 === e;
  }(t)) {
    e.lastIntValue = -1;
    e.advance();
    return !0;
  }
  if (e.switchU && this.options.ecmaVersion >= 9 && (80 === t || 112 === t)) {
    e.lastIntValue = -1;
    e.advance();
    if (e.eat(123) && this.regexp_eatUnicodePropertyValueExpression(e) && e.eat(125)) {
      return !0;
    }
    e.raise("Invalid property name");
  }
  return !1;
};
ve.regexp_eatUnicodePropertyValueExpression = function (e) {
  var t = e.pos;
  if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
    var n = e.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(e)) {
      var r = e.lastStringValue;
      this.regexp_validateUnicodePropertyNameAndValue(e, n, r);
      return !0;
    }
  }
  e.pos = t;
  if (this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
    var i = e.lastStringValue;
    this.regexp_validateUnicodePropertyNameOrValue(e, i);
    return !0;
  }
  return !1;
};
ve.regexp_validateUnicodePropertyNameAndValue = function (e, t, n) {
  if (!D(e.unicodeProperties.nonBinary, t)) {
    e.raise("Invalid property name");
  }
  if (!e.unicodeProperties.nonBinary[t].test(n)) {
    e.raise("Invalid property value");
  }
};
ve.regexp_validateUnicodePropertyNameOrValue = function (e, t) {
  if (!e.unicodeProperties.binary.test(t)) {
    e.raise("Invalid property name");
  }
};
ve.regexp_eatUnicodePropertyName = function (e) {
  var t = 0;
  for (e.lastStringValue = ""; Ee(t = e.current());) {
    e.lastStringValue += ye(t);
    e.advance();
  }
  return "" !== e.lastStringValue;
};
ve.regexp_eatUnicodePropertyValue = function (e) {
  var t = 0;
  for (e.lastStringValue = ""; xe(t = e.current());) {
    e.lastStringValue += ye(t);
    e.advance();
  }
  return "" !== e.lastStringValue;
};
ve.regexp_eatLoneUnicodePropertyNameOrValue = function (e) {
  return this.regexp_eatUnicodePropertyValue(e);
};
ve.regexp_eatCharacterClass = function (e) {
  if (e.eat(91)) {
    e.eat(94);
    this.regexp_classRanges(e);
    if (e.eat(93)) {
      return !0;
    }
    e.raise("Unterminated character class");
  }
  return !1;
};
ve.regexp_classRanges = function (e) {
  for (; this.regexp_eatClassAtom(e);) {
    var t = e.lastIntValue;
    if (e.eat(45) && this.regexp_eatClassAtom(e)) {
      var n = e.lastIntValue;
      if (!(!e.switchU || -1 !== t && -1 !== n)) {
        e.raise("Invalid character class");
      }
      if (-1 !== t && -1 !== n && t > n) {
        e.raise("Range out of order in character class");
      }
    }
  }
};
ve.regexp_eatClassAtom = function (e) {
  var t = e.pos;
  if (e.eat(92)) {
    if (this.regexp_eatClassEscape(e)) {
      return !0;
    }
    if (e.switchU) {
      var n = e.current();
      if (99 === n || Se(n)) {
        e.raise("Invalid class escape");
      }
      e.raise("Invalid escape");
    }
    e.pos = t;
  }
  var r = e.current();
  return 93 !== r && (e.lastIntValue = r, e.advance(), !0);
};
ve.regexp_eatClassEscape = function (e) {
  var t = e.pos;
  if (e.eat(98)) {
    e.lastIntValue = 8;
    return !0;
  }
  if (e.switchU && e.eat(45)) {
    e.lastIntValue = 45;
    return !0;
  }
  if (!e.switchU && e.eat(99)) {
    if (this.regexp_eatClassControlLetter(e)) {
      return !0;
    }
    e.pos = t;
  }
  return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e);
};
ve.regexp_eatClassControlLetter = function (e) {
  var t = e.current();
  return !(!Ce(t) && 95 !== t) && (e.lastIntValue = t % 32, e.advance(), !0);
};
ve.regexp_eatHexEscapeSequence = function (e) {
  var t = e.pos;
  if (e.eat(120)) {
    if (this.regexp_eatFixedHexDigits(e, 2)) {
      return !0;
    }
    if (e.switchU) {
      e.raise("Invalid escape");
    }
    e.pos = t;
  }
  return !1;
};
ve.regexp_eatDecimalDigits = function (e) {
  var t = e.pos;
  var n = 0;
  for (e.lastIntValue = 0; Ce(n = e.current());) {
    e.lastIntValue = 10 * e.lastIntValue + (n - 48);
    e.advance();
  }
  return e.pos !== t;
};
ve.regexp_eatHexDigits = function (e) {
  var t = e.pos;
  var n = 0;
  for (e.lastIntValue = 0; Oe(n = e.current());) {
    e.lastIntValue = 16 * e.lastIntValue + ke(n);
    e.advance();
  }
  return e.pos !== t;
};
ve.regexp_eatLegacyOctalEscapeSequence = function (e) {
  if (this.regexp_eatOctalDigit(e)) {
    var t = e.lastIntValue;
    if (this.regexp_eatOctalDigit(e)) {
      var n = e.lastIntValue;
      if (t <= 3 && this.regexp_eatOctalDigit(e)) {
        e.lastIntValue = 64 * t + 8 * n + e.lastIntValue;
      } else {
        e.lastIntValue = 8 * t + n;
      }
    } else {
      e.lastIntValue = t;
    }
    return !0;
  }
  return !1;
};
ve.regexp_eatOctalDigit = function (e) {
  var t = e.current();
  return Se(t) ? (e.lastIntValue = t - 48, e.advance(), !0) : (e.lastIntValue = 0, !1);
};
ve.regexp_eatFixedHexDigits = function (e, t) {
  var n = e.pos;
  e.lastIntValue = 0;
  for (var r = 0; r < t; ++r) {
    var i = e.current();
    if (!Oe(i)) {
      e.pos = n;
      return !1;
    }
    e.lastIntValue = 16 * e.lastIntValue + ke(i);
    e.advance();
  }
  return !0;
};
var Te = function (e) {
  this.type = e.type;
  this.value = e.value;
  this.start = e.start;
  this.end = e.end;
  if (e.options.locations) {
    this.loc = new P(e, e.startLoc, e.endLoc);
  }
  if (e.options.ranges) {
    this.range = [e.start, e.end];
  }
};
var Be = U.prototype;
function De(e) {
  return "function" !== typeof BigInt ? null : BigInt(e.replace(/_/g, ""));
}
function Ie(e) {
  return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)));
}
Be.next = function (e) {
  if (!e && this.type.keyword && this.containsEsc) {
    this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword);
  }
  if (this.options.onToken) {
    this.options.onToken(new Te(this));
  }
  this.lastTokEnd = this.end;
  this.lastTokStart = this.start;
  this.lastTokEndLoc = this.endLoc;
  this.lastTokStartLoc = this.startLoc;
  this.nextToken();
};
Be.getToken = function () {
  this.next();
  return new Te(this);
};
if ("undefined" !== typeof Symbol) {
  Be[Symbol.iterator] = function () {
    var e = this;
    return {
      next: function () {
        var t = e.getToken();
        return {
          done: t.type === w.eof,
          value: t
        };
      }
    };
  };
}
Be.curContext = function () {
  return this.context[this.context.length - 1];
};
Be.nextToken = function () {
  var e = this.curContext();
  if (!(e && e.preserveSpace)) {
    this.skipSpace();
  }
  this.start = this.pos;
  if (this.options.locations) {
    this.startLoc = this.curPosition();
  }
  return this.pos >= this.input.length ? this.finishToken(w.eof) : e.override ? e.override(this) : void this.readToken(this.fullCharCodeAtPos());
};
Be.readToken = function (e) {
  return p(e, this.options.ecmaVersion >= 6) || 92 === e ? this.readWord() : this.getTokenFromCode(e);
};
Be.fullCharCodeAtPos = function () {
  var e = this.input.charCodeAt(this.pos);
  return e <= 55295 || e >= 57344 ? e : (e << 10) + this.input.charCodeAt(this.pos + 1) - 56613888;
};
Be.skipBlockComment = function () {
  var e;
  var t = this.options.onComment && this.curPosition();
  var n = this.pos;
  var r = this.input.indexOf("*/", this.pos += 2);
  if (-1 === r) {
    this.raise(this.pos - 2, "Unterminated comment");
  }
  this.pos = r + 2;
  if (this.options.locations) {
    for (x.lastIndex = n; (e = x.exec(this.input)) && e.index < this.pos;) {
      ++this.curLine;
      this.lineStart = e.index + e[0].length;
    }
  }
  if (this.options.onComment) {
    this.options.onComment(!0, this.input.slice(n + 2, r), n, this.pos, t, this.curPosition());
  }
};
Be.skipLineComment = function (e) {
  for (var t = this.pos, n = this.options.onComment && this.curPosition(), r = this.input.charCodeAt(this.pos += e); this.pos < this.input.length && !C(r);) {
    r = this.input.charCodeAt(++this.pos);
  }
  if (this.options.onComment) {
    this.options.onComment(!1, this.input.slice(t + e, this.pos), t, this.pos, n, this.curPosition());
  }
};
Be.skipSpace = function () {
  e: for (; this.pos < this.input.length;) {
    var e = this.input.charCodeAt(this.pos);
    switch (e) {
      case 32:
      case 160:
        ++this.pos;
        break;
      case 13:
        if (10 === this.input.charCodeAt(this.pos + 1)) {
          ++this.pos;
        }
      case 10:
      case 8232:
      case 8233:
        ++this.pos;
        if (this.options.locations) {
          ++this.curLine;
          this.lineStart = this.pos;
        }
        break;
      case 47:
        switch (this.input.charCodeAt(this.pos + 1)) {
          case 42:
            this.skipBlockComment();
            break;
          case 47:
            this.skipLineComment(2);
            break;
          default:
            break e;
        }
        break;
      default:
        if (!(e > 8 && e < 14 || e >= 5760 && O.test(String.fromCharCode(e)))) {
          break e;
        }
        ++this.pos;
    }
  }
};
Be.finishToken = function (e, t) {
  this.end = this.pos;
  if (this.options.locations) {
    this.endLoc = this.curPosition();
  }
  var n = this.type;
  this.type = e;
  this.value = t;
  this.updateContext(n);
};
Be.readToken_dot = function () {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e >= 48 && e <= 57) {
    return this.readNumber(!0);
  }
  var t = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && 46 === e && 46 === t ? (this.pos += 3, this.finishToken(w.ellipsis)) : (++this.pos, this.finishToken(w.dot));
};
Be.readToken_slash = function () {
  var e = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed ? (++this.pos, this.readRegexp()) : 61 === e ? this.finishOp(w.assign, 2) : this.finishOp(w.slash, 1);
};
Be.readToken_mult_modulo_exp = function (e) {
  var t = this.input.charCodeAt(this.pos + 1);
  var n = 1;
  var r = 42 === e ? w.star : w.modulo;
  if (this.options.ecmaVersion >= 7 && 42 === e && 42 === t) {
    ++n;
    r = w.starstar;
    t = this.input.charCodeAt(this.pos + 2);
  }
  return 61 === t ? this.finishOp(w.assign, n + 1) : this.finishOp(r, n);
};
Be.readToken_pipe_amp = function (e) {
  var t = this.input.charCodeAt(this.pos + 1);
  if (t === e) {
    if (this.options.ecmaVersion >= 12) {
      if (61 === this.input.charCodeAt(this.pos + 2)) {
        return this.finishOp(w.assign, 3);
      }
    }
    return this.finishOp(124 === e ? w.logicalOR : w.logicalAND, 2);
  }
  return 61 === t ? this.finishOp(w.assign, 2) : this.finishOp(124 === e ? w.bitwiseOR : w.bitwiseAND, 1);
};
Be.readToken_caret = function () {
  return 61 === this.input.charCodeAt(this.pos + 1) ? this.finishOp(w.assign, 2) : this.finishOp(w.bitwiseXOR, 1);
};
Be.readToken_plus_min = function (e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === e ? 45 !== t || this.inModule || 62 !== this.input.charCodeAt(this.pos + 2) || 0 !== this.lastTokEnd && !E.test(this.input.slice(this.lastTokEnd, this.pos)) ? this.finishOp(w.incDec, 2) : (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : 61 === t ? this.finishOp(w.assign, 2) : this.finishOp(w.plusMin, 1);
};
Be.readToken_lt_gt = function (e) {
  var t = this.input.charCodeAt(this.pos + 1);
  var n = 1;
  return t === e ? (n = 62 === e && 62 === this.input.charCodeAt(this.pos + 2) ? 3 : 2, 61 === this.input.charCodeAt(this.pos + n) ? this.finishOp(w.assign, n + 1) : this.finishOp(w.bitShift, n)) : 33 !== t || 60 !== e || this.inModule || 45 !== this.input.charCodeAt(this.pos + 2) || 45 !== this.input.charCodeAt(this.pos + 3) ? (61 === t && (n = 2), this.finishOp(w.relational, n)) : (this.skipLineComment(4), this.skipSpace(), this.nextToken());
};
Be.readToken_eq_excl = function (e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return 61 === t ? this.finishOp(w.equality, 61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2) : 61 === e && 62 === t && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(w.arrow)) : this.finishOp(61 === e ? w.eq : w.prefix, 1);
};
Be.readToken_question = function () {
  var e = this.options.ecmaVersion;
  if (e >= 11) {
    var t = this.input.charCodeAt(this.pos + 1);
    if (46 === t) {
      var n = this.input.charCodeAt(this.pos + 2);
      if (n < 48 || n > 57) {
        return this.finishOp(w.questionDot, 2);
      }
    }
    if (63 === t) {
      if (e >= 12) {
        if (61 === this.input.charCodeAt(this.pos + 2)) {
          return this.finishOp(w.assign, 3);
        }
      }
      return this.finishOp(w.coalesce, 2);
    }
  }
  return this.finishOp(w.question, 1);
};
Be.getTokenFromCode = function (e) {
  switch (e) {
    case 46:
      return this.readToken_dot();
    case 40:
      ++this.pos;
      return this.finishToken(w.parenL);
    case 41:
      ++this.pos;
      return this.finishToken(w.parenR);
    case 59:
      ++this.pos;
      return this.finishToken(w.semi);
    case 44:
      ++this.pos;
      return this.finishToken(w.comma);
    case 91:
      ++this.pos;
      return this.finishToken(w.bracketL);
    case 93:
      ++this.pos;
      return this.finishToken(w.bracketR);
    case 123:
      ++this.pos;
      return this.finishToken(w.braceL);
    case 125:
      ++this.pos;
      return this.finishToken(w.braceR);
    case 58:
      ++this.pos;
      return this.finishToken(w.colon);
    case 96:
      if (this.options.ecmaVersion < 6) {
        break;
      }
      ++this.pos;
      return this.finishToken(w.backQuote);
    case 48:
      var t = this.input.charCodeAt(this.pos + 1);
      if (120 === t || 88 === t) {
        return this.readRadixNumber(16);
      }
      if (this.options.ecmaVersion >= 6) {
        if (111 === t || 79 === t) {
          return this.readRadixNumber(8);
        }
        if (98 === t || 66 === t) {
          return this.readRadixNumber(2);
        }
      }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(!1);
    case 34:
    case 39:
      return this.readString(e);
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(e);
    case 124:
    case 38:
      return this.readToken_pipe_amp(e);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(e);
    case 60:
    case 62:
      return this.readToken_lt_gt(e);
    case 61:
    case 33:
      return this.readToken_eq_excl(e);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(w.prefix, 1);
  }
  this.raise(this.pos, "Unexpected character '" + Ie(e) + "'");
};
Be.finishOp = function (e, t) {
  var n = this.input.slice(this.pos, this.pos + t);
  this.pos += t;
  return this.finishToken(e, n);
};
Be.readRegexp = function () {
  for (var e, t, n = this.pos;;) {
    if (this.pos >= this.input.length) {
      this.raise(n, "Unterminated regular expression");
    }
    var r = this.input.charAt(this.pos);
    if (E.test(r)) {
      this.raise(n, "Unterminated regular expression");
    }
    if (e) {
      e = !1;
    } else {
      if ("[" === r) {
        t = !0;
      } else if ("]" === r && t) {
        t = !1;
      } else if ("/" === r && !t) {
        break;
      }
      e = "\\" === r;
    }
    ++this.pos;
  }
  var i = this.input.slice(n, this.pos);
  ++this.pos;
  var o = this.pos;
  var a = this.readWord1();
  if (this.containsEsc) {
    this.unexpected(o);
  }
  var s = this.regexpState || (this.regexpState = new me(this));
  s.reset(n, i, a);
  this.validateRegExpFlags(s);
  this.validateRegExpPattern(s);
  var c = null;
  try {
    c = new RegExp(i, a);
  } catch (u) {}
  return this.finishToken(w.regexp, {
    pattern: i,
    flags: a,
    value: c
  });
};
Be.readInt = function (e, t, n) {
  for (var r = this.options.ecmaVersion >= 12 && void 0 === t, i = n && 48 === this.input.charCodeAt(this.pos), o = this.pos, a = 0, s = 0, c = 0, u = null == t ? 1 / 0 : t; c < u; ++c, ++this.pos) {
    var l = this.input.charCodeAt(this.pos);
    var f = void 0;
    if (r && 95 === l) {
      if (i) {
        this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals");
      }
      if (95 === s) {
        this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore");
      }
      if (0 === c) {
        this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits");
      }
      s = l;
    } else {
      if ((f = l >= 97 ? l - 97 + 10 : l >= 65 ? l - 65 + 10 : l >= 48 && l <= 57 ? l - 48 : 1 / 0) >= e) {
        break;
      }
      s = l;
      a = a * e + f;
    }
  }
  if (r && 95 === s) {
    this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits");
  }
  return this.pos === o || null != t && this.pos - o !== t ? null : a;
};
Be.readRadixNumber = function (e) {
  var t = this.pos;
  this.pos += 2;
  var n = this.readInt(e);
  if (null == n) {
    this.raise(this.start + 2, "Expected number in radix " + e);
  }
  if (this.options.ecmaVersion >= 11 && 110 === this.input.charCodeAt(this.pos)) {
    n = De(this.input.slice(t, this.pos));
    ++this.pos;
  } else {
    if (p(this.fullCharCodeAtPos())) {
      this.raise(this.pos, "Identifier directly after number");
    }
  }
  return this.finishToken(w.num, n);
};
Be.readNumber = function (e) {
  var t = this.pos;
  if (!(e || null !== this.readInt(10, void 0, !0))) {
    this.raise(t, "Invalid number");
  }
  var n = this.pos - t >= 2 && 48 === this.input.charCodeAt(t);
  if (n && this.strict) {
    this.raise(t, "Invalid number");
  }
  var r = this.input.charCodeAt(this.pos);
  if (!n && !e && this.options.ecmaVersion >= 11 && 110 === r) {
    var i = De(this.input.slice(t, this.pos));
    ++this.pos;
    if (p(this.fullCharCodeAtPos())) {
      this.raise(this.pos, "Identifier directly after number");
    }
    return this.finishToken(w.num, i);
  }
  if (n && /[89]/.test(this.input.slice(t, this.pos))) {
    n = !1;
  }
  if (!(46 !== r || n)) {
    ++this.pos;
    this.readInt(10);
    r = this.input.charCodeAt(this.pos);
  }
  if (!(69 !== r && 101 !== r || n)) {
    if (!(43 !== (r = this.input.charCodeAt(++this.pos)) && 45 !== r)) {
      ++this.pos;
    }
    if (null === this.readInt(10)) {
      this.raise(t, "Invalid number");
    }
  }
  if (p(this.fullCharCodeAtPos())) {
    this.raise(this.pos, "Identifier directly after number");
  }
  var o;
  o = this.input.slice(t, this.pos);
  var a = n ? parseInt(o, 8) : parseFloat(o.replace(/_/g, ""));
  return this.finishToken(w.num, a);
};
Be.readCodePoint = function () {
  var e;
  if (123 === this.input.charCodeAt(this.pos)) {
    if (this.options.ecmaVersion < 6) {
      this.unexpected();
    }
    var t = ++this.pos;
    e = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
    ++this.pos;
    if (e > 1114111) {
      this.invalidStringToken(t, "Code point out of bounds");
    }
  } else {
    e = this.readHexChar(4);
  }
  return e;
};
Be.readString = function (e) {
  for (var t = "", n = ++this.pos;;) {
    if (this.pos >= this.input.length) {
      this.raise(this.start, "Unterminated string constant");
    }
    var r = this.input.charCodeAt(this.pos);
    if (r === e) {
      break;
    }
    if (92 === r) {
      t += this.input.slice(n, this.pos);
      t += this.readEscapedChar(!1);
      n = this.pos;
    } else {
      if (C(r, this.options.ecmaVersion >= 10)) {
        this.raise(this.start, "Unterminated string constant");
      }
      ++this.pos;
    }
  }
  t += this.input.slice(n, this.pos++);
  return this.finishToken(w.string, t);
};
var Fe = {};
Be.tryReadTemplateToken = function () {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (e) {
    if (e !== Fe) {
      throw e;
    }
    this.readInvalidTemplateToken();
  }
  this.inTemplateElement = !1;
};
Be.invalidStringToken = function (e, t) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
    throw Fe;
  }
  this.raise(e, t);
};
Be.readTmplToken = function () {
  for (var e = "", t = this.pos;;) {
    if (this.pos >= this.input.length) {
      this.raise(this.start, "Unterminated template");
    }
    var n = this.input.charCodeAt(this.pos);
    if (96 === n || 36 === n && 123 === this.input.charCodeAt(this.pos + 1)) {
      return this.pos !== this.start || this.type !== w.template && this.type !== w.invalidTemplate ? (e += this.input.slice(t, this.pos), this.finishToken(w.template, e)) : 36 === n ? (this.pos += 2, this.finishToken(w.dollarBraceL)) : (++this.pos, this.finishToken(w.backQuote));
    }
    if (92 === n) {
      e += this.input.slice(t, this.pos);
      e += this.readEscapedChar(!0);
      t = this.pos;
    } else if (C(n)) {
      switch (e += this.input.slice(t, this.pos), ++this.pos, n) {
        case 13:
          if (10 === this.input.charCodeAt(this.pos)) {
            ++this.pos;
          }
        case 10:
          e += "\n";
          break;
        default:
          e += String.fromCharCode(n);
      }
      if (this.options.locations) {
        ++this.curLine;
        this.lineStart = this.pos;
      }
      t = this.pos;
    } else {
      ++this.pos;
    }
  }
};
Be.readInvalidTemplateToken = function () {
  for (; this.pos < this.input.length; this.pos++) {
    switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break;
      case "$":
        if ("{" !== this.input[this.pos + 1]) {
          break;
        }
      case "`":
        return this.finishToken(w.invalidTemplate, this.input.slice(this.start, this.pos));
    }
  }
  this.raise(this.start, "Unterminated template");
};
Be.readEscapedChar = function (e) {
  var t = this.input.charCodeAt(++this.pos);
  switch (++this.pos, t) {
    case 110:
      return "\n";
    case 114:
      return "\r";
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    case 117:
      return Ie(this.readCodePoint());
    case 116:
      return "\t";
    case 98:
      return "\b";
    case 118:
      return "\u000b";
    case 102:
      return "\f";
    case 13:
      if (10 === this.input.charCodeAt(this.pos)) {
        ++this.pos;
      }
    case 10:
      if (this.options.locations) {
        this.lineStart = this.pos;
        ++this.curLine;
      }
      return "";
    case 56:
    case 57:
      if (e) {
        var n = this.pos - 1;
        this.invalidStringToken(n, "Invalid escape sequence in template string");
        return null;
      }
    default:
      if (t >= 48 && t <= 55) {
        var r = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
        var i = parseInt(r, 8);
        if (i > 255) {
          r = r.slice(0, -1);
          i = parseInt(r, 8);
        }
        this.pos += r.length - 1;
        t = this.input.charCodeAt(this.pos);
        if (!("0" === r && 56 !== t && 57 !== t || !this.strict && !e)) {
          this.invalidStringToken(this.pos - 1 - r.length, e ? "Octal literal in template string" : "Octal literal in strict mode");
        }
        return String.fromCharCode(i);
      }
      return C(t) ? "" : String.fromCharCode(t);
  }
};
Be.readHexChar = function (e) {
  var t = this.pos;
  var n = this.readInt(16, e);
  if (null === n) {
    this.invalidStringToken(t, "Bad character escape sequence");
  }
  return n;
};
Be.readWord1 = function () {
  this.containsEsc = !1;
  for (var e = "", t = !0, n = this.pos, r = this.options.ecmaVersion >= 6; this.pos < this.input.length;) {
    var i = this.fullCharCodeAtPos();
    if (_(i, r)) {
      this.pos += i <= 65535 ? 1 : 2;
    } else {
      if (92 !== i) {
        break;
      }
      this.containsEsc = !0;
      e += this.input.slice(n, this.pos);
      var o = this.pos;
      if (117 !== this.input.charCodeAt(++this.pos)) {
        this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX");
      }
      ++this.pos;
      var a = this.readCodePoint();
      if (!(t ? p : _)(a, r)) {
        this.invalidStringToken(o, "Invalid Unicode escape");
      }
      e += Ie(a);
      n = this.pos;
    }
    t = !1;
  }
  return e + this.input.slice(n, this.pos);
};
Be.readWord = function () {
  var e = this.readWord1();
  var t = w.name;
  if (this.keywords.test(e)) {
    t = y[e];
  }
  return this.finishToken(t, e);
};
var Re = "7.4.1";
function Pe(e, t) {
  return U.parse(e, t);
}
function Ne(e, t, n) {
  return U.parseExpressionAt(e, t, n);
}
function Me(e, t) {
  return U.tokenizer(e, t);
}
U.acorn = {
  Parser: U,
  version: Re,
  defaultOptions: M,
  Position: R,
  SourceLocation: P,
  getLineInfo: N,
  Node: re,
  TokenType: A,
  tokTypes: w,
  keywordTypes: y,
  TokContext: ae,
  tokContexts: se,
  isIdentifierChar: _,
  isIdentifierStart: p,
  Token: Te,
  isNewLine: C,
  lineBreak: E,
  lineBreakG: x,
  nonASCIIwhitespace: O
};