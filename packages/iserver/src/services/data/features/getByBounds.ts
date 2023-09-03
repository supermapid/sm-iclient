import ky from "ky-universal"
import type { Geometry as GeoJSONGeometry, GeoJsonProperties } from "geojson"
import type { Options as KyOptions } from "ky-universal"
import type { BaseDataParameter, FilterParameter } from "../base"
import { filterToQueryParameter, toFeatureResultPayload } from "../base"
import type { ServiceResult } from "../../../sm/common/ServiceResult"
import { toGeoJSON } from "../../../geometry/transformer"
import type { FeatureResultPayload } from "../../../sm/data/featureResults/FeatureResultPayload"
import { GetFeatureMode } from "../../../sm/data/featureResults/GetFeatureMode"
import type { Rectangle2D } from "../../../sm/geometry"
import { parseBaseParameter } from "../../base/parameter"

export interface GetByBoundsParameter extends BaseDataParameter {
  bounds: Pick<Rectangle2D, "leftBottom" | "rightTop">
  filter?: FilterParameter
}

export async function getByBounds<G extends GeoJSONGeometry | null = GeoJSONGeometry, P = GeoJsonProperties>(
  url: string,
  options: GetByBoundsParameter,
  kyOptions: KyOptions = {}
) {
  const getFeatureMode =
    options.filter != null ? GetFeatureMode.BOUNDS_ATTRIBUTEFILTER : GetFeatureMode.BOUNDS

  const { bounds } = options

  const payload: FeatureResultPayload = {
    ...toFeatureResultPayload(options, getFeatureMode),
    ...(options.filter && { queryParameter: filterToQueryParameter(options, options.filter) }),
    bounds: {
      ...bounds,
      bottom: bounds.leftBottom.y,
      top: bounds.rightTop.y,
      left: bounds.leftBottom.x,
      right: bounds.rightTop.x
    }
  }

  const res = await ky
    .post(`${url}/featureResults.json`, {
      ...kyOptions,
      searchParams: {
        returnContent: true,
        fromIndex: options.fromIndex ?? 0,
        toIndex: options.toIndex ?? -1,
        ...parseBaseParameter(options)
      },
      json: payload
    })
    .json<ServiceResult>()

  if (res.error != null && res.succeed === false) {
    throw new Error(`${res.error.code}: ${res.error.errorMsg}`)
  }

  return toGeoJSON<G, P>(res.features)
}
