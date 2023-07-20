export interface BaseParameter {
  token?: string
}

export interface TransportationAnalystParameter {
  resultSetting: {
    returnEdgeIDs: boolean
    returnNodeIDs: boolean
    returnPathGuides: boolean
    returnRoutes: boolean
    returnEdgeFeatures: boolean
    returnEdgeGeometry: boolean
    returnNodeFeatures: boolean
    returnNodeGeometry: boolean
  }
  weightFieldName: string
}
