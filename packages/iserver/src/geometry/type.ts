// type GeometryType = "POINT" | "LINE" | "REGION"

export enum GeometryType {
  POINT = "POINT",
  LINE = "LINE",
  REGION = "REGION"
}

export interface Geometry<T extends GeometryType> {
  center: Center
  parts: number[]
  style: null
  prjCoordSys: null
  id: number
  type: T
  partTopo: number[]
  points: Center[]
}

export interface Center {
  x: number
  y: number
}

export interface Point extends Geometry<GeometryType.POINT> {}
export interface Line extends Geometry<GeometryType.LINE> {}
export interface Region extends Geometry<GeometryType.REGION> {}
