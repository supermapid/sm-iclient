import ky from "ky-universal"
import type { Options as KyOptions } from "ky-universal"
import type { Feature, FeatureCollection, Geometry } from "geojson"
import { geojsonGeometry2sm, toGeoJSON } from "../geometry/transformer"
import type { ServiceResult } from "../types/response"

export interface BaseParameter {
  dataset: string
  datasource: string
  fromIndex?: number
  toIndex?: number
  token?: string
  typeCast?: boolean
  maxFeatures?: number
}

export interface GetBySQLParamater extends BaseParameter {
  filter: {
    where: string
    select?: string[]
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
        maxFeatures: options.maxFeatures ?? undefined,
        queryParameter: {
          name: `${options.dataset}@${options.datasource}`,
          attributeFilter: options.filter.where,
          fields: options.filter.select ?? undefined
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

export interface GetByBufferParameter extends BaseParameter {
  geometry: Geometry
  bufferDistance: number
  filter?: {
    where?: string
    select?: string[]
    orderBy?: string
    groupBy?: string
  }
}

export async function getByBuffer(url: string, options: GetByBufferParameter, kyOptions: KyOptions = {}) {
  // @ts-expect-error uppercase of geometry type
  const geometry = geojsonGeometry2sm[options.geometry.type.toUpperCase()](options.geometry)

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
        bufferDistance: options.bufferDistance,
        datasetNames: [`${options.datasource}:${options.dataset}`],
        geometry,
        hasGeometry: true,
        getFeatureMode: "BUFFER",
        maxFeatures: options.maxFeatures ?? undefined,
        queryParameter: options.filter
          ? {
              name: `${options.dataset}@${options.datasource}`,
              attributeFilter: options.filter.where ?? undefined,
              fields: options.filter.select ?? undefined
            }
          : undefined
      }
    })
    .json<ServiceResult>()

  if (res.error != null && res.succeed === false) {
    throw new Error(`${res.error.code}: ${res.error.errorMsg}`)
  }

  return toGeoJSON(res.features)
}
