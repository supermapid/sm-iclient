import type {Options as KyOptions} from "ky-universal"
import ky from "ky-universal"
import type {Feature, Geometry as GeoJSONGeometry, GeoJsonProperties} from "geojson"
import type {BaseParameter} from "~/services/data"

export interface GetByIdParameter extends BaseParameter {
  id: number
  hasGeometry: boolean
}

export async function getByID<G extends GeoJSONGeometry | null = GeoJSONGeometry, P = GeoJsonProperties>(
  url: string,
  options: GetByIdParameter,
  kyOptions: KyOptions = {}
) {
  return await ky
    .get(`${url}/datasources/${options.datasource}/datasets/${options.dataset}/0-1-${options.id}.geojson`, {
      ...kyOptions,
      searchParams: {
        fromIndex: options.fromIndex ?? 0,
        toIndex: options.toIndex ?? -1,
        ...(options.token != null && {token: options.token}),
        hasGeometry: options?.hasGeometry ?? true
      }
    })
    .json<Feature<G, P>>()
}
