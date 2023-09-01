import ky from "ky"
import type { NetworkAnalystResultResponse } from "../base/response"
import type { BaseNetworkParameter, TransportationAnalystParameter } from "../base/parameter"
import type { Point2D } from "~/sm/geometry"
import { parseBaseParameter } from "~/services/base/parameter"

export interface GetMtspPathParameter extends BaseNetworkParameter {
  nodes: Point2D[]
  parameter: TransportationAnalystParameter
  isAnalyzeById?: boolean
  endNodeAssigned?: boolean
}

export async function geTspPath(url: string, params: GetMtspPathParameter) {
  return await ky
    .get(`${url}/path.json`, {
      searchParams: {
        nodes: JSON.stringify(params.nodes),
        parameter: JSON.stringify(params.parameter),
        isAnalyzeById: params?.isAnalyzeById ?? false,
        endNodeAssigned: params?.endNodeAssigned ?? false,
        ...parseBaseParameter(params)
      }
    })
    .json<NetworkAnalystResultResponse>()
}
