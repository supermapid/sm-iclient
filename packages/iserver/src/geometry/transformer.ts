import type {
  FeatureCollection,
  Feature as GeoJSONFeature,
  Point as GeoJSONPoint,
  Polygon as GeoJSONPolygon,
  Position as GeoJSONPosition,
  LineString,
  MultiLineString,
  MultiPolygon
} from "geojson"
import { range } from "radash"
import { parseString } from "../utils/type-cast"
import type { Center, Feature, Geometry } from "../types/response"
import { GeometryType as SmGeometryType } from "../geometry/type"
import type { Line as SmLine, Point as SmPoint, Region as SmRegion } from "../geometry/type"

// TODO: Rework later, so can accomodate multiple type and another geometry
export const smGeometry2geojson = {
  POINT(geom: Geometry): GeoJSONPoint {
    return { type: "Point", coordinates: [geom.points[0].x, geom.points[0].y] }
  },
  REGION(geom: Geometry): GeoJSONPolygon | MultiPolygon {
    if (geom.parts.length === 1) {
      return { type: "Polygon", coordinates: [geom.points.map((p) => [p.x, p.y])] }
    }

    const multi: MultiPolygon = { type: "MultiPolygon", coordinates: [] }

    let i = 0

    for (const [index, part] of geom.parts.entries()) {
      const pg: GeoJSONPosition[][] = [
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
  REGION3D(geom: Geometry) {
    return this.REGION(geom)
  },
  LINE(geom: Geometry): LineString | MultiLineString {
    if (geom.parts.length === 1) {
      return { type: "LineString", coordinates: geom.points.map((p) => [p.x, p.y]) }
    }

    const multi: MultiLineString = { type: "MultiLineString", coordinates: [] }

    let i = 0
    for (const part of geom.parts) {
      const line: GeoJSONPosition[] = geom.points.slice(i, i + part).map((p) => [p.x, p.y])
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
    const geom = smGeometry2geojson[gt](f.geometry)
    const prop: Record<string, string | number> = {}
    for (const i of range(0, f.fieldNames.length - 1)) {
      prop[f.fieldNames[i]] = typeCast ? parseString(f.fieldValues[i]) : f.fieldValues[i]
    }

    const feature: GeoJSONFeature = { type: "Feature", geometry: geom, properties: prop }
    geojson.features.push(feature)
  }

  return geojson
}

// type SupportedGeometry = GeoJSONPoint | LineString | MultiLineString | GeoJSONPolygon | MultiPolygon
// : Record<
//   string,
//   (geom: SupportedGeometry) => SmGeometry<SmGeometryType.LINE | SmGeometryType.POINT | SmGeometryType.REGION>
// >

export const geojsonGeometry2sm = {
  POINT(geom: GeoJSONPoint): SmPoint {
    return {
      center: {
        x: geom.coordinates[0],
        y: geom.coordinates[1]
      },
      type: SmGeometryType.POINT,
      parts: [1],
      partTopo: [1],
      style: null,
      prjCoordSys: null,
      id: 1,
      points: [{ x: geom.coordinates[0], y: geom.coordinates[1] }]
    }
  },
  LINESTRING(geom: LineString): SmLine {
    const xs: number[] = []
    const ys: number[] = []

    const points: Center[] = []

    for (const vertex of geom.coordinates) {
      xs.push(vertex[0])
      ys.push(vertex[1])

      points.push({
        x: vertex[0],
        y: vertex[1]
      })
    }

    return {
      center: {
        x: (Math.max(...xs) + Math.min(...xs)) / xs.length,
        y: (Math.max(...ys) + Math.min(...ys)) / ys.length
      },
      type: SmGeometryType.LINE,
      parts: [geom.coordinates.length],
      partTopo: [1],
      style: null,
      prjCoordSys: null,
      id: 1,
      points
    }
  },
  MULTILINESTRING(geom: MultiLineString): SmLine {
    const geo: SmLine = {
      center: {
        x: 0,
        y: 0
      },
      type: SmGeometryType.LINE,
      parts: [],
      partTopo: [],
      style: null,
      prjCoordSys: null,
      id: 1,
      points: []
    }

    const xs: number[] = []
    const ys: number[] = []

    let i = 0

    for (const line of geom.coordinates) {
      geo.parts[i] = 0
      geo.partTopo[i] = 1

      for (const vertex of line) {
        xs.push(vertex[0])
        ys.push(vertex[1])

        geo.points.push({
          x: vertex[0],
          y: vertex[1]
        })

        geo.parts[i] += 1
      }

      i += 1
    }

    geo.center.x = (Math.max(...xs) + Math.min(...xs)) / xs.length
    geo.center.y = (Math.max(...ys) + Math.min(...ys)) / ys.length

    return geo
  },
  POLYGON(geom: GeoJSONPolygon): SmRegion {
    const center = geom.coordinates[0].reduce((r, c) => {
      return [c[0] + r[0], c[1] + r[1]]
    })

    const geo: SmRegion = {
      center: {
        x: center[0] / geom.coordinates[0].length,
        y: center[1] / geom.coordinates[0].length
      },
      type: SmGeometryType.REGION,
      parts: [],
      partTopo: [],
      style: null,
      prjCoordSys: null,
      id: 1,
      points: []
    }

    let i = 0
    for (const ring of geom.coordinates) {
      geo.partTopo.push(i === 0 ? 1 : -1)

      geo.parts.push(0)

      for (const c of ring) {
        geo.parts[i] += 1

        geo.points.push({
          x: c[0],
          y: c[1]
        })
      }

      i += 1
    }

    return geo
  },
  MULTIPOLYGON(geom: MultiPolygon): SmRegion {
    const geo: SmRegion = {
      center: {
        x: 0,
        y: 0
      },
      type: SmGeometryType.REGION,
      parts: [],
      partTopo: [],
      style: null,
      prjCoordSys: null,
      id: 1,
      points: []
    }

    let i = 0
    for (const p of geom.coordinates) {
      let ringCounter = 0

      for (const ring of p) {
        const isHole = ringCounter !== 0
        geo.partTopo.push(!isHole ? 1 : -1)

        geo.parts.push(0)

        for (const c of ring) {
          geo.parts[i] += 1

          geo.points.push({
            x: c[0],
            y: c[1]
          })
        }

        i += 1
        ringCounter += 1
      }
    }

    return geo
  }
}
