import ky from "ky"
import type { Geometry as GeoJSONGeometry, GeoJsonProperties } from "geojson"
import type { Options as KyOptions } from "ky"
import type { BaseDataParameter, FilterParameter } from "../base"
import { filterToQueryParameter, toFeatureResultPayload } from "../base"
import type { ServiceResult } from "../../../sm/common/ServiceResult"
import { toGeoJSON } from "../../../geometry/transformer"
import type { FeatureResultPayload } from "../../../sm/data/featureResults/FeatureResultPayload"
import { GetFeatureMode } from "../../../sm/data/featureResults/GetFeatureMode"
import { parseBaseParameter } from "../../base/parameter"

export interface GetBySQLParamater extends BaseDataParameter {
  filter: FilterParameter
}

export async function getBySQL<G extends GeoJSONGeometry | null = GeoJSONGeometry, P = GeoJsonProperties>(
  url: string,
  options: GetBySQLParamater,
  kyOptions: KyOptions = {}
) {
  const payload: FeatureResultPayload = {
    ...toFeatureResultPayload(options, GetFeatureMode.SQL),
    queryParameter: filterToQueryParameter(options, options.filter)
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

  return toGeoJSON<G, P>(res.features, options.typeCast)
}
