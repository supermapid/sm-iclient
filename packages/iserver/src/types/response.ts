export interface ServiceResult {
  succeed?: boolean
  error?: {
    code: number
    errorMsg: string
  }
  features: Feature[]
  featureUriList: any[]
  totalCount: number
  featureCount: number
}

export interface Feature {
  stringID: null
  fieldNames: string[]
  geometry: Geometry
  fieldValues: string[]
  ID: number
}

type GeometryType = "POINT" | "LINE" | "REGION"

export interface Geometry {
  center: Center
  parts: number[]
  style: null
  prjCoordSys: null
  id: number
  type: GeometryType
  partTopo: number[]
  points: Center[]
}

export interface Center {
  x: number
  y: number
}

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
