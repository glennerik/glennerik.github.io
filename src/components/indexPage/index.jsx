import React from "react"
import Image from "../image"

const WebDev = () => (
  <span role="img" aria-label="a spiders web">
    🕸
  </span>
)

export const GlennFig = () => (
  <figure className="image">
    <div style={{ width: `300px` }}>
      <Image />
    </div>
    <figcaption>
      Glenn-Erik Sandbakken <WebDev />
    </figcaption>
  </figure>
)

export const Summary = () => (
  <>
    <h2 className="subtitle is-size-3">Q &amp; A</h2>
    <div class="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>
              <abbr title="Question">Q</abbr>
            </th>
            <th>
              <abbr title="Answer">A</abbr>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Top three favorite animals</td>
            <td>
              <ol>
                <li>Birds</li>
                <li>Octopus</li>
                <li>Squirrel, Hedgehog, Human</li>
              </ol>
              <p>
                Hippos are also pretty cool, but not enough to make it to the
                top three. Cats are waaay way down on the list, propably all the
                way down on place 100 or beyond. Because they like to torture
                and kill little birds. Luckily birds have the Crows, who like to
                tease and annoy the crap out of cats.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
)
