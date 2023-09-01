export interface BaseParameter {
  token?: string
}

export function parseBaseParameter<T extends BaseParameter>(param: T) {
  return Object.hasOwn(param, "token") ? { token: param.token! } : {}
}
