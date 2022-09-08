import { omit } from "radash";
export const SMFIELDS = ["SMAREA", "SMGEOMETRY", "SMID", "SMPERIMETER", "SMUSERID", "USERID"];
export function removeSMField(prop) {
    return omit(prop, SMFIELDS);
}
