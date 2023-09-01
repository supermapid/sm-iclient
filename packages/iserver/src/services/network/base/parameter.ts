import type { BaseParameter } from "~/services/base/parameter"

export interface BaseNetworkParameter extends BaseParameter {}

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
