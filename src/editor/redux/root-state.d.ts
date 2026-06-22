import "react-redux"
import { ICommonState } from "./common/interface"

declare module "react-redux" {
  interface DefaultRootState {
    common: ICommonState
  }
}
