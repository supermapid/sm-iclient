import type { Point2D } from "./Point2D"

export interface Rectangle2D {
  bottom: number
  left: number
  right: number
  top: number
  leftBottom: Point2D
  rightTop: Point2D
}
