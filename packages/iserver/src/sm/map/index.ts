import type { Feature } from "../common/Features"

export interface MapResponse {
  recordsets: Recordset[]
  totalCount: number
  currentCount: number
  customResponse: any | null
}

export interface Recordset {
  datasetName: string
  features: Feature[]
  fieldCaptions: string[]
  fieldTypes: string[]
  fields: string[]
}
