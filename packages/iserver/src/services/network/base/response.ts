import type { Line } from "../../../sm/geometry/Geometry"

export interface PathList {
  nodeIDs: number[]
  route: {
    line: Line
    length: number
  }
  weight: number
}

export interface NetworkAnalystResultResponse {
  pathList: PathList[]
}
