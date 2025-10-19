import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

import * as Language from "../../ui/language"
import * as Event from "../../events/actions"
import * as Message from "../../events/messages-wrapper"

export const axiosWithCredentials: AxiosInstance = axios.create({
  timeout: 2e4,
  withCredentials: true
})

axiosWithCredentials.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => config,
  (error: unknown): Promise<never> => Promise.reject(error)
)

axiosWithCredentials.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  (error: AxiosError): Promise<never> => {
    if (!error.response && (!navigator.onLine || navigator?.connection?.rtt === 0)) {
      const language: Language.Language = Event.getLanguage()
      Event.getStore().dispatch(Message.wrapShowCommonToastInfo({
        message: Language.format(language, "axios.weakNetworkTips").toString(),
        type: "error"
      }))
    }
    return Promise.reject(error)
  }
)

export { axiosWithCredentials as a }
