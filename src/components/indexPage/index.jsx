import React from "react"
import Image from "../image"
import Summary from "./Summary"

const WebDev = () => (
  <span role="img" aria-label="spiders web">
    🕸
  </span>
)

const GlennFig = () => (
  <figure className="image">
    <div style={{ width: `300px` }}>
      <Image />
    </div>
    <figcaption>
      Glenn-Erik Sandbakken <WebDev />
    </figcaption>
  </figure>
)

export { GlennFig, Summary }
