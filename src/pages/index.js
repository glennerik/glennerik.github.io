import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Excl = () => (
  <span role="img" aria-label="exclamation mark">
    ❗️
  </span>
)
const Strong = () => (
  <span role="img" aria-label="exclamation mark">
    💪
  </span>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Helmet link={[{ rel: "canonical", href: "https://www.glennerik.no" }]} />
    <h1>
      <Excl /> YO <Excl />
    </h1>
    <figure>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <figcaption>
        Yup, that's me <Strong />
      </figcaption>
    </figure>
    <h2>Projects</h2>
    <ul>
      <li>
        <a
          target="_blank"
          href="https://www.krakenlyrics.com"
          rel="noopener noreferrer"
        >
          Kraken Lyrics
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://www.myip.info"
          rel="noopener noreferrer"
        >
          My IP
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://www.iplocation.info"
          rel="noopener noreferrer"
        >
          IP Location
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="http://www.ensjoveien31.no"
          rel="noopener noreferrer"
        >
          Ensjøveien 31
        </a>
      </li>
    </ul>

    <h2>Other Sources</h2>
    <ul>
      <li>
        <a
          target="_blank"
          href="https://www.instagram.com/glennerik.no"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </li>

      <li>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/glennerik/"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </li>

      <li>
        <a
          target="_blank"
          href="https://www.facebook.com/glenneriks"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </li>

      <li>
        <a
          target="_blank"
          href="https://twitter.com/glenneriks"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </li>

      <li>
        <a
          target="_blank"
          href="http://www.oafweb.org/"
          rel="noopener noreferrer"
        >
          Oslo Amatørastronomers Forening
        </a>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
