export interface MyResponse<T = void> {
  code: number
  success: boolean
  data: T
  msg: string
  extData: null
  traceId: string
}

export interface PageResponse<T> {
  items: T[]
  total: number
  currentPage: number
  pageSize: number
}
