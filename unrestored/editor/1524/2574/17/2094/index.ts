"use strict";

import * as r from "./2095/index";
import * as i from "./2107/index";
import * as o from "./2111";
import * as a from "./2112/index";
import * as s from "./2114";
import * as c from "./2115";
import * as u from "./2116";
import * as l from "./2117/index";
import * as f from "./1311";
import * as h from "./2118/index";
import * as d from "./2121";
import * as p from "./2122";
import * as _ from "./2123";
import * as A from "./2124";
import * as g from "./2125";
import * as v from "./2126";
import * as m from "./2127";
import * as y from "./2128";
import * as b from "./2129";
import * as w from "./2130";
import * as E from "../../1000/index";
import * as x from "./2131";
import * as C from "./2132";
import * as O from "./2133/index";
import * as S from "./2136";
import * as k from "./2137";
import * as T from "./2138";
import * as B from "./2139";
import * as D from "./2140/index";
import * as I from "./2141";
import * as F from "./2142/index";
import * as R from "./2143/index";
import * as P from "./2145";
import * as N from "./2146";
import * as M from "./2147";
import * as j from "./2148";
import * as L from "./2149";
import * as U from "./2150";
import * as H from "./962";
import * as V from "./2151";
import * as G from "../../301/726";
import * as z from "../../121/727";
import * as Q from "./2152";
import * as W from "../../301/541";
import * as K from "./2153";
import * as X from "../../301/652";
import * as Y from "./2154";
import * as q from "./2155";
import * as $ from "../../301/326";
import * as J from "./2156";
import * as Z from "../../301/374";
import * as ee from "./2157";
import * as te from "./2158";
import * as ne from "./2159/index";
import * as re from "./2162";
import * as ie from "./1318";
import * as oe from "./2163";
import * as ae from "./2164/index";
import * as se from "./2165";
import * as ce from "./2166";
import * as ue from "./2167";
import * as le from "./2168";
import * as fe from "./2169";
import * as he from "../../1000/213/index";
import * as de from "../642";
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