import { TileImage } from "ol/source"
import { getCenter, getWidth } from "ol/extent"
import type { Options } from "ol/source/TileImage"
import { Tile as TileLayer } from "ol/layer"
import type { Projection } from "ol/proj"
import { toSize } from "ol/size"
import TileGrid from "ol/tilegrid/TileGrid"
import BaseEvent from "ol/events/Event"

function getResolutions(extent: number[]) {
  const startResolution = getWidth(extent) / 256
  const resolutions = new Array<number>(22)
  for (let i = 0, ii = resolutions.length; i < ii; ++i) {
    resolutions[i] = startResolution / 2 ** i
  }
  return resolutions
}

const MAP_UNIT: Record<string, number> = {
  m: 1,
  degree: (Math.PI * 2 * 6378137) / 360,
  km: 1.0e-3,
  in: 1 / 2.5399999918e-2,
  ft: 0.3048
}

export function getMeterPerMapUnit(mapUnit: string) {
  return MAP_UNIT[mapUnit]
}

/**
 * @function Util.resolutionToScale
 * @description 通过分辨率计算比例尺。
 * @param {number} resolution - 分辨率。
 * @param {number} dpi - 屏幕分辨率。
 * @param {string} mapUnit - 地图单位。
 * @returns {number} 比例尺。
 */
function resolutionToScale(resolution: number, dpi: number, mapUnit: string) {
  const inchPerMeter = 1 / 0.0254
  // 地球半径。
  const meterPerMapUnit = getMeterPerMapUnit(mapUnit)
  const scale = 1 / (resolution * dpi * inchPerMeter * meterPerMapUnit)
  return scale
}

export function createTileGrid(extent: number[], origin?: number[], tileSize = 256) {
  return new TileGrid({
    resolutions: getResolutions(extent),
    tileSize,
    origin
  })
}

export function createOrthoLayer(url: string, projection: Projection) {
  const resolutions = getResolutions(projection.getExtent())
  const tileGrid = createTileGrid(resolutions, getCenter(projection.getExtent()))

  return new TileLayer({
    preload: Infinity,
    source: new TileSuperMapRest({
      url,
      wrapX: true,
      projection,
      tileGrid,
      format: "png",
      transparent: true
    })
  })
}

class TileChangeEvent extends BaseEvent {
  private value: Record<string, any>
  constructor(opt: { type: string; value: Record<string, any> }) {
    super(opt.type)
    this.value = opt.value
  }
}

interface TileSuperMapOptions extends Options {
  format?: string
  layersID?: number
  tileProxy?: string
  dpi?: number
  prjCoordSys?: {
    epsgCode: number
  }
  transparent?: boolean
  redirect?: boolean
  cacheEnabled?: boolean
  overlapDisplayed?: boolean
  overlapDisplayedOptions?: Record<string, unknown>
  tileversion?: string
  extent?: number[]
}

/**
 * @class TileSuperMapRest
 * @browsernamespace ol.source
 * @category iServer Map Tile
 * @classdesc SuperMap iServer TileImage 图层源。
 * @param {Object} options - 参数。
 * @param {string} options.url - 服务地址,例如: http://{ip}:{port}/iserver/services/map-world/rest/maps/World。
 * @param {ol.tilegrid.TileGrid} [options.tileGrid] - 瓦片网格对象。当不指定时，会通过 options.extent 或投影范围生成。
 * @param {boolean} [options.redirect = false] - 是否重定向。
 * @param {boolean} [options.transparent = true] - 瓦片是否透明。
 * @param {boolean} [options.cacheEnabled = true] - 是否使用服务端的缓存。
 * @param {Object} [options.prjCoordSys] - 请求的地图的坐标参考系统。当此参数设置的坐标系统不同于地图的原有坐标系统时， 系统会进行动态投影，并返回动态投影后的地图瓦片。例如：{"epsgCode":3857}。
 * @param {string} [options.layersID] - 获取进行切片的地图图层 ID，即指定进行地图切片的图层，可以是临时图层集，也可以是当前地图中图层的组合。
 * @param {boolean} [options.clipRegionEnabled = false] - 是否只地图只显示该区域覆盖的部分。true 表示地图只显示该区域覆盖的部分。
 * @param {ol.geom.Geometry} [options.clipRegion] - 地图显示裁剪的区域。是一个面对象，当 clipRegionEnabled = true 时有效，即地图只显示该区域覆盖的部分。
 * @param {boolean} [options.overlapDisplayed = false] - 地图对象在同一范围内时，是否重叠显示。如果为 true，则同一范围内的对象会直接压盖；如果为 false 则通过 overlapDisplayedOptions 控制对象不压盖显示。
 * @param {OverlapDisplayedOptions} [options.overlapDisplayedOptions] - 避免地图对象压盖显示的过滤选项，当 overlapDisplayed 为 false 时有效，用来增强对地图对象压盖时的处理。
 * @param {string} [options.tileversion] - 切片版本名称，_cache 为 true 时有效。
 * @param {string} [options.tileProxy] - 服务代理地址。
 * @param {string} [options.format = 'png'] - 瓦片表述类型，支持 "png" 、"webp"、"bmp" 、"jpg"、 "gif" 等图片类型。
 * @param {(NDVIParameter|HillshadeParameter)} [options.rasterfunction] - 栅格分析参数。
 * @extends {ol.source.TileImage}
 * @usage
 */
export class TileSuperMapRest extends TileImage {
  private tileProxy: string | undefined
  private options: TileSuperMapOptions
  private tileSetsIndex = -1
  private tempIndex = -1
  private dpi: number
  private mapUrl: string
  private origin: [number, number] | undefined
  private requestParams: Record<string, string>
  private tileSets: Record<string, Record<string, any>> | undefined

  constructor(options: TileSuperMapOptions) {
    options = options || {}
    options.attributions =
      options.attributions ||
      "Map Data <span>© <a href='http://support.supermap.com.cn/product/iServer.aspx' target='_blank'>SuperMap iServer</a></span> with <span>© <a href='https://iclient.supermap.io' target='_blank'>SuperMap iClient</a></span>"

    options.format = options?.format ?? "png"

    super({
      attributions: options.attributions,
      cacheSize: options.cacheSize,
      crossOrigin: options.crossOrigin,
      opaque: options.opaque,
      projection: options.projection,
      reprojectionErrorThreshold: options.reprojectionErrorThreshold,
      state: options.state,
      tileClass: options.tileClass,
      tileGrid: options.tileGrid,
      tileLoadFunction: options.tileLoadFunction,
      tilePixelRatio: options.tilePixelRatio,
      wrapX: options.wrapX !== undefined ? options.wrapX : false
      // cacheEnabled: options.cacheEnabled,
      // layersID: options.layersID
    })

    this.tileProxy = options.tileProxy

    this.options = options
    // 当前切片在切片集中的index
    // this.tileSetsIndex = -1
    // this.tempIndex = -1
    this.dpi = this.options?.dpi ?? 96
    this.options.cacheEnabled = !(this.options.cacheEnabled === false)

    this.requestParams = this.getAllRequestParams()
    this.mapUrl = `${options.url}/tileImate.${options.format}?${this.param}`
    this.tileGrid = this.options?.tileGrid ?? this.setupTileGrid()
    this.tileUrlFunction = this.tileUrlFunctionSM
  }

  get param() {
    return new URLSearchParams(this.requestParams).toString()
  }

  setupTileGrid() {
    if (this.options.extent) {
      return createTileGrid(this.options.extent)
    }

    if (this.projection == null) {
      throw new Error("missing projection")
    }

    if (this.projection.getCode() === "EPSG:3857") {
      this.options.extent = [-20037508.3427892, -20037508.3427892, 20037508.3427892, 20037508.3427892]

      return createTileGrid([-20037508.3427892, -20037508.3427892, 20037508.3427892, 20037508.3427892])
    }
    if (this.projection.getCode() === "EPSG:4326") {
      this.options.extent = [-180, -90, 180, 90]
      return createTileGrid([-180, -90, 180, 90])
    }

    throw new Error("Invalid tilegrid")
  }

  /**
   * @function  TileSuperMapRest.prototype.getAllRequestParams
   * @description 获取全部请求参数。
   */
  getAllRequestParams() {
    const params: Record<string, any> = {}

    params.redirect = this.options?.redirect ?? false
    params.transparent = this.options?.transparent ?? true
    params.cacheEnabled = this.options.cacheEnabled
    params._cache = params.cacheEnabled

    // 设置切片原点
    if (this.origin) {
      params.origin = JSON.stringify({
        x: this.origin[0],
        y: this.origin[1]
      })
    }

    if (this.options.prjCoordSys) {
      params.prjCoordSys = JSON.stringify(this.options.prjCoordSys)
    }

    if (this.options.layersID) {
      params.layersID = this.options.layersID.toString()
    }

    // if (this.options.clipRegion instanceof Geometry) {
    //   this.options.clipRegionEnabled = true
    //   this.options.clipRegion = Util.toSuperMapGeometry(new GeoJSON().writeGeometryObject(options.clipRegion))
    //   this.options.clipRegion = CommonUtil.toJSON(ServerGeometry.fromGeometry(options.clipRegion))
    //   params.clipRegionEnabled = options.clipRegionEnabled
    //   params.clipRegion = JSON.stringify(options.clipRegion)
    // }

    if (!this.options.overlapDisplayed) {
      params.overlapDisplayed = false
      if (this.options.overlapDisplayedOptions) {
        params.overlapDisplayedOptions = JSON.stringify(this.options.overlapDisplayedOptions)
      }
    } else {
      params.overlapDisplayed = true
    }

    if (params.cacheEnabled && this.options.tileversion) {
      params.tileversion = this.options.tileversion.toString()
    }
    // if (options.rasterfunction) {
    //   params.rasterfunction = JSON.stringify(options.rasterfunction)
    // }

    return params
  }

  // /**
  //  * @function  TileSuperMapRest.prototype.createLayerUrl
  //  * @description 获取新建图层地址。
  //  */
  // createLayerUrl() {
  //   this.mapUrl = CommonUtil.urlAppend(layerUrl, CommonUtil.getParameterString(this.requestParams))
  //   // 为url添加安全认证信息片段
  //   this._layerUrl = SecurityManager.appendCredential(this._layerUrl)
  //   return this._layerUrl
  // }

  tileUrlFunctionSM(tileCoord: [number, number, number], pixelRatio: number, projection: Projection) {
    const z = tileCoord[0]
    const x = tileCoord[1]
    const y = tileCoord[2]

    const resolution = this.tileGrid!.getResolution(z)
    const unit = projection.getUnits() || "degree"

    const scale = resolutionToScale(resolution, this.options.dpi!, unit)
    const tileSize = toSize(this.tileGrid!.getTileSize(z))

    let url =
      this.mapUrl + encodeURI(`&x=${x}&y=${y}&width=${tileSize[0]}&height=${tileSize[1]}&scale=${scale}`)

    if (!this.options.cacheEnabled) {
      url += `&_t=${new Date().getTime()}`
    }
    return url
  }

  /**
   * @function  TileSuperMapRest.prototype.setTileSetsInfo
   * @description 设置瓦片集信息。
   * @param {Object} tileSets - 瓦片集合。
   */
  setTileSetsInfo(tileSets: Record<string, any> | Array<Record<string, any>>) {
    if (Array.isArray(tileSets)) {
      this.tileSets = tileSets[0]
    }

    this.tileSets = tileSets

    if (!this.tileSets) {
      return
    }
    // this.dispatchEvent({
    //   type: "tilesetsinfoloaded",
    //   value: {
    //     tileVersions: this.tileSets.tileVersions
    //   }
    // })

    this.dispatchEvent(
      new TileChangeEvent({
        type: "tileversionschanged",
        value: {
          tileVersion: this.tileSets.tileVersions
        }
      })
    )
    this.changeTilesVersion()
  }

  /**
   * @function  TileSuperMapRest.prototype.lastTilesVersion
   * @description 请求上一个版本切片，并重新绘制。
   */
  lastTilesVersion() {
    this.tempIndex = this.tileSetsIndex - 1
    this.changeTilesVersion()
  }

  /**
   * @function  TileSuperMapRest.prototype.nextTilesVersion
   * @description 请求下一个版本切片，并重新绘制。
   */
  nextTilesVersion() {
    this.tempIndex = this.tileSetsIndex + 1
    this.changeTilesVersion()
  }

  /**
   * @function  TileSuperMapRest.prototype.changeTilesVersion
   * @description 切换到某一版本的切片，并重绘。通过 this.tempIndex 保存需要切换的版本索引。
   */
  changeTilesVersion() {
    // 切片版本集信息是否存在
    if (this.tileSets == null) {
      return
    }
    if (this.tempIndex === this.tileSetsIndex || this.tempIndex < 0) {
      return
    }
    // 检测index是否可用
    const tileVersions = this.tileSets.tileVersions
    if (tileVersions && this.tempIndex < tileVersions.length && this.tempIndex >= 0) {
      const name = tileVersions[this.tempIndex].name
      const result = this.mergeTileVersionParam(name)
      if (result) {
        this.tileSetsIndex = this.tempIndex

        this.dispatchEvent(
          new TileChangeEvent({
            type: "tileversionschanged",
            value: {
              tileVersion: tileVersions[this.tempIndex]
            }
          })
        )
      }
    }
  }

  /**
   * @function  TileSuperMapRest.prototype.updateCurrentTileSetsIndex
   * @description 更新当前切片集索引，目前主要提供给控件使用。
   * @param {number} index - 索引号。
   */
  updateCurrentTileSetsIndex(index: number) {
    this.tempIndex = index
  }

  /**
   * @function  TileSuperMapRest.prototype.mergeTileVersionParam
   * @description 更改 URL 请求参数中的切片版本号，并重绘。
   * @param {Object} version - 版本信息。
   * @returns {boolean} 是否成功。
   */
  mergeTileVersionParam(version: string) {
    if (version) {
      this.requestParams.tileversion = version
      this.requestParams = this.getAllRequestParams()
      this.mapUrl = `${this.options.url}/tileImate.${this.options.format}?${this.param}`
      this.refresh()
      return true
    }
    return false
  }
}
