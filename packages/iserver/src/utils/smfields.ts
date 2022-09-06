import { omit } from "radash"

export const SMFIELDS = ["SMAREA", "SMGEOMETRY", "SMID", "SMPERIMETER", "SMUSERID", "USERID"]

export function removeSMField(prop: Record<string, string>) {
  return omit(prop, SMFIELDS)
}
