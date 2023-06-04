import type { Geometry } from "../geometry/Geometry"

export interface Feature {
  ID: number
  fieldNames: string[]
  fieldValues: string[]
  geometry: Geometry
}
