import type { Feature } from "./Features"

export interface ServiceResult {
  succeed?: boolean
  error?: {
    code: number
    errorMsg: string
  }
  featureCount: number
  featureUriList: string[]
  features: Feature[]
  totalCount: number
}
