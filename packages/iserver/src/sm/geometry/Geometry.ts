// type GeometryType = "POINT" | "LINE" | "REGION"

import type { PrjCoordSys } from "../PrjCoordSys"
import type { Point2D } from "./Point2D"

export enum GeometryType {
  POINT = "POINT",
  LINE = "LINE",
  REGION = "REGION",
  REGION3D = "REGION3D"
}

export interface Geometry<T extends GeometryType = GeometryType> {
  center: Point2D
  parts: number[]
  style: any
  prjCoordSys?: PrjCoordSys | null
  id: number
  type: T
  partTopo: number[]
  points: Point2D[]
}

export interface Point extends Geometry<GeometryType.POINT> {}
export interface Line extends Geometry<GeometryType.LINE> {}
export interface Region extends Geometry<GeometryType.REGION> {}
