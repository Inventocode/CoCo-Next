"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.bind_di_modules = void 0;
var r = require("./2095/index");
var i = require("./2107/index");
var o = require("./2111");
var a = require("./2112/index");
var s = require("./2114");
var c = require("./2115");
var u = require("./2116");
var l = require("./2117/index");
var f = require("./1311");
var h = require("./2118/index");
var d = require("./2121");
var p = require("./2122");
var _ = require("./2123");
var A = require("./2124");
var g = require("./2125");
var v = require("./2126");
var m = require("./2127");
var y = require("./2128");
var b = require("./2129");
var w = require("./2130");
var E = require("../../1000/index");
var x = require("./2131");
var C = require("./2132");
var O = require("./2133/index");
var S = require("./2136");
var k = require("./2137");
var T = require("./2138");
var B = require("./2139");
var D = require("./2140/index");
var I = require("./2141");
var F = require("./2142/index");
var R = require("./2143/index");
var P = require("./2145");
var N = require("./2146");
var M = require("./2147");
var j = require("./2148");
var L = require("./2149");
var U = require("./2150");
var H = require("./962");
var V = require("./2151");
var G = require("../../301/726");
var z = require("../../121/727");
var Q = require("./2152");
var W = require("../../301/541");
var K = require("./2153");
var X = require("../../301/652");
var Y = require("./2154");
var q = require("./2155");
var $ = require("../../301/326");
var J = require("./2156");
var Z = require("../../301/374");
var ee = require("./2157");
var te = require("./2158");
var ne = require("./2159/index");
var re = require("./2162");
var ie = require("./1318");
var oe = require("./2163");
var ae = require("./2164/index");
var se = require("./2165");
var ce = require("./2166");
var ue = require("./2167");
var le = require("./2168");
var fe = require("./2169");
var he = require("../../1000/213/index");
var de = require("../642");
exports.bind_di_modules = function (e) {
  e.bind(de.BINDING.ChangeEvent).toFunction(function (e, t) {
    if (!function (e) {
      return e.block instanceof H.WorkspaceElement;
    }(t) || "string" !== typeof e) {
      throw new Error("\n        Trying to create invalid change event with event " + e + " and param " + t + ".\n        It may caused by wrong custom change event subtype registry.\n        Note that options of any change event should include [block], [old_value] and [new_value].\n        Check https://codemao.yuque.com/milktea/blink/zy9tlg for more information.\n      ");
    }
    return new r.ChangeEvent(e, t);
  });
  e.bind(de.BINDING.CreateEvent).toFunction(function (e) {
    return new r.CreateEvent(e);
  });
  e.bind(de.BINDING.DeleteEvent).toFunction(function (e) {
    return new r.DeleteEvent(e);
  });
  e.bind(de.BINDING.DragAreaChangeEvent).toFunction(function (e) {
    return new r.DragAreaChangeEvent(e);
  });
  e.bind(de.BINDING.EndDragEvent).toFunction(function (e) {
    return new r.EndDragEvent(e);
  });
  e.bind(de.BINDING.MoveEvent).toFunction(function (e) {
    return new r.MoveEvent(e);
  });
  e.bind(de.BINDING.StartDragEvent).toFunction(function (e) {
    return new r.StartDragEvent(e);
  });
  e.bind(de.BINDING.ContextMenuOptionEvent).toFunction(function (e) {
    return new i.ContextMenuOptionEvent(e);
  });
  e.bind(de.BINDING.GroupEvent).toFunction(function (e) {
    return new i.GroupEvent(e);
  });
  e.bind(de.BINDING.UIEvent).toFunction(function (e) {
    return new i.UIEvent(e);
  });
  e.bind(de.BINDING.FlyoutButton).toFunction(function (e) {
    return new o.FlyoutButton(e);
  });
  e.bind(de.BINDING.VerticalFlyout).toFunction(function (e) {
    return new a.VerticalFlyout(e);
  });
  e.bind(de.BINDING.WorkspaceElementDragger).toFunction(function (e) {
    if ((0, he.is_block_svg)(e.target)) {
      return new s.BlockDragger({
        target: e.target,
        workspace: e.workspace
      });
    }
    if ((0, he.is_workspace_comment)(e.target)) {
      return new l.WorkspaceCommentDragger({
        target: e.target,
        workspace: e.workspace
      });
    }
    throw Error("Trying to drag invalid element");
  });
  e.bind(de.BINDING.WorkspaceDragger).toFunction(function (e) {
    return (0, he.is_workspace)(e) ? new f.WorkspaceDragger(e) : new c.FlyoutDragger(e);
  });
  e.bind(de.BINDING.Gesture).toFunction(function (e) {
    return new u.Gesture(e);
  });
  e.bind(de.BINDING.Blink).to(h.Blink).inSingletonScope();
  e.bind(de.BINDING.block_animations).to(d.BlockAnimations).inSingletonScope();
  e.bind(de.BINDING.context_menu).to(p.ContextMenu).inSingletonScope();
  e.bind(de.BINDING.css).to(_.Css).inSingletonScope();
  e.bind(de.BINDING.dragged_connection_manager).to(A.DraggedConnectionManager).inSingletonScope();
  e.bind(de.BINDING.insertion_marker_manager).to(g.InsertionMarkerManager).inSingletonScope();
  e.bind(de.BINDING.events).to(v.Events).inSingletonScope();
  e.bind(de.BINDING.extensions).to(m.Extensions).inSingletonScope();
  e.bind(de.BINDING.json).to(y.Json).inSingletonScope();
  e.bind(de.BINDING.registry).to(b.Registry).inSingletonScope();
  e.bind(de.BINDING.runtime_data).to(w.RuntimeData).inSingletonScope();
  e.bind(de.BINDING.theme).to(E.Theme).inSingletonScope();
  e.bind(de.BINDING.tooltip).to(x.Tooltip).inSingletonScope();
  e.bind(de.BINDING.touch_manager).to(C.TouchManager).inSingletonScope();
  e.bind(de.BINDING.utils).to(O.Utils).inSingletonScope();
  e.bind(de.BINDING.widget_div).to(S.WidgetDiv).inSingletonScope();
  e.bind(de.BINDING.workspace_db).to(k.WorkspaceDB).inSingletonScope();
  e.bind(de.BINDING.xml).to(T.Xml).inSingletonScope();
  e.bind(de.BINDING.slider_controller).to(B.SliderController).inSingletonScope();
  e.bind(de.BINDING.angle_controller).to(D.AngleController).inSingletonScope();
  e.bind(de.BINDING.color_controller).to(F.ColorController).inSingletonScope();
  e.bind(de.BINDING.Toolbox).toFunction(function (e) {
    return new R.Toolbox(e);
  });
  e.bind(de.BINDING.BlockDragSurfaceSvg).toFunction(function (e) {
    return new P.BlockDragSurfaceSvg(e);
  });
  e.bind(de.BINDING.ConnectionDB).toFunction(function () {
    return new N.ConnectionDB();
  });
  e.bind(de.BINDING.Grid).toFunction(function (e) {
    return new M.Grid(e);
  });
  e.bind(de.BINDING.WorkspaceAudio).toFunction(function (e) {
    return new j.WorkspaceAudio(e);
  });
  e.bind(de.BINDING.WorkspaceDragSurfaceSvg).toFunction(function (e, t) {
    return new L.WorkspaceDragSurfaceSvg(e, t);
  });
  e.bind(de.BINDING.WorkspaceSvg).toFunction(function (e, t, n, r) {
    return new U.WorkspaceSvg(e, t, n, r);
  });
  e.bind(de.BINDING.FieldButton).toFunction(function (e) {
    return new V.FieldButton(e);
  });
  e.bind(de.BINDING.FieldColour).toFunction(function (e) {
    return new G.FieldColour(e);
  });
  e.bind(de.BINDING.FieldDropdown).toFunction(function (e) {
    return new z.FieldDropdown(e);
  });
  e.bind(de.BINDING.FieldIcon).toFunction(function (e) {
    return new Q.FieldIcon(e);
  });
  e.bind(de.BINDING.FieldImage).toFunction(function (e) {
    return new W.FieldImage(e);
  });
  e.bind(de.BINDING.FieldLabel).toFunction(function (e) {
    return new X.FieldLabel(e);
  });
  e.bind(de.BINDING.FieldLabelSerializable).toFunction(function (e) {
    return new K.FieldLabelSerializable(e);
  });
  e.bind(de.BINDING.FieldMultilineInput).toFunction(function (e) {
    return new Y.FieldMultilineInput(e);
  });
  e.bind(de.BINDING.MutationAddButton).toFunction(function () {
    return new q.MutationAddButton();
  });
  e.bind(de.BINDING.MutationRemoveButton).toFunction(function (e) {
    return new q.MutationRemoveButton(e);
  });
  e.bind(de.BINDING.FieldNumber).toFunction(function (e) {
    return new $.FieldNumber(e);
  });
  e.bind(de.BINDING.FieldTextDropdown).toFunction(function (e) {
    return new J.FieldTextDropdown(e);
  });
  e.bind(de.BINDING.FieldTextInput).toFunction(function (e) {
    return new Z.FieldTextInput(e);
  });
  e.bind(de.BINDING.FieldDefaultValue).toFunction(function (e) {
    return new ee.FieldDefaultValue(e);
  });
  e.bind(de.BINDING.Input).toFunction(function (e) {
    return new te.Input(e);
  });
  e.bind(de.BINDING.RenderedConnection).toFunction(function (e) {
    return new oe.RenderedConnection(e);
  });
  e.bind(de.BINDING.BlockSvg).toFunction(function (e) {
    return new ((0, ne.block_render_svg)(ie.BlockSvg))(e);
  });
  e.bind(de.BINDING.BlockGroup).toFunction(function (e) {
    return new ((0, ne.block_render_svg)(re.BlockGroup))(e);
  });
  e.bind(de.BINDING.SimplifiedCommentBubble).to(I.SimplifiedCommentBubble).inSingletonScope();
  e.bind(de.BINDING.WorkspaceComment).toFunction(function (e) {
    return "simplified" === e.type ? new se.SimplifiedWorkspaceComment(e.workspace, e.parent_block, e.position, e.opt_id) : new ae.WorkspaceComment(e.workspace, e.parent_block, e.position, e.opt_id);
  });
  e.bind(de.BINDING.Options).toFunction(function (e) {
    return new ce.Options(e);
  });
  e.bind(de.BINDING.Scrollbar).toFunction(function (e, t, n, r, i) {
    return new ue.Scrollbar(e, t, n, r, i);
  });
  e.bind(de.BINDING.ScrollbarPair).toFunction(function (e, t) {
    return new ue.ScrollbarPair(e, t);
  });
  e.bind(de.BINDING.Msg).toConstantValue(fe.Msg);
  e.bind(de.BINDING.css_content).toConstantValue(le.BLINK_CSS_CONTENT);
};