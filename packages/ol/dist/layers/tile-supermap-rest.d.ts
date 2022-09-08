import { Tile as TileLayer } from "ol/layer";
import type { Projection } from "ol/proj";
import { TileImage } from "ol/source";
import type { Options as TileOptions } from "ol/source/TileImage";
import TileGrid from "ol/tilegrid/TileGrid";
export declare function getMeterPerMapUnit(mapUnit: string): number;
export declare function createTileGrid(extent: number[], origin?: number[], tileSize?: number): TileGrid;
export declare function createTileLayer(url: string, projection: Projection): TileLayer<TileSuperMapRest>;
export interface Options extends TileOptions {
    format?: string;
    layersID?: number;
    tileProxy?: string;
    dpi?: number;
    prjCoordSys?: {
        epsgCode: number;
    };
    transparent?: boolean;
    redirect?: boolean;
    cacheEnabled?: boolean;
    overlapDisplayed?: boolean;
    overlapDisplayedOptions?: Record<string, unknown>;
    tileversion?: string;
    extent?: number[];
}
export declare class TileSuperMapRest extends TileImage {
    private tileProxy;
    options: Options;
    private tileSetsIndex;
    private tempIndex;
    private origin;
    private requestParams;
    private tileSets;
    constructor(options: Options);
    get param(): string;
    get mapUrl(): string;
    setupTileGrid(): TileGrid;
    /**
     * @function  TileSuperMapRest.prototype.getAllRequestParams
     * @description 获取全部请求参数。
     */
    getAllRequestParams(): Record<string, any>;
    tileUrlFunctionSM(tileCoord: [number, number, number], pixelRatio: number, projection: Projection): string;
    setTileSetsInfo(tileSets: Record<string, Record<string, any>> | Array<Record<string, Record<string, any>>>): void;
    lastTilesVersion(): void;
    nextTilesVersion(): void;
    changeTilesVersion(): void;
    updateCurrentTileSetsIndex(index: number): void;
    mergeTileVersionParam(version: string): boolean;
}
//# sourceMappingURL=tile-supermap-rest.d.ts.map