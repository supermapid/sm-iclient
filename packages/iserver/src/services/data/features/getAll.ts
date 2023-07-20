import type { Options as KyOptions } from "ky-universal"
import ky from "ky-universal"
import type { FeatureCollection, Geometry as GeoJSONGeometry, GeoJsonProperties } from "geojson"
import type { BaseParameter } from "../base/BaseParameter"

export interface GetAllParameter extends BaseParameter {}

/**
 * Get All Features
 * @param url iServer Data Service Base URL
 * @param options
 * @param kyOptions
 * @returns
 */
export async function getAll<G extends GeoJSONGeometry | null = GeoJSONGeometry, P = GeoJsonProperties>(
  url: string,
  options: GetAllParameter,
  kyOptions: KyOptions = {}
) {
  return await ky
    .get(`${url}/datasources/${options.datasource}/datasets/${options.dataset}/features.geojson`, {
      ...kyOptions,
      searchParams: {
        returnContent: true,
        fromIndex: options.fromIndex ?? 0,
        toIndex: options.toIndex ?? -1,
        ...(options.token != null && { token: options.token })
      }
    })
    .json<FeatureCollection<G, P>>()
}
