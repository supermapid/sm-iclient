import ky from "ky";
import { toGeoJSON } from "../geometry/transformer";
export async function getBySQL(url, options, kyOptions = {}) {
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
        .json();
    if (res.error != null && res.succeed === false) {
        throw new Error(`${res.error.code}: ${res.error.errorMsg}`);
    }
    return toGeoJSON(res.features, options.typeCast);
}
// export async function create(url: string, kyOptions: KyOptions = {}) {
// }
// export async function delete(url: string, kyOptions: KyOptions = {}) {
// }
