export interface QueryParameter {
  name: string
  attributeFilter: string
  fields?: string[]
  orderBy?: string
  groupBy?: string
  ids?: number[]
}
