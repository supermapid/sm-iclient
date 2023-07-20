import type { Rectangle2D } from "../../geometry/Rectangle2D"
import type { Geometry } from "../../geometry/Geometry"
import type { SpatialQueryMode } from "../../common/SpatialQueryMode"
import type { PrjCoordSys } from "../../common/PrjCoordSys"
import type { GetFeatureMode } from "./GetFeatureMode"

export interface FeatureResultPayload {
  getFeatureMode: GetFeatureMode
  datasetNames: string[]
  ids?: number[]
  bounds?: Rectangle2D
  geometry?: Geometry
  bufferDistance?: number
  attributeFilter?: string
  spatialQueryMode?: SpatialQueryMode
  maxFeatures?: number
  queryParameter?: any
  targetPrj?: PrjCoordSys
  targetEpsgCode?: any
  hasGeometry?: boolean
}
