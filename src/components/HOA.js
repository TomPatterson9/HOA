import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export function Hoa() {
  return       <StaticImage
  src="../images/hoa.png"
  alt="background"
  style={{ position: "absolute", zIndex: -1 }}
/>
}