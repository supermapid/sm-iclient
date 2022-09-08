import type { FeatureCollection, MultiPolygon, Point, Polygon } from "geojson";
import type { Feature, Geometry } from "../types/response";
export declare const transformer: {
    POINT(geom: Geometry): Point;
    REGION(geom: Geometry): Polygon | MultiPolygon;
};
export declare function toGeoJSON(features: Feature[], typeCast?: boolean): FeatureCollection;
//# sourceMappingURL=transformer.d.ts.map