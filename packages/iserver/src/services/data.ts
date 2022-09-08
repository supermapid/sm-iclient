import ky from "ky"
import type { Options as KyOptions } from "ky"
import { toGeoJSON } from "../geometry/transformer"
import type { ServiceResult } from "../types/response"

export interface GetFeatureBySQLParamater {
  dataset: string
  datasource: string
  filter: {
    select: string
    orderBy?: string
    groupBy?: string
  }
  fromIndex?: boolean
  toIndex?: boolean
  token?: string
  typeCast?: boolean
}

export async function getBySQL(url: string, options: GetFeatureBySQLParamater, kyOptions: KyOptions = {}) {
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
          attributeFilter: options.filter.select
        }
      }
    })
    .json<ServiceResult>()

  if (res.error != null && res.succeed === false) {
    throw new Error(`${res.error.code}: ${res.error.errorMsg}`)
  }

  return toGeoJSON(res.features, options.typeCast)
}

// export async function create(url: string, kyOptions: KyOptions = {}) {

// }

// export async function delete(url: string, kyOptions: KyOptions = {}) {

// }
