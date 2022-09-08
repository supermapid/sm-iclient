import { range } from "radash";
import { parseString } from "../utils/type-cast";
// TODO: Rework later, so can accomodate multiple type and another geometry
export const transformer = {
    POINT(geom) {
        return { type: "Point", coordinates: [geom.points[0].x, geom.points[0].y] };
    },
    REGION(geom) {
        if (geom.parts.length === 1) {
            return { type: "Polygon", coordinates: [geom.points.map((p) => [p.x, p.y])] };
        }
        const multi = { type: "MultiPolygon", coordinates: [] };
        let i = 0;
        for (const p of geom.parts) {
            const pg = [
                geom.points.slice(i, i + p).map((c) => {
                    return [c.x, c.y];
                })
            ];
            i += p;
            multi.coordinates.push(pg);
        }
        return multi;
    }
};
export function toGeoJSON(features, typeCast = true) {
    const geojson = { type: "FeatureCollection", features: [] };
    for (const f of features) {
        const gt = f.geometry.type;
        // @ts-expect-error fix later for dynamic transformation
        const geom = transformer[gt](f.geometry);
        const prop = {};
        for (const i of range(0, f.fieldNames.length - 1)) {
            prop[f.fieldNames[i]] = typeCast ? parseString(f.fieldValues[i]) : f.fieldValues[i];
        }
        const feature = { type: "Feature", geometry: geom, properties: prop };
        geojson.features.push(feature);
    }
    return geojson;
}
