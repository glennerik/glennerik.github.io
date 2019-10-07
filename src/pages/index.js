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
    <p>Welcome to glennerik.no</p>
    <figure>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <figcaption>
        Yup, that's me <Strong />
      </figcaption>
    </figure>
  </Layout>
)

export default IndexPage
