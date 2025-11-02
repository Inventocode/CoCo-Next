import a = require("../../../../unrestored/shared/1531/2584/9");
import s = require("../../../../unrestored/shared/1531/2584/64");
import * as Type from "./type"
import { axiosWithCredentials } from "../../utils/network/axios-with-credentials"
import u = require("../../../../unrestored/shared/1531/2584/59/index");

import { MyResponse, PageResponse } from "../../utils/network/response"
import * as Internal from "../internal/types"

const baseURL: string = `${u.a.serverHost}/coconut`

export interface Label {
  id: number;
  name: string;
  code: string;
  sort: number;
}

export async function getLabels(): Promise<Label[]> {
  const { data } = await axiosWithCredentials.get<MyResponse<Label[]>>(baseURL + "/web/widget/labels")
  if (data.code !== 200) {
    throw Error(data.msg)
  }
  return data.data
}

export interface Info {
  id: number;
  widget_name: string;
  icon: string;
  author_name: string;
  resource_url: string;
  intro: string;
  widget_code: string;
  widget_type: number;
  sort: number;
  if_have: number;
}

export async function getList(
currentPage: number,
pageSize: number,
labelID?: (/** TODO */any))
: Promise<PageResponse<Info>> {
  const { data } = await axiosWithCredentials.get<MyResponse<PageResponse<Info>>>(baseURL + "/web/widget/list", {
    params: {
      label_id: labelID,
      current_page: currentPage,
      page_size: pageSize
    }
  })
  if (data.code !== 200) {
    throw Error(data.msg)
  }
  return data.data
}
export { getList as e }

export interface BoughtInfoResponse {
  id: number;
  widget_name: string;
  icon: string;
  resource_url: string;
  intro: string;
  widget_code: string;
  widget_type: number;
}

export interface BoughtInfo {
  id: number;
  type: string;
  widgetName: string;
  icon: string;
  cdnUrl: string;
  isInvisibleWidget: boolean;
}

export async function boughtList(
currentPage: number,
pageSize: number,
widgetType: (/** TODO */any))
: Promise<{list: BoughtInfo[];total: number;}> {
  const { data } = await axiosWithCredentials.get<MyResponse<PageResponse<BoughtInfoResponse>>>(baseURL + "/web/user/widget/list", {
    params: {
      widget_type: widgetType,
      current_page: currentPage,
      page_size: pageSize
    }
  })
  const result: BoughtInfo[] = []
  if (data.code !== 200) {
    throw Error(data.msg)
  }
  const { items } = data.data
  if (Array.isArray(items)) {
    items.forEach(function (item): void {
      const boughtInfo: BoughtInfo = {
        id: item.id,
        type: item.widget_code,
        widgetName: item.widget_name,
        icon: item.icon,
        cdnUrl: item.resource_url,
        isInvisibleWidget: 2 === item.widget_type
      }
      result.push(boughtInfo)
    })
  }
  return {
    list: result,
    total: data.data.total
  }
}

export async function buy(widgetsID: number[]): Promise<boolean> {
  const { data } = await axiosWithCredentials.post<MyResponse>(baseURL + "/web/widget/buy", {
    widget_ids: widgetsID
  })
  if (data.code !== 200) {
    throw Error(data.msg)
  }
  return data.success
}

export async function remove(widgetsID: number[]): Promise<boolean> {
  const stringWidgetsID: string = widgetsID.join(",")
  const { data } = await axiosWithCredentials.delete<MyResponse>(baseURL + "/web/widget/remove", {
    params: {
      widget_ids: stringWidgetsID
    }
  })
  if (data.code !== 200) {
    throw Error(data.msg)
  }
  return data.success
}

export function reportUse(type: string, userID?: number | undefined): void {
  var widget: Internal.Widget | null = a.Db(type)
  if (widget) {
    let guestID
    if (!(userID || (guestID = localStorage.getItem("guestId")))) {
      guestID = s.a("GUEST")
      localStorage.setItem("guestId", guestID)
    }
    let source: number = 1
    if (Type.isSafeExtensions(type)) {
      source = 2
      type = type.replace(Type.SAFE_EXTENSION_PREFIX, "")
    } else if (Type.isExtensions(type)) {
      source = 3
    }
    axiosWithCredentials.post(u.a.serverHost + "/data-center/widget", {
      widget_code: type,
      widget_type: widget.isInvisibleWidget ? 2 : 1,
      source_type: source,
      user_id: userID ? userID + "" : guestID
    })
  }
}

export async function getUsedTimes<T extends string>(
widgetsType: T[])
: Promise<Partial<Record<T, number>>> {
  const { data } = await axiosWithCredentials.get<MyResponse<{
    totalList: Partial<Record<T, number>>;
  }>>(u.a.serverHost + "/data-center/widget/total", {
    params: {
      widget_code_list: widgetsType.join(",")
    }
  })
  if (data.code !== 200) {
    throw Error(data.msg)
  }
  return data.data.totalList
}
