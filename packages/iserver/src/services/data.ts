import ky from "ky"
import type { Options as KyOptions } from "ky"
import type { Feature, FeatureCollection, Geometry } from "geojson"
import { toGeoJSON } from "../geometry/transformer"
import type { ServiceResult } from "../types/response"

export interface BaseParameter {
  dataset: string
  datasource: string
  fromIndex?: boolean
  toIndex?: boolean
  token?: string
  typeCast?: boolean
}

export interface GetBySQLParamater extends BaseParameter {
  filter: {
    where: string
    orderBy?: string
    groupBy?: string
  }
}

export async function getBySQL(url: string, options: GetBySQLParamater, kyOptions: KyOptions = {}) {
  const res = await ky
    .post(`${url}/featureResults.json`, {
      ...kyOptions,
      searchParams: {
        returnContent: true,
        fromIndex: options.fromIndex ?? 0,
        toIndex: options.toIndex ?? -1,
        ...(options.token != null && { token: options.token })
      },
      json: {
        datasetNames: [`${options.datasource}:${options.dataset}`],
        getFeatureMode: "SQL",
        queryParameter: {
          name: `${options.dataset}@${options.datasource}`,
          attributeFilter: options.filter.where
        }
      }
    })
    .json<ServiceResult>()

  if (res.error != null && res.succeed === false) {
    throw new Error(`${res.error.code}: ${res.error.errorMsg}`)
  }

  return toGeoJSON(res.features, options.typeCast)
}

export interface GetAllParameter extends BaseParameter {}

export async function getAll<T extends Geometry>(
  url: string,
  options: GetAllParameter,
  kyOptions: KyOptions = {}
) {
  const res = await ky
    .get(`${url}/datasources/${options.datasource}/datasets/${options.dataset}/features.geojson`, {
      ...kyOptions,
      searchParams: {
        returnContent: true,
        fromIndex: options.fromIndex ?? 0,
        toIndex: options.toIndex ?? -1,
        ...(options.token != null && { token: options.token })
      }
    })
    .json<FeatureCollection<T>>()

  return res
}

export interface GetByIdParameter extends BaseParameter {
  id: number
  hasGeometry: boolean
}

export async function getByID<T extends Geometry>(
  url: string,
  options: GetByIdParameter,
  kyOptions: KyOptions = {}
) {
  const res = await ky
    .get(`${url}/datasources/${options.datasource}/datasets/${options.dataset}/0-1-${options.id}.geojson`, {
      ...kyOptions,
      searchParams: {
        fromIndex: options.fromIndex ?? 0,
        toIndex: options.toIndex ?? -1,
        ...(options.token != null && { token: options.token }),
        hasGeometry: options?.hasGeometry ?? true
      }
    })
    .json<Feature<T>>()

  return res
}

// export async function create(url: string, kyOptions: KyOptions = {}) {

// }

// export async function delete(url: string, kyOptions: KyOptions = {}) {

// }
