import ky from "ky-universal"
import type { Geometry as GeoJSONGeometry, GeoJsonProperties } from "geojson"
import type { Options as KyOptions } from "ky-universal"
import type { BaseParameter, FilterParameter } from "../base"
import { filterToQueryParameter, toFeatureResultPayload } from "../base"
import type { ServiceResult } from "../../../sm/common/ServiceResult"
import { geojsonGeometry2sm, toGeoJSON } from "~/geometry/transformer"
import type { FeatureResultPayload } from "~/sm/data/featureResults/FeatureResultPayload"
import { GetFeatureMode } from "~/sm/data/featureResults/GetFeatureMode"

export interface GetByBufferParameter extends BaseParameter {
  geometry: GeoJSONGeometry
  bufferDistance: number
  filter?: FilterParameter
  attributeFilter?: string
}

export async function getByBuffer<G extends GeoJSONGeometry | null = GeoJSONGeometry, P = GeoJsonProperties>(
  url: string,
  options: GetByBufferParameter,
  kyOptions: KyOptions = {}
) {
  // @ts-expect-error uppercase of geometry type
  const geometry = geojsonGeometry2sm[options.geometry.type.toUpperCase()](options.geometry)
  const getFeatureMode =
    options.attributeFilter != null ? GetFeatureMode.BUFFER_ATTRIBUTEFILTER : GetFeatureMode.BUFFER

  const payload: FeatureResultPayload = {
    ...toFeatureResultPayload(options, getFeatureMode),
    ...(options.filter && { queryParameter: filterToQueryParameter(options, options.filter) }),
    ...(options.attributeFilter && { attributeFilter: options.attributeFilter }),
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
        ...(options.token != null && { token: options.token })
      },
      json: payload
    })
    .json<ServiceResult>()

  if (res.error != null && res.succeed === false) {
    throw new Error(`${res.error.code}: ${res.error.errorMsg}`)
  }

  return toGeoJSON<G, P>(res.features)
}