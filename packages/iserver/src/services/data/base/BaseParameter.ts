import type { FeatureResultPayload, GetFeatureMode } from "../../../sm/data"

export interface BaseParameter {
  dataset: string
  datasource: string
  fromIndex?: number
  toIndex?: number
  token?: string
  typeCast?: boolean
  maxFeatures?: number
  hasGeometry?: boolean
}

export function toFeatureResultPayload(
  options: BaseParameter,
  getFeatureMode: GetFeatureMode
): FeatureResultPayload {
  const { hasGeometry = true } = options
  return {
    datasetNames: [`${options.datasource}:${options.dataset}`],
    hasGeometry,
    getFeatureMode,
    maxFeatures: options.maxFeatures ?? undefined
  }
}
