import type {
  FeatureCollection,
  Feature as GeoJSONFeature,
  LineString,
  MultiLineString,
  MultiPolygon,
  Point,
  Polygon,
  Position
} from "geojson"
import { range } from "radash"
import { parseString } from "../utils/type-cast"
import type { Feature, Geometry } from "../types/response"

// TODO: Rework later, so can accomodate multiple type and another geometry
export const transformer = {
  POINT(geom: Geometry): Point {
    return { type: "Point", coordinates: [geom.points[0].x, geom.points[0].y] }
  },
  REGION(geom: Geometry): Polygon | MultiPolygon {
    if (geom.parts.length === 1) {
      return { type: "Polygon", coordinates: [geom.points.map((p) => [p.x, p.y])] }
    }

    const multi: MultiPolygon = { type: "MultiPolygon", coordinates: [] }

    let i = 0

    for (const [index, part] of geom.parts.entries()) {
      const pg: Position[][] = [
        geom.points.slice(i, i + part).map((c) => {
          return [c.x, c.y]
        })
      ]

      i += part

      const topo = geom.partTopo[index]
      if (topo === -1) {
        // polygon is inner hole
        multi.coordinates[multi.coordinates.length - 1].push(pg[0])
        continue
      }

      multi.coordinates.push(pg)
    }

    return multi
  },
  LINE(geom: Geometry): LineString | MultiLineString {
    if (geom.parts.length === 1) {
      return { type: "LineString", coordinates: geom.points.map((p) => [p.x, p.y]) }
    }

    const multi: MultiLineString = { type: "MultiLineString", coordinates: [] }

    let i = 0
    for (const part of geom.parts) {
      const line: Position[] = geom.points.slice(i, i + part).map((p) => [p.x, p.y])
      i += part

      multi.coordinates.push(line)
    }

    return multi
  }
}

export function toGeoJSON(features: Feature[], typeCast = true): FeatureCollection {
  const geojson: FeatureCollection = { type: "FeatureCollection", features: [] }

  for (const f of features) {
    const gt = f.geometry.type as string
    // @ts-expect-error fix later for dynamic transformation
    const geom = transformer[gt](f.geometry)
    const prop: Record<string, string | number> = {}
    for (const i of range(0, f.fieldNames.length - 1)) {
      prop[f.fieldNames[i]] = typeCast ? parseString(f.fieldValues[i]) : f.fieldValues[i]
    }

    const feature: GeoJSONFeature = { type: "Feature", geometry: geom, properties: prop }
    geojson.features.push(feature)
  }

  return geojson
}
