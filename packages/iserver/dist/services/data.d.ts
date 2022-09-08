import type { Options as KyOptions } from "ky";
export interface GetFeatureBySQLParamater {
    dataset: string;
    datasource: string;
    filter: {
        select: string;
        orderBy?: string;
        groupBy?: string;
    };
    fromIndex?: boolean;
    toIndex?: boolean;
    token?: string;
    typeCast?: boolean;
}
export declare function getBySQL(url: string, options: GetFeatureBySQLParamater, kyOptions?: KyOptions): Promise<import("geojson").FeatureCollection<import("geojson").Geometry, import("geojson").GeoJsonProperties>>;
//# sourceMappingURL=data.d.ts.map