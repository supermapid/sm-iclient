import ky from "ky-universal"
import type { Geometry as GeoJSONGeometry, GeoJsonProperties } from "geojson"
import type { Options as KyOptions } from "ky-universal"
import type { BaseDataParameter, FilterParameter } from "../base"
import { filterToQueryParameter, toFeatureResultPayload } from "../base"
import type { ServiceResult } from "../../../sm/common/ServiceResult"
import { geojsonGeometry2sm, toGeoJSON } from "../../../geometry/transformer"
import type { FeatureResultPayload } from "../../../sm/data/featureResults/FeatureResultPayload"
import { GetFeatureMode } from "../../../sm/data/featureResults/GetFeatureMode"
import { parseBaseParameter } from "../../base/parameter"

export interface GetByBufferParameter extends BaseDataParameter {
  geometry: GeoJSONGeometry
  bufferDistance: number
  filter?: FilterParameter
}

export async function getByBuffer<G extends GeoJSONGeometry | null = GeoJSONGeometry, P = GeoJsonProperties>(
  url: string,
  options: GetByBufferParameter,
  kyOptions: KyOptions = {}
) {
  // @ts-expect-error uppercase of geometry type
  const geometry = geojsonGeometry2sm[options.geometry.type.toUpperCase()](options.geometry)
  const getFeatureMode =
    options.filter != null ? GetFeatureMode.BUFFER_ATTRIBUTEFILTER : GetFeatureMode.BUFFER

  const payload: FeatureResultPayload = {
    ...toFeatureResultPayload(options, getFeatureMode),
    ...(options.filter && { queryParameter: filterToQueryParameter(options, options.filter) }),
    geometry,
    bufferDistance: options.bufferDistance
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
