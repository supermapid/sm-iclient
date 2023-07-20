import type { FeatureResultPayload, GetFeatureMode } from "../../../sm/data"

export interface BaseParameter {
  dataset: string
  datasource: string
  fromIndex?: number
  toIndex?: number
  token?: string
  typeCast?: boolean
  maxFeatures?: number
}

export function toFeatureResultPayload(
  options: BaseParameter,
  getFeatureMode: GetFeatureMode
): FeatureResultPayload {
  return {
    datasetNames: [`${options.datasource}:${options.dataset}`],
    hasGeometry: true,
    getFeatureMode,
    maxFeatures: options.maxFeatures ?? undefined
  }
}
